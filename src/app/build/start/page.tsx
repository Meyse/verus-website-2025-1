// Build start page showcasing developer resources and documentation
import type {Metadata} from 'next'

import {env} from '@/configs/env'
import {ResourcesGrid} from '@/features/build/start'
import {ChevronDown, ExternalLink, Info} from 'lucide-react'
import {IoLogoDiscord} from 'react-icons/io5'

import {createBuildBreadcrumbJsonLd} from '@/lib/seo/schema'
import {cn} from '@/lib/utils'

import {Button, buttonVariants} from '@/components/ui/button'
import {BgWrapper} from '@/components/bg-wrapper'
import {JsonLd} from '@/components/seo/json-ld'

export const metadata: Metadata = {
  title: {absolute: 'Build on Verus | Developer Documentation'},
  description:
    'Build wallet-ready requests or connect directly to Verus nodes with testnet tools, TypeScript libraries, and guides for VerusID, VDXF, and DeFi.',
  keywords:
    'Verus development, VerusID, VDXF, blockchain development, DeFi development, Verus documentation, Verus TypeScript libraries',

  alternates: {
    canonical: '/build/start',
  },
}

const breadcrumbJsonLd = createBuildBreadcrumbJsonLd(
  'Build on Verus',
  '/build/start'
)

const developerDocLinks = [
  {
    title: 'Verus Wiki',
    description:
      'Broad command reference and guides, with machine-readable resources for AI agents.',
    domain: 'wiki.autobb.app',
    href: env.NEXT_PUBLIC_AUTOBB_WIKI,
    badge: 'AI-ready',
  },
  {
    title: 'Integration guides',
    description:
      'Practical tutorials for VerusID, VDXF, storage, login, and testnet.',
    domain: 'monkins1010.github.io',
    href: env.NEXT_PUBLIC_MONKINS_GITHUB,
  },
  {
    title: 'Verus PBaaS docs',
    description:
      'Useful foundational documentation; some sections may not reflect current releases.',
    domain: 'docs.verus.io',
    href: env.NEXT_PUBLIC_VERUS_DOCS,
    badge: 'Older reference',
  },
]

function DeveloperDocsMenu() {
  return (
    <details className="group/docs relative w-full md:w-fit">
      <summary
        className={cn(
          buttonVariants({variant: 'verusPrimary', size: 'verusWide'}),
          'w-full max-w-full cursor-pointer select-none list-none md:w-fit [&::-webkit-details-marker]:hidden'
        )}
      >
        Open developer docs
        <ChevronDown className="h-4 w-4 transition-transform duration-300 group-open/docs:rotate-180" />
      </summary>

      <div className="absolute left-0 top-full z-30 mt-2 w-full min-w-0 overflow-hidden rounded-lg border border-gray-200 bg-white shadow-[0_12px_36px_-18px_rgba(0,0,0,0.35)] dark:border-gray-800 dark:bg-gray-950 md:w-[420px]">
        <ul className="divide-y divide-gray-200 dark:divide-gray-800">
          {developerDocLinks.map((link) => (
            <li key={link.title}>
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group/link flex min-w-0 items-start gap-3 px-4 py-4 transition-colors hover:bg-gray-50 dark:hover:bg-gray-900/70"
              >
                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-[15px] font-medium leading-tight text-gray-800 dark:text-white">
                      {link.title}
                    </span>
                    {link.badge && (
                      <span className="rounded-full border border-gray-200 bg-gray-50 px-2 py-0.5 text-[11px] font-medium leading-tight text-gray-600 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300">
                        {link.badge}
                      </span>
                    )}
                  </div>
                  <p className="mt-1.5 text-[13px] leading-relaxed text-gray-600 dark:text-gray-300">
                    {link.description}
                  </p>
                  <span className="mt-1 block text-[12px] leading-tight text-gray-500 dark:text-gray-400">
                    {link.domain}
                  </span>
                </div>
                <ExternalLink className="mt-0.5 h-4 w-4 shrink-0 text-gray-500 opacity-50 group-hover/link:opacity-100 dark:text-gray-400" />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </details>
  )
}

export default function BuildStartPage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd} />
      <BgWrapper>
        <div className="bg-gradient-to-b from-gray-100 via-gray-100 to-white dark:from-gray-950 dark:via-gray-950 dark:to-gray-950">
          <div className="flex flex-col items-center px-0 pb-16 pt-0 md:pb-24 xl:px-4 xl:pt-[54px]">
            <div className="w-full min-w-0 max-w-full overflow-hidden border-b border-gray-200 bg-gray-50 shadow-[0_4px_40px_-12px_rgba(0,0,0,0.1)] dark:border-gray-800 dark:bg-gray-950 dark:shadow-[0_4px_40px_-12px_rgba(0,0,0,0.2)] xl:max-w-[1220px] xl:rounded-lg xl:border">
              <section className="border-b border-gray-200 bg-gradient-to-br from-blue-50 to-white dark:border-gray-800 dark:from-blue-950/40 dark:to-gray-950">
                <div className="min-w-0 px-8 py-12 md:px-14 md:py-16">
                  <h1 className="max-w-[680px] break-words text-[28px] font-medium leading-[1.2] tracking-tight text-gray-800 dark:text-white max-md:max-w-[calc(100vw-4rem)] md:text-[44px]">
                    Start building
                  </h1>
                  <p className="mt-4 max-w-[760px] break-words text-[15px] leading-relaxed tracking-normal text-gray-600 dark:text-gray-300 max-md:max-w-[calc(100vw-4rem)] md:mt-6 md:text-[17px]">
                    Build wallet-ready requests or connect directly to Verus
                    nodes. Find testnet access, CLI downloads, TypeScript
                    libraries, and guides for VerusID, VDXF, currencies, DeFi,
                    and data.
                  </p>

                  <div className="mt-8 max-w-full max-md:max-w-[calc(100vw-4rem)]">
                    <div className="flex flex-col gap-4 md:flex-row">
                      <DeveloperDocsMenu />
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

                    <div className="mt-3 flex max-w-[520px] items-start gap-2 text-[12px] leading-relaxed tracking-normal text-gray-500 dark:text-gray-400">
                      <Info className="mt-0.5 h-3.5 w-3.5 shrink-0 text-verus-blue dark:text-blue-400" />
                      <p>
                        <span className="font-medium text-gray-600 dark:text-gray-300">
                          Docs are in progress.
                        </span>{' '}
                        Verus developer docs are community-maintained and always
                        evolving. Treat every guide as work in progress: verify
                        commands against the current release, test on testnet,
                        and ask in Discord when something is unclear.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              <ResourcesGrid />
            </div>
          </div>
        </div>
      </BgWrapper>
    </>
  )
}
