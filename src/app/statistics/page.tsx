import type {Metadata} from 'next'

import {ProtocolStatistics} from '@/features/statistics/components/protocol-statistics'
import {ExternalLink} from 'lucide-react'

import {createWebPageJsonLd} from '@/lib/seo/schema'

import {BgWrapper} from '@/components/bg-wrapper'
import {JsonLd} from '@/components/seo/json-ld'

// Ensures the page is rendered dynamically
export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: 'Protocol statistics',
  description:
    'Real-time statistics for the Verus protocol including network metrics, market data, and ecosystem growth.',
  keywords:
    'Verus statistics, blockchain metrics, crypto statistics, Verus network data, VerusID statistics, PBaaS stats',
  alternates: {
    canonical: '/statistics',
  },
}

const statisticsJsonLd = createWebPageJsonLd({
  path: '/statistics',
  name: 'Verus network statistics',
  description:
    'Live Verus protocol statistics covering market, DeFi, network, supply, staking, mining, and halving metrics from public APIs.',
  mainEntity: {
    '@type': 'Dataset',
    name: 'Verus protocol statistics',
    description:
      'Network, market, DeFi, supply, staking, mining, and halving data for the Verus Protocol.',
    creator: {
      '@type': 'Organization',
      name: 'Verus',
    },
    variableMeasured: [
      'VRSC price',
      'Market capitalization',
      'Block height',
      'Hash rate',
      'Supply',
      'Staking participation',
      'DeFi metrics',
      'Halving schedule',
    ],
    measurementTechnique: 'Verus API and Scan Verus API',
  },
})

export default function StatisticsPage() {
  return (
    <>
      <JsonLd data={statisticsJsonLd} />
      <BgWrapper>
        <div className="bg-gradient-to-b from-gray-100 via-gray-100 to-white dark:from-gray-950 dark:via-gray-950 dark:to-gray-950">
          <div className="flex flex-col items-center px-0 pb-16 pt-0 md:pb-24 xl:px-4 xl:pt-[54px]">
            <div className="w-full min-w-0 max-w-full overflow-hidden border-b border-gray-200 bg-gray-50 shadow-[0_4px_40px_-12px_rgba(0,0,0,0.1)] dark:border-gray-800 dark:bg-gray-950 dark:shadow-[0_4px_40px_-12px_rgba(0,0,0,0.2)] xl:max-w-[1220px] xl:rounded-lg xl:border">
              <section className="border-b border-gray-200 bg-gradient-to-br from-blue-50 to-white dark:border-gray-800 dark:from-blue-950/40 dark:to-gray-950">
                <div className="grid min-w-0 grid-cols-1 md:grid-cols-[minmax(0,2.2fr)_minmax(280px,0.8fr)]">
                  <div className="min-w-0 px-8 py-12 md:px-14 md:py-16">
                    <h1 className="max-w-[760px] break-words text-[28px] font-medium leading-[1.2] tracking-tight text-gray-800 dark:text-white max-md:max-w-[calc(100vw-4rem)] md:text-[44px]">
                      Verus network statistics
                    </h1>
                    <p className="mt-4 max-w-[760px] break-words text-[15px] leading-relaxed tracking-normal text-gray-600 dark:text-gray-300 max-md:max-w-[calc(100vw-4rem)] md:mt-6 md:text-[17px]">
                      Data comes from the Verus API and the public{' '}
                      <a
                        href="https://scan.verus.cx/developers"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group inline-flex items-center gap-1 rounded-lg text-gray-800 transition-colors hover:text-verus-blue dark:text-white dark:hover:text-blue-300"
                      >
                        <span className="font-[450] underline underline-offset-4">
                          Scan Verus API
                        </span>
                        <ExternalLink className="h-3.5 w-3.5 opacity-50 group-hover:opacity-100" />
                      </a>
                      , including market, DeFi, network, and supply metrics.
                    </p>
                  </div>

                  <aside className="min-w-0 border-t border-gray-200 px-8 py-10 dark:border-gray-800 md:border-l md:border-t-0 md:px-10 md:py-12">
                    <div className="flex h-full flex-col justify-center">
                      <dl className="grid grid-cols-1 gap-6 text-[15px] leading-relaxed tracking-normal">
                        <div>
                          <dt className="mb-1 text-[14px] text-gray-500 dark:text-gray-400">
                            Ticker
                          </dt>
                          <dd className="text-[22px] font-medium leading-[1.15] tracking-tight text-gray-800 dark:text-white md:text-[26px]">
                            VRSC
                          </dd>
                        </div>
                        <div>
                          <dt className="mb-1 text-[14px] text-gray-500 dark:text-gray-400">
                            Launch date
                          </dt>
                          <dd className="text-[22px] font-medium leading-[1.15] tracking-tight text-gray-800 dark:text-white md:text-[26px]">
                            May 21, 2018
                          </dd>
                        </div>
                        <div>
                          <dt className="mb-1 text-[14px] text-gray-500 dark:text-gray-400">
                            Launch model
                          </dt>
                          <dd className="text-[20px] font-medium leading-[1.25] tracking-tight text-gray-800 dark:text-white md:text-[22px]">
                            No ICO, no premine, no founder allocation
                          </dd>
                        </div>
                      </dl>
                    </div>
                  </aside>
                </div>
              </section>

              <ProtocolStatistics />
            </div>
          </div>
        </div>
      </BgWrapper>
    </>
  )
}
