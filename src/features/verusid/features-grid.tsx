import type {LucideIcon} from 'lucide-react'

import {Database, Globe, Key, LockKeyhole, Shield, Wallet} from 'lucide-react'

import {cn} from '@/lib/utils'

type Feature = {
  icon: LucideIcon
  title: string
  description: string
}

const features: Feature[] = [
  {
    icon: Database,
    title: 'Personal digital database',
    description:
      'Store preferences, settings, and digital identity data in a portable database you control.',
  },
  {
    icon: Key,
    title: 'True data ownership',
    description:
      'Keep your data with you instead of scattering it across platforms that control access.',
  },
  {
    icon: Globe,
    title: 'Portable digital interaction',
    description:
      'Use password-free logins, portable service data, and user-approved sharing across applications.',
  },
  {
    icon: Shield,
    title: 'Privacy by design',
    description:
      'Use encrypted communication, private transactions, and selective disclosure when you share information.',
  },
  {
    icon: Wallet,
    title: 'Secure asset management',
    description:
      'Manage assets with revocation, recovery, time locks, and multi-signature controls.',
  },
  {
    icon: LockKeyhole,
    title: 'Recoverable identity control',
    description:
      'Protect your identity from key loss or theft with recovery and revocation authorities.',
  },
]

export function FeaturesGrid() {
  return (
    <section className="bg-gradient-to-br from-blue-50 to-white dark:from-blue-950/40 dark:to-gray-950">
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
              <h2 className="text-[18px] font-bold leading-tight text-gray-800 dark:text-white md:text-[20px]">
                {feature.title}
              </h2>
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
