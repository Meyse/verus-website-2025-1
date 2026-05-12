import {z} from 'zod'

import {PROJECT_CATEGORIES, VERUS_FEATURES} from './types'

const allowedProtocols = ['https:', 'http:']
const blockedUrlPatterns = [
  /^javascript:/i,
  /^data:/i,
  /^vbscript:/i,
  /^file:/i,
]
const slugPattern = /^[a-z0-9]+(?:-[a-z0-9]+)*$/

export function validateExternalUrl(url: string | undefined | null) {
  if (!url) return null

  const trimmed = url.trim()
  if (!trimmed) return null

  if (blockedUrlPatterns.some((pattern) => pattern.test(trimmed))) {
    return null
  }

  try {
    const parsed = new URL(trimmed)

    if (!allowedProtocols.includes(parsed.protocol) || !parsed.hostname) {
      return null
    }

    return trimmed
  } catch {
    return null
  }
}

export function validateGitHubUrl(url: string | undefined | null) {
  const validatedUrl = validateExternalUrl(url)
  if (!validatedUrl) return null

  try {
    const parsed = new URL(validatedUrl)
    const pathParts = parsed.pathname.split('/').filter(Boolean)
    const isGithubHost =
      parsed.hostname === 'github.com' || parsed.hostname === 'www.github.com'

    if (!isGithubHost || pathParts.length < 2) {
      return null
    }

    return validatedUrl
  } catch {
    return null
  }
}

const SafeUrlSchema = z
  .string()
  .refine((url) => validateExternalUrl(url) !== null, {
    message: 'Invalid or unsafe URL',
  })

const GitHubUrlSchema = z
  .string()
  .refine((url) => validateGitHubUrl(url) !== null, {
    message: 'Invalid GitHub repository URL',
  })

export const ProjectYAMLSchema = z.object({
  category: z.enum(PROJECT_CATEGORIES),
  description: z
    .string()
    .min(1, 'Description is required')
    .max(220, 'Description must be 220 characters or less'),
  docsUrl: SafeUrlSchema.optional(),
  longDescription: z
    .string()
    .min(1, 'Long description is required')
    .max(10000, 'Long description must be 10000 characters or less'),
  maintainer: z
    .string()
    .max(100, 'Maintainer must be 100 characters or less')
    .optional(),
  name: z
    .string()
    .min(1, 'Name is required')
    .max(80, 'Name must be 80 characters or less'),
  repoUrl: GitHubUrlSchema.optional(),
  screenshots: z
    .array(
      z.string().max(100, 'Screenshot filename must be 100 characters or less')
    )
    .max(6, 'Maximum 6 screenshots allowed')
    .optional(),
  slug: z
    .string()
    .min(1, 'Slug is required')
    .max(60, 'Slug must be 60 characters or less')
    .regex(slugPattern, 'Slug must be lowercase alphanumeric with hyphens'),
  verusFeatures: z.array(z.enum(VERUS_FEATURES)).min(1),
  websiteUrl: SafeUrlSchema.optional(),
})

export type ValidatedProjectYAML = z.infer<typeof ProjectYAMLSchema>

export function validateProjectYAML(data: unknown, filename: string) {
  const result = ProjectYAMLSchema.safeParse(data)

  if (!result.success) {
    const errors = result.error.issues
      .map((issue) => `  - ${issue.path.join('.')}: ${issue.message}`)
      .join('\n')

    throw new Error(`Invalid project YAML in ${filename}:\n${errors}`)
  }

  return result.data
}

export function validateSlug(slug: string) {
  const normalized = slug.toLowerCase().trim()

  if (
    !slugPattern.test(normalized) ||
    normalized.includes('..') ||
    normalized.includes('/') ||
    normalized.includes('\\')
  ) {
    return null
  }

  return normalized
}
