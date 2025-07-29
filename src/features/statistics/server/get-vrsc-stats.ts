'use client'

import {getSupply} from '@/features/intro/server/get-supply'
import {useQuery} from '@tanstack/react-query'

import {calculateStakingPercentage} from '../lib/calc-stake-percentage'
import {getMiningInfo} from './get-mining-info'
import {getVRSCPrice} from './get-vrsc-price'

export function getVrscStats() {
  const {data: miningInfo} = useQuery({
    queryKey: ['mining-info'],
    queryFn: getMiningInfo,
    refetchInterval: 60 * 1000, //every minute
  })

  const {data: vrscPrice} = useQuery({
    queryKey: ['vrsc-price'],
    queryFn: getVRSCPrice,
    refetchInterval: 60 * 1000, //every minute
  })

  const {data: supplyInfo} = useQuery({
    queryKey: ['supply-info'],
    queryFn: getSupply,
    refetchInterval: 5 * 60 * 1000, //every 5 minutes
  })

  const circulatingSupply = supplyInfo?.circulatingSupply ?? null
  // Calculate market cap - important for SEO
  let marketCap = 'N/A'
  if (vrscPrice !== null && circulatingSupply !== null) {
    const marketCapValue = vrscPrice! * circulatingSupply
    marketCap = `$${marketCapValue.toLocaleString(undefined, {
      maximumFractionDigits: 0,
    })}`
  }

  // Calculate the percentage of VRSC being staked
  const stakingPercentage = calculateStakingPercentage(
    miningInfo?.stakingAmount,
    circulatingSupply
  )

  // Format price - important for SEO
  const formattedPrice =
    vrscPrice !== null ? `$${vrscPrice!.toFixed(2)}` : 'N/A'

  // Format circulating supply
  const formattedCirculatingSupply = circulatingSupply
    ? circulatingSupply.toLocaleString() + ' VRSC'
    : 'Loading...'

  return {
    miningInfo,
    stakingPercentage,
    circulatingSupply: formattedCirculatingSupply,
    price: formattedPrice,
    marketCap,
  }
}
