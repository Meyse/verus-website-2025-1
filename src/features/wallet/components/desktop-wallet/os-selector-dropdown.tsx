'use client'

import type {OS} from '@/features/wallet/utils/get_os_icon'

import {useState} from 'react'
import Image from 'next/image'

import {env} from '@/configs/env'
import {getOSIcon} from '@/features/wallet/utils/get_os_icon'
import {ChevronDown} from 'lucide-react'

import {cn} from '@/lib/utils'

export const OsSelectorDropdown = ({
  currentOS,
  assets,
  isTestnet,
  isGitHubError,
}: {
  currentOS: OS
  assets?: Record<
    string,
    {
      url: string
      size: string
    }
  >
  isTestnet?: boolean
  isGitHubError?: boolean
}) => {
  const [open, setOpen] = useState(false)

  return (
    <>
      {/* Other Downloads Dropdown */}
      <div className="relative mt-4">
        <button
          onClick={() => setOpen(!open)}
          className="group flex h-[40px] w-full items-center justify-between rounded-lg border border-blue-200 bg-white/80 px-8 text-[14px] font-medium text-verus-blue backdrop-blur-sm transition-all duration-300 hover:border-blue-300 hover:text-blue-600 dark:border-blue-800/60 dark:bg-blue-950/80 dark:text-blue-300 dark:hover:border-blue-700 dark:hover:text-blue-200 md:h-[50px] md:text-[16px]"
        >
          <span>Other downloads{isTestnet ? ' (Testnet)' : ''}</span>
          <ChevronDown
            className={cn('h-4 w-4 transition-transform', open && 'rotate-180')}
          />
        </button>
      </div>
      {open && (
        <>
          <div className="absolute left-0 right-0 top-full z-20 mt-2 overflow-hidden rounded-lg border border-gray-200 bg-white shadow-lg dark:border-gray-700 dark:bg-gray-800">
            {isGitHubError ? (
              <div className="px-6 py-4 text-center text-gray-500 dark:text-gray-400">
                GitHub API Error. Please visit the{' '}
                <a
                  href={`${env.NEXT_PUBLIC_VERUS_GITHUB}/Verus-Desktop/releases`}
                  className="text-blue-500 underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub Releases page
                </a>
                .
              </div>
            ) : Object.entries(assets || {}).length === 0 ? (
              <div className="px-6 py-4 text-center text-gray-500 dark:text-gray-400">
                {isTestnet
                  ? 'No testnet downloads available.'
                  : 'Loading download options...'}
              </div>
            ) : (
              <>
                <div className="border-b border-gray-200 px-6 py-2 dark:border-gray-700">
                  <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                    {isTestnet ? 'Testnet' : 'Mainnet'} Version
                  </span>
                </div>

                {/* Display available OS options */}
                {Object.entries(assets || {})
                  .filter(([os]) => {
                    const assetObj = assets
                    return (
                      os !== currentOS &&
                      assetObj?.[os].url &&
                      assetObj[os].url !== '#'
                    )
                  })
                  .map(([os, {url, size}]) => {
                    const osInfo = getOSIcon(os as OS)
                    return (
                      <a
                        key={os}
                        href={url}
                        className="group flex items-center justify-between px-6 py-4 transition-colors hover:bg-gray-50 dark:hover:bg-gray-700"
                      >
                        <span className="flex items-center gap-2 text-[14px] text-black dark:text-white md:text-[16px]">
                          <Image
                            src={osInfo.src}
                            alt={osInfo.alt}
                            width={24}
                            height={24}
                            className="size-6 dark:invert"
                          />
                          Download for {os}
                          {isTestnet && (
                            <span className="ml-1 rounded-sm bg-amber-500 px-1.5 py-0.5 text-xs text-black">
                              TESTNET
                            </span>
                          )}
                        </span>
                        <span className="text-black/60 dark:text-white/60">
                          {size}
                        </span>
                      </a>
                    )
                  })}
              </>
            )}
          </div>
          <div className="fixed inset-0 z-10" onClick={() => setOpen(false)} />
        </>
      )}
    </>
  )
}
