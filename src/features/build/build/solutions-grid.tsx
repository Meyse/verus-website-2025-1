import Image from 'next/image'
import Link from 'next/link'

import {ArrowUpDown, Coins, Database, Network, Store} from 'lucide-react'

export function SolutionsGrid() {
  return (
    <div className="-mx-4 mt-2 w-screen md:mx-0 md:mt-2 md:max-w-[1220px]">
      <div className="grid grid-cols-1 gap-4 px-4 md:grid-cols-3 md:gap-4 md:px-0">
        {/* Blockchains */}
        <div className="relative flex h-full flex-col overflow-hidden rounded-lg border border-blue-100/80 bg-gradient-to-br from-blue-50/70 to-white p-8 shadow-[0_4px_40px_-12px_rgba(0,0,0,0.1)] dark:border-blue-900/30 dark:from-blue-950/40 dark:to-gray-950 dark:shadow-[0_4px_40px_-12px_rgba(0,0,0,0.3)]">
          <div className="relative flex flex-grow flex-col">
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full border border-blue-200/50 bg-white/80 dark:border-blue-900/50 dark:bg-gray-800/80">
              <Network className="h-7 w-7 text-verus-blue dark:text-blue-400" />
            </div>
            <div className="mb-4 flex items-center gap-2">
              <h3 className="text-[18px] font-medium text-gray-900 dark:text-white md:text-[22px]">
                Blockchains
              </h3>
              <span className="rounded bg-verus-blue/10 px-1.5 py-0.5 text-[11px] font-medium text-verus-blue dark:bg-verus-blue/20 dark:text-blue-300">
                PBaaS
              </span>
            </div>
            <p className="text-[14px] leading-relaxed text-gray-700 dark:text-gray-300 md:text-[15px]">
              Launch powerful & interoperable blockchains. Rent-free,
              independent & secure.
            </p>
            <div className="mt-8 flex flex-wrap gap-2">
              <span className="rounded-full border border-verus-blue/10 bg-verus-blue/5 px-3 py-1.5 text-[12px] font-medium text-verus-blue/80 dark:border-blue-800/30 dark:bg-verus-blue/10 dark:text-blue-300">
                51% attack resistant
              </span>
              <span className="rounded-full border border-verus-blue/10 bg-verus-blue/5 px-3 py-1.5 text-[12px] font-medium text-verus-blue/80 dark:border-blue-800/30 dark:bg-verus-blue/10 dark:text-blue-300">
                Cross-chain access
              </span>
              <span className="rounded-full border border-verus-blue/10 bg-verus-blue/5 px-3 py-1.5 text-[12px] font-medium text-verus-blue/80 dark:border-blue-800/30 dark:bg-verus-blue/10 dark:text-blue-300">
                Custom economics
              </span>
              <span className="rounded-full border border-verus-blue/10 bg-verus-blue/5 px-3 py-1.5 text-[12px] font-medium text-verus-blue/80 dark:border-blue-800/30 dark:bg-verus-blue/10 dark:text-blue-300">
                Protocol-level DeFi
              </span>
              <span className="rounded-full border border-verus-blue/10 bg-verus-blue/5 px-3 py-1.5 text-[12px] font-medium text-verus-blue/80 dark:border-blue-800/30 dark:bg-verus-blue/10 dark:text-blue-300">
                On-chain storage
              </span>
              <span className="rounded-full border border-verus-blue/10 bg-verus-blue/5 px-3 py-1.5 text-[12px] font-medium text-verus-blue/80 dark:border-blue-800/30 dark:bg-verus-blue/10 dark:text-blue-300">
                Marketplace
              </span>
            </div>
            <div className="mt-auto pt-8">
              <Link
                href="/build/pbaas-chains"
                className="group flex h-[40px] w-fit items-center justify-center rounded-lg border border-blue-200 bg-white/80 px-8 text-[14px] font-medium text-verus-blue backdrop-blur-sm transition-all duration-300 hover:-translate-y-[1px] hover:border-blue-300 hover:text-blue-600 hover:shadow-lg dark:border-blue-800/60 dark:bg-blue-950/80 dark:text-blue-300 dark:hover:border-blue-700 dark:hover:text-blue-200 dark:hover:shadow-blue-950/50 md:h-[50px] md:text-[16px]"
              >
                Learn more
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

        {/* Currencies */}
        <div className="relative flex h-full flex-col overflow-hidden rounded-lg border border-blue-100/80 bg-gradient-to-br from-blue-50/70 to-white p-8 shadow-[0_4px_40px_-12px_rgba(0,0,0,0.1)] dark:border-blue-900/30 dark:from-blue-950/40 dark:to-gray-950 dark:shadow-[0_4px_40px_-12px_rgba(0,0,0,0.3)]">
          <div className="relative flex flex-grow flex-col">
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full border border-blue-200/50 bg-white/80 dark:border-blue-900/50 dark:bg-gray-800/80">
              <Coins className="h-7 w-7 text-verus-blue dark:text-blue-400" />
            </div>
            <div className="mb-4 flex items-center gap-2">
              <h3 className="text-[18px] font-medium text-gray-900 dark:text-white md:text-[22px]">
                Currencies
              </h3>
              <span className="rounded bg-verus-blue/10 px-1.5 py-0.5 text-[11px] font-medium text-verus-blue dark:bg-verus-blue/20 dark:text-blue-300">
                PBaaS
              </span>
            </div>
            <p className="text-[14px] leading-relaxed text-gray-700 dark:text-gray-300 md:text-[15px]">
              Create currencies, tokens & liquidity pools. Secured and verified
              by consensus.
            </p>
            <div className="mt-8 flex flex-wrap gap-2">
              <span className="rounded-full border border-verus-blue/10 bg-verus-blue/5 px-3 py-1.5 text-[12px] font-medium text-verus-blue/80 dark:border-blue-800/30 dark:bg-verus-blue/10 dark:text-blue-300">
                Basket currencies
              </span>
              <span className="rounded-full border border-verus-blue/10 bg-verus-blue/5 px-3 py-1.5 text-[12px] font-medium text-verus-blue/80 dark:border-blue-800/30 dark:bg-verus-blue/10 dark:text-blue-300">
                Simple tokens
              </span>
              <span className="rounded-full border border-verus-blue/10 bg-verus-blue/5 px-3 py-1.5 text-[12px] font-medium text-verus-blue/80 dark:border-blue-800/30 dark:bg-verus-blue/10 dark:text-blue-300">
                Liquidity pools
              </span>
              <span className="rounded-full border border-verus-blue/10 bg-verus-blue/5 px-3 py-1.5 text-[12px] font-medium text-verus-blue/80 dark:border-blue-800/30 dark:bg-verus-blue/10 dark:text-blue-300">
                Protocol-level
              </span>
              <span className="rounded-full border border-verus-blue/10 bg-verus-blue/5 px-3 py-1.5 text-[12px] font-medium text-verus-blue/80 dark:border-blue-800/30 dark:bg-verus-blue/10 dark:text-blue-300">
                Crowdfunding
              </span>
              <span className="rounded-full border border-verus-blue/10 bg-verus-blue/5 px-3 py-1.5 text-[12px] font-medium text-verus-blue/80 dark:border-blue-800/30 dark:bg-verus-blue/10 dark:text-blue-300">
                Bridge to ETH
              </span>
            </div>
            <div className="mt-auto pt-8">
              <Link
                href="/build/pbaas-currencies"
                className="group flex h-[40px] w-fit items-center justify-center rounded-lg border border-blue-200 bg-white/80 px-8 text-[14px] font-medium text-verus-blue backdrop-blur-sm transition-all duration-300 hover:-translate-y-[1px] hover:border-blue-300 hover:text-blue-600 hover:shadow-lg dark:border-blue-800/60 dark:bg-blue-950/80 dark:text-blue-300 dark:hover:border-blue-700 dark:hover:text-blue-200 dark:hover:shadow-blue-950/50 md:h-[50px] md:text-[16px]"
              >
                Learn more
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

        {/* VerusID */}
        <div className="relative flex h-full flex-col overflow-hidden rounded-lg border border-blue-100/80 bg-gradient-to-br from-blue-50/70 to-white p-8 shadow-[0_4px_40px_-12px_rgba(0,0,0,0.1)] dark:border-blue-900/30 dark:from-blue-950/40 dark:to-gray-950 dark:shadow-[0_4px_40px_-12px_rgba(0,0,0,0.3)]">
          <div className="relative flex flex-grow flex-col">
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full border border-blue-200/50 bg-white/80 dark:border-blue-900/50 dark:bg-gray-800/80">
              <Image
                src="/img/at-full-black.svg"
                alt="VerusID Icon"
                width={7}
                height={7}
                className="h-7 w-7 [filter:invert(31%)_sepia(93%)_saturate(1352%)_hue-rotate(213deg)_brightness(97%)_contrast(87%)] dark:[filter:invert(67%)_sepia(12%)_saturate(1352%)_hue-rotate(183deg)_brightness(100%)_contrast(97%)]"
              />
            </div>
            <h3 className="mb-4 text-[18px] font-medium text-gray-900 dark:text-white md:text-[22px]">
              VerusID
            </h3>
            <p className="text-[14px] leading-relaxed text-gray-700 dark:text-gray-300 md:text-[15px]">
              SSIDs, namespaces & building blocks for dApps.
            </p>
            <div className="mt-8 flex flex-wrap gap-2">
              <span className="rounded-full border border-verus-blue/10 bg-verus-blue/5 px-3 py-1.5 text-[12px] font-medium text-verus-blue/80 dark:border-blue-800/30 dark:bg-verus-blue/10 dark:text-blue-300">
                Self-sovereign
              </span>
              <span className="rounded-full border border-verus-blue/10 bg-verus-blue/5 px-3 py-1.5 text-[12px] font-medium text-verus-blue/80 dark:border-blue-800/30 dark:bg-verus-blue/10 dark:text-blue-300">
                Revocable
              </span>
              <span className="rounded-full border border-verus-blue/10 bg-verus-blue/5 px-3 py-1.5 text-[12px] font-medium text-verus-blue/80 dark:border-blue-800/30 dark:bg-verus-blue/10 dark:text-blue-300">
                Recoverable
              </span>
              <span className="rounded-full border border-verus-blue/10 bg-verus-blue/5 px-3 py-1.5 text-[12px] font-medium text-verus-blue/80 dark:border-blue-800/30 dark:bg-verus-blue/10 dark:text-blue-300">
                Data storage
              </span>
              <span className="rounded-full border border-verus-blue/10 bg-verus-blue/5 px-3 py-1.5 text-[12px] font-medium text-verus-blue/80 dark:border-blue-800/30 dark:bg-verus-blue/10 dark:text-blue-300">
                Multi-sig
              </span>
              <span className="rounded-full border border-verus-blue/10 bg-verus-blue/5 px-3 py-1.5 text-[12px] font-medium text-verus-blue/80 dark:border-blue-800/30 dark:bg-verus-blue/10 dark:text-blue-300">
                Private
              </span>
              <span className="rounded-full border border-verus-blue/10 bg-verus-blue/5 px-3 py-1.5 text-[12px] font-medium text-verus-blue/80 dark:border-blue-800/30 dark:bg-verus-blue/10 dark:text-blue-300">
                Verus Vault
              </span>
            </div>
            <div className="mt-auto pt-8">
              <Link
                href="/build/verusid"
                className="group flex h-[40px] w-fit items-center justify-center rounded-lg border border-blue-200 bg-white/80 px-8 text-[14px] font-medium text-verus-blue backdrop-blur-sm transition-all duration-300 hover:-translate-y-[1px] hover:border-blue-300 hover:text-blue-600 hover:shadow-lg dark:border-blue-800/60 dark:bg-blue-950/80 dark:text-blue-300 dark:hover:border-blue-700 dark:hover:text-blue-200 dark:hover:shadow-blue-950/50 md:h-[50px] md:text-[16px]"
              >
                Learn more
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

        {/* DeFi & Payments */}
        <div className="relative flex h-full flex-col overflow-hidden rounded-lg border border-blue-100/80 bg-gradient-to-br from-blue-50/70 to-white p-8 shadow-[0_4px_40px_-12px_rgba(0,0,0,0.1)] dark:border-blue-900/30 dark:from-blue-950/40 dark:to-gray-950 dark:shadow-[0_4px_40px_-12px_rgba(0,0,0,0.3)]">
          <div className="relative flex flex-grow flex-col">
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full border border-blue-200/50 bg-white/80 dark:border-blue-900/50 dark:bg-gray-800/80">
              <ArrowUpDown className="h-7 w-7 text-verus-blue dark:text-blue-400" />
            </div>
            <h3 className="mb-4 text-[18px] font-medium text-gray-900 dark:text-white md:text-[22px]">
              DeFi & Payments
            </h3>
            <p className="text-[14px] leading-relaxed text-gray-700 dark:text-gray-300 md:text-[15px]">
              Fair DeFi without MEV exploitation. Low fees & secure.
            </p>
            <div className="mt-8 flex flex-wrap gap-2">
              <span className="rounded-full border border-verus-blue/10 bg-verus-blue/5 px-3 py-1.5 text-[12px] font-medium text-verus-blue/80 dark:border-blue-800/30 dark:bg-verus-blue/10 dark:text-blue-300">
                MEV resistant
              </span>
              <span className="rounded-full border border-verus-blue/10 bg-verus-blue/5 px-3 py-1.5 text-[12px] font-medium text-verus-blue/80 dark:border-blue-800/30 dark:bg-verus-blue/10 dark:text-blue-300">
                Ultra-low fees
              </span>
              <span className="rounded-full border border-verus-blue/10 bg-verus-blue/5 px-3 py-1.5 text-[12px] font-medium text-verus-blue/80 dark:border-blue-800/30 dark:bg-verus-blue/10 dark:text-blue-300">
                Protocol-level
              </span>
              <span className="rounded-full border border-verus-blue/10 bg-verus-blue/5 px-3 py-1.5 text-[12px] font-medium text-verus-blue/80 dark:border-blue-800/30 dark:bg-verus-blue/10 dark:text-blue-300">
                Basket currencies
              </span>
              <span className="rounded-full border border-verus-blue/10 bg-verus-blue/5 px-3 py-1.5 text-[12px] font-medium text-verus-blue/80 dark:border-blue-800/30 dark:bg-verus-blue/10 dark:text-blue-300">
                Multi-currency
              </span>
              <span className="rounded-full border border-verus-blue/10 bg-verus-blue/5 px-3 py-1.5 text-[12px] font-medium text-verus-blue/80 dark:border-blue-800/30 dark:bg-verus-blue/10 dark:text-blue-300">
                Cross-chain
              </span>
            </div>
            <div className="mt-auto pt-8">
              <Link
                href="/build/defi-payments"
                className="group flex h-[40px] w-fit items-center justify-center rounded-lg border border-blue-200 bg-white/80 px-8 text-[14px] font-medium text-verus-blue backdrop-blur-sm transition-all duration-300 hover:-translate-y-[1px] hover:border-blue-300 hover:text-blue-600 hover:shadow-lg dark:border-blue-800/60 dark:bg-blue-950/80 dark:text-blue-300 dark:hover:border-blue-700 dark:hover:text-blue-200 dark:hover:shadow-blue-950/50 md:h-[50px] md:text-[16px]"
              >
                Learn more
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

        {/* Marketplace */}
        <div className="relative flex h-full flex-col overflow-hidden rounded-lg border border-blue-100/80 bg-gradient-to-br from-blue-50/70 to-white p-8 shadow-[0_4px_40px_-12px_rgba(0,0,0,0.1)] dark:border-blue-900/30 dark:from-blue-950/40 dark:to-gray-950 dark:shadow-[0_4px_40px_-12px_rgba(0,0,0,0.3)]">
          <div className="relative flex flex-grow flex-col">
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full border border-blue-200/50 bg-white/80 dark:border-blue-900/50 dark:bg-gray-800/80">
              <Store className="h-7 w-7 text-verus-blue dark:text-blue-400" />
            </div>
            <h3 className="mb-4 text-[18px] font-medium text-gray-900 dark:text-white md:text-[22px]">
              Marketplace
            </h3>
            <p className="text-[14px] leading-relaxed text-gray-700 dark:text-gray-300 md:text-[15px]">
              Peer-to-peer marketplace. No third parties needed.
            </p>
            <div className="mt-8 flex flex-wrap gap-2">
              <span className="rounded-full border border-verus-blue/10 bg-verus-blue/5 px-3 py-1.5 text-[12px] font-medium text-verus-blue/80 dark:border-blue-800/30 dark:bg-verus-blue/10 dark:text-blue-300">
                Protocol-level
              </span>
              <span className="rounded-full border border-verus-blue/10 bg-verus-blue/5 px-3 py-1.5 text-[12px] font-medium text-verus-blue/80 dark:border-blue-800/30 dark:bg-verus-blue/10 dark:text-blue-300">
                Atomic swaps
              </span>
              <span className="rounded-full border border-verus-blue/10 bg-verus-blue/5 px-3 py-1.5 text-[12px] font-medium text-verus-blue/80 dark:border-blue-800/30 dark:bg-verus-blue/10 dark:text-blue-300">
                Global discovery
              </span>
              <span className="rounded-full border border-verus-blue/10 bg-verus-blue/5 px-3 py-1.5 text-[12px] font-medium text-verus-blue/80 dark:border-blue-800/30 dark:bg-verus-blue/10 dark:text-blue-300">
                Private offers
              </span>
              <span className="rounded-full border border-verus-blue/10 bg-verus-blue/5 px-3 py-1.5 text-[12px] font-medium text-verus-blue/80 dark:border-blue-800/30 dark:bg-verus-blue/10 dark:text-blue-300">
                Smart transfers
              </span>
              <span className="rounded-full border border-verus-blue/10 bg-verus-blue/5 px-3 py-1.5 text-[12px] font-medium text-verus-blue/80 dark:border-blue-800/30 dark:bg-verus-blue/10 dark:text-blue-300">
                No escrow
              </span>
            </div>
            <div className="mt-auto pt-8">
              <Link
                href="/build/marketplace"
                className="group flex h-[40px] w-fit items-center justify-center rounded-lg border border-blue-200 bg-white/80 px-8 text-[14px] font-medium text-verus-blue backdrop-blur-sm transition-all duration-300 hover:-translate-y-[1px] hover:border-blue-300 hover:text-blue-600 hover:shadow-lg dark:border-blue-800/60 dark:bg-blue-950/80 dark:text-blue-300 dark:hover:border-blue-700 dark:hover:text-blue-200 dark:hover:shadow-blue-950/50 md:h-[50px] md:text-[16px]"
              >
                Learn more
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

        {/* Store & Retrieve Data */}
        <div className="relative flex h-full flex-col overflow-hidden rounded-lg border border-blue-100/80 bg-gradient-to-br from-blue-50/70 to-white p-8 shadow-[0_4px_40px_-12px_rgba(0,0,0,0.1)] dark:border-blue-900/30 dark:from-blue-950/40 dark:to-gray-950 dark:shadow-[0_4px_40px_-12px_rgba(0,0,0,0.3)]">
          <div className="relative flex flex-grow flex-col">
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full border border-blue-200/50 bg-white/80 dark:border-blue-900/50 dark:bg-gray-800/80">
              <Database className="h-7 w-7 text-verus-blue dark:text-blue-400" />
            </div>
            <h3 className="mb-4 text-[18px] font-medium text-gray-900 dark:text-white md:text-[22px]">
              Store & Retrieve Data
            </h3>
            <p className="text-[14px] leading-relaxed text-gray-700 dark:text-gray-300 md:text-[15px]">
              Complete on-chain database. Store & retrieve data.
            </p>
            <div className="mt-8 flex flex-wrap gap-2">
              <span className="rounded-full border border-verus-blue/10 bg-verus-blue/5 px-3 py-1.5 text-[12px] font-medium text-verus-blue/80 dark:border-blue-800/30 dark:bg-verus-blue/10 dark:text-blue-300">
                Encrypted storage
              </span>
              <span className="rounded-full border border-verus-blue/10 bg-verus-blue/5 px-3 py-1.5 text-[12px] font-medium text-verus-blue/80 dark:border-blue-800/30 dark:bg-verus-blue/10 dark:text-blue-300">
                Indexed queries
              </span>
              <span className="rounded-full border border-verus-blue/10 bg-verus-blue/5 px-3 py-1.5 text-[12px] font-medium text-verus-blue/80 dark:border-blue-800/30 dark:bg-verus-blue/10 dark:text-blue-300">
                Cross-chain access
              </span>
              <span className="rounded-full border border-verus-blue/10 bg-verus-blue/5 px-3 py-1.5 text-[12px] font-medium text-verus-blue/80 dark:border-blue-800/30 dark:bg-verus-blue/10 dark:text-blue-300">
                Protocol-level
              </span>
              <span className="rounded-full border border-verus-blue/10 bg-verus-blue/5 px-3 py-1.5 text-[12px] font-medium text-verus-blue/80 dark:border-blue-800/30 dark:bg-verus-blue/10 dark:text-blue-300">
                Structured data
              </span>
              <span className="rounded-full border border-verus-blue/10 bg-verus-blue/5 px-3 py-1.5 text-[12px] font-medium text-verus-blue/80 dark:border-blue-800/30 dark:bg-verus-blue/10 dark:text-blue-300">
                Usage-based fees
              </span>
            </div>
            <div className="mt-auto pt-8">
              <Link
                href="/build/data"
                className="group flex h-[40px] w-fit items-center justify-center rounded-lg border border-blue-200 bg-white/80 px-8 text-[14px] font-medium text-verus-blue backdrop-blur-sm transition-all duration-300 hover:-translate-y-[1px] hover:border-blue-300 hover:text-blue-600 hover:shadow-lg dark:border-blue-800/60 dark:bg-blue-950/80 dark:text-blue-300 dark:hover:border-blue-700 dark:hover:text-blue-200 dark:hover:shadow-blue-950/50 md:h-[50px] md:text-[16px]"
              >
                Learn more
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
  )
}
