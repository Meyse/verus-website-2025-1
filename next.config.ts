import type { NextConfig } from 'next'

import { env } from '@/configs/env'

const _env = env
const nextConfig: NextConfig = {
  /* config options here */
  // For development, we'll use the standard Next.js build
  allowedDevOrigins: ['localhost', 'verus.io', '*.verus.io'],
  logging: {
    fetches: {
      hmrRefreshes: true,
      fullUrl: true,
    },
  },
  // For production on Replit, we'll use the 'export' output
  compiler: {
    // Remove all console logs except console.error in production builds
    removeConsole: {
      exclude: ['error'],
    },
  },
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },

  experimental: {
    serverActions: {
      allowedOrigins: ['verus.io', '*.verus.io'],
    },
  },

  async redirects() {
    return [
      {source: '/economy', destination: '/statistics', permanent: true},
      {source: '/signatures', destination: '/verify', permanent: true},
      {source: '/exchanges', destination: '/get-vrsc', permanent: true},
      {source: '/create', destination: '/build', permanent: true},
      {source: '/foundations', destination: '/intro', permanent: true},
      {source: '/eth-bridge', destination: '/ethereum-bridge', permanent: true},
      {
        source: '/media#brand-assets',
        destination: '/media/brand-assets',
        permanent: true,
      },
      {
        source: '/wallet/:slug',
        destination: '/wallet',
        permanent: true,
      },
      {
        source: '/verusid-lookup',
        destination: '/verusid-search',
        permanent: true,
      },
      {
        source: '/verusid-lookup/:verusId',
        destination: '/verusid-search/:verusId',
        permanent: true,
      },
      {
        source: '/free-verusid.pdf',
        destination: '/papers/free-verusid.pdf',
        permanent: true,
      },
    ]
  },
}

export default nextConfig
