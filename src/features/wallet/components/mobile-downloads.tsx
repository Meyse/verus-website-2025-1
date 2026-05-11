import Image from 'next/image'

import {env} from '@/configs/env'

export function MobileDownloads() {
  return (
    <>
      <h2 className="mb-8 text-[22px] font-medium leading-[1.1] tracking-tight text-gray-800 dark:text-white md:text-[32px]">
        Download Verus Mobile
      </h2>
      <div className="flex flex-col gap-4 md:flex-row">
        <a href={env.NEXT_PUBLIC_APPLE_STORE} className="h-[50px] w-[180px]">
          <Image
            src="/img/apple-store.svg"
            alt="Download on the App Store"
            width={500}
            height={500}
            className="h-full w-full"
          />
        </a>
        <a
          href={env.NEXT_PUBLIC_GOOGLE_PLAYSTORE}
          className="h-[50px] w-[180px]"
        >
          <Image
            src="/img/google-play.png"
            alt="Get it on Google Play"
            width={500}
            height={500}
            className="h-full w-full object-contain"
          />
        </a>
      </div>
      <p className="mt-8 text-[14px] text-gray-600 dark:text-gray-300 md:text-[15px]">
        Verus Mobile is open source. View the source code on{' '}
        <a
          href={`${env.NEXT_PUBLIC_VERUS_GITHUB}/Verus-Mobile`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-verus-blue hover:underline dark:text-blue-400"
        >
          GitHub
        </a>
        .
      </p>
    </>
  )
}
