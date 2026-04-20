import {env} from '@/configs/env'
import {Globe, Sparkles, User} from 'lucide-react'
import {FaMedium} from 'react-icons/fa'

/*
 * Updated: Simplified the real-world applications section to focus on just two example
 * use cases (Social Tokens and Community Currencies) and added text to emphasize that
 * possibilities with the protocol are endless.
 * Added links to relevant Medium articles for further reading.
 */
export function RealWorldApplications() {
  return (
    <section className="relative mb-24 overflow-hidden rounded-2xl border border-blue-100/80 bg-gradient-to-br from-blue-50/90 to-white backdrop-blur-sm dark:border-blue-900/30 dark:from-blue-950/40 dark:to-gray-950 md:mt-32">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(59,130,246,0.08),transparent_70%)] dark:bg-[radial-gradient(ellipse_at_top_right,rgba(59,130,246,0.15),transparent_70%)]"></div>
      <div className="absolute right-0 top-0 -z-10 h-64 w-64 bg-gradient-to-br from-blue-400/5 to-transparent blur-3xl dark:from-blue-400/10"></div>

      <div className="relative p-8 md:p-16">
        <h2 className="mb-4 text-center text-[28px] font-medium leading-[1.2] tracking-tight text-gray-800 dark:text-white md:mb-8 md:text-[55px]">
          Real-World Applications for Verus Currencies
        </h2>
        <p className="mx-auto mb-6 max-w-3xl text-center text-[16px] text-gray-600 dark:text-gray-300 md:text-[20px]">
          Verus currencies enable powerful financial applications beyond
          traditional cryptocurrencies.
        </p>

        <p className="mx-auto mb-8 max-w-3xl text-center text-[16px] font-medium text-blue-600 dark:text-blue-400 md:text-[18px]">
          <Sparkles className="mb-1 mr-2 inline-block h-5 w-5" />
          These are just examples — the possibilities with the Verus Protocol
          are endless!
        </p>

        <div className="mb-12 flex flex-col justify-center gap-4 md:flex-row">
          <a
            href={`${env.NEXT_PUBLIC_VERUS_MEDIUM}/community-currencies-a-case-study-to-explore-new-technical-possibilities-ede897433b55`}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 rounded-none border border-blue-200 bg-blue-50/80 px-5 py-3 text-[13px] text-blue-600 backdrop-blur-sm transition-all duration-300 hover:-translate-y-[1px] hover:border-blue-300 hover:bg-blue-50 hover:text-blue-700 hover:shadow-md dark:border-blue-800/40 dark:bg-blue-950/40 dark:text-blue-300 dark:hover:border-blue-700/60 dark:hover:bg-blue-950/50 dark:hover:text-blue-200 dark:hover:shadow-blue-950/40 md:rounded-lg md:text-[15px]"
          >
            <FaMedium className="h-5 w-5 text-gray-700 dark:text-gray-300" />
            <span>
              Community Currencies: A Case Study to Explore New Technical
              Possibilities
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

          <a
            href={`${env.NEXT_PUBLIC_VERUS_MEDIUM}/the-coming-of-age-of-social-tokens-518aed68c8f2`}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 rounded-none border border-blue-200 bg-blue-50/80 px-5 py-3 text-[13px] text-blue-600 backdrop-blur-sm transition-all duration-300 hover:-translate-y-[1px] hover:border-blue-300 hover:bg-blue-50 hover:text-blue-700 hover:shadow-md dark:border-blue-800/40 dark:bg-blue-950/40 dark:text-blue-300 dark:hover:border-blue-700/60 dark:hover:bg-blue-950/50 dark:hover:text-blue-200 dark:hover:shadow-blue-950/40 md:rounded-lg md:text-[15px]"
          >
            <FaMedium className="h-5 w-5 text-gray-700 dark:text-gray-300" />
            <span>The Coming of Age of Social Tokens</span>
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

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {/* Social Tokens */}
          <div className="group relative overflow-hidden rounded-xl border border-blue-100/80 bg-white/80 px-8 py-6 backdrop-blur-sm dark:border-blue-900/30 dark:bg-gray-800/40">
            <div className="absolute -bottom-10 -right-10 h-40 w-40 rounded-full bg-blue-400/5 blur-2xl dark:bg-blue-400/10"></div>
            <div className="relative">
              <div className="mb-4 flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-blue-100/80 bg-white/90 text-blue-600 shadow-sm dark:border-blue-900/30 dark:bg-gray-800/90 dark:text-blue-400">
                  <User className="h-6 w-6" />
                </div>
                <h3 className="text-[20px] font-medium text-gray-900 dark:text-white md:text-[24px]">
                  Social Tokens
                </h3>
              </div>
              <p className="mb-4 text-[15px] leading-relaxed text-gray-600 dark:text-gray-300 md:text-[16px]">
                Create personalized currencies that connect creators with their
                communities through direct ownership and engagement.
              </p>
              <ul className="space-y-2 pl-2">
                <li className="relative pl-6 text-[15px] leading-relaxed text-gray-600 dark:text-gray-300">
                  <div className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-blue-500/60 dark:bg-blue-400/60"></div>
                  Launch influencer tokens with built-in liquidity
                </li>
                <li className="relative pl-6 text-[15px] leading-relaxed text-gray-600 dark:text-gray-300">
                  <div className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-blue-500/60 dark:bg-blue-400/60"></div>
                  Enable fan communities to participate directly
                </li>
                <li className="relative pl-6 text-[15px] leading-relaxed text-gray-600 dark:text-gray-300">
                  <div className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-blue-500/60 dark:bg-blue-400/60"></div>
                  Create exclusive digital goods and NFTs
                </li>
                <li className="relative pl-6 text-[15px] leading-relaxed text-gray-600 dark:text-gray-300">
                  <div className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-blue-500/60 dark:bg-blue-400/60"></div>
                  Establish membership systems and access controls
                </li>
                <li className="relative pl-6 text-[15px] leading-relaxed text-gray-600 dark:text-gray-300">
                  <div className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-blue-500/60 dark:bg-blue-400/60"></div>
                  Generate verifiable online profiles and fan IDs
                </li>
                <li className="relative pl-6 text-[15px] leading-relaxed text-gray-600 dark:text-gray-300">
                  <div className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-blue-500/60 dark:bg-blue-400/60"></div>
                  Distribute tickets, coupons, and discount codes
                </li>
                <li className="relative pl-6 text-[15px] leading-relaxed text-gray-600 dark:text-gray-300">
                  <div className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-blue-500/60 dark:bg-blue-400/60"></div>
                  Set up automated reward systems
                </li>
              </ul>
            </div>
          </div>

          {/* Community Currencies */}
          <div className="group relative overflow-hidden rounded-xl border border-blue-100/80 bg-white/80 px-8 py-6 backdrop-blur-sm dark:border-blue-900/30 dark:bg-gray-800/40">
            <div className="absolute -bottom-10 -right-10 h-40 w-40 rounded-full bg-blue-400/5 blur-2xl dark:bg-blue-400/10"></div>
            <div className="relative">
              <div className="mb-4 flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-blue-100/80 bg-white/90 text-blue-600 shadow-sm dark:border-blue-900/30 dark:bg-gray-800/90 dark:text-blue-400">
                  <Globe className="h-6 w-6" />
                </div>
                <h3 className="text-[20px] font-medium text-gray-900 dark:text-white md:text-[24px]">
                  Community Currencies
                </h3>
              </div>
              <p className="mb-4 text-[15px] leading-relaxed text-gray-600 dark:text-gray-300 md:text-[16px]">
                Build local economic systems with currencies designed
                specifically for community needs and values.
              </p>
              <ul className="space-y-2 pl-2">
                <li className="relative pl-6 text-[15px] leading-relaxed text-gray-600 dark:text-gray-300">
                  <div className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-blue-500/60 dark:bg-blue-400/60"></div>
                  Launch currencies backed by stable assets
                </li>
                <li className="relative pl-6 text-[15px] leading-relaxed text-gray-600 dark:text-gray-300">
                  <div className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-blue-500/60 dark:bg-blue-400/60"></div>
                  Enable instant convertibility to other currencies
                </li>
                <li className="relative pl-6 text-[15px] leading-relaxed text-gray-600 dark:text-gray-300">
                  <div className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-blue-500/60 dark:bg-blue-400/60"></div>
                  Create transparent, auditable monetary systems
                </li>
                <li className="relative pl-6 text-[15px] leading-relaxed text-gray-600 dark:text-gray-300">
                  <div className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-blue-500/60 dark:bg-blue-400/60"></div>
                  Establish local digital goods economies
                </li>
                <li className="relative pl-6 text-[15px] leading-relaxed text-gray-600 dark:text-gray-300">
                  <div className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-blue-500/60 dark:bg-blue-400/60"></div>
                  Support community governance through multi-sig controls
                </li>
                <li className="relative pl-6 text-[15px] leading-relaxed text-gray-600 dark:text-gray-300">
                  <div className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-blue-500/60 dark:bg-blue-400/60"></div>
                  Measure and capture community-contributed value
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
