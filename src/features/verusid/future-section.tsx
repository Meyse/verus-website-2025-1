export function FutureSection() {
  return (
    <div className="relative -mx-4 mt-4 w-screen md:mx-0 md:mt-4 md:max-w-[1220px]">
      {/* Background decorative elements */}
      <div className="absolute left-10 top-20 -z-10 h-60 w-60 rounded-full bg-blue-500/5 blur-[80px] dark:bg-blue-500/5"></div>
      <div className="absolute -top-10 right-20 -z-10 h-60 w-60 rounded-full bg-blue-500/5 blur-[80px] dark:bg-blue-500/5"></div>
      <div className="absolute bottom-10 right-10 -z-10 h-60 w-60 rounded-full bg-blue-500/5 blur-[80px] dark:bg-blue-500/5"></div>

      <div className="relative w-full overflow-hidden shadow-[0_4px_40px_-12px_rgba(0,0,0,0.1)] dark:shadow-[0_4px_40px_-12px_rgba(0,0,0,0.3)] md:rounded-lg">
        {/* Background gradient and pattern */}
        <div className="absolute inset-0 z-0 bg-gradient-to-br from-blue-50/70 to-white dark:from-blue-950/10 dark:to-gray-950"></div>
        <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_top_right,rgba(37,99,235,0.07),transparent_70%)] dark:bg-[radial-gradient(circle_at_top_right,rgba(37,99,235,0.07),transparent_70%)]"></div>

        {/* Decorative elements */}
        <div className="bg-blue-500/3 absolute bottom-0 right-0 z-0 h-[400px] w-[400px] translate-x-1/3 translate-y-1/3 transform rounded-full blur-[80px] dark:bg-blue-500/5"></div>
        <div className="bg-blue-500/3 absolute left-0 top-0 z-0 h-[300px] w-[300px] -translate-x-1/3 -translate-y-1/3 transform rounded-full blur-[60px] dark:bg-blue-500/5"></div>

        {/* Content */}
        <div className="relative z-10 border border-blue-100/80 p-8 pt-12 dark:border-blue-900/20 md:p-16">
          <div className="mx-auto flex max-w-[800px] flex-col items-center text-center">
            <h2 className="mb-4 text-[22px] font-medium leading-[1.1] tracking-tight text-gray-800 dark:text-white md:text-[40px]">
              Building for tomorrow, available today.
            </h2>
            <p className="mb-12 text-[14px] leading-[1.8] tracking-tight text-gray-700 dark:text-gray-300 md:text-[15px]">
              While decentralized applications using VerusID are still in
              development, you can already create your sovereign digital
              identity, secure your assets, and take control of your data. Join
              the worldwide community in building a future where users control
              their own data, privacy is the default, and digital freedom is
              accessible to all.
            </p>
            <div className="flex flex-col gap-4 md:flex-row">
              <a
                href="/wallet"
                className="group flex h-[40px] items-center justify-center rounded-lg border border-blue-500 bg-blue-600 px-6 text-[14px] font-medium text-white backdrop-blur-sm transition-all duration-300 hover:-translate-y-[1px] hover:bg-blue-700 hover:shadow-lg dark:border-white/60 dark:bg-white/90 dark:text-black dark:hover:bg-white md:h-[50px] md:text-[16px]"
              >
                Download wallet
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
              </a>
              <a
                href="/build/verusid"
                className="group flex h-[40px] w-fit items-center justify-center rounded-lg border border-blue-200 bg-white/80 px-8 text-[14px] font-medium text-verus-blue backdrop-blur-sm transition-all duration-300 hover:-translate-y-[1px] hover:border-blue-300 hover:text-blue-600 hover:shadow-lg dark:border-blue-800/60 dark:bg-blue-950/80 dark:text-blue-300 dark:hover:border-blue-700 dark:hover:text-blue-200 dark:hover:shadow-blue-950/50 md:h-[50px] md:text-[16px]"
              >
                Build with VerusID
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
      </div>
    </div>
  )
}
