import Link from 'next/link'

import {env} from '@/configs/env'
import {ArrowRight, ExternalLink, Pickaxe, UserPlus} from 'lucide-react'
import {IoLogoDiscord, IoLogoGithub} from 'react-icons/io5'

import {cn} from '@/lib/utils'

import {Button} from '@/components/ui/button'

import {contributionWays} from './contribution-ways'
import {ContributeCopyButton} from './copy-button'

function ContributionCell({
  way,
  index,
}: {
  way: (typeof contributionWays)[number]
  index: number
}) {
  return (
    <article
      className={cn(
        'min-w-0 border-gray-200 px-8 py-8 dark:border-gray-800 md:px-10 md:py-10',
        index > 0 && 'max-md:border-t md:border-l'
      )}
    >
      <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg border border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-900">
        {way.icon}
      </div>
      <h3 className="mb-4 text-[30px] font-medium leading-[1.2] tracking-tight text-gray-800 dark:text-white">
        {way.title}
      </h3>
      <p className="text-[15px] leading-relaxed tracking-normal text-gray-600 dark:text-gray-300 md:text-[17px]">
        {way.description}
      </p>

      <div className="mt-6">
        <h4 className="text-[13px] font-medium tracking-normal text-gray-500 dark:text-gray-400">
          Examples
        </h4>
        <ul className="mt-3 space-y-3">
          {way.examples.map((example) => (
            <li
              key={example}
              className="relative pl-5 text-[15px] leading-relaxed tracking-normal text-gray-600 dark:text-gray-300 md:text-[16px]"
            >
              <span className="absolute left-0 top-[0.7em] h-1.5 w-1.5 rounded-full bg-verus-blue dark:bg-blue-400" />
              {example}
            </li>
          ))}
        </ul>
      </div>
    </article>
  )
}

export function ContributionWays() {
  return (
    <section className="bg-gray-50 dark:bg-gray-950">
      <div className="grid grid-cols-1 md:grid-cols-3">
        {contributionWays.map((way, index) => (
          <ContributionCell key={way.title} way={way} index={index} />
        ))}
      </div>

      <div className="grid grid-cols-1 border-t border-gray-200 dark:border-gray-800 md:grid-cols-[minmax(0,1.1fr)_minmax(280px,0.9fr)]">
        <div className="px-8 py-10 md:px-10 md:py-12">
          <h3 className="mb-4 text-[30px] font-medium tracking-tight text-gray-800 dark:text-white">
            Ready to contribute
          </h3>
          <p className="max-w-[760px] text-[15px] leading-relaxed tracking-normal text-gray-600 dark:text-gray-300 md:text-[17px]">
            Join the community, browse open source repositories, or donate
            directly to support ongoing work.
          </p>
        </div>

        <div className="flex min-w-0 flex-col gap-3 border-t border-gray-200 px-8 py-8 dark:border-gray-800 md:border-l md:border-t-0 md:px-10 md:py-12">
          <Button
            asChild
            variant="verusPrimary"
            size="verusWide"
            className="w-full"
          >
            <Link href="/donate">
              Donate to Verus
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-[1px]" />
            </Link>
          </Button>

          <Button
            asChild
            variant="verusSecondaryDark"
            size="verusWide"
            className="w-full"
          >
            <a
              href={env.NEXT_PUBLIC_DISCORD}
              target="_blank"
              rel="noopener noreferrer"
            >
              Join Discord
              <IoLogoDiscord className="h-5 w-5 md:h-6 md:w-6" />
            </a>
          </Button>

          <Button
            asChild
            variant="verusSecondaryDark"
            size="verusWide"
            className="w-full"
          >
            <a
              href={env.NEXT_PUBLIC_VERUS_GITHUB}
              target="_blank"
              rel="noopener noreferrer"
            >
              Explore GitHub
              <IoLogoGithub className="h-5 w-5 md:h-6 md:w-6" />
            </a>
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 border-t border-gray-200 dark:border-gray-800 md:grid-cols-2">
        <article className="min-w-0 px-8 py-10 md:px-10 md:py-12">
          <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg border border-gray-200 bg-white text-verus-blue dark:border-gray-800 dark:bg-gray-900 dark:text-blue-400">
            <Pickaxe className="h-5 w-5" />
          </div>
          <h3 className="mb-4 text-[30px] font-medium tracking-tight text-gray-800 dark:text-white">
            Community mining pool
          </h3>
          <p className="text-[15px] leading-relaxed tracking-normal text-gray-600 dark:text-gray-300 md:text-[17px]">
            Mine with the Verus community pool and help secure the network
            through proof-of-work participation.
          </p>
          <Button
            asChild
            variant="verusSecondaryDark"
            size="verusWide"
            className="mt-8 w-full md:w-fit"
          >
            <a
              href="https://pool.verus.io"
              target="_blank"
              rel="noopener noreferrer"
            >
              Open pool
              <ExternalLink className="h-4 w-4 opacity-70" />
            </a>
          </Button>
        </article>

        <article className="min-w-0 border-t border-gray-200 px-8 py-10 dark:border-gray-800 md:border-l md:border-t-0 md:px-10 md:py-12">
          <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg border border-gray-200 bg-white text-verus-blue dark:border-gray-800 dark:bg-gray-900 dark:text-blue-400">
            <UserPlus className="h-5 w-5" />
          </div>
          <h3 className="mb-4 text-[30px] font-medium tracking-tight text-gray-800 dark:text-white">
            VerusID referral
          </h3>
          <p className="mb-5 text-[15px] leading-relaxed tracking-normal text-gray-600 dark:text-gray-300 md:text-[17px]">
            Use this referral when registering a VerusID to support the Verus
            Coin Foundation.
          </p>
          <ContributeCopyButton />
        </article>
      </div>
    </section>
  )
}
