import {env} from '@/configs/env'

type BreadcrumbItem = {
  name: string
  path: string
}

type CollectionPageSchema = {
  path: string
  name: string
  description: string
  mainEntity: Record<string, unknown>
}

type WebApplicationSchema = {
  name: string
  path: string
  description: string
  applicationCategory: string
  operatingSystem?: string | string[]
  featureList?: string[]
  sameAs?: string[]
  image?: string
  downloadUrl?: string | string[]
  codeRepository?: string | string[]
}

const baseUrl = env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'

export const siteUrl = baseUrl.trim().replace(/\/$/, '')
export const websiteId = `${siteUrl}/#website`
export const verusEntityId = `${siteUrl}/#verus`

export function absoluteUrl(path: string) {
  if (path.startsWith('http://') || path.startsWith('https://')) {
    return path
  }

  return `${siteUrl}${path.startsWith('/') ? path : `/${path}`}`
}

export function createSiteJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebSite',
        '@id': websiteId,
        name: 'Verus',
        url: absoluteUrl('/'),
        description:
          'The protocol where you own your identity, data, and money. Ownership, not just access.',
        inLanguage: 'en-US',
        publisher: {
          '@id': verusEntityId,
        },
      },
      {
        '@type': 'Organization',
        '@id': verusEntityId,
        name: 'Verus',
        alternateName: 'Verus Protocol',
        url: absoluteUrl('/'),
        logo: {
          '@type': 'ImageObject',
          url: absoluteUrl('/img/verus-logo-blue.svg'),
        },
        description:
          'Verus is a community-driven public blockchain protocol for self-sovereign identity, data, money, and scalable decentralized applications.',
        sameAs: [
          env.NEXT_PUBLIC_VERUS_GITHUB,
          env.NEXT_PUBLIC_VERUS_MEDIUM,
          env.NEXT_PUBLIC_VERUS_TWITTER,
          env.NEXT_PUBLIC_VERUS_TELEGRAM,
          env.NEXT_PUBLIC_VERUS_REDDIT,
          env.NEXT_PUBLIC_VERUS_FACEBOOK,
          env.NEXT_PUBLIC_VERUS_YOUTUBE,
        ],
      },
    ],
  }
}

export function createBreadcrumbJsonLd(items: BreadcrumbItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  }
}

export function createBuildBreadcrumbJsonLd(name: string, path: string) {
  return createBreadcrumbJsonLd([
    {name: 'Build', path: '/build'},
    {name, path},
  ])
}

export function createMediaBreadcrumbJsonLd(name: string, path: string) {
  return createBreadcrumbJsonLd([
    {name: 'Media', path: '/media'},
    {name, path},
  ])
}

export function createCollectionPageJsonLd({
  path,
  name,
  description,
  mainEntity,
}: CollectionPageSchema) {
  return {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    '@id': `${absoluteUrl(path)}#webpage`,
    url: absoluteUrl(path),
    name,
    description,
    inLanguage: 'en-US',
    isPartOf: {
      '@id': websiteId,
    },
    about: {
      '@id': verusEntityId,
    },
    publisher: {
      '@id': verusEntityId,
    },
    mainEntity,
  }
}

export function createWebApplicationJsonLd({
  name,
  path,
  description,
  applicationCategory,
  operatingSystem,
  featureList,
  sameAs,
  image,
  downloadUrl,
  codeRepository,
}: WebApplicationSchema) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    '@id': `${absoluteUrl(path)}#application`,
    name,
    url: absoluteUrl(path),
    description,
    applicationCategory,
    operatingSystem,
    featureList,
    sameAs,
    image,
    downloadUrl,
    codeRepository,
    publisher: {
      '@id': verusEntityId,
    },
  }
}

export function createSoftwareApplicationJsonLd({
  name,
  path,
  description,
  applicationCategory,
  operatingSystem,
  featureList,
  sameAs,
  image,
  downloadUrl,
  codeRepository,
}: WebApplicationSchema) {
  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    '@id': `${absoluteUrl(path)}#software`,
    name,
    url: absoluteUrl(path),
    description,
    applicationCategory,
    operatingSystem,
    featureList,
    sameAs,
    image,
    downloadUrl,
    codeRepository,
    publisher: {
      '@id': verusEntityId,
    },
  }
}
