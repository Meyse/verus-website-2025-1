/**
 * File updated: replaced 'Pioneer Advantage' and 'Building Without the Noise' cards
 * with 'Technical Foundation' and 'Developer Experience', updated icons (Wrench, Zap),
 * revised copy to match new content, unified large-number gradient styling to
 * match the TVL color scheme, and switched gradient end color to Verus brand
 * (to-verus-blue) including dark variant.
 */
import { Wrench, Zap } from 'lucide-react'

export function EarlyAdoptionSection() {
  return (
    <div className="mt-28 w-screen md:mt-40 md:max-w-[1220px]">
      {/* Main heading */}
      <div className="mb-16 text-center md:mb-24">
        <h2 className="mx-auto mb-4 text-center text-[28px] font-medium leading-[1.2] tracking-tight text-gray-800 dark:text-white md:mb-8 md:max-w-[900px] md:text-[55px]">
          Fundamentals Without the Hype
        </h2>

        <p className="mx-auto max-w-[800px] text-[16px] font-normal leading-relaxed tracking-tight text-gray-600 dark:text-gray-300 md:text-[20px]">
          Since 2018, Verus has systematically tackled crypto's core problems: MEV, scalability, self-sovereign identity, 51% hash attack resistance, and others. All achieved without VC funding, ICOs, premines or taxes.
        </p>
      </div>

      {/* Combined stats and info grid */}
      <div className="mb-16 w-full overflow-hidden rounded-lg border border-gray-200 bg-white/90 shadow-[0_4px_40px_-12px_rgba(0,0,0,0.1)] backdrop-blur-sm dark:border-gray-800 dark:bg-black/30 dark:shadow-[0_4px_40px_-12px_rgba(0,0,0,0.2)] md:mb-20">
        <div className="grid grid-cols-1 divide-y divide-gray-200 dark:divide-gray-800 md:grid-cols-2 md:divide-x md:divide-y">
          {/* TVL stat */}
          <div className="relative overflow-hidden p-10 md:p-14">
            <div className="absolute right-0 top-0 z-0 h-[250px] w-[250px] -translate-y-1/3 translate-x-1/3 transform rounded-full bg-blue-500/5 blur-[60px] dark:bg-blue-500/10"></div>
            <div className="relative z-10">
              <span className="bg-gradient-to-br from-blue-400 to-blue-600 bg-clip-text text-[80px] leading-none tracking-tight text-transparent dark:from-blue-300 dark:to-blue-500 md:text-[100px] lg:text-[120px]">
                $50M+
              </span>
              <div className="mt-3">
                <span className="text-[15px] font-medium uppercase tracking-wider text-gray-600 dark:text-gray-400 md:text-[17px]">
                  Total Value Locked
                </span>
              </div>
            </div>
          </div>
          {/* Registration stat */}
          <div className="relative overflow-hidden p-10 md:p-14">
            <div className="absolute right-0 top-0 z-0 h-[250px] w-[250px] -translate-y-1/3 translate-x-1/3 transform rounded-full bg-blue-500/5 blur-[60px] dark:bg-blue-500/10"></div>
            <div className="relative z-10">
              <span className="bg-gradient-to-br from-blue-400 to-verus-blue bg-clip-text text-[80px] leading-none tracking-tight text-transparent dark:from-blue-300 dark:to-verus-blue md:text-[100px] lg:text-[120px]">
                32k+
              </span>
              <div className="mt-3">
                <span className="text-[15px] font-medium uppercase tracking-wider text-gray-600 dark:text-gray-400 md:text-[17px]">
                  VerusID registrations
                </span>
              </div>
            </div>
          </div>

          {/* DeFi volume stat */}
          <div className="relative overflow-hidden p-10 md:p-14">
            <div className="absolute right-0 top-0 z-0 h-[250px] w-[250px] -translate-y-1/3 translate-x-1/3 transform rounded-full bg-blue-500/5 blur-[60px] dark:bg-blue-500/10"></div>
            <div className="relative z-10">
              <span className="bg-gradient-to-br from-blue-400 to-verus-blue bg-clip-text text-[80px] leading-none tracking-tight text-transparent dark:from-blue-300 dark:to-verus-blue md:text-[100px] lg:text-[120px]">
                $500M+
              </span>
              <div className="mt-3">
                <span className="text-[15px] font-medium uppercase tracking-wider text-gray-600 dark:text-gray-400 md:text-[17px]">
                  Lifetime on-chain DeFi volume (since 2023)
                </span>
              </div>
            </div>
          </div>

          {/* Chains stat */}
          <div className="relative overflow-hidden p-10 md:p-14">
            <div className="absolute right-0 top-0 z-0 h-[250px] w-[250px] -translate-y-1/3 translate-x-1/3 transform rounded-full bg-blue-500/5 blur-[60px] dark:bg-blue-500/10"></div>
            <div className="relative z-10">
              <span className="bg-gradient-to-br from-blue-400 to-verus-blue bg-clip-text text-[80px] leading-none tracking-tight text-transparent dark:from-blue-300 dark:to-verus-blue md:text-[100px] lg:text-[120px]">
                4
              </span>
              <div className="mt-3">
                <span className="text-[15px] font-medium uppercase tracking-wider text-gray-600 dark:text-gray-400 md:text-[17px]">
                  Chains in the ecosystem
                </span>
              </div>
            </div>
          </div>

          {/* Technical Foundation */}
          <div className="relative overflow-hidden p-10 md:p-14">
            <div className="absolute right-0 top-0 z-0 h-[250px] w-[250px] -translate-y-1/3 translate-x-1/3 transform rounded-full bg-indigo-500/5 blur-[60px] dark:bg-indigo-500/10"></div>
            <div className="relative z-10">
              <div className="mb-3 flex items-center gap-2">
                <div className="flex h-5 w-5 items-center justify-center rounded-full bg-verus-blue text-white">
                  <Wrench className="h-3 w-3" />
                </div>
                <span className="text-[14px] font-medium uppercase tracking-wide text-gray-600 dark:text-gray-300">
                  Technical Foundation
                </span>
              </div>
              <h3 className="mb-4 font-medium text-gray-800 dark:text-white md:text-[30px] tracking-tight">
                No Smart Contract Dependencies
              </h3>
              <p className="max-w-[500px] text-[15px] leading-relaxed text-gray-600 dark:text-gray-300 md:text-[17px]">
                Currencies, DeFi, identity and data operations run at the protocol level. No permission-based wallets, no contract vulnerabilities, no audits needed. Just direct transactions validated by every node.
              </p>
            </div>
          </div>

          {/* Developer Experience */}
          <div className="relative overflow-hidden p-10 md:p-14">
            <div className="absolute right-0 top-0 z-0 h-[250px] w-[250px] -translate-y-1/3 translate-x-1/3 transform rounded-full bg-blue-500/5 blur-[60px] dark:bg-blue-500/10"></div>
            <div className="relative z-10">
              <div className="mb-3 flex items-center gap-2">
                <div className="flex h-5 w-5 items-center justify-center rounded-full bg-verus-blue text-white">
                  <Zap className="h-3 w-3" />
                </div>
                <span className="text-[14px] font-medium uppercase tracking-wide text-gray-600 dark:text-gray-300">
                  Developer Experience
                </span>
              </div>
              <h3 className="mb-4 font-medium text-gray-800 text-gray-800 dark:text-white md:text-[30px] tracking-tight">
                Build More, Code Less
              </h3>
              <p className="max-w-[500px] text-[15px] leading-relaxed text-gray-600 dark:text-gray-300 md:text-[17px]">
                Use any programming language with simple API calls. No Solidity learning curve, no gas optimization, no MEV protection needed. The protocol handles security so you can focus on features.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
