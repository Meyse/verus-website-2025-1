import 'server-only'

import {unstable_cache} from 'next/cache'

import {env} from '@/configs/env'

import {
  ETHEREUM_BRIDGE_CONTRACT_ADDRESS,
  ETHEREUM_BRIDGE_CONTRACT_URL,
} from '../constants'

type AlchemyTokenPrice = {
  currency?: string
  value?: string
}

type AlchemyToken = {
  tokenAddress?: string | null
  tokenBalance?: string | null
  tokenMetadata?: {
    decimals?: number | null
  } | null
  tokenPrices?: AlchemyTokenPrice[] | null
}

type AlchemyTokensResponse = {
  data?: {
    tokens?: AlchemyToken[]
    pageKey?: string | null
  }
}

export type BridgeContractMetrics = {
  address: string
  etherscanUrl: string
  ethBalance?: number
  ethValueUsd?: number
  tokenHoldingsUsd?: number
  tokenCount?: number
  totalValueUsd?: number
  updatedAt: number
  status: 'ok' | 'partial' | 'stale' | 'unavailable'
}

const ALCHEMY_NETWORK = 'eth-mainnet'
const ALCHEMY_REVALIDATE_SECONDS = 60 * 60
const MAX_ALCHEMY_PAGES = 10

let lastKnownBridgeContractMetrics: BridgeContractMetrics | undefined

const isHexBalance = (value: string) => /^0x[0-9a-f]+$/i.test(value)
const isIntegerBalance = (value: string) => /^\d+$/.test(value)
const isDecimalBalance = (value: string) => /^\d+(?:\.\d+)?$/.test(value)
const isNativeToken = (token: AlchemyToken) =>
  token.tokenAddress === null || token.tokenAddress === undefined

const baseBridgeContractMetrics = (
  status: BridgeContractMetrics['status']
): BridgeContractMetrics => ({
  address: ETHEREUM_BRIDGE_CONTRACT_ADDRESS,
  etherscanUrl: ETHEREUM_BRIDGE_CONTRACT_URL,
  updatedAt: Date.now(),
  status,
})

const getAlchemyTokensUrl = (apiKey: string) =>
  `https://api.g.alchemy.com/data/v1/${encodeURIComponent(apiKey)}/assets/tokens/by-address`

function getTokenDecimals(token: AlchemyToken) {
  const decimals = token.tokenMetadata?.decimals

  if (typeof decimals === 'number' && Number.isInteger(decimals)) {
    return decimals
  }

  return isNativeToken(token) ? 18 : undefined
}

function rawUnitsToNumber(rawUnits: bigint, decimals?: number) {
  if (decimals === undefined || decimals <= 0) {
    const value = Number(rawUnits.toString())
    return Number.isFinite(value) ? value : undefined
  }

  const divisor = BigInt(10) ** BigInt(decimals)
  const whole = rawUnits / divisor
  const fraction = rawUnits % divisor

  if (fraction === BigInt(0)) {
    const value = Number(whole.toString())
    return Number.isFinite(value) ? value : undefined
  }

  const fractionText = fraction
    .toString()
    .padStart(decimals, '0')
    .replace(/0+$/, '')
  const value = Number(`${whole.toString()}.${fractionText}`)

  return Number.isFinite(value) ? value : undefined
}

function parseTokenBalance(token: AlchemyToken) {
  const balance = token.tokenBalance?.trim()

  if (!balance) {
    return undefined
  }

  const decimals = getTokenDecimals(token)

  if (isHexBalance(balance)) {
    return rawUnitsToNumber(BigInt(balance), decimals)
  }

  if (isIntegerBalance(balance) && decimals !== undefined) {
    return rawUnitsToNumber(BigInt(balance), decimals)
  }

  if (isDecimalBalance(balance)) {
    const value = Number(balance)
    return Number.isFinite(value) ? value : undefined
  }

  return undefined
}

function getUsdPrice(token: AlchemyToken) {
  const usdPrice = token.tokenPrices?.find(
    (price) => price.currency?.toLowerCase() === 'usd'
  )

  if (!usdPrice?.value) {
    return undefined
  }

  const value = Number(usdPrice.value)
  return Number.isFinite(value) ? value : undefined
}

async function fetchAlchemyBridgeTokens(apiKey: string) {
  const tokens: AlchemyToken[] = []
  let pageKey: string | undefined

  for (let page = 0; page < MAX_ALCHEMY_PAGES; page += 1) {
    const response = await fetch(getAlchemyTokensUrl(apiKey), {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        addresses: [
          {
            address: ETHEREUM_BRIDGE_CONTRACT_ADDRESS,
            networks: [ALCHEMY_NETWORK],
          },
        ],
        withMetadata: true,
        withPrices: true,
        includeNativeTokens: true,
        includeErc20Tokens: true,
        ...(pageKey ? {pageKey} : {}),
      }),
    })

    if (!response.ok) {
      throw new Error(`Alchemy responded with ${response.status}`)
    }

    const data = (await response.json()) as AlchemyTokensResponse
    const pageTokens = data.data?.tokens

    if (!Array.isArray(pageTokens)) {
      throw new Error('Alchemy response did not include token data')
    }

    tokens.push(...pageTokens)

    if (!data.data?.pageKey) {
      return tokens
    }

    pageKey = data.data.pageKey
  }

  throw new Error(`Alchemy pagination exceeded ${MAX_ALCHEMY_PAGES} pages`)
}

const getCachedAlchemyBridgeTokens = unstable_cache(
  async () => {
    if (!env.ALCHEMY_API_KEY) {
      throw new Error('ALCHEMY_API_KEY is not configured')
    }

    return fetchAlchemyBridgeTokens(env.ALCHEMY_API_KEY)
  },
  ['ethereum-bridge-contract-alchemy-tokens'],
  {
    revalidate: ALCHEMY_REVALIDATE_SECONDS,
    tags: ['ethereum-bridge-contract-metrics'],
  }
)

function buildMetricsFromAlchemyTokens(
  tokens: AlchemyToken[]
): BridgeContractMetrics {
  let ethBalance: number | undefined
  let ethValueUsd: number | undefined
  let tokenHoldingsUsd = 0
  let pricedTokenCount = 0
  let tokenCount = 0

  for (const token of tokens) {
    const balance = parseTokenBalance(token)

    if (balance === undefined) {
      continue
    }

    const price = getUsdPrice(token)
    const valueUsd = price === undefined ? undefined : balance * price

    if (isNativeToken(token)) {
      ethBalance = balance
      ethValueUsd = valueUsd
      continue
    }

    if (balance <= 0) {
      continue
    }

    tokenCount += 1

    if (valueUsd !== undefined) {
      tokenHoldingsUsd += valueUsd
      pricedTokenCount += 1
    }
  }

  const hasTokenValue = pricedTokenCount > 0
  const tokenValue = hasTokenValue ? tokenHoldingsUsd : undefined
  const totalValueUsd =
    ethValueUsd !== undefined || tokenValue !== undefined
      ? (ethValueUsd ?? 0) + (tokenValue ?? 0)
      : undefined
  const status =
    totalValueUsd !== undefined
      ? 'ok'
      : ethBalance !== undefined || tokenCount > 0
        ? 'partial'
        : 'unavailable'

  return {
    address: ETHEREUM_BRIDGE_CONTRACT_ADDRESS,
    etherscanUrl: ETHEREUM_BRIDGE_CONTRACT_URL,
    ethBalance,
    ethValueUsd,
    tokenHoldingsUsd: tokenValue,
    tokenCount,
    totalValueUsd,
    updatedAt: Date.now(),
    status,
  }
}

export async function getBridgeContractMetrics(): Promise<BridgeContractMetrics> {
  if (!env.ALCHEMY_API_KEY) {
    return baseBridgeContractMetrics('unavailable')
  }

  try {
    const tokens = await getCachedAlchemyBridgeTokens()
    const metrics = buildMetricsFromAlchemyTokens(tokens)

    lastKnownBridgeContractMetrics = metrics

    return metrics
  } catch (error) {
    console.error('Error fetching Alchemy bridge contract metrics:', error)

    if (lastKnownBridgeContractMetrics) {
      return {
        ...lastKnownBridgeContractMetrics,
        status: 'stale',
      }
    }

    return baseBridgeContractMetrics('unavailable')
  }
}
