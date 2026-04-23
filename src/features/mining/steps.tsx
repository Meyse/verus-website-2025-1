import Image from 'next/image'

import {env} from '@/configs/env'
import {Check, ExternalLink} from 'lucide-react'
import {IoLogoDiscord} from 'react-icons/io5'

// Updated component with dark mode support and improved styling
export function MiningSteps() {
  return (
    <div className="flex flex-col gap-8 md:max-w-[1220px] md:flex-row">
      {/* Info Box - Shows above on mobile, right side on desktop */}
      <div className="w-full flex-shrink-0 md:order-2 md:max-w-[400px]">
        <div className="w-full border border-gray-200 bg-white/80 p-4 pb-8 pt-8 shadow-[0_4px_40px_-12px_rgba(0,0,0,0.1)] backdrop-blur-sm dark:border-gray-800 dark:bg-gray-900/80 dark:shadow-[0_4px_40px_-12px_rgba(0,0,0,0.3)] md:rounded-lg md:p-8">
          <h2 className="mb-4 text-[18px] font-medium leading-[1.3] tracking-tight text-gray-900 dark:text-white md:text-[22px]">
            Merge-mine up to 22 ecosystem coins, simultaneously.
          </h2>
          <div className="space-y-4">
            <p className="text-[14px] leading-[1.8] tracking-tight text-gray-700 dark:text-gray-300 md:text-[15px]">
              Mining takes up 50% of the consensus mechanism of Verus and its
              PBaaS-blockchains. You don't need expensive hardware to get
              started.
            </p>
            <p className="text-[14px] leading-[1.8] tracking-tight text-gray-700 dark:text-gray-300 md:text-[15px]">
              Merge-mine up to 22 ecosystem coins on one device with the same
              hashrate, giving miners greater profitability. Check to see which
              pools support merge-mining.
            </p>
          </div>
          <h2 className="mb-4 mt-8 text-[18px] font-medium leading-[1.3] tracking-tight text-gray-900 dark:text-white md:mt-12 md:text-[22px]">
            Verus Proof of Power—ultimate blockchain security.
          </h2>
          <div className="space-y-4">
            <p className="text-[14px] leading-[1.8] tracking-tight text-gray-700 dark:text-gray-300 md:text-[15px]">
              Verus has a unique consensus mechanism called Verus Proof of Power
              (VerusPoP). It's hybrid 50/50% proof-of-power and proof-of-stake.
              In short: 50% of all blocks are validated by miners, and 50% by
              stakers. All ecosystem blockchains inherit this consensus
              mechanism.
            </p>
            <p className="text-[14px] leading-[1.8] tracking-tight text-gray-700 dark:text-gray-300 md:text-[15px]">
              It is a provable solution to 51% hash attacks.{' '}
              <a
                href="/papers/VerusPoP.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-verus-blue transition-colors hover:underline dark:text-blue-400"
              >
                Find the paper here
              </a>
              .
            </p>
          </div>
        </div>
      </div>

      {/* Steps - Shows below on mobile, left side on desktop */}
      <div className="flex flex-col gap-4 md:order-1 md:w-[700px] md:gap-8">
        {/* Step 1 */}
        <div className="w-full border-2 border-[#E9EFFC] bg-gradient-to-b from-[#E9EFFC] to-white p-6 shadow-[0_4px_40px_-12px_rgba(0,0,0,0.1)] backdrop-blur-sm transition-all duration-300 hover:shadow-lg dark:border-blue-900/30 dark:from-blue-950/40 dark:to-gray-900 dark:shadow-[0_4px_40px_-12px_rgba(0,0,0,0.3)] md:rounded-lg md:p-8">
          <div className="flex h-full flex-col">
            <div className="flex items-center gap-4">
              <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-verus-blue/10 dark:bg-blue-900/30 md:h-12 md:w-12">
                <span className="text-xl font-medium text-verus-blue dark:text-blue-400 md:text-2xl">
                  1
                </span>
              </div>
              <div>
                <h3 className="text-[18px] font-medium text-gray-900 dark:text-white md:text-[22px]">
                  Get your mining hardware.
                </h3>
                <p className="text-[14px] text-gray-700 dark:text-gray-300 md:text-[16px]">
                  Choose the device(s) you want to mine with.
                </p>
              </div>
            </div>

            <div className="mt-8">
              <p className="mb-3 text-[13px] text-gray-600 dark:text-gray-400 md:text-[14px]">
                Recommended devices for most efficient hash per watt:
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[rgba(0,170,37,1)] dark:bg-green-600 md:h-7 md:w-7">
                    <Check className="h-4 w-4 text-white md:h-4 md:w-4" />
                  </div>
                  <span className="text-[14px] text-gray-900 dark:text-white md:text-[18px]">
                    ARM (e.g. mobile phones, Orange Pi 5)
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[rgba(0,170,37,1)] dark:bg-green-600 md:h-7 md:w-7">
                    <Check className="h-4 w-4 text-white md:h-4 md:w-4" />
                  </div>
                  <span className="text-[14px] text-gray-900 dark:text-white md:text-[18px]">
                    CPU
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Step 2 */}
        <div className="w-full border-2 border-[#E9EFFC] bg-gradient-to-b from-[#E9EFFC] to-white p-6 pb-0 shadow-[0_4px_40px_-12px_rgba(0,0,0,0.1)] backdrop-blur-sm transition-all duration-300 hover:shadow-lg dark:border-blue-900/30 dark:from-blue-950/40 dark:to-gray-900 dark:shadow-[0_4px_40px_-12px_rgba(0,0,0,0.3)] md:rounded-lg md:pb-0 md:pl-8 md:pr-8 md:pt-8">
          <div className="flex h-full flex-col">
            <div className="flex items-center gap-4">
              <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-verus-blue/10 dark:bg-blue-900/30 md:h-12 md:w-12">
                <span className="text-xl font-medium text-verus-blue dark:text-blue-400 md:text-2xl">
                  2
                </span>
              </div>
              <div>
                <h3 className="text-[18px] font-medium text-gray-900 dark:text-white md:text-[22px]">
                  Download the wallet that works for you.
                </h3>
                <p className="text-[14px] text-gray-700 dark:text-gray-300 md:text-[16px]">
                  Use an address from this wallet to receive coins on.
                </p>
              </div>
            </div>

            <div className="mt-4 flex">
              <p className="flex w-fit items-center gap-2 rounded-md border border-amber-200/50 bg-amber-50/50 px-3 py-2 text-[13px] text-amber-800 dark:border-amber-700/30 dark:bg-amber-900/20 dark:text-amber-300 md:text-[14px]">
                Do not mine to exchanges directly, it will go wrong
              </p>
            </div>

            <div className="mt-8 flex h-full flex-col items-center justify-between md:mt-auto md:flex-row">
              {/* Button */}
              <div className="mb-8 w-full md:mb-0 md:w-auto">
                <a
                  href="/wallet"
                  className="group flex h-[40px] w-full items-center justify-center rounded-lg border border-blue-200 bg-white/80 px-8 text-[14px] font-medium text-verus-blue backdrop-blur-sm transition-all duration-300 hover:border-blue-300 hover:text-blue-600 dark:border-blue-800/60 dark:bg-blue-950/80 dark:text-blue-300 dark:hover:border-blue-700 dark:hover:text-blue-200 md:h-[50px] md:w-fit md:text-[16px]"
                >
                  Choose wallet
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </a>
              </div>

              {/* Image */}
              <div className="flex w-full justify-center md:mt-8 md:w-auto">
                <Image
                  src="/img/wallets-small.png"
                  alt="Verus Wallets"
                  height={120}
                  width={120}
                  className="h-[120px] w-auto object-contain dark:brightness-90 md:h-[180px]"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Step 3 */}
        <div className="w-full border-2 border-[#E9EFFC] bg-gradient-to-b from-[#E9EFFC] to-white p-6 shadow-[0_4px_40px_-12px_rgba(0,0,0,0.1)] backdrop-blur-sm transition-all duration-300 hover:shadow-lg dark:border-blue-900/30 dark:from-blue-950/40 dark:to-gray-900 dark:shadow-[0_4px_40px_-12px_rgba(0,0,0,0.3)] md:rounded-lg md:p-8">
          <div className="flex h-full flex-col">
            <div className="flex items-center gap-4">
              <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-verus-blue/10 dark:bg-blue-900/30 md:h-12 md:w-12">
                <span className="text-xl font-medium text-verus-blue dark:text-blue-400 md:text-2xl">
                  3
                </span>
              </div>
              <div>
                <h3 className="text-[18px] font-medium text-gray-900 dark:text-white md:text-[22px]">
                  Download mining software.
                </h3>
                <p className="text-[14px] text-gray-700 dark:text-gray-300 md:text-[16px]">
                  Use this software to mine coins with.
                </p>
              </div>
            </div>

            <a
              href={`${env.NEXT_PUBLIC_VERUS_DOCS}/economy/start-mining.html#mining-software`}
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-8 flex h-[40px] w-fit items-center justify-center gap-2 rounded-lg border border-blue-200 bg-white/80 px-8 text-[14px] font-medium text-verus-blue backdrop-blur-sm transition-all duration-300 hover:border-blue-300 hover:text-blue-600 dark:border-blue-800/60 dark:bg-blue-950/80 dark:text-blue-300 dark:hover:border-blue-700 dark:hover:text-blue-200 md:h-[50px] md:text-[16px]"
            >
              Go to mining software
              <ExternalLink className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>

            <div className="mt-4 flex">
              <p className="flex w-fit items-center gap-2 rounded-md border border-amber-200/50 bg-amber-50/50 px-3 py-2 text-[13px] text-amber-800 dark:border-amber-700/30 dark:bg-amber-900/20 dark:text-amber-300 md:text-[14px]">
                You can always choose to solo mine with Verus Desktop
              </p>
            </div>
          </div>
        </div>

        {/* Discord Help Box */}
        <a
          href={env.NEXT_PUBLIC_DISCORD}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex h-[40px] w-full items-center gap-3 bg-[#444EE5] p-4 transition-all duration-300 hover:bg-[#3942cc] md:h-[50px] md:rounded-lg md:p-6"
        >
          <IoLogoDiscord className="h-5 w-5 text-white md:h-6 md:w-6" />
          <span className="text-[14px] font-medium text-white md:text-[16px]">
            Need a hand? Ask on Discord
          </span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="ml-auto h-4 w-4 text-white transition-transform duration-300 group-hover:translate-x-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            />
          </svg>
        </a>

        {/* Step 4 */}
        <div className="w-full border-2 border-[#E9EFFC] bg-gradient-to-b from-[#E9EFFC] to-white p-6 shadow-[0_4px_40px_-12px_rgba(0,0,0,0.1)] backdrop-blur-sm transition-all duration-300 hover:shadow-lg dark:border-blue-900/30 dark:from-blue-950/40 dark:to-gray-900 dark:shadow-[0_4px_40px_-12px_rgba(0,0,0,0.3)] md:rounded-lg md:p-8">
          <div className="flex h-full flex-col">
            <div className="flex items-center gap-4">
              <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-verus-blue/10 dark:bg-blue-900/30 md:h-12 md:w-12">
                <span className="text-xl font-medium text-verus-blue dark:text-blue-400 md:text-2xl">
                  4
                </span>
              </div>
              <div>
                <h3 className="text-[18px] font-medium text-gray-900 dark:text-white md:text-[22px]">
                  Choose mining pool.
                </h3>
                <p className="text-[14px] text-gray-700 dark:text-gray-300 md:text-[16px]">
                  Use the pool to receive steady small payments.
                </p>
              </div>
            </div>

            <a
              href={`${env.NEXT_PUBLIC_VERUS_DOCS}/economy/start-mining.html#mining-pools`}
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-8 flex h-[40px] w-fit items-center justify-center gap-2 rounded-lg border border-blue-200 bg-white/80 px-8 text-[14px] font-medium text-verus-blue backdrop-blur-sm transition-all duration-300 hover:border-blue-300 hover:text-blue-600 dark:border-blue-800/60 dark:bg-blue-950/80 dark:text-blue-300 dark:hover:border-blue-700 dark:hover:text-blue-200 md:h-[50px] md:text-[16px]"
            >
              Choose a pool
              <ExternalLink className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>

            <div className="mt-4 flex">
              <p className="flex w-fit items-center gap-2 rounded-md border border-amber-200/50 bg-amber-50/50 px-3 py-2 text-[13px] text-amber-800 dark:border-amber-700/30 dark:bg-amber-900/20 dark:text-amber-300 md:text-[14px]">
                Not all pools support merge-mining
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
