import type {Metadata} from 'next'

import {env} from '@/configs/env'
import {ComparisonTable} from '@/features/vs-evm/comparison-table'
import {ArrowRight} from 'lucide-react'
import {IoLogoDiscord} from 'react-icons/io5'

import {BgWrapper} from '@/components/bg-wrapper'
import {Button} from '@/components/ui/button'

export const metadata: Metadata = {
  title: 'VM-based Blockchains vs Verus',
  description:
    "Compare the architectural approaches of traditional VM blockchains with Verus Protocol's built-in functionality.",
  keywords:
    'blockchain comparison, EVM vs Verus, VM blockchain, smart contract alternatives, blockchain architecture, Verus advantage',

  alternates: {
    canonical: '/vs-evm',
  },
}

export default function VsEvmPage() {
  return (
    <BgWrapper>
      <div className="bg-gradient-to-b from-gray-100 via-gray-100 to-white dark:from-gray-950 dark:via-gray-950 dark:to-gray-950">
        <div className="flex flex-col items-center px-0 pb-16 pt-0 md:pb-24 xl:px-4 xl:pt-[54px]">
          <div className="w-full overflow-hidden border-b border-gray-200 bg-gray-50 shadow-[0_4px_40px_-12px_rgba(0,0,0,0.1)] dark:border-gray-800 dark:bg-gray-950 dark:shadow-[0_4px_40px_-12px_rgba(0,0,0,0.2)] xl:max-w-[1220px] xl:rounded-lg xl:border">
            <section className="border-b border-gray-200 bg-gray-50 px-8 py-12 text-center dark:border-gray-800 dark:bg-gray-950 md:px-14 md:py-16">
              <h1 className="mx-auto max-w-[900px] text-[32px] font-medium leading-[1.05] tracking-tight text-gray-800 dark:text-white md:text-[58px]">
                VM-based blockchains vs Verus
              </h1>
              <p className="mx-auto mt-4 max-w-[760px] text-[16px] font-normal leading-relaxed tracking-normal text-gray-600 dark:text-gray-300 md:mt-5 md:text-[22px]">
                Compare traditional VM-first blockchain architecture with the
                Verus model of protocol-level currencies, identities, DeFi, and
                cross-chain functionality.
              </p>

              <div className="mt-8 flex flex-col items-center justify-center gap-4 md:flex-row">
                <Button
                  asChild
                  variant="verusPrimary"
                  size="verus"
                  className="w-full md:w-fit"
                >
                  <a href="/build/start">
                    Get started
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </a>
                </Button>
                <Button
                  asChild
                  variant="verusSecondaryDark"
                  size="verus"
                  className="w-full md:w-fit"
                >
                  <a
                    href={env.NEXT_PUBLIC_DISCORD}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Ask in Discord
                    <IoLogoDiscord className="h-5 w-5 md:h-6 md:w-6" />
                  </a>
                </Button>
              </div>
            </section>

            <ComparisonTable />
          </div>
        </div>
      </div>
    </BgWrapper>
  )
}
