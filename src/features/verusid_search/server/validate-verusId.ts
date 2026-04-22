'use server'

import {unstable_cache} from 'next/cache'

import {fetchVerusId} from './fetch_verus_id'

const FIFTEEN_MINUTES = 15 * 60

export const validateVerusId = unstable_cache(
  async (verusId: string) => {
    return await fetchVerusId(verusId)
  },
  ['verusId'],
  {revalidate: FIFTEEN_MINUTES, tags: ['verusId']}
)
