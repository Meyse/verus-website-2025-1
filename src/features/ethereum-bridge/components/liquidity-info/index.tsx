import {Suspense} from 'react'
import Image from 'next/image'

import {dehydrate, HydrationBoundary} from '@tanstack/react-query'

import {getQueryClient} from '@/lib/get-query-client'

import {getBridgeData} from '../../server/get-bridge-data'
import {
  BridgeEthSection,
  DaiRow,
  EthRow,
  MkrRow,
  TotalRow,
  VerusRow,
} from './info-rows'
import {LiquidityInfoLoader, TotalInfoLoader} from './liquidity-info-loader'
import {LiquidityTooltip} from './liquidity-tooltip'

export function BridgeLiquidityInfo() {
  const queryClient = getQueryClient()

  queryClient.prefetchQuery({
    queryKey: ['bridge-info'],
    queryFn: getBridgeData,
  })
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <div className="relative w-screen md:w-[700px]">
        {/* Combined Table */}
        <div className="w-full rounded-none border-x-0 border-y border-[#E9EFFC] bg-white shadow-sm backdrop-blur-sm dark:border-gray-800 dark:bg-gray-900 md:rounded-lg md:border-x">
          {/* Bridge.vETH Section */}
          <div className="grid grid-cols-[1fr,1fr,1fr] gap-1 border-b border-[#E9EFFC] bg-white/50 p-3 dark:border-gray-800 dark:bg-gray-900/50 md:gap-4 md:p-4">
            <div className="flex items-center gap-3">
              <span className="text-[12px] text-gray-500 dark:text-gray-400"></span>
            </div>
            <div className="flex items-center justify-end gap-1">
              <LiquidityTooltip content="Total supply of Bridge.vETH" />
              <span className="text-right text-[10px] text-gray-500 dark:text-gray-400 md:text-[12px]">
                Supply
              </span>
            </div>
            <div className="flex items-center justify-end gap-1">
              <LiquidityTooltip content="Current price in DAI (1 DAI = 1 USD)" />
              <span className="text-right text-[10px] text-gray-500 dark:text-gray-400 md:text-[12px]">
                Price in DAI
              </span>
            </div>
          </div>
          <div className="grid grid-cols-[1fr,1fr,1fr] gap-1 border-b border-[#E9EFFC] p-4 dark:border-gray-800 md:gap-4 md:p-4">
            <div className="flex items-center gap-3">
              <Image
                src="/img/bridgeveth.svg"
                alt="Bridge.vETH"
                width={24}
                height={24}
                className="size-6"
              />
              <span className="text-[13px] font-medium text-gray-900 dark:text-gray-100 md:text-[16px]">
                Bridge.vETH
              </span>
            </div>
            <Suspense fallback={<LiquidityInfoLoader cols={2} />}>
              <BridgeEthSection />
            </Suspense>
          </div>
          {/* Reserve Currencies Header */}
          <div className="grid grid-cols-[1fr,1fr,1fr,1fr] gap-1 border-b border-[#E9EFFC] bg-gray-50 p-4 dark:border-gray-800 dark:bg-gray-800/50 md:gap-4 md:p-4">
            <span className="text-[10px] text-gray-500 dark:text-gray-400 md:text-[12px]">
              Bridge.vETH
              <br />
              reserve currencies
            </span>
            <div className="flex items-center justify-end gap-1">
              <LiquidityTooltip content="Amount of the currency in the bridge reserves" />
              <span className="text-right text-[10px] text-gray-500 dark:text-gray-400 md:text-[12px]">
                In reserves
              </span>
            </div>
            <div className="flex items-center justify-end gap-1">
              <LiquidityTooltip content="Current price of the currency in DAI (1 DAI = 1 USD)" />
              <span className="text-right text-[10px] text-gray-500 dark:text-gray-400 md:text-[12px]">
                Price in DAI
              </span>
            </div>
            <div className="flex items-center justify-end gap-1">
              <LiquidityTooltip content="Price difference compared to Coinpaprika" />
              <span className="text-right text-[10px] text-gray-500 dark:text-gray-400 md:text-[12px]">
                Compared
                <br />
                to Coinpaprika
              </span>
            </div>
          </div>
          {/* VRSC Row */}
          <div className="grid grid-cols-[1fr,1fr,1fr,1fr] gap-1 border-b border-[#E9EFFC] p-4 transition-colors hover:bg-gray-50/70 dark:border-gray-800 dark:hover:bg-gray-800/30 md:gap-4 md:p-4">
            <div className="flex items-center gap-3">
              <Image
                src="/img/verus-icon.svg"
                alt="VRSC"
                width={24}
                height={24}
                className="size-6"
              />
              <span className="text-[13px] font-medium text-gray-900 dark:text-gray-100 md:text-[16px]">
                VRSC
              </span>
            </div>
            <Suspense fallback={<LiquidityInfoLoader />}>
              <VerusRow />
            </Suspense>
          </div>
          {/* DAI Row */}
          <div className="grid grid-cols-[1fr,1fr,1fr,1fr] gap-1 border-b border-[#E9EFFC] p-4 transition-colors hover:bg-gray-50/70 dark:border-gray-800 dark:hover:bg-gray-800/30 md:gap-4 md:p-4">
            <div className="flex items-center gap-3">
              <Image
                src="/img/dai.svg"
                alt="DAI"
                width={24}
                height={24}
                className="size-6"
              />
              <div className="flex flex-col">
                <span className="text-[13px] font-medium leading-tight text-gray-900 dark:text-gray-100 md:text-[16px]">
                  DAI
                </span>
                <span className="text-[10px] text-gray-500 dark:text-gray-400 md:text-[12px]">
                  DAI.vETH
                </span>
              </div>
            </div>
            <Suspense fallback={<LiquidityInfoLoader />}>
              <DaiRow />
            </Suspense>
          </div>
          {/* ETH Row */}
          <div className="grid grid-cols-[1fr,1fr,1fr,1fr] gap-1 border-b border-[#E9EFFC] p-4 transition-colors hover:bg-gray-50/70 dark:border-gray-800 dark:hover:bg-gray-800/30 md:gap-4 md:p-4">
            <div className="flex items-center gap-3">
              <Image
                src="/img/eth.png"
                alt="ETH"
                width={24}
                height={24}
                className="size-6"
              />
              <div className="flex flex-col">
                <span className="text-[13px] font-medium leading-tight text-gray-900 dark:text-gray-100 md:text-[16px]">
                  ETH
                </span>
                <span className="text-[10px] text-gray-500 dark:text-gray-400 md:text-[12px]">
                  vETH
                </span>
              </div>
            </div>
            <Suspense fallback={<LiquidityInfoLoader />}>
              <EthRow />
            </Suspense>
          </div>
          {/* MKR Row */}
          <div className="grid grid-cols-[1fr,1fr,1fr,1fr] gap-1 p-4 transition-colors hover:bg-gray-50/70 dark:hover:bg-gray-800/30 md:gap-4 md:p-4">
            <div className="flex items-center gap-3">
              <Image
                src="/img/mkr.svg"
                alt="MKR"
                width={24}
                height={24}
                className="size-6"
              />
              <div className="flex flex-col">
                <span className="text-[13px] font-medium leading-tight text-gray-900 dark:text-gray-100 md:text-[16px]">
                  MKR
                </span>
                <span className="text-[10px] text-gray-500 dark:text-gray-400 md:text-[12px]">
                  MKR.vETH
                </span>
              </div>
            </div>
            <Suspense fallback={<LiquidityInfoLoader />}>
              <MkrRow />
            </Suspense>
          </div>
          {/* Total Value Row */}
          <div className="grid grid-cols-2 gap-1 border-t border-[#E9EFFC] bg-gray-50 p-4 dark:border-gray-800 dark:bg-gray-800/50 md:gap-4 md:p-4">
            <span className="text-[13px] font-medium text-black dark:text-white md:text-[16px]">
              Total value of liquidity
            </span>
            <Suspense fallback={<TotalInfoLoader />}>
              <TotalRow
              // bridge={bridgeData}
              />
            </Suspense>
          </div>
        </div>
      </div>
    </HydrationBoundary>
  )
}
