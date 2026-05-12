import type {Project} from './types'

export function getProjectAssetSrc(project: Project, filename: string) {
  if (!project.assetBaseUrl) return null

  return `${project.assetBaseUrl.replace(/\/$/, '')}/${filename}`
}

export function getProjectFeaturedImageSrc(project: Project) {
  if (!project.featuredImage) return null

  return getProjectAssetSrc(project, project.featuredImage)
}
