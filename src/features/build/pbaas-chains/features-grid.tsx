import type {LucideIcon} from 'lucide-react'

import {
  Coins,
  Cpu,
  Lock,
  Network,
  Rocket,
  Scale,
  Settings,
  Shield,
  ShoppingCart,
} from 'lucide-react'

import {cn} from '@/lib/utils'

type Feature = {
  icon: LucideIcon
  title: string
  description: string
}

const features: Feature[] = [
  {
    icon: Shield,
    title: '51% attack resistance',
    description:
      'Every PBaaS chain inherits the Verus 50/50 PoW/PoS security model, combining mining power and staking consensus from day one.',
  },
  {
    icon: Settings,
    title: 'Custom economics',
    description:
      'Configure emissions, rewards, halving periods, registration costs, service fees, and storage pricing in the chain native coin.',
  },
  {
    icon: Network,
    title: 'True interoperability',
    description:
      'Connect with other PBaaS chains and external networks through the Verus Protocol and built-in cross-chain bridges.',
  },
  {
    icon: ShoppingCart,
    title: 'L1 marketplace',
    description:
      'Enable peer-to-peer trading between VerusIDs, currencies, or both with built-in offer management and global listings.',
  },
  {
    icon: Coins,
    title: 'L1 DeFi protocol',
    description:
      'Use native liquidity pools and reserve-backed currencies that work as automated market makers with MEV resistance.',
  },
  {
    icon: Scale,
    title: 'Multi-currency system',
    description:
      'Support unlimited currencies and tokens natively, with built-in conversion capabilities and cross-chain bridging.',
  },
  {
    icon: Cpu,
    title: 'Independent processing',
    description:
      'Each PBaaS chain processes transactions independently, preventing congestion on one chain from affecting another.',
  },
  {
    icon: Rocket,
    title: 'Simple launch path',
    description:
      'Deploy a custom blockchain with API commands and inherit Verus L1 features without building infrastructure from scratch.',
  },
  {
    icon: Lock,
    title: 'Advanced privacy',
    description:
      'Use optional zk-SNARKs privacy so users can choose transparent or shielded transactions based on their needs.',
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
