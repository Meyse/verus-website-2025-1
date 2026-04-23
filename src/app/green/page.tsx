import type {Metadata} from 'next'

import Image from 'next/image'

import {env} from '@/configs/env'
import {GreenContent} from '@/features/green/content'
import {GreenFeaturesGrid} from '@/features/green/features-grid'
import {IoLogoDiscord} from 'react-icons/io5'

import {Footer} from '@/components/footer'
import {Button} from '@/components/ui/button'

export const metadata: Metadata = {
  title: 'Environmentally Conscious Protocol',
  description:
    'Combining the security of proof-of-work with the energy efficiency of proof-of-stake—sustainable by design.',
  keywords:
    'sustainable blockchain, green cryptocurrency, energy efficient blockchain, eco-friendly crypto, environmental blockchain, Verus green',
}

export default function GreenPage() {
  return (
    <>
      {/* Background images - one for light mode, one for dark mode */}
      <Image
        src="/img/bg-green.webp"
        className="absolute -z-10 mt-[50px] size-full object-cover dark:hidden md:mt-[30px]"
        alt="Hero background - light"
        fill
      />
      <Image
        src="/img/bg-darkmode-green.webp"
        className="absolute -z-10 mt-[50px] hidden size-full object-cover dark:block md:mt-[30px]"
        alt="Hero background - dark"
        fill
      />
      <main className="mt-[50px] md:mt-[70px]">
        <div className="flex flex-col items-center px-4 pt-[30px] md:pt-[70px]">
          <h1 className="text-center text-[32px] font-medium tracking-tight text-white md:text-[75px]">
            Environmentally Conscious
          </h1>
          <p className="mx-auto max-w-[400px] pt-[10px] text-center text-[16px] font-normal leading-snug tracking-tight text-white opacity-90 md:max-w-[900px] md:pt-[1px] md:text-[32px]">
            Combining the security of proof-of-work with the energy efficiency
            of proof-of-stake—sustainable by design.
          </p>

          <div className="mb-16 mt-8 flex flex-col gap-4 md:mb-32 md:flex-row">
            <Button asChild variant="verusHeroPrimary" size="verus">
              <a href="/get-started">
                Get started
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
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
            </Button>
            <Button
              asChild
              variant="verusHeroSecondary"
              size="verus"
              className="border-green-800/60 bg-green-950/40 text-green-300 hover:border-green-700/80 hover:text-green-200"
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

          <div className="flex w-full justify-center">
            <GreenFeaturesGrid />
          </div>

          <div className="flex w-full justify-center">
            <GreenContent />
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
