import Image from 'next/image'

import { Coins, ExternalLink } from 'lucide-react'

/*
 * ExchangesSection - Server Component
 * - Second section of the Get VRSC page showing exchange options
 * - Displays available exchanges with their logos
 * - Fully server-rendered with no client-side JavaScript
 * - Updated: Removed TradeOgre exchange card, now only displays SafeTrade
 */

export function ExchangesSection() {
  return (
    <section className="relative w-full overflow-hidden rounded-2xl border border-blue-100/80 bg-gradient-to-br from-blue-50/90 to-white backdrop-blur-sm dark:border-blue-900/30 dark:from-blue-950/40 dark:to-gray-950">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.08),transparent_50%)] dark:bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.15),transparent_50%)]"></div>
      <div className="absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-blue-400/10 blur-2xl dark:bg-blue-400/20"></div>

      <div className="relative p-6 md:p-10">
        <div className="mb-6 flex items-center gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-blue-100/80 bg-white/90 text-blue-600 shadow-sm dark:border-blue-900/30 dark:bg-gray-800/90 dark:text-blue-400">
            <Coins className="h-6 w-6" />
          </div>
          <h2 className="text-[20px] font-medium text-gray-900 dark:text-white md:text-[28px]">
            Exchanges
          </h2>
        </div>

        <p className="mb-8 max-w-3xl text-[15px] leading-relaxed text-gray-700 dark:text-gray-300 md:text-[16px]">
          VRSC is available on the following cryptocurrency exchanges. Please
          conduct your own due diligence before using any exchange service.
        </p>

        <div className="grid max-w-2xl grid-cols-1 gap-6 justify-items-start">
          {/* SafeTrade */}
          <a
            href="https://safe.trade"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center rounded-xl border border-gray-700 bg-white dark:bg-gray-800 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-blue-600 hover:shadow-lg hover:shadow-blue-900/20"
          >
            <div className="mb-3 flex h-20 w-48 items-center justify-center">
              <Image
                src="/img/exchanges/safe-trade.png"
                alt="SafeTrade Exchange"
                width={500}
                height={500}
                className="max-h-full max-w-full object-contain"
              />
            </div>
            <p className="mt-2 text-center text-[16px] font-medium dark:text-white text-gray-900">
              SafeTrade
            </p>
            <div className="mt-1 flex items-center gap-1">
              <span className="text-[13px] text-gray-400">Visit Exchange</span>
              <ExternalLink className="h-3 w-3 text-gray-400 transition-colors group-hover:text-blue-400" />
            </div>
          </a>

        </div>

        <div className="mt-8 text-center">
          <p className="text-[14px] italic text-gray-600 dark:text-gray-400">
            Disclaimer: Verus does not endorse or guarantee the security of any
            third-party exchange. Always do your own research and exercise
            caution when using exchange services.
          </p>
        </div>
      </div>
    </section>
  )
}
