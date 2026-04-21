import type {MetadataRoute} from 'next'

import {env} from '@/configs/env'

const baseUrl = env.NEXT_PUBLIC_BASE_URL

const sitemapRoutes = [
  {
    path: '/',
    lastModified: '2026-04-21',
    changeFrequency: 'weekly',
    priority: 1,
  },
  {
    path: '/build',
    lastModified: '2026-04-20',
    changeFrequency: 'monthly',
    priority: 0.7,
  },
  {
    path: '/build/start',
    lastModified: '2026-04-20',
    changeFrequency: 'monthly',
    priority: 0.7,
  },
  {
    path: '/build/defi-payments',
    lastModified: '2026-04-20',
    changeFrequency: 'monthly',
    priority: 0.7,
  },
  {
    path: '/build/marketplace',
    lastModified: '2026-04-20',
    changeFrequency: 'monthly',
    priority: 0.7,
  },
  {
    path: '/build/data',
    lastModified: '2026-04-20',
    changeFrequency: 'monthly',
    priority: 0.7,
  },
  {
    path: '/build/pbaas-chains',
    lastModified: '2026-04-20',
    changeFrequency: 'monthly',
    priority: 0.7,
  },
  {
    path: '/build/pbaas-currencies',
    lastModified: '2026-04-20',
    changeFrequency: 'monthly',
    priority: 0.7,
  },
  {
    path: '/build/verusid',
    lastModified: '2026-04-20',
    changeFrequency: 'monthly',
    priority: 0.7,
  },
  {
    path: '/community',
    lastModified: '2026-04-20',
    changeFrequency: 'monthly',
    priority: 0.7,
  },
  {
    path: '/contribute',
    lastModified: '2025-05-30',
    changeFrequency: 'monthly',
    priority: 0.7,
  },
  {
    path: '/donate',
    lastModified: '2025-05-30',
    changeFrequency: 'monthly',
    priority: 0.7,
  },
  {
    path: '/ethereum-bridge',
    lastModified: '2026-04-20',
    changeFrequency: 'monthly',
    priority: 0.7,
  },
  {
    path: '/faq',
    lastModified: '2025-05-30',
    changeFrequency: 'monthly',
    priority: 0.7,
  },
  {
    path: '/get-started',
    lastModified: '2025-05-30',
    changeFrequency: 'monthly',
    priority: 0.7,
  },
  {
    path: '/get-vrsc',
    lastModified: '2025-10-30',
    changeFrequency: 'monthly',
    priority: 0.7,
  },
  {
    path: '/green',
    lastModified: '2026-04-20',
    changeFrequency: 'monthly',
    priority: 0.7,
  },
  {
    path: '/intro',
    lastModified: '2026-04-20',
    changeFrequency: 'monthly',
    priority: 0.7,
  },
  {
    path: '/media',
    lastModified: '2026-04-21',
    changeFrequency: 'monthly',
    priority: 0.7,
  },
  {
    path: '/media/press-kit',
    lastModified: '2026-04-21',
    changeFrequency: 'monthly',
    priority: 0.7,
  },
  {
    path: '/media/media-coverage',
    lastModified: '2026-04-21',
    changeFrequency: 'monthly',
    priority: 0.7,
  },
  {
    path: '/media/brand-assets',
    lastModified: '2026-04-21',
    changeFrequency: 'monthly',
    priority: 0.7,
  },
  {
    path: '/milestones',
    lastModified: '2025-11-07',
    changeFrequency: 'monthly',
    priority: 0.7,
  },
  {
    path: '/mining',
    lastModified: '2025-06-03',
    changeFrequency: 'monthly',
    priority: 0.7,
  },
  {
    path: '/migrate',
    lastModified: '2026-04-20',
    changeFrequency: 'monthly',
    priority: 0.7,
  },
  {
    path: '/people',
    lastModified: '2025-05-30',
    changeFrequency: 'monthly',
    priority: 0.7,
  },
  {
    path: '/privacy-policy',
    lastModified: '2025-05-30',
    changeFrequency: 'monthly',
    priority: 0.7,
  },
  {
    path: '/projects',
    lastModified: '2025-09-10',
    changeFrequency: 'monthly',
    priority: 0.7,
  },
  {
    path: '/statistics',
    lastModified: '2026-04-20',
    changeFrequency: 'daily',
    priority: 0.7,
  },
  {
    path: '/staking',
    lastModified: '2025-06-03',
    changeFrequency: 'monthly',
    priority: 0.7,
  },
  {
    path: '/papers',
    lastModified: '2025-05-30',
    changeFrequency: 'monthly',
    priority: 0.7,
  },
  {
    path: '/verify',
    lastModified: '2026-04-20',
    changeFrequency: 'monthly',
    priority: 0.7,
  },
  {
    path: '/verusid',
    lastModified: '2026-04-20',
    changeFrequency: 'monthly',
    priority: 0.7,
  },
  {
    path: '/verusid-search',
    lastModified: '2026-04-20',
    changeFrequency: 'monthly',
    priority: 0.7,
  },
  {
    path: '/vs-evm',
    lastModified: '2025-05-30',
    changeFrequency: 'monthly',
    priority: 0.7,
  },
  {
    path: '/wallet',
    lastModified: '2025-06-03',
    changeFrequency: 'monthly',
    priority: 0.7,
  },
] as const

export default function sitemap(): MetadataRoute.Sitemap {
  return sitemapRoutes.map((route) => {
    const {path, lastModified, changeFrequency, priority} = route
    const url = new URL(path, baseUrl).toString()

    return {
      url,
      lastModified,
      changeFrequency,
      priority,
    }
  })
}
