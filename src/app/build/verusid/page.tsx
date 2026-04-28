import type {Metadata} from 'next'

import {env} from '@/configs/env'
import {VerusIDContent} from '@/features/build/verusid/content'
import {FeaturesGrid} from '@/features/build/verusid/features-grid'
import {ArrowRight, ExternalLink} from 'lucide-react'

import {createBuildBreadcrumbJsonLd} from '@/lib/seo/schema'

import {Button} from '@/components/ui/button'
import {BgWrapper} from '@/components/bg-wrapper'
import {JsonLd} from '@/components/seo/json-ld'

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

export default function VerusIDPage() {
  return (
    <BgWrapper>
      <JsonLd data={breadcrumbJsonLd} />
      <div className="bg-gradient-to-b from-gray-100 via-gray-100 to-white dark:from-gray-950 dark:via-gray-950 dark:to-gray-950">
        <div className="flex flex-col items-center px-0 pb-16 pt-0 md:pb-24 xl:px-4 xl:pt-[54px]">
          <div className="w-full overflow-hidden border-b border-gray-200 bg-gray-50 shadow-[0_4px_40px_-12px_rgba(0,0,0,0.1)] dark:border-gray-800 dark:bg-gray-950 dark:shadow-[0_4px_40px_-12px_rgba(0,0,0,0.2)] xl:max-w-[1220px] xl:rounded-lg xl:border">
            <section className="border-b border-gray-200 bg-gray-50 px-8 py-12 text-center dark:border-gray-800 dark:bg-gray-950 md:px-14 md:py-16">
              <h1 className="mx-auto max-w-[900px] text-[32px] font-medium leading-[1.05] tracking-tight text-gray-800 dark:text-white md:text-[58px]">
                Build with VerusID
              </h1>
              <p className="mx-auto mt-4 max-w-[760px] text-[16px] font-normal leading-relaxed tracking-normal text-gray-600 dark:text-gray-300 md:mt-5 md:text-[22px]">
                Build dApps with self-sovereign identity, namespace control,
                data storage, and blockchain interoperability. No smart
                contracts needed.
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
                    Get help from the community
                    <ExternalLink className="h-4 w-4 opacity-70 transition-opacity duration-300 group-hover:opacity-100" />
                  </a>
                </Button>
              </div>
            </section>

            <FeaturesGrid />
            <VerusIDContent />
          </div>
        </div>
      </div>
    </BgWrapper>
  )
}
