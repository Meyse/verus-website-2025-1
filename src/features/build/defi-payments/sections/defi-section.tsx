import {ArrowUpDown, Coins, Shield} from 'lucide-react'

/*
 * Updated:
 * - Transformed component to match PBaaS chains styling with modern gradient backgrounds
 * - Added developer-focused title with gradient text and decorative backgrounds
 * - Improved hover states and transitions
 * - Enhanced card designs with modern borders and shadows
 * - Maintained original content while improving visual hierarchy
 * - Removed blur effect from under the title
 * - Removed background container gradient
 * - Put title part after em dash on a new line
 * - Removed all hover effects from cards
 */
export function DeFiSection() {
  return (
    <section className="relative mb-24 md:mt-32">
      <div className="absolute right-10 top-40 h-64 w-64 rounded-full bg-blue-400/5 blur-3xl dark:bg-blue-400/10"></div>
      <div className="absolute bottom-20 left-10 h-64 w-64 rounded-full bg-blue-400/5 blur-3xl dark:bg-blue-400/10"></div>

      <div className="relative">
        <div className="mb-16 flex flex-col items-center justify-center">
          <h2 className="mx-auto mb-4 max-w-[1000px] text-center text-[28px] font-medium leading-[1.2] tracking-tight text-gray-800 dark:text-white md:mb-8 md:text-[55px]">
            Build DeFi Applications Protected From MEV Attacks
          </h2>
          <p className="mx-auto max-w-3xl text-center text-[16px] text-gray-600 dark:text-gray-300 md:text-[20px]">
            Develop fair, secure DeFi applications with built-in MEV protection
            at the protocol level
          </p>
        </div>

        <div className="flex flex-col gap-8 md:flex-row md:gap-16">
          {/* Left Column */}
          <div className="w-full md:w-1/2">
            <div className="mb-8 space-y-4">
              <p className="text-[15px] leading-relaxed text-gray-600 dark:text-gray-300 md:text-[16px]">
                Verus DeFi solves the MEV problem by processing all conversions
                simultaneously at the protocol level. This means every trade in
                a block gets the same fair price, eliminating front-running,
                back-running, and sandwich attacks.
              </p>
              <p className="text-[15px] leading-relaxed text-gray-600 dark:text-gray-300 md:text-[16px]">
                Unlike other DeFi platforms that rely on smart contracts and
                sequential transaction processing, Verus handles all DeFi
                operations through consensus. This not only prevents MEV
                exploitation but also eliminates smart contract vulnerabilities.
              </p>
            </div>

            <div className="space-y-6">
              {/* MEV Protection */}
              <div className="relative overflow-hidden rounded-xl border border-blue-100/80 bg-white/80 backdrop-blur-sm dark:border-blue-900/30 dark:bg-gray-800/50">
                <div className="p-6">
                  <div className="mb-4 flex items-center gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600 dark:bg-blue-900/50 dark:text-blue-400">
                      <Shield className="h-5 w-5" />
                    </div>
                    <h3 className="text-[18px] font-medium text-gray-900 dark:text-white md:text-[22px]">
                      MEV Protection
                    </h3>
                  </div>
                  <ul className="space-y-3">
                    <li className="relative pl-6 text-[15px] leading-relaxed text-gray-600 dark:text-gray-300">
                      <div className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-blue-500/60 dark:bg-blue-400/60"></div>
                      No front-running or sandwich attacks
                    </li>
                    <li className="relative pl-6 text-[15px] leading-relaxed text-gray-600 dark:text-gray-300">
                      <div className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-blue-500/60 dark:bg-blue-400/60"></div>
                      Same price for all trades in a block
                    </li>
                    <li className="relative pl-6 text-[15px] leading-relaxed text-gray-600 dark:text-gray-300">
                      <div className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-blue-500/60 dark:bg-blue-400/60"></div>
                      No value extraction by bots
                    </li>
                  </ul>
                </div>
              </div>

              {/* Fee Structure */}
              <div className="relative overflow-hidden rounded-xl border border-blue-100/80 bg-white/80 backdrop-blur-sm dark:border-blue-900/30 dark:bg-gray-800/50">
                <div className="p-6">
                  <div className="mb-4 flex items-center gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600 dark:bg-blue-900/50 dark:text-blue-400">
                      <ArrowUpDown className="h-5 w-5" />
                    </div>
                    <h3 className="text-[18px] font-medium text-gray-900 dark:text-white md:text-[22px]">
                      Fee Structure
                    </h3>
                  </div>
                  <ul className="space-y-3">
                    <li className="relative pl-6 text-[15px] leading-relaxed text-gray-600 dark:text-gray-300">
                      <div className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-blue-500/60 dark:bg-blue-400/60"></div>
                      0.025% for reserve-to-basket conversions
                    </li>
                    <li className="relative pl-6 text-[15px] leading-relaxed text-gray-600 dark:text-gray-300">
                      <div className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-blue-500/60 dark:bg-blue-400/60"></div>
                      0.05% for reserve-to-reserve conversions
                    </li>
                    <li className="relative pl-6 text-[15px] leading-relaxed text-gray-600 dark:text-gray-300">
                      <div className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-blue-500/60 dark:bg-blue-400/60"></div>
                      50% to miners/stakers, 50% to reserves
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="w-full md:w-1/2">
            <div className="relative h-full overflow-hidden rounded-2xl border border-blue-100/80 bg-gradient-to-br from-blue-50/90 to-white p-8 backdrop-blur-sm dark:border-blue-900/30 dark:from-blue-950/40 dark:to-gray-950">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(59,130,246,0.08),transparent_50%)] dark:bg-[radial-gradient(circle_at_bottom_left,rgba(59,130,246,0.15),transparent_50%)]"></div>
              <div className="absolute -left-8 -top-8 h-32 w-32 rounded-full bg-blue-400/10 blur-xl dark:bg-blue-400/20"></div>

              <div className="relative">
                <div className="mb-6 flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/90 text-blue-600 shadow-sm dark:bg-gray-800/90 dark:text-blue-400">
                    <Coins className="h-6 w-6" />
                  </div>
                  <h3 className="text-[20px] font-medium text-gray-900 dark:text-white md:text-[24px]">
                    Basket Currencies
                  </h3>
                </div>

                <div className="space-y-6">
                  <div className="rounded-xl border border-blue-100/60 bg-white/80 px-6 py-5 backdrop-blur-sm dark:border-blue-900/20 dark:bg-gray-800/30">
                    <h4 className="mb-2 text-[16px] font-medium text-gray-900 dark:text-white">
                      Reserve Currencies
                    </h4>
                    <p className="text-[14px] leading-relaxed text-gray-700 dark:text-gray-300">
                      Create sophisticated basket currencies backed by up to 10
                      reserve currencies. Configure reserve ratios from 5% to
                      100% and let the protocol handle supply management
                      automatically.
                    </p>
                  </div>

                  <div className="rounded-xl border border-blue-100/60 bg-white/80 px-6 py-5 backdrop-blur-sm dark:border-blue-900/20 dark:bg-gray-800/30">
                    <h4 className="mb-2 text-[16px] font-medium text-gray-900 dark:text-white">
                      Liquidity Pools
                    </h4>
                    <p className="text-[14px] leading-relaxed text-gray-700 dark:text-gray-300">
                      Every basket currency functions as an automated market
                      maker (AMM) with built-in liquidity pools. Trade between
                      any reserve currencies with minimal slippage and MEV
                      protection.
                    </p>
                  </div>

                  <div className="rounded-xl border border-blue-100/60 bg-white/80 px-6 py-5 backdrop-blur-sm dark:border-blue-900/20 dark:bg-gray-800/30">
                    <h4 className="mb-2 text-[16px] font-medium text-gray-900 dark:text-white">
                      Cross-Chain Trading
                    </h4>
                    <p className="text-[14px] leading-relaxed text-gray-700 dark:text-gray-300">
                      Trade seamlessly across all PBaaS chains and with Ethereum
                      through the bridge. Access unified liquidity across the
                      entire network with protocol-level security.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
