import 'server-only'

import {env} from '@/configs/env'

// Format hash rate to TH/s (terahashes per second)
function formatHashRate(hashrate: number): string {
  const terahash = hashrate / 1_000_000_000_000
  return `${terahash.toFixed(1)} TH/s`
}

// Format number with commas
function formatNumber(num: number): string {
  return num.toLocaleString()
}

export async function fetchMiningInfo() {
  try {
    const response = await fetch(env.VERUS_API, {
      method: 'POST',
      headers: {
        'Content-Type': 'text/plain',
      },
      body: JSON.stringify({
        jsonrpc: '2.0',
        id: 'curltest',
        method: 'getmininginfo',
        params: [],
      }),
      cache: 'no-store', // Use only one caching directive
    })

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    const json = await response.json()

    if (!json.result) {
      throw new Error('Invalid API response: missing result property')
    }

    const blocks =
      typeof json.result.blocks === 'number' &&
      Number.isFinite(json.result.blocks)
        ? json.result.blocks
        : null

    return {
      blocks: blocks === null ? 'N/A' : formatNumber(blocks),
      blocksValue: blocks,
      hashRate: formatHashRate(json.result.networkhashps),
      stakingSupply: `${formatNumber(Math.round(json.result.stakingsupply))} VRSC`,
      timestamp: Date.now(),
    }
  } catch (error) {
    console.error('Error fetching mining info:', error)

    return {
      error: 'Failed to retrieve mining info',
      blocks: 'N/A',
      blocksValue: null,
      hashRate: 'N/A',
      stakingSupply: 'N/A',
    }
  }
}
