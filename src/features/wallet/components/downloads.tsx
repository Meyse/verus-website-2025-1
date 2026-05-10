import {Suspense} from 'react'
import Image from 'next/image'

import {CliDownloads} from './cli-wallet/downloads'
import {CliDownloadsSkeleton} from './cli-wallet/downloads-skeleton'
import {DownloadSection} from './desktop-wallet/download-section'
import {MobileDownloads} from './mobile-downloads'

export function WalletDownloads() {
  return (
    <div className="mt-8 w-full max-w-[1220px] md:mt-16">
      {/* Wallet Image */}
      <div className="relative flex w-full justify-center">
        <Image
          src="/img/wallets-big.png"
          alt="Verus Wallet Interface"
          width={500}
          height={260}
          className="relative z-10 h-auto w-[220px] object-contain md:w-[500px]"
        />
      </div>

      {/* Download Sections */}
      <div className="w-full overflow-hidden border border-gray-200 bg-white/90 shadow-[0_4px_40px_-12px_rgba(0,0,0,0.1)] dark:border-gray-800 dark:bg-gray-950 dark:shadow-[0_4px_40px_-12px_rgba(0,0,0,0.2)] md:rounded-lg">
        <div className="bg-gradient-to-br from-blue-50 to-white dark:from-blue-950/40 dark:to-gray-950">
          <div className="flex flex-col md:grid md:grid-cols-[1fr,1fr]">
            {/* Mobile Section - Shows first on mobile */}
            <div className="border-b border-gray-200 p-8 dark:border-gray-800 md:hidden">
              <MobileDownloads />
            </div>

            {/* Left Column - Desktop */}
            <div className="p-8 md:p-14">
              <DownloadSection />
            </div>

            {/* Right Column - Mobile & CLI */}
            <div className="border-t border-gray-200 dark:border-gray-800 md:border-l md:border-t-0">
              {/* Mobile Section */}
              <div className="hidden border-b border-gray-200 p-8 dark:border-gray-800 md:block md:p-14">
                <MobileDownloads />
              </div>

              {/* CLI Section */}
              <div className="p-8 md:p-14">
                <Suspense fallback={<CliDownloadsSkeleton />}>
                  <CliDownloads />
                </Suspense>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
