// Added sitemap metadata route listing primary public pages for search crawlers
import type { MetadataRoute } from 'next'

import { env } from '@/configs/env'

const baseUrl = env.NEXT_PUBLIC_BASE_URL

const staticPaths = [
  '/',
  '/build',
  '/build/start',
  '/build/defi-payments',
  '/build/marketplace',
  '/build/data',
  '/build/pbaas-chains',
  '/build/pbaas-currencies',
  '/build/verusid',
  '/community',
  '/contribute',
  '/donate',
  '/ethereum-bridge',
  '/faq',
  '/get-started',
  '/get-vrsc',
  '/green',
  '/intro',
  '/media',
  '/milestones',
  '/mining',
  '/migrate',
  '/people',
  '/privacy-policy',
  '/projects',
  '/statistics',
  '/staking',
  '/papers',
  '/verify',
  '/verusid',
  '/verusid-search',
  '/vs-evm',
  '/wallet',
]

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  return staticPaths.map((path) => {
    const url = new URL(path, baseUrl).toString()

    const isHome = path === '/'

    return {
      url,
      lastModified: now,
      changeFrequency: isHome ? 'daily' : 'weekly',
      priority: isHome ? 1 : 0.7,
    }
  })
}

