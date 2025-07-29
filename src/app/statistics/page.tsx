import type { Metadata } from 'next';



import { ProtocolStatistics } from '@/features/statistics/components/protocol-statistics';



import { BgWrapper } from '@/components/bg-wrapper';





// Ensures the page is rendered dynamically
export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: 'Protocol Statistics',
  description:
    'Real-time statistics for the Verus protocol including network metrics, market data, and ecosystem growth.',
  keywords:
    'Verus statistics, blockchain metrics, crypto statistics, Verus network data, VerusID statistics, PBaaS stats',
}

export default function StatisticsPage() {
  return (
    <BgWrapper size="small">
      <div className="flex flex-col">
        <div className="flex-grow py-8 md:py-16">
          <div className="mx-auto max-w-[1220px] md:px-8">
            <div className="mb-8 px-4 md:mb-16 md:px-0">
              <h1 className="text-[22px] font-medium leading-snug tracking-tight text-verus-blue dark:text-blue-400 md:text-[40px]">
                Verus network statistics.
              </h1>
              <p className="mt-4 max-w-[800px] text-[16px] tracking-tight text-gray-700 dark:text-gray-300 md:text-[20px]">
                Real-time metrics and statistics about the Verus network,
                ecosystem, and financial data.
              </p>
            </div>

            <ProtocolStatistics />
          </div>
        </div>
      </div>
    </BgWrapper>
  )
}