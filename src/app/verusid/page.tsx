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
      <div className="bg-gradient-to-b from-gray-100 via-gray-100 to-white dark:from-gray-950 dark:via-gray-950 dark:to-gray-950">
        <div className="flex flex-col items-center px-0 pb-16 pt-0 md:pb-24 xl:px-4 xl:pt-[54px]">
          <div className="w-full overflow-hidden border-b border-gray-200 bg-gray-50 shadow-[0_4px_40px_-12px_rgba(0,0,0,0.1)] dark:border-gray-800 dark:bg-gray-950 dark:shadow-[0_4px_40px_-12px_rgba(0,0,0,0.2)] xl:max-w-[1220px] xl:rounded-lg xl:border">
            <section className="border-b border-gray-200 bg-gray-50 px-8 py-12 text-center dark:border-gray-800 dark:bg-gray-950 md:px-14 md:py-16">
              <h1 className="mx-auto max-w-[900px] text-[32px] font-medium leading-[1.05] tracking-tight text-gray-800 dark:text-white md:text-[58px]">
                Your identity, your control
              </h1>
              <p className="mx-auto mt-4 max-w-[760px] text-[16px] font-normal leading-relaxed tracking-normal text-gray-600 dark:text-gray-300 md:mt-5 md:text-[22px]">
                Self-sovereign identity, private data control, and secure asset
                management built into the Verus Protocol.
              </p>
            </section>

            <FeaturesGrid />
            <DigitalControlSection />
            <RealWorldSection />
            <FutureSection />
          </div>
        </div>
      </div>
    </BgWrapper>
  )
}
