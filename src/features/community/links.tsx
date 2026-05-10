import Link from 'next/link'

import {env} from '@/configs/env'
import {ExternalLink} from 'lucide-react'
import type {IconType} from 'react-icons'
import {
  FaFacebook,
  FaGithub,
  FaMedium,
  FaReddit,
  FaTelegram,
  FaXTwitter,
  FaYoutube,
} from 'react-icons/fa6'
import {IoLogoDiscord} from 'react-icons/io5'

import {cn} from '@/lib/utils'

import {Button} from '@/components/ui/button'

import {TelegramCard} from './telegram-card'

type CommunityPlatform = {
  name: string
  icon: IconType
  url?: string
  actionLabel?: string
  primary?: boolean
  customContent?: 'telegram'
}

const communityPlatforms: CommunityPlatform[] = [
  {
    name: 'Discord',
    icon: IoLogoDiscord,
    url: env.NEXT_PUBLIC_DISCORD,
    actionLabel: 'Join Discord',
    primary: true,
  },
  {
    name: 'Telegram',
    icon: FaTelegram,
    customContent: 'telegram',
  },
  {
    name: 'X',
    icon: FaXTwitter,
    url: env.NEXT_PUBLIC_VERUS_TWITTER,
    actionLabel: 'Visit X',
  },
  {
    name: 'Reddit',
    icon: FaReddit,
    url: env.NEXT_PUBLIC_VERUS_REDDIT,
    actionLabel: 'Visit Reddit',
  },
  {
    name: 'YouTube',
    icon: FaYoutube,
    url: env.NEXT_PUBLIC_VERUS_YOUTUBE,
    actionLabel: 'Visit YouTube',
  },
  {
    name: 'Medium',
    icon: FaMedium,
    url: env.NEXT_PUBLIC_VERUS_MEDIUM,
    actionLabel: 'Visit Medium',
  },
  {
    name: 'Facebook',
    icon: FaFacebook,
    url: env.NEXT_PUBLIC_VERUS_FACEBOOK,
    actionLabel: 'Visit Facebook',
  },
  {
    name: 'GitHub',
    icon: FaGithub,
    url: env.NEXT_PUBLIC_VERUS_GITHUB,
    actionLabel: 'Visit GitHub',
  },
]

function getChannelCellClass(index: number) {
  const isMdLeftColumn = index % 2 === 0
  const isLgLeftColumn = index % 4 === 0

  return cn(
    'min-w-0 border-gray-200 dark:border-gray-800',
    index > 0 && 'border-t md:border-t-0',
    index >= 2 && 'md:border-t',
    !isMdLeftColumn && 'md:border-l',
    index >= 4 && 'lg:border-t',
    index < 4 && 'lg:border-t-0',
    isLgLeftColumn && 'lg:border-l-0',
    !isLgLeftColumn && 'lg:border-l'
  )
}

function CommunityChannelCell({
  platform,
  index,
}: {
  platform: CommunityPlatform
  index: number
}) {
  const Icon = platform.icon

  return (
    <article
      className={cn(
        getChannelCellClass(index),
        'flex min-h-[190px] flex-col px-8 py-8 md:px-8 md:py-10'
      )}
    >
      <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg border border-gray-200 bg-white text-verus-blue dark:border-gray-800 dark:bg-gray-900 dark:text-blue-400">
        <Icon className="h-5 w-5" />
      </div>
      <h3 className="mb-6 font-display text-[24px] font-medium leading-[1.2] tracking-tight text-gray-800 dark:text-white md:text-[26px]">
        {platform.name}
      </h3>

      {platform.customContent === 'telegram' ? (
        <div className="mt-auto">
          <TelegramCard />
        </div>
      ) : (
        platform.url &&
        platform.actionLabel && (
          <Button
            asChild
            variant={platform.primary ? 'verusPrimary' : 'verusSecondaryDark'}
            size="verusWide"
            className="mt-auto w-full"
          >
            <Link
              href={platform.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {platform.actionLabel}
              <ExternalLink className="h-4 w-4 opacity-60 transition-opacity group-hover:opacity-100" />
            </Link>
          </Button>
        )
      )}
    </article>
  )
}

export function CommunityLinks() {
  return (
    <section className="border-t border-gray-200 bg-gray-50 dark:border-gray-800 dark:bg-gray-950">
      <div className="border-b border-gray-200 px-8 py-8 dark:border-gray-800 md:px-10">
        <h2 className="font-display text-[30px] font-medium tracking-tight text-gray-800 dark:text-white">
          Community channels
        </h2>
        <p className="mt-3 max-w-[760px] text-[15px] leading-relaxed tracking-normal text-gray-600 dark:text-gray-300 md:text-[17px]">
          Find the public channels where people ask questions, share updates,
          help each other, and coordinate work around Verus.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {communityPlatforms.map((platform, index) => (
          <CommunityChannelCell
            key={platform.name}
            platform={platform}
            index={index}
          />
        ))}
      </div>
    </section>
  )
}
