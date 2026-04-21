import {env} from '@/configs/env'
import {FaGithub} from 'react-icons/fa'
import {LuCode, LuHistory} from 'react-icons/lu'

export function EndSection() {
  return (
    <div className="-mx-4 mt-4 flex w-screen flex-col gap-6 md:mx-0 md:mt-4 md:max-w-[1220px] md:flex-row">
      {/* Milestones Card */}
      <div className="relative h-[180px] w-full overflow-hidden rounded-none shadow-[0_4px_40px_-12px_rgba(0,0,0,0.1)] dark:shadow-[0_4px_40px_-12px_rgba(0,0,0,0.3)] md:h-[340px] md:w-1/2 md:rounded-lg">
        {/* Background gradient and pattern */}
        <div className="absolute inset-0 z-0 bg-gradient-to-br from-blue-50/70 to-white dark:from-blue-950/40 dark:to-gray-950"></div>
        <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.06),transparent_70%)] dark:bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.1),transparent_70%)]"></div>

        {/* Decorative elements */}
        <div className="absolute right-6 top-6 z-0 h-14 w-14 rounded-full bg-blue-400/5 backdrop-blur-xl dark:bg-blue-400/10 md:right-10 md:top-10 md:h-20 md:w-20"></div>
        <div className="bg-blue-500/3 absolute -bottom-10 -left-10 z-0 h-40 w-40 rounded-full blur-[60px] dark:bg-blue-500/5"></div>

        {/* Content */}
        <div className="relative z-10 flex h-full flex-col border border-blue-100/80 p-8 dark:border-blue-900/20 md:p-16">
          <div>
            <div className="mb-3 flex items-center gap-2">
              <LuHistory className="h-5 w-5 text-verus-blue dark:text-blue-400" />
              <span className="text-[14px] font-medium uppercase tracking-wide text-gray-600 dark:text-gray-300">
                History
              </span>
            </div>
            <h2 className="max-w-[400px] text-[24px] font-medium leading-[1.1] tracking-tight text-verus-blue dark:text-blue-300 md:text-[40px]">
              Major milestones over the years. 2018-2025.
            </h2>
          </div>
          <div className="mt-4 md:mt-auto">
            <a
              href="/milestones"
              className="group flex h-[40px] w-fit items-center justify-center rounded-lg border border-blue-200 bg-white/80 px-8 text-[14px] font-medium text-verus-blue backdrop-blur-sm transition-all duration-300 hover:-translate-y-[1px] hover:border-blue-300 hover:text-blue-600 hover:shadow-lg dark:border-blue-800/40 dark:bg-blue-950/80 dark:text-blue-300 dark:hover:border-blue-700 dark:hover:text-blue-200 dark:hover:shadow-blue-950/50 md:h-[50px] md:text-[16px]"
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
      <div className="relative h-[180px] w-full overflow-hidden rounded-none shadow-[0_4px_40px_-12px_rgba(0,0,0,0.1)] dark:shadow-[0_4px_40px_-12px_rgba(0,0,0,0.3)] md:h-[340px] md:w-1/2 md:rounded-lg">
        {/* Background gradient and pattern */}
        <div className="absolute inset-0 z-0 bg-gradient-to-br from-blue-50/70 to-white dark:from-blue-950/40 dark:to-gray-950"></div>
        <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_bottom_right,rgba(59,130,246,0.06),transparent_70%)] dark:bg-[radial-gradient(circle_at_bottom_right,rgba(59,130,246,0.1),transparent_70%)]"></div>

        {/* Decorative elements */}
        <div className="absolute right-6 top-6 z-0 h-14 w-14 rounded-full bg-blue-400/5 backdrop-blur-xl dark:bg-blue-400/10 md:right-10 md:top-10 md:h-20 md:w-20"></div>
        <div className="bg-blue-500/3 absolute -bottom-10 -left-10 z-0 h-40 w-40 rounded-full blur-[60px] dark:bg-blue-500/5"></div>

        {/* Content */}
        <div className="relative z-10 flex h-full flex-col border border-blue-100/80 p-8 dark:border-blue-900/20 md:p-16">
          <div>
            <div className="mb-3 flex items-center gap-2">
              <LuCode className="h-5 w-5 text-verus-blue dark:text-blue-400" />
              <span className="text-[14px] font-medium uppercase tracking-wide text-gray-600 dark:text-gray-300">
                Open Source
              </span>
            </div>
            <h2 className="max-w-[400px] text-[24px] font-medium leading-[1.1] tracking-tight text-verus-blue dark:text-blue-300 md:text-[40px]">
              Verus is 100% open-source.
            </h2>
          </div>
          <div className="mt-auto">
            <a
              href={env.NEXT_PUBLIC_VERUS_GITHUB}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex h-[40px] w-fit items-center justify-center gap-2 rounded-lg border border-blue-200 bg-white/80 px-8 text-[14px] font-medium text-verus-blue backdrop-blur-sm transition-all duration-300 hover:-translate-y-[1px] hover:border-blue-300 hover:text-blue-600 hover:shadow-lg dark:border-blue-800/40 dark:bg-blue-950/80 dark:text-blue-300 dark:hover:border-blue-700 dark:hover:text-blue-200 dark:hover:shadow-blue-950/50 md:h-[50px] md:text-[16px]"
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
