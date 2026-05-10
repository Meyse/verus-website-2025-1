import type {OS} from '@/features/wallet/utils/get_os_icon'

import Image from 'next/image'

import {env} from '@/configs/env'
import {getCliWallets} from '@/features/wallet/server/get-cli-wallets'
import {getOSIcon} from '@/features/wallet/utils/get_os_icon'

import {cn} from '@/lib/utils'

export const CliDownloadInfo = async () => {
  const {version, date: releaseDate, assets, error} = await getCliWallets()
  const isGitHubError = !!error && !!error.includes('GitHub')
  return (
    <>
      <div className="mb-8 flex items-center gap-8 text-[14px] text-gray-600 dark:text-gray-300 md:text-[16px]">
        <span>
          Version:{' '}
          <span className="font-medium text-gray-800 dark:text-white">
            {version}
          </span>
        </span>
        {releaseDate && (
          <span>
            Date:{' '}
            <span className="font-medium text-gray-800 dark:text-white">
              {releaseDate}
            </span>
          </span>
        )}
      </div>
      {isGitHubError ? (
        <div className="mb-4 rounded-lg border border-red-200 bg-red-50 p-4 text-red-600 dark:border-red-900/30 dark:bg-red-900/20 dark:text-red-400">
          <p className="mb-2">Unable to load CLI downloads from GitHub API.</p>
          <p>
            Please visit the{' '}
            <a
              href={`${env.NEXT_PUBLIC_VERUS_GITHUB}/VerusCoin/releases`}
              className="underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub Releases page
            </a>{' '}
            to download the CLI versions directly.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-2 gap-2 md:grid-cols-4">
          {['Windows', 'macOS', 'Linux', 'Linux ARM'].map((os) => (
            <AssetCard
              key={`cli-download-${os}`}
              os={os as OS}
              asset={assets[os]}
            />
          ))}
        </div>
      )}
    </>
  )
}

const AssetCard = ({
  os,
  asset,
}: {
  os: OS
  asset?: {
    url: string
    size: string
  }
}) => {
  const imageInfo = getOSIcon(os)
  return (
    <a
      href={asset?.url}
      className={cn(
        'flex items-center gap-2 rounded-lg border border-gray-200 p-3 transition-colors hover:bg-gray-50 dark:border-gray-700 dark:hover:bg-white/5',
        !asset?.url || asset.url === '#' ? 'pointer-events-none opacity-50' : ''
      )}
    >
      <Image
        src={imageInfo.src}
        alt={imageInfo.alt}
        width={20}
        height={20}
        className="size-5 dark:invert"
      />
      <div className="flex flex-col">
        <span className="text-[14px] text-gray-600 dark:text-gray-300">
          {os}
        </span>
        <span className="text-[12px] text-gray-500 dark:text-gray-400">
          {asset?.size || 'N/A'}
        </span>
      </div>
    </a>
  )
}
