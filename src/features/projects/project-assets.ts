import type {Project} from './types'

import {validateProjectAssetFilename} from './asset-validation'

export function getProjectAssetSrc(project: Project, filename: string) {
  if (!project.assetBaseUrl) return null

  const safeFilename = validateProjectAssetFilename(filename)
  if (!safeFilename) return null

  return `${project.assetBaseUrl.replace(/\/$/, '')}/${safeFilename}`
}

export function getProjectFeaturedImageSrc(project: Project) {
  if (!project.featuredImage) return null

  return getProjectAssetSrc(project, project.featuredImage)
}
