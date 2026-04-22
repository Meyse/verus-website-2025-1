import {env} from '@/configs/env'
import {FaGithub} from 'react-icons/fa'

export function EndSection() {
  return (
    <div className="grid w-full grid-cols-1 border-t border-gray-200 dark:border-gray-800 md:grid-cols-2">
      {/* Milestones Card */}
      <div className="relative h-[180px] w-full overflow-hidden md:h-[340px]">
        <div className="absolute inset-0 z-0 bg-gradient-to-br from-blue-50 to-white dark:from-blue-950/40 dark:to-gray-950"></div>

        {/* Content */}
        <div className="relative z-10 flex h-full flex-col p-8 md:p-16">
          <div>
            <h2 className="max-w-[400px] text-[24px] font-medium leading-[1.1] tracking-tight text-gray-800 dark:text-white md:text-[40px]">
              Major milestones over the years
            </h2>
          </div>
          <div className="mt-4 md:mt-auto">
            <a
              href="/milestones"
              className="group flex h-[40px] w-fit items-center justify-center rounded-lg border border-gray-300 bg-white/90 px-8 text-[14px] font-medium text-gray-800 backdrop-blur-sm transition-all duration-300 hover:-translate-y-[1px] hover:border-gray-400 hover:bg-white hover:shadow-lg dark:border-blue-800/40 dark:bg-blue-950/40 dark:text-blue-300 dark:hover:border-blue-700/60 dark:hover:text-blue-200 md:h-[50px] md:text-[16px]"
            >
              See milestones
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
            </a>
          </div>
        </div>
      </div>

      {/* Open Source Card */}
      <div className="relative h-[180px] w-full overflow-hidden border-t border-gray-200 dark:border-gray-800 md:h-[340px] md:border-l md:border-t-0">
        <div className="absolute inset-0 z-0 bg-gradient-to-br from-blue-50 to-white dark:from-blue-950/40 dark:to-gray-950"></div>

        {/* Content */}
        <div className="relative z-10 flex h-full flex-col p-8 md:p-16">
          <div>
            <h2 className="max-w-[400px] text-[24px] font-medium leading-[1.1] tracking-tight text-gray-800 dark:text-white md:text-[40px]">
              Verus is 100% open-source
            </h2>
          </div>
          <div className="mt-auto">
            <a
              href={env.NEXT_PUBLIC_VERUS_GITHUB}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex h-[40px] w-fit items-center justify-center gap-2 rounded-lg border border-gray-300 bg-white/90 px-8 text-[14px] font-medium text-gray-800 backdrop-blur-sm transition-all duration-300 hover:-translate-y-[1px] hover:border-gray-400 hover:bg-white hover:shadow-lg dark:border-blue-800/40 dark:bg-blue-950/40 dark:text-blue-300 dark:hover:border-blue-700/60 dark:hover:text-blue-200 md:h-[50px] md:text-[16px]"
            >
              Go to GitHub
              <FaGithub className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
