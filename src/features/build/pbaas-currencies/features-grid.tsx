import type {LucideIcon} from 'lucide-react'

import {
  Clock,
  Coins,
  Layers,
  Rocket,
  Settings,
  Share2,
  Shield,
  Store,
  Wallet,
} from 'lucide-react'

import {cn} from '@/lib/utils'

type Feature = {
  icon: LucideIcon
  title: string
  description: string
}

const features: Feature[] = [
  {
    icon: Layers,
    title: 'Basket currencies',
    description:
      'Create reserve-backed currencies with 5-95% reserve ratios, fully backed liquidity pools, and up to 10 reserve currencies.',
  },
  {
    icon: Coins,
    title: 'Simple token currencies',
    description:
      'Create standard tokens with fixed or flexible supply, with the option to bridge them to Ethereum as ERC-20 tokens.',
  },
  {
    icon: Store,
    title: 'Protocol-level DeFi',
    description:
      'Conversions are solved simultaneously at consensus, providing MEV resistance and fair pricing for participants.',
  },
  {
    icon: Settings,
    title: 'Custom economics',
    description:
      'Configure carve-outs, discounts, preallocations, registration fees, and referral systems.',
  },
  {
    icon: Clock,
    title: 'Flexible distribution',
    description:
      'Launch with premine allocations, vesting schedules, timelocks, automatic VerusID distributions, and referral rewards.',
  },
  {
    icon: Rocket,
    title: 'Crowdfunding ready',
    description:
      'Set funding levels in multiple currencies, refund automatically if targets are not met, and reward early supporters.',
  },
  {
    icon: Share2,
    title: 'Cross-chain bridge',
    description:
      'Export currencies to Ethereum as ERC-20s or import existing ERC-20s with non-custodial 1:1 mapping.',
  },
  {
    icon: Wallet,
    title: 'Instant liquidity',
    description:
      'Launch currencies with built-in liquidity pools so trading can begin without external market makers.',
  },
  {
    icon: Shield,
    title: 'Consensus security',
    description:
      'Currencies inherit PBaaS chain security, with transactions and conversions protected by 50/50 PoW/PoS consensus.',
  },
]

export function FeaturesGrid() {
  return (
    <section className="bg-gray-50 dark:bg-gray-950">
      <div className="grid grid-cols-1 md:grid-cols-3">
        {features.map((feature, index) => {
          const Icon = feature.icon
          const isDesktopFirstColumn = index % 3 === 0
          const isDesktopBottomRow = index >= features.length - 3

          return (
            <article
              key={feature.title}
              className={cn(
                'flex min-h-[230px] flex-col justify-center border-gray-200 px-8 py-9 dark:border-gray-800 md:min-h-[260px] md:px-8 md:py-10',
                index > 0 && 'max-md:border-t',
                !isDesktopFirstColumn && 'md:border-l',
                !isDesktopBottomRow && 'md:border-b'
              )}
            >
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-lg border border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-900 md:h-16 md:w-16">
                <Icon className="h-7 w-7 text-verus-blue dark:text-blue-400" />
              </div>
              <h3 className="text-[18px] font-bold leading-tight text-gray-800 dark:text-white md:text-[20px]">
                {feature.title}
              </h3>
              <p className="mt-2 max-w-[320px] text-[14px] leading-relaxed tracking-normal text-gray-600 dark:text-gray-300 md:text-[15px]">
                {feature.description}
              </p>
            </article>
          )
        })}
      </div>
    </section>
  )
}
