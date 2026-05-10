import type {Metadata} from 'next'

import Link from 'next/link'

import {env} from '@/configs/env'
import {EventGallery} from '@/features/community/event-gallery'
import {CommunityLinks} from '@/features/community/links'
import {IoLogoDiscord} from 'react-icons/io5'

import {Button} from '@/components/ui/button'
import {BgWrapper} from '@/components/bg-wrapper'

export const metadata: Metadata = {
  title: 'Verus community',
  description:
    'Connect with the Verus community across Discord, Telegram, X, Reddit, YouTube, Medium, Facebook, and GitHub.',
  keywords:
    'Verus community, blockchain community, discord, social media, collaboration, contribute',
  alternates: {
    canonical: '/community',
  },
}

export default function CommunityPage() {
  return (
    <BgWrapper>
      <div className="bg-gradient-to-b from-gray-100 via-gray-100 to-white dark:from-gray-950 dark:via-gray-950 dark:to-gray-950">
        <div className="flex flex-col items-center px-0 pb-16 pt-0 md:pb-24 xl:px-4 xl:pt-[54px]">
          <div className="w-full min-w-0 max-w-full overflow-hidden border-b border-gray-200 bg-gray-50 shadow-[0_4px_40px_-12px_rgba(0,0,0,0.1)] dark:border-gray-800 dark:bg-gray-950 dark:shadow-[0_4px_40px_-12px_rgba(0,0,0,0.2)] xl:max-w-[1220px] xl:rounded-lg xl:border">
            <section className="border-b border-gray-200 bg-gradient-to-br from-blue-50 to-white dark:border-gray-800 dark:from-blue-950/40 dark:to-gray-950">
              <div className="min-w-0 px-8 py-12 md:px-14 md:py-16">
                <h1 className="max-w-[760px] break-words text-[28px] font-medium leading-[1.2] tracking-tight text-gray-800 dark:text-white max-md:max-w-[calc(100vw-4rem)] md:text-[44px]">
                  Verus community
                </h1>
                <p className="mt-4 max-w-[820px] break-words text-[15px] leading-relaxed tracking-normal text-gray-600 dark:text-gray-300 max-md:max-w-[calc(100vw-4rem)] md:mt-6 md:text-[17px]">
                  Connect with people building, testing, mining, staking,
                  documenting, and using Verus across the ecosystem.
                </p>
                <Button
                  asChild
                  variant="verusPrimary"
                  size="verusWide"
                  className="mt-8 w-full sm:w-fit"
                >
                  <Link
                    href={env.NEXT_PUBLIC_DISCORD}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Join Discord
                    <IoLogoDiscord className="h-5 w-5 md:h-6 md:w-6" />
                  </Link>
                </Button>
              </div>
            </section>

            <EventGallery />
            <CommunityLinks />
          </div>
        </div>
      </div>
    </BgWrapper>
  )
}
