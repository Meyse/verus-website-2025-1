import type {LucideIcon} from 'lucide-react'

import {
  ArrowUpDown,
  Coins,
  DollarSign,
  Lock,
  Network,
  Scale,
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
    icon: Shield,
    title: 'MEV resistant',
    description:
      'Conversions are processed together at consensus, preventing front-running, back-running, and sandwich attacks.',
  },
  {
    icon: DollarSign,
    title: 'Low fees',
    description:
      'Use 0.025% fees for reserve-to-basket conversions and 0.05% fees for reserve-to-reserve conversions.',
  },
  {
    icon: Lock,
    title: 'Protocol-level security',
    description:
      'DeFi operations are verified by miners and stakers without smart contract bug or approval risk.',
  },
  {
    icon: Coins,
    title: 'Basket currencies',
    description:
      'Create basket currencies backed by up to 10 reserves, with configurable reserve ratios from 5% to 100%.',
  },
  {
    icon: Wallet,
    title: 'Final payments',
    description:
      'Send and receive payments with no chargebacks, no custodial intermediaries, and predictable settlement.',
  },
  {
    icon: ArrowUpDown,
    title: 'Multi-currency support',
    description:
      'Accept VRSC, PBaaS currencies, and bridged Ethereum assets with native conversion support.',
  },
  {
    icon: Store,
    title: 'QR code integration',
    description:
      'Package invoices into deeplinks and QR codes for mobile-friendly scan-to-pay experiences.',
  },
  {
    icon: Network,
    title: 'Cross-chain conversions',
    description:
      'Convert across PBaaS chains and Ethereum bridge-connected assets through unified network liquidity.',
  },
  {
    icon: Scale,
    title: 'Fee distribution',
    description:
      'Fees are distributed transparently between miners, stakers, and reserves without MEV middlemen.',
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
