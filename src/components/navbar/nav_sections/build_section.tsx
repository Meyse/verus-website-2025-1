import Image from 'next/image'
import Link from 'next/link'

import {env} from '@/configs/env'
import {ExternalLink} from 'lucide-react'
import {IoLogoDiscord} from 'react-icons/io5'
import {
  LuArrowUpDown,
  LuCoins,
  LuDatabase,
  LuLayoutGrid,
  LuNetwork,
  LuRocket,
  LuScale,
  LuStore,
  LuUsers,
} from 'react-icons/lu'

import {NavLink} from '../nav_link'

//TODO:clean up
//??maybe a data json file containing links
//??shouldn't have to write /build for everyone of these links
export function BuildSection() {
  return (
    <div className="grid grid-cols-3 gap-8">
      <div>
        <h3 className="mb-4 border-b border-gray-200 pb-2 text-xs font-medium uppercase text-gray-500 dark:border-gray-700 dark:text-gray-400">
          Get started
        </h3>
        <div className="space-y-4">
          <NavLink
            href="/build"
            icon={
              <LuLayoutGrid className="h-5 w-5 text-gray-500 transition-colors group-hover:text-verus-blue" />
            }
            title="Overview"
            description="An overview of all building blocks"
          />
          <NavLink
            href="/build/verusid/"
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
            description="The root of everything"
          />
          <NavLink
            href="/build/start"
            icon={
              <LuRocket className="h-5 w-5 text-gray-500 transition-colors group-hover:text-verus-blue" />
            }
            title="Get Started"
            description="Developer information to get started"
          />
          <NavLink
            href="/migrate"
            icon={
              <LuUsers className="h-5 w-5 text-gray-500 transition-colors group-hover:text-verus-blue" />
            }
            title="Migrate Your Community"
            description="Join the Internet of Value"
          />
          <NavLink
            href="/vs-evm/"
            icon={
              <LuScale className="h-5 w-5 text-gray-500 transition-colors group-hover:text-verus-blue" />
            }
            title="Verus vs EVMs"
            description="Beyond Virtual Machines"
          />
        </div>
      </div>
      <div>
        <h3 className="mb-4 border-b border-gray-200 pb-2 text-xs font-medium uppercase text-gray-500 dark:border-gray-700 dark:text-gray-400">
          Solutions
        </h3>
        <div className="space-y-4">
          {/* Use custom PBaaS Link component */}
          <NavLink
            href="/build/pbaas-chains/"
            icon={
              <LuNetwork className="h-5 w-5 text-gray-500 transition-colors group-hover:text-verus-blue" />
            }
            title="Blockchains (PBaaS)"
            description="Rent-free, interoperable & independent"
          />
          <NavLink
            href="/build/pbaas-currencies/"
            icon={
              <LuCoins className="h-5 w-5 text-gray-500 transition-colors group-hover:text-verus-blue" />
            }
            title="Currencies"
            description="Currencies, tokens & liquidity pools"
          />
          <NavLink
            href="/build/data/"
            icon={
              <LuDatabase className="h-5 w-5 text-gray-500 transition-colors group-hover:text-verus-blue" />
            }
            title="Store & Retrieve Data"
            description="Complete on-chain database"
          />
          <NavLink
            href="/build/defi-payments/"
            icon={
              <LuArrowUpDown className="h-5 w-5 text-gray-500 transition-colors group-hover:text-verus-blue" />
            }
            title="DeFi & Payments"
            description="Low fees & MEV-resistant"
          />
          <NavLink
            href="/build/marketplace/"
            icon={
              <LuStore className="h-5 w-5 text-gray-500 transition-colors group-hover:text-verus-blue" />
            }
            title="Marketplace"
            description="Peer-to-peer marketplace"
          />
        </div>
      </div>
      <div>
        <h3 className="mb-4 border-b border-gray-200 pb-2 text-xs font-medium uppercase text-gray-500 dark:border-gray-700 dark:text-gray-400">
          Documentation
        </h3>
        <div className="space-y-2">
          <Link
            href={env.NEXT_PUBLIC_VERUS_DOCS}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-start rounded-lg p-2 transition-colors [&>div>div]:hover:underline"
          >
            <div>
              <div className="mb-1 flex items-center gap-2 text-[15px] font-semibold text-gray-800 dark:text-white">
                Documentation
                <ExternalLink className="h-4 w-4 opacity-50 group-hover:opacity-100" />
              </div>
            </div>
          </Link>
          <Link
            href={env.NEXT_PUBLIC_MONKINS_GITHUB}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-start rounded-lg p-2 transition-colors [&>div>div]:hover:underline"
          >
            <div>
              <div className="mb-1 flex items-center gap-2 text-[15px] font-semibold text-gray-800 dark:text-white">
                Integration Documentation
                <ExternalLink className="h-4 w-4 opacity-50 group-hover:opacity-100" />
              </div>
            </div>
          </Link>
          <Link
            href={`${env.NEXT_PUBLIC_VERUS_WIKI}/#!faq-cli/clifaq-02_verus_commands.md`}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-start rounded-lg p-2 transition-colors [&>div>div]:hover:underline"
          >
            <div>
              <div className="mb-1 flex items-center gap-2 text-[15px] font-semibold text-gray-800 dark:text-white">
                All API Commands
                <ExternalLink className="h-4 w-4 opacity-50 group-hover:opacity-100" />
              </div>
            </div>
          </Link>

          {/* Discord Help Section */}
          <Link
            href={env.NEXT_PUBLIC_DISCORD}
            target="_blank"
            rel="noopener noreferrer"
            className="group mt-8 block rounded-lg bg-gradient-to-br from-[#5865F2] to-[#404EED] p-5 transition-all hover:shadow-lg hover:shadow-[#5865F2]/20"
          >
            <div className="flex items-center">
              <IoLogoDiscord className="h-9 w-9 text-white" />
              <div className="ml-4">
                <div className="text-[17px] font-semibold text-white">
                  Need help building with Verus?
                </div>
                <p className="mt-1 text-[14px] font-light text-white/90">
                  Join the Discord for developer support
                </p>
              </div>
            </div>
            <div className="mt-3 flex items-center justify-between rounded-md bg-white/10 px-3 py-2 text-[13px] text-white/90 backdrop-blur-sm transition-colors group-hover:bg-white/20">
              <span>Ask questions, share ideas, collaborate</span>
              <span className="flex items-center text-white/80 transition-colors group-hover:text-white">
                Join now
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="ml-1 h-4 w-4 transition-all duration-300 group-hover:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}
