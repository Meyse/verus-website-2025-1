import assert from 'node:assert/strict'
import test from 'node:test'

import {CONTENT_SECURITY_POLICY} from '@/configs/content-security-policy'

import {
  normalizeRegistryPayload,
  PROJECTS_REGISTRY_MAX_PROJECTS,
  readBoundedRegistryJson,
} from './registry'

const registryUrl = 'https://meyse.github.io/verus-projects/projects.json'

function project(overrides: Record<string, unknown> = {}) {
  return {
    assetPath: 'projects/safe-project',
    category: 'app',
    description: 'A safe project',
    featuredImage: null,
    github: null,
    logo: null,
    longDescription: 'Safe project text',
    maintainer: 'Safe maintainer',
    name: 'Safe project',
    screenshots: [],
    slug: 'safe-project',
    verusFeatures: ['VerusID'],
    ...overrides,
  }
}

function envelope(projects: unknown[] = [project()]) {
  return {
    generatedAt: '2026-08-08T12:00:00.000Z',
    projects,
    schemaVersion: 1,
  }
}

void test('normalizes a valid bounded registry', () => {
  const projects = normalizeRegistryPayload(envelope(), registryUrl)
  assert.equal(projects.length, 1)
  assert.equal(
    projects[0]?.assetBaseUrl,
    'https://meyse.github.io/verus-projects/projects/safe-project'
  )
})

void test('drops invalid records without trusting generated fields', () => {
  const projects = normalizeRegistryPayload(
    envelope([
      project(),
      project({assetPath: '../outside', slug: 'bad-path'}),
      project({name: 'Unknown field', slug: 'unknown', unexpected: true}),
      project({github: {forks: -1}}),
    ]),
    registryUrl
  )
  assert.deepEqual(
    projects.map(({slug}) => slug),
    ['safe-project']
  )
})

void test('rejects duplicate slugs and invalid envelopes', () => {
  assert.throws(
    () =>
      normalizeRegistryPayload(envelope([project(), project()]), registryUrl),
    /duplicate slug/
  )
  assert.throws(
    () =>
      normalizeRegistryPayload({...envelope(), schemaVersion: 2}, registryUrl),
    /schemaVersion/
  )
  assert.throws(
    () =>
      normalizeRegistryPayload(
        envelope(
          Array.from({length: PROJECTS_REGISTRY_MAX_PROJECTS + 1}, (_, index) =>
            project({
              slug: `project-${index}`,
              assetPath: `projects/project-${index}`,
            })
          )
        ),
        registryUrl
      ),
    /Too big/
  )
})

void test('bounds registry response bytes using headers and streamed data', async () => {
  await assert.rejects(
    readBoundedRegistryJson(
      new Response('{}', {headers: {'content-length': '100'}}),
      10
    ),
    /exceeds 10 bytes/
  )
  await assert.rejects(
    readBoundedRegistryJson(new Response('123456'), 5),
    /exceeds 5 bytes/
  )

  const parsed = await readBoundedRegistryJson(
    new Response(JSON.stringify(envelope())),
    4096
  )
  assert.deepEqual(parsed, envelope())
})

void test('CSP blocks external scripts, frames, objects, and event handlers', () => {
  assert.match(CONTENT_SECURITY_POLICY, /default-src 'self'/)
  assert.match(CONTENT_SECURITY_POLICY, /script-src 'self' 'unsafe-inline'/)
  assert.match(CONTENT_SECURITY_POLICY, /script-src-attr 'none'/)
  assert.match(CONTENT_SECURITY_POLICY, /frame-ancestors 'none'/)
  assert.match(CONTENT_SECURITY_POLICY, /frame-src 'none'/)
  assert.match(CONTENT_SECURITY_POLICY, /object-src 'none'/)
  assert.doesNotMatch(CONTENT_SECURITY_POLICY, /script-src[^;]*https:/)
})
