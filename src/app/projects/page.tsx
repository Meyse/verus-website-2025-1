// Projects Page - Showcase of projects using Verus technology
import type {Metadata} from 'next'

import Link from 'next/link'

import {env} from '@/configs/env'
import {ProjectList} from '@/features/projects/project-list'
import {IoLogoDiscord} from 'react-icons/io5'

import {BgWrapper} from '@/components/bg-wrapper'

export const metadata: Metadata = {
  title: 'Projects Built with Verus',
  description:
    'Explore applications, wallets, dashboards, and other projects leveraging the Verus Protocol and its ecosystem.',
  keywords:
    'Verus projects, blockchain applications, cryptocurrency projects, Web3 applications, dApps, blockchain ecosystem',
}

export default function ProjectsPage() {
  return (
    <BgWrapper size="small">
      <div className="flex flex-col">
        <div className="flex-grow py-8 md:py-16">
          <div className="mx-auto max-w-[1220px] md:px-8">
            <div className="mb-8 px-4 md:mb-16 md:px-0">
              <h1 className="text-[22px] font-medium leading-snug tracking-tight text-verus-blue dark:text-blue-400 md:text-[40px]">
                Projects built with Verus.
              </h1>
              <p className="mt-4 max-w-[800px] text-[16px] text-gray-700 dark:text-gray-300 md:text-[20px]">
                Explore applications, wallets, dashboards, and other projects
                leveraging the Verus Protocol and its ecosystem.
              </p>
            </div>

            <ProjectList />

            {/* Project submission info section */}
            <div className="mt-16 px-4 md:px-0">
              <div className="border border-blue-100/80 bg-white/80 p-6 shadow-[0_4px_40px_-12px_rgba(0,0,0,0.1)] backdrop-blur-sm dark:border-blue-900/30 dark:bg-gray-900/50 dark:shadow-[0_4px_40px_-12px_rgba(0,0,0,0.3)] md:rounded-lg md:p-8">
                <h2 className="mb-3 text-[18px] font-medium text-gray-900 dark:text-white md:text-[24px]">
                  Want your project listed here?
                </h2>
                <p className="mb-4 text-[14px] text-gray-600 dark:text-gray-300 md:text-[16px]">
                  If you have built a project using Verus technology and would
                  like to have it considered for listing on this page, please
                  visit our Discord community and reach out in the #marketing
                  channel to discuss your project with the community.
                </p>
                <Link
                  href={env.NEXT_PUBLIC_DISCORD}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex h-[40px] w-fit items-center justify-center gap-2 rounded-lg border border-blue-200 bg-white/80 px-6 text-[14px] font-medium text-verus-blue backdrop-blur-sm transition-all duration-300 hover:border-blue-300 hover:text-blue-600 dark:border-blue-800/60 dark:bg-blue-950/80 dark:text-blue-300 dark:hover:border-blue-700 dark:hover:text-blue-200 md:h-[50px] md:text-[16px]"
                >
                  Join Discord
                  <IoLogoDiscord className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-[1px] md:h-6 md:w-6" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </BgWrapper>
  )
}
