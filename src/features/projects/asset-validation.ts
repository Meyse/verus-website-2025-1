export const PROJECT_SLUG_PATTERN = /^[a-z0-9]+(?:-[a-z0-9]+)*$/

type ProjectAssetKind = 'featured' | 'logo' | 'screenshot'

const projectAssetFilenamePatterns: Record<ProjectAssetKind, RegExp> = {
  featured: /^featured\.(?:png|jpg|webp)$/,
  logo: /^logo\.(?:png|jpg|webp)$/,
  screenshot: /^screenshot[1-6]\.(?:png|jpg|webp)$/,
}

export function validateProjectAssetFilename(
  filename: string | undefined | null,
  kind?: ProjectAssetKind
) {
  if (!filename) return null

  const trimmed = filename.trim()
  if (
    !trimmed ||
    trimmed.includes('..') ||
    trimmed.includes('/') ||
    trimmed.includes('\\')
  ) {
    return null
  }

  if (kind) {
    return projectAssetFilenamePatterns[kind].test(trimmed) ? trimmed : null
  }

  return Object.values(projectAssetFilenamePatterns).some((pattern) =>
    pattern.test(trimmed)
  )
    ? trimmed
    : null
}

export function validateProjectAssetPath(
  assetPath: string | undefined | null,
  slug: string
) {
  if (!PROJECT_SLUG_PATTERN.test(slug)) return null

  const expectedPath = `projects/${slug}`
  if (!assetPath) return expectedPath

  const normalizedPath = assetPath.trim().replace(/\/+$/, '')

  return normalizedPath === expectedPath ? expectedPath : null
}
