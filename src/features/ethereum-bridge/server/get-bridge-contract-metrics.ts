import 'server-only'

import {
  ETHEREUM_BRIDGE_CONTRACT_ADDRESS,
  ETHEREUM_BRIDGE_CONTRACT_URL,
} from '../constants'

export type BridgeContractMetrics = {
  address: string
  etherscanUrl: string
  ethBalance?: number
  ethValueUsd?: number
  tokenHoldingsUsd?: number
  tokenCount?: number
  transactionCount?: number
  totalValueUsd?: number
  updatedAt: number
  status: 'ok' | 'partial' | 'unavailable'
}

const parseNumber = (value: string) => Number(value.replace(/[,\s]/g, ''))

const toPlainText = (html: string) =>
  html
    .replace(/<script[\s\S]*?<\/script>/gi, ' ')
    .replace(/<style[\s\S]*?<\/style>/gi, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&nbsp;|&#160;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/\s+/g, ' ')
    .trim()

function parseEtherscanAddressPage(html: string) {
  const text = toPlainText(html)

  const ethBalance = text.match(/ETH Balance\s+([\d,]+(?:\s*\.\s*\d+)?)\s+ETH/i)
  const ethValueUsd = text.match(/Eth Value\s+\$([\d,.]+)/i)
  const tokenHoldings = text.match(
    /Token Holdings\s+\$([\d,.]+)\s+\(([\d,]+)\s+Tokens?\)/i
  )
  const transactionCount = text.match(
    /Latest\s+\d+\s+from\s+a\s+total\s+of\s+([\d,]+)\s+transactions/i
  )

  const nativeValue = ethValueUsd ? parseNumber(ethValueUsd[1]) : undefined
  const tokenValue = tokenHoldings ? parseNumber(tokenHoldings[1]) : undefined

  return {
    ethBalance: ethBalance ? parseNumber(ethBalance[1]) : undefined,
    ethValueUsd: nativeValue,
    tokenHoldingsUsd: tokenValue,
    tokenCount: tokenHoldings ? parseNumber(tokenHoldings[2]) : undefined,
    transactionCount: transactionCount
      ? parseNumber(transactionCount[1])
      : undefined,
    totalValueUsd:
      nativeValue !== undefined && tokenValue !== undefined
        ? nativeValue + tokenValue
        : undefined,
  }
}

export async function getBridgeContractMetrics(): Promise<BridgeContractMetrics> {
  try {
    const response = await fetch(ETHEREUM_BRIDGE_CONTRACT_URL, {
      headers: {
        'User-Agent': 'verus.io bridge metrics',
      },
      next: {
        revalidate: 300,
      },
    })

    if (!response.ok) {
      throw new Error(`Etherscan responded with ${response.status}`)
    }

    const metrics = parseEtherscanAddressPage(await response.text())
    const hasCoreMetrics =
      metrics.ethBalance !== undefined ||
      metrics.tokenHoldingsUsd !== undefined ||
      metrics.totalValueUsd !== undefined

    return {
      address: ETHEREUM_BRIDGE_CONTRACT_ADDRESS,
      etherscanUrl: ETHEREUM_BRIDGE_CONTRACT_URL,
      ...metrics,
      updatedAt: Date.now(),
      status: hasCoreMetrics ? 'ok' : 'partial',
    }
  } catch (error) {
    console.error('Error fetching bridge contract metrics:', error)

    return {
      address: ETHEREUM_BRIDGE_CONTRACT_ADDRESS,
      etherscanUrl: ETHEREUM_BRIDGE_CONTRACT_URL,
      updatedAt: Date.now(),
      status: 'unavailable',
    }
  }
}
