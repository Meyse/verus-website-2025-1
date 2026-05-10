import type {OS} from '@/features/wallet/utils/get_os_icon'
import type {NetWallet} from '@/features/wallet/utils/types'

import Image from 'next/image'

import {env} from '@/configs/env'
import {MonitorDown} from 'lucide-react'

import {cn} from '@/lib/utils'

import {OsSelectorDropdown} from './os-selector-dropdown'

type SelectorTab = {
  currentOS: string
  gitHubError?: string
  repoInfo?: NetWallet

  isTestnet?: boolean
}

export const OsSelectorTabContent = ({
  currentOS,
  gitHubError,
  repoInfo,
  isTestnet,
}: SelectorTab) => {
  // Get the appropriate asset for modes (mainnet/testnet)
  const getCurrentAsset = () => {
    if (currentOS === 'Unknown') return undefined
    const asset = repoInfo?.assets[currentOS]
    return asset
  }

  const asset = getCurrentAsset()
  const isGitHubError = gitHubError && gitHubError.includes('GitHub')
  const isKnownOS = currentOS !== 'Unknown'
  const isDownloadAvailable = isKnownOS && !!asset?.url && !gitHubError
  const downloadLabel = isKnownOS
    ? `Download for ${currentOS}`
    : 'Choose desktop download'
  const statusLabel = isGitHubError
    ? 'Unavailable'
    : isKnownOS
      ? asset?.size || 'Unavailable'
      : 'Select below'

  return (
    <>
      {/* Main Download Button */}
      <a
        href={isDownloadAvailable ? asset.url : '#'}
        className={cn(
          'group flex h-[40px] items-center justify-between rounded-lg border border-verus-blue bg-verus-blue px-6 text-[14px] font-medium text-white backdrop-blur-sm transition-all duration-300 hover:bg-verus-blue/90 dark:border-verus-blue dark:bg-verus-blue dark:text-white dark:hover:bg-verus-blue/90 md:h-[50px] md:text-[16px]',
          !isDownloadAvailable && 'pointer-events-none cursor-default opacity-75'
        )}
      >
        <span className="flex items-center gap-2">
          {isKnownOS ? (
            <Image
              src={`/img/${currentOS === 'macOS' ? 'apple' : currentOS === 'Linux' || currentOS === 'Linux ARM' ? 'linux' : 'windows'}.svg`}
              alt={currentOS}
              width={24}
              height={24}
              className="size-6"
            />
          ) : (
            <MonitorDown className="size-6" aria-hidden />
          )}
          {downloadLabel}
          {isTestnet && (
            <span className="ml-1 rounded-sm bg-amber-500 px-1.5 py-0.5 text-xs text-black">
              TESTNET
            </span>
          )}
        </span>
        <span className="text-white/80">{statusLabel}</span>
      </a>
      {/* Error Message */}
      {isGitHubError && (
        <div className="mt-2 text-sm text-red-500 dark:text-red-400">
          GitHub API Error: Please visit the{' '}
          <a
            href={`${env.NEXT_PUBLIC_VERUS_GITHUB}/Verus-Desktop/releases`}
            className="underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub Releases page
          </a>{' '}
          for downloads.
        </div>
      )}
      <OsSelectorDropdown
        currentOS={currentOS as OS}
        assets={repoInfo?.assets}
        isTestnet={isTestnet}
      />
    </>
  )
}
