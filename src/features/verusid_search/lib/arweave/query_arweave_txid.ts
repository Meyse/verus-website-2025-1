import 'server-only'

import {arweave} from './arweave'

const TRANSIENT_STATUS_CODES = new Set([404, 408, 425, 429])

const isPermanentMissStatus = (status?: number) =>
  typeof status === 'number' &&
  status >= 400 &&
  status < 500 &&
  !TRANSIENT_STATUS_CODES.has(status)

export const queryArweaveTransaction = async (txId: string) => {
  try {
    const response = await arweave.api.get(`/${txId}`)
    if (!response.ok) {
      const status =
        typeof response.status === 'number' ? response.status : undefined
      const statusPrefix = status ? `${status} ` : ''
      const message = `API txId info fetch error: ${statusPrefix}${response.statusText}`

      if (isPermanentMissStatus(status)) {
        console.error('queryArweaveTransaction:', message)
        return undefined
      }

      throw new Error(message)
    }
    //TODO: switch to using getData at somepoint. Currently causes error
    // const data = await arweave.transactions.getData(txId,{decode:true,string:true})
    return response.data
  } catch (error) {
    console.error('queryArweaveTransaction: Query error', error)
    throw error
  }
}
