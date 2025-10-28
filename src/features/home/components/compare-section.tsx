import Image from 'next/image'

import { env } from '@/configs/env'
import { AlertCircle, AlertTriangle, Shield } from 'lucide-react'
import { FaMedium } from 'react-icons/fa'

export function CompareSection() {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="w-screen overflow-hidden rounded-none bg-white shadow-[0_4px_40px_-12px_rgba(0,0,0,0.1)] dark:bg-gray-950 dark:shadow-[0_4px_40px_-12px_rgba(0,0,0,0.2)] md:max-w-[1220px] md:rounded-lg">
        <div className="w-full overflow-hidden border-0 border-gray-200 bg-white/90 dark:border-gray-800 dark:bg-black/30 md:border">
          {/* First Compare Section */}
          <div className="flex w-full flex-col items-center justify-center px-4 py-16 md:px-8 md:py-24">
            <div className="mb-10 md:mb-20">
              <h2 className="mb-4 text-center text-[28px] font-medium leading-[1.2] tracking-tight text-gray-800 dark:text-white md:mb-8 md:max-w-[900px] md:text-[55px]">
                Move Beyond Smart Contracts: Protocol-Level Security
              </h2>
              <p className="text-center text-[16px] font-normal leading-relaxed tracking-tight text-gray-600 dark:text-gray-300 md:mb-8 md:max-w-[800px] md:text-[20px]">
                Other protocols use complex smart contracts with inherent vulnerabilities. Verus built currencies, DeFi, identity and data operations directly into the protocol itself.
              </p>
            </div>

            <div className="grid w-full max-w-[1000px] grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
              {/* Problems with Smart Contracts */}
              <div className="h-full w-full">
                <div className="h-full rounded-none border border-red-200 bg-gradient-to-br from-red-50 to-red-100 p-6 shadow-lg shadow-red-100/20 dark:border-red-800/40 dark:from-red-950/70 dark:to-red-900/30 dark:shadow-red-900/20 md:rounded-lg md:p-8">
                  <div className="mb-5 flex items-center gap-2">
                    <div className="rounded-lg bg-red-100 p-1.5 dark:bg-red-800/30">
                      <AlertTriangle className="h-5 w-5 text-red-600 dark:text-red-400" />
                    </div>
                    <h3 className="text-[16px] font-medium text-red-700 dark:text-red-300 md:text-[18px]">
                      The Smart Contract Problem
                    </h3>
                  </div>

                  <ul className="space-y-5">
                    <li className="flex items-start gap-4">
                      <div className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-red-100 dark:bg-red-800/30">
                        <span className="text-sm font-semibold text-red-700 dark:text-red-300">
                          1
                        </span>
                      </div>
                      <div className="space-y-1">
                        <h4 className="text-[15px] font-medium text-red-800 dark:text-red-200 md:text-[17px]">
                          Vulnerable to Exploits
                        </h4>
                        <p className="text-[14px] leading-relaxed text-red-700/80 dark:text-red-200/70 md:text-[15px]">
                          Complex code with potential vulnerabilities that can
                          be exploited by attackers, leading to millions in lost
                          funds.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-4">
                      <div className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-red-100 dark:bg-red-800/30">
                        <span className="text-sm font-semibold text-red-700 dark:text-red-300">
                          2
                        </span>
                      </div>
                      <div className="space-y-1">
                        <h4 className="text-[15px] font-medium text-red-800 dark:text-red-200 md:text-[17px]">
                          Unpredictable Bugs
                        </h4>
                        <p className="text-[14px] leading-relaxed text-red-700/80 dark:text-red-200/70 md:text-[15px]">
                          Complex logic and extensive codebases lead to
                          unpredictable bugs that can cause catastrophic
                          failures.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-4">
                      <div className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-red-100 dark:bg-red-800/30">
                        <span className="text-sm font-semibold text-red-700 dark:text-red-300">
                          3
                        </span>
                      </div>
                      <div className="space-y-1">
                        <h4 className="text-[15px] font-medium text-red-800 dark:text-red-200 md:text-[17px]">
                          Perfect Code Dependency
                        </h4>
                        <p className="text-[14px] leading-relaxed text-red-700/80 dark:text-red-200/70 md:text-[15px]">
                          Security entirely depends on flawless code, making
                          even minor oversights potentially catastrophic.
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

              {/* The Verus Solution */}
              <div className="h-full w-full">
                <div className="h-full rounded-none border border-blue-200 bg-gradient-to-br from-blue-50 to-indigo-100 p-6 shadow-lg shadow-blue-100/20 dark:border-blue-700/40 dark:from-blue-900/70 dark:to-indigo-900/30 dark:shadow-blue-900/20 md:rounded-lg md:p-8">
                  <div className="mb-5 flex items-center gap-2">
                    <div className="rounded-lg bg-blue-100 p-1.5 dark:bg-blue-800/30">
                      <Image
                        src="/img/verus-icon.svg"
                        alt="Verus Icon"
                        width={20}
                        height={20}
                        className="h-5 w-5"
                      />
                    </div>
                    <h3 className="text-[16px] font-medium text-blue-700 dark:text-blue-300 md:text-[18px]">
                      The Verus Advantage
                    </h3>
                  </div>

                  <ul className="space-y-5">
                    <li className="flex items-start gap-4">
                      <div className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-800/30">
                        <span className="text-sm font-semibold text-blue-700 dark:text-blue-300">
                          1
                        </span>
                      </div>
                      <div className="space-y-1">
                        <h4 className="text-[15px] font-medium text-blue-800 dark:text-blue-200 md:text-[17px]">
                          No Code to Exploit
                        </h4>
                        <p className="text-[14px] leading-relaxed text-blue-700/80 dark:text-blue-200/70 md:text-[15px]">
                          Currency, DeFi, identity and data operations are blockchain primitives. Validated by protocol rules, not custom code.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-4">
                      <div className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-800/30">
                        <span className="text-sm font-semibold text-blue-700 dark:text-blue-300">
                          2
                        </span>
                      </div>
                      <div className="space-y-1">
                        <h4 className="text-[15px] font-medium text-blue-800 dark:text-blue-200 md:text-[17px]">
                          Protocol Guaranteed
                        </h4>
                        <p className="text-[14px] leading-relaxed text-blue-700/80 dark:text-blue-200/70 md:text-[15px]">
                          Every node validates transactions using the same core logic. No external dependencies or contract assumptions.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-4">
                      <div className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-800/30">
                        <span className="text-sm font-semibold text-blue-700 dark:text-blue-300">
                          3
                        </span>
                      </div>
                      <div className="space-y-1">
                        <h4 className="text-[15px] font-medium text-blue-800 dark:text-blue-200 md:text-[17px]">
                          Direct Transactions
                        </h4>
                        <p className="text-[14px] leading-relaxed text-blue-700/80 dark:text-blue-200/70 md:text-[15px]">
                          Send currencies directly without permission systems. Your keys control your funds, period.
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Read More Link */}
            <a
              href={`${env.NEXT_PUBLIC_VERUS_MEDIUM}/verus-smart-transactions-vs-smart-contracts-f98079c00ed0`}
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-12 flex items-center gap-2 rounded-none border border-blue-200 bg-blue-50/80 px-5 py-3 text-[13px] text-blue-600 transition-all duration-300 hover:-translate-y-[1px] hover:border-blue-300 hover:bg-blue-50 hover:text-blue-700 hover:shadow-md dark:border-blue-800/40 dark:bg-blue-950/40 dark:text-blue-300 dark:hover:border-blue-700/60 dark:hover:bg-blue-950/50 dark:hover:text-blue-200 dark:hover:shadow-blue-950/40 md:rounded-lg md:text-[15px]"
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

          {/* Divider */}
          <div className="w-full border-t border-gray-200 dark:border-gray-800" />

          {/* Second Compare Section */}
          <div className="flex w-full flex-col items-center justify-center px-4 py-16 md:px-8 md:py-24">
            <div className="mb-10 md:mb-20">
              <h2 className="mb-4 text-center text-[28px] font-medium leading-[1.2] tracking-tight text-gray-800 dark:text-white md:mb-8 md:max-w-[900px] md:text-[55px]">
                Multi-Currency Protocol
              </h2>
              <p className="text-center text-[16px] font-normal leading-relaxed tracking-tight text-gray-600 dark:text-gray-300 md:mb-8 md:max-w-[800px] md:text-[20px]">
                Most tokens exist as smart contract state. Verus currencies are protocol primitives, validated by every node with the same security as the native blockchain coin.
              </p>
            </div>

            <div className="grid w-full max-w-[1000px] grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
              {/* Problems with Token Systems */}
              <div className="h-full w-full">
                <div className="h-full rounded-none border border-red-200 bg-gradient-to-br from-red-50 to-red-100 p-6 shadow-lg shadow-red-100/20 dark:border-red-800/40 dark:from-red-950/70 dark:to-red-900/30 dark:shadow-red-900/20 md:rounded-lg md:p-8">
                  <div className="mb-5 flex items-center gap-2">
                    <div className="rounded-lg bg-red-100 p-1.5 dark:bg-red-800/30">
                      <AlertCircle className="h-5 w-5 text-red-600 dark:text-red-400" />
                    </div>
                    <h3 className="text-[16px] font-medium text-red-700 dark:text-red-300 md:text-[18px]">
                      Conventional Token Systems
                    </h3>
                  </div>

                  <ul className="space-y-5">
                    <li className="flex items-start gap-4">
                      <div className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-red-100 dark:bg-red-800/30">
                        <span className="text-sm font-semibold text-red-700 dark:text-red-300">
                          1
                        </span>
                      </div>
                      <div className="space-y-1">
                        <h4 className="text-[15px] font-medium text-red-800 dark:text-red-200 md:text-[17px]">
                          Smart Contract Entries
                        </h4>
                        <p className="text-[14px] leading-relaxed text-red-700/80 dark:text-red-200/70 md:text-[15px]">
                          Tokens exist merely as entries in smart contract
                          state, inheriting all the vulnerabilities of their
                          code.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-4">
                      <div className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-red-100 dark:bg-red-800/30">
                        <span className="text-sm font-semibold text-red-700 dark:text-red-300">
                          2
                        </span>
                      </div>
                      <div className="space-y-1">
                        <h4 className="text-[15px] font-medium text-red-800 dark:text-red-200 md:text-[17px]">
                          Limited Verification
                        </h4>
                        <p className="text-[14px] leading-relaxed text-red-700/80 dark:text-red-200/70 md:text-[15px]">
                          Consensus only verifies that the contract executed,
                          not the validity of the token's supply or
                          transactions.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-4">
                      <div className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-red-100 dark:bg-red-800/30">
                        <span className="text-sm font-semibold text-red-700 dark:text-red-300">
                          3
                        </span>
                      </div>
                      <div className="space-y-1">
                        <h4 className="text-[15px] font-medium text-red-800 dark:text-red-200 md:text-[17px]">
                          Security Compromises
                        </h4>
                        <p className="text-[14px] leading-relaxed text-red-700/80 dark:text-red-200/70 md:text-[15px]">
                          Vulnerable to hacks targeting the smart contract,
                          which could lead to token theft or unauthorized
                          minting.
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

              {/* The Verus Difference */}
              <div className="h-full w-full">
                <div className="h-full rounded-none border border-blue-200 bg-gradient-to-br from-blue-50 to-indigo-100 p-6 shadow-lg shadow-blue-100/20 dark:border-blue-700/40 dark:from-blue-900/70 dark:to-indigo-900/30 dark:shadow-blue-900/20 md:rounded-lg md:p-8">
                  <div className="mb-5 flex items-center gap-2">
                    <div className="rounded-lg bg-blue-100 p-1.5 dark:bg-blue-800/30">
                      <Shield className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                    </div>
                    <h3 className="text-[16px] font-medium text-blue-700 dark:text-blue-300 md:text-[18px]">
                      The Verus Protocol Advantage
                    </h3>
                  </div>

                  <ul className="space-y-5">
                    <li className="flex items-start gap-4">
                      <div className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-800/30">
                        <span className="text-sm font-semibold text-blue-700 dark:text-blue-300">
                          1
                        </span>
                      </div>
                      <div className="space-y-1">
                        <h4 className="text-[15px] font-medium text-blue-800 dark:text-blue-200 md:text-[17px]">
                          Protocol-Level Assets
                        </h4>
                        <p className="text-[14px] leading-relaxed text-blue-700/80 dark:text-blue-200/70 md:text-[15px]">
                          All currencies are first-class citizens within the
                          protocol itself, not dependent on smart contract code.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-4">
                      <div className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-800/30">
                        <span className="text-sm font-semibold text-blue-700 dark:text-blue-300">
                          2
                        </span>
                      </div>
                      <div className="space-y-1">
                        <h4 className="text-[15px] font-medium text-blue-800 dark:text-blue-200 md:text-[17px]">
                          Direct Validation
                        </h4>
                        <p className="text-[14px] leading-relaxed text-blue-700/80 dark:text-blue-200/70 md:text-[15px]">
                          Every node validates currency operations using core protocol rules, not contract interpretation.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-4">
                      <div className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-800/30">
                        <span className="text-sm font-semibold text-blue-700 dark:text-blue-300">
                          3
                        </span>
                      </div>
                      <div className="space-y-1">
                        <h4 className="text-[15px] font-medium text-blue-800 dark:text-blue-200 md:text-[17px]">
                          Native Security
                        </h4>
                        <p className="text-[14px] leading-relaxed text-blue-700/80 dark:text-blue-200/70 md:text-[15px]">
                          All currencies inherit the full cryptographic security of the blockchain itself, not contract-dependent protection.
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
