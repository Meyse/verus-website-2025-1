import Image from 'next/image'
import Link from 'next/link'

import {getCliWallets} from '@/features/wallet/server/get-cli-wallets'
import {Download, ExternalLink} from 'lucide-react'

import {cn} from '@/lib/utils'

export async function CliSection() {
  const {version, assets} = await getCliWallets()

  return (
    <div className="flex h-full min-h-[300px] min-w-0 flex-col p-8 md:p-10">
      <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-lg border border-gray-200 bg-white text-verus-blue dark:border-gray-800 dark:bg-gray-900 dark:text-blue-400">
        <Download className="h-6 w-6" />
      </div>

      <h3 className="mb-4 text-[24px] font-medium tracking-tight text-gray-800 dark:text-white md:text-[30px]">
        Download CLI wallet
      </h3>
      <p className="mb-6 max-w-[500px] break-words text-[15px] leading-relaxed tracking-normal text-gray-600 dark:text-gray-300 md:text-[17px]">
        Get started with the Verus CLI wallet {version}. Download the release
        for your operating system.
      </p>

      <div className="mt-auto space-y-2">
        {Object.entries(assets).map(([os, info]) => {
          const isDisabled = !info.url || info.url === '#'

          return (
            <Link
              key={os}
              href={info.url}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                'group flex min-h-[64px] min-w-0 items-center gap-3 rounded-lg border border-gray-200 bg-white px-4 py-3 transition-colors hover:border-gray-300 hover:bg-white dark:border-gray-800 dark:bg-gray-900/70 dark:hover:border-gray-700 dark:hover:bg-gray-900',
                isDisabled && 'pointer-events-none opacity-50'
              )}
            >
              <Image
                src={`/img/${os.toLowerCase().includes('windows') ? 'windows' : os.toLowerCase().includes('mac') ? 'apple' : 'linux'}-black.svg`}
                alt={os}
                width={20}
                height={20}
                className="size-5 dark:invert"
              />
              <div className="flex min-w-0 flex-col">
                <span className="text-[14px] font-medium text-gray-800 dark:text-white">
                  {os}
                </span>
                <span className="text-[12px] text-gray-500 dark:text-gray-400">
                  {info.size}
                </span>
              </div>
              <ExternalLink className="ml-auto h-4 w-4 text-gray-400 opacity-50 transition-opacity group-hover:opacity-100 dark:text-gray-500" />
            </Link>
          )
        })}
      </div>
    </div>
  )
}
