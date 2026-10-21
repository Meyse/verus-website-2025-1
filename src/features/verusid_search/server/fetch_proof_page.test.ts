import assert from 'node:assert/strict'
import {afterEach, test} from 'node:test'

import {verusWebProof} from '../lib/utils'
import {fetchProofPage} from './fetch_proof_page'

// Mike@'s Reddit proof comment, as the profile links it and Reddit renders it
const proofUrl =
  'https://www.reddit.com/r/VerusCoin/comments/pywo85/comment/hex2q5v/'
const proof = {
  Message:
    'i4eJshMkii8ML6FCMEFUqj5GgVUchRvQca 1: controller of VerusID "mike@" controls miketout',
  Signature:
    'Ad0jGgABQR8U1+7Bn8DBDKTUtpbURBFOGUo60Kp200N6Y683Mh90Uw3oI02+1OcAZyXHR6nXjNB+mGiSrZpMRr4b22vd0Lq+',
}
const commentHtml = `<p>${proof.Message.replace(/"/g, '&quot;')}:${proof.Signature}</p>`

const realFetch = globalThis.fetch
afterEach(() => {
  globalThis.fetch = realFetch
})

const html = (body: string, status = 200) =>
  new Response(body, {status, headers: {'content-type': 'text/html'}})

// Reddit blocks servers from its JSON API and old.reddit.com, and serves
// normal pages as a script shell. Only the embed page includes the comment.
function mockReddit() {
  globalThis.fetch = (input: string | URL | Request) => {
    const url = new URL(input instanceof Request ? input.url : input)

    if (url.hostname === 'embed.reddit.com') {
      return Promise.resolve(html(`<html><body>${commentHtml}</body></html>`))
    }
    if (url.pathname.endsWith('.json') || url.hostname === 'old.reddit.com') {
      return Promise.resolve(
        html("You've been blocked by network security.", 403)
      )
    }
    return Promise.resolve(
      html('<html><title>Reddit</title><script></script></html>')
    )
  }
}

void test('fetches a Reddit proof although Reddit blocks its JSON API', async () => {
  mockReddit()

  const page = await fetchProofPage(proofUrl)

  assert.deepEqual(verusWebProof(page), proof)
})
