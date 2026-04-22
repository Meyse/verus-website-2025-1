import 'server-only'

import IdentityJSON from '@/data/vdxfid/identityJSON'

import {HexToBase64, isBase64url} from '../utils'
import {arweave} from './arweave'
import {buildQuery} from './build_query'

type ArweaveEdge = {
  node: {
    id: string
    tags: {name: string; value: string}[]
  }
}

const publicVdxfid = IdentityJSON.public.vdxfid

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

      const query = buildQuery(ownerAddress)
      const apiResult = await arweave.api.post('/graphql', query)

      if (!apiResult.ok) {
        const status =
          typeof apiResult.status === 'number' ? `${apiResult.status} ` : ''
        throw new Error(`API error: ${status}${apiResult.statusText}`)
      }
      console.log(apiResult.data.data.transactions)
      const ownerResult = apiResult.data.data.transactions
        .edges as ArweaveEdge[]

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

        // Last resort - WSrNhh1VQ_c18hHKhATXw0wEWoMoeaYiYcGkvNNYNfk for cragorn's specific case
        const knownTxs = ownerResult.find(
          (edge: ArweaveEdge) =>
            edge.node.id === 'WSrNhh1VQ_c18hHKhATXw0wEWoMoeaYiYcGkvNNYNfk'
        )
        if (knownTxs) {
          console.log('queryArweaveAddress: Using known data transaction')
          return 'WSrNhh1VQ_c18hHKhATXw0wEWoMoeaYiYcGkvNNYNfk'
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
