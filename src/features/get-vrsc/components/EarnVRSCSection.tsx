import Link from 'next/link'

import {Shield} from 'lucide-react'

/*
 * EarnVRSCSection - Server Component
 * - Third section of the Get VRSC page showing mining and staking options
 * - Displays information about mining and staking VRSC
 * - Includes links to dedicated mining and staking pages
 * - Fully server-rendered with no client-side JavaScript
 */

export function EarnVRSCSection() {
  return (
    <section className="relative w-full overflow-hidden rounded-2xl border border-blue-100/80 bg-white/80 backdrop-blur-sm dark:border-blue-900/30 dark:bg-gray-800/50">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.08),transparent_50%)] dark:bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.15),transparent_50%)]"></div>
      <div className="absolute -bottom-10 -right-10 h-40 w-40 rounded-full bg-blue-400/10 blur-2xl dark:bg-blue-400/20"></div>

      <div className="relative p-6 md:p-10">
        <div className="mb-6 flex items-center gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-blue-100/80 bg-white/90 text-blue-600 shadow-sm dark:border-blue-900/30 dark:bg-gray-800/90 dark:text-blue-400">
            <Shield className="h-6 w-6" />
          </div>
          <h2 className="text-[20px] font-medium text-gray-900 dark:text-white md:text-[28px]">
            Earn VRSC: Mining & Staking
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {/* Mining Card */}
          <div className="relative rounded-xl border border-blue-100/80 bg-gradient-to-br from-blue-50/70 to-white p-6 backdrop-blur-sm dark:border-blue-900/30 dark:from-blue-950/40 dark:to-gray-950">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(59,130,246,0.06),transparent_70%)] dark:bg-[radial-gradient(ellipse_at_top_right,rgba(59,130,246,0.10),transparent_70%)]"></div>

            <div className="relative">
              <h3 className="mb-3 text-[18px] font-medium text-gray-900 dark:text-white">
                Mining
              </h3>
              <p className="mb-4 text-[15px] leading-relaxed text-gray-700 dark:text-gray-300">
                Mine VRSC using CPU, mobile phones or ARM-devices. Verus is
                designed to be CPU-mineable, giving consumer hardware a fair
                chance at mining rewards compared to specialized hardware.
              </p>

              <ul className="mb-6 space-y-2">
                <li className="flex items-start gap-2 text-[14px] text-gray-700 dark:text-gray-300">
                  <div className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-blue-100/80 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400">
                    <svg
                      className="h-3 w-3"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  CPU-optimized algorithm
                </li>
                <li className="flex items-start gap-2 text-[14px] text-gray-700 dark:text-gray-300">
                  <div className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-blue-100/80 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400">
                    <svg
                      className="h-3 w-3"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  Easy-to-use mining software available
                </li>
                <li className="flex items-start gap-2 text-[14px] text-gray-700 dark:text-gray-300">
                  <div className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-blue-100/80 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400">
                    <svg
                      className="h-3 w-3"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  Join mining pools to receive consistent rewards
                </li>
              </ul>

              <Link
                href="/mining"
                className="group flex h-[40px] w-fit items-center justify-center rounded-lg border border-blue-200 bg-white/80 px-8 text-[14px] font-medium text-verus-blue backdrop-blur-sm transition-all duration-300 hover:border-blue-300 hover:text-blue-600 dark:border-blue-800/60 dark:bg-blue-950/80 dark:text-blue-300 dark:hover:border-blue-700 dark:hover:text-blue-200 md:h-[50px] md:text-[16px]"
              >
                Start mining
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

          {/* Staking Card */}
          <div className="relative rounded-xl border border-blue-100/80 bg-gradient-to-br from-blue-50/70 to-white p-6 backdrop-blur-sm dark:border-blue-900/30 dark:from-blue-950/40 dark:to-gray-950">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(59,130,246,0.06),transparent_70%)] dark:bg-[radial-gradient(ellipse_at_top_right,rgba(59,130,246,0.10),transparent_70%)]"></div>

            <div className="relative">
              <h3 className="mb-3 text-[18px] font-medium text-gray-900 dark:text-white">
                Staking
              </h3>
              <p className="mb-4 text-[15px] leading-relaxed text-gray-700 dark:text-gray-300">
                Earn VRSC by staking your VRSC. Verus uses a hybrid PoW/PoS
                consensus system where stakers earn 50% of block rewards.
              </p>

              <ul className="mb-6 space-y-2">
                <li className="flex items-start gap-2 text-[14px] text-gray-700 dark:text-gray-300">
                  <div className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-blue-100/80 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400">
                    <svg
                      className="h-3 w-3"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  No minimum amount required to start staking
                </li>
                <li className="flex items-start gap-2 text-[14px] text-gray-700 dark:text-gray-300">
                  <div className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-blue-100/80 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400">
                    <svg
                      className="h-3 w-3"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  Low energy consumption compared to mining
                </li>
                <li className="flex items-start gap-2 text-[14px] text-gray-700 dark:text-gray-300">
                  <div className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-blue-100/80 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400">
                    <svg
                      className="h-3 w-3"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  Run your wallet 24/7 for optimal staking rewards
                </li>
              </ul>

              <Link
                href="/staking"
                className="group flex h-[40px] w-fit items-center justify-center rounded-lg border border-blue-200 bg-white/80 px-8 text-[14px] font-medium text-verus-blue backdrop-blur-sm transition-all duration-300 hover:border-blue-300 hover:text-blue-600 dark:border-blue-800/60 dark:bg-blue-950/80 dark:text-blue-300 dark:hover:border-blue-700 dark:hover:text-blue-200 md:h-[50px] md:text-[16px]"
              >
                Learn about staking
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
        </div>
      </div>
    </section>
  )
}
