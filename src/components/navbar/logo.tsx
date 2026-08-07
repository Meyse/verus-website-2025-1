import type {MouseEventHandler} from 'react'

import Image from 'next/image'
import Link from 'next/link'

type LogoProps = {
  onClick?: MouseEventHandler<HTMLAnchorElement>
}

export function Logo({onClick}: LogoProps) {
  return (
    <Link
      href="/"
      className="flex items-center gap-2 md:gap-3"
      onClick={onClick}
    >
      <div className="relative">
        <Image
          src="/img/verus-logo-blue.svg"
          alt="Verus Logo"
          width={113}
          height={6}
          className="h-6 w-auto dark:hidden md:h-8"
        />
        <Image
          src="/img/verus-logo-white.svg"
          alt="Verus Logo"
          width={113}
          height={6}
          className="hidden h-6 w-auto dark:block md:h-8"
        />
      </div>
      <span className="text-[12px] italic text-verus-blue opacity-[.73] dark:text-white/80 md:text-[14px]">
        Truth & Privacy for All
      </span>
    </Link>
  )
}
