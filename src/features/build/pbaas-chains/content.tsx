import type {ReactNode} from 'react'
import type {LucideIcon} from 'lucide-react'

import Link from 'next/link'

import {
  ArrowLeftRight,
  ArrowRight,
  BarChart3,
  Clock,
  Code,
  Coins,
  Database,
  Globe,
  Lock,
  Rocket,
  Settings,
  Shield,
  ShoppingCart,
  Store,
  Zap,
} from 'lucide-react'

import {cn} from '@/lib/utils'

import {Button} from '@/components/ui/button'

type IconListItem = {
  icon: LucideIcon
  text: string
}

const economics = [
  {
    icon: Settings,
    title: 'Customizable coinomics',
    items: [
      'Design custom emission curves and block reward schedules',
      'Configure halving periods and supply dynamics',
      'Set up multiple eras with different block rewards',
      'Configure premine allocations',
    ],
  },
  {
    icon: Coins,
    title: 'Custom pricing and revenue',
    items: [
      'Set costs for VerusID registrations',
      'Set costs for currency and token launches',
      'Control on-chain storage pricing',
      'Create a self-sustaining economic ecosystem',
    ],
  },
] as const

const protocolSections = [
  {
    icon: Store,
    title: 'Native DeFi protocol',
    description:
      'All DeFi operations, including currency conversions, execute through validated smart transactions that are solved simultaneously within each block. This mathematically prevents MEV exploitation.',
    highlights: ['0.025% minimum fee', '0.05% maximum fee'],
    items: [
      'Native liquidity pools with MEV resistance',
      'Fractional reserve currencies as AMMs',
      'Consensus-validated execution',
    ],
    href: '/build/defi-payments',
    cta: 'More about DeFi',
  },
  {
    icon: ShoppingCart,
    title: 'L1 marketplace',
    description:
      'Every PBaaS chain includes a complete L1 marketplace system for direct peer-to-peer trading with no custodial risk.',
    highlights: [
      'VerusID to VerusID',
      'VerusID to currency',
      'Currency to currency',
      'Currency to VerusID',
    ],
    items: ['Built-in offer management', 'Settlement handled by the chain'],
    href: '/build/marketplace',
    cta: 'More about the L1 marketplace',
  },
] as const

const inheritedFeatures: IconListItem[] = [
  {
    icon: Database,
    text: 'Protocol-level DeFi with MEV resistance',
  },
  {
    icon: Coins,
    text: 'Multi-currency support with liquidity pools',
  },
  {
    icon: BarChart3,
    text: 'Fractional reserve currencies',
  },
  {
    icon: Store,
    text: 'Decentralized P2P marketplace',
  },
  {
    icon: Code,
    text: 'Self-sovereign VerusID system',
  },
  {
    icon: Lock,
    text: 'zk-SNARKs privacy technology',
  },
  {
    icon: Shield,
    text: '51% hash attack resistance',
  },
  {
    icon: Zap,
    text: '75-800 TPS processing capability',
  },
]

const launchOptions = [
  {
    title: 'Crowdfunding support',
    description: 'Set minimum participation levels with automatic refunds.',
  },
  {
    title: 'Pre-launch discounts',
    description: 'Incentivize early adopters with configurable discounts.',
  },
  {
    title: 'Vesting schedules',
    description: 'Create time-locked allocations tied to VerusIDs.',
  },
  {
    title: 'Bridge converters',
    description: 'Launch with built-in liquidity pools.',
  },
  {
    title: 'Public or private',
    description:
      'Deploy worldwide public chains or controlled-access private networks.',
  },
] as const

const launchDistribution = [
  {
    label: 'Verus network miners and stakers',
    value: '5,000 VRSC',
  },
  {
    label: 'New chain miners and stakers',
    value: '5,000 VRSC',
  },
] as const

const distributionReasons = [
  'Rewards the Verus network for providing infrastructure',
  'Incentivizes early miners and stakers on your chain',
  'Creates a sustainable economic model for both networks',
] as const

const storageFeatures: IconListItem[] = [
  {
    icon: Code,
    text: 'Protocol-level storage capabilities',
  },
  {
    icon: Globe,
    text: 'Support for any file or data structure',
  },
  {
    icon: Coins,
    text: 'Customizable pricing models',
  },
  {
    icon: BarChart3,
    text: 'Native currency fee structure',
  },
  {
    icon: Lock,
    text: 'Secure and tamper-resistant',
  },
  {
    icon: Clock,
    text: 'Permanent yet amenable storage',
  },
]

function SectionIntro({title, children}: {title: string; children: ReactNode}) {
  return (
    <div className="border-b border-gray-200 px-8 py-16 dark:border-gray-800 md:px-14 md:py-24">
      <div className="max-w-[760px]">
        <h2 className="mb-4 text-[28px] font-medium leading-[1.2] tracking-tight text-gray-800 dark:text-white md:mb-8 md:text-[44px]">
          {title}
        </h2>
        <div className="space-y-4 text-[15px] leading-relaxed tracking-normal text-gray-600 dark:text-gray-300 md:text-[17px]">
          {children}
        </div>
      </div>
    </div>
  )
}

function BulletList({items}: {items: readonly string[]}) {
  return (
    <ul className="space-y-3">
      {items.map((item) => (
        <li
          key={item}
          className="relative pl-5 text-[15px] leading-relaxed tracking-normal text-gray-600 dark:text-gray-300 md:text-[17px]"
        >
          <span className="absolute left-0 top-[0.7em] h-1.5 w-1.5 rounded-full bg-verus-blue dark:bg-blue-400" />
          {item}
        </li>
      ))}
    </ul>
  )
}

function IconList({items}: {items: IconListItem[]}) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      {items.map((item, index) => {
        const Icon = item.icon
        const isDesktopLeftColumn = index % 2 === 0
        const isDesktopBottomRow =
          index >= Math.floor((items.length - 1) / 2) * 2

        return (
          <div
            key={item.text}
            className={cn(
              'flex items-start gap-4 border-gray-200 px-8 py-7 dark:border-gray-800 md:px-8 md:py-8',
              index > 0 && 'max-md:border-t',
              !isDesktopLeftColumn && 'md:border-l',
              !isDesktopBottomRow && 'md:border-b'
            )}
          >
            <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-lg border border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-900">
              <Icon className="h-5 w-5 text-verus-blue dark:text-blue-400" />
            </div>
            <p className="mt-1 text-[15px] leading-relaxed tracking-normal text-gray-600 dark:text-gray-300 md:text-[16px]">
              {item.text}
            </p>
          </div>
        )
      })}
    </div>
  )
}

export function PBaaSContent() {
  return (
    <>
      <section className="border-t border-gray-200 bg-gradient-to-br from-blue-50 to-white dark:border-gray-800 dark:from-blue-950/40 dark:to-gray-950">
        <SectionIntro title="Design your chain's economics with protocol-level control">
          <p>
            Take control over your blockchain's economic model with configurable
            coinomics, fees, launch rules, and protocol-level services.
          </p>
        </SectionIntro>

        <div className="grid grid-cols-1 md:grid-cols-2">
          {economics.map((item, index) => {
            const Icon = item.icon

            return (
              <article
                key={item.title}
                className={cn(
                  'border-gray-200 px-8 py-10 dark:border-gray-800 md:px-12 md:py-14',
                  index > 0 && 'max-md:border-t md:border-l'
                )}
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-lg border border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-900">
                  <Icon className="h-7 w-7 text-verus-blue dark:text-blue-400" />
                </div>
                <h3 className="mb-4 font-medium tracking-tight text-gray-800 dark:text-white md:text-[30px]">
                  {item.title}
                </h3>
                <BulletList items={item.items} />
              </article>
            )
          })}
        </div>
      </section>

      <section className="border-t border-gray-200 bg-gray-50 dark:border-gray-800 dark:bg-gray-950">
        <SectionIntro title="Protocol-level DeFi built for true decentralization">
          <p>
            DeFi and marketplace operations are part of the chain protocol
            itself. Consensus validates execution, removing trust dependencies
            and avoiding common VM-based contract risks.
          </p>
        </SectionIntro>

        <div className="grid grid-cols-1 md:grid-cols-2">
          {protocolSections.map((section, index) => {
            const Icon = section.icon

            return (
              <article
                key={section.title}
                className={cn(
                  'flex flex-col border-gray-200 px-8 py-10 dark:border-gray-800 md:px-12 md:py-14',
                  index > 0 && 'max-md:border-t md:border-l'
                )}
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-lg border border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-900">
                  <Icon className="h-7 w-7 text-verus-blue dark:text-blue-400" />
                </div>
                <h3 className="mb-4 font-medium tracking-tight text-gray-800 dark:text-white md:text-[30px]">
                  {section.title}
                </h3>
                <p className="text-[15px] leading-relaxed tracking-normal text-gray-600 dark:text-gray-300 md:text-[17px]">
                  {section.description}
                </p>

                <div className="mt-8 grid grid-cols-1 border border-gray-200 dark:border-gray-800 sm:grid-cols-2">
                  {section.highlights.map((highlight, highlightIndex) => (
                    <div
                      key={highlight}
                      className={cn(
                        'flex min-h-[78px] items-center gap-3 px-5 py-4 text-[14px] font-medium text-gray-800 dark:text-white md:text-[15px]',
                        highlightIndex > 0 && 'max-sm:border-t',
                        highlightIndex % 2 === 1 && 'sm:border-l',
                        highlightIndex < section.highlights.length - 2 &&
                          'sm:border-b',
                        'border-gray-200 dark:border-gray-800'
                      )}
                    >
                      <ArrowLeftRight className="h-4 w-4 flex-shrink-0 text-verus-blue dark:text-blue-400" />
                      {highlight}
                    </div>
                  ))}
                </div>

                <div className="mt-8">
                  <BulletList items={section.items} />
                </div>

                <Button
                  asChild
                  variant="verusSecondaryDark"
                  size="verusWide"
                  className="mt-8 w-full md:w-fit"
                >
                  <Link href={section.href}>
                    {section.cta}
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </Button>
              </article>
            )
          })}
        </div>
      </section>

      <section className="border-t border-gray-200 bg-gradient-to-br from-blue-50 to-white dark:border-gray-800 dark:from-blue-950/40 dark:to-gray-950">
        <SectionIntro title="Enterprise features built into every chain">
          <p>
            Every PBaaS chain inherits a comprehensive suite of capabilities
            from the Verus ecosystem, so builders can launch with mature
            protocol features already available.
          </p>
        </SectionIntro>
        <IconList items={inheritedFeatures} />
      </section>

      <section className="border-t border-gray-200 bg-gray-50 dark:border-gray-800 dark:bg-gray-950">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="px-8 py-16 md:px-14 md:py-24">
            <div className="max-w-[760px]">
              <h2 className="mb-4 text-[28px] font-medium leading-[1.2] tracking-tight text-gray-800 dark:text-white md:mb-8 md:text-[44px]">
                Launch your chain on your terms
              </h2>
              <p className="text-[15px] leading-relaxed tracking-normal text-gray-600 dark:text-gray-300 md:text-[17px]">
                PBaaS chains offer launch mechanisms designed to help you build
                a community and tokenomic structure from day one.
              </p>
            </div>

            <div className="mt-10 border border-gray-200 dark:border-gray-800">
              {launchOptions.map((option, index) => (
                <div
                  key={option.title}
                  className={cn(
                    'flex gap-4 px-6 py-5',
                    index > 0 && 'border-t border-gray-200 dark:border-gray-800'
                  )}
                >
                  <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg border border-gray-200 bg-white text-[13px] font-medium text-verus-blue dark:border-gray-800 dark:bg-gray-900 dark:text-blue-400">
                    {index + 1}
                  </span>
                  <div>
                    <h3 className="text-[16px] font-medium text-gray-800 dark:text-white md:text-[18px]">
                      {option.title}
                    </h3>
                    <p className="mt-1 text-[14px] leading-relaxed tracking-normal text-gray-600 dark:text-gray-300 md:text-[15px]">
                      {option.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="border-t border-gray-200 px-8 py-16 dark:border-gray-800 md:border-l md:border-t-0 md:px-12 md:py-24">
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-lg border border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-900">
              <Rocket className="h-7 w-7 text-verus-blue dark:text-blue-400" />
            </div>
            <h3 className="mb-4 font-medium tracking-tight text-gray-800 dark:text-white md:text-[30px]">
              Launch cost and distribution
            </h3>
            <p className="text-[15px] leading-relaxed tracking-normal text-gray-600 dark:text-gray-300 md:text-[17px]">
              Launching a PBaaS chain costs 10,000 VRSC. This cost is split
              evenly between the Verus network and the new chain's network.
            </p>

            <div className="mt-8 border border-gray-200 dark:border-gray-800">
              {launchDistribution.map((row, index) => (
                <div
                  key={row.label}
                  className={cn(
                    'flex items-center justify-between gap-4 px-6 py-5',
                    index > 0 && 'border-t border-gray-200 dark:border-gray-800'
                  )}
                >
                  <span className="text-[14px] text-gray-600 dark:text-gray-300 md:text-[15px]">
                    {row.label}
                  </span>
                  <span className="whitespace-nowrap text-[14px] font-medium text-gray-800 dark:text-white md:text-[15px]">
                    {row.value}
                  </span>
                </div>
              ))}
              <div className="flex items-center justify-between gap-4 border-t border-gray-200 px-6 py-5 dark:border-gray-800">
                <span className="text-[15px] font-medium text-gray-800 dark:text-white">
                  Total launch cost
                </span>
                <span className="whitespace-nowrap text-[16px] font-medium text-verus-blue dark:text-blue-400">
                  10,000 VRSC
                </span>
              </div>
            </div>

            <div className="mt-8 border-t border-gray-200 pt-8 dark:border-gray-800">
              <h4 className="mb-4 text-[16px] font-medium text-gray-800 dark:text-white md:text-[18px]">
                Why this distribution?
              </h4>
              <BulletList items={distributionReasons} />
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-gray-200 bg-gradient-to-br from-blue-50 to-white dark:border-gray-800 dark:from-blue-950/40 dark:to-gray-950">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="px-8 py-16 md:px-14 md:py-24">
            <div className="max-w-[760px]">
              <h2 className="mb-4 text-[28px] font-medium leading-[1.2] tracking-tight text-gray-800 dark:text-white md:mb-8 md:text-[44px]">
                Storage built into the protocol
              </h2>
              <div className="space-y-4 text-[15px] leading-relaxed tracking-normal text-gray-600 dark:text-gray-300 md:text-[17px]">
                <p>
                  Every PBaaS chain includes native storage capabilities at the
                  protocol level. The system supports files, structured data,
                  and chain-specific pricing models.
                </p>
                <p>
                  Chain launchers can set storage pricing in the chain native
                  currency while applications use the same protocol primitives
                  for durable data publication.
                </p>
              </div>

              <Button
                asChild
                variant="verusPrimary"
                size="verusWide"
                className="mt-8 w-full md:w-fit"
              >
                <Link href="/build/data">
                  Learn about data
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          </div>

          <div className="border-t border-gray-200 dark:border-gray-800 md:border-l md:border-t-0">
            <IconList items={storageFeatures} />
          </div>
        </div>
      </section>
    </>
  )
}
