import type {Metadata} from 'next'

import {MiningSteps} from '@/features/mining/steps'

import {BgWrapper} from '@/components/bg-wrapper'

export const metadata: Metadata = {
  title: 'Start Mining VRSC',
  description:
    'Contribute to network security while earning rewards with your computer or mining hardware.',
  keywords:
    'crypto mining, mobile mining, VRSC mining, Verus coin mining, blockchain mining, cryptocurrency rewards, CPU mining',
}

export default function MiningPage() {
  return (
    <BgWrapper>
      <div className="bg-gradient-to-b from-gray-100 via-gray-100 to-white dark:from-gray-950 dark:via-gray-950 dark:to-gray-950">
        <div className="flex flex-col items-center px-0 pb-16 pt-0 md:pb-24 xl:px-4 xl:pt-[54px]">
          <div className="w-full min-w-0 max-w-full overflow-hidden border-b border-gray-200 bg-gray-50 shadow-[0_4px_40px_-12px_rgba(0,0,0,0.1)] dark:border-gray-800 dark:bg-gray-950 dark:shadow-[0_4px_40px_-12px_rgba(0,0,0,0.2)] xl:max-w-[1220px] xl:rounded-lg xl:border">
            <section className="border-b border-gray-200 bg-gradient-to-br from-blue-50 to-white px-8 py-12 dark:border-gray-800 dark:from-blue-950/40 dark:to-gray-950 md:px-14 md:py-16">
              <h1 className="max-w-[760px] break-words text-[28px] font-medium leading-[1.2] tracking-tight text-gray-800 dark:text-white md:text-[44px]">
                Start mining VRSC and other ecosystem coins
              </h1>
              <p className="mt-4 max-w-[760px] break-words text-[15px] leading-relaxed tracking-normal text-gray-600 dark:text-gray-300 md:mt-6 md:text-[17px]">
                Contribute to network security while earning rewards with your
                computer or mining hardware.
              </p>
            </section>

            <MiningSteps />
          </div>
        </div>
      </div>
    </BgWrapper>
  )
}
