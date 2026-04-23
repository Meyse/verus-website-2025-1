import Link from 'next/link'

import {env} from '@/configs/env'
import {DollarSign} from 'lucide-react'
import {IoLogoDiscord, IoLogoGithub} from 'react-icons/io5'

import {contributionWays} from './contribution-ways'
import {ContributeCopyButton} from './copy-button'

export function ContributionWays() {
  return (
    <div className="px-4 md:px-0">
      {/* Simplified contribution ways */}
      <div className="mb-12 grid grid-cols-1 gap-6 md:grid-cols-3">
        {contributionWays.map((way, index) => (
          <div
            key={index}
            className="rounded-lg border border-blue-100/80 bg-white/80 p-6 shadow-sm backdrop-blur-sm transition-shadow dark:border-blue-900/30 dark:bg-gray-900/50"
          >
            <div className="mb-5 flex items-center gap-4">
              <div className="rounded-lg bg-gray-100 p-3 dark:bg-gray-800">
                {way.icon}
              </div>
              <h2 className="text-[18px] font-medium text-gray-900 dark:text-white md:text-[20px]">
                {way.title}
              </h2>
            </div>

            <p className="mb-4 text-[15px] text-gray-600 dark:text-gray-300">
              {way.description}
            </p>

            <div className="text-[14px] text-gray-600 dark:text-gray-300">
              For example:
              <ul className="mt-2 space-y-1">
                {way.examples.map((example, i) => (
                  <li key={i} className="flex items-start">
                    <span className="mr-2 text-blue-500 dark:text-blue-400">
                      •
                    </span>
                    <span>{example}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      {/* Action buttons section */}
      <div className="mb-12 mt-8 border border-blue-100/80 bg-white/80 p-6 shadow-sm backdrop-blur-sm dark:border-blue-900/30 dark:bg-gray-900/50 md:rounded-lg md:p-8">
        <h2 className="mb-4 text-[20px] font-medium text-gray-900 dark:text-white md:text-[24px]">
          Ready to contribute?
        </h2>
        <p className="mb-6 max-w-3xl text-[15px] text-gray-700 dark:text-gray-300 md:text-[16px]">
          Join the community to learn more about Verus and find your own way to
          contribute.
        </p>

        <div className="flex flex-col gap-4 sm:flex-row">
          <Link
            href="/donate"
            className="group flex h-[40px] items-center justify-center rounded-none border border-blue-500 bg-blue-600 px-6 text-[14px] font-medium text-white backdrop-blur-sm transition-all duration-300 hover:bg-blue-700 dark:border-white/60 dark:bg-white/90 dark:text-black dark:hover:bg-white md:h-[50px] md:rounded-lg md:text-[16px]"
          >
            <DollarSign className="mr-2 h-5 w-5" />
            <span>Donate to Verus</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="ml-2 h-4 w-4 transition-all duration-300 group-hover:translate-x-1"
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

          <Link
            href={env.NEXT_PUBLIC_DISCORD}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex h-[40px] w-fit items-center justify-center rounded-lg border border-blue-200 bg-white/80 px-8 text-[14px] font-medium text-verus-blue backdrop-blur-sm transition-all duration-300 hover:border-blue-300 hover:text-blue-600 dark:border-blue-800/60 dark:bg-blue-950/80 dark:text-blue-300 dark:hover:border-blue-700 dark:hover:text-blue-200 md:h-[50px] md:text-[16px]"
          >
            <IoLogoDiscord className="mr-2 h-5 w-5" />
            <span>Join Discord Community</span>
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

          <Link
            href={env.NEXT_PUBLIC_VERUS_GITHUB}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex h-[40px] w-fit items-center justify-center rounded-lg border border-blue-200 bg-white/80 px-8 text-[14px] font-medium text-verus-blue backdrop-blur-sm transition-all duration-300 hover:border-blue-300 hover:text-blue-600 dark:border-blue-800/60 dark:bg-blue-950/80 dark:text-blue-300 dark:hover:border-blue-700 dark:hover:text-blue-200 md:h-[50px] md:text-[16px]"
          >
            <IoLogoGithub className="mr-2 h-5 w-5" />
            <span>Explore GitHub</span>
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

      {/* Mining and VerusID section */}
      <div className="mb-12 grid grid-cols-1 gap-6 md:grid-cols-2">
        {/* Mining pool section */}
        <div className="border border-blue-100/80 bg-white/80 p-6 shadow-sm backdrop-blur-sm dark:border-blue-900/30 dark:bg-gray-900/50 md:rounded-lg md:p-8">
          <h2 className="mb-4 text-[20px] font-medium text-gray-900 dark:text-white md:text-[24px]">
            Mine with the Verus community pool:
          </h2>

          <div className="mt-4 flex items-center">
            <Link
              href="https://pool.verus.io"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-[18px] font-medium text-blue-600 hover:underline dark:text-blue-400 md:text-[24px]"
            >
              pool.verus.io
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="ml-2 h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </Link>
          </div>
        </div>

        {/* VerusID referral section */}
        <div className="border border-blue-100/80 bg-white/80 p-6 shadow-sm backdrop-blur-sm dark:border-blue-900/30 dark:bg-gray-900/50 md:rounded-lg md:p-8">
          <h2 className="mb-4 text-[20px] font-medium text-gray-900 dark:text-white md:text-[24px]">
            Use as referral when registering VerusID:
          </h2>
          <ContributeCopyButton />
        </div>
      </div>
    </div>
  )
}
