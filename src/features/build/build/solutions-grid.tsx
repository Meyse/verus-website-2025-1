import Image from 'next/image'
import Link from 'next/link'

import {cn} from '@/lib/utils'
import {Button} from '@/components/ui/button'
import {
  ArrowRight,
  ArrowUpDown,
  Coins,
  Database,
  Network,
  Store,
} from 'lucide-react'

const solutions = [
  {
    icon: 'network',
    title: 'Blockchains',
    heading: 'Launch independent blockchains',
    description:
      'Create application-specific blockchains with their own economics, rules, and communities. PBaaS chains can remain independent while using Verus interoperability, security, and cross-chain access.',
    href: '/build/pbaas-chains',
    tags: [
      '51% attack resistant',
      'Cross-chain access',
      'Custom economics',
      'Protocol-level DeFi',
      'On-chain storage',
      'Marketplace',
    ],
  },
  {
    icon: 'coins',
    title: 'Currencies',
    heading: 'Create currencies (tokens) and liquidity pools',
    description:
      'Issue simple tokens, reserve-backed basket currencies, crowdfunding currencies, and liquidity pools without deploying smart contracts. Consensus validates the asset rules directly.',
    href: '/build/pbaas-currencies',
    tags: [
      'Basket currencies',
      'Simple tokens',
      'Liquidity pools',
      'Protocol-level',
      'Crowdfunding',
      'Bridge to ETH',
    ],
  },
  {
    icon: 'verusid',
    title: 'VerusID',
    heading: 'Build with self-sovereign identities',
    description:
      'Use self-sovereign identities as durable accounts for applications, communities, and data. VerusID supports revocation, recovery, privacy, and multi-signature control without a centralized account database.',
    href: '/build/verusid',
    tags: [
      'Self-sovereign',
      'Revocable',
      'Recoverable',
      'Data storage',
      'Multi-sig',
      'Private',
      'Verus Vault',
    ],
  },
  {
    icon: 'payments',
    title: 'DeFi & payments',
    heading: 'Built-in DeFi, fair and without MEV',
    description:
      'Route value through protocol-level DeFi primitives designed for low fees and predictable execution. Applications can support cross-chain payments, baskets, and multi-currency flows without custom contract risk.',
    href: '/build/defi-payments',
    tags: [
      'MEV resistant',
      'Ultra-low fees',
      'Protocol-level',
      'Basket currencies',
      'Multi-currency',
      'Cross-chain',
    ],
  },
  {
    icon: 'store',
    title: 'Marketplace',
    heading: 'Built-in peer-to-peer marketplace',
    description:
      'Use protocol-level offers and smart transfers to build marketplaces where users can discover, negotiate, and exchange directly. The chain handles settlement without requiring a trusted escrow service.',
    href: '/build/marketplace',
    tags: [
      'Protocol-level',
      'Atomic swaps',
      'Global discovery',
      'Private offers',
      'Smart transfers',
      'No escrow',
    ],
  },
  {
    icon: 'database',
    title: 'Store & retrieve data',
    heading: 'Store user-owned data, privately',
    description:
      'Publish, retrieve, and update structured data through VerusID and VDXF-aware storage patterns. Applications can combine public records, encrypted fields, and cross-chain access in one data model.',
    href: '/build/data',
    tags: [
      'Encrypted storage',
      'Indexed queries',
      'Cross-chain access',
      'Protocol-level',
      'Structured data',
      'Usage-based fees',
    ],
  },
] as const

function SolutionIcon({icon}: {icon: (typeof solutions)[number]['icon']}) {
  const iconClass = 'h-7 w-7 text-verus-blue dark:text-blue-400'

  if (icon === 'network') return <Network className={iconClass} />
  if (icon === 'coins') return <Coins className={iconClass} />
  if (icon === 'payments') return <ArrowUpDown className={iconClass} />
  if (icon === 'store') return <Store className={iconClass} />
  if (icon === 'database') return <Database className={iconClass} />

  return (
    <Image
      src="/img/at-full-black.svg"
      alt=""
      width={28}
      height={28}
      className="h-7 w-7 [filter:invert(31%)_sepia(93%)_saturate(1352%)_hue-rotate(213deg)_brightness(97%)_contrast(87%)] dark:[filter:invert(67%)_sepia(12%)_saturate(1352%)_hue-rotate(183deg)_brightness(100%)_contrast(97%)]"
    />
  )
}

export function SolutionsGrid() {
  return (
    <section className="border-t border-gray-200 bg-gray-50 dark:border-gray-800 dark:bg-gray-950">
      <div>
        {solutions.map((solution, index) => {
          const tagRows = Array.from(
            {length: Math.ceil(solution.tags.length / 2)},
            (_, rowIndex) => solution.tags.slice(rowIndex * 2, rowIndex * 2 + 2)
          )

          return (
            <article
              key={solution.title}
              className={cn(
                'grid grid-cols-1 border-gray-200 dark:border-gray-800 md:grid-cols-[minmax(0,2fr)_minmax(0,1fr)]',
                index > 0 && 'border-t'
              )}
            >
              <div className="px-8 py-16 md:px-14 md:py-24">
                <div className="max-w-[760px]">
                  <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-lg border border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-900 md:h-20 md:w-20">
                    <SolutionIcon icon={solution.icon} />
                  </div>
                  <h2 className="mb-4 text-[28px] font-medium leading-[1.2] tracking-tight text-gray-800 dark:text-white md:mb-8 md:text-[44px]">
                    {solution.heading}
                  </h2>
                  <p className="text-[15px] leading-relaxed tracking-normal text-gray-600 dark:text-gray-300 md:text-[17px]">
                    {solution.description}
                  </p>

                  <Button
                    asChild
                    variant="verusPrimary"
                    size="verusWide"
                    className="mt-8"
                  >
                    <Link
                      href={solution.href}
                      aria-label={`Learn more about ${solution.title}`}
                    >
                      Learn more
                      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                  </Button>
                </div>
              </div>

              <div className="border-t border-gray-200 px-8 py-10 dark:border-gray-800 md:border-l md:border-t-0 md:px-8 md:py-24">
                <div className="flex flex-col items-start gap-2 md:ml-auto md:mt-[112px] md:items-end">
                  {tagRows.map((row) => (
                    <div
                      key={row.join('|')}
                      className="flex flex-wrap gap-2 md:justify-end"
                    >
                      {row.map((tag) => (
                        <span
                          key={tag}
                          className="whitespace-nowrap rounded-lg border border-gray-200 bg-white px-3 py-1.5 text-[12px] font-medium text-gray-600 dark:border-gray-800 dark:bg-gray-900 dark:text-gray-300 md:text-[13px]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}
