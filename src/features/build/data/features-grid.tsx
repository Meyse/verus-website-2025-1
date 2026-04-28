import type {LucideIcon} from 'lucide-react'

import {
  Code2,
  Database,
  Key,
  Lock,
  Network,
  PackageOpen,
  Scale,
  Search,
  SplitSquareVertical,
} from 'lucide-react'

import {cn} from '@/lib/utils'

type Feature = {
  icon: LucideIcon
  title: string
  description: string
}

const features: Feature[] = [
  {
    icon: Database,
    title: 'Native storage layer',
    description:
      'Store and index data directly on-chain with configurable costs for each PBaaS chain.',
  },
  {
    icon: Lock,
    title: 'Privacy-first storage',
    description:
      'Store data publicly or privately with optional encryption, zk-SNARKs privacy, and controlled sharing.',
  },
  {
    icon: Search,
    title: 'Indexed queries',
    description:
      'Query structured and unstructured data through globally unique VDXF keys across multiple chains.',
  },
  {
    icon: Key,
    title: 'Flexible key system',
    description:
      'Define custom namespaces and data types with VDXF keys tied to clear application ownership.',
  },
  {
    icon: PackageOpen,
    title: 'Structured and unstructured',
    description:
      'Store anything from simple key-value pairs to nested objects and larger data blobs.',
  },
  {
    icon: SplitSquareVertical,
    title: 'Data sharding',
    description:
      'Distribute data across PBaaS chains while preserving references, relationships, and access patterns.',
  },
  {
    icon: Network,
    title: 'Cross-chain access',
    description:
      'Reference and retrieve data across any PBaaS chain through a unified data model.',
  },
  {
    icon: Code2,
    title: 'Smart transactions',
    description:
      'Store, update, and retrieve data with protocol-level commands instead of custom smart contracts.',
  },
  {
    icon: Scale,
    title: 'Usage-based pricing',
    description:
      'Pay for the storage you use with transparent fees that flow to the chain validators.',
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
