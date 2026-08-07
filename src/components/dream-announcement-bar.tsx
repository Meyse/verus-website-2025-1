'use client'

import type {MouseEventHandler} from 'react'

import Link from 'next/link'
import {usePathname} from 'next/navigation'

import {ArrowRight} from 'lucide-react'

import {Button} from './ui/button'

type DreamAnnouncementBarProps = {
  onClick?: MouseEventHandler<HTMLAnchorElement>
}

export function DreamAnnouncementBar({onClick}: DreamAnnouncementBarProps) {
  const pathname = usePathname()

  if (pathname !== '/') {
    return null
  }

  return (
    <Link
      href="/dream"
      aria-label="Read more about DREAM"
      className="group/bar relative block overflow-hidden border-t border-blue-400/30 bg-[url('/img/dream/dream-announcement-wave.png')] bg-cover bg-center text-white shadow-[0_10px_30px_-20px_rgba(49,101,212,0.9)] before:absolute before:inset-0 before:bg-blue-950/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-white/70"
      onClick={onClick}
    >
      <div className="relative mx-auto flex h-[56px] w-full max-w-[1400px] items-center justify-between gap-3 px-4 md:h-[66px] md:px-8">
        <p className="min-w-0 truncate text-[15px] font-normal leading-tight tracking-normal group-hover/bar:underline md:text-[17px]">
          <span className="font-semibold">Introducing DREAM</span>
          <span className="sm:hidden">: a new application model</span>
          <span className="hidden sm:inline">
            : a new application model for user-owned identity, data, and money
          </span>
        </p>
        <ArrowRight className="h-4 w-4 shrink-0 md:hidden" aria-hidden="true" />
        <Button
          asChild
          variant="verusSecondary"
          size="sm"
          className="hidden h-8 shrink-0 gap-1.5 rounded-lg border-white/70 bg-transparent px-3 text-[13px] text-white hover:border-white hover:bg-white/10 hover:text-white dark:border-white dark:bg-transparent dark:hover:border-white dark:hover:bg-white/10 dark:hover:text-white md:inline-flex"
        >
          <span aria-hidden="true">
            Read more
            <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
          </span>
        </Button>
      </div>
    </Link>
  )
}
