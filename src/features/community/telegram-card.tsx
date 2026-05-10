'use client'

import {useState} from 'react'
import Link from 'next/link'

import {env} from '@/configs/env'
import {ChevronDown, ChevronUp, Globe2} from 'lucide-react'

import {Button} from '@/components/ui/button'

const telegramChannels = [
  {
    language: 'Main (English)',
    flag: '🇬🇧',
    url: `${env.NEXT_PUBLIC_TELEGRAM}/veruscommunity`,
  },
  {
    language: 'Indonesian',
    flag: '🇮🇩',
    url: `${env.NEXT_PUBLIC_TELEGRAM}/IDVerusCommunity`,
  },
  {
    language: 'Italian',
    flag: '🇮🇹',
    url: `${env.NEXT_PUBLIC_TELEGRAM}/vrscitaly`,
  },
]

export const TelegramCard = () => {
  const [telegramExpanded, setTelegramExpanded] = useState(false)

  return (
    <div className="space-y-3">
      <Button
        asChild
        variant="verusSecondaryDark"
        size="verusCompact"
        className="h-[40px] w-full justify-start px-4 py-0 text-[14px]"
      >
        <Link
          href={telegramChannels[0].url}
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="mr-1 text-lg">{telegramChannels[0].flag}</span>
          <span>{telegramChannels[0].language}</span>
        </Link>
      </Button>

      {telegramExpanded && (
        <div className="space-y-2">
          {telegramChannels.slice(1).map((channel) => (
            <Button
              key={channel.language}
              asChild
              variant="verusSecondaryDark"
              size="verusCompact"
              className="h-[38px] w-full justify-start px-4 py-0 text-[13px]"
            >
              <Link
                href={channel.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="mr-1 text-lg">{channel.flag}</span>
                <span>{channel.language}</span>
              </Link>
            </Button>
          ))}
        </div>
      )}

      <Button
        type="button"
        variant="verusSecondaryDark"
        size="verusCompact"
        onClick={() => setTelegramExpanded(!telegramExpanded)}
        className="h-[38px] w-full px-4 py-0 text-[14px]"
      >
        {telegramExpanded ? (
          <>
            <span>Show less</span>
            <ChevronUp className="h-4 w-4" />
          </>
        ) : (
          <>
            <span>Show more languages</span>
            <ChevronDown className="h-4 w-4" />
          </>
        )}
      </Button>

      <p className="flex items-start gap-2 border-t border-gray-200 pt-4 text-[13px] leading-relaxed text-gray-500 dark:border-gray-800 dark:text-gray-400">
        <Globe2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-verus-blue dark:text-blue-400" />
        <span>
          Want to create a channel for your language? Let us know in the
          <Link
            href={env.NEXT_PUBLIC_DISCORD}
            target="_blank"
            rel="noopener noreferrer"
            className="mx-1 text-verus-blue hover:underline dark:text-blue-300"
          >
            #marketing
          </Link>
          channel on Discord.
        </span>
      </p>
    </div>
  )
}
