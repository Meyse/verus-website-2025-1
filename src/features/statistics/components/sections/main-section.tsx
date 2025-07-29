import {preloadStatsData} from '@/features/statistics/server/preload-data'
import {dehydrate, HydrationBoundary} from '@tanstack/react-query'

import {BlockchainSection} from './blockchain-section'
import {PriceSection} from './price-section'

export async function MainStatisticsGrid() {
  const queryClient = await preloadStatsData()

  return (
    <div className="mb-10 w-full overflow-hidden rounded-lg border border-gray-200 bg-white/90 shadow-[0_4px_40px_-12px_rgba(0,0,0,0.1)] backdrop-blur-sm dark:border-gray-800 dark:bg-black/30 dark:shadow-[0_4px_40px_-12px_rgba(0,0,0,0.2)]">
      <div className="grid grid-cols-1 divide-y divide-gray-200 dark:divide-gray-800 md:grid-cols-2 md:divide-x md:divide-y-0">
        <HydrationBoundary state={dehydrate(queryClient)}>
          {/* Price Section */}
          <PriceSection />

          {/* Blockchain Section */}
          <BlockchainSection />
        </HydrationBoundary>
      </div>
    </div>
  )
}
