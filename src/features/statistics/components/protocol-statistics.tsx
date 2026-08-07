import type {ReactNode} from 'react'

import {getStatisticsData} from '@/features/statistics/server/get-statistics-data'

import {CurrentBlockHeightStat} from './current-block-height-stat'
import {HalvingScheduleStats} from './halving-schedule-stats'

const maxSupply = 83540184

function formatCurrency(
  value: number,
  maximumFractionDigits = 2,
  minimumFractionDigits = 0
) {
  return new Intl.NumberFormat('en-US', {
    currency: 'USD',
    maximumFractionDigits,
    minimumFractionDigits,
    notation: value >= 1_000_000 ? 'compact' : 'standard',
    style: 'currency',
  }).format(value)
}

function formatNumber(value: number, maximumFractionDigits = 0) {
  return new Intl.NumberFormat('en-US', {
    maximumFractionDigits,
  }).format(value)
}

function formatCompactNumber(value: number, maximumFractionDigits = 2) {
  return new Intl.NumberFormat('en-US', {
    maximumFractionDigits,
    notation: 'compact',
  }).format(value)
}

function formatHashRate(hashRate: number) {
  return `${(hashRate / 1_000_000_000_000).toFixed(1)} TH/s`
}

function formatPercent(value: number) {
  return new Intl.NumberFormat('en-US', {
    maximumFractionDigits: 1,
    style: 'percent',
  }).format(value)
}

function Cell({
  children,
  className = '',
  index,
  mdColumns,
}: {
  children: ReactNode
  className?: string
  index: number
  mdColumns: 2 | 3
}) {
  const isDesktopFirstRow = index < mdColumns
  const isDesktopFirstColumn = index % mdColumns === 0

  return (
    <div
      className={[
        'min-w-0 border-gray-200 px-8 py-8 dark:border-gray-800 md:px-10 md:py-10',
        index > 0 ? 'max-md:border-t' : '',
        !isDesktopFirstColumn ? 'md:border-l' : '',
        !isDesktopFirstRow ? 'md:border-t' : '',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
    >
      {children}
    </div>
  )
}

function Stat({
  description,
  label,
  value,
  variant = 'default',
}: {
  description?: string
  label: string
  value: string
  variant?: 'default' | 'large'
}) {
  return (
    <div className="flex h-full min-h-[150px] min-w-0 flex-col">
      <div className="text-[14px] font-medium text-gray-500 dark:text-gray-400 md:text-[15px]">
        {label}
      </div>
      <div className="mt-5 min-w-0">
        <div
          className={
            variant === 'large'
              ? 'break-words bg-gradient-to-br from-blue-400 to-verus-blue bg-clip-text text-[48px] font-medium leading-none tracking-tight text-transparent dark:from-blue-300 dark:to-verus-blue md:text-[76px]'
              : 'break-words text-[34px] font-medium leading-tight tracking-tight text-gray-800 dark:text-white md:text-[42px]'
          }
        >
          {value}
        </div>
        {description && (
          <p className="mt-3 max-w-[440px] break-words text-[15px] leading-relaxed tracking-normal text-gray-600 dark:text-gray-300 max-md:max-w-[calc(100vw-4rem)] md:text-[17px]">
            {description}
          </p>
        )}
      </div>
    </div>
  )
}

function SectionHeading({
  children,
  description,
}: {
  children: ReactNode
  description?: string
}) {
  return (
    <div className="border-b border-gray-200 px-8 py-8 dark:border-gray-800 md:px-14 md:py-10">
      <h2
        className={[
          'break-words font-medium tracking-tight text-gray-800 dark:text-white max-md:max-w-[calc(100vw-4rem)] md:text-[30px]',
          description ? 'mb-4' : '',
        ]
          .filter(Boolean)
          .join(' ')}
      >
        {children}
      </h2>
      {description && (
        <p className="max-w-[760px] break-words text-[15px] leading-relaxed tracking-normal text-gray-600 dark:text-gray-300 max-md:max-w-[calc(100vw-4rem)] md:text-[17px]">
          {description}
        </p>
      )}
    </div>
  )
}

export async function ProtocolStatistics() {
  const {
    currentBlockHeight,
    currentBlockHeightValue,
    generatedAt,
    market,
    network,
    status,
    supply,
    vrscPrice,
  } = await getStatisticsData()
  const marketCap = supply.circulatingSupply
    ? vrscPrice * supply.circulatingSupply
    : null
  const stakingRatio = supply.circulatingSupply
    ? network.stakingSupply / supply.circulatingSupply
    : null

  return (
    <div className="bg-gray-50 dark:bg-gray-950">
      <section className="border-b border-gray-200 dark:border-gray-800 xl:border-x">
        <div className="grid grid-cols-1 md:grid-cols-3">
          <Cell index={0} mdColumns={3}>
            <Stat
              label="Total value locked"
              value={formatCurrency(market.tvl)}
              description="Protocol-level liquidity across active Verus basket currencies."
              variant="large"
            />
          </Cell>
          <Cell index={1} mdColumns={3}>
            <Stat
              label="VRSC in pools"
              value={formatCompactNumber(market.vrscInPools)}
              description={`${formatCurrency(
                market.vrscInPoolsUsd
              )} in VRSC liquidity across tracked pools.`}
              variant="large"
            />
          </Cell>
          <Cell index={2} mdColumns={3}>
            <Stat
              label="30d volume"
              value={formatCurrency(market.volume30d)}
              description={`${formatNumber(
                market.trades30d
              )} conversions in the last 30 days.`}
              variant="large"
            />
          </Cell>
        </div>
      </section>

      <section className="border-b border-gray-200 dark:border-gray-800">
        <SectionHeading description="Market and on-chain conversion metrics.">
          Market and DeFi
        </SectionHeading>
        <div className="grid grid-cols-1 border-gray-200 dark:border-gray-800 md:grid-cols-2 xl:border-x">
          <Cell index={0} mdColumns={2}>
            <Stat
              label="VRSC price"
              value={formatCurrency(vrscPrice, 2, 2)}
              description="Current VRSC price."
            />
          </Cell>
          <Cell index={1} mdColumns={2}>
            <Stat
              label="Market cap"
              value={marketCap ? formatCurrency(marketCap) : 'N/A'}
              description={
                supply.isEstimate
                  ? 'Calculated with an estimated circulating supply.'
                  : 'Calculated from circulating supply and current price.'
              }
            />
          </Cell>
          <Cell index={2} mdColumns={2}>
            <Stat
              label="Lifetime volume"
              value={formatCurrency(market.volumeAllTime)}
              description="On-chain DeFi volume since activation in 2023."
            />
          </Cell>
          <Cell index={3} mdColumns={2}>
            <Stat
              label="Lifetime conversions"
              value={formatCompactNumber(market.tradesAllTime)}
              description="Total tracked protocol conversions."
            />
          </Cell>
        </div>
      </section>

      <section className="border-b border-gray-200 dark:border-gray-800">
        <SectionHeading description="Network health, supply, and consensus metrics.">
          Network
        </SectionHeading>
        <div className="grid grid-cols-1 border-gray-200 dark:border-gray-800 md:grid-cols-3 xl:border-x">
          <Cell index={0} mdColumns={3}>
            <CurrentBlockHeightStat
              initialBlockHeightValue={currentBlockHeightValue}
              initialValue={currentBlockHeight}
            />
          </Cell>
          <Cell index={1} mdColumns={3}>
            <Stat
              label="Network hash rate"
              value={formatHashRate(network.hashRate)}
              description={`Difficulty ${formatCompactNumber(network.difficulty)}.`}
            />
          </Cell>
          <Cell index={2} mdColumns={3}>
            <Stat
              label="Estimated staking supply"
              value={`${formatCompactNumber(network.stakingSupply)} VRSC`}
              description={
                stakingRatio
                  ? `Estimated at ${formatPercent(
                      stakingRatio
                    )} of circulating supply.`
                  : 'Estimated from network difficulty.'
              }
            />
          </Cell>
          <Cell index={3} mdColumns={3}>
            <Stat
              label="Circulating supply"
              value={
                supply.circulatingSupply
                  ? `${formatCompactNumber(supply.circulatingSupply)} VRSC`
                  : 'N/A'
              }
              description={`Max supply: ${formatNumber(maxSupply)} VRSC.`}
            />
          </Cell>
          <Cell index={4} mdColumns={3} className="md:col-span-2">
            <Stat
              label="Network transactions"
              value={formatCompactNumber(status.transactions)}
              description={`${formatCompactNumber(
                status.conversionsTotal
              )} indexed conversions.`}
            />
          </Cell>
        </div>
      </section>

      <section className="border-b border-gray-200 dark:border-gray-800">
        <SectionHeading>Halving schedule</SectionHeading>
        <div className="border-gray-200 dark:border-gray-800 xl:border-x">
          <HalvingScheduleStats
            initialBlockHeight={currentBlockHeight}
            initialBlockHeightValue={currentBlockHeightValue}
            initialTimestamp={generatedAt}
          />
        </div>
      </section>

      <section>
        <SectionHeading description="Core counts for identities, currencies, baskets, and chains.">
          Ecosystem
        </SectionHeading>
        <div className="grid grid-cols-1 border-gray-200 dark:border-gray-800 md:grid-cols-3 xl:border-x">
          <Cell index={0} mdColumns={3}>
            <Stat
              label="VerusID registrations"
              value={formatNumber(market.identities)}
              description="Registered identities on the Verus network."
            />
          </Cell>
          <Cell index={1} mdColumns={3}>
            <Stat
              label="Currencies"
              value={formatNumber(market.currencies)}
              description="Currencies currently in the ecosystem."
            />
          </Cell>
          <Cell index={2} mdColumns={3}>
            <Stat
              label="Basket currencies"
              value={formatNumber(market.baskets)}
              description="Active reserve-backed liquidity baskets."
            />
          </Cell>
          <Cell index={3} mdColumns={3}>
            <Stat
              label="PBaaS chains"
              value={formatNumber(market.pbaasChains)}
              description="Chains currently in the ecosystem."
            />
          </Cell>
          <Cell index={4} mdColumns={3}>
            <Stat
              label="Ticker"
              value="VRSC"
              description="The native base currency for the Verus blockchain."
            />
          </Cell>
          <Cell index={5} mdColumns={3}>
            <Stat
              label="Launch date"
              value="May 21, 2018"
              description="Fair launch with no ICO, no premine, and no founder allocation."
            />
          </Cell>
        </div>
      </section>
    </div>
  )
}
