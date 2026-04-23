import Image from 'next/image'

import {env} from '@/configs/env'
import {Check, ExternalLink} from 'lucide-react'
import {FaYoutube} from 'react-icons/fa'
import {IoLogoDiscord} from 'react-icons/io5'

// Updated component with dark mode support and improved styling
export function StakingSteps() {
  return (
    <div className="flex flex-col gap-8 md:max-w-[1220px] md:flex-row">
      {/* Info Box - Shows above on mobile, right side on desktop */}
      <div className="w-full flex-shrink-0 md:order-2 md:max-w-[400px]">
        <div className="w-full border border-gray-200 bg-white/80 p-4 pb-8 pt-8 shadow-[0_4px_40px_-12px_rgba(0,0,0,0.1)] backdrop-blur-sm dark:border-gray-800 dark:bg-gray-900/80 dark:shadow-[0_4px_40px_-12px_rgba(0,0,0,0.3)] md:rounded-lg md:p-8">
          <h2 className="mb-4 text-[18px] font-medium leading-[1.3] tracking-tight text-gray-900 dark:text-white md:text-[22px]">
            Extremely low-barrier staking for everyone.
          </h2>
          <div className="space-y-4">
            <p className="text-[14px] leading-[1.8] tracking-tight text-gray-700 dark:text-gray-300 md:text-[15px]">
              Staking takes up 50% of the consensus mechanism of Verus and its
              PBaaS-blockchains. You need to run a full node to participate in
              staking.
            </p>
            <p className="text-[14px] leading-[1.8] tracking-tight text-gray-700 dark:text-gray-300 md:text-[15px]">
              The more VRSC you stake, the higher your chances of finding blocks
              and earning rewards. There is no real minimum amount required to
              start staking.
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
                href="/papers"
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
                  Get your staking hardware.
                </h3>
                <p className="text-[14px] text-gray-700 dark:text-gray-300 md:max-w-[500px] md:text-[16px]">
                  Possible with Windows, macOS, Linux, Raspberry Pi, Orange Pi,
                  NUC, VM, you name it.
                </p>
              </div>
            </div>

            <div className="mt-8">
              <p className="mb-3 text-[13px] text-gray-600 dark:text-gray-400 md:text-[14px]">
                Recommended hardware requirements:
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[rgba(0,170,37,1)] dark:bg-green-600 md:h-7 md:w-7">
                    <Check className="h-4 w-4 text-white md:h-4 md:w-4" />
                  </div>
                  <span className="text-[14px] text-gray-900 dark:text-white md:text-[18px]">
                    64-bit OS & processor
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[rgba(0,170,37,1)] dark:bg-green-600 md:h-7 md:w-7">
                    <Check className="h-4 w-4 text-white md:h-4 md:w-4" />
                  </div>
                  <span className="text-[14px] text-gray-900 dark:text-white md:text-[18px]">
                    8GB memory (+4GB swap)
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[rgba(0,170,37,1)] dark:bg-green-600 md:h-7 md:w-7">
                    <Check className="h-4 w-4 text-white md:h-4 md:w-4" />
                  </div>
                  <span className="text-[14px] text-gray-900 dark:text-white md:text-[18px]">
                    50GB storage
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
                <p className="text-[14px] text-gray-700 dark:text-gray-300 md:max-w-[500px] md:text-[16px]">
                  You need a full node to participate in staking, so either
                  Verus Desktop (in native mode) or CLI.
                </p>
              </div>
            </div>

            <div className="mt-8 flex h-full flex-col items-center justify-between md:mt-auto md:flex-row">
              {/* Updated Button to match home participation section */}
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
                  src="/img/verus-desktop-cli.png"
                  alt="Verus Desktop"
                  width={120}
                  height={180}
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
                  Start staking with almost no barriers.
                </h3>
                <p className="text-[14px] text-gray-700 dark:text-gray-300 md:max-w-[500px] md:text-[16px]">
                  Verus is unique that it has extremely low-barrier staking.
                </p>
              </div>
            </div>

            <div className="mt-8">
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[rgba(0,170,37,1)] dark:bg-green-600 md:h-7 md:w-7">
                    <Check className="h-4 w-4 text-white md:h-4 md:w-4" />
                  </div>
                  <span className="text-[14px] text-gray-900 dark:text-white md:text-[18px]">
                    (Almost) no minimum requirements (0.00000001 VRSC)
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[rgba(0,170,37,1)] dark:bg-green-600 md:h-7 md:w-7">
                    <Check className="h-4 w-4 text-white md:h-4 md:w-4" />
                  </div>
                  <span className="text-[14px] text-gray-900 dark:text-white md:text-[18px]">
                    No slashing
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[rgba(0,170,37,1)] dark:bg-green-600 md:h-7 md:w-7">
                    <Check className="h-4 w-4 text-white md:h-4 md:w-4" />
                  </div>
                  <span className="text-[14px] text-gray-900 dark:text-white md:text-[18px]">
                    No lock-up—funds are always available
                  </span>
                </div>
              </div>
              <p className="mt-6 flex w-fit items-center gap-2 rounded-md border border-amber-200/50 bg-amber-50/50 px-3 py-2 text-[13px] text-amber-800 dark:border-amber-700/30 dark:bg-amber-900/20 dark:text-amber-300 md:mt-8 md:text-[14px]">
                Make sure to keep your node online 24/7 and always in sync with
                the network
              </p>
              <p className="mt-6 flex w-fit items-center gap-2 rounded-md border border-amber-200/50 bg-amber-50/50 px-3 py-2 text-[13px] text-amber-800 dark:border-amber-700/30 dark:bg-amber-900/20 dark:text-amber-300 md:mt-4 md:text-[14px]">
                Always be up to date with the latest version
              </p>
              <p className="mt-2 flex w-fit items-center gap-2 rounded-md border border-amber-200/50 bg-amber-50/50 px-3 py-2 text-[13px] text-amber-800 dark:border-amber-700/30 dark:bg-amber-900/20 dark:text-amber-300 md:mt-4 md:text-[14px]">
                Funds stake after 150 block confirmations
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
                  Earn more by running Bridgekeeper.
                </h3>
                <p className="text-[14px] text-gray-700 dark:text-gray-300 md:max-w-[500px] md:text-[16px]">
                  Optionally, but recommended for the network. It makes
                  cross-chain transfers between Verus and Ethereum possible.
                </p>
              </div>
            </div>

            <div className="mt-8 space-y-3">
              <a
                href="https://youtu.be/kyEqBX_erJo?si=7846soQuGwqIi6FS"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 text-[14px] text-verus-blue transition-colors hover:underline dark:text-blue-400 md:text-[15px]"
              >
                <FaYoutube className="h-5 w-5 text-[#FF0000]" />
                How to run Bridgekeeper with Verus Desktop
                <ExternalLink className="h-4 w-4 opacity-50 transition-opacity group-hover:opacity-100" />
              </a>
              <a
                href="https://youtu.be/Ml3bFNcpVjw?si=lY-puXXavW-0i3tY"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 text-[14px] text-verus-blue transition-colors hover:underline dark:text-blue-400 md:text-[15px]"
              >
                <FaYoutube className="h-5 w-5 text-[#FF0000]" />
                How to run Bridgekeeper with CLI
                <ExternalLink className="h-4 w-4 opacity-50 transition-opacity group-hover:opacity-100" />
              </a>
            </div>

            <p className="mt-6 flex w-fit items-center gap-2 rounded-md border border-amber-200/50 bg-amber-50/50 px-3 py-2 text-[13px] text-amber-800 dark:border-amber-700/30 dark:bg-amber-900/20 dark:text-amber-300 md:mt-8 md:text-[14px]">
              The more people run Bridgekeeper the faster cross-chain transfers
              happen
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
