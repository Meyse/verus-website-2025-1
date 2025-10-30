/**
 * File updated: reordered items so "Wallet" appears before "Get Started"
 * in the Use & Wallet section of the desktop navigation.
 */
import Image from 'next/image'

import {env} from '@/configs/env'
import {Coins, Search} from 'lucide-react'
import {
  LuArrowLeftRight,
  LuBadgeCheck,
  LuBookOpen,
  LuCpu,
  LuGlobe,
  LuPercent,
  LuWallet,
} from 'react-icons/lu'

import {NavLink} from '../nav_link'

export function UseSection() {
  return (
    <div className="grid grid-cols-3 gap-8">
      <div>
        <h3 className="mb-4 border-b border-gray-200 pb-2 text-xs font-medium uppercase text-gray-500 dark:border-gray-700 dark:text-gray-400">
          Get Started
        </h3>
        <div className="space-y-4">
          <NavLink
            href="/wallet"
            icon={
              <LuWallet className="h-5 w-5 text-gray-500 transition-colors group-hover:text-verus-blue" />
            }
            title="Wallet"
            description="Connect securily to the Verus ecosystem"
          />
          <NavLink
            href="/get-started"
            icon={
              <LuBookOpen className="h-5 w-5 text-gray-500 transition-colors group-hover:text-verus-blue" />
            }
            title="Get Started"
            description="Information to help you on your way"
          />
          <NavLink
            href="/verusid"
            icon={
              <div className="relative">
                <Image
                  src="/img/at-full-black.svg"
                  alt="VerusID Icon"
                  width={5}
                  height={5}
                  className="size-5 opacity-50 transition-all group-hover:opacity-100 group-hover:[filter:invert(31%)_sepia(93%)_saturate(1352%)_hue-rotate(213deg)_brightness(97%)_contrast(87%)] dark:[filter:invert(100%)]"
                />
              </div>
            }
            title="VerusID"
            description="Be self-sovereign"
          />
          <NavLink
            href="/ethereum-bridge"
            icon={
              <LuArrowLeftRight className="h-5 w-5 text-gray-500 transition-colors group-hover:text-verus-blue" />
            }
            title="Ethereum Bridge"
            description="Transfer assets between Verus & Ethereum"
          />
        </div>
      </div>
      <div>
        <h3 className="mb-4 border-b border-gray-200 pb-2 text-xs font-medium uppercase text-gray-500 dark:border-gray-700 dark:text-gray-400">
          Participate
        </h3>
        <div className="space-y-4">
          <NavLink
            href="/mining"
            icon={
              <LuCpu className="h-5 w-5 text-gray-500 transition-colors group-hover:text-verus-blue" />
            }
            title="Start Mining"
            description="Secure the network"
          />
          <NavLink
            href="/staking"
            icon={
              <LuPercent className="h-5 w-5 text-gray-500 transition-colors group-hover:text-verus-blue" />
            }
            title="Start Staking"
            description="Stake VRSC on a full node"
          />
          <NavLink
            href="/get-vrsc"
            icon={
              <Coins className="h-5 w-5 text-gray-500 transition-colors group-hover:text-verus-blue" />
            }
            title="Get VRSC"
            description="Get VRSC through various paths"
          />
        </div>
      </div>
      <div>
        <h3 className="mb-4 border-b border-gray-200 pb-2 text-xs font-medium uppercase text-gray-500 dark:border-gray-700 dark:text-gray-400">
          Tools
        </h3>
        <div className="space-y-4">
          <NavLink
            href="/verusid-search"
            icon={
              <Search className="h-5 w-5 text-gray-500 transition-colors group-hover:text-verus-blue" />
            }
            title="VerusID Search"
            description="Find & view VerusID profiles"
          />
          <NavLink
            href="/verify"
            icon={
              <LuBadgeCheck className="h-5 w-5 text-gray-500 transition-colors group-hover:text-verus-blue" />
            }
            title="Verify Signatures"
            description="Validate signed messages & files"
          />
          <NavLink
            href={env.NEXT_PUBLIC_VERUS_EXPLORER}
            icon={
              <LuGlobe className="h-5 w-5 text-gray-500 transition-colors group-hover:text-verus-blue" />
            }
            title="Explorer"
            description="Explore the Verus blockchain"
            isExternal={true}
          />
        </div>
      </div>
    </div>
  )
}
