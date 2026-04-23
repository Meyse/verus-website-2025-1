import type {Metadata} from 'next'

import {env} from '@/configs/env'
import {BridgeContent} from '@/features/ethereum-bridge/components/content'
import {ETHEREUM_BRIDGE_CONTRACT_URL} from '@/features/ethereum-bridge/constants'
import {ExternalLink} from 'lucide-react'

import {BgWrapper} from '@/components/bg-wrapper'
import {Button} from '@/components/ui/button'

export const metadata: Metadata = {
  title: 'Verus-Ethereum Bridge',
  description:
    'A non-custodial bridge between Ethereum and Verus, based on cryptographic proofs and verified by miners and stakers.',
  keywords:
    'blockchain bridge, ethereum bridge, cross-chain, non-custodial, Verus bridge, crypto bridge, decentralized bridge, ERC-20 bridge',
}

export default function EthereumBridgePage() {
  return (
    <BgWrapper>
      <div className="flex flex-col items-center px-4 pt-[30px] md:pt-[70px]">
        <h1 className="text-center text-[32px] font-medium leading-[1.1] tracking-tight text-white md:text-[75px]">
          Verus-Ethereum Bridge
        </h1>
        <p className="mx-auto max-w-[400px] pt-[10px] text-center text-[16px] font-normal leading-snug tracking-tight text-white opacity-90 md:max-w-[900px] md:pt-[1px] md:text-[32px]">
          Bridge assets between Ethereum and Verus without custodians.
        </p>

        <div className="mb-12 mt-8 flex flex-col gap-4 md:mb-20 md:flex-row">
          <Button asChild variant="verusHeroPrimary" size="verus">
            <a
              href={env.NEXT_PUBLIC_VERUS_BRIDGE}
              target="_blank"
              rel="noopener noreferrer"
            >
              Go to the bridge website
              <ExternalLink className="h-4 w-4" />
            </a>
          </Button>
          <Button
            asChild
            variant="verusHeroSecondary"
            size="verus"
            className="text-blue-200 hover:text-white"
          >
            <a
              href={ETHEREUM_BRIDGE_CONTRACT_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              View Ethereum contract
              <ExternalLink className="h-4 w-4" />
            </a>
          </Button>
        </div>

        <div className="flex w-full justify-center">
          <BridgeContent />
        </div>
      </div>
    </BgWrapper>
  )
}
