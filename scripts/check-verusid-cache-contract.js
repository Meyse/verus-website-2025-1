const {readFileSync} = require('node:fs')
const {join} = require('node:path')

const root = join(__dirname, '..')

function read(path) {
  return readFileSync(join(root, path), 'utf8')
}

function assert(condition, message) {
  if (!condition) {
    throw new Error(message)
  }
}

function sectionBetween(source, startMarker, endMarker) {
  const start = source.indexOf(startMarker)
  assert(start !== -1, `Missing marker: ${startMarker}`)

  const end = endMarker ? source.indexOf(endMarker, start) : source.length
  assert(end !== -1, `Missing marker: ${endMarker}`)

  return source.slice(start, end)
}

function parseTransientStatusCodes(source) {
  const match = source.match(
    /TRANSIENT_STATUS_CODES\s*=\s*new Set\(\[([^\]]+)\]\)/
  )
  assert(match, 'Missing TRANSIENT_STATUS_CODES declaration')

  return new Set(
    match[1]
      .split(',')
      .map((value) => Number(value.trim()))
      .filter((value) => !Number.isNaN(value))
  )
}

const profileCache = read(
  'src/features/verusid_search/server/get_verus_profile_info.ts'
)
const arweaveContent = read(
  'src/features/verusid_search/server/get_arweave_content.ts'
)
const arweaveTx = read(
  'src/features/verusid_search/lib/arweave/query_arweave_txid.ts'
)

const cachedProfileSection = sectionBetween(
  profileCache,
  'const getCachedVerusProfile = unstable_cache(',
  'export async function getVerusProfile'
)
assert(
  !/\bcatch\s*\(/.test(cachedProfileSection),
  'getCachedVerusProfile must not catch transient errors inside unstable_cache'
)

const profileWrapper = sectionBetween(
  profileCache,
  'export async function getVerusProfile',
  ''
)
assert(
  /\bcatch\s*\(/.test(profileWrapper) &&
    /return undefined/.test(profileWrapper),
  'getVerusProfile must catch transient cache misses outside unstable_cache'
)

const cachedContentSection = sectionBetween(
  arweaveContent,
  'const getCachedArweaveContent = unstable_cache(',
  'export async function getArweaveContent'
)
assert(
  !/\bcatch\s*\(/.test(cachedContentSection),
  'getCachedArweaveContent must not catch transient errors inside unstable_cache'
)

const contentWrapper = sectionBetween(
  arweaveContent,
  'export async function getArweaveContent',
  ''
)
assert(
  /\bcatch\s*\(/.test(contentWrapper) &&
    /error:\s*'Failed to fetch content'/.test(contentWrapper),
  'getArweaveContent must catch outside unstable_cache and return a generic public error'
)
assert(
  !/error instanceof Error/.test(contentWrapper),
  'getArweaveContent must not expose raw error messages to users'
)

const transientStatuses = parseTransientStatusCodes(arweaveTx)
assert(
  transientStatuses.has(404),
  'Arweave gateway 404 responses must be treated as transient'
)
assert(
  /catch\s*\(error\)\s*{[\s\S]*throw error/.test(arweaveTx),
  'queryArweaveTransaction must rethrow transient errors for the outer cache wrapper'
)

console.log('VerusID cache contract checks passed')
