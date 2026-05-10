import Link from 'next/link'

import {env} from '@/configs/env'
import {
  FaFacebook,
  FaReddit,
  FaTelegram,
  FaXTwitter,
  FaYoutube,
} from 'react-icons/fa6'
import {IoLogoDiscord} from 'react-icons/io5'
import {LuBlocks, LuHeart, LuMessagesSquare, LuUsers} from 'react-icons/lu'

import {NavLink} from '../nav_link'

export function CommunitySection() {
  return (
    <div className="grid grid-cols-3 gap-8">
      <div>
        <h3 className="mb-4 border-b border-gray-200 pb-2 text-xs font-medium uppercase text-gray-500 dark:border-gray-700 dark:text-gray-400">
          Explore
        </h3>
        <div className="space-y-4">
          <NavLink
            href="/community"
            icon={
              <LuMessagesSquare className="h-5 w-5 text-gray-500 transition-colors group-hover:text-verus-blue" />
            }
            title="Community Hub"
            description="Connect with the Verus community"
          />
          <NavLink
            href="/projects"
            icon={
              <LuBlocks className="h-5 w-5 text-gray-500 transition-colors group-hover:text-verus-blue" />
            }
            title="Community Projects"
            description="Explore community-built projects"
          />
          <NavLink
            href="/people"
            icon={
              <LuUsers className="h-5 w-5 text-gray-500 transition-colors group-hover:text-verus-blue" />
            }
            title="People"
            description="Meet the worldwide contributors"
          />
        </div>
      </div>
      <div>
        <h3 className="mb-4 border-b border-gray-200 pb-2 text-xs font-medium uppercase text-gray-500 dark:border-gray-700 dark:text-gray-400">
          Get Involved
        </h3>
        <div className="space-y-4">
          {/* Bounties link temporarily hidden
          <NavLink 
            href="/#" 
            icon={<LuAward className="h-5 w-5 text-gray-500 group-hover:text-verus-blue transition-colors" />}
            title="Bounties"
            description="Discover community bounties"
          />
          */}
          <NavLink
            href="/contribute"
            icon={
              <LuHeart className="h-5 w-5 text-gray-500 transition-colors group-hover:text-verus-blue" />
            }
            title="Contribute"
            description="Help build the future of Verus"
          />
        </div>
      </div>
      <div>
        <h3 className="mb-4 border-b border-gray-200 pb-2 text-xs font-medium uppercase text-gray-500 dark:border-gray-700 dark:text-gray-400">
          Social Media
        </h3>
        <div className="space-y-2">
          <Link
            href={env.NEXT_PUBLIC_DISCORD}
            className="group flex items-center p-2"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IoLogoDiscord className="mr-2 h-5 w-5 text-[#5865F2]" />
            <span className="text-[15px] font-semibold text-gray-800 group-hover:underline dark:text-white">
              Discord
            </span>
          </Link>
          <Link
            href={env.NEXT_PUBLIC_VERUS_TWITTER}
            className="group flex items-center p-2"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaXTwitter className="mr-2 h-5 w-5 text-black dark:text-white" />
            <span className="text-[15px] font-semibold text-gray-800 group-hover:underline dark:text-white">
              X.com
            </span>
          </Link>
          <Link
            href={env.NEXT_PUBLIC_VERUS_TELEGRAM}
            className="group flex items-center p-2"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTelegram className="mr-2 h-5 w-5 text-[#0088cc]" />
            <span className="text-[15px] font-semibold text-gray-800 group-hover:underline dark:text-white">
              Telegram
            </span>
          </Link>
          <Link
            href={env.NEXT_PUBLIC_VERUS_REDDIT}
            className="group flex items-center p-2"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaReddit className="mr-2 h-5 w-5 text-[#FF4500]" />
            <span className="text-[15px] font-semibold text-gray-800 group-hover:underline dark:text-white">
              Reddit
            </span>
          </Link>
          <Link
            href={env.NEXT_PUBLIC_VERUS_FACEBOOK}
            className="group flex items-center p-2"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook className="mr-2 h-5 w-5 text-[#1877F2]" />
            <span className="text-[15px] font-semibold text-gray-800 group-hover:underline dark:text-white">
              Facebook
            </span>
          </Link>
          <Link
            href={env.NEXT_PUBLIC_VERUS_YOUTUBE}
            className="group flex items-center p-2"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaYoutube className="mr-2 h-5 w-5 text-[#FF0000]" />
            <span className="text-[15px] font-semibold text-gray-800 group-hover:underline dark:text-white">
              YouTube
            </span>
          </Link>
        </div>
      </div>
    </div>
  )
}
