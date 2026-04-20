import Link from 'next/link'

import {env} from '@/configs/env'
import {
  ArrowLeftRight,
  Ban,
  Coins,
  DollarSign,
  ExternalLink,
  Lock,
  Shield,
  Store,
} from 'lucide-react'

export function MigrateContent() {
  return (
    <div className="relative -mx-4 mt-8 w-screen md:mx-0 md:mt-32 md:max-w-[1220px]">
      {/* 1:1 ERC-20 Mapping Section */}
      <section className="relative mb-24">
        <div className="mx-auto w-full max-w-[1100px]">
          <div className="relative overflow-hidden rounded-2xl border border-blue-100/80 bg-gradient-to-br from-blue-50/90 to-white p-8 shadow-sm backdrop-blur-sm dark:border-blue-900/30 dark:from-blue-950/40 dark:to-gray-950 md:p-12">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.08),transparent_50%)] dark:bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.15),transparent_50%)]"></div>
            <div className="absolute -bottom-8 -right-8 h-32 w-32 rounded-full bg-blue-400/10 blur-xl dark:bg-blue-400/20"></div>

            <div className="relative">
              <h2 className="mb-4 text-[28px] font-medium leading-[1.2] tracking-tight text-gray-800 dark:text-white md:mb-6 md:text-[40px]">
                1:1 ERC-20 Mapping Gives You the Best of Both Worlds
              </h2>

              <p className="mb-10 max-w-4xl text-[16px] leading-relaxed text-gray-600 dark:text-gray-300 md:text-[18px]">
                One of Verus's most powerful features is the ability to create
                currencies on Verus that are mapped 1:1 with existing ERC-20
                tokens through the Verus-Ethereum Bridge.
              </p>

              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
                {[
                  {
                    icon: <Store className="h-5 w-5" />,
                    title: 'Create a Mapped Currency',
                    description:
                      'Launch a currency on Verus that is directly mapped to your existing ERC-20 token',
                  },
                  {
                    icon: <Lock className="h-5 w-5" />,
                    title: 'Non-Custodial Bridge',
                    description:
                      'The Verus-Ethereum Bridge is non-custodial and decentralized-no entity controls your assets',
                  },
                  {
                    icon: <ArrowLeftRight className="h-5 w-5" />,
                    title: 'Seamless Movement',
                    description:
                      'Users can move tokens freely between Ethereum and Verus networks',
                  },
                  {
                    icon: <Coins className="h-5 w-5" />,
                    title: 'Dual Ecosystem Access',
                    description:
                      'Your token remains accessible in Ethereum while gaining all Verus capabilities',
                  },
                ].map((feature, index) => (
                  <div
                    key={index}
                    className="group rounded-xl border border-blue-100/80 bg-white/70 p-6 backdrop-blur-sm transition-all duration-300 dark:border-blue-900/30 dark:bg-gray-900/40"
                  >
                    <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-blue-100/80 text-blue-600 transition-colors dark:bg-blue-900/30 dark:text-blue-400">
                      {feature.icon}
                    </div>
                    <h3 className="mb-2 text-[18px] font-medium text-gray-900 dark:text-white">
                      {feature.title}
                    </h3>
                    <p className="text-[14px] text-gray-600 dark:text-gray-300">
                      {feature.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits Section */}
      <section className="relative mb-24">
        <h2 className="mb-4 text-center text-[28px] font-medium leading-[1.2] tracking-tight text-gray-800 dark:text-white md:mb-10 md:text-[45px]">
          <span className="text-gray-600 dark:text-white">
            Key Benefits Over Staying on Ethereum
          </span>
        </h2>

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-10">
          {/* Dramatically Lower Fees */}
          <div className="relative flex-1 overflow-hidden rounded-2xl border border-blue-100/80 bg-white/70 p-8 shadow-sm backdrop-blur-sm dark:border-blue-900/30 dark:bg-gray-900/50">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.08),transparent_50%)] dark:bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.15),transparent_50%)]"></div>
            <div className="absolute -bottom-8 -right-8 h-32 w-32 rounded-full bg-blue-400/10 blur-xl dark:bg-blue-400/20"></div>

            <div className="relative">
              <div className="mb-6 flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-blue-100/80 bg-white/90 text-blue-600 shadow-sm dark:border-blue-900/30 dark:bg-gray-800/90 dark:text-blue-400">
                  <DollarSign className="h-6 w-6" />
                </div>
                <h3 className="text-[20px] font-medium text-gray-900 dark:text-white md:text-[24px]">
                  Dramatically Lower Fees
                </h3>
              </div>

              <div className="mb-6 grid grid-cols-2 gap-3">
                <div className="flex flex-col items-center rounded-xl border border-blue-100/60 bg-white/80 px-4 py-3 backdrop-blur-sm dark:border-blue-900/20 dark:bg-gray-800/50">
                  <span className="bg-gradient-to-r from-verus-blue to-blue-600 bg-clip-text text-[24px] font-semibold text-transparent dark:from-blue-400 dark:to-blue-500 md:text-[32px]">
                    0.0001
                  </span>
                  <span className="mt-1 text-[13px] text-gray-600 dark:text-gray-400">
                    VRSC per TX
                  </span>
                </div>
                <div className="flex flex-col items-center rounded-xl border border-blue-100/60 bg-white/80 px-4 py-3 backdrop-blur-sm dark:border-blue-900/20 dark:bg-gray-800/50">
                  <span className="bg-gradient-to-r from-verus-blue to-blue-600 bg-clip-text text-[24px] font-semibold text-transparent dark:from-blue-400 dark:to-blue-500 md:text-[32px]">
                    0.05%
                  </span>
                  <span className="mt-1 text-[13px] text-gray-600 dark:text-gray-400">
                    Max DeFi Fee
                  </span>
                </div>
              </div>

              <ul className="space-y-4 pl-4">
                <li className="relative pl-6 text-[15px] leading-relaxed text-gray-600 dark:text-gray-300 md:text-[16px]">
                  <div className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-blue-500/60 dark:bg-blue-400/60"></div>
                  Standard transactions cost just a fraction of a cent
                </li>
                <li className="relative pl-6 text-[15px] leading-relaxed text-gray-600 dark:text-gray-300 md:text-[16px]">
                  <div className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-blue-500/60 dark:bg-blue-400/60"></div>
                  DeFi operations cost only 0.025% to 0.05% with no gas fees
                </li>
                <li className="relative pl-6 text-[15px] leading-relaxed text-gray-600 dark:text-gray-300 md:text-[16px]">
                  <div className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-blue-500/60 dark:bg-blue-400/60"></div>
                  No gas wars: predictable, stable fees regardless of network
                  congestion
                </li>
              </ul>
            </div>
          </div>

          {/* MEV Resistance */}
          <div className="relative flex-1 overflow-hidden rounded-2xl border border-blue-100/80 bg-gradient-to-br from-blue-50/70 to-white p-8 shadow-sm backdrop-blur-sm dark:border-blue-900/30 dark:from-blue-950/40 dark:to-gray-950">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.08),transparent_50%)] dark:bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.15),transparent_50%)]"></div>
            <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-blue-400/10 blur-2xl dark:bg-blue-400/20"></div>

            <div className="relative">
              <div className="mb-6 flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-blue-100/80 bg-white/90 text-blue-600 shadow-sm dark:border-blue-900/30 dark:bg-gray-800/90 dark:text-blue-400">
                  <Ban className="h-6 w-6" />
                </div>
                <h3 className="text-[20px] font-medium text-gray-900 dark:text-white md:text-[24px]">
                  MEV Resistance
                </h3>
              </div>

              <ul className="space-y-4 pl-4">
                <li className="relative pl-6 text-[15px] leading-relaxed text-gray-600 dark:text-gray-300 md:text-[16px]">
                  <div className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-blue-500/60 dark:bg-blue-400/60"></div>
                  <span className="font-medium">No Front-Running:</span> Verus
                  protocol processes all transactions within a block
                  simultaneously
                </li>
                <li className="relative pl-6 text-[15px] leading-relaxed text-gray-600 dark:text-gray-300 md:text-[16px]">
                  <div className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-blue-500/60 dark:bg-blue-400/60"></div>
                  <span className="font-medium">Fair Pricing:</span> All users
                  converting within the same block get the same fair price
                </li>
                <li className="relative pl-6 text-[15px] leading-relaxed text-gray-600 dark:text-gray-300 md:text-[16px]">
                  <div className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-blue-500/60 dark:bg-blue-400/60"></div>
                  <span className="font-medium">No Sandwich Attacks:</span>{' '}
                  Transactions cannot be reordered within a block for profit
                </li>
              </ul>
            </div>
          </div>

          {/* Enhanced Security */}
          <div className="relative flex-1 overflow-hidden rounded-2xl border border-blue-100/80 bg-white/70 p-8 shadow-sm backdrop-blur-sm dark:border-blue-900/30 dark:bg-gray-900/50">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.08),transparent_50%)] dark:bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.15),transparent_50%)]"></div>
            <div className="absolute -bottom-8 -right-8 h-32 w-32 rounded-full bg-blue-400/10 blur-xl dark:bg-blue-400/20"></div>

            <div className="relative">
              <div className="mb-6 flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-blue-100/80 bg-white/90 text-blue-600 shadow-sm dark:border-blue-900/30 dark:bg-gray-800/90 dark:text-blue-400">
                  <Shield className="h-6 w-6" />
                </div>
                <h3 className="text-[20px] font-medium text-gray-900 dark:text-white md:text-[24px]">
                  Enhanced Security
                </h3>
              </div>

              <ul className="space-y-4 pl-4">
                <li className="relative pl-6 text-[15px] leading-relaxed text-gray-600 dark:text-gray-300 md:text-[16px]">
                  <div className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-blue-500/60 dark:bg-blue-400/60"></div>
                  <span className="font-medium">Protocol-Level Security:</span>{' '}
                  All currencies are validated by the consensus mechanism
                </li>
                <li className="relative pl-6 text-[15px] leading-relaxed text-gray-600 dark:text-gray-300 md:text-[16px]">
                  <div className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-blue-500/60 dark:bg-blue-400/60"></div>
                  <span className="font-medium">No Smart Contract Risk:</span>{' '}
                  Features operate through "smart transactions" at the protocol
                  level
                </li>
                <li className="relative pl-6 text-[15px] leading-relaxed text-gray-600 dark:text-gray-300 md:text-[16px]">
                  <div className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-blue-500/60 dark:bg-blue-400/60"></div>
                  <span className="font-medium">51% Attack Resistance:</span>{' '}
                  Verus Proof of Power requires attackers to control both hash
                  power and stake
                </li>
              </ul>
            </div>
          </div>

          {/* Advanced DeFi Capabilities */}
          <div className="relative flex-1 overflow-hidden rounded-2xl border border-blue-100/80 bg-gradient-to-br from-blue-50/70 to-white p-8 shadow-sm backdrop-blur-sm dark:border-blue-900/30 dark:from-blue-950/40 dark:to-gray-950">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.08),transparent_50%)] dark:bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.15),transparent_50%)]"></div>
            <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-blue-400/10 blur-2xl dark:bg-blue-400/20"></div>

            <div className="relative">
              <div className="mb-6 flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-blue-100/80 bg-white/90 text-blue-600 shadow-sm dark:border-blue-900/30 dark:bg-gray-800/90 dark:text-blue-400">
                  <Store className="h-6 w-6" />
                </div>
                <h3 className="text-[20px] font-medium text-gray-900 dark:text-white md:text-[24px]">
                  Advanced DeFi Capabilities
                </h3>
              </div>

              <ul className="space-y-4 pl-4">
                <li className="relative pl-6 text-[15px] leading-relaxed text-gray-600 dark:text-gray-300 md:text-[16px]">
                  <div className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-blue-500/60 dark:bg-blue-400/60"></div>
                  <span className="font-medium">Basket Currencies:</span> Use
                  your mapped token as a reserve in basket currencies (liquidity
                  pools)
                </li>
                <li className="relative pl-6 text-[15px] leading-relaxed text-gray-600 dark:text-gray-300 md:text-[16px]">
                  <div className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-blue-500/60 dark:bg-blue-400/60"></div>
                  <span className="font-medium">Multi-Currency Baskets:</span>{' '}
                  Create baskets with up to 10 currencies in reserves
                </li>
                <li className="relative pl-6 text-[15px] leading-relaxed text-gray-600 dark:text-gray-300 md:text-[16px]">
                  <div className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-blue-500/60 dark:bg-blue-400/60"></div>
                  <span className="font-medium">Backing Percentage:</span> Set
                  reserve ratios between 5% and 100% in a basket currency
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Migration Process Section */}
      <section className="relative mb-24">
        <div className="mx-auto w-full max-w-[1100px]">
          <h2 className="mb-6 text-center text-[28px] font-medium leading-[1.2] tracking-tight text-gray-800 dark:text-white md:mb-10 md:text-[45px]">
            How to Migrate Your Token
          </h2>

          <p className="mx-auto mb-16 max-w-3xl text-center text-[16px] text-gray-600 dark:text-gray-300 md:text-[18px]">
            Migration to Verus is straightforward and maintains compatibility
            with your existing ecosystem
          </p>

          <div className="relative overflow-hidden rounded-2xl border border-blue-100/80 bg-white/70 p-8 shadow-sm backdrop-blur-sm dark:border-blue-900/30 dark:bg-gray-900/50 md:p-10">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.08),transparent_50%)] dark:bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.15),transparent_50%)]"></div>

            <div className="relative">
              <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
                {[
                  {
                    step: '1',
                    title: 'Register VerusID',
                    description: 'Create a namespace for your project',
                  },
                  {
                    step: '2',
                    title: 'Map Your ERC-20',
                    description:
                      'Launch a currency mapped to your token with a single command',
                  },
                  {
                    step: '3',
                    title: 'Export Currency to Ethereum',
                    description:
                      'Complete the bridge by exporting the mapped currency to Ethereum network',
                  },
                  {
                    step: '4',
                    title: 'Create DeFi Instruments',
                    description:
                      'Optionally build basket currencies and liquidity pools with your token',
                  },
                ].map((step, index) => (
                  <div key={index} className="relative">
                    <div className="flex h-full flex-col rounded-xl border border-blue-100/80 bg-gradient-to-br from-blue-50/80 to-white/80 p-6 backdrop-blur-sm dark:border-blue-900/30 dark:from-blue-950/60 dark:to-gray-950/60">
                      <div className="mb-4 flex flex-col items-center text-center">
                        <div className="mb-4 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-blue-600 text-xl font-semibold text-white dark:bg-blue-600">
                          {step.step}
                        </div>
                        <h3 className="text-xl font-medium text-gray-900 dark:text-white">
                          {step.title}
                        </h3>
                      </div>
                      <p className="text-center text-[15px] text-gray-600 dark:text-gray-300">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="mb-24 text-center">
        <h2 className="mb-6 text-[24px] font-medium text-gray-900 dark:text-white md:text-[36px]">
          Ready to Migrate Your Token?
        </h2>
        <div className="flex flex-col justify-center gap-4 sm:flex-row">
          <a
            href={env.NEXT_PUBLIC_DISCORD}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex h-[50px] items-center justify-center rounded-lg border border-blue-200 bg-white/80 px-8 text-[16px] font-medium text-verus-blue backdrop-blur-sm transition-all duration-300 hover:-translate-y-[1px] hover:border-blue-300 hover:text-blue-600 hover:shadow-lg dark:border-blue-800/60 dark:bg-blue-950/80 dark:text-blue-300 dark:hover:border-blue-700 dark:hover:text-blue-200 dark:hover:shadow-blue-950/50"
          >
            Get help from the community
            <ExternalLink className="ml-2 h-4 w-4" />
          </a>
          <Link
            href={`${env.NEXT_PUBLIC_VERUS_DOCS}/currencies/mapping-1:1-eth.html`}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex h-[50px] items-center justify-center rounded-lg bg-gradient-to-r from-verus-blue to-blue-600 px-8 text-[16px] font-medium text-white transition-all duration-300 hover:-translate-y-[1px] hover:shadow-lg hover:shadow-blue-600/25 dark:from-blue-600 dark:to-blue-700 dark:hover:shadow-blue-900/50"
          >
            View documentation
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
      </section>
    </div>
  )
}
