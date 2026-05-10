import type {LucideIcon} from 'lucide-react'

import Link from 'next/link'

import {ArrowRight, Database, Key, Network, Shield} from 'lucide-react'

import {cn} from '@/lib/utils'

import {Button} from '@/components/ui/button'

type StructureItem = {
  icon: LucideIcon
  title: string
  items?: string[]
  details?: {
    title: string
    description: string
  }[]
}

const structureItems: StructureItem[] = [
  {
    icon: Key,
    title: 'Core components',
    items: [
      'Human-readable name, such as YourBrand@',
      'Primary address with private-key control',
      'Identity address (i-address)',
      'Optional private z-address',
    ],
  },
  {
    icon: Shield,
    title: 'Security features',
    items: [
      'Revocation authorities for key compromise',
      'Recovery authorities for backup access',
      'Time-locked vaults for secure storage',
      'Multi-signature capabilities',
    ],
  },
  {
    icon: Database,
    title: 'Data storage',
    details: [
      {
        title: 'VDXF storage',
        description:
          'The Verus Data eXchange Format (VDXF) defines structured data inside VerusIDs, including complex data structures, configurations, and application-specific records.',
      },
      {
        title: 'Contentmap and contentmultimap',
        description:
          'Store key-value data and nested structures directly in a VerusID for application configuration, user settings, or data that needs blockchain verification.',
      },
    ],
  },
  {
    icon: Network,
    title: 'Namespace capabilities',
    details: [
      {
        title: 'Hierarchical structure',
        description:
          'Create sub-namespaces for entities inside an ecosystem, with clear organization, ownership, and control.',
      },
      {
        title: 'Launch capabilities',
        description:
          'Use the namespace as the foundation for currencies, tokens, and blockchains, with the VerusID as the controller and reference point.',
      },
    ],
  },
]

const ctaLinks = [
  {
    href: '/build/data',
    label: 'Learn more about on-chain data',
  },
  {
    href: '/build/pbaas-currencies',
    label: 'Learn more about currencies',
  },
  {
    href: '/build/pbaas-chains',
    label: 'Learn more about PBaaS chains',
  },
] as const

export function StructureSection() {
  return (
    <section className="border-t border-gray-200 bg-gradient-to-br from-blue-50 to-white dark:border-gray-800 dark:from-blue-950/40 dark:to-gray-950">
      <div className="border-b border-gray-200 px-8 py-16 dark:border-gray-800 md:px-14 md:py-24">
        <div className="max-w-[760px]">
          <h2 className="mb-4 text-[28px] font-medium leading-[1.2] tracking-tight text-gray-800 dark:text-white md:mb-8 md:text-[44px]">
            How VerusID is structured
          </h2>
          <div className="space-y-4">
            <p className="text-[15px] leading-relaxed tracking-normal text-gray-600 dark:text-gray-300 md:text-[17px]">
              Each VerusID consists of several components that together provide
              its core capabilities. This structure lets VerusID serve as the
              foundation for launching currencies, tokens, and entire
              blockchains.
            </p>
            <p className="text-[15px] leading-relaxed tracking-normal text-gray-600 dark:text-gray-300 md:text-[17px]">
              Unlike traditional blockchain addresses that are cryptographic
              hashes, VerusIDs are human-readable names that can be owned,
              controlled, transferred, and used across the Verus network.
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2">
        {structureItems.map((item, index) => {
          const Icon = item.icon
          const isDesktopLeftColumn = index % 2 === 0
          const isDesktopBottomRow = index >= structureItems.length - 2

          return (
            <article
              key={item.title}
              className={cn(
                'border-gray-200 px-8 py-10 dark:border-gray-800 md:px-12 md:py-14',
                index > 0 && 'max-md:border-t',
                !isDesktopLeftColumn && 'md:border-l',
                !isDesktopBottomRow && 'md:border-b'
              )}
            >
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-lg border border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-900">
                <Icon className="h-7 w-7 text-verus-blue dark:text-blue-400" />
              </div>
              <h3 className="mb-4 text-[22px] font-medium tracking-tight text-gray-800 dark:text-white md:text-[30px]">
                {item.title}
              </h3>

              {item.items ? (
                <ul className="space-y-3">
                  {item.items.map((entry) => (
                    <li
                      key={entry}
                      className="relative pl-5 text-[15px] leading-relaxed tracking-normal text-gray-600 dark:text-gray-300 md:text-[17px]"
                    >
                      <span className="absolute left-0 top-[0.7em] h-1.5 w-1.5 rounded-full bg-verus-blue dark:bg-blue-400" />
                      {entry}
                    </li>
                  ))}
                </ul>
              ) : (
                <div className="space-y-5">
                  {item.details?.map((detail, detailIndex) => (
                    <div
                      key={detail.title}
                      className={cn(
                        detailIndex > 0 &&
                          'border-t border-gray-200 pt-5 dark:border-gray-800'
                      )}
                    >
                      <h4 className="mb-2 text-[16px] font-medium text-gray-800 dark:text-white">
                        {detail.title}
                      </h4>
                      <p className="text-[15px] leading-relaxed tracking-normal text-gray-600 dark:text-gray-300 md:text-[17px]">
                        {detail.description}
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </article>
          )
        })}
      </div>

      <div className="border-t border-gray-200 px-8 py-8 dark:border-gray-800 md:px-14">
        <div className="flex flex-col gap-4 md:flex-row">
          {ctaLinks.map((link) => (
            <Button
              key={link.href}
              asChild
              variant="verusSecondaryDark"
              size="verusWide"
              className="w-full md:w-fit"
            >
              <Link href={link.href}>
                {link.label}
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </Button>
          ))}
        </div>
      </div>
    </section>
  )
}
