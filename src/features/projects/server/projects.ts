import 'server-only'

import type {Project, ProjectCategory} from '../types'

import {ProjectYAMLSchema, validateSlug} from '../validation'
import {PROJECTS_REGISTRY_URL} from './config'

const REGISTRY_REVALIDATE_SECONDS = 86400
const FEATURED_ELIGIBLE_CATEGORIES: ProjectCategory[] = [
  'app',
  'dashboard',
  'wallet',
]

function isRecord(value: unknown): value is Record<string, unknown> {
  return value !== null && typeof value === 'object' && !Array.isArray(value)
}

function getOptionalString(value: unknown) {
  return typeof value === 'string' && value.length > 0 ? value : undefined
}

function resolveRegistryAssetBaseUrl(
  registryUrl: string,
  project: Project,
  assetPath: unknown
) {
  const rawPath = getOptionalString(assetPath) || `projects/${project.slug}`
  const normalizedPath = rawPath.endsWith('/') ? rawPath : `${rawPath}/`

  return new URL(normalizedPath, registryUrl).toString().replace(/\/$/, '')
}

function normalizeRegistryProject(
  item: unknown,
  registryUrl: string
): Project | null {
  if (!isRecord(item)) return null

  const parsed = ProjectYAMLSchema.safeParse(item)
  if (!parsed.success) return null

  const github = isRecord(item.github)
    ? {
        forks: typeof item.github.forks === 'number' ? item.github.forks : 0,
        languages: Array.isArray(item.github.languages)
          ? item.github.languages.filter(
              (language): language is string => typeof language === 'string'
            )
          : [],
        lastCommit:
          typeof item.github.lastCommit === 'string'
            ? item.github.lastCommit
            : '',
        license:
          typeof item.github.license === 'string' ? item.github.license : null,
        stars: typeof item.github.stars === 'number' ? item.github.stars : 0,
      }
    : null

  const project: Project = {
    ...parsed.data,
    featuredImage: getOptionalString(item.featuredImage) || null,
    github,
    logo: getOptionalString(item.logo),
    maintainer: parsed.data.maintainer || 'Verus community',
    screenshots: parsed.data.screenshots || [],
  }

  return {
    ...project,
    assetBaseUrl: resolveRegistryAssetBaseUrl(
      registryUrl,
      project,
      item.assetPath
    ),
  }
}

async function fetchRegistryProjects() {
  try {
    const response = await fetch(PROJECTS_REGISTRY_URL, {
      next: {revalidate: REGISTRY_REVALIDATE_SECONDS},
    })

    if (!response.ok) {
      throw new Error(`Registry request failed with ${response.status}`)
    }

    const registry = await response.json()

    if (!isRecord(registry) || !Array.isArray(registry.projects)) {
      throw new Error('Registry response is missing projects array')
    }

    const projects = registry.projects
      .map((project) =>
        normalizeRegistryProject(project, PROJECTS_REGISTRY_URL)
      )
      .filter((project): project is Project => project !== null)
      .sort((a, b) => a.name.localeCompare(b.name))

    return projects
  } catch (error) {
    console.error(
      'Failed to load remote projects registry:',
      error instanceof Error ? error.message : error
    )

    return []
  }
}

function randomShuffle<T>(items: T[]) {
  const result = [...items]

  for (let index = result.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1))
    const currentItem = result[index]
    result[index] = result[swapIndex]
    result[swapIndex] = currentItem
  }

  return result
}

export async function getAllProjects() {
  return fetchRegistryProjects()
}

export function getFeaturedProjects(projects: Project[]) {
  const eligibleProjects = projects.filter(
    (project) =>
      FEATURED_ELIGIBLE_CATEGORIES.includes(project.category) &&
      project.featuredImage
  )

  return randomShuffle(eligibleProjects).slice(0, 3)
}

export async function getProjectBySlug(slug: string) {
  const validSlug = validateSlug(slug)
  if (!validSlug) return null

  const registryProjects = await fetchRegistryProjects()
  const registryProject = registryProjects.find(
    (project) => project.slug === validSlug
  )

  return registryProject || null
}
