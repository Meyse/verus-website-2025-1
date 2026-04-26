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
    logo?: string | null
    name?: string | null
    symbol?: string | null
  } | null
  tokenPrices?: AlchemyTokenPrice[] | null
}

type AlchemyTokensResponse = {
  data?: {
    tokens?: AlchemyToken[]
    pageKey?: string | null
  }
}

export type BridgeContractHolding = {
  address?: string
  balance: number
  name: string
  priceUsd?: number
  symbol: string
  type: 'native' | 'erc20' | 'dsr'
  valueUsd?: number
}

export type BridgeContractMetrics = {
  address: string
  etherscanUrl: string
  ethBalance?: number
  ethValueUsd?: number
  holdings: BridgeContractHolding[]
  tokenHoldingsUsd?: number
  tokenCount?: number
  totalValueUsd?: number
  unlistedTokenCount?: number
  updatedAt: number
  status: 'ok' | 'partial' | 'stale' | 'unavailable'
}

const ALCHEMY_NETWORK = 'eth-mainnet'
const ALCHEMY_REVALIDATE_SECONDS = 60 * 60
const MAX_ALCHEMY_PAGES = 10
const MIN_UNKNOWN_TOKEN_VALUE_USD = 10
const DAI_SAVINGS_RATE_CONTRACT_ADDRESS =
  '0x197E90f9FAD81970bA7976f33CbD77088E5D7cf7'
const ETHEREUM_RPC_NETWORK_URL = 'https://eth-mainnet.g.alchemy.com/v2'
const MAKER_POT_PIE_SELECTOR = '0x0bebac86'
const MAKER_POT_CHI_SELECTOR = '0xc92aecc4'
const RAY = BigInt(10) ** BigInt(27)
const KNOWN_BRIDGE_TOKEN_SYMBOLS = new Set([
  'BAT',
  'BRIDGE',
  'BRIDGEVETH',
  'CHIPS',
  'CRVUSD',
  'DAI',
  'ETH',
  'EURC',
  'KAIJU',
  'LINK',
  'MKR',
  'PAXG',
  'PEAS',
  'PEPECOIN',
  'PURE',
  'SCRVUSD',
  'SWITCH',
  'TBTC',
  'TRAC',
  'THUSD',
  'USDC',
  'USDT',
  'VARRR',
  'VBRID',
  'VRSC',
  'VRSCTEST',
  'WBTC',
  'XAUT',
])
const KNOWN_BRIDGE_TOKEN_ADDRESSES = new Set([
  '0x02f92800f57bcd74066f5709f1daa1a4302df875',
  '0x0655977feb2f289a4ab78af67bab0d17aab84367',
  '0x0d8775f648430679a709e98d2b0cb6250d2887ef',
  '0x18084fba666a33d37592fa2633fd49a74dd93a88',
  '0x1abaea1f7c830bd89acc67ec4af516284b1bc33c',
  '0x2260fac5e5542a773aa44fbcfedf7c193bc2c599',
  '0x45804880de22913dafe09f4980848ece6ecbaf78',
  '0x514910771af9ca656af840dff83e8264ecf986ca',
  '0x68749665ff8d2d112fa859aa293f07a622782f38',
  '0x6b175474e89094c44da98b954eedeac495271d0f',
  '0x9f8f72aa9304c8b593d555f12ef6589cc3a579a2',
  '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48',
  '0xa9e8acf069c58aec8825542845fd754e41a9489a',
  '0xbc2738ba63882891094c99e59a02141ca1a1c36a',
  '0xdac17f958d2ee523a2206206994597c13d831ec7',
  '0xe6052dcc60573561ecef2d9a4c0fea6d3ac5b9a2',
  '0xf939e0a03fb07f59a73314e73794be0e57ac1b4e',
])

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
  holdings: [],
  updatedAt: Date.now(),
  status,
})

const getAlchemyTokensUrl = (apiKey: string) =>
  `https://api.g.alchemy.com/data/v1/${encodeURIComponent(apiKey)}/assets/tokens/by-address`

const getAlchemyRpcUrl = (apiKey: string) =>
  `${ETHEREUM_RPC_NETWORK_URL}/${encodeURIComponent(apiKey)}`

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

function encodeAddressParameter(address: string) {
  return address.toLowerCase().replace(/^0x/, '').padStart(64, '0')
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

function normalizeSymbol(value?: string | null) {
  return value?.replace(/[^a-z0-9]/gi, '').toUpperCase() ?? ''
}

function getTokenSymbol(token: AlchemyToken) {
  if (isNativeToken(token)) return 'ETH'

  const symbol = token.tokenMetadata?.symbol?.trim()
  return symbol || 'Token'
}

function getTokenName(token: AlchemyToken) {
  if (isNativeToken(token)) return 'Ethereum'

  const name = token.tokenMetadata?.name?.trim()
  return name || getTokenSymbol(token)
}

function isRecognizedBridgeHolding(token: AlchemyToken, valueUsd?: number) {
  if (isNativeToken(token)) return true

  const address = token.tokenAddress?.toLowerCase()
  if (
    address &&
    KNOWN_BRIDGE_TOKEN_ADDRESSES.has(address) &&
    valueUsd !== undefined &&
    valueUsd >= MIN_UNKNOWN_TOKEN_VALUE_USD
  ) {
    return true
  }

  const symbol = normalizeSymbol(getTokenSymbol(token))
  if (
    KNOWN_BRIDGE_TOKEN_SYMBOLS.has(symbol) &&
    valueUsd !== undefined &&
    valueUsd >= MIN_UNKNOWN_TOKEN_VALUE_USD
  ) {
    return true
  }

  return valueUsd !== undefined && valueUsd >= MIN_UNKNOWN_TOKEN_VALUE_USD
}

async function fetchEthereumCall(
  apiKey: string,
  to: string,
  data: string
): Promise<bigint> {
  const response = await fetch(getAlchemyRpcUrl(apiKey), {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      jsonrpc: '2.0',
      id: 'ethereum-bridge-contract-call',
      method: 'eth_call',
      params: [{to, data}, 'latest'],
    }),
  })

  if (!response.ok) {
    throw new Error(`Alchemy RPC responded with ${response.status}`)
  }

  const body = (await response.json()) as {
    error?: {message?: string}
    result?: string
  }

  if (body.error) {
    throw new Error(body.error.message ?? 'Alchemy RPC call failed')
  }

  if (!body.result || !isHexBalance(body.result)) {
    throw new Error('Alchemy RPC response did not include a hex result')
  }

  return BigInt(body.result)
}

async function fetchDaiSavingsRateBalance(apiKey: string) {
  const [pie, chi] = await Promise.all([
    fetchEthereumCall(
      apiKey,
      DAI_SAVINGS_RATE_CONTRACT_ADDRESS,
      `${MAKER_POT_PIE_SELECTOR}${encodeAddressParameter(
        ETHEREUM_BRIDGE_CONTRACT_ADDRESS
      )}`
    ),
    fetchEthereumCall(
      apiKey,
      DAI_SAVINGS_RATE_CONTRACT_ADDRESS,
      MAKER_POT_CHI_SELECTOR
    ),
  ])

  const daiWad = (pie * chi) / RAY
  const daiBalance = rawUnitsToNumber(daiWad, 18)

  return daiBalance && daiBalance > 0 ? daiBalance : undefined
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

    const [tokens, daiSavingsRateBalance] = await Promise.all([
      fetchAlchemyBridgeTokens(env.ALCHEMY_API_KEY),
      fetchDaiSavingsRateBalance(env.ALCHEMY_API_KEY),
    ])

    return {tokens, daiSavingsRateBalance}
  },
  ['ethereum-bridge-contract-alchemy-data'],
  {
    revalidate: ALCHEMY_REVALIDATE_SECONDS,
    tags: ['ethereum-bridge-contract-metrics'],
  }
)

function buildMetricsFromAlchemyTokens(
  tokens: AlchemyToken[],
  daiSavingsRateBalance?: number
): BridgeContractMetrics {
  let ethBalance: number | undefined
  let ethValueUsd: number | undefined
  const holdings: BridgeContractHolding[] = []
  let tokenHoldingsUsd = 0
  let pricedTokenCount = 0
  let tokenCount = 0
  let unlistedTokenCount = 0

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

      if (balance > 0) {
        holdings.push({
          balance,
          name: getTokenName(token),
          priceUsd: price,
          symbol: getTokenSymbol(token),
          type: 'native',
          valueUsd,
        })
      }

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

    if (isRecognizedBridgeHolding(token, valueUsd)) {
      holdings.push({
        address: token.tokenAddress ?? undefined,
        balance,
        name: getTokenName(token),
        priceUsd: price,
        symbol: getTokenSymbol(token),
        type: 'erc20',
        valueUsd,
      })
    } else {
      unlistedTokenCount += 1
    }
  }

  if (daiSavingsRateBalance !== undefined) {
    holdings.push({
      address: DAI_SAVINGS_RATE_CONTRACT_ADDRESS,
      balance: daiSavingsRateBalance,
      name: 'Dai Savings Rate',
      priceUsd: 1,
      symbol: 'DAI',
      type: 'dsr',
      valueUsd: daiSavingsRateBalance,
    })
  }

  holdings.sort((left, right) => {
    const valueDifference = (right.valueUsd ?? -1) - (left.valueUsd ?? -1)
    if (valueDifference !== 0) return valueDifference

    return left.symbol.localeCompare(right.symbol)
  })

  const hasTokenValue = pricedTokenCount > 0
  const daiSavingsRateValueUsd = daiSavingsRateBalance
  const tokenValue =
    hasTokenValue || daiSavingsRateValueUsd !== undefined
      ? tokenHoldingsUsd + (daiSavingsRateValueUsd ?? 0)
      : undefined
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
    holdings,
    tokenHoldingsUsd: tokenValue,
    tokenCount,
    totalValueUsd,
    unlistedTokenCount,
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
    const metrics = buildMetricsFromAlchemyTokens(
      tokens.tokens,
      tokens.daiSavingsRateBalance
    )

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
