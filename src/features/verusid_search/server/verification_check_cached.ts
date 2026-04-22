'use server'

import {unstable_cache} from 'next/cache'

import {verificationCheck} from './verification_check'

const FIVE_MINUTES = 5 * 60

export const verificationCheckCached = unstable_cache(
  async (data) => {
    return await verificationCheck(data)
  },
  ['verification_check'],
  {revalidate: FIVE_MINUTES, tags: ['verusId']}
)
