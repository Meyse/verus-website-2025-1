import type {ReactNode} from 'react'

import Image from 'next/image'

import {cn} from '@/lib/utils'

import {Footer} from './footer'

export function BgWrapper({
  children,
  hasAnnouncement = false,
  size = 'large',
}: {
  children: ReactNode
  hasAnnouncement?: boolean
  size?: 'small' | 'large'
}) {
  const topOffset = hasAnnouncement
    ? 'mt-[107px] md:mt-[137px]'
    : 'mt-[50px] md:mt-[70px]'
  const viewportHeight = hasAnnouncement
    ? 'h-[calc(100dvh-107px)] md:h-[calc(100dvh-137px)]'
    : 'h-[calc(100dvh-50px)] md:h-[calc(100dvh-70px)]'

  return (
    <>
      {/* Background images - one for light mode, one for dark mode */}
      {size === 'large' ? (
        <>
          <Image
            src="/img/hero-bg2-2.webp"
            className={cn(
              'absolute -z-10 w-full object-cover dark:hidden',
              topOffset,
              viewportHeight
            )}
            width={500}
            height={500}
            alt="Hero background - light"
            priority
          />
          <Image
            src="/img/bg-darkmode.webp"
            width={500}
            height={500}
            priority
            className={cn(
              'absolute -z-10 hidden w-full object-cover dark:block',
              topOffset,
              viewportHeight
            )}
            alt="Hero background - dark"
          />
        </>
      ) : (
        <>
          <Image
            src="/img/bg-small.webp"
            alt="Background - light"
            width={500}
            height={500}
            priority
            className={cn(
              'absolute -z-10 h-4/5 w-full -translate-y-[300px] object-cover dark:hidden md:-translate-y-[50px]',
              topOffset
            )}
          />
          <Image
            src="/img/bg-small-dark.webp"
            alt="Background - dark"
            width={500}
            height={500}
            priority
            className={cn(
              'absolute -z-10 hidden h-4/5 w-full -translate-y-[300px] object-cover dark:block md:-translate-y-[50px]',
              topOffset
            )}
          />
        </>
      )}
      <main className={topOffset}>{children}</main>
      <Footer />
    </>
  )
}
