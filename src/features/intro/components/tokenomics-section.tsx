import {Suspense} from 'react'

import {CirculatingSupplyDisplay} from './circulating-supply'
import {SupplySkeleton} from './supply-skeleton'

export function TokenomicsSection() {
  return (
    <section className="border-t border-gray-200 bg-gray-50 dark:border-gray-800 dark:bg-gray-950">
      <div className="flex w-full flex-col items-start justify-center px-10 py-20 md:px-14 md:py-32">
        <div className="w-full max-w-[310px] md:max-w-[760px]">
          <h2 className="mb-4 break-words text-[28px] font-medium leading-[1.2] tracking-tight text-gray-800 dark:text-white md:mb-8 md:text-[44px]">
            A credibly neutral protocol for the world, made by the worldwide
            community
          </h2>
          <div className="space-y-4 text-[15px] leading-relaxed tracking-normal text-gray-600 dark:text-gray-300 md:text-[17px]">
            <p>
              Every coin in circulation is earned through pure mining and
              staking, just like Bitcoin (except for the staking part, of
              course). Why does this matter? Because it guarantees true
              neutrality from day one.
            </p>
            <p>
              Most blockchain projects start with ICOs or premines that
              concentrate power and wealth in the hands of a select few. These
              early holders can manipulate markets and dictate the project's
              future. Verus took a different path: no premine, no ICO, and no
              venture capital influence. Just fair distribution from the start.
            </p>
            <p>
              So who shapes Verus's future? You do. The community does. As a
              genuinely public network built by and for the public, Verus's
              direction is determined by those who participate, not by any
              centralized authority. This foundation of community governance is
              permanent and unchangeable.
            </p>
            <p>
              Like Bitcoin, Verus follows a transparent and fair economic model.
              Every coin is earned through mining and staking, a core
              requirement for truly neutral public infrastructure. This creates
              an ecosystem where participation equals influence.
            </p>
          </div>
        </div>
      </div>

      <div className="grid w-full grid-cols-1 border-t border-gray-200 dark:border-gray-800 md:grid-cols-2">
        <div className="min-w-0 px-10 py-10 md:px-14 md:py-12">
          <div className="w-full">
            <Suspense fallback={<SupplySkeleton />}>
              <CirculatingSupplyDisplay />
            </Suspense>
          </div>
        </div>

        <div className="min-w-0 border-t border-gray-200 dark:border-gray-800 md:border-l md:border-t-0">
          <div className="w-full">
            {[
              ['to investors', '0%'],
              ['to founders', '0%'],
              ['to insiders', '0%'],
              ['to VCs', '0%'],
              ['premined', '0%'],
              ['dev fees', '0%'],
            ].map(([label, value]) => (
              <div
                key={label}
                className="flex items-center justify-between border-b border-gray-200 px-10 py-4 dark:border-gray-800 md:px-14"
              >
                <span className="text-[14px] text-gray-600 dark:text-gray-300">
                  {label}
                </span>
                <span className="text-[14px] font-medium text-gray-800 dark:text-white">
                  {value}
                </span>
              </div>
            ))}

            <div className="flex items-center justify-between bg-blue-50 px-10 py-4 dark:bg-blue-950/30 md:px-14">
              <span className="text-[14px] font-medium text-[#3165D4] dark:text-blue-300">
                fairly mined & staked
              </span>
              <span className="text-[14px] font-medium text-[#3165D4] dark:text-blue-300">
                100%
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
