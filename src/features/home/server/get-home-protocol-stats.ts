import 'server-only'

import {getScanProtocolStats} from '@/features/protocol/server/get-scan-protocol-stats'

type HomeProtocolMarketStats = {
  identities: number
  status: 'ok' | 'stale' | 'fallback'
  updatedAt?: string
}

export type HomeProtocolStats = {
  identities: string
  status: 'ok' | 'stale' | 'fallback'
  updatedAt?: string
}

function formatCompactMetric(value: number) {
  const wholeValue = Math.floor(value)
  const units = [
    {value: 1_000_000_000, suffix: 'B'},
    {value: 1_000_000, suffix: 'M'},
    {value: 1_000, suffix: 'k'},
  ] as const
  const unit = units.find((item) => wholeValue >= item.value)

  if (!unit) {
    return `${wholeValue.toLocaleString('en-US')}+`
  }

  return `${Math.floor(wholeValue / unit.value).toLocaleString(
    'en-US'
  )}${unit.suffix}+`
}

function formatHomeProtocolStats(
  stats: HomeProtocolMarketStats
): HomeProtocolStats {
  return {
    identities: formatCompactMetric(stats.identities),
    status: stats.status,
    updatedAt: stats.updatedAt,
  }
}

export async function getHomeProtocolStats(): Promise<HomeProtocolStats> {
  return formatHomeProtocolStats(await getScanProtocolStats())
}
