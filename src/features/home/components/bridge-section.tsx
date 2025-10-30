export function BridgeSection() {
  return (
    <div className="relative -mx-4 mt-4 h-[200px] w-screen overflow-hidden shadow-[0_4px_40px_-12px_rgba(0,0,0,0.1)] dark:shadow-[0_4px_40px_-12px_rgba(0,0,0,0.3)] md:mx-0 md:mt-4 md:h-auto md:w-full md:max-w-[1220px] md:rounded-lg">
      {/* Background gradient and pattern */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-blue-50/70 to-white dark:from-blue-950/10 dark:to-gray-950"></div>
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_top_right,rgba(37,99,235,0.07),transparent_70%)] dark:bg-[radial-gradient(circle_at_top_right,rgba(37,99,235,0.07),transparent_70%)]"></div>

      {/* Decorative blurs */}
      <div className="bg-blue-500/3 absolute bottom-0 right-0 z-0 h-[400px] w-[400px] translate-x-1/3 translate-y-1/3 transform rounded-full blur-[80px] dark:bg-blue-500/5"></div>
      <div className="bg-blue-500/3 absolute left-0 top-0 z-0 h-[300px] w-[300px] -translate-x-1/3 -translate-y-1/3 transform rounded-full blur-[60px] dark:bg-blue-500/5"></div>

      <div className="relative z-10 flex h-full flex-col border border-blue-100/80 p-8 dark:border-blue-900/20 md:flex-row md:justify-between md:p-16">
        <div>
          <h2 className="max-w-[600px] text-[22px] font-medium leading-[1.1] tracking-tight text-gray-900 dark:text-white md:text-[40px]">
            Connecting Verus and Ethereum—trustless & non-custodial.
          </h2>
        </div>

        {/* Desktop button */}
        <div className="relative z-20 hidden flex-col justify-center md:flex">
          <a
            href="/ethereum-bridge"
            className="group flex h-[40px] w-fit items-center justify-center rounded-lg border border-blue-200 bg-white/80 px-8 text-[14px] font-medium text-blue-600 backdrop-blur-sm transition-all duration-300 hover:-translate-y-[1px] hover:border-blue-300 hover:text-blue-700 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500/30 dark:border-blue-800/60 dark:bg-blue-950/80 dark:text-blue-300 dark:hover:border-blue-700 dark:hover:text-blue-200 dark:hover:shadow-blue-950/50 md:h-[50px] md:text-[16px]"
          >
            Explore the bridge
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

        {/* Mobile button */}
        <div className="relative z-20 mt-auto md:hidden">
          <a
            href="/ethereum-bridge"
            className="group flex h-[40px] w-fit items-center justify-center rounded-lg border border-blue-200 bg-white/80 px-8 text-[14px] font-medium text-blue-600 backdrop-blur-sm transition-all duration-300 hover:-translate-y-[1px] hover:border-blue-300 hover:text-blue-700 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500/30 dark:border-blue-800/60 dark:bg-blue-950/80 dark:text-blue-300 dark:hover:border-blue-700 dark:hover:text-blue-200 dark:hover:shadow-blue-950/50 md:h-[50px] md:text-[16px]"
          >
            Explore the bridge
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
  )
}
