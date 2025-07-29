'use server'

import {getSupply} from '@/features/intro/server/get-supply'

import {getQueryClient} from '@/lib/get-query-client'

import {getMiningInfo} from './get-mining-info'
import {getVRSCPrice} from './get-vrsc-price'

export const preloadStatsData = async () => {
  const queryClient = getQueryClient()

  await queryClient.prefetchQuery({
    queryKey: ['mining-info'],
    queryFn: getMiningInfo,
  })
  await queryClient.prefetchQuery({
    queryKey: ['vrsc-price'],
    queryFn: getVRSCPrice,
  })
  await queryClient.prefetchQuery({
    queryKey: ['supply-info'],
    queryFn: getSupply,
  })
  return queryClient
}
