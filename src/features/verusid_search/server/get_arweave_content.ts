'use server'

import {unstable_cache} from 'next/cache'

import {queryArweaveTransaction} from '../lib/arweave/query_arweave_txid'

const TWELVE_HOURS = 12 * 60 * 60

const getCachedArweaveContent = unstable_cache(
  async (txid: string) => {
    const result = await queryArweaveTransaction(txid)
    // console.log('getArweaveContent', result)
    if (!result) {
      return {
        result: undefined,
        error: 'Failed to fetch content',
      }
    }

    return {result, error: undefined}
  },
  ['arweaveContent'],
  {revalidate: TWELVE_HOURS, tags: ['verusId']}
)

export async function getArweaveContent(txid: string) {
  try {
    return await getCachedArweaveContent(txid)
  } catch (error) {
    console.error('Error fetching Arweave content:', error)
    return {
      result: undefined,
      error: 'Failed to fetch content',
    }
  }
}

// export const  getArweaveContent = async (txid: string) => {
//   try {
//     const result = await queryArweaveTransaction(txid)
//     // console.log('getArweaveContent', result)
//     if (!result) {
//       return {
//         result: undefined,
//         error: 'Failed to fetch content',
//       }
//     }

//     return {result, error: undefined}
//   } catch (error) {
//     console.error('Error fetching Arweave content:', error)
//     return {
//       result: undefined,
//       // eslint-disable-next-line @typescript-eslint/no-explicit-any
//       error: (error as any)?.message || 'Failed to fetch content',
//     }
//   }
// }
