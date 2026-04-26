import 'server-only'

import {unstable_cache} from 'next/cache'

type ProtocolMarketStats = {
  identities: number
  tvl: number
  updatedAt?: string
  volumeAllTime: number
}

type ProtocolMetricKey = 'identities' | 'tvl' | 'volumeAllTime'

export type HomeProtocolStats = {
  identities: string
  status: 'ok' | 'stale' | 'fallback'
  tvl: string
  updatedAt?: string
  volumeAllTime: string
}

const HOME_PROTOCOL_STATS_ENDPOINT =
  'https://scan.verus.cx/api/market/protocol'
const HOME_PROTOCOL_STATS_REVALIDATE_SECONDS = 15 * 60
const HOME_PROTOCOL_STATS_TIMEOUT_MS = 3000
const fallbackHomeProtocolStats: HomeProtocolStats = {
  identities: '41k+',
  status: 'fallback',
  tvl: '$27M+',
  volumeAllTime: '$726M+',
}

let lastKnownHomeProtocolStats: HomeProtocolStats | undefined

function readProtocolMetric(
  body: Record<string, unknown>,
  key: ProtocolMetricKey
) {
  const value = body[key]

  if (typeof value !== 'number' || !Number.isFinite(value) || value < 0) {
    throw new Error(`Protocol market response is missing ${key}`)
  }

  return value
}

function parseProtocolMarketStats(value: unknown): ProtocolMarketStats {
  if (!value || typeof value !== 'object') {
    throw new Error('Protocol market response was not an object')
  }

  const body = value as Record<string, unknown>
  const updatedAt = body.updatedAt

  return {
    identities: readProtocolMetric(body, 'identities'),
    tvl: readProtocolMetric(body, 'tvl'),
    updatedAt: typeof updatedAt === 'string' ? updatedAt : undefined,
    volumeAllTime: readProtocolMetric(body, 'volumeAllTime'),
  }
}

function formatCompactMetric(value: number, prefix = '') {
  const wholeValue = Math.floor(value)
  const units = [
    {value: 1_000_000_000, suffix: 'B'},
    {value: 1_000_000, suffix: 'M'},
    {value: 1_000, suffix: 'k'},
  ] as const
  const unit = units.find((item) => wholeValue >= item.value)

  if (!unit) {
    return `${prefix}${wholeValue.toLocaleString('en-US')}+`
  }

  return `${prefix}${Math.floor(wholeValue / unit.value).toLocaleString(
    'en-US'
  )}${unit.suffix}+`
}

function formatHomeProtocolStats(
  stats: ProtocolMarketStats
): HomeProtocolStats {
  return {
    identities: formatCompactMetric(stats.identities),
    status: 'ok',
    tvl: formatCompactMetric(stats.tvl, '$'),
    updatedAt: stats.updatedAt,
    volumeAllTime: formatCompactMetric(stats.volumeAllTime, '$'),
  }
}

async function fetchHomeProtocolStats() {
  const response = await fetch(HOME_PROTOCOL_STATS_ENDPOINT, {
    cache: 'no-store',
    headers: {
      Accept: 'application/json',
    },
    signal: AbortSignal.timeout(HOME_PROTOCOL_STATS_TIMEOUT_MS),
  })

  if (!response.ok) {
    throw new Error(`Protocol market API responded with ${response.status}`)
  }

  return parseProtocolMarketStats(await response.json())
}

const getCachedHomeProtocolStats = unstable_cache(
  fetchHomeProtocolStats,
  ['home-protocol-market-stats'],
  {
    revalidate: HOME_PROTOCOL_STATS_REVALIDATE_SECONDS,
    tags: ['home-protocol-market-stats'],
  }
)

export async function getHomeProtocolStats(): Promise<HomeProtocolStats> {
  try {
    const stats = formatHomeProtocolStats(await getCachedHomeProtocolStats())
    lastKnownHomeProtocolStats = stats

    return stats
  } catch (error) {
    console.error('Error fetching homepage protocol stats:', error)

    if (lastKnownHomeProtocolStats) {
      return {
        ...lastKnownHomeProtocolStats,
        status: 'stale',
      }
    }

    return {...fallbackHomeProtocolStats}
  }
}
