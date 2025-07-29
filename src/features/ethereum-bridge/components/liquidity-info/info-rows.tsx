'use client'

import {getBridgeData} from '@/features/ethereum-bridge/server/get-bridge-data'
import {
  formatPrice,
  formatPriceComparison,
  formatReserves,
  formatTotalValue,
  getPriceComparisonClass,
} from '@/features/ethereum-bridge/utils'
import {useSuspenseQuery} from '@tanstack/react-query'

const getBridgeInfo = () => {
  // refetch every 2 minutes
  // get fresh data on page refresh after 1 minutes
  //   to prevent ratelimiting issue with coinpaprika
  const {data} = useSuspenseQuery({
    queryKey: ['bridge-info'],
    queryFn: getBridgeData,
    refetchInterval: 2 * 60 * 1000,
  })
  return data
}

export const BridgeEthSection = () => {
  const bridgeData = getBridgeInfo()
  // const {data: bridgeData} = useSuspenseQuery({
  //   queryKey: ['bridge-info'],
  //   queryFn: getBridgeData,
  //   refetchInterval: 2 * 60 * 1000,
  // })
  return (
    <>
      <div className="flex items-center justify-end gap-1">
        <span className="text-[12px] tabular-nums text-gray-500 dark:text-gray-400 md:text-[16px]">
          {formatReserves(bridgeData?.supply)}
        </span>
      </div>
      <div className="flex items-center justify-end gap-1">
        <span className="text-[12px] font-medium tabular-nums text-black dark:text-white md:text-[16px]">
          {!bridgeData?.bridgeVethPrice
            ? 'n/a'
            : bridgeData?.bridgeVethPrice?.toFixed(2)}
        </span>
      </div>
    </>
  )
}

export const VerusRow = () => {
  const bridgeData = getBridgeInfo()
  return (
    <>
      <div className="flex items-center justify-end">
        <span className="text-[12px] tabular-nums text-gray-500 dark:text-gray-400 md:text-[16px]">
          {formatReserves(bridgeData?.reserveCurrencies?.VRSC)}
        </span>
      </div>
      <div className="flex items-center justify-end">
        <span className="text-[12px] font-medium tabular-nums text-black dark:text-white md:text-[16px]">
          {formatPrice(bridgeData?.prices?.VRSC, 'VRSC')}
        </span>
      </div>
      <div
        className={`flex items-center justify-end ${getPriceComparisonClass(bridgeData?.priceComparisons.VRSC)}`}
      >
        <span className="text-[12px] tabular-nums md:text-[16px]">
          {formatPriceComparison(bridgeData?.priceComparisons.VRSC)}
        </span>
      </div>
    </>
  )
}

export const DaiRow = () => {
  const bridgeData = getBridgeInfo()
  return (
    <>
      <div className="flex items-center justify-end">
        <span className="text-[12px] tabular-nums text-gray-500 dark:text-gray-400 md:text-[16px]">
          {formatReserves(bridgeData?.reserveCurrencies?.['DAI.vETH'])}
        </span>
      </div>
      <div className="flex items-center justify-end">
        <span className="text-[12px] font-medium tabular-nums text-black dark:text-white md:text-[16px]">
          {formatPrice(bridgeData?.prices?.['DAI.vETH'], 'DAI.vETH')}
        </span>
      </div>
      <div
        className={`flex items-center justify-end ${getPriceComparisonClass(bridgeData?.priceComparisons['DAI.vETH'])}`}
      >
        <span className="text-[12px] tabular-nums md:text-[16px]">
          {formatPriceComparison(bridgeData?.priceComparisons['DAI.vETH'])}
        </span>
      </div>
    </>
  )
}

export const EthRow = () => {
  const bridgeData = getBridgeInfo()
  return (
    <>
      <div className="flex items-center justify-end">
        <span className="text-[12px] tabular-nums text-gray-500 dark:text-gray-400 md:text-[16px]">
          {formatReserves(bridgeData?.reserveCurrencies?.vETH)}
        </span>
      </div>
      <div className="flex items-center justify-end">
        <span className="text-[12px] font-medium tabular-nums text-black dark:text-white md:text-[16px]">
          {formatPrice(bridgeData?.prices?.vETH, 'vETH')}
        </span>
      </div>
      <div
        className={`flex items-center justify-end ${getPriceComparisonClass(bridgeData?.priceComparisons.vETH)}`}
      >
        <span className="text-[12px] tabular-nums md:text-[16px]">
          {formatPriceComparison(bridgeData?.priceComparisons.vETH)}
        </span>
      </div>
    </>
  )
}
export const MkrRow = () => {
  const bridgeData = getBridgeInfo()
  return (
    <>
      <div className="flex items-center justify-end">
        <span className="text-[12px] tabular-nums text-gray-500 dark:text-gray-400 md:text-[16px]">
          {formatReserves(bridgeData?.reserveCurrencies?.['MKR.vETH'])}
        </span>
      </div>
      <div className="flex items-center justify-end">
        <span className="text-[12px] font-medium tabular-nums text-black dark:text-white md:text-[16px]">
          {formatPrice(bridgeData?.prices?.['MKR.vETH'], 'MKR.vETH')}
        </span>
      </div>
      <div
        className={`flex items-center justify-end ${getPriceComparisonClass(bridgeData?.priceComparisons['MKR.vETH'])}`}
      >
        <span className="text-[12px] tabular-nums md:text-[16px]">
          {formatPriceComparison(bridgeData?.priceComparisons['MKR.vETH'])}
        </span>
      </div>
    </>
  )
}

export const TotalRow = () => {
  const bridgeData = getBridgeInfo()
  return (
    <span className="text-right text-[13px] font-medium tabular-nums text-black dark:text-white md:text-[16px]">
      {!bridgeData?.totalValue
        ? 'n/a'
        : formatTotalValue(bridgeData.totalValue) + ' DAI'}
    </span>
  )
}
