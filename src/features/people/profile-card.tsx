import Link from 'next/link'

import {env} from '@/configs/env'
import {FaXTwitter} from 'react-icons/fa6'

import {cn} from '@/lib/utils'

export type ProfileCardProps = {
  name: string
  title: string
  description: string

  twitterHandle?: string
  index?: number
}

export function ProfileCard({
  name,
  title,
  description,

  twitterHandle,
  index = 0,
}: ProfileCardProps) {
  const isMdLeftColumn = index % 2 === 0
  const isLgLeftColumn = index % 3 === 0

  return (
    <article
      className={cn(
        'flex h-full min-w-0 flex-col border-gray-200 px-8 py-8 dark:border-gray-800 md:px-10 md:py-10',
        index > 0 && 'max-md:border-t',
        index >= 2 && 'md:border-t',
        index === 2 && 'lg:border-t-0',
        !isMdLeftColumn && 'md:border-l',
        isLgLeftColumn && 'lg:border-l-0',
        !isLgLeftColumn && 'lg:border-l'
      )}
    >
      <div className="mb-4">
        <h3 className="mb-2 font-display text-[24px] font-medium leading-[1.15] tracking-tight text-gray-800 dark:text-white md:text-[26px]">
          {name}
        </h3>
        <p className="text-[15px] font-medium leading-relaxed tracking-normal text-verus-blue dark:text-blue-400 md:text-[17px]">
          {title}
        </p>
      </div>

      <p className="mb-6 flex-grow text-[15px] leading-relaxed tracking-normal text-gray-600 dark:text-gray-300 md:text-[16px]">
        {description}
      </p>

      {twitterHandle && (
        <Link
          href={`${env.NEXT_PUBLIC_TWITTER}/${twitterHandle}`}
          target="_blank"
          rel="noopener noreferrer"
          className="group mt-auto inline-flex w-fit items-center gap-2 rounded-lg text-[14px] font-medium text-gray-600 transition-colors hover:text-gray-800 dark:text-gray-400 dark:hover:text-white"
        >
          <span>@{twitterHandle}</span>
          <FaXTwitter className="h-4 w-4" />
        </Link>
      )}
    </article>
  )
}
