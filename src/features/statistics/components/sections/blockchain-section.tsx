'use client'

/*
 * BlockchainSection Component
 * - Displays current block height
 * - Shows network hash rate
 * - Shows staking amount and percentage
 * - Uses consistent styling with other sections
 */
import {Zap} from 'lucide-react'

import {getVrscStats} from '../../server/get-vrsc-stats'

interface BlockchainSectionProps {
  blockHeight: string
  hashRate: string
  stakingAmount: string
  stakingPercentage: string
}

export function BlockchainSection() {
  //   {
  //   blockHeight,
  //   hashRate,
  //   stakingAmount,
  //   stakingPercentage,
  // }: BlockchainSectionProp
  const {miningInfo, stakingPercentage} = getVrscStats()

  return (
    <div className="relative overflow-hidden p-10 md:p-14">
      <div className="absolute right-0 top-0 z-0 h-[250px] w-[250px] -translate-y-1/3 translate-x-1/3 transform rounded-full bg-blue-500/5 blur-[60px] dark:bg-blue-500/10"></div>
      <div className="relative z-10">
        <div className="mb-2 flex items-center gap-2">
          <div className="flex h-5 w-5 items-center justify-center rounded-full bg-blue-500 text-white">
            <Zap className="h-3 w-3" />
          </div>
          <span className="text-[14px] font-medium uppercase tracking-wide text-gray-600 dark:text-gray-300">
            Block Explorer
          </span>
        </div>

        <span className="bg-gradient-to-br from-indigo-500 to-blue-600 bg-clip-text text-[60px] leading-none tracking-tight text-transparent dark:from-indigo-400 dark:to-blue-500">
          {miningInfo?.blockHeight}
        </span>
        <div className="mt-2">
          <span className="text-[15px] font-medium uppercase tracking-wider text-gray-600 dark:text-gray-400 md:text-[17px]">
            Current Block Height
          </span>
        </div>

        <div className="mt-4 grid grid-cols-2 gap-6">
          <div>
            <div className="mb-1 text-[15px] text-gray-500 dark:text-gray-400">
              Network Hash Rate
            </div>
            <div className="text-[18px] font-medium text-gray-900 dark:text-white">
              {miningInfo?.hashRate}
            </div>
          </div>
          <div>
            <div className="mb-1 text-[15px] text-gray-500 dark:text-gray-400">
              Estimated Staking Amount
            </div>
            <div className="text-[18px] font-medium text-gray-900 dark:text-white">
              {miningInfo?.stakingAmount}
              <div className="mt-1 text-[14px] text-gray-500 dark:text-gray-400">
                {stakingPercentage} of Supply
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
