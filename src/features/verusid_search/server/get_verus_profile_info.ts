'use server'

import type {VerusIdentity} from './fetch_verus_id'

import {unstable_cache} from 'next/cache'

import {fetchVerusProfile} from './fetch_verus_profile'

const FIVE_MINUTES = 5 * 60

const getCachedVerusProfile = unstable_cache(
  async (identity?: VerusIdentity) => {
    return await fetchVerusProfile(identity)
  },
  ['verus_profile_arweave'],
  {revalidate: FIVE_MINUTES, tags: ['verusId']}
)

export async function getVerusProfile(identity?: VerusIdentity) {
  try {
    return await getCachedVerusProfile(identity)
  } catch (error) {
    console.error('getVerusProfile: Failed to fetch Arweave profile', error)
    return undefined
  }
}
