import {Clock, Coins, Rocket, Shield} from 'lucide-react'

export function CrowdfundingSection() {
  return (
    <section className="relative mb-24 md:mt-32">
      <div className="mb-16 flex flex-col items-center justify-center">
        <h2 className="mx-auto mb-4 max-w-[1000px] text-center text-[28px] font-medium leading-[1.2] tracking-tight text-gray-800 dark:text-white md:mb-8 md:text-[55px]">
          Launch with Built-in Crowdfunding for Fair Distribution and Liquidity
        </h2>
        <p className="mx-auto max-w-3xl text-center text-[16px] text-gray-600 dark:text-gray-300 md:text-[20px]">
          Every currency on Verus can include a crowdfunding phase during
          launch, creating immediate liquidity and fair distribution.
        </p>
      </div>

      <div className="mb-12 grid grid-cols-1 gap-8 md:grid-cols-2">
        {/* Left column */}
        <div className="space-y-8">
          {/* Basket Currency */}
          <div className="relative overflow-hidden rounded-2xl border border-blue-100/80 bg-gradient-to-br from-blue-50/70 to-white p-8 shadow-sm backdrop-blur-sm dark:border-blue-900/30 dark:from-blue-950/40 dark:to-gray-950">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.08),transparent_50%)] dark:bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.15),transparent_50%)]"></div>
            <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-blue-400/10 blur-2xl dark:bg-blue-400/20"></div>

            <div className="relative">
              <div className="mb-6 flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-blue-100/80 bg-white/90 text-blue-600 shadow-sm dark:border-blue-900/30 dark:bg-gray-800/90 dark:text-blue-400">
                  <Coins className="h-6 w-6" />
                </div>
                <h3 className="text-[20px] font-medium text-gray-900 dark:text-white md:text-[24px]">
                  Basket Currency Crowdfunding
                </h3>
              </div>

              <ul className="space-y-4 pl-4">
                <li className="relative pl-6 text-[15px] leading-relaxed text-gray-600 dark:text-gray-300 md:text-[16px]">
                  <div className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-blue-500/60 dark:bg-blue-400/60"></div>
                  Pre-launch carve-outs: Send percentage of reserves to
                  specified addresses
                </li>
                <li className="relative pl-6 text-[15px] leading-relaxed text-gray-600 dark:text-gray-300 md:text-[16px]">
                  <div className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-blue-500/60 dark:bg-blue-400/60"></div>
                  Pre-launch discounts: Early investor incentives that affect
                  reserve ratios
                </li>
                <li className="relative pl-6 text-[15px] leading-relaxed text-gray-600 dark:text-gray-300 md:text-[16px]">
                  <div className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-blue-500/60 dark:bg-blue-400/60"></div>
                  Pre-allocations: Additional supply beyond crowdfunded amount
                </li>
                <li className="relative pl-6 text-[15px] leading-relaxed text-gray-600 dark:text-gray-300 md:text-[16px]">
                  <div className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-blue-500/60 dark:bg-blue-400/60"></div>
                  Automatic liquidity pool creation at launch
                </li>
              </ul>
            </div>
          </div>

          {/* Simple Token */}
          <div className="relative overflow-hidden rounded-2xl border border-blue-100/80 bg-white/70 p-8 shadow-sm backdrop-blur-sm dark:border-blue-900/30 dark:bg-gray-900/50">
            <div className="absolute -bottom-8 -right-8 h-32 w-32 rounded-full bg-blue-400/10 blur-xl dark:bg-blue-400/20"></div>
            <div className="relative">
              <div className="mb-6 flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-blue-100/80 bg-white/90 text-blue-600 shadow-sm dark:border-blue-900/30 dark:bg-gray-800/90 dark:text-blue-400">
                  <Rocket className="h-6 w-6" />
                </div>
                <h3 className="text-[20px] font-medium text-gray-900 dark:text-white md:text-[24px]">
                  Simple Token Crowdfunding
                </h3>
              </div>

              <ul className="space-y-4 pl-4">
                <li className="relative pl-6 text-[15px] leading-relaxed text-gray-600 dark:text-gray-300 md:text-[16px]">
                  <div className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-blue-500/60 dark:bg-blue-400/60"></div>
                  Pre-allocations to team, treasury, or other addresses
                </li>
                <li className="relative pl-6 text-[15px] leading-relaxed text-gray-600 dark:text-gray-300 md:text-[16px]">
                  <div className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-blue-500/60 dark:bg-blue-400/60"></div>
                  Fixed conversion rates during crowdfunding
                </li>
                <li className="relative pl-6 text-[15px] leading-relaxed text-gray-600 dark:text-gray-300 md:text-[16px]">
                  <div className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-blue-500/60 dark:bg-blue-400/60"></div>
                  Direct funding to project treasury
                </li>
                <li className="relative pl-6 text-[15px] leading-relaxed text-gray-600 dark:text-gray-300 md:text-[16px]">
                  <div className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-blue-500/60 dark:bg-blue-400/60"></div>
                  Time-locked vesting schedules for pre-allocations
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Right column */}
        <div className="space-y-8">
          {/* Security Features */}
          <div className="relative overflow-hidden rounded-2xl border border-blue-100/80 bg-white/70 p-8 shadow-sm backdrop-blur-sm dark:border-blue-900/30 dark:bg-gray-900/50">
            <div className="absolute -bottom-8 -left-8 h-32 w-32 rounded-full bg-blue-400/10 blur-xl dark:bg-blue-400/20"></div>
            <div className="relative">
              <div className="mb-6 flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-blue-100/80 bg-white/90 text-blue-600 shadow-sm dark:border-blue-900/30 dark:bg-gray-800/90 dark:text-blue-400">
                  <Shield className="h-6 w-6" />
                </div>
                <h3 className="text-[20px] font-medium text-gray-900 dark:text-white md:text-[24px]">
                  Built-in Security
                </h3>
              </div>

              <div className="space-y-4">
                <div className="rounded-xl border border-blue-100/60 bg-white/80 px-6 py-5 backdrop-blur-sm dark:border-blue-900/20 dark:bg-gray-800/50">
                  <h4 className="mb-2 text-[16px] font-medium text-gray-900 dark:text-white">
                    Automatic Refunds
                  </h4>
                  <p className="text-[15px] leading-relaxed text-gray-600 dark:text-gray-300">
                    If minimum funding goals aren't met, all contributions are
                    automatically returned. No need to trust third parties or
                    escrow services.
                  </p>
                </div>

                <div className="rounded-xl border border-blue-100/60 bg-white/80 px-6 py-5 backdrop-blur-sm dark:border-blue-900/20 dark:bg-gray-800/50">
                  <h4 className="mb-2 text-[16px] font-medium text-gray-900 dark:text-white">
                    Protocol-Level Rules
                  </h4>
                  <p className="text-[15px] leading-relaxed text-gray-600 dark:text-gray-300">
                    All parameters including pre-allocations, carve-outs, and
                    discounts are enforced by consensus. No smart contracts
                    needed, eliminating common vulnerabilities.
                  </p>
                </div>

                <div className="rounded-xl border border-blue-100/60 bg-white/80 px-6 py-5 backdrop-blur-sm dark:border-blue-900/20 dark:bg-gray-800/50">
                  <h4 className="mb-2 text-[16px] font-medium text-gray-900 dark:text-white">
                    Non-Custodial
                  </h4>
                  <p className="text-[15px] leading-relaxed text-gray-600 dark:text-gray-300">
                    Funds never pass through intermediaries. All transactions
                    happen directly between participants and the protocol.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Launch Parameters */}
          <div className="relative overflow-hidden rounded-2xl border border-blue-100/80 bg-gradient-to-br from-blue-50/70 to-white p-8 shadow-sm backdrop-blur-sm dark:border-blue-900/30 dark:from-blue-950/40 dark:to-gray-950">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.08),transparent_50%)] dark:bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.15),transparent_50%)]"></div>
            <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-blue-400/10 blur-2xl dark:bg-blue-400/20"></div>

            <div className="relative">
              <div className="mb-6 flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-blue-100/80 bg-white/90 text-blue-600 shadow-sm dark:border-blue-900/30 dark:bg-gray-800/90 dark:text-blue-400">
                  <Clock className="h-6 w-6" />
                </div>
                <h3 className="text-[20px] font-medium text-gray-900 dark:text-white md:text-[24px]">
                  Launch Parameters
                </h3>
              </div>

              <ul className="space-y-4 pl-4">
                <li className="relative pl-6 text-[15px] leading-relaxed text-gray-600 dark:text-gray-300 md:text-[16px]">
                  <div className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-blue-500/60 dark:bg-blue-400/60"></div>
                  Pre-launch carve-out percentages (0-100%)
                </li>
                <li className="relative pl-6 text-[15px] leading-relaxed text-gray-600 dark:text-gray-300 md:text-[16px]">
                  <div className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-blue-500/60 dark:bg-blue-400/60"></div>
                  Pre-launch discount rates for early investors
                </li>
                <li className="relative pl-6 text-[15px] leading-relaxed text-gray-600 dark:text-gray-300 md:text-[16px]">
                  <div className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-blue-500/60 dark:bg-blue-400/60"></div>
                  Pre-allocation amounts and destinations
                </li>
                <li className="relative pl-6 text-[15px] leading-relaxed text-gray-600 dark:text-gray-300 md:text-[16px]">
                  <div className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-blue-500/60 dark:bg-blue-400/60"></div>
                  Minimum & maximum funding goals
                </li>
                <li className="relative pl-6 text-[15px] leading-relaxed text-gray-600 dark:text-gray-300 md:text-[16px]">
                  <div className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-blue-500/60 dark:bg-blue-400/60"></div>
                  Vesting schedules and lock periods
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
