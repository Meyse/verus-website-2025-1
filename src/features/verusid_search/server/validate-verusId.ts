'use server'

import {unstable_cache} from 'next/cache'

import {fetchVerusId} from './fetch_verus_id'

const FIFTEEN_MINUTES = 15 * 60

const getCachedVerusId = unstable_cache(
  async (verusId: string) => {
    return await fetchVerusId(verusId)
  },
  ['verusId'],
  {revalidate: FIFTEEN_MINUTES, tags: ['verusId']}
)

// VerusID names ignore ASCII letter case, so every spelling shares one cache
// entry. Other characters stay as typed.
export async function validateVerusId(verusId: string) {
  return getCachedVerusId(verusId.replace(/[A-Z]/g, (c) => c.toLowerCase()))
}
