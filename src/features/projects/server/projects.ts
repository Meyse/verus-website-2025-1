import 'server-only'

import type {Project, ProjectCategory} from '../types'

import {validateSlug} from '../validation'
import {PROJECTS_REGISTRY_URL} from './config'
import {normalizeRegistryPayload, readBoundedRegistryJson} from './registry'

const REGISTRY_REVALIDATE_SECONDS = 86400
const REGISTRY_FETCH_TIMEOUT_MS = 10_000
const FEATURED_ELIGIBLE_CATEGORIES: ProjectCategory[] = [
  'app',
  'dashboard',
  'wallet',
]

async function fetchRegistryProjects() {
  try {
    const response = await fetch(PROJECTS_REGISTRY_URL, {
      next: {revalidate: REGISTRY_REVALIDATE_SECONDS},
      signal: AbortSignal.timeout(REGISTRY_FETCH_TIMEOUT_MS),
    })

    if (!response.ok) {
      throw new Error(`Registry request failed with ${response.status}`)
    }

    return normalizeRegistryPayload(
      await readBoundedRegistryJson(response),
      PROJECTS_REGISTRY_URL
    )
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
