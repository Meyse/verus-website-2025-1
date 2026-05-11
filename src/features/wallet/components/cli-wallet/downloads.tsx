import {Suspense} from 'react'

import {env} from '@/configs/env'

import {CliDownloadInfo} from './download-info'
import {CliDownloadsSkeleton} from './downloads-skeleton'

export function CliDownloads() {
  return (
    <div>
      <h2 className="mb-4 text-[22px] font-medium leading-[1.1] tracking-tight text-gray-800 dark:text-white md:text-[32px]">
        Command-line interface (CLI) for advanced users
      </h2>
      <Suspense fallback={<CliDownloadsSkeleton />}>
        <CliDownloadInfo />
      </Suspense>
      <p className="mt-8 text-[14px] text-gray-600 dark:text-gray-300 md:text-[15px]">
        Verus is open source. View the source code on{' '}
        <a
          href={`${env.NEXT_PUBLIC_VERUS_GITHUB}/VerusCoin`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-verus-blue hover:underline dark:text-blue-400"
        >
          GitHub
        </a>
        .
      </p>
    </div>
  )
}
