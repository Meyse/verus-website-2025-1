'use client'

import type {ReactNode} from 'react'

import {useCallback, useEffect, useRef, useState} from 'react'

import {cn} from '@/lib/utils'

type HorizontalScrollFadeProps = {
  children: ReactNode
  className?: string
}

export function HorizontalScrollFade({
  children,
  className,
}: HorizontalScrollFadeProps) {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [showRightFade, setShowRightFade] = useState(false)

  const updateFade = useCallback(() => {
    const scrollEl = scrollRef.current

    if (!scrollEl) {
      return
    }

    const hasMoreRight =
      scrollEl.scrollLeft + scrollEl.clientWidth < scrollEl.scrollWidth - 1

    setShowRightFade(hasMoreRight)
  }, [])

  useEffect(() => {
    const scrollEl = scrollRef.current

    if (!scrollEl) {
      return
    }

    updateFade()

    const resizeObserver = new ResizeObserver(updateFade)
    resizeObserver.observe(scrollEl)

    if (scrollEl.firstElementChild) {
      resizeObserver.observe(scrollEl.firstElementChild)
    }

    scrollEl.addEventListener('scroll', updateFade, {passive: true})
    window.addEventListener('resize', updateFade)

    return () => {
      resizeObserver.disconnect()
      scrollEl.removeEventListener('scroll', updateFade)
      window.removeEventListener('resize', updateFade)
    }
  }, [updateFade])

  return (
    <div className={cn('relative', className)}>
      <div ref={scrollRef} className="overflow-x-auto">
        {children}
      </div>
      <div
        className={cn(
          'pointer-events-none absolute inset-y-0 right-0 w-10 bg-gradient-to-l from-white to-transparent opacity-0 transition-opacity duration-200 dark:from-gray-950 md:hidden',
          showRightFade && 'opacity-100',
        )}
        aria-hidden="true"
      />
    </div>
  )
}
