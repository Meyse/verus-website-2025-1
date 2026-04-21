import type {Metadata} from 'next'

import {DigitalControlSection} from '@/features/verusid/digital-control-section'
import {FeaturesGrid} from '@/features/verusid/features-grid'
import {FutureSection} from '@/features/verusid/future-section'
import {RealWorldSection} from '@/features/verusid/real-world-section'

import {BgWrapper} from '@/components/bg-wrapper'

export const metadata: Metadata = {
  title: 'Own Your Digital Future with VerusID',
  description:
    'Your Identity, Your Control. Self-sovereign identity solutions built on the Verus Protocol.',
  keywords:
    'self-sovereign identity, digital identity, blockchain identity, decentralized identity, VerusID, identity control',

  alternates: {
    canonical: '/verusid',
  },
}

export default function VerusIDPage() {
  return (
    <BgWrapper>
      <div className="flex flex-col items-center px-4">
        <div className="pt-[30px] md:pt-[70px]">
          <div className="mx-auto max-w-[1220px] text-center">
            <h1 className="mb-4 text-center text-[32px] font-medium leading-[1.1] tracking-tight text-white md:mb-8 md:text-[60px]">
              Your Identity, Your Control
            </h1>
          </div>
        </div>

        <div className="flex w-full justify-center">
          <FeaturesGrid />
        </div>

        <div className="flex w-full justify-center">
          <DigitalControlSection />
        </div>

        <div className="flex w-full justify-center">
          <RealWorldSection />
        </div>

        <div className="flex w-full justify-center">
          <FutureSection />
        </div>
      </div>
    </BgWrapper>
  )
}
