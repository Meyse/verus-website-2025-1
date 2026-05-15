import 'server-only'

import {env} from '@/configs/env'

export const PROJECTS_REGISTRY_URL = env.PROJECTS_REGISTRY_URL
export const PROJECTS_REGISTRY_REPO_URL = env.PROJECTS_REGISTRY_REPO_URL
export const PROJECTS_REGISTRY_BRANCH = env.PROJECTS_REGISTRY_BRANCH

function appendPath(baseUrl: string, path: string) {
  return new URL(
    path,
    baseUrl.endsWith('/') ? baseUrl : `${baseUrl}/`
  ).toString()
}

export function getProjectYamlSourceUrl(slug: string) {
  return appendPath(
    PROJECTS_REGISTRY_REPO_URL,
    `blob/${PROJECTS_REGISTRY_BRANCH}/projects/${slug}/project.yaml`
  )
}
