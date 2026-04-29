import {
  Battery,
  Cpu,
  GitMerge,
  Leaf,
  MonitorSmartphone,
  ShieldCheck,
  Users,
} from 'lucide-react'

import {cn} from '@/lib/utils'

const features = [
  {
    icon: Cpu,
    title: 'CPU-optimized mining',
    description:
      'VerusHash is designed for everyday processors, so mining does not depend on specialized hardware.',
  },
  {
    icon: GitMerge,
    title: 'Efficient merge mining',
    description:
      'Miners can secure multiple PBaaS chains with the same work instead of repeating that work chain by chain.',
  },
  {
    icon: Leaf,
    title: 'Lower-energy design',
    description:
      'Proof-of-stake carries half of the consensus work, reducing the energy profile compared with pure proof-of-work.',
  },
  {
    icon: ShieldCheck,
    title: 'Hybrid consensus',
    description:
      'Verus Proof of Power combines proof-of-work and proof-of-stake so neither side controls consensus alone.',
  },
  {
    icon: Battery,
    title: 'Low-power devices',
    description:
      'Phones, ARM devices, and regular computers can participate without purpose-built mining equipment.',
  },
  {
    icon: Users,
    title: 'Open participation',
    description:
      'Mining and staking are open to more people, which helps distribute network security across more participants.',
  },
  {
    icon: MonitorSmartphone,
    title: 'Commodity hardware',
    description:
      'Multi-purpose devices can contribute to the network while still being useful for normal computing tasks.',
  },
] as const

export function GreenFeaturesGrid() {
  return (
    <section className="bg-gray-50 dark:bg-gray-950">
      <div className="grid grid-cols-1 md:grid-cols-3">
        {features.map((feature, index) => {
          const Icon = feature.icon
          const isDesktopFirstColumn = index % 3 === 0
          const isDesktopBottomRow = index >= features.length - 1

          return (
            <article
              key={feature.title}
              className={cn(
                'min-w-0 border-gray-200 px-10 py-10 dark:border-gray-800 md:px-14 md:py-12',
                index > 0 && 'max-md:border-t',
                !isDesktopFirstColumn && 'md:border-l',
                !isDesktopBottomRow && 'md:border-b',
                index === features.length - 1 && 'md:col-span-3'
              )}
            >
              <div className="w-full max-w-[310px] md:max-w-none">
                <div className="mb-4 flex items-center gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-900">
                    <Icon className="h-5 w-5 text-green-600 dark:text-green-400" />
                  </div>
                  <h2 className="text-[16px] font-medium text-gray-800 dark:text-white md:text-[18px]">
                    {feature.title}
                  </h2>
                </div>
                <p className="break-words text-[15px] leading-relaxed tracking-normal text-gray-600 dark:text-gray-300 md:text-[16px]">
                  {feature.description}
                </p>
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}
