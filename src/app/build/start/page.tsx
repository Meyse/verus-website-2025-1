// Build start page showcasing developer resources and documentation
import type {Metadata} from 'next'

import {env} from '@/configs/env'
import {ResourcesGrid, TerminalExample} from '@/features/build/start'
import {ExternalLink, Info} from 'lucide-react'
import {IoLogoDiscord} from 'react-icons/io5'

import {createBuildBreadcrumbJsonLd} from '@/lib/seo/schema'

import {Button} from '@/components/ui/button'
import {BgWrapper} from '@/components/bg-wrapper'
import {JsonLd} from '@/components/seo/json-ld'

export const metadata: Metadata = {
  title: {absolute: 'Build on Verus | Developer Documentation'},
  description:
    'Get started with Verus developer resources and documentation. Learn about VerusID, VDXF, DeFi, and more.',
  keywords:
    'Verus development, VerusID, VDXF, blockchain development, DeFi development, Verus documentation',

  alternates: {
    canonical: '/build/start',
  },
}

const breadcrumbJsonLd = createBuildBreadcrumbJsonLd(
  'Build on Verus',
  '/build/start'
)

export default function BuildStartPage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd} />
      <BgWrapper>
        <div className="bg-gray-100 dark:bg-gray-950">
          <div className="flex flex-col items-center px-0 pt-0 xl:px-4 xl:pt-[54px]">
            <div className="w-full min-w-0 max-w-full overflow-hidden border-b border-gray-200 bg-gray-50 shadow-[0_4px_40px_-12px_rgba(0,0,0,0.1)] dark:border-gray-800 dark:bg-gray-950 dark:shadow-[0_4px_40px_-12px_rgba(0,0,0,0.2)] xl:max-w-[1220px] xl:rounded-lg xl:border">
              <section className="border-b border-gray-200 bg-gradient-to-br from-blue-50 to-white dark:border-gray-800 dark:from-blue-950/40 dark:to-gray-950">
                <div className="grid min-w-0 grid-cols-1 md:grid-cols-[minmax(0,2fr)_minmax(300px,1fr)]">
                  <div className="min-w-0 px-8 py-12 md:px-14 md:py-16">
                    <p className="mb-4 text-[14px] font-medium leading-none tracking-normal text-verus-blue dark:text-blue-400">
                      Developer start
                    </p>
                    <h1 className="max-w-[680px] break-words text-[28px] font-medium leading-[1.2] tracking-tight text-gray-800 dark:text-white max-md:max-w-[calc(100vw-4rem)] md:text-[44px]">
                      Get your Verus build stack ready
                    </h1>
                    <p className="mt-4 max-w-[760px] break-words text-[15px] leading-relaxed tracking-normal text-gray-600 dark:text-gray-300 max-md:max-w-[calc(100vw-4rem)] md:mt-6 md:text-[17px]">
                      Use this page as a practical entry point for docs, testnet
                      access, CLI downloads, and the core guides for building
                      with VerusID, VDXF, currencies, DeFi, and data.
                    </p>

                    <div className="mt-8 flex max-w-full flex-col gap-4 max-md:max-w-[calc(100vw-4rem)] md:flex-row">
                      <Button
                        asChild
                        variant="verusPrimary"
                        size="verusWide"
                        className="w-full max-w-full md:w-fit"
                      >
                        <a
                          href={env.NEXT_PUBLIC_VERUS_DOCS}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Open developer docs
                          <ExternalLink className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-[1px]" />
                        </a>
                      </Button>
                      <Button
                        asChild
                        variant="verusSecondaryDark"
                        size="verusWide"
                        className="w-full max-w-full md:w-fit"
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
                  </div>

                  <aside className="min-w-0 border-t border-gray-200 px-8 py-10 dark:border-gray-800 md:border-l md:border-t-0 md:px-10 md:py-16">
                    <div className="flex h-full flex-col justify-center">
                      <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-lg border border-gray-200 bg-white text-verus-blue dark:border-gray-800 dark:bg-gray-900 dark:text-blue-400">
                        <Info className="h-6 w-6" />
                      </div>
                      <p className="mb-3 text-[14px] font-medium leading-none tracking-normal text-verus-blue dark:text-blue-400">
                        Living documentation
                      </p>
                      <h2 className="text-[24px] font-medium leading-[1.2] tracking-tight text-gray-800 dark:text-white md:text-[30px]">
                        Docs are in progress
                      </h2>
                      <p className="mt-4 max-w-[460px] break-words text-[15px] leading-relaxed tracking-normal text-gray-600 dark:text-gray-300">
                        Verus developer docs are community-maintained and always
                        evolving. Treat every guide as work in progress: verify
                        commands against the current release, test on testnet,
                        and ask in Discord when something is unclear.
                      </p>
                    </div>
                  </aside>
                </div>
              </section>

              <ResourcesGrid />
              <TerminalExample />
            </div>
          </div>
        </div>
      </BgWrapper>
    </>
  )
}
