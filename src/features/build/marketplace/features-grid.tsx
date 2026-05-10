import type {LucideIcon} from 'lucide-react'

import {BookOpen, Code2, Cpu, Database, Layers, Lock} from 'lucide-react'

import {cn} from '@/lib/utils'

type Feature = {
  icon: LucideIcon
  title: string
  description: string
}

const features: Feature[] = [
  {
    icon: Code2,
    title: 'Open protocol API',
    description:
      'Integrate marketplace functionality with RPC commands and build commercial applications without proprietary restrictions.',
  },
  {
    icon: Database,
    title: 'Decentralized offer discovery',
    description:
      'Query available offers for specific assets without maintaining centralized order books or databases.',
  },
  {
    icon: Layers,
    title: 'Composable trading architecture',
    description:
      'Combine marketplace functions with identity, storage, and DeFi primitives for specialized trading applications.',
  },
  {
    icon: Lock,
    title: 'Privacy-preserving commerce',
    description:
      'Use zero-knowledge transactions for sensitive trading flows while keeping settlement verifiable on-chain.',
  },
  {
    icon: BookOpen,
    title: 'Smart asset transfers',
    description:
      'Handle VerusIDs, attached rights, access controls, and other asset transfer requirements.',
  },
  {
    icon: Cpu,
    title: 'Trustless settlement engine',
    description:
      'Use multi-asset atomic trades that complete in both directions or do not execute at all.',
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
