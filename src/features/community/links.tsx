import Link from 'next/link'

import {env} from '@/configs/env'
import {
  FaFacebook,
  FaMedium,
  FaReddit,
  FaTelegram,
  FaXTwitter,
  FaYoutube,
} from 'react-icons/fa6'
import {IoLogoDiscord} from 'react-icons/io5'

import {TelegramCard} from './telegram-card'
import {VerticleImageScroll} from './verticle-image-scroll'

const communityPlatforms = [
  {
    name: 'Discord',
    icon: <IoLogoDiscord className="h-8 w-8 text-verus-blue dark:text-white" />,
    url: env.NEXT_PUBLIC_DISCORD,
    description:
      'Join the vibrant Discord community to chat with developers, ask questions, and stay up-to-date with the latest news.',
    primary: true,
  },
  {
    name: 'X (Twitter)',
    icon: <FaXTwitter className="h-8 w-8 text-verus-blue dark:text-white" />,
    url: env.NEXT_PUBLIC_VERUS_TWITTER,
    description:
      'Follow X for announcements, updates, and community highlights.',
    primary: false,
  },
  {
    name: 'Reddit',
    icon: <FaReddit className="h-8 w-8 text-verus-blue dark:text-white" />,
    url: env.NEXT_PUBLIC_VERUS_REDDIT,
    description:
      'Join discussions, share ideas, and get involved with the community.',
    primary: false,
  },
  {
    name: 'YouTube',
    icon: <FaYoutube className="h-8 w-8 text-verus-blue dark:text-white" />,
    url: env.NEXT_PUBLIC_VERUS_YOUTUBE,
    description:
      'Watch tutorials, developer updates, and recordings of community calls.',
    primary: false,
  },
  {
    name: 'Medium',
    icon: <FaMedium className="h-8 w-8 text-verus-blue dark:text-white" />,
    url: env.NEXT_PUBLIC_VERUS_MEDIUM,
    description:
      'Read in-depth articles about Verus technology, protocol updates, and ecosystem news.',
    primary: false,
  },
  {
    name: 'Facebook',
    icon: <FaFacebook className="h-8 w-8 text-verus-blue dark:text-white" />,
    url: env.NEXT_PUBLIC_VERUS_FACEBOOK,
    description: 'Follow the Facebook page for community updates and events.',
    primary: false,
  },
]
//TODO attempt to remove suppress hydration warning
// Social media links and community resources for the Verus ecosystem
export function CommunityLinks() {
  return (
    <div className="mb-16 w-full">
      {/* Hero Discord Section with Images - New Design */}
      <div className="relative mb-8 overflow-hidden rounded-3xl border border-blue-100/80 bg-white/70 backdrop-blur-sm dark:border-blue-900/30 dark:bg-gray-900/50">
        {/* Decorative elements */}
        <div className="absolute left-10 top-20 -z-10 h-60 w-60 rounded-full bg-blue-500/5 blur-[80px] dark:bg-blue-500/5"></div>
        <div className="absolute -top-10 right-20 -z-10 h-60 w-60 rounded-full bg-blue-500/5 blur-[80px] dark:bg-blue-500/5"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.08),transparent_50%)] dark:bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.15),transparent_50%)]"></div>

        <div className="flex flex-col lg:flex-row" suppressHydrationWarning>
          {/* Left content side */}
          <div className="relative z-10 w-full p-8 md:p-12 lg:w-1/2 lg:p-16">
            <h2 className="mb-4 text-[32px] font-medium leading-[1.1] tracking-tight text-gray-900 dark:text-white md:text-[48px]">
              Connect with the growing community.
            </h2>
            <p className="mb-8 max-w-[500px] text-[16px] tracking-tight text-gray-600 dark:text-gray-300 md:text-[18px]">
              Join developers, builders, entrepreneurs, miners, stakers and
              blockchain enthusiasts building a decentralized future. It's also
              the best place to stay up-to-date with all protocol updates.
            </p>

            <Link
              href={env.NEXT_PUBLIC_DISCORD}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex h-[40px] items-center justify-center rounded-lg border border-blue-500 bg-blue-600 px-6 text-[14px] font-medium text-white backdrop-blur-sm transition-all duration-300 hover:bg-blue-700 dark:border-white/60 dark:bg-white/90 dark:text-black dark:hover:bg-white md:h-[50px] md:text-[16px]"
            >
              <IoLogoDiscord className="mr-3 h-5 w-5" />
              Join Discord
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
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
            </Link>
          </div>

          <VerticleImageScroll />
        </div>
      </div>

      {/* Original Social Platform Cards - Without hover effects */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {/* Telegram card with dropdown */}
        <div className="relative overflow-hidden rounded-2xl border border-blue-100/80 bg-white/70 p-6 shadow-sm backdrop-blur-sm dark:border-blue-900/30 dark:bg-gray-900/50">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.08),transparent_50%)] dark:bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.15),transparent_50%)]"></div>

          <div className="relative">
            <div className="mb-4 flex items-center gap-4">
              <FaTelegram className="h-8 w-8 text-verus-blue dark:text-white" />
              <h3 className="text-[18px] font-medium text-gray-900 dark:text-white md:text-[20px]">
                Telegram
              </h3>
            </div>

            <p className="mb-4 text-[15px] text-gray-600 dark:text-gray-300">
              Join Telegram groups in various languages to connect with the
              global Verus community.
            </p>

            <TelegramCard />
          </div>
        </div>

        {/* Other social platforms */}
        {communityPlatforms
          .filter((platform) => platform.name !== 'Discord')
          .map((platform, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-2xl border border-blue-100/80 bg-white/70 p-6 shadow-sm backdrop-blur-sm dark:border-blue-900/30 dark:bg-gray-900/50"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.08),transparent_50%)] dark:bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.15),transparent_50%)]"></div>

              <div className="relative">
                <div className="mb-4 flex items-center gap-4">
                  {platform.icon}
                  <h3 className="text-[18px] font-medium text-gray-900 dark:text-white md:text-[20px]">
                    {platform.name}
                  </h3>
                </div>

                <p className="mb-5 text-[15px] text-gray-600 dark:text-gray-300">
                  {platform.description}
                </p>

                <Link
                  href={platform.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex h-[40px] items-center justify-center rounded-lg border border-blue-200 bg-white/80 px-6 text-[14px] font-medium text-verus-blue backdrop-blur-sm dark:border-blue-800/60 dark:bg-blue-950/80 dark:text-white"
                >
                  Visit {platform.name}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
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
                </Link>
              </div>
            </div>
          ))}
      </div>
    </div>
  )
}
