import Link from 'next/link'

import {ExternalLink, FileText} from 'lucide-react'

export interface ResourceCardProps {
  title: string
  description: string
  link: string
}

function getLinkHost(link: string) {
  return new URL(link).hostname.replace(/^www\./, '')
}

export function ResourceCard({title, description, link}: ResourceCardProps) {
  const linkHost = getLinkHost(link)

  return (
    <li>
      <Link
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex min-w-0 items-start gap-4 px-8 py-5 transition-colors hover:bg-white dark:hover:bg-gray-900/50 md:px-10 md:py-6"
      >
        <span className="mt-0.5 flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg border border-gray-200 bg-white text-verus-blue dark:border-gray-800 dark:bg-gray-900 dark:text-blue-400">
          <FileText className="h-4 w-4" />
        </span>
        <span className="min-w-0 flex-1">
          <span className="block min-w-0 break-words text-[16px] font-medium leading-tight text-gray-800 dark:text-white md:text-[17px]">
            {title}
          </span>
          <span className="mt-1 block max-w-[760px] break-words text-[14px] leading-relaxed tracking-normal text-gray-600 dark:text-gray-300 md:text-[15px]">
            {description}
          </span>
        </span>
        <span className="ml-auto mt-1 flex min-w-0 flex-shrink-0 items-center justify-end gap-3 text-right text-gray-400 transition-colors group-hover:text-gray-600 dark:text-gray-500 dark:group-hover:text-gray-300">
          <span className="hidden max-w-[220px] truncate text-[12px] font-medium leading-tight tracking-normal text-gray-500 dark:text-gray-400 md:block">
            {linkHost}
          </span>
          <ExternalLink className="h-4 w-4" />
        </span>
      </Link>
    </li>
  )
}
