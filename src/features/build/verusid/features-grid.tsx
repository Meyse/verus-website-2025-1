import type {LucideIcon} from 'lucide-react'

import {
  Code2,
  Coins,
  Database,
  Key,
  Lock,
  Network,
  Scale,
  Shield,
  Store,
} from 'lucide-react'

import {cn} from '@/lib/utils'

type Feature = {
  icon: LucideIcon
  title: string
  description: string
}

const features: Feature[] = [
  {
    icon: Key,
    title: 'Permanent namespace',
    description:
      'Use a unique, human-readable identity to launch currencies, tokens, and blockchains.',
  },
  {
    icon: Shield,
    title: 'Self-sovereign identity',
    description:
      'Give users durable identity control with revocation and recovery for key loss or theft.',
  },
  {
    icon: Network,
    title: 'Blockchain launching pad',
    description:
      'Launch interconnected, customizable blockchains with VerusID as the controlling namespace.',
  },
  {
    icon: Coins,
    title: 'Currency and token issuance',
    description:
      'Create currencies, tokens, and basket currencies with the issuer defined by VerusID.',
  },
  {
    icon: Database,
    title: 'Data publication and storage',
    description:
      'Publish structured data through VerusID and VDXF with nested, application-specific fields.',
  },
  {
    icon: Lock,
    title: 'Security controls',
    description:
      'Use Verus Vault, timelocks, revocation, recovery authorities, and multi-signature control.',
  },
  {
    icon: Scale,
    title: 'Multichain interoperability',
    description:
      'Use VerusIDs across PBaaS chains and Ethereum bridge-connected applications.',
  },
  {
    icon: Code2,
    title: 'Simple integration',
    description:
      'Integrate VerusID with familiar API commands and existing application stacks.',
  },
  {
    icon: Store,
    title: 'Decentralized marketplace',
    description:
      'Build direct exchange flows for VerusIDs and currencies without intermediaries.',
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
                'flex min-h-[210px] flex-col justify-center border-gray-200 px-8 py-9 dark:border-gray-800 md:min-h-[240px] md:px-8 md:py-10',
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
              <p className="mt-2 max-w-[300px] text-[14px] leading-relaxed tracking-normal text-gray-600 dark:text-gray-300 md:text-[15px]">
                {feature.description}
              </p>
            </article>
          )
        })}
      </div>
    </section>
  )
}
