import type {Metadata} from 'next'

import {env} from '@/configs/env'
import {
  BridgeSection,
  CompareSection,
  EarlyAdoptionSection,
  EndSection,
  FeaturesGrid,
  GetStartedSection,
  MediumArticlesSection,
  ParticipationSection,
  ProtocolSection,
  VerusIDSection,
} from '@/features/home/components'
import {ArrowRight} from 'lucide-react'
import {IoLogoDiscord} from 'react-icons/io5'

import {createWebPageJsonLd} from '@/lib/seo/schema'

import {Button} from '@/components/ui/button'
import {BgWrapper} from '@/components/bg-wrapper'
import {JsonLd} from '@/components/seo/json-ld'

export const revalidate = 900

export const metadata: Metadata = {
  alternates: {
    canonical: '/',
  },
}

const homeJsonLd = createWebPageJsonLd({
  path: '/',
  name: 'The Internet of Value',
  description:
    'Verus is a public blockchain protocol where users own their identity, data, and money through protocol-level features for decentralized applications.',
  relatedLink: [
    'https://docs.verus.io',
    'https://wiki.verus.io',
    'https://github.com/VerusCoin',
  ],
})

export default function Home() {
  return (
    <>
      <JsonLd data={homeJsonLd} />
      <BgWrapper hasAnnouncement>
        <div className="flex flex-col items-center px-4 pt-[30px] md:pt-[70px]">
          <h1 className="text-center text-[32px] font-medium tracking-tight text-white md:text-[75px]">
            The Internet of Value
          </h1>
          <p className="mx-auto max-w-[400px] pt-[10px] text-center text-[16px] font-normal leading-snug tracking-tight text-white opacity-90 md:max-w-[900px] md:pt-[1px] md:text-[32px]">
            Where you own your <span className="font-medium">identity</span>,{' '}
            <span className="font-medium">data</span>, and{' '}
            <span className="font-medium">money</span>.
            <br className="hidden md:block" /> Ownership, not just access.
          </p>
          <div className="mb-16 mt-8 flex flex-col gap-4 md:mb-32 md:flex-row">
            <Button asChild variant="verusPrimary" size="verus">
              <a href="/build">
                Build with Verus
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </Button>
            <Button
              asChild
              variant="verusSecondary"
              size="verus"
              className="border-white/70 bg-white/10 text-white backdrop-blur-sm hover:border-white hover:bg-white/15 hover:text-white dark:border-white/70 dark:bg-white/10 dark:text-white dark:hover:border-white dark:hover:bg-white/15 dark:hover:text-white"
            >
              <a
                href={env.NEXT_PUBLIC_DISCORD}
                target="_blank"
                rel="noopener noreferrer"
              >
                Join the community
                <IoLogoDiscord className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-[1px] md:h-6 md:w-6" />
              </a>
            </Button>
          </div>

          <div className="w-screen overflow-hidden border border-gray-200 bg-white/90 shadow-[0_4px_40px_-12px_rgba(0,0,0,0.1)] backdrop-blur-sm dark:border-gray-800 dark:bg-black/30 dark:shadow-[0_4px_40px_-12px_rgba(0,0,0,0.2)] md:max-w-[1220px] md:rounded-lg">
            <FeaturesGrid />
            <EarlyAdoptionSection />
            <CompareSection />
            <ProtocolSection />
            <ParticipationSection />
            <VerusIDSection />
            <BridgeSection />
            <GetStartedSection />
            <EndSection />
          </div>
          <MediumArticlesSection />
        </div>
      </BgWrapper>
    </>
  )
}
