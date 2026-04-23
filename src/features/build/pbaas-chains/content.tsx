import Link from 'next/link'

import {
  ArrowLeftRight,
  BarChart3,
  Clock,
  Code,
  Coins,
  Database,
  Globe,
  Lock,
  Rocket,
  Settings,
  Shield,
  ShoppingCart,
  Store,
  Zap,
} from 'lucide-react'

export function PBaaSContent() {
  return (
    <div className="relative -mx-4 mt-8 w-screen md:mx-0 md:mt-32 md:max-w-[1220px]">
      {/* Economics Section */}
      <section className="relative mb-24">
        <div className="relative">
          <div className="flex flex-col items-center justify-center">
            <h2 className="mx-auto mb-4 max-w-[1000px] text-center text-[28px] font-medium leading-[1.2] tracking-tight text-gray-800 dark:text-white md:mb-8 md:text-[55px]">
              Design Your Chain's Economics with Protocol-Level Control
            </h2>
            <p className="mx-auto mb-16 max-w-3xl text-center text-[16px] text-gray-600 dark:text-gray-300 md:text-[20px]">
              Take complete control over your blockchain's economic model with
              customizable parameters.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {/* Tokenomics - Updated background style */}
            <div className="relative flex-1 overflow-hidden rounded-2xl border border-blue-100/80 bg-white/70 p-8 shadow-sm backdrop-blur-sm dark:border-blue-900/30 dark:bg-gray-900/50">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.08),transparent_50%)] dark:bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.15),transparent_50%)]"></div>
              <div className="absolute -bottom-8 -right-8 h-32 w-32 rounded-full bg-blue-400/10 blur-xl dark:bg-blue-400/20"></div>

              <div className="relative">
                <div className="mb-6 flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-blue-100/80 bg-white/90 text-blue-600 shadow-sm dark:border-blue-900/30 dark:bg-gray-800/90 dark:text-blue-400">
                    <Settings className="h-6 w-6" />
                  </div>
                  <h3 className="text-[20px] font-medium text-gray-900 dark:text-white md:text-[24px]">
                    Customizable Coinomics
                  </h3>
                </div>

                <ul className="space-y-4 pl-4">
                  <li className="relative pl-6 text-[15px] leading-relaxed text-gray-600 dark:text-gray-300 md:text-[16px]">
                    <div className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-blue-500/60 dark:bg-blue-400/60"></div>
                    Design custom emission curves and block reward schedules
                  </li>
                  <li className="relative pl-6 text-[15px] leading-relaxed text-gray-600 dark:text-gray-300 md:text-[16px]">
                    <div className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-blue-500/60 dark:bg-blue-400/60"></div>
                    Configure halving periods and supply dynamics
                  </li>
                  <li className="relative pl-6 text-[15px] leading-relaxed text-gray-600 dark:text-gray-300 md:text-[16px]">
                    <div className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-blue-500/60 dark:bg-blue-400/60"></div>
                    Set up multiple eras with different block rewards
                  </li>
                  <li className="relative pl-6 text-[15px] leading-relaxed text-gray-600 dark:text-gray-300 md:text-[16px]">
                    <div className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-blue-500/60 dark:bg-blue-400/60"></div>
                    Configure premine allocations
                  </li>
                </ul>
              </div>
            </div>

            {/* Custom Pricing - Updated background style */}
            <div className="relative flex-1 overflow-hidden rounded-2xl border border-blue-100/80 bg-gradient-to-br from-blue-50/70 to-white p-8 shadow-sm backdrop-blur-sm dark:border-blue-900/30 dark:from-blue-950/40 dark:to-gray-950">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.08),transparent_50%)] dark:bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.15),transparent_50%)]"></div>
              <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-blue-400/10 blur-2xl dark:bg-blue-400/20"></div>

              <div className="relative">
                <div className="mb-6 flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-blue-100/80 bg-white/90 text-blue-600 shadow-sm dark:border-blue-900/30 dark:bg-gray-800/90 dark:text-blue-400">
                    <Coins className="h-6 w-6" />
                  </div>
                  <h3 className="text-[20px] font-medium text-gray-900 dark:text-white md:text-[24px]">
                    Custom Pricing & Revenue
                  </h3>
                </div>

                <ul className="space-y-4 pl-4">
                  <li className="relative pl-6 text-[15px] leading-relaxed text-gray-600 dark:text-gray-300 md:text-[16px]">
                    <div className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-blue-500/60 dark:bg-blue-400/60"></div>
                    Set costs for VerusID registrations
                  </li>
                  <li className="relative pl-6 text-[15px] leading-relaxed text-gray-600 dark:text-gray-300 md:text-[16px]">
                    <div className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-blue-500/60 dark:bg-blue-400/60"></div>
                    Set costs for currency and token launches
                  </li>
                  <li className="relative pl-6 text-[15px] leading-relaxed text-gray-600 dark:text-gray-300 md:text-[16px]">
                    <div className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-blue-500/60 dark:bg-blue-400/60"></div>
                    Control on-chain storage pricing
                  </li>
                  <li className="relative pl-6 text-[15px] leading-relaxed text-gray-600 dark:text-gray-300 md:text-[16px]">
                    <div className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-blue-500/60 dark:bg-blue-400/60"></div>
                    Create a self-sustaining economic ecosystem
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DeFi & Marketplace Section */}
      <div className="mt-12 md:mt-32">
        <div className="flex flex-col items-center">
          {/* Main Title and Description */}
          <div className="mb-16 w-full max-w-[900px] text-center">
            <h2 className="mb-4 text-[28px] font-medium leading-[1.2] tracking-tight text-gray-800 dark:text-white md:mb-8 md:text-[55px]">
              Protocol-Level DeFi Built for True Decentralization
            </h2>
            <p className="mx-auto mb-6 max-w-[800px] text-[15px] leading-relaxed text-gray-600 dark:text-gray-300 md:text-[16px]">
              All DeFi operations—including currency conversions—execute via
              validated smart transactions that are solved simultaneously within
              each block, mathematically preventing MEV exploitation.
            </p>
            <p className="mx-auto max-w-[800px] text-[15px] leading-relaxed text-gray-600 dark:text-gray-300 md:text-[16px]">
              The system's protocol-level implementation means every transaction
              inherits the same security guarantees as the blockchain itself,
              with transparent execution validated by consensus. This removes
              trust dependencies, eliminating the risk of exploits common to
              traditional VM-based DeFi platforms.
            </p>
          </div>

          {/* DeFi and Marketplace Cards Container */}
          <div className="mb-8 grid w-full max-w-[1100px] grid-cols-1 gap-8 md:grid-cols-2">
            {/* DeFi Features */}
            <div className="relative w-full overflow-hidden rounded-2xl border border-blue-100/80 bg-gradient-to-br from-blue-50/90 to-white p-8 shadow-[0_4px_40px_-12px_rgba(0,0,0,0.1)] backdrop-blur-sm dark:border-blue-900/30 dark:from-blue-950/40 dark:to-gray-950 dark:shadow-[0_4px_40px_-12px_rgba(0,0,0,0.3)]">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.08),transparent_50%)] dark:bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.15),transparent_50%)]"></div>
              <div className="absolute -bottom-8 -right-8 h-32 w-32 rounded-full bg-blue-400/10 blur-xl dark:bg-blue-400/20"></div>

              <div className="relative flex h-full flex-col">
                <div className="mb-6 flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/90 text-blue-600 shadow-sm dark:bg-gray-800/90 dark:text-blue-400">
                    <Store className="h-6 w-6" />
                  </div>
                  <h3 className="text-[20px] font-medium text-gray-900 dark:text-white md:text-[24px]">
                    Native DeFi Protocol
                  </h3>
                </div>

                <div className="flex-1">
                  <h4 className="mb-4 text-[16px] font-medium text-gray-900 dark:text-white">
                    Key Features:
                  </h4>
                  <div className="mb-6 grid grid-cols-2 gap-3">
                    <div className="flex flex-col items-center rounded-xl border border-blue-100/60 bg-white/80 px-4 py-3 backdrop-blur-sm dark:border-blue-900/20 dark:bg-gray-800/50">
                      <span className="bg-gradient-to-r from-verus-blue to-blue-600 bg-clip-text text-[24px] font-semibold text-transparent dark:from-blue-400 dark:to-blue-500 md:text-[32px]">
                        0.025%
                      </span>
                      <span className="mt-1 text-[13px] text-gray-600 dark:text-gray-400">
                        Minimum Fee
                      </span>
                    </div>
                    <div className="flex flex-col items-center rounded-xl border border-blue-100/60 bg-white/80 px-4 py-3 backdrop-blur-sm dark:border-blue-900/20 dark:bg-gray-800/50">
                      <span className="bg-gradient-to-r from-verus-blue to-blue-600 bg-clip-text text-[24px] font-semibold text-transparent dark:from-blue-400 dark:to-blue-500 md:text-[32px]">
                        0.05%
                      </span>
                      <span className="mt-1 text-[13px] text-gray-600 dark:text-gray-400">
                        Maximum Fee
                      </span>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 rounded-xl border border-blue-100/60 bg-white/80 px-4 py-3 backdrop-blur-sm dark:border-blue-900/20 dark:bg-gray-800/50">
                      <span className="text-[14px] text-gray-700 dark:text-gray-300">
                        Native liquidity pools with MEV resistance
                      </span>
                    </div>
                    <div className="flex items-center gap-2 rounded-xl border border-blue-100/60 bg-white/80 px-4 py-3 backdrop-blur-sm dark:border-blue-900/20 dark:bg-gray-800/50">
                      <span className="text-[14px] text-gray-700 dark:text-gray-300">
                        Fractional reserve currencies as AMMs
                      </span>
                    </div>
                  </div>
                </div>

                <div className="mt-auto pt-8">
                  <Link
                    href="/build/defi-payments"
                    className="group flex h-[40px] w-full items-center justify-center rounded-lg border border-blue-200 bg-white/80 px-8 text-[14px] font-medium text-verus-blue backdrop-blur-sm transition-all duration-300 hover:border-blue-300 hover:text-blue-600 dark:border-blue-800/60 dark:bg-blue-950/80 dark:text-blue-300 dark:hover:border-blue-700 dark:hover:text-blue-200 md:h-[50px] md:text-[16px]"
                  >
                    More about DeFi
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

            {/* L1 Marketplace */}
            <div className="relative w-full overflow-hidden rounded-2xl border border-blue-100/80 bg-gradient-to-br from-blue-50/90 to-white p-8 shadow-[0_4px_40px_-12px_rgba(0,0,0,0.1)] backdrop-blur-sm dark:border-blue-900/30 dark:from-blue-950/40 dark:to-gray-950 dark:shadow-[0_4px_40px_-12px_rgba(0,0,0,0.3)]">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.08),transparent_50%)] dark:bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.15),transparent_50%)]"></div>
              <div className="absolute -bottom-8 -right-8 h-32 w-32 rounded-full bg-blue-400/10 blur-xl dark:bg-blue-400/20"></div>

              <div className="relative flex h-full flex-col">
                <div className="mb-6 flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/90 text-blue-600 shadow-sm dark:bg-gray-800/90 dark:text-blue-400">
                    <ShoppingCart className="h-6 w-6" />
                  </div>
                  <h3 className="text-[20px] font-medium text-gray-900 dark:text-white md:text-[24px]">
                    L1 Marketplace
                  </h3>
                </div>

                <div className="flex-1">
                  <p className="mb-6 text-[15px] leading-relaxed text-gray-600 dark:text-gray-300 md:text-[16px]">
                    Every PBaaS chain includes a complete L1 marketplace system
                    enabling peer-to-peer trading with no custodial risk.
                  </p>

                  <h4 className="mb-4 text-[16px] font-medium text-gray-900 dark:text-white">
                    Direct Trading Between:
                  </h4>

                  <div className="grid grid-cols-2 gap-3">
                    {[
                      'VerusID to VerusID',
                      'VerusID to Currency',
                      'Currency to Currency',
                      'Currency to VerusID',
                    ].map((item, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-2 rounded-xl border border-blue-100/60 bg-white/80 px-3 py-2 backdrop-blur-sm dark:border-blue-900/20 dark:bg-gray-800/50"
                      >
                        <ArrowLeftRight className="h-4 w-4 flex-shrink-0 text-blue-600 dark:text-blue-400" />
                        <span className="text-[13px] text-gray-700 dark:text-gray-300">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-auto pt-8">
                  <Link
                    href="/build/marketplace"
                    className="group flex h-[40px] w-full items-center justify-center rounded-lg border border-blue-200 bg-white/80 px-8 text-[14px] font-medium text-verus-blue backdrop-blur-sm transition-all duration-300 hover:border-blue-300 hover:text-blue-600 dark:border-blue-800/60 dark:bg-blue-950/80 dark:text-blue-300 dark:hover:border-blue-700 dark:hover:text-blue-200 md:h-[50px] md:text-[16px]"
                  >
                    More about the L1 Marketplace
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
        </div>
      </div>

      {/* Inherited Features Section */}
      <section className="relative mb-24 overflow-hidden rounded-2xl border border-blue-100/80 bg-gradient-to-br from-blue-50/90 to-white backdrop-blur-sm dark:border-blue-900/30 dark:from-blue-950/40 dark:to-gray-950 md:mt-32">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(59,130,246,0.08),transparent_70%)] dark:bg-[radial-gradient(ellipse_at_bottom_right,rgba(59,130,246,0.15),transparent_70%)]"></div>
        <div className="absolute bottom-0 right-0 -z-10 h-64 w-64 bg-gradient-to-br from-blue-400/5 to-transparent blur-3xl dark:from-blue-400/10"></div>

        <div className="relative p-8 md:p-16">
          <h2 className="mb-4 text-center text-[28px] font-medium leading-[1.2] tracking-tight text-gray-800 dark:text-white md:mb-8 md:text-[55px]">
            <span className="text-gray-600 dark:text-white">
              Enterprise Features Built Into Every Chain
            </span>
          </h2>
          <p className="mx-auto mb-12 max-w-3xl text-center text-[16px] text-gray-600 dark:text-gray-300 md:text-[18px]">
            Every PBaaS chain inherits a comprehensive suite of features from
            the Verus ecosystem.
          </p>

          <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
            {[
              {
                icon: <Database className="h-5 w-5" />,
                text: 'Protocol-level DeFi with MEV resistance',
              },
              {
                icon: <Coins className="h-5 w-5" />,
                text: 'Multi-currency support with liquidity pools',
              },
              {
                icon: <BarChart3 className="h-5 w-5" />,
                text: 'Fractional reserve currencies',
              },
              {
                icon: <Store className="h-5 w-5" />,
                text: 'Decentralized P2P marketplace',
              },
              {
                icon: <Code className="h-5 w-5" />,
                text: 'Self-sovereign VerusID system',
              },
              {
                icon: <Lock className="h-5 w-5" />,
                text: 'zk-SNARKs privacy technology',
              },
              {
                icon: <Shield className="h-5 w-5" />,
                text: '51% hash attack resistance',
              },
              {
                icon: <Zap className="h-5 w-5" />,
                text: '75-800 TPS processing capability',
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="group flex flex-col items-center rounded-xl border border-blue-100/60 bg-white/80 p-4 backdrop-blur-sm transition-all duration-300 dark:border-blue-900/20 dark:bg-gray-800/30 md:p-6"
              >
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-blue-100/80 text-blue-600 transition-colors dark:bg-blue-900/30 dark:text-blue-400">
                  {feature.icon}
                </div>
                <span className="text-center text-[14px] text-gray-700 dark:text-gray-300">
                  {feature.text}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Launch Options Section */}
      <section className="relative mb-24 md:mt-32">
        <div className="flex flex-col gap-8 md:flex-row md:gap-16">
          <div className="w-full md:w-1/2">
            <h2 className="mb-4 text-center text-[28px] font-medium leading-[1.2] tracking-tight text-gray-800 dark:text-white md:mb-8 md:text-left md:text-[55px]">
              Launch Your Chain on Your Terms
            </h2>
            <p className="mb-8 text-center text-[15px] leading-relaxed text-gray-600 dark:text-gray-300 md:text-left md:text-[16px]">
              PBaaS chains offer sophisticated launch mechanisms designed to
              help you build a robust community and tokenomic structure from day
              one.
            </p>

            <div className="space-y-6">
              {[
                {
                  title: 'Crowdfunding Support',
                  desc: 'Set minimum participation levels with automatic refunds',
                },
                {
                  title: 'Pre-launch Discounts',
                  desc: 'Incentivize early adopters with configurable discounts',
                },
                {
                  title: 'Vesting Schedules',
                  desc: 'Create time-locked allocations tied to VerusIDs',
                },
                {
                  title: 'Bridge Converters',
                  desc: 'Launch with built-in liquidity pools',
                },
                {
                  title: 'Public or Private',
                  desc: 'Deploy worldwide public chains or controlled-access private networks',
                },
              ].map((option, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 rounded-xl border border-blue-100/60 bg-white/80 p-5 backdrop-blur-sm transition-all duration-300 hover:shadow-md dark:border-blue-900/20 dark:bg-gray-900/30"
                >
                  <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-blue-100/80 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400">
                    <span className="text-sm font-medium">{index + 1}</span>
                  </div>
                  <div>
                    <h4 className="mb-1 text-[16px] font-medium text-gray-900 dark:text-white md:text-[18px]">
                      {option.title}
                    </h4>
                    <p className="text-[14px] text-gray-600 dark:text-gray-300 md:text-[15px]">
                      {option.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="w-full md:w-1/2">
            <div className="relative flex h-full flex-col justify-center overflow-hidden rounded-2xl border border-blue-100/80 bg-gradient-to-br from-blue-50/90 to-white p-8 shadow-md backdrop-blur-sm dark:border-blue-900/30 dark:from-blue-950/40 dark:to-gray-950">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(59,130,246,0.08),transparent_50%)] dark:bg-[radial-gradient(circle_at_bottom_left,rgba(59,130,246,0.15),transparent_50%)]"></div>
              <div className="absolute -left-8 -top-8 h-32 w-32 rounded-full bg-blue-400/10 blur-xl dark:bg-blue-400/20"></div>

              <div className="relative mb-8">
                <div className="mb-6 flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/90 text-blue-600 shadow-sm dark:bg-gray-800/90 dark:text-blue-400">
                    <Rocket className="h-6 w-6" />
                  </div>
                  <h3 className="text-[20px] font-medium text-gray-900 dark:text-white md:text-[24px]">
                    Launch Cost & Distribution
                  </h3>
                </div>

                <p className="mb-8 text-[15px] leading-relaxed text-gray-600 dark:text-gray-300 md:text-[16px]">
                  Launching a PBaaS chain costs 10,000 VRSC. This cost is split
                  evenly between the Verus network and your new chain's network:
                </p>
              </div>

              <div className="relative z-10 space-y-4 rounded-xl border border-blue-100/60 bg-white/80 p-6 backdrop-blur-sm dark:border-blue-900/20 dark:bg-gray-800/30">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-blue-500"></div>
                    <span className="text-[15px] text-gray-700 dark:text-gray-300">
                      Verus Network Miners & Stakers
                    </span>
                  </div>
                  <span className="text-[15px] font-medium text-gray-900 dark:text-white">
                    5,000 VRSC
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-blue-500"></div>
                    <span className="text-[15px] text-gray-700 dark:text-gray-300">
                      New Chain Miners & Stakers
                    </span>
                  </div>
                  <span className="text-[15px] font-medium text-gray-900 dark:text-white">
                    5,000 VRSC
                  </span>
                </div>
                <div className="flex items-center justify-between border-t border-blue-100 pt-4 dark:border-blue-900/20">
                  <span className="text-[15px] font-medium text-gray-900 dark:text-white">
                    Total Launch Cost
                  </span>
                  <span className="text-[16px] font-medium text-blue-600 dark:text-blue-400">
                    10,000 VRSC
                  </span>
                </div>
              </div>

              <div className="mt-6 border-t border-blue-100/60 pt-6 dark:border-blue-900/20">
                <h4 className="mb-4 text-[16px] font-medium text-gray-900 dark:text-white md:text-[18px]">
                  Why This Distribution?
                </h4>
                <ul className="space-y-3">
                  <li className="relative pl-6 text-[14px] leading-relaxed text-gray-600 dark:text-gray-300 md:text-[15px]">
                    <div className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-blue-500/60 dark:bg-blue-400/60"></div>
                    Rewards Verus network for providing infrastructure
                  </li>
                  <li className="relative pl-6 text-[14px] leading-relaxed text-gray-600 dark:text-gray-300 md:text-[15px]">
                    <div className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-blue-500/60 dark:bg-blue-400/60"></div>
                    Incentivizes early miners and stakers on your chain
                  </li>
                  <li className="relative pl-6 text-[14px] leading-relaxed text-gray-600 dark:text-gray-300 md:text-[15px]">
                    <div className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-blue-500/60 dark:bg-blue-400/60"></div>
                    Creates sustainable economic model for both networks
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Storage System Section */}
      <section className="relative mb-16">
        <div className="relative overflow-hidden rounded-2xl border border-blue-100/80 bg-gradient-to-br from-blue-50/90 to-white backdrop-blur-sm dark:border-blue-900/30 dark:from-blue-950/40 dark:to-gray-950">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(59,130,246,0.08),transparent_70%)] dark:bg-[radial-gradient(ellipse_at_top_left,rgba(59,130,246,0.15),transparent_70%)]"></div>
          <div className="absolute left-0 top-0 -z-10 h-64 w-64 bg-gradient-to-br from-blue-400/5 to-transparent blur-3xl dark:from-blue-400/10"></div>

          <div className="relative flex flex-col items-center gap-12 p-8 md:flex-row md:gap-16 md:p-16">
            <div className="w-full md:w-1/2">
              <h2 className="mb-4 text-[28px] font-medium leading-[1.2] tracking-tight text-gray-800 dark:text-white md:mb-8 md:text-[55px]">
                Storage Built Into the Protocol
              </h2>
              <p className="mb-6 text-[15px] leading-relaxed text-gray-600 dark:text-gray-300 md:text-[16px]">
                Every PBaaS chain includes native storage capabilities at the
                protocol level. This isn't just a simple data field - it's a
                comprehensive storage system for any type of file or data
                structure.
              </p>
              <p className="mb-8 text-[15px] leading-relaxed text-gray-600 dark:text-gray-300 md:text-[16px]">
                Chain launchers can set custom pricing models for storage usage,
                charged in the chain's native currency.
              </p>
            </div>

            <div className="w-full md:w-1/2">
              <div className="rounded-xl border border-blue-100/60 bg-white/80 p-8 backdrop-blur-sm dark:border-blue-900/20 dark:bg-gray-800/30">
                <div className="mb-6 flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100/80 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400">
                    <Database className="h-6 w-6" />
                  </div>
                  <h3 className="text-[18px] font-medium text-gray-900 dark:text-white md:text-[22px]">
                    Storage System Features
                  </h3>
                </div>

                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  {[
                    {
                      icon: <Code className="h-5 w-5" />,
                      text: 'Protocol-level storage capabilities',
                    },
                    {
                      icon: <Globe className="h-5 w-5" />,
                      text: 'Support for any file or data structure',
                      link: '/build/data/',
                    },
                    {
                      icon: <Coins className="h-5 w-5" />,
                      text: 'Customizable pricing models',
                    },
                    {
                      icon: <BarChart3 className="h-5 w-5" />,
                      text: 'Native currency fee structure',
                    },
                    {
                      icon: <Lock className="h-5 w-5" />,
                      text: 'Secure and tamper-resistant',
                    },
                    {
                      icon: <Clock className="h-5 w-5" />,
                      text: 'Permanent yet amenable storage',
                    },
                  ].map((feature, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-3 rounded-lg bg-blue-50/60 p-4 dark:bg-blue-900/10"
                    >
                      <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-white text-blue-600 dark:bg-gray-800 dark:text-blue-400">
                        {feature.icon}
                      </div>
                      <div className="mt-1">
                        {feature.link ? (
                          <Link
                            href={feature.link}
                            className="text-[14px] text-blue-600 transition-colors hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 md:text-[15px]"
                          >
                            {feature.text}
                          </Link>
                        ) : (
                          <span className="text-[14px] text-gray-700 dark:text-gray-300 md:text-[15px]">
                            {feature.text}
                          </span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
    </div>
  )
}
