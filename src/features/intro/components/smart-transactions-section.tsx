import {env} from '@/configs/env'
import {Code, Shield, Zap} from 'lucide-react'
import {FaMedium} from 'react-icons/fa'

// Updated component with dark mode support and improved styling
export function SmartTransactionsSection() {
  return (
    <div className="-mx-4 mb-16 mt-4 w-screen md:mx-0 md:mt-8 md:max-w-[1220px]">
      <div className="w-full border border-gray-200 bg-white/90 p-8 shadow-[0_4px_40px_-12px_rgba(0,0,0,0.1)] backdrop-blur-sm dark:border-gray-800 dark:bg-gray-900/90 dark:shadow-[0_4px_40px_-12px_rgba(0,0,0,0.3)] md:rounded-lg md:p-32">
        <div className="flex flex-col gap-8 md:flex-row md:gap-16">
          {/* Info Text */}
          <div className="w-full md:w-2/3">
            <h2 className="mb-6 text-[22px] font-medium leading-[1.1] tracking-tight text-verus-blue dark:text-white md:text-[40px]">
              No faulty smart contracts—only secure Smart Transactions.
            </h2>
            <div className="space-y-4">
              <p className="text-[14px] leading-[1.8] tracking-tight text-gray-700 dark:text-gray-300 md:text-[15px]">
                All functionality on the Verus blockchain is programmed in the
                protocol. All Verus features are considered mission-critical and
                find their origin in the consensus layer. These functionalities
                are directly connected to the miners and stakers, they are
                called Smart Transactions.
              </p>
              <p className="text-[14px] leading-[1.8] tracking-tight text-gray-700 dark:text-gray-300 md:text-[15px]">
                Verus shifts core security responsibilities from application
                developers to the protocol level, ensuring that critical
                functions are validated by consensus. This, combined with a
                transparent wallet approval mechanism, ensures users always
                understand exactly what they're authorizing.
              </p>
              <p className="text-[14px] leading-[1.8] tracking-tight text-gray-700 dark:text-gray-300 md:text-[15px]">
                It's an important design choice because we can see many problems
                arise with smart contracts on other (EVM-based) systems.
                Vulnerabilities, bugs and abuse. New smart contract incidents
                occur each day.
              </p>
              <p className="text-[14px] leading-[1.8] tracking-tight text-gray-700 dark:text-gray-300 md:text-[15px]">
                Smart Transactions represent a fundamental shift in blockchain
                architecture. Instead of relying on complex programmable
                contracts, Verus embeds core functionalities directly in the
                protocol—where they're validated by consensus and can't be
                exploited.
              </p>
            </div>

            {/* Medium Article Link - Styled like homepage */}
            <a
              href={`${env.NEXT_PUBLIC_VERUS_MEDIUM}/verus-smart-transactions-vs-smart-contracts-f98079c00ed0`}
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-8 inline-flex items-center gap-2 rounded-lg border border-blue-200 bg-blue-50/80 px-5 py-3 text-[13px] text-blue-600 backdrop-blur-sm transition-all duration-300 hover:border-blue-300 hover:bg-blue-50 hover:text-blue-700 dark:border-blue-800/40 dark:bg-blue-950/40 dark:text-blue-300 dark:hover:border-blue-700/60 dark:hover:bg-blue-950/50 dark:hover:text-blue-200 md:text-[15px]"
            >
              <FaMedium className="h-5 w-5 text-gray-700 dark:text-gray-300" />
              <span>
                Read the article: Verus Smart Transactions vs. Smart Contracts
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="ml-1 h-4 w-4 transition-all duration-300 group-hover:translate-x-1"
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

          {/* Features */}
          <div className="w-full border-gray-200 dark:border-gray-700 md:w-1/3 md:border-l md:pl-16">
            <div className="space-y-8">
              {/* Protocol-Level Security */}
              <div className="group">
                <div className="mb-3 flex items-center gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-verus-blue/10 dark:bg-blue-900/30">
                    <Shield className="h-5 w-5 text-verus-blue dark:text-blue-400" />
                  </div>
                  <h3 className="text-[16px] font-medium text-gray-900 dark:text-white md:text-[18px]">
                    Protocol-Level Security
                  </h3>
                </div>
                <div className="rounded-lg bg-gradient-to-r from-blue-50 via-blue-50/50 to-transparent p-4 dark:from-blue-900/20 dark:via-blue-900/10 dark:to-transparent">
                  <p className="text-[13px] leading-relaxed text-gray-700 dark:text-gray-300">
                    Critical functions like currencies, identity, and DeFi are
                    built into the consensus layer. No smart contract code means
                    no smart contract vulnerabilities to exploit.
                  </p>
                </div>
              </div>

              {/* Developer Friendly */}
              <div className="group">
                <div className="mb-3 flex items-center gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-verus-blue/10 dark:bg-blue-900/30">
                    <Code className="h-5 w-5 text-verus-blue dark:text-blue-400" />
                  </div>
                  <h3 className="text-[16px] font-medium text-gray-900 dark:text-white md:text-[18px]">
                    Developer Friendly
                  </h3>
                </div>
                <div className="rounded-lg bg-gradient-to-r from-blue-50 via-blue-50/50 to-transparent p-4 dark:from-blue-900/20 dark:via-blue-900/10 dark:to-transparent">
                  <p className="text-[13px] leading-relaxed text-gray-700 dark:text-gray-300">
                    Build advanced applications using straightforward API
                    commands, without learning complex smart contract languages.
                    Create secure dApps that leverage protocol-level features.
                  </p>
                </div>
              </div>

              {/* MEV Resistant */}
              <div className="group">
                <div className="mb-3 flex items-center gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-verus-blue/10 dark:bg-blue-900/30">
                    <Zap className="h-5 w-5 text-verus-blue dark:text-blue-400" />
                  </div>
                  <h3 className="text-[16px] font-medium text-gray-900 dark:text-white md:text-[18px]">
                    MEV Resistant
                  </h3>
                </div>
                <div className="rounded-lg bg-gradient-to-r from-blue-50 via-blue-50/50 to-transparent p-4 dark:from-blue-900/20 dark:via-blue-900/10 dark:to-transparent">
                  <p className="text-[13px] leading-relaxed text-gray-700 dark:text-gray-300">
                    Unlike EVM systems where transactions can be reordered for
                    profit, Smart Transactions are processed fairly by
                    consensus. No front-running, no sandwich attacks, no value
                    extraction.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
