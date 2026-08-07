import Image from 'next/image'

import {env} from '@/configs/env'
import {AlertTriangle} from 'lucide-react'
import {FaMedium} from 'react-icons/fa'

import {TextLinkButton} from '@/components/ui/text-link-button'

export function CompareSection() {
  return (
    <div className="w-full border-t border-gray-200 dark:border-gray-800">
      <div className="w-full overflow-hidden bg-white/90 dark:bg-black/30">
        {/* First Compare Section */}
        <div className="flex w-full flex-col items-start justify-center pt-20 md:pt-32">
          <div className="w-full px-10 pb-10 md:px-14 md:pb-16">
            <div className="max-w-[760px]">
              <h2 className="mb-4 text-[28px] font-medium leading-[1.2] tracking-tight text-gray-800 dark:text-white md:mb-8 md:text-[44px]">
                Protocol-level functions and smart contracts
              </h2>
              <p className="text-[15px] leading-relaxed tracking-normal text-gray-600 dark:text-gray-300 md:text-[17px]">
                Many blockchains implement currencies, DeFi, identity, and data
                through application contracts. Verus implements these functions
                in the protocol, where every node validates the same rules.
              </p>
              <TextLinkButton
                href={`${env.NEXT_PUBLIC_VERUS_MEDIUM}/verus-smart-transactions-vs-smart-contracts-f98079c00ed0`}
                className="-ml-2 mt-5"
                icon={
                  <FaMedium className="h-4 w-4 text-gray-700 dark:text-gray-300" />
                }
              >
                How the two approaches differ
              </TextLinkButton>
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
                    Application-level smart contracts
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
                        Contract code can contain vulnerabilities that put funds
                        or permissions at risk.
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
                        Large contract codebases can produce unexpected behavior,
                        including failures that affect user funds.
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
                        Security depends on contract code
                      </h4>
                      <p className="text-[14px] leading-relaxed tracking-normal text-gray-600 dark:text-gray-300 md:text-[15px]">
                        Each contract's security depends on its code,
                        configuration, and surrounding dependencies.
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
                    Protocol-level validation in Verus
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
                        No separate application contract
                      </h4>
                      <p className="text-[14px] leading-relaxed tracking-normal text-gray-600 dark:text-gray-300 md:text-[15px]">
                        Currency, DeFi, identity, and data operations are protocol
                        primitives validated by the network's consensus rules.
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
                        Validated by every node
                      </h4>
                      <p className="text-[14px] leading-relaxed tracking-normal text-gray-600 dark:text-gray-300 md:text-[15px]">
                        Every node validates these transactions with the same
                        protocol logic, without relying on a separate contract
                        runtime.
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
                        Send currencies directly without a separate permission
                        system. Your keys control your funds.
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
                Protocol-level currencies
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
                        Contract tokens are recorded in contract state and depend
                        on the rules and security of that contract.
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
                        Consensus verifies contract execution; the token's supply
                        and transfer rules remain defined by the contract.
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
                        Contract-specific security risk
                      </h4>
                      <p className="text-[14px] leading-relaxed tracking-normal text-gray-600 dark:text-gray-300 md:text-[15px]">
                        A vulnerability in the token contract can affect
                        transfers, supply, or account balances.
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
                    Protocol-level validation in Verus
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
                        The protocol tracks currencies directly and applies the
                        same validation model across them.
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
                        Currency operations use the chain's consensus validation
                        rather than a separate contract-specific security model.
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
