import Link from 'next/link'

import {milestones} from '@/data/timeline-data'
import {ArrowRight, ExternalLink} from 'lucide-react'
import {FaMedium} from 'react-icons/fa'

import {Button} from '@/components/ui/button'
import {TextLinkButton} from '@/components/ui/text-link-button'

type MilestoneLinkData = Extract<
  (typeof milestones)[number],
  {link: unknown}
>['link']

type MilestoneCtaData = (typeof milestones)[number]['cta']

function MilestoneLink({link}: {link: MilestoneLinkData}) {
  const isMediumLink = link.url.includes('medium')

  return (
    <TextLinkButton
      href={link.url}
      className="-ml-2 mt-5"
      icon={
        isMediumLink ? (
          <FaMedium className="h-4 w-4 text-gray-700 dark:text-gray-300" />
        ) : undefined
      }
    >
      {link.text}
    </TextLinkButton>
  )
}

function MilestoneCta({cta}: {cta: MilestoneCtaData}) {
  return (
    <div className="mt-6">
      <Button
        asChild
        variant="verusPrimary"
        size="verusWide"
        className="w-full md:w-fit"
      >
        <Link href={cta.href}>
          {cta.text}
          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      </Button>
    </div>
  )
}

export function MilestonesTimeline() {
  return (
    <>
      <section className="relative bg-gray-50 dark:bg-gray-950">
        <div
          aria-hidden="true"
          className="absolute bottom-0 left-6 top-0 w-px bg-verus-blue/25 dark:bg-blue-400/30 md:left-[300px]"
        />
        <div className="relative divide-y divide-gray-200 dark:divide-gray-800">
          {milestones.map((milestone) => (
            <article
              key={`${milestone.date}-${milestone.title}`}
              className="relative grid grid-cols-1 md:grid-cols-[300px_minmax(0,1fr)]"
            >
              <div
                aria-hidden="true"
                className="absolute left-[19px] top-[43px] z-10 h-[11px] w-[11px] rounded-full border-2 border-gray-50 bg-verus-blue dark:border-gray-950 dark:bg-blue-400 md:left-[295px] md:top-[63px]"
              />
              <div className="min-w-0 px-10 py-8 md:px-10 md:py-12">
                <div className="relative z-10 md:sticky md:top-24 md:text-right">
                  <time className="block text-[30px] font-medium leading-none tracking-tight text-gray-800 dark:text-white md:text-[40px]">
                    {milestone.date}
                  </time>
                </div>
              </div>

              <div className="min-w-0 border-t border-gray-200 px-10 py-10 dark:border-gray-800 md:border-t-0 md:px-14 md:py-12">
                <div className="max-w-[760px]">
                  <h2 className="mb-4 break-words text-[24px] font-medium leading-[1.2] tracking-tight text-gray-800 dark:text-white md:text-[30px]">
                    {milestone.title}
                  </h2>
                  <p className="break-words text-[15px] leading-relaxed tracking-normal text-gray-600 dark:text-gray-300 md:text-[17px]">
                    {milestone.description}
                  </p>

                  {'link' in milestone && (
                    <MilestoneLink link={milestone.link} />
                  )}
                  <MilestoneCta cta={milestone.cta} />
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="border-t border-gray-200 bg-gradient-to-br from-blue-50 to-white dark:border-gray-800 dark:from-blue-950/40 dark:to-gray-950">
        <div className="px-10 py-16 md:px-14 md:py-24">
          <div className="max-w-[760px]">
            <h2 className="mb-4 break-words text-[28px] font-medium leading-[1.2] tracking-tight text-gray-800 dark:text-white md:mb-8 md:text-[44px]">
              The next phase of the journey
            </h2>
            <p className="text-[15px] leading-relaxed tracking-normal text-gray-600 dark:text-gray-300 md:text-[17px]">
              With the core protocol in place, the focus is on practical
              applications, developer tooling, and more ways for people to use
              Verus directly.
            </p>

            <div className="mt-8 flex flex-col gap-4 md:flex-row">
              <Button
                asChild
                variant="verusPrimary"
                size="verusWide"
                className="w-full md:w-fit"
              >
                <a
                  href="/papers/VerusVision.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Download vision paper
                  <ExternalLink className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </Button>

              <Button
                asChild
                variant="verusSecondaryDark"
                size="verusWide"
                className="w-full md:w-fit"
              >
                <Link href="/build/start/">
                  Start building
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
