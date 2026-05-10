import 'server-only'

import type {ScanProtocolStats} from '@/features/protocol/server/get-scan-protocol-stats'

import {fetchBridgePrices} from '@/features/ethereum-bridge/server/fetch-bridge-prices'
import {getSupply} from '@/features/intro/server/get-supply'
import {getScanProtocolStats} from '@/features/protocol/server/get-scan-protocol-stats'
import {unstable_cache} from 'next/cache'

import {getMiningInfo} from './get-mining-info'

type NetworkStats = {
  avgBlockTime: number
  difficulty: number
  hashRate: number
  posRatio: number
  powRatio: number
  stakingSupply: number
}

type StatusStats = {
  addresses: number
  chainHeight: number
  connections: number
  conversionsTotal: number
  transactions: number
  updatedAt?: string
}

export type StatisticsData = {
  currentBlockHeight: string
  currentBlockHeightValue: number | null
  generatedAt: number
  market: ScanProtocolStats
  network: NetworkStats
  status: StatusStats
  supply: {
    circulatingSupply: number | null
    isEstimate: boolean
  }
  vrscPrice: number
}

const SCAN_API_BASE_URL = 'https://scan.verus.cx'
const STATISTICS_SCAN_REVALIDATE_SECONDS = 6 * 60 * 60
const STATISTICS_TIMEOUT_MS = 3000
const VRSC_PRICE_REVALIDATE_SECONDS = 5 * 60

const fallbackNetworkStats: NetworkStats = {
  avgBlockTime: 62,
  difficulty: 3674365268149,
  hashRate: 951199042982,
  posRatio: 0.507,
  powRatio: 0.493,
  stakingSupply: 22065054,
}

const fallbackStatusStats: StatusStats = {
  addresses: 2233085,
  chainHeight: 4046659,
  connections: 30,
  conversionsTotal: 2246087,
  transactions: 24826352,
}

let lastKnownNetworkStats: NetworkStats | undefined
let lastKnownStatusStats: StatusStats | undefined

function readNumber(body: Record<string, unknown>, key: string) {
  const value = body[key]

  if (typeof value !== 'number' || !Number.isFinite(value) || value < 0) {
    throw new Error(`Scan API response is missing ${key}`)
  }

  return value
}

function readOptionalDate(body: Record<string, unknown>, key: string) {
  const value = body[key]

  return typeof value === 'string' ? value : undefined
}

function parseNetworkStats(value: unknown): NetworkStats {
  if (!value || typeof value !== 'object') {
    throw new Error('Scan network response was not an object')
  }

  const body = value as Record<string, unknown>

  return {
    avgBlockTime: readNumber(body, 'avgBlockTime'),
    difficulty: readNumber(body, 'difficulty'),
    hashRate: readNumber(body, 'hashRate'),
    posRatio: readNumber(body, 'posRatio'),
    powRatio: readNumber(body, 'powRatio'),
    stakingSupply: readNumber(body, 'stakingSupply'),
  }
}

function parseStatusStats(value: unknown): StatusStats {
  if (!value || typeof value !== 'object') {
    throw new Error('Scan status response was not an object')
  }

  const body = value as Record<string, unknown>
  const verusd = body.verusd
  const data = body.data
  const indexer = body.indexer

  if (!verusd || typeof verusd !== 'object') {
    throw new Error('Scan status response is missing verusd')
  }

  if (!data || typeof data !== 'object') {
    throw new Error('Scan status response is missing data')
  }

  const verusdBody = verusd as Record<string, unknown>
  const dataBody = data as Record<string, unknown>
  const indexerBody =
    indexer && typeof indexer === 'object'
      ? (indexer as Record<string, unknown>)
      : {}

  return {
    addresses: readNumber(dataBody, 'addresses'),
    chainHeight: readNumber(verusdBody, 'chainHeight'),
    connections: readNumber(verusdBody, 'connections'),
    conversionsTotal: readNumber(dataBody, 'conversionsTotal'),
    transactions: readNumber(dataBody, 'transactions'),
    updatedAt: readOptionalDate(indexerBody, 'updatedAt'),
  }
}

async function fetchScanJson(path: string) {
  const response = await fetch(`${SCAN_API_BASE_URL}${path}`, {
    cache: 'no-store',
    headers: {
      Accept: 'application/json',
    },
    signal: AbortSignal.timeout(STATISTICS_TIMEOUT_MS),
  })

  if (!response.ok) {
    throw new Error(`Scan API ${path} responded with ${response.status}`)
  }

  return response.json()
}

const getCachedNetworkStats = unstable_cache(
  async () => parseNetworkStats(await fetchScanJson('/api/stats/network')),
  ['statistics-network-stats'],
  {
    revalidate: STATISTICS_SCAN_REVALIDATE_SECONDS,
    tags: ['statistics-network-stats'],
  }
)

const getCachedStatusStats = unstable_cache(
  async () => parseStatusStats(await fetchScanJson('/api/stats/status')),
  ['statistics-status-stats'],
  {
    revalidate: STATISTICS_SCAN_REVALIDATE_SECONDS,
    tags: ['statistics-status-stats'],
  }
)

const getCachedVRSCPrice = unstable_cache(
  async () => {
    const bridgeData = await fetchBridgePrices()
    const price = bridgeData.prices?.VRSC

    if (typeof price !== 'number' || !Number.isFinite(price) || price < 0) {
      throw new Error('VRSC price not available from Verus API')
    }

    return price
  },
  ['statistics-vrsc-price'],
  {
    revalidate: VRSC_PRICE_REVALIDATE_SECONDS,
    tags: ['statistics-vrsc-price'],
  }
)

async function getNetworkStats() {
  try {
    const stats = await getCachedNetworkStats()
    lastKnownNetworkStats = stats

    return stats
  } catch (error) {
    console.error('Error fetching scan network stats:', error)

    return lastKnownNetworkStats ?? fallbackNetworkStats
  }
}

async function getStatusStats() {
  try {
    const stats = await getCachedStatusStats()
    lastKnownStatusStats = stats

    return stats
  } catch (error) {
    console.error('Error fetching scan status stats:', error)

    return lastKnownStatusStats ?? fallbackStatusStats
  }
}

async function getVRSCPriceFromVerusApi() {
  try {
    return await getCachedVRSCPrice()
  } catch (error) {
    console.error('Error fetching VRSC price from Verus API:', error)

    return null
  }
}

export async function getStatisticsData(): Promise<StatisticsData> {
  const [market, network, status, supply, vrscPrice, miningInfo] =
    await Promise.all([
      getScanProtocolStats(),
      getNetworkStats(),
      getStatusStats(),
      getSupply(),
      getVRSCPriceFromVerusApi(),
      getMiningInfo(),
    ])

  const currentBlockHeightValue = miningInfo.blockHeightValue ?? status.chainHeight
  const currentBlockHeight =
    miningInfo.blockHeight === 'N/A'
      ? currentBlockHeightValue.toLocaleString('en-US')
      : miningInfo.blockHeight

  return {
    currentBlockHeight,
    currentBlockHeightValue,
    generatedAt: Date.now(),
    market,
    network,
    status,
    supply,
    vrscPrice: vrscPrice ?? market.vrscPrice,
  }
}
