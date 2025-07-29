/*
 * EcosystemStatsSection Component
 * - Displays key ecosystem metrics in a grid layout
 * - Shows registered VerusIDs count
 * - Shows currencies launched on Verus
 * - Shows PBaaS chains in the ecosystem
 */

import {Coins, Network, Users} from 'lucide-react'

export function EcosystemStatsSection() {
  // Static ecosystem data
  // TODO: make this dynamic however, unknown how to find data
  const ecosystemData = {
    verusIds: '32k+',
    currencies: '59',
    pbaasChains: '4',
  }

  return (
    <div className="mb-10 grid grid-cols-1 gap-6 md:grid-cols-3">
      {/* Registered VerusIDs */}
      <div className="relative overflow-hidden rounded-lg border border-gray-200 bg-white/80 p-8 backdrop-blur-sm dark:border-gray-800 dark:bg-gray-800/50">
        <div className="absolute right-0 top-0 z-0 h-[200px] w-[200px] -translate-y-1/3 translate-x-1/3 transform rounded-full bg-blue-500/5 blur-[60px] dark:bg-blue-500/10"></div>
        <div className="relative z-10 text-center">
          <div className="mb-4 flex justify-center">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-100 text-blue-600 shadow-sm dark:bg-blue-900/50 dark:text-blue-400">
              <Users className="h-5 w-5" />
            </div>
          </div>
          <span className="block bg-gradient-to-br from-blue-400 to-blue-600 bg-clip-text text-[40px] font-bold leading-tight text-transparent dark:from-blue-300 dark:to-blue-500">
            {ecosystemData.verusIds}
          </span>
          <div className="mt-2">
            <span className="text-[15px] font-medium uppercase tracking-wider text-gray-600 dark:text-gray-400 md:text-[16px]">
              Registered VerusIDs
            </span>
          </div>
        </div>
      </div>

      {/* Currencies Launched */}
      <div className="relative overflow-hidden rounded-lg border border-gray-200 bg-white/80 p-8 backdrop-blur-sm dark:border-gray-800 dark:bg-gray-800/50">
        <div className="absolute right-0 top-0 z-0 h-[200px] w-[200px] -translate-y-1/3 translate-x-1/3 transform rounded-full bg-blue-500/5 blur-[60px] dark:bg-blue-500/10"></div>
        <div className="relative z-10 text-center">
          <div className="mb-4 flex justify-center">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-100 text-blue-600 shadow-sm dark:bg-blue-900/50 dark:text-blue-400">
              <Coins className="h-5 w-5" />
            </div>
          </div>
          <span className="block bg-gradient-to-br from-blue-500 to-indigo-500 bg-clip-text text-[40px] font-bold leading-tight text-transparent dark:from-blue-400 dark:to-indigo-400">
            {ecosystemData.currencies}
          </span>
          <div className="mt-2">
            <span className="text-[15px] font-medium uppercase tracking-wider text-gray-600 dark:text-gray-400 md:text-[16px]">
              Currencies Launched (on Verus)
            </span>
          </div>
        </div>
      </div>

      {/* PBaaS Chains */}
      <div className="relative overflow-hidden rounded-lg border border-gray-200 bg-white/80 p-8 backdrop-blur-sm dark:border-gray-800 dark:bg-gray-800/50">
        <div className="absolute right-0 top-0 z-0 h-[200px] w-[200px] -translate-y-1/3 translate-x-1/3 transform rounded-full bg-blue-500/5 blur-[60px] dark:bg-blue-500/10"></div>
        <div className="relative z-10 text-center">
          <div className="mb-4 flex justify-center">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-100 text-blue-600 shadow-sm dark:bg-blue-900/50 dark:text-blue-400">
              <Network className="h-5 w-5" />
            </div>
          </div>
          <span className="block bg-gradient-to-br from-indigo-500 to-blue-600 bg-clip-text text-[40px] font-bold leading-tight text-transparent dark:from-indigo-400 dark:to-blue-500">
            {ecosystemData.pbaasChains}
          </span>
          <div className="mt-2">
            <span className="text-[15px] font-medium uppercase tracking-wider text-gray-600 dark:text-gray-400 md:text-[16px]">
              Chains in the Ecosystem
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
