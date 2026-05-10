// Project card component for displaying individual projects

import Link from 'next/link'

import {ExternalLink} from 'lucide-react'

export type ProjectCategory = 'Dashboard' | 'Technology' | 'Wallet'

export interface ProjectCardProps {
  name: string
  description: string
  url: string
  category: ProjectCategory
}

export function ProjectCard({
  name,
  description,
  url,
  category,
}: ProjectCardProps) {
  return (
    <div className="relative flex h-[280px] w-full flex-col overflow-hidden border border-blue-100/80 bg-white/80 p-6 shadow-[0_4px_40px_-12px_rgba(0,0,0,0.1)] backdrop-blur-sm transition-all duration-300 dark:border-blue-900/30 dark:bg-gray-900/50 dark:shadow-[0_4px_40px_-12px_rgba(0,0,0,0.3)] md:rounded-lg">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.08),transparent_50%)] dark:bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.15),transparent_50%)]"></div>

      <div className="relative flex flex-grow flex-col">
        <div className="mb-2 flex items-start justify-between">
          <h3 className="text-[18px] font-medium text-gray-900 dark:text-white md:text-[22px]">
            {name}
          </h3>
          <span className="ml-2 whitespace-nowrap rounded-full bg-blue-100/50 px-2.5 py-1 text-xs font-medium text-blue-800 dark:bg-blue-900/30 dark:text-blue-300">
            {category}
          </span>
        </div>

        <p className="line-clamp-4 overflow-hidden text-[14px] text-gray-600 dark:text-gray-300 md:text-[15px]">
          {description}
        </p>

        <div className="mt-auto pt-4">
          <Link
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex h-[40px] w-fit items-center justify-center gap-2 rounded-lg border border-blue-200 bg-white/80 px-6 text-[14px] font-medium text-verus-blue backdrop-blur-sm transition-all duration-300 hover:border-blue-300 hover:text-blue-600 dark:border-blue-800/60 dark:bg-blue-950/80 dark:text-blue-300 dark:hover:border-blue-700 dark:hover:text-blue-200"
          >
            Visit Project
            <ExternalLink className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </div>
  )
}
