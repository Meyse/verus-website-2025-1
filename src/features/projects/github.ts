import type {GitHubData} from './types'

import {env} from '@/configs/env'

function getGitHubHeaders(): HeadersInit {
  const headers: HeadersInit = {
    Accept: 'application/vnd.github.v3+json',
    'User-Agent': 'Verus-Website',
  }

  if (env.GITHUB_TOKEN) {
    headers.Authorization = `Bearer ${env.GITHUB_TOKEN}`
  }

  return headers
}

export function parseGitHubUrl(url: string) {
  try {
    const parsed = new URL(url)
    const [owner, repo] = parsed.pathname.split('/').filter(Boolean)
    const isGithubHost =
      parsed.hostname === 'github.com' || parsed.hostname === 'www.github.com'

    if (!isGithubHost || !owner || !repo) return null

    return {
      owner,
      repo: repo.replace(/\.git$/, ''),
    }
  } catch {
    return null
  }
}

export async function fetchGitHubData(repoUrl?: string) {
  if (!repoUrl) return null

  const parsed = parseGitHubUrl(repoUrl)
  if (!parsed) return null

  const {owner, repo} = parsed
  const headers = getGitHubHeaders()

  try {
    const [repoResponse, languagesResponse] = await Promise.all([
      fetch(`https://api.github.com/repos/${owner}/${repo}`, {
        headers,
        next: {revalidate: 3600},
      }),
      fetch(`https://api.github.com/repos/${owner}/${repo}/languages`, {
        headers,
        next: {revalidate: 3600},
      }),
    ])

    if (!repoResponse.ok) {
      return null
    }

    const repoData = await repoResponse.json()
    const languagesData = languagesResponse.ok
      ? await languagesResponse.json()
      : {}

    return {
      forks: repoData.forks_count || 0,
      languages: Object.keys(languagesData),
      lastCommit: repoData.pushed_at || '',
      license: repoData.license?.spdx_id || null,
      stars: repoData.stargazers_count || 0,
    } satisfies GitHubData
  } catch (error) {
    console.error(`Failed to fetch GitHub data for ${owner}/${repo}:`, error)
    return null
  }
}
