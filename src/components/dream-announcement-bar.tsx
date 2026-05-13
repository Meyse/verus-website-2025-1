'use client'

import Link from 'next/link'
import {usePathname} from 'next/navigation'

import {ArrowRight} from 'lucide-react'

import {Button} from './ui/button'

export function DreamAnnouncementBar() {
  const pathname = usePathname()

  if (pathname !== '/') {
    return null
  }

  return (
    <div className="border-t border-blue-400/30 bg-verus-blue text-white shadow-[0_10px_30px_-20px_rgba(49,101,212,0.9)]">
      <div className="mx-auto flex h-[56px] w-full max-w-[1400px] items-center justify-between gap-3 px-4 md:h-[66px] md:px-8">
        <p className="min-w-0 truncate text-[15px] font-normal leading-tight tracking-normal md:text-[17px]">
          <span className="font-semibold">Introducing DREAM</span>
          <span className="hidden sm:inline">
            : a new application model for user-owned data
          </span>
        </p>
        <Button
          asChild
          variant="verusSecondary"
          size="verus"
          className="h-9 shrink-0 border-white/70 bg-transparent px-4 text-white hover:border-white hover:bg-white/10 hover:text-white dark:border-white dark:bg-transparent dark:hover:border-white dark:hover:bg-white/10 dark:hover:text-white md:h-10 md:px-5"
        >
          <Link href="/dream" aria-label="Read more about DREAM">
            Read more
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </Button>
      </div>
    </div>
  )
}
