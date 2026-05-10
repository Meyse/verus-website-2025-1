'use client'

import {getMiningInfo} from '@/features/statistics/server/get-mining-info'
import {useQuery} from '@tanstack/react-query'

export function CurrentBlockHeightStat({
  initialBlockHeightValue,
  initialValue,
}: {
  initialBlockHeightValue: number | null
  initialValue: string
}) {
  const {data} = useQuery({
    initialData: {
      blockHeight: initialValue,
      blockHeightValue: initialBlockHeightValue,
      hashRate: 'N/A',
      stakingAmount: 'N/A',
    },
    queryFn: getMiningInfo,
    queryKey: ['mining-info'],
    refetchInterval: 60 * 1000,
  })

  return (
    <div className="flex h-full min-h-[150px] min-w-0 flex-col">
      <div className="text-[14px] font-medium text-gray-500 dark:text-gray-400 md:text-[15px]">
        Current block height
      </div>
      <div className="mt-5 min-w-0">
        <div className="break-words text-[34px] font-medium leading-tight tracking-tight text-gray-800 dark:text-white md:text-[42px]">
          {data.blockHeight}
        </div>
      </div>
    </div>
  )
}
