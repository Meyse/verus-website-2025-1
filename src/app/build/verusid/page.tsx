import type {Metadata} from 'next'

import {env} from '@/configs/env'
import {VerusIDContent} from '@/features/build/verusid/content'
import {FeaturesGrid} from '@/features/build/verusid/features-grid'
import {IoLogoDiscord} from 'react-icons/io5'

import {createBuildBreadcrumbJsonLd} from '@/lib/seo/schema'

import {BgWrapper} from '@/components/bg-wrapper'
import {JsonLd} from '@/components/seo/json-ld'
import {Button} from '@/components/ui/button'

export const metadata: Metadata = {
  title: 'Build with VerusID',
  description:
    'Build dApps with self-sovereign identity, namespace control, data storage, and blockchain interoperability—no smart contracts needed.',
  keywords:
    'VerusID, self-sovereign identity, blockchain identity, decentralized identity, namespace control, data storage, Verus',

  alternates: {
    canonical: '/build/verusid',
  },
}

const breadcrumbJsonLd = createBuildBreadcrumbJsonLd(
  'Build with VerusID',
  '/build/verusid'
)

/*
 * Updated: Improved the page with conditional dark/light background images
 * and added action buttons matching the style of the main build page.
 */
export default function VerusIDPage() {
  return (
    <BgWrapper>
      <JsonLd data={breadcrumbJsonLd} />
      <div className="flex flex-col items-center px-4 pt-[30px] md:pt-[70px]">
        <h1 className="text-center text-[32px] font-medium leading-[1.1] tracking-tight text-white md:text-[75px]">
          Build with VerusID
        </h1>
        <p className="mx-auto max-w-[400px] pt-[10px] text-center text-[16px] font-normal leading-snug tracking-tight text-white opacity-90 md:max-w-[900px] md:pt-[20px] md:text-[32px]">
          Build dApps with self-sovereign identity, namespace control, data
          storage, and blockchain interoperability—no smart contracts needed.
        </p>

        <div className="mb-16 mt-8 flex flex-col gap-4 md:mb-32 md:flex-row">
          <Button asChild variant="verusHeroPrimary" size="verus">
            <a href="/build/start">
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
          <Button asChild variant="verusHeroSecondary" size="verus">
            <a
              href={env.NEXT_PUBLIC_DISCORD}
              target="_blank"
              rel="noopener noreferrer"
            >
              Get help from the community
              <IoLogoDiscord className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-[1px] md:h-6 md:w-6" />
            </a>
          </Button>
        </div>

        <div className="flex w-full justify-center">
          <FeaturesGrid />
        </div>

        <div className="flex w-full justify-center">
          <VerusIDContent />
        </div>
      </div>
    </BgWrapper>
  )
}
