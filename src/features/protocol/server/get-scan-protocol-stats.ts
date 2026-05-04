import 'server-only'

import {unstable_cache} from 'next/cache'

export type ScanProtocolStats = {
  baskets: number
  currencies: number
  fees30d: number
  identities: number
  pbaasChains: number
  status: 'ok' | 'stale' | 'fallback'
  trades30d: number
  tradesAllTime: number
  tvl: number
  updatedAt?: string
  volume30d: number
  volumeAllTime: number
  vrscInPools: number
  vrscInPoolsUsd: number
  vrscPrice: number
}

type ParsedScanProtocolStats = Omit<ScanProtocolStats, 'status'>

const SCAN_PROTOCOL_STATS_ENDPOINT =
  'https://scan.verus.cx/api/market/protocol'
const SCAN_PROTOCOL_STATS_REVALIDATE_SECONDS = 6 * 60 * 60
const SCAN_PROTOCOL_STATS_TIMEOUT_MS = 3000

const fallbackScanProtocolStats: ParsedScanProtocolStats = {
  baskets: 26,
  currencies: 52,
  fees30d: 928,
  identities: 41400,
  pbaasChains: 4,
  trades30d: 120689,
  tradesAllTime: 2250198,
  tvl: 27191107,
  volume30d: 3713290,
  volumeAllTime: 727079024,
  vrscInPools: 12577382,
  vrscInPoolsUsd: 10030488,
  vrscPrice: 0.7975,
}

let lastKnownScanProtocolStats: ParsedScanProtocolStats | undefined

function readProtocolMetric(body: Record<string, unknown>, key: string) {
  const value = body[key]

  if (typeof value !== 'number' || !Number.isFinite(value) || value < 0) {
    throw new Error(`Scan protocol response is missing ${key}`)
  }

  return value
}

function parseScanProtocolStats(value: unknown): ParsedScanProtocolStats {
  if (!value || typeof value !== 'object') {
    throw new Error('Scan protocol response was not an object')
  }

  const body = value as Record<string, unknown>
  const updatedAt = body.updatedAt

  return {
    baskets: readProtocolMetric(body, 'baskets'),
    currencies: readProtocolMetric(body, 'currencies'),
    fees30d: readProtocolMetric(body, 'fees30d'),
    identities: readProtocolMetric(body, 'identities'),
    pbaasChains: readProtocolMetric(body, 'pbaasChains'),
    trades30d: readProtocolMetric(body, 'trades30d'),
    tradesAllTime: readProtocolMetric(body, 'tradesAllTime'),
    tvl: readProtocolMetric(body, 'tvl'),
    updatedAt: typeof updatedAt === 'string' ? updatedAt : undefined,
    volume30d: readProtocolMetric(body, 'volume30d'),
    volumeAllTime: readProtocolMetric(body, 'volumeAllTime'),
    vrscInPools: readProtocolMetric(body, 'vrscInPools'),
    vrscInPoolsUsd: readProtocolMetric(body, 'vrscInPoolsUsd'),
    vrscPrice: readProtocolMetric(body, 'vrscPrice'),
  }
}

async function fetchScanProtocolStats() {
  const response = await fetch(SCAN_PROTOCOL_STATS_ENDPOINT, {
    cache: 'no-store',
    headers: {
      Accept: 'application/json',
    },
    signal: AbortSignal.timeout(SCAN_PROTOCOL_STATS_TIMEOUT_MS),
  })

  if (!response.ok) {
    throw new Error(`Scan protocol API responded with ${response.status}`)
  }

  return parseScanProtocolStats(await response.json())
}

const getCachedScanProtocolStats = unstable_cache(
  fetchScanProtocolStats,
  ['scan-protocol-stats'],
  {
    revalidate: SCAN_PROTOCOL_STATS_REVALIDATE_SECONDS,
    tags: ['scan-protocol-stats'],
  }
)

export async function getScanProtocolStats(): Promise<ScanProtocolStats> {
  try {
    const stats = await getCachedScanProtocolStats()
    lastKnownScanProtocolStats = stats

    return {
      ...stats,
      status: 'ok',
    }
  } catch (error) {
    console.error('Error fetching Scan Verus protocol stats:', error)

    if (lastKnownScanProtocolStats) {
      return {
        ...lastKnownScanProtocolStats,
        status: 'stale',
      }
    }

    return {
      ...fallbackScanProtocolStats,
      status: 'fallback',
    }
  }
}
