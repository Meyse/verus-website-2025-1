import 'server-only'

import {getScanProtocolStats} from '@/features/protocol/server/get-scan-protocol-stats'

type HomeProtocolMarketStats = {
  identities: number
  status: 'ok' | 'stale' | 'fallback'
  tvl: number
  updatedAt?: string
  volumeAllTime: number
}

export type HomeProtocolStats = {
  identities: string
  status: 'ok' | 'stale' | 'fallback'
  tvl: string
  updatedAt?: string
  volumeAllTime: string
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
  stats: HomeProtocolMarketStats
): HomeProtocolStats {
  return {
    identities: formatCompactMetric(stats.identities),
    status: stats.status,
    tvl: formatCompactMetric(stats.tvl, '$'),
    updatedAt: stats.updatedAt,
    volumeAllTime: formatCompactMetric(stats.volumeAllTime, '$'),
  }
}

export async function getHomeProtocolStats(): Promise<HomeProtocolStats> {
  return formatHomeProtocolStats(await getScanProtocolStats())
}
