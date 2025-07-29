'use client'

/*
 * PriceSection Component
 * - Displays current VRSC price
 * - Shows market cap and circulating supply
 * - Includes max supply information
 */
import {BarChart3} from 'lucide-react'

import {getVrscStats} from '../../server/get-vrsc-stats'

interface PriceSectionProps {
  price: string
  marketCap: string
  circulatingSupply: string
  maxSupply: string
}

// Define max supply
const maxSupply = 83540184

// Format max supply
const formattedMaxSupply = maxSupply.toLocaleString() + ' VRSC'

export function PriceSection() {
  // {
  // price,
  // marketCap,
  // circulatingSupply,
  // maxSupply,
  // }: PriceSectionProps
  const {price, marketCap, circulatingSupply} = getVrscStats()
  return (
    <div className="relative overflow-hidden p-10 md:p-14">
      <div className="absolute right-0 top-0 z-0 h-[250px] w-[250px] -translate-y-1/3 translate-x-1/3 transform rounded-full bg-blue-500/5 blur-[60px] dark:bg-blue-500/10"></div>
      <div className="relative z-10">
        <div className="mb-2 flex items-center gap-2">
          <div className="flex h-5 w-5 items-center justify-center rounded-full bg-blue-500 text-white">
            <BarChart3 className="h-3 w-3" />
          </div>
          <span className="text-[14px] font-medium uppercase tracking-wide text-gray-600 dark:text-gray-300">
            Current Price
          </span>
        </div>

        <div>
          <span className="bg-gradient-to-br from-blue-400 to-blue-600 bg-clip-text text-[60px] leading-none tracking-tight text-transparent dark:from-blue-300 dark:to-blue-500">
            {price}
          </span>
        </div>

        <div className="mt-6 grid grid-cols-2 gap-6">
          <div>
            <div className="mb-1 text-[15px] text-gray-500 dark:text-gray-400">
              Market Cap
            </div>
            <div className="text-[18px] font-medium text-gray-900 dark:text-white">
              {marketCap}
            </div>
          </div>
          <div>
            <div className="mb-1 text-[15px] text-gray-500 dark:text-gray-400">
              Circulating Supply
            </div>
            <div>
              <div className="text-[18px] font-medium text-gray-900 dark:text-white">
                {circulatingSupply}
              </div>
              <div className="mt-1 text-[14px] text-gray-500 dark:text-gray-400">
                Max Supply: {formattedMaxSupply}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
