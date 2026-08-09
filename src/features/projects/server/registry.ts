import type {Project} from '../types'

import {z} from 'zod'

import {
  validateProjectAssetFilename,
  validateProjectAssetPath,
} from '../asset-validation'
import {ProjectYAMLSchema} from '../validation'

export const PROJECTS_REGISTRY_MAX_BYTES = 4 * 1024 * 1024
export const PROJECTS_REGISTRY_MAX_PROJECTS = 250

const GithubDataSchema = z
  .object({
    forks: z.number().int().min(0).max(1_000_000_000),
    languages: z
      .array(z.string().min(1).max(64))
      .max(50)
      .refine((languages) => new Set(languages).size === languages.length),
    lastCommit: z
      .string()
      .max(64)
      .refine(
        (value) => value === '' || Number.isFinite(Date.parse(value)),
        'Invalid last commit timestamp'
      ),
    license: z.string().max(128).nullable(),
    stars: z.number().int().min(0).max(1_000_000_000),
  })
  .strict()

const RegistryEnvelopeSchema = z
  .object({
    generatedAt: z
      .string()
      .max(64)
      .refine(
        (value) => Number.isFinite(Date.parse(value)),
        'Invalid registry timestamp'
      ),
    projects: z.array(z.unknown()).max(PROJECTS_REGISTRY_MAX_PROJECTS),
    schemaVersion: z.literal(1),
  })
  .strict()

const RegistryProjectSchema = ProjectYAMLSchema.extend({
  assetPath: z.string().max(128),
  featuredImage: z.string().max(100).nullable().optional(),
  github: GithubDataSchema.nullable(),
  logo: z.string().max(100).nullable().optional(),
}).strict()

function resolveRegistryAssetBaseUrl(
  registryUrl: string,
  project: Project,
  assetPath: string
) {
  const safeAssetPath = validateProjectAssetPath(assetPath, project.slug)
  if (!safeAssetPath) return null

  const registry = new URL(registryUrl)
  const assetBaseUrl = new URL(`${safeAssetPath}/`, registry)
  if (
    registry.protocol !== 'https:' ||
    assetBaseUrl.protocol !== 'https:' ||
    assetBaseUrl.origin !== registry.origin
  ) {
    return null
  }

  return assetBaseUrl.toString().replace(/\/$/, '')
}

function normalizeRegistryProject(
  value: unknown,
  registryUrl: string
): Project | null {
  const parsed = RegistryProjectSchema.safeParse(value)
  if (!parsed.success) return null

  const featuredImage = validateProjectAssetFilename(
    parsed.data.featuredImage,
    'featured'
  )
  const logo = validateProjectAssetFilename(parsed.data.logo, 'logo')
  const screenshots = (parsed.data.screenshots || [])
    .map((filename) => validateProjectAssetFilename(filename, 'screenshot'))
    .filter((filename): filename is string => filename !== null)

  if (
    (parsed.data.featuredImage && !featuredImage) ||
    (parsed.data.logo && !logo) ||
    screenshots.length !== (parsed.data.screenshots || []).length
  ) {
    return null
  }

  const {assetPath, ...projectData} = parsed.data
  const project: Project = {
    ...projectData,
    featuredImage,
    logo: logo || undefined,
    maintainer: parsed.data.maintainer || 'Verus community',
    screenshots,
  }
  const assetBaseUrl = resolveRegistryAssetBaseUrl(
    registryUrl,
    project,
    assetPath
  )
  if (!assetBaseUrl) return null

  return {...project, assetBaseUrl}
}

export function normalizeRegistryPayload(
  value: unknown,
  registryUrl: string
): Project[] {
  const envelope = RegistryEnvelopeSchema.parse(value)
  const projects = envelope.projects
    .map((project) => normalizeRegistryProject(project, registryUrl))
    .filter((project): project is Project => project !== null)
  const seenSlugs = new Set<string>()

  for (const project of projects) {
    if (seenSlugs.has(project.slug)) {
      throw new Error(`Registry contains duplicate slug: ${project.slug}`)
    }
    seenSlugs.add(project.slug)
  }

  return projects.sort((a, b) => a.name.localeCompare(b.name))
}

export async function readBoundedRegistryJson(
  response: Response,
  maximumBytes = PROJECTS_REGISTRY_MAX_BYTES
) {
  const declaredLength = Number(response.headers.get('content-length'))
  if (Number.isFinite(declaredLength) && declaredLength > maximumBytes) {
    throw new Error(`Registry response exceeds ${maximumBytes} bytes`)
  }
  if (!response.body) throw new Error('Registry response body is missing')

  const reader = response.body.getReader()
  const decoder = new TextDecoder('utf-8', {fatal: true})
  let text = ''
  let totalBytes = 0

  try {
    while (true) {
      const {done, value} = await reader.read()
      if (done) break
      totalBytes += value.byteLength
      if (totalBytes > maximumBytes) {
        await reader.cancel()
        throw new Error(`Registry response exceeds ${maximumBytes} bytes`)
      }
      text += decoder.decode(value, {stream: true})
    }
    text += decoder.decode()
  } finally {
    reader.releaseLock()
  }

  return JSON.parse(text) as unknown
}
