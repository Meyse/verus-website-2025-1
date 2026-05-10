import type {Metadata} from 'next'

import {ContributionWays} from '@/features/contribute/ways'
import {Info} from 'lucide-react'

import {BgWrapper} from '@/components/bg-wrapper'

export const metadata: Metadata = {
  title: 'Contribute to Verus',
  description:
    'Help shape the future of blockchain technology by contributing to Verus in various ways—from code and marketing to community support and financial backing.',
  keywords:
    'contribute blockchain, Verus contribution, open source contribution, blockchain development, community support',
  alternates: {
    canonical: '/contribute',
  },
}

export default function ContributePage() {
  return (
    <BgWrapper>
      <div className="bg-gradient-to-b from-gray-100 via-gray-100 to-white dark:from-gray-950 dark:via-gray-950 dark:to-gray-950">
        <div className="flex flex-col items-center px-0 pb-16 pt-0 md:pb-24 xl:px-4 xl:pt-[54px]">
          <div className="w-full min-w-0 max-w-full overflow-hidden border-b border-gray-200 bg-gray-50 shadow-[0_4px_40px_-12px_rgba(0,0,0,0.1)] dark:border-gray-800 dark:bg-gray-950 dark:shadow-[0_4px_40px_-12px_rgba(0,0,0,0.2)] xl:max-w-[1220px] xl:rounded-lg xl:border">
            <section className="border-b border-gray-200 bg-gradient-to-br from-blue-50 to-white dark:border-gray-800 dark:from-blue-950/40 dark:to-gray-950">
              <div className="grid min-w-0 grid-cols-1 md:grid-cols-[minmax(0,2.2fr)_minmax(280px,0.8fr)]">
                <div className="min-w-0 px-8 py-12 md:px-14 md:py-16">
                  <h1 className="max-w-[680px] break-words text-[28px] font-medium leading-[1.2] tracking-tight text-gray-800 dark:text-white max-md:max-w-[calc(100vw-4rem)] md:text-[44px]">
                    Contribute to Verus
                  </h1>
                  <p className="mt-4 max-w-[760px] break-words text-[15px] leading-relaxed tracking-normal text-gray-600 dark:text-gray-300 max-md:max-w-[calc(100vw-4rem)] md:mt-6 md:text-[17px]">
                    Help move Verus forward through code, documentation,
                    community support, mining, staking, donations, and other
                    practical work across the ecosystem.
                  </p>
                </div>

                <aside className="min-w-0 border-t border-gray-200 px-8 py-10 dark:border-gray-800 md:border-l md:border-t-0 md:px-8 md:py-12">
                  <div className="flex h-full flex-col justify-center">
                    <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg border border-gray-200 bg-white text-verus-blue dark:border-gray-800 dark:bg-gray-900 dark:text-blue-400">
                      <Info className="h-5 w-5" />
                    </div>
                    <h3 className="text-[30px] font-medium leading-[1.2] tracking-tight text-gray-800 dark:text-white">
                      Community-driven work
                    </h3>
                    <p className="mt-3 max-w-[380px] break-words text-[15px] leading-relaxed tracking-normal text-gray-600 dark:text-gray-300">
                      Verus has no ICO, premine, or dev fee. Community
                      contributions are important for development, support,
                      education, and everyday network participation.
                    </p>
                  </div>
                </aside>
              </div>
            </section>

            <ContributionWays />
          </div>
        </div>
      </div>
    </BgWrapper>
  )
}
