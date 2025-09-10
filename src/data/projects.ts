// Project list component with filtering capabilities

import type { ProjectCardProps } from '@/features/projects/project-card'

import { env } from '@/configs/env'

// This can be moved to a separate data file when the list gets larger
export const projects = [
  {
    name: 'Verus Desktop',
    description: 'Desktop wallet for ecosystem currencies and for staking.',
    url: '/wallet',
    category: 'Wallet',
  },
  {
    name: 'Verus Mobile',
    description: 'Mobile wallet for Verus and ecosystem currencies.',
    url: '/wallet',
    category: 'Wallet',
  },
  {
    name: 'Verus Insight Explorer',
    description:
      'Blockchain explorer for the Verus network showing transactions, blocks, and network statistics in real-time.',
    url: env.NEXT_PUBLIC_VERUS_EXPLORER,
    category: 'Dashboard',
  },
  {
    name: 'Verus Wisdom',
    description:
      'Dashboard for network statistics, mining difficulty, staking rewards, market data for VRSC, and much more',
    url: 'https://www.veruswisdom.com',
    category: 'Dashboard',
  },
  {
    name: 'VerusIDs.com',
    description:
      'Overview of registered VerusIDs, VerusIDs on offer and tool to create API command for registrations.',
    url: 'https://www.verusids.com',
    category: 'Dashboard',
  },
  {
    name: 'Verus-Ethereum Bridge',
    description:
      'Cross-chain bridge for moving currencies and tokens between Verus and Ethereum. Non-custodial and trustless.',
    url: 'https://eth.verusbridge.io',
    category: 'Technology',
  },
  {
    name: 'VaultAlert',
    description:
      'Easy tool to check the status of Verus Vault on your VerusID.',
    url: 'https://wwww.vaultalert.net',
    category: 'Technology',
  },
  {
    name: 'Valu',
    description:
      'Valu combines the power of the Verus Blockchain, Zero Knowledge Privacy, AI, Social Messengers and Mixed Reality to create Decentralized. Distributed, People Powered, Verified Community Network Economies. Valu bridges the physical and digital worlds, empoweringusers with ownership, privacy, and collaboration in gamified, open-source ecosystems. Aligning the interests of users and communities to create sustainable distributed decentralized network economies.',
    url: 'https://www.valu.earth',
    category: 'Technology',
  },
  {
    name: "Faldt's Cryptodashboard",
    description:
      'Large dashboard with all information on basket currencies, TVL, volume and much more.',
    url: env.NEXT_PUBLIC_CRYPTO_DASHBOARD,
    category: 'Dashboard',
  },
  {
    name: 'VerusMarkets',
    description:
      'Information about decentralized on-chain currency pricing and volume, liquidity pool reserves, TVL and more',
    url: 'https://www.verusmarkets.com',
    category: 'Dashboard',
  },
  {
    name: 'ValuVerse',
    description:
      'ValuVerse Metaverse environment. Log in with a .valuid VerusID (currently offered for free on the Verus Discord in the #valuverse channel), explore, have meetings, transact. Under construction and much more being built.',
    url: 'https://live.valuverse.net/auth',
    category: 'Technology',
  },
  {
    name: 'raw.verus.trading',
    description:
      'Barebones, raw liquidity pool (basket currencies) reserve data.',
    url: 'https://raw.verus.trading',
    category: 'Dashboard',
  },
  {
    name: 'VerusInvoices',
    description: 'Easily ceate invoices to share and use with Verus Mobile.',
    url: 'https://www.verusinvoices.com',
    category: 'Technology',
  },
  {
    name: 'Nymia',
    description: 'Zero-trace messaging & payments in one app. Uses zero-knowledge privacy.',
    url: 'https://www.nymia.app',
    category: 'Technology',
  },
].sort((a, b) => a.name.localeCompare(b.name)) as ProjectCardProps[] // Sort alphabetically by name
