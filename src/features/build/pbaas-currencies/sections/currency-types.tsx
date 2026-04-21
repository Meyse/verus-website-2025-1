import {
  ArrowUpDown,
  Clock,
  Coins,
  Lightbulb,
  Lock,
  Percent,
  Repeat,
  Scale,
  Wallet,
} from 'lucide-react'

export function CurrencyTypes() {
  return (
    <section className="relative mb-24">
      <div className="mb-16 flex flex-col items-center justify-center">
        <h2 className="mx-auto mb-4 max-w-[1000px] text-center text-[28px] font-medium leading-[1.2] tracking-tight text-gray-800 dark:text-white md:mb-8 md:text-[55px]">
          Two Currency Types for Different Use Cases
        </h2>
        <p className="mx-auto max-w-3xl text-center text-[16px] text-gray-600 dark:text-gray-300 md:text-[20px]">
          Choose between reserve-backed basket currencies or standalone token
          currencies based on your project needs.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {/* Basket Currencies */}
        <div className="relative overflow-hidden rounded-2xl border border-blue-100/80 bg-gradient-to-br from-blue-50/70 to-white p-8 shadow-sm backdrop-blur-sm dark:border-blue-900/30 dark:from-blue-950/40 dark:to-gray-950">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.08),transparent_50%)] dark:bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.15),transparent_50%)]"></div>
          <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-blue-400/10 blur-2xl dark:bg-blue-400/20"></div>

          <div className="relative">
            <div className="mb-6 flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-blue-100/80 bg-white/90 text-blue-600 shadow-sm dark:border-blue-900/30 dark:bg-gray-800/90 dark:text-blue-400">
                <Coins className="h-6 w-6" />
              </div>
              <h3 className="text-[20px] font-medium text-gray-900 dark:text-white md:text-[24px]">
                Basket Currencies
              </h3>
            </div>

            <div className="space-y-6">
              <div className="rounded-xl border border-blue-100/60 bg-white/80 px-6 py-5 backdrop-blur-sm dark:border-blue-900/20 dark:bg-gray-800/50">
                <div className="mb-2 flex items-center gap-3">
                  <Wallet className="h-5 w-5 text-blue-500" />
                  <h4 className="text-[16px] font-medium text-gray-900 dark:text-white">
                    AMM Functionality
                  </h4>
                </div>
                <p className="text-[15px] leading-relaxed text-gray-600 dark:text-gray-300">
                  Function like automated market makers (AMMs) with a reserve of
                  one or more currencies backing them
                </p>
              </div>

              <div className="rounded-xl border border-blue-100/60 bg-white/80 px-6 py-5 backdrop-blur-sm dark:border-blue-900/20 dark:bg-gray-800/50">
                <div className="mb-2 flex items-center gap-3">
                  <ArrowUpDown className="h-5 w-5 text-blue-500" />
                  <h4 className="text-[16px] font-medium text-gray-900 dark:text-white">
                    Dynamic Supply
                  </h4>
                </div>
                <p className="text-[15px] leading-relaxed text-gray-600 dark:text-gray-300">
                  Supply expands when people convert into the basket currency
                  and contracts when they convert out
                </p>
              </div>

              <div className="rounded-xl border border-blue-100/60 bg-white/80 px-6 py-5 backdrop-blur-sm dark:border-blue-900/20 dark:bg-gray-800/50">
                <div className="mb-2 flex items-center gap-3">
                  <Percent className="h-5 w-5 text-blue-500" />
                  <h4 className="text-[16px] font-medium text-gray-900 dark:text-white">
                    Fractionally Backed
                  </h4>
                </div>
                <p className="text-[15px] leading-relaxed text-gray-600 dark:text-gray-300">
                  Can be fully (100%) or partially backed by reserves (as low as
                  5%)
                </p>
              </div>

              <div className="rounded-xl border border-blue-100/60 bg-white/80 px-6 py-5 backdrop-blur-sm dark:border-blue-900/20 dark:bg-gray-800/50">
                <div className="mb-2 flex items-center gap-3">
                  <Scale className="h-5 w-5 text-blue-500" />
                  <h4 className="text-[16px] font-medium text-gray-900 dark:text-white">
                    Value Stability
                  </h4>
                </div>
                <p className="text-[15px] leading-relaxed text-gray-600 dark:text-gray-300">
                  Value is directly linked to what's in the reserves and the
                  reserve ratio. There are no oracles or other external price
                  feeds.
                </p>
              </div>

              <div className="rounded-xl border border-blue-100/60 bg-white/80 px-6 py-5 backdrop-blur-sm dark:border-blue-900/20 dark:bg-gray-800/50">
                <div className="mb-2 flex items-center gap-3">
                  <Lock className="h-5 w-5 text-blue-500" />
                  <h4 className="text-[16px] font-medium text-gray-900 dark:text-white">
                    MEV-Resistant
                  </h4>
                </div>
                <p className="text-[15px] leading-relaxed text-gray-600 dark:text-gray-300">
                  All conversions in the same block get the same fair price with
                  no front-running or sandwich attacks
                </p>
              </div>

              <div className="flex items-start gap-3 rounded-xl border border-blue-100/60 bg-white/80 px-6 py-5 backdrop-blur-sm dark:border-blue-900/20 dark:bg-gray-800/50">
                <Repeat className="mt-0.5 h-5 w-5 text-blue-500" />
                <div>
                  <h4 className="mb-2 text-[16px] font-medium text-gray-900 dark:text-white">
                    Low Fees
                  </h4>
                  <p className="text-[15px] leading-relaxed text-gray-600 dark:text-gray-300">
                    Conversion fees are 0.025% when converting to/from reserves,
                    and 0.05% when converting between reserves
                  </p>
                </div>
              </div>

              <div className="flex flex-col gap-3 px-2">
                <div className="flex items-center gap-3">
                  <div className="flex h-5 w-5 items-center justify-center">
                    <div className="h-1.5 w-1.5 rounded-full bg-blue-500/60 dark:bg-blue-400/60"></div>
                  </div>
                  <p className="text-[15px] leading-relaxed text-gray-600 dark:text-gray-300">
                    Can be used as reserves in other basket currencies
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex h-5 w-5 items-center justify-center">
                    <div className="h-1.5 w-1.5 rounded-full bg-blue-500/60 dark:bg-blue-400/60"></div>
                  </div>
                  <p className="text-[15px] leading-relaxed text-gray-600 dark:text-gray-300">
                    Can be exported as ERC-20 to Ethereum
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Simple Token Currencies */}
        <div className="relative overflow-hidden rounded-2xl border border-blue-100/80 bg-white/70 p-8 shadow-sm backdrop-blur-sm dark:border-blue-900/30 dark:bg-gray-900/50">
          <div className="absolute -bottom-8 -right-8 h-32 w-32 rounded-full bg-blue-400/10 blur-xl dark:bg-blue-400/20"></div>
          <div className="relative">
            <div className="mb-6 flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-blue-100/80 bg-white/90 text-blue-600 shadow-sm dark:border-blue-900/30 dark:bg-gray-800/90 dark:text-blue-400">
                <Wallet className="h-6 w-6" />
              </div>
              <h3 className="text-[20px] font-medium text-gray-900 dark:text-white md:text-[24px]">
                Simple Token Currencies
              </h3>
            </div>

            <div className="space-y-6">
              <div className="rounded-xl border border-blue-100/60 bg-white/80 px-6 py-5 backdrop-blur-sm dark:border-blue-900/20 dark:bg-gray-800/50">
                <div className="mb-2 flex items-center gap-3">
                  <Wallet className="h-5 w-5 text-blue-500" />
                  <h4 className="text-[16px] font-medium text-gray-900 dark:text-white">
                    No Reserves
                  </h4>
                </div>
                <p className="text-[15px] leading-relaxed text-gray-600 dark:text-gray-300">
                  Standalone currencies without any backing reserves
                </p>
              </div>

              <div className="rounded-xl border border-blue-100/60 bg-white/80 px-6 py-5 backdrop-blur-sm dark:border-blue-900/20 dark:bg-gray-800/50">
                <div className="mb-2 flex items-center gap-3">
                  <Lock className="h-5 w-5 text-blue-500" />
                  <h4 className="text-[16px] font-medium text-gray-900 dark:text-white">
                    Static Supply
                  </h4>
                </div>
                <p className="text-[15px] leading-relaxed text-gray-600 dark:text-gray-300">
                  For decentralized tokens the supply is fixed (unless burned)
                </p>
              </div>

              <div className="mt-8 flex flex-col gap-5 px-2">
                <div className="flex items-center gap-3">
                  <div className="flex h-5 w-5 items-center justify-center">
                    <div className="h-1.5 w-1.5 rounded-full bg-blue-500/60 dark:bg-blue-400/60"></div>
                  </div>
                  <p className="text-[15px] leading-relaxed text-gray-600 dark:text-gray-300">
                    Can be used as reserves in other basket currencies
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex h-5 w-5 items-center justify-center">
                    <div className="h-1.5 w-1.5 rounded-full bg-blue-500/60 dark:bg-blue-400/60"></div>
                  </div>
                  <p className="text-[15px] leading-relaxed text-gray-600 dark:text-gray-300">
                    Can be exported as ERC-20 to Ethereum
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Preconversion Period Explanation */}
      <div className="relative mt-8 overflow-hidden rounded-2xl border border-blue-100/80 bg-gradient-to-br from-blue-50/90 to-white p-8 backdrop-blur-sm dark:border-blue-900/30 dark:from-blue-950/40 dark:to-gray-950">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(59,130,246,0.08),transparent_70%)] dark:bg-[radial-gradient(ellipse_at_top_right,rgba(59,130,246,0.15),transparent_70%)]"></div>
        <div className="absolute right-0 top-0 -z-10 h-64 w-64 bg-gradient-to-br from-blue-400/5 to-transparent blur-3xl dark:from-blue-400/10"></div>

        <div className="relative">
          <div className="mb-6 flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-blue-100/80 bg-white/90 text-blue-600 shadow-sm dark:border-blue-900/30 dark:bg-gray-800/90 dark:text-blue-400">
              <Clock className="h-6 w-6" />
            </div>
            <h3 className="text-[20px] font-medium text-gray-900 dark:text-white md:text-[24px]">
              The Preconversion Period
            </h3>
          </div>

          <p className="mb-6 text-[15px] leading-relaxed text-gray-600 dark:text-gray-300 md:text-[16px]">
            Every currency launch includes a preconversion (fundraising) phase
            before the currency officially begins operating.
          </p>

          <div className="mb-6 grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="rounded-xl border border-blue-100/60 bg-white/80 px-6 py-5 backdrop-blur-sm dark:border-blue-900/20 dark:bg-gray-800/50">
              <h4 className="mb-3 flex items-center gap-2 text-[16px] font-medium text-gray-900 dark:text-white">
                <Coins className="h-4 w-4 text-blue-500" />
                For Basket Currencies
              </h4>
              <p className="mb-3 text-[15px] leading-relaxed text-gray-600 dark:text-gray-300">
                Users contribute currencies to the reserves and receive a
                proportional share of the initial supply based on their
                contribution value.
              </p>
              <p className="text-[15px] leading-relaxed text-gray-600 dark:text-gray-300">
                This establishes the initial reserve backing and distribution of
                the currency.
              </p>
            </div>

            <div className="rounded-xl border border-blue-100/60 bg-white/80 px-6 py-5 backdrop-blur-sm dark:border-blue-900/20 dark:bg-gray-800/50">
              <h4 className="mb-3 flex items-center gap-2 text-[16px] font-medium text-gray-900 dark:text-white">
                <Wallet className="h-4 w-4 text-blue-500" />
                For Simple Tokens
              </h4>
              <p className="mb-3 text-[15px] leading-relaxed text-gray-600 dark:text-gray-300">
                Users send currency to the creator at a predetermined exchange
                rate to receive tokens when the currency launches.
              </p>
              <p className="text-[15px] leading-relaxed text-gray-600 dark:text-gray-300">
                This provides initial funding for the project and distributes
                tokens to early supporters.
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="rounded-xl border border-blue-100/60 bg-white/80 px-6 py-5 backdrop-blur-sm dark:border-blue-900/20 dark:bg-gray-800/50">
              <h4 className="mb-2 text-[16px] font-medium text-gray-900 dark:text-white">
                Duration
              </h4>
              <p className="text-[15px] leading-relaxed text-gray-600 dark:text-gray-300">
                The preconversion period lasts at least 20 blocks (approximately
                20 minutes) but can be configured to run longer depending on
                project needs.
              </p>
            </div>

            <div className="rounded-xl border border-blue-100/60 bg-white/80 px-6 py-5 backdrop-blur-sm dark:border-blue-900/20 dark:bg-gray-800/50">
              <h4 className="mb-2 text-[16px] font-medium text-gray-900 dark:text-white">
                Minimum Funding Requirements
              </h4>
              <p className="text-[15px] leading-relaxed text-gray-600 dark:text-gray-300">
                If a minimum funding requirement is set and not met, the
                currency doesn't launch and all contributors receive automatic
                refunds (minus network fees).
              </p>
            </div>
          </div>

          <div className="mt-6 flex items-start gap-3 rounded-xl border border-blue-100/80 bg-blue-50/80 px-6 py-5 backdrop-blur-sm dark:border-blue-900/30 dark:bg-blue-900/30">
            <Lightbulb className="mt-0.5 h-5 w-5 flex-shrink-0 text-blue-600 dark:text-blue-400" />
            <p className="text-[15px] leading-relaxed text-gray-600 dark:text-gray-300">
              The preconversion period is essentially a bootstrapping mechanism
              to establish initial liquidity and value for a new currency. It
              ensures the currency has real backing and market participation
              from day one.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
