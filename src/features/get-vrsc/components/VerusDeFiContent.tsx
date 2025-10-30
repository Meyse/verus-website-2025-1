import Link from 'next/link'
import { Suspense } from 'react'

import { env } from '@/configs/env'
import { ArrowLeftRight, Coins, ExternalLink } from 'lucide-react'

import { LiquidSection, VolumeSection } from './VerusDeFiSection'

/*
 * VerusDeFiSection - Server Component
 * - First section of the Get VRSC page showing Verus DeFi options
 * - Displays protocol statistics with data from API
 * - Includes video tutorials and wallet download links
 * - Fully server-rendered except for the data fetching
 */
export function VerusDeFiContent() {
  return (
    <section className="relative w-full overflow-hidden rounded-2xl border border-blue-100/80 bg-white/80 backdrop-blur-sm dark:border-blue-900/30 dark:bg-gray-800/50">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.08),transparent_50%)] dark:bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.15),transparent_50%)]"></div>
      <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-blue-400/10 blur-2xl dark:bg-blue-400/20"></div>

      <div className="relative p-6 md:p-10">
        <div className="mb-6 flex items-center gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-blue-100/80 bg-white/90 text-blue-600 shadow-sm dark:border-blue-900/30 dark:bg-gray-800/90 dark:text-blue-400">
            <ArrowLeftRight className="h-6 w-6" />
          </div>
          <h2 className="text-[20px] font-medium text-gray-900 dark:text-white md:text-[28px]">
            Verus DeFi
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-10">
          <div>
            <p className="mb-6 text-[15px] leading-relaxed text-gray-700 dark:text-gray-300 md:text-[16px]">
              The most efficient way to acquire VRSC is directly through Verus
              DeFi. Native protocol-level liquidity pools allow you to exchange
              various cryptocurrencies for VRSC with minimal fees (0.025-0.05%).
            </p>

            {/* Protocol Statistics Card */}
            <div className="mb-8 rounded-xl border border-blue-200/60 dark:bg-blue-600/10 bg-white p-4 backdrop-blur-sm dark:border-blue-800/40 dark:bg-blue-900/30">
              <div className="mb-2 text-[12px] font-medium uppercase tracking-wider text-blue-600 dark:text-blue-400">
                Protocol Activity
              </div>

              <div className="flex flex-col gap-3">
                {/* Volume */}
                <div className="flex items-center justify-between">
                  <div>
                    <div className="flex items-center gap-1.5">
                      <span className="text-[20px] font-medium text-gray-900 dark:text-white md:text-[24px]">
                        <Suspense
                          fallback={
                            <div className="h-6 w-24 animate-pulse rounded bg-gray-200 dark:bg-gray-700" />
                          }
                        >
                          <VolumeSection />
                        </Suspense>
                      </span>
                      <span className="text-[14px] font-medium text-gray-600 dark:text-gray-300">
                        24H Protocol Volume
                      </span>
                    </div>
                  </div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-blue-500/20 to-blue-600/20 dark:from-blue-500/30 dark:to-blue-700/30">
                    <ArrowLeftRight className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                </div>

                {/* Liquidity */}
                <div className="flex items-center justify-between">
                  <div>
                    <div className="flex items-center gap-1.5">
                      <span className="text-[20px] font-medium text-gray-900 dark:text-white md:text-[24px]">
                        <Suspense
                          fallback={
                            <div className="h-6 w-24 animate-pulse rounded bg-gray-200 dark:bg-gray-700" />
                          }
                        >
                          <LiquidSection />
                        </Suspense>
                      </span>
                      <span className="text-[14px] font-medium text-gray-600 dark:text-gray-300">
                        in Liquidity Pools
                      </span>
                    </div>
                  </div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-green-500/20 to-green-600/20 dark:from-green-500/30 dark:to-green-700/30">
                    <Coins className="h-6 w-6 text-green-600 dark:text-green-400" />
                  </div>
                </div>
              </div>

              <div className="mt-3 flex items-center justify-between border-t border-blue-200/30 pt-2 dark:border-blue-800/30">
                <div className="flex items-center gap-1">
                  <div className="h-2 w-2 rounded-full bg-green-500"></div>
                  <span className="text-[13px] text-gray-600 dark:text-gray-400">
                    Live on-chain conversions with minimal fees
                  </span>
                </div>
                <a
                  href={env.NEXT_PUBLIC_CRYPTO_DASHBOARD}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-[12px] text-blue-600 hover:underline dark:text-blue-400"
                >
                  Source: cryptodashboard.faldt.net{' '}
                  <ExternalLink className="h-3 w-3" />
                </a>
              </div>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row">
              <Link
                href="/wallet"
                className="group flex h-[40px] items-center justify-center rounded-lg border border-blue-200 bg-white/80 px-8 text-[14px] font-medium text-verus-blue backdrop-blur-sm transition-all duration-300 hover:-translate-y-[1px] hover:border-blue-300 hover:text-blue-600 hover:shadow-lg dark:border-blue-800/60 dark:bg-blue-950/80 dark:text-blue-300 dark:hover:border-blue-700 dark:hover:text-blue-200 dark:hover:shadow-blue-950/50 md:h-[50px] md:text-[16px]"
              >
                Download wallet
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
              </Link>
            </div>
          </div>

          <div className="rounded-xl border border-blue-100/80 bg-gradient-to-br from-blue-50/70 to-white p-6 backdrop-blur-sm dark:border-blue-900/30 dark:from-blue-950/40 dark:to-gray-950">
            <h3 className="mb-4 text-[18px] font-medium text-gray-900 dark:text-white">
              Video Tutorials
            </h3>

            <div className="space-y-4">
              <a
                href="https://youtu.be/1g0K4WGuxwo?si=EsYz8IiNmZDjLlFz"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 rounded-lg border border-blue-100/60 bg-white/80 p-3 transition-all duration-300 hover:border-blue-300 dark:border-blue-900/20 dark:bg-gray-800/60 dark:hover:border-blue-700"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-red-500/10 text-red-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-play h-5 w-5"
                  >
                    <polygon points="6 3 20 12 6 21 6 3"></polygon>
                  </svg>
                </div>
                <div className="flex-1">
                  <p className="text-[14px] font-medium text-gray-900 dark:text-white">
                    How To Add & Remove a PBaaS Currency in Verus Mobile
                  </p>
                  <p className="text-[13px] text-gray-500 dark:text-gray-400">
                    1:07 • Beginner friendly
                  </p>
                </div>
                <ExternalLink className="h-4 w-4 text-gray-400 transition-colors group-hover:text-blue-500 dark:text-gray-500 dark:group-hover:text-blue-400" />
              </a>

              <a
                href="https://youtu.be/gUsTZUKWm5s?si=7Yc_gDY_CGvhE5Zw"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 rounded-lg border border-blue-100/60 bg-white/80 p-3 transition-all duration-300 hover:border-blue-300 dark:border-blue-900/20 dark:bg-gray-800/60 dark:hover:border-blue-700"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-red-500/10 text-red-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-play h-5 w-5"
                  >
                    <polygon points="6 3 20 12 6 21 6 3"></polygon>
                  </svg>
                </div>
                <div className="flex-1">
                  <p className="text-[14px] font-medium text-gray-900 dark:text-white">
                    How to convert DAI.vETH to VRSC in Verus Mobile
                  </p>
                  <p className="text-[13px] text-gray-500 dark:text-gray-400">
                    2:10 • Step-by-step guide
                  </p>
                </div>
                <ExternalLink className="h-4 w-4 text-gray-400 transition-colors group-hover:text-blue-500 dark:text-gray-500 dark:group-hover:text-blue-400" />
              </a>
            </div>

            {/* Ethereum Bridge link */}
            <div className="mt-6 border-t border-blue-100/60 pt-5 dark:border-blue-900/20">
              <h4 className="mb-3 text-[16px] font-medium text-gray-900 dark:text-white">
                Bridge Documentation
              </h4>
              <a
                href={`${env.NEXT_PUBLIC_VERUS_DOCS}/eth-bridge/ethereum-to-verus.html`}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 rounded-lg border border-blue-100/60 bg-blue-50/80 p-3 transition-all duration-300 hover:border-blue-300 dark:border-blue-800/40 dark:bg-blue-900/30 dark:hover:border-blue-700"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-500/10 text-blue-600 dark:text-blue-400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div className="flex-1">
                  <p className="text-[14px] font-medium text-gray-900 dark:text-white">
                    How to bridge from Ethereum to Verus
                  </p>
                  <p className="text-[13px] text-gray-600 dark:text-gray-400">
                    Complete step-by-step guide
                  </p>
                </div>
                <ExternalLink className="h-4 w-4 text-gray-400 transition-colors group-hover:text-blue-500 dark:text-gray-500 dark:group-hover:text-blue-400" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
