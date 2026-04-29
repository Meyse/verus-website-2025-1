import type {Metadata} from 'next'

import {env} from '@/configs/env'
import {GreenContent} from '@/features/green/content'
import {GreenFeaturesGrid} from '@/features/green/features-grid'
import {ArrowRight} from 'lucide-react'
import {IoLogoDiscord} from 'react-icons/io5'

import {Button} from '@/components/ui/button'
import {BgWrapper} from '@/components/bg-wrapper'

export const metadata: Metadata = {
  title: 'Environmentally Conscious Protocol',
  description:
    'Combining proof-of-work security with proof-of-stake efficiency in one protocol.',
  keywords:
    'sustainable blockchain, green cryptocurrency, energy efficient blockchain, eco-friendly crypto, environmental blockchain, Verus green',
}

export default function GreenPage() {
  return (
    <BgWrapper>
      <div className="bg-gradient-to-b from-gray-100 via-gray-100 to-white dark:from-gray-950 dark:via-gray-950 dark:to-gray-950">
        <div className="flex flex-col items-center px-0 pb-16 pt-0 md:pb-24 xl:px-4 xl:pt-[54px]">
          <div className="w-full min-w-0 max-w-full overflow-hidden border-b border-gray-200 bg-gray-50 shadow-[0_4px_40px_-12px_rgba(0,0,0,0.1)] dark:border-gray-800 dark:bg-gray-950 dark:shadow-[0_4px_40px_-12px_rgba(0,0,0,0.2)] xl:max-w-[1220px] xl:rounded-lg xl:border">
            <section className="border-b border-gray-200 bg-gray-50 px-8 py-12 text-center dark:border-gray-800 dark:bg-gray-950 md:px-14 md:py-16">
              <h1 className="mx-auto max-w-[320px] break-words text-[32px] font-medium leading-[1.05] tracking-tight text-gray-800 dark:text-white md:max-w-[900px] md:text-[58px]">
                Environmentally conscious protocol
              </h1>
              <p className="mx-auto mt-4 max-w-[320px] break-words text-[16px] font-normal leading-relaxed tracking-normal text-gray-600 dark:text-gray-300 md:mt-5 md:max-w-[760px] md:text-[22px]">
                Verus combines proof-of-work security with proof-of-stake
                efficiency in one protocol.
              </p>

              <div className="mx-auto mt-8 flex w-full max-w-[520px] flex-col items-center justify-center gap-4 md:flex-row">
                <Button
                  asChild
                  variant="verusPrimary"
                  size="verus"
                  className="w-full md:w-fit"
                >
                  <a href="/get-started">
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
                    Join the worldwide community
                    <IoLogoDiscord className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-[1px] md:h-6 md:w-6" />
                  </a>
                </Button>
              </div>
            </section>

            <GreenFeaturesGrid />
            <GreenContent />
          </div>
        </div>
      </div>
    </BgWrapper>
  )
}
