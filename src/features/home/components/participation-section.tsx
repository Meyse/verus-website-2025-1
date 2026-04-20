import {LuCpu, LuPercent} from 'react-icons/lu'

export function ParticipationSection() {
  return (
    <div className="-mx-4 mt-4 flex w-screen flex-col gap-6 md:mx-0 md:mt-4 md:max-w-[1220px] md:flex-row">
      {/* Mining Card */}
      <div className="relative h-[320px] w-full overflow-hidden rounded-none shadow-[0_4px_40px_-12px_rgba(0,0,0,0.1)] dark:shadow-[0_4px_40px_-12px_rgba(0,0,0,0.3)] md:min-h-[420px] md:w-1/2 md:rounded-lg">
        {/* Background gradient and pattern */}
        <div className="absolute inset-0 z-0 bg-gradient-to-br from-blue-50 to-white dark:from-blue-950/40 dark:to-gray-950"></div>
        <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.08),transparent_50%)] dark:bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.15),transparent_50%)]"></div>

        {/* Content */}
        <div className="relative z-10 flex h-full flex-col border border-blue-100/80 p-8 dark:border-blue-900/30 md:p-12">
          <div className="flex items-start">
            <div className="flex-grow">
              <div className="mb-3 flex items-center gap-2">
                <LuCpu className="h-5 w-5 text-verus-blue dark:text-blue-400" />
                <span className="text-[14px] font-medium uppercase tracking-wide text-gray-600 dark:text-gray-300">
                  Participate
                </span>
              </div>
              <h2 className="max-w-[400px] text-[24px] font-medium leading-[1.1] tracking-tight text-verus-blue dark:text-blue-300 md:text-[42px]">
                Mine Verus with mobile phone, CPU & ARM.
              </h2>
              <p className="mt-5 max-w-[400px] text-[15px] font-normal leading-[1.3] tracking-tight text-gray-700 dark:text-gray-300 md:text-[18px]">
                Mine up to 22 ecosystem coins, simultaneously. No specialized
                equipment required.
              </p>
            </div>
          </div>
          <div className="mt-auto flex">
            <a
              href="/mining"
              className="group flex h-[40px] w-fit items-center justify-center rounded-lg border border-blue-200 bg-white/80 px-8 text-[14px] font-medium text-verus-blue backdrop-blur-sm transition-all duration-300 hover:-translate-y-[1px] hover:border-blue-300 hover:text-blue-600 hover:shadow-lg dark:border-blue-800/60 dark:bg-blue-950/80 dark:text-blue-300 dark:hover:border-blue-700 dark:hover:text-blue-200 dark:hover:shadow-blue-950/50 md:h-[50px] md:text-[16px]"
            >
              Start mining
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

          {/* Decorative element */}
          <div className="absolute right-6 top-6 h-14 w-14 rounded-full bg-blue-400/5 backdrop-blur-xl dark:bg-blue-400/10 md:right-10 md:top-10 md:h-20 md:w-20"></div>
          <div className="absolute bottom-10 right-5 h-24 w-24 rounded-full bg-gradient-to-br from-blue-100/20 to-blue-300/10 backdrop-blur-xl dark:from-blue-800/10 dark:to-blue-600/5"></div>
        </div>
      </div>

      {/* Staking Card */}
      <div className="relative h-[320px] w-full overflow-hidden rounded-none shadow-[0_4px_40px_-12px_rgba(0,0,0,0.1)] dark:shadow-[0_4px_40px_-12px_rgba(0,0,0,0.3)] md:min-h-[420px] md:w-1/2 md:rounded-lg">
        {/* Background gradient and pattern */}
        <div className="absolute inset-0 z-0 bg-gradient-to-br from-blue-50 to-white dark:from-blue-950/40 dark:to-gray-950"></div>
        <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_bottom_left,rgba(59,130,246,0.08),transparent_50%)] dark:bg-[radial-gradient(circle_at_bottom_left,rgba(59,130,246,0.15),transparent_50%)]"></div>

        {/* Content */}
        <div className="relative z-10 flex h-full flex-col border border-blue-100/80 p-8 dark:border-blue-900/30 md:p-12">
          <div className="flex items-start">
            <div className="flex-grow">
              <div className="mb-3 flex items-center gap-2">
                <LuPercent className="h-5 w-5 text-verus-blue dark:text-blue-400" />
                <span className="text-[14px] font-medium uppercase tracking-wide text-gray-600 dark:text-gray-300">
                  Earn
                </span>
              </div>
              <h2 className="max-w-[400px] text-[24px] font-medium leading-[1.1] tracking-tight text-verus-blue dark:text-blue-300 md:text-[42px]">
                Run a node.
                <br />
                Start staking.
                <br />
                Get rewarded.
              </h2>
            </div>
          </div>
          <div className="mt-auto flex">
            <a
              href="/staking"
              className="group flex h-[40px] w-fit items-center justify-center rounded-lg border border-blue-200 bg-white/80 px-8 text-[14px] font-medium text-verus-blue backdrop-blur-sm transition-all duration-300 hover:-translate-y-[1px] hover:border-blue-300 hover:text-blue-600 hover:shadow-lg dark:border-blue-800/60 dark:bg-blue-950/80 dark:text-blue-300 dark:hover:border-blue-700 dark:hover:text-blue-200 dark:hover:shadow-blue-950/50 md:h-[50px] md:text-[16px]"
            >
              Start staking
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

          {/* Decorative element */}
          <div className="absolute right-6 top-6 h-14 w-14 rounded-full bg-blue-400/5 backdrop-blur-xl dark:bg-blue-400/10 md:right-10 md:top-10 md:h-20 md:w-20"></div>
          <div className="absolute bottom-10 right-5 h-24 w-24 rounded-full bg-gradient-to-br from-blue-100/20 to-blue-300/10 backdrop-blur-xl dark:from-blue-800/10 dark:to-blue-600/5"></div>
        </div>
      </div>
    </div>
  )
}
