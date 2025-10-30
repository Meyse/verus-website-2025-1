import { IoMdDownload } from 'react-icons/io'

export function ProtocolSection() {
  return (
    <div className="-mx-4 mt-4 w-screen rounded-none bg-gradient-to-b from-blue-50 to-white shadow-[0_4px_40px_-12px_rgba(0,0,0,0.1)] dark:bg-gray-950 dark:bg-none dark:shadow-[0_4px_40px_-12px_rgba(0,0,0,0.3)] md:mx-0 md:mt-4 md:max-w-[1220px] md:rounded-lg">
      <div className="relative h-full w-full overflow-hidden px-4 py-16 backdrop-blur-sm md:px-8 md:py-24">
        {/* Background Pattern - Adds visual interest */}
        <div className="absolute inset-0">
          <div
            className="absolute left-0 top-0 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 transform rounded-full bg-blue-500/5 blur-[100px]"
            style={{willChange: 'transform'}}
          />
          <div
            className="absolute bottom-0 right-0 h-[400px] w-[400px] translate-x-1/2 translate-y-1/2 transform rounded-full bg-indigo-500/5 blur-[100px]"
            style={{willChange: 'transform'}}
          />
        </div>

        <div className="relative z-10 flex flex-col items-center">
          <div className="mb-8 md:mb-16">
            <h2 className="mb-4 text-center text-[28px] font-medium leading-[1.2] tracking-tight text-gray-800 dark:text-white md:mb-8 md:max-w-[900px] md:text-[55px]">
              Horizontal Scalability: Multi-Chain Architecture
            </h2>
            <p className="text-center text-[16px] font-normal leading-relaxed tracking-tight text-gray-600 dark:text-gray-300 md:max-w-[800px] md:text-[20px]">
              Scale out, not up. Launch interoperable blockchains as needed rather than overloading a single chain. Think millions of servers, not one super-server.
            </p>
          </div>

          <div className="flex flex-col gap-4 md:flex-row">
            {/* Primary Button - Light/Dark Variants */}
            <a
              href="/intro"
              className="group flex h-[40px] items-center justify-center rounded-lg border border-blue-500 bg-blue-600 px-6 text-[14px] font-medium text-white backdrop-blur-sm transition-all duration-300 hover:-translate-y-[1px] hover:bg-blue-700 hover:shadow-lg dark:border-white/60 dark:bg-white/90 dark:text-black dark:hover:bg-white md:h-[50px] md:text-[16px]"
            >
              Learn more about the Verus Protocol
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

            {/* Secondary Button - Light/Dark Variants */}
            <a
              href="/papers"
              className="group flex h-[40px] items-center justify-center gap-2 rounded-lg border border-gray-300 bg-white/90 px-6 text-[14px] font-medium text-gray-800 backdrop-blur-sm transition-all duration-300 hover:-translate-y-[1px] hover:border-gray-400 hover:bg-white hover:shadow-lg dark:border-blue-800/40 dark:bg-blue-950/40 dark:text-blue-300 dark:hover:border-blue-700/60 dark:hover:text-blue-200 md:h-[50px] md:text-[16px]"
            >
              <IoMdDownload className="h-5 w-5 transition-transform duration-300 group-hover:translate-y-[1px]" />
              Download Vision Paper
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
