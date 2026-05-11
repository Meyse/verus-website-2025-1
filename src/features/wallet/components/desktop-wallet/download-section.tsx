import {Suspense} from 'react'

import {env} from '@/configs/env'

import {DownloadReleaseInfo} from './download-info'
import {DownloadSectionSkeleton} from './download-section-skeleton'
import {OsSelector} from './os-selector'

export function DownloadSection() {
  return (
    <>
      <h2 className="mb-4 text-[22px] font-medium leading-[1.1] tracking-tight text-gray-800 dark:text-white md:text-[32px]">
        Download Verus Desktop
      </h2>
      <Suspense
        fallback={
          <div className="mb-8 flex items-center gap-8 text-[14px] text-gray-600 dark:text-gray-300 md:text-[16px]">
            <div className="h-6 w-32 animate-pulse rounded bg-gray-200 dark:bg-gray-700" />
            <div className="h-6 w-48 animate-pulse rounded bg-gray-200 dark:bg-gray-700" />
          </div>
        }
      >
        <DownloadReleaseInfo />
      </Suspense>
      <div className="relative space-y-4">
        <Suspense fallback={<DownloadSectionSkeleton />}>
          <OsSelector

          // mainVersion={version}
          // testnetInfo={testnetInfo}
          // error={error}
          />
        </Suspense>
      </div>
      <div className="mt-8">
        <p className="mt-8 text-[14px] text-gray-600 dark:text-gray-300 md:text-[15px]">
          Verus Desktop is open source. View the source code on{' '}
          <a
            href={`${env.NEXT_PUBLIC_VERUS_GITHUB}/Verus-Desktop`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-verus-blue hover:underline dark:text-blue-400"
          >
            GitHub
          </a>
          .
        </p>
      </div>
    </>
  )
}
