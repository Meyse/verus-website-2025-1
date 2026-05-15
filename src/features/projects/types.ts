export const PROJECT_CATEGORIES = [
  'wallet',
  'app',
  'dashboard',
  'tool',
  'other',
] as const

export type ProjectCategory = (typeof PROJECT_CATEGORIES)[number]

export const VERUS_FEATURES = [
  'VerusID',
  'Currencies',
  'DeFi',
  'Cross-chain',
  'Zero-knowledge privacy',
  'Marketplace',
  'Data',
  'PBaaS-chain',
  'Staking',
  'Mining',
] as const

export type VerusFeature = (typeof VERUS_FEATURES)[number]

export interface GitHubData {
  forks: number
  languages: string[]
  lastCommit: string
  license: string | null
  stars: number
}

export interface ProjectYAML {
  category: ProjectCategory
  description: string
  docsUrl?: string
  longDescription: string
  maintainer?: string
  name: string
  repoUrl?: string
  screenshots?: string[]
  slug: string
  verusFeatures: VerusFeature[]
  websiteUrl?: string
}

export interface Project extends ProjectYAML {
  assetBaseUrl?: string
  featuredImage?: string | null
  github: GitHubData | null
  logo?: string
  maintainer: string
  screenshots: string[]
}
