import {Suspense} from 'react'

import {TextLinkButton} from '@/components/ui/text-link-button'

import {CirculatingSupplyDisplay} from './circulating-supply'
import {SupplySkeleton} from './supply-skeleton'

export function TokenomicsSection() {
  return (
    <section
      id="fair-launch"
      className="scroll-mt-20 border-t border-gray-200 bg-gray-50 dark:border-gray-800 dark:bg-gray-950"
    >
      <div className="flex w-full flex-col items-start justify-center px-10 py-20 md:px-14 md:py-32">
        <div className="w-full max-w-[310px] md:max-w-[760px]">
          <h2 className="mb-4 break-words text-[28px] font-medium leading-[1.2] tracking-tight text-gray-800 dark:text-white md:mb-8 md:text-[44px]">
            Fifteen minutes before the first block
          </h2>
          <div className="space-y-4 text-[15px] leading-relaxed tracking-normal text-gray-600 dark:text-gray-300 md:text-[17px]">
            <p>
              On May 21, 2018, Verus was announced publicly with mining set to
              begin 15 minutes later. There was no premine, no ICO, no founder
              or venture-capital allocation, and no developer fee. Everyone
              entered under the same public launch conditions.
            </p>
            <p>
              The block reward began with a gradual one-week ramp. Large early
              mining and staking rewards were time-locked before they could be
              spent. Every VRSC in circulation has been earned through mining or
              staking rather than issued to investors or insiders before the
              public could participate.
            </p>
            <p>
              Those choices gave Verus a credibly neutral starting point. With
              no company, founder, or VC allocation controlling the network,
              development and governance grew through miners, stakers,
              developers, and the wider community. The fair launch was part of
              how the network started, not a label added later.
            </p>
          </div>
          <TextLinkButton
            href="https://bitcointalk.org/index.php?topic=4070404.0"
            className="-ml-2 mt-5"
          >
            Read the original launch announcement
          </TextLinkButton>
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
