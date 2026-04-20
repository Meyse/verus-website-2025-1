import type {ReactNode} from 'react'

import Image from 'next/image'

import {Footer} from './footer'

export function BgWrapper({
  children,
  size = 'large',
}: {
  children: ReactNode
  size?: 'small' | 'large'
}) {
  return (
    <>
      {/* Background images - one for light mode, one for dark mode */}
      {size === 'large' ? (
        <>
          <Image
            src="/img/hero-bg2-2.webp"
            className="absolute -z-10 mt-[50px] h-[calc(100dvh-50px)] w-full object-cover dark:hidden md:mt-[70px] md:h-[calc(100dvh-70px)]"
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
            className="absolute -z-10 mt-[50px] hidden h-[calc(100dvh-50px)] w-full object-cover dark:block md:mt-[70px] md:h-[calc(100dvh-70px)]"
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
            className="absolute -z-10 mt-[50px] h-4/5 w-full -translate-y-[300px] object-cover dark:hidden md:mt-[70px] md:-translate-y-[50px]"
          />
          <Image
            src="/img/bg-small-dark.webp"
            alt="Background - dark"
            width={500}
            height={500}
            priority
            className="absolute -z-10 mt-[50px] hidden h-4/5 w-full -translate-y-[300px] object-cover dark:block md:mt-[70px] md:-translate-y-[50px]"
          />
        </>
      )}
      <main className="mt-[50px] md:mt-[70px]">{children}</main>
      <Footer />
    </>
  )
}
