import type {Metadata} from 'next'

import {GetVrscSections} from '@/features/get-vrsc/components/sections'

import {BgWrapper} from '@/components/bg-wrapper'

export const metadata: Metadata = {
  title: 'Get VRSC',
  description:
    'Multiple ways to acquire VRSC: through Verus DeFi, exchanges, mining, or staking.',
  keywords:
    'get VRSC, buy VRSC, acquire cryptocurrency, Verus coin, crypto exchanges, mining VRSC, staking VRSC',
}

export default function GetVrscPage() {
  return (
    <BgWrapper>
      <div className="bg-gradient-to-b from-gray-100 via-gray-100 to-white dark:from-gray-950 dark:via-gray-950 dark:to-gray-950">
        <div className="flex flex-col items-center px-0 pb-16 pt-0 md:pb-24 xl:px-4 xl:pt-[54px]">
          <div className="w-screen min-w-0 max-w-full overflow-hidden border-b border-gray-200 bg-gray-50 shadow-[0_4px_40px_-12px_rgba(0,0,0,0.1)] dark:border-gray-800 dark:bg-gray-950 dark:shadow-[0_4px_40px_-12px_rgba(0,0,0,0.2)] xl:w-full xl:max-w-[1220px] xl:rounded-lg xl:border">
            <section className="border-b border-gray-200 bg-gray-50 px-8 py-12 text-center dark:border-gray-800 dark:bg-gray-950 md:px-14 md:py-16">
              <h1 className="mx-auto max-w-[330px] text-[30px] font-medium leading-[1.05] tracking-tight text-gray-800 dark:text-white sm:max-w-[900px] md:text-[58px]">
                Get VRSC
              </h1>
              <p className="mx-auto mt-4 max-w-[330px] text-[16px] font-normal leading-relaxed tracking-normal text-gray-600 dark:text-gray-300 sm:max-w-[760px] md:mt-5 md:text-[22px]">
                Convert through Verus DeFi, use an exchange, or earn VRSC by
                mining and staking.
              </p>
            </section>

            <GetVrscSections />
          </div>
        </div>
      </div>
    </BgWrapper>
  )
}
