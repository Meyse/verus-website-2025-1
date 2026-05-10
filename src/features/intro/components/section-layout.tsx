import type {ReactNode} from 'react'
import type {LucideIcon} from 'lucide-react'

import {cn} from '@/lib/utils'

type SectionTone = 'neutral' | 'gradient'

export type IntroFeature = {
  icon: LucideIcon
  title: string
  description: ReactNode
}

export function IntroFeatureSection({
  action,
  children,
  features,
  title,
  tone = 'neutral',
}: {
  action?: ReactNode
  children: ReactNode
  features: readonly IntroFeature[]
  title: string
  tone?: SectionTone
}) {
  return (
    <section
      className={cn(
        'border-t border-gray-200 dark:border-gray-800',
        tone === 'gradient'
          ? 'bg-gradient-to-br from-blue-50 to-white dark:from-blue-950/40 dark:to-gray-950'
          : 'bg-gray-50 dark:bg-gray-950'
      )}
    >
      <div className="flex w-full flex-col items-start justify-center px-10 py-20 md:px-14 md:py-32">
        <div className="w-full max-w-[310px] md:max-w-[760px]">
          <h2 className="mb-4 break-words text-[28px] font-medium leading-[1.2] tracking-tight text-gray-800 dark:text-white md:mb-8 md:text-[44px]">
            {title}
          </h2>
          <div className="space-y-4 text-[15px] leading-relaxed tracking-normal text-gray-600 dark:text-gray-300 md:text-[17px]">
            {children}
          </div>
          {action}
        </div>
      </div>

      <div className="grid w-full grid-cols-1 border-t border-gray-200 dark:border-gray-800 md:grid-cols-3">
        {features.map((feature, index) => {
          const Icon = feature.icon

          return (
            <article
              key={feature.title}
              className={cn(
                'min-w-0 border-gray-200 px-10 py-10 dark:border-gray-800 md:px-14 md:py-12',
                index > 0 && 'max-md:border-t md:border-l'
              )}
            >
              <div className="w-full max-w-[310px] md:max-w-none">
                <div className="mb-4 flex items-center gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-900">
                    <Icon className="h-5 w-5 text-verus-blue dark:text-blue-400" />
                  </div>
                  <h3 className="text-[16px] font-medium text-gray-800 dark:text-white md:text-[18px]">
                    {feature.title}
                  </h3>
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
