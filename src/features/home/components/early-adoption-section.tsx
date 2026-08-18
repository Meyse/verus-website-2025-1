import {ArrowRight} from 'lucide-react'

import {Button} from '@/components/ui/button'

import {getHomeProtocolStats} from '../server/get-home-protocol-stats'

// Source snapshot: https://verus.cx/ reported $755.3M in historic volume on 2026-08-06.
const HISTORIC_DEFI_VOLUME = '$750M+'

export async function EarlyAdoptionSection() {
  const stats = await getHomeProtocolStats()

  const getCellBorders = (index: number) => {
    const isDesktopRightColumn = index % 2 === 1
    const isDesktopFirstRow = index < 2

    return [
      index > 0 && 'max-md:border-t',
      isDesktopRightColumn && 'md:border-l',
      !isDesktopFirstRow && 'md:border-t',
    ]
      .filter(Boolean)
      .join(' ')
  }

  return (
    <div className="border-t border-gray-200 dark:border-gray-800">
      {/* Combined stats and info grid */}
      <div className="grid grid-cols-1 md:grid-cols-2">
        {/* Fair-launch milestone */}
        <div
          className={`relative overflow-hidden border-gray-200 px-10 py-[60px] dark:border-gray-800 md:px-14 md:py-[84px] ${getCellBorders(
            0
          )}`}
        >
          <div className="absolute right-0 top-0 z-0 h-[250px] w-[250px] -translate-y-1/3 translate-x-1/3 transform rounded-full bg-blue-500/5 blur-[60px] dark:bg-blue-500/10"></div>
          <div className="relative z-10">
            <span className="bg-gradient-to-br from-blue-400 to-blue-600 bg-clip-text text-[80px] leading-none tracking-tight text-transparent dark:from-blue-300 dark:to-blue-500 md:text-[100px] lg:text-[120px]">
              2018
            </span>
            <div className="mt-3 flex flex-wrap items-baseline gap-x-2 gap-y-1">
              <span className="text-[15px] font-medium text-gray-600 dark:text-gray-400 md:text-[17px]">
                Launch year: no ICO or premine
              </span>
              <span className="inline-flex items-center gap-2">
                <span aria-hidden="true">·</span>
                <a
                  href="/intro#fair-launch"
                  className="group inline-flex items-center gap-1.5 text-[15px] font-[450] text-gray-800 transition-colors hover:underline dark:text-white md:text-[17px]"
                >
                  Read why
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </span>
            </div>
          </div>
        </div>
        {/* Registration stat */}
        <div
          className={`relative overflow-hidden border-gray-200 px-10 py-[60px] dark:border-gray-800 md:px-14 md:py-[84px] ${getCellBorders(
            1
          )}`}
        >
          <div className="absolute right-0 top-0 z-0 h-[250px] w-[250px] -translate-y-1/3 translate-x-1/3 transform rounded-full bg-blue-500/5 blur-[60px] dark:bg-blue-500/10"></div>
          <div className="relative z-10">
            <span className="bg-gradient-to-br from-blue-400 to-verus-blue bg-clip-text text-[80px] leading-none tracking-tight text-transparent dark:from-blue-300 dark:to-verus-blue md:text-[100px] lg:text-[120px]">
              {stats.identities}
            </span>
            <div className="mt-3">
              <span className="text-[15px] font-medium text-gray-600 dark:text-gray-400 md:text-[17px]">
                VerusID registrations
              </span>
            </div>
          </div>
        </div>

        {/* DeFi volume stat */}
        <div
          className={`relative overflow-hidden border-gray-200 px-10 py-[60px] dark:border-gray-800 md:px-14 md:py-[84px] ${getCellBorders(
            2
          )}`}
        >
          <div className="absolute right-0 top-0 z-0 h-[250px] w-[250px] -translate-y-1/3 translate-x-1/3 transform rounded-full bg-blue-500/5 blur-[60px] dark:bg-blue-500/10"></div>
          <div className="relative z-10">
            <span className="bg-gradient-to-br from-blue-400 to-verus-blue bg-clip-text text-[80px] leading-none tracking-tight text-transparent dark:from-blue-300 dark:to-verus-blue md:text-[100px] lg:text-[120px]">
              {HISTORIC_DEFI_VOLUME}
            </span>
            <div className="mt-3">
              <span className="text-[15px] font-medium text-gray-600 dark:text-gray-400 md:text-[17px]">
                Historic on-chain DeFi volume since 2023
              </span>
            </div>
          </div>
        </div>

        {/* Chains stat */}
        <div
          className={`relative overflow-hidden border-gray-200 px-10 py-[60px] dark:border-gray-800 md:px-14 md:py-[84px] ${getCellBorders(
            3
          )}`}
        >
          <div className="absolute right-0 top-0 z-0 h-[250px] w-[250px] -translate-y-1/3 translate-x-1/3 transform rounded-full bg-blue-500/5 blur-[60px] dark:bg-blue-500/10"></div>
          <div className="relative z-10">
            <span className="bg-gradient-to-br from-blue-400 to-verus-blue bg-clip-text text-[80px] leading-none tracking-tight text-transparent dark:from-blue-300 dark:to-verus-blue md:text-[100px] lg:text-[120px]">
              4
            </span>
            <div className="mt-3">
              <span className="text-[15px] font-medium text-gray-600 dark:text-gray-400 md:text-[17px]">
                Chains in the ecosystem
              </span>
            </div>
          </div>
        </div>

        <div className="relative overflow-hidden border-t border-gray-200 px-10 py-[60px] dark:border-gray-800 md:col-span-2 md:px-14 md:py-[64px]">
          <div className="absolute right-0 top-0 z-0 h-[250px] w-[250px] -translate-y-1/3 translate-x-1/3 transform rounded-full bg-blue-500/5 blur-[60px] dark:bg-blue-500/10"></div>
          <div className="relative z-10 flex flex-col gap-6 md:flex-row md:items-center md:justify-between md:gap-10">
            <div className="max-w-[680px]">
              <h3 className="mb-4 font-display font-medium tracking-tight text-gray-800 dark:text-white md:text-[30px]">
                Build more, code less
              </h3>
              <p className="text-[15px] leading-relaxed tracking-normal text-gray-600 dark:text-gray-300 md:text-[17px]">
                Create requests for identity, payments, data, and encryption
                that compatible wallets present for approval. Connect directly
                to Verus nodes for currencies, chain data, and DeFi.
              </p>
            </div>
            <Button
              asChild
              variant="verusPrimary"
              size="verus"
              className="w-full shrink-0 md:w-fit"
            >
              <a href="/build/start">
                Start building
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </Button>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-6 border-t border-gray-200 px-10 py-8 dark:border-gray-800 md:flex-row md:items-center md:justify-between md:px-14 md:py-10">
        <div className="max-w-[620px]">
          <h3 className="mb-3 font-display font-medium tracking-tight text-gray-800 dark:text-white md:text-[30px]">
            Explore live protocol statistics
          </h3>
          <p className="text-[15px] leading-relaxed tracking-normal text-gray-600 dark:text-gray-300 md:text-[17px]">
            View price, supply, chain, and ecosystem data in one place.
          </p>
        </div>
        <Button
          asChild
          variant="verusSecondary"
          size="verus"
          className="w-full md:w-fit"
        >
          <a href="/statistics">
            View statistics
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </Button>
      </div>
    </div>
  )
}
