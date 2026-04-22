import Image from 'next/image'

import {env} from '@/configs/env'
import {AlertTriangle, ExternalLink} from 'lucide-react'
import {FaMedium} from 'react-icons/fa'

export function CompareSection() {
  return (
    <div className="w-full border-t border-gray-200 dark:border-gray-800">
      <div className="w-full overflow-hidden bg-white/90 dark:bg-black/30">
        {/* First Compare Section */}
        <div className="flex w-full flex-col items-start justify-center pt-20 md:pt-32">
          <div className="w-full px-10 pb-10 md:px-14 md:pb-16">
            <div className="max-w-[760px]">
              <h2 className="mb-4 text-[28px] font-medium leading-[1.2] tracking-tight text-gray-800 dark:text-white md:mb-8 md:text-[44px]">
                Move beyond smart contracts: protocol-level security
              </h2>
              <p className="text-[15px] leading-relaxed tracking-normal text-gray-600 dark:text-gray-300 md:text-[17px]">
                Other protocols use complex smart contracts with inherent
                vulnerabilities. Verus built currencies, DeFi, identity and data
                operations directly into the protocol itself, making this a
                secure and scalable protocol.
              </p>
              <a
                href={`${env.NEXT_PUBLIC_VERUS_MEDIUM}/verus-smart-transactions-vs-smart-contracts-f98079c00ed0`}
                target="_blank"
                rel="noopener noreferrer"
                className="group -ml-2 mt-5 inline-flex items-start rounded-lg p-2 transition-colors [&>div>div]:hover:underline"
              >
                <div>
                  <div className="mb-1 flex items-center gap-2 text-[15px] font-[450] text-gray-800 dark:text-white">
                    <FaMedium className="h-4 w-4 text-gray-700 dark:text-gray-300" />
                    The difference between smart contracts and smart
                    transactions
                    <ExternalLink className="h-4 w-4 opacity-50 group-hover:opacity-100" />
                  </div>
                </div>
              </a>
            </div>
          </div>

          <div className="grid w-full grid-cols-1 overflow-hidden border-y border-gray-200 dark:border-gray-800 md:grid-cols-2">
            {/* Problems with Smart Contracts */}
            <div className="relative h-full w-full overflow-hidden">
              <div className="absolute right-0 top-0 z-0 h-[250px] w-[250px] -translate-y-1/3 translate-x-1/3 transform rounded-full bg-blue-500/5 blur-[60px] dark:bg-blue-500/10"></div>
              <div className="relative z-10 border-b border-gray-200 p-6 dark:border-gray-800 md:px-14 md:py-8">
                <div className="flex items-center gap-2">
                  <div className="rounded-lg p-1.5">
                    <AlertTriangle className="h-5 w-5 text-red-600 dark:text-red-400" />
                  </div>
                  <h3 className="text-[16px] font-medium text-red-700 dark:text-red-300 md:text-[18px]">
                    The smart contract problem
                  </h3>
                </div>
              </div>

              <div className="relative z-10 p-6 md:p-14">
                <ul className="space-y-5">
                  <li className="flex items-start gap-4">
                    <div className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-red-100 dark:bg-red-800/30">
                      <span className="text-sm font-semibold text-red-700 dark:text-red-300">
                        1
                      </span>
                    </div>
                    <div className="space-y-1">
                      <h4 className="text-[15px] font-medium text-red-800 dark:text-red-200 md:text-[17px]">
                        Vulnerable to exploits
                      </h4>
                      <p className="text-[14px] leading-relaxed tracking-normal text-gray-600 dark:text-gray-300 md:text-[15px]">
                        Complex code with potential vulnerabilities that can be
                        exploited by attackers, leading to millions in lost
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
                        Unpredictable bugs
                      </h4>
                      <p className="text-[14px] leading-relaxed tracking-normal text-gray-600 dark:text-gray-300 md:text-[15px]">
                        Complex logic and extensive codebases lead to
                        unpredictable bugs that can cause catastrophic failures.
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
                        Perfect code dependency
                      </h4>
                      <p className="text-[14px] leading-relaxed tracking-normal text-gray-600 dark:text-gray-300 md:text-[15px]">
                        Security entirely depends on flawless code, making even
                        minor oversights potentially catastrophic.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            {/* The Verus Solution */}
            <div className="relative h-full w-full overflow-hidden border-t border-gray-200 dark:border-gray-800 md:border-l md:border-t-0">
              <div className="absolute right-0 top-0 z-0 h-[250px] w-[250px] -translate-y-1/3 translate-x-1/3 transform rounded-full bg-blue-500/5 blur-[60px] dark:bg-blue-500/10"></div>
              <div className="relative z-10 border-b border-gray-200 p-6 dark:border-gray-800 md:px-14 md:py-8">
                <div className="flex items-center gap-2">
                  <div className="rounded-lg p-1.5">
                    <Image
                      src="/img/verus-icon.svg"
                      alt="Verus Icon"
                      width={20}
                      height={20}
                      className="h-5 w-5"
                    />
                  </div>
                  <h3 className="text-[16px] font-medium text-verus-blue dark:text-blue-300 md:text-[18px]">
                    The Verus advantage
                  </h3>
                </div>
              </div>

              <div className="relative z-10 p-6 md:p-14">
                <ul className="space-y-5">
                  <li className="flex items-start gap-4">
                    <div className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-800/30">
                      <span className="text-sm font-semibold text-blue-700 dark:text-blue-300">
                        1
                      </span>
                    </div>
                    <div className="space-y-1">
                      <h4 className="text-[15px] font-medium text-verus-blue dark:text-blue-200 md:text-[17px]">
                        No code to exploit
                      </h4>
                      <p className="text-[14px] leading-relaxed tracking-normal text-gray-600 dark:text-gray-300 md:text-[15px]">
                        Currency, DeFi, identity and data operations are
                        blockchain primitives. Validated by protocol rules, not
                        custom code.
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
                      <h4 className="text-[15px] font-medium text-verus-blue dark:text-blue-200 md:text-[17px]">
                        Protocol guaranteed
                      </h4>
                      <p className="text-[14px] leading-relaxed tracking-normal text-gray-600 dark:text-gray-300 md:text-[15px]">
                        Every node validates transactions using the same core
                        logic. No external dependencies or contract assumptions.
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
                      <h4 className="text-[15px] font-medium text-verus-blue dark:text-blue-200 md:text-[17px]">
                        Direct transactions
                      </h4>
                      <p className="text-[14px] leading-relaxed tracking-normal text-gray-600 dark:text-gray-300 md:text-[15px]">
                        Send currencies directly without permission systems.
                        Your keys control your funds, period.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Second Compare Section */}
        <div className="flex w-full flex-col items-start justify-center pt-20 md:pt-32">
          <div className="w-full px-10 pb-10 md:px-14 md:pb-16">
            <div className="max-w-[760px]">
              <h2 className="mb-4 text-[28px] font-medium leading-[1.2] tracking-tight text-gray-800 dark:text-white md:mb-8 md:text-[44px]">
                Protocol-level currencies, not contract tokens
              </h2>
              <p className="text-[15px] leading-relaxed tracking-normal text-gray-600 dark:text-gray-300 md:text-[17px]">
                Most tokens exist as smart contract state. Verus currencies are
                protocol primitives, validated by every node with the same
                security as the native blockchain coin.
              </p>
            </div>
          </div>

          <div className="grid w-full grid-cols-1 overflow-hidden border-y border-gray-200 dark:border-gray-800 md:grid-cols-2">
            {/* Problems with Token Systems */}
            <div className="relative h-full w-full overflow-hidden">
              <div className="absolute right-0 top-0 z-0 h-[250px] w-[250px] -translate-y-1/3 translate-x-1/3 transform rounded-full bg-blue-500/5 blur-[60px] dark:bg-blue-500/10"></div>
              <div className="relative z-10 border-b border-gray-200 p-6 dark:border-gray-800 md:px-14 md:py-8">
                <div className="flex items-center gap-2">
                  <div className="rounded-lg p-1.5">
                    <AlertTriangle className="h-5 w-5 text-red-600 dark:text-red-400" />
                  </div>
                  <h3 className="text-[16px] font-medium text-red-700 dark:text-red-300 md:text-[18px]">
                    Conventional token systems
                  </h3>
                </div>
              </div>

              <div className="relative z-10 p-6 md:p-14">
                <ul className="space-y-5">
                  <li className="flex items-start gap-4">
                    <div className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-red-100 dark:bg-red-800/30">
                      <span className="text-sm font-semibold text-red-700 dark:text-red-300">
                        1
                      </span>
                    </div>
                    <div className="space-y-1">
                      <h4 className="text-[15px] font-medium text-red-800 dark:text-red-200 md:text-[17px]">
                        Smart contract entries
                      </h4>
                      <p className="text-[14px] leading-relaxed tracking-normal text-gray-600 dark:text-gray-300 md:text-[15px]">
                        Tokens exist merely as entries in smart contract state,
                        inheriting all the vulnerabilities of their code.
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
                        Limited verification
                      </h4>
                      <p className="text-[14px] leading-relaxed tracking-normal text-gray-600 dark:text-gray-300 md:text-[15px]">
                        Consensus only verifies that the contract executed, not
                        the validity of the token's supply or transactions.
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
                        Security compromises
                      </h4>
                      <p className="text-[14px] leading-relaxed tracking-normal text-gray-600 dark:text-gray-300 md:text-[15px]">
                        Vulnerable to hacks targeting the smart contract, which
                        could lead to token theft or unauthorized minting.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            {/* The Verus Difference */}
            <div className="relative h-full w-full overflow-hidden border-t border-gray-200 dark:border-gray-800 md:border-l md:border-t-0">
              <div className="absolute right-0 top-0 z-0 h-[250px] w-[250px] -translate-y-1/3 translate-x-1/3 transform rounded-full bg-blue-500/5 blur-[60px] dark:bg-blue-500/10"></div>
              <div className="relative z-10 border-b border-gray-200 p-6 dark:border-gray-800 md:px-14 md:py-8">
                <div className="flex items-center gap-2">
                  <div className="rounded-lg p-1.5">
                    <Image
                      src="/img/verus-icon.svg"
                      alt="Verus Icon"
                      width={20}
                      height={20}
                      className="h-5 w-5"
                    />
                  </div>
                  <h3 className="text-[16px] font-medium text-verus-blue dark:text-blue-300 md:text-[18px]">
                    The Verus advantage
                  </h3>
                </div>
              </div>

              <div className="relative z-10 p-6 md:p-14">
                <ul className="space-y-5">
                  <li className="flex items-start gap-4">
                    <div className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-800/30">
                      <span className="text-sm font-semibold text-blue-700 dark:text-blue-300">
                        1
                      </span>
                    </div>
                    <div className="space-y-1">
                      <h4 className="text-[15px] font-medium text-verus-blue dark:text-blue-200 md:text-[17px]">
                        Protocol-level assets
                      </h4>
                      <p className="text-[14px] leading-relaxed tracking-normal text-gray-600 dark:text-gray-300 md:text-[15px]">
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
                      <h4 className="text-[15px] font-medium text-verus-blue dark:text-blue-200 md:text-[17px]">
                        Direct validation
                      </h4>
                      <p className="text-[14px] leading-relaxed tracking-normal text-gray-600 dark:text-gray-300 md:text-[15px]">
                        Every node validates currency operations using core
                        protocol rules, not contract interpretation.
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
                      <h4 className="text-[15px] font-medium text-verus-blue dark:text-blue-200 md:text-[17px]">
                        Native security
                      </h4>
                      <p className="text-[14px] leading-relaxed tracking-normal text-gray-600 dark:text-gray-300 md:text-[15px]">
                        All currencies inherit the full cryptographic security
                        of the blockchain itself, not contract-dependent
                        protection.
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
  )
}
