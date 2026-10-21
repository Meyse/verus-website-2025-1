import assert from 'node:assert/strict'
import {afterEach, test} from 'node:test'

import {queryArweaveAddress} from './query_arweave_address'

// Mike@'s Arweave wallet, as stored in the identity contentmap
const ownerHex =
  'f15f6545da235860ffe8fd89adef04121b89586631cbd82138cb120cc6986890'
const profileTxId = 'nbnbg92ztgZ3q7NKW-Ny45eHVak-lls44I8MsltjoMA'

const ownerTransactions = {
  data: {
    transactions: {
      edges: [
        {node: {id: 'u-zJfy2SZojb8xnIqPVx0-VqwGqXVRYkDMPoLF7rnDA', tags: []}},
        {
          node: {
            id: profileTxId,
            tags: [
              {name: 'iEXZ3nd4K9fmGDSiQ8J6XLATzUUSKp1eAz', value: '1'},
              {name: 'Type', value: 'manifest'},
            ],
          },
        },
      ],
    },
  },
}
const noTransactions = {data: {transactions: {edges: []}}}

const json = (body: unknown) =>
  new Response(JSON.stringify(body), {
    headers: {'content-type': 'application/json'},
  })
const badGateway = () => new Response('Bad gateway', {status: 502})

const realFetch = globalThis.fetch
afterEach(() => {
  globalThis.fetch = realFetch
})

function mockGraphql(respond: (host: string, call: number) => Response) {
  const hosts: string[] = []
  globalThis.fetch = (input: string | URL | Request) => {
    const url = new URL(input instanceof Request ? input.url : input)
    hosts.push(url.hostname)
    return Promise.resolve(respond(url.hostname, hosts.length))
  }
  return hosts
}

void test('finds the profile when the arweave.net owner index is empty', async () => {
  mockGraphql((host) =>
    host === 'arweave.net' ? json(noTransactions) : json(ownerTransactions)
  )

  assert.equal(await queryArweaveAddress(ownerHex), profileTxId)
})

void test('uses the next gateway when one gateway fails', async () => {
  const hosts = mockGraphql((_host, call) =>
    call === 1 ? badGateway() : json(ownerTransactions)
  )

  assert.equal(await queryArweaveAddress(ownerHex), profileTxId)
  assert.equal(hosts.length, 2)
})

void test('rejects when every gateway fails so the miss is not cached', async () => {
  mockGraphql(badGateway)

  await assert.rejects(queryArweaveAddress(ownerHex))
})
