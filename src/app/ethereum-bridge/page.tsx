import type {Metadata} from 'next'

import {env} from '@/configs/env'
import {BridgeContent} from '@/features/ethereum-bridge/components/content'
import {ETHEREUM_BRIDGE_CONTRACT_URL} from '@/features/ethereum-bridge/constants'
import {ExternalLink} from 'lucide-react'

import {Button} from '@/components/ui/button'
import {BgWrapper} from '@/components/bg-wrapper'

export const metadata: Metadata = {
  title: 'Verus-Ethereum Bridge',
  description:
    'A non-custodial bridge between Ethereum and Verus, based on cryptographic proofs and verified by miners and stakers.',
  keywords:
    'blockchain bridge, ethereum bridge, cross-chain, non-custodial, Verus bridge, crypto bridge, decentralized bridge, ERC-20 bridge',
  alternates: {
    canonical: '/ethereum-bridge',
  },
}

export default function EthereumBridgePage() {
  return (
    <BgWrapper>
      <div className="bg-gradient-to-b from-gray-100 via-gray-100 to-white dark:from-gray-950 dark:via-gray-950 dark:to-gray-950">
        <div className="flex flex-col items-center px-0 pb-16 pt-0 md:pb-24 xl:px-4 xl:pt-[54px]">
          <div className="w-full min-w-0 overflow-hidden border-b border-gray-200 bg-gray-50 shadow-[0_4px_40px_-12px_rgba(0,0,0,0.1)] dark:border-gray-800 dark:bg-gray-950 dark:shadow-[0_4px_40px_-12px_rgba(0,0,0,0.2)] xl:max-w-[1220px] xl:rounded-lg xl:border">
            <section className="border-b border-gray-200 bg-gray-50 px-8 py-12 text-center dark:border-gray-800 dark:bg-gray-950 md:px-14 md:py-16">
              <h1 className="mx-auto max-w-[320px] break-words text-[32px] font-medium leading-[1.05] tracking-tight text-gray-800 dark:text-white md:max-w-[900px] md:text-[58px]">
                Verus-Ethereum Bridge
              </h1>
              <p className="mx-auto mt-4 max-w-[760px] text-[16px] font-normal leading-relaxed tracking-normal text-gray-600 dark:text-gray-300 md:mt-5 md:text-[22px]">
                Bridge assets between Ethereum and Verus without custodians.
              </p>

              <div className="mx-auto mt-8 flex w-full max-w-[520px] flex-col items-center justify-center gap-4 md:flex-row">
                <Button
                  asChild
                  variant="verusPrimary"
                  size="verus"
                  className="w-full md:w-fit"
                >
                  <a
                    href={env.NEXT_PUBLIC_VERUS_BRIDGE}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Go to the bridge website
                    <ExternalLink className="h-4 w-4 opacity-60 transition-opacity duration-300 group-hover:opacity-100" />
                  </a>
                </Button>
                <Button
                  asChild
                  variant="verusSecondaryDark"
                  size="verus"
                  className="w-full md:w-fit"
                >
                  <a
                    href={ETHEREUM_BRIDGE_CONTRACT_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Ethereum contract
                    <ExternalLink className="h-4 w-4 opacity-60 transition-opacity duration-300 group-hover:opacity-100" />
                  </a>
                </Button>
              </div>
            </section>

            <BridgeContent />
          </div>
        </div>
      </div>
    </BgWrapper>
  )
}
