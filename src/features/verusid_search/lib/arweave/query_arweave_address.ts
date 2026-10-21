import 'server-only'

import IdentityJSON from '@/data/vdxfid/identityJSON'

import {HexToBase64, isBase64url} from '../utils'
import {arweaveGraphqlGateways} from './arweave'
import {buildQuery} from './build_query'

type ArweaveEdge = {
  node: {
    id: string
    tags: {name: string; value: string}[]
  }
}

const publicVdxfid = IdentityJSON.public.vdxfid

// The Arweave client ignores its timeout setting, so abort hung gateways here
const GATEWAY_TIMEOUT_MS = 10000

// Try each gateway in order. An empty result can be an index gap, so it moves
// on to the next gateway too.
const queryOwnerTransactions = async (query: ReturnType<typeof buildQuery>) => {
  let lastError: Error | undefined

  for (const gateway of arweaveGraphqlGateways) {
    const host = gateway.api.config.host
    try {
      const apiResult = await gateway.api.post('/graphql', query, {
        signal: AbortSignal.timeout(GATEWAY_TIMEOUT_MS),
      })

      if (!apiResult.ok) {
        const status =
          typeof apiResult.status === 'number' ? `${apiResult.status} ` : ''
        throw new Error(`API error: ${status}${apiResult.statusText}`)
      }
      const edges = apiResult.data.data.transactions.edges as ArweaveEdge[]
      if (edges.length) return edges

      console.log(`queryArweaveAddress: No owner transactions on ${host}`)
    } catch (error) {
      console.error(`queryArweaveAddress: Query error on ${host}`, error)
      lastError = error instanceof Error ? error : new Error(String(error))
    }
  }

  // Rethrow so the outer cache wrapper does not store a gateway outage as a miss
  if (lastError) throw lastError
  return []
}

export const queryArweaveAddress = async (address: string) => {
  console.log(
    'queryArweaveAddress: Processing address',
    address,
    'with publicVdxfid',
    publicVdxfid
  )
  // Convert hex to base64url
  const ownerAddress = HexToBase64(address)
  if (isBase64url(ownerAddress)) {
    console.log('queryArweaveAddress: Valid base64url address', ownerAddress)

    try {
      console.log('queryArweaveAddress: Querying API for owner transactions')

      const ownerResult = await queryOwnerTransactions(buildQuery(ownerAddress))

      console.log(
        'queryArweaveAddress: Received owner query result',
        ownerResult.length
          ? `with ${ownerResult.length} transactions`
          : 'with no transactions'
      )

      // Process and find the right transaction
      if (ownerResult.length) {
        console.log(
          'queryArweaveAddress: Searching for transaction with tag:',
          publicVdxfid
        )

        // Look for a transaction with the publicVdxfid tag
        const matchingTx = ownerResult.find((edge) =>
          edge.node.tags.some(
            (tag) => tag.name === publicVdxfid && tag.value === '1'
          )
        )
        if (matchingTx) {
          console.log(
            'queryArweaveAddress: Found matching transaction:',
            matchingTx.node.id
          )
          return matchingTx.node.id
        }

        // If no exact match, try to find the manifest tx
        const manifestTxs = ownerResult.filter((edge: ArweaveEdge) =>
          edge.node.tags.some(
            (tag) => tag.name === 'Type' && tag.value === 'manifest'
          )
        )
        if (manifestTxs.length > 0) {
          console.log(
            'queryArweaveAddress: Found manifest transaction:',
            manifestTxs[0].node.id
          )
          return manifestTxs[0].node.id
        }

        console.log(
          'queryArweaveAddress: No transaction with matching address found'
        )
        return undefined
      } else {
        console.log(
          'queryArweaveAddress: No transactions found for owner: ',
          ownerAddress
        )
        return undefined
      }
    } catch (error) {
      console.error('queryArweaveAddress: Query error', error)
      throw error
    }
  }

  console.log(
    'queryArweaveAddress: Invalid base64url address from address',
    address
  )
  return undefined
}
