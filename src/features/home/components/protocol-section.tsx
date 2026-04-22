import {IoMdDownload} from 'react-icons/io'

export function ProtocolSection() {
  return (
    <div className="w-full">
      <div className="flex w-full flex-col items-start justify-center px-10 py-20 md:px-14 md:py-32">
        <div className="max-w-[760px]">
          <h2 className="mb-4 text-[28px] font-medium leading-[1.2] tracking-tight text-gray-800 dark:text-white md:mb-8 md:text-[44px]">
            Horizontal scalability: multi-chain architecture
          </h2>
          <p className="text-[15px] font-normal leading-relaxed tracking-normal text-gray-600 dark:text-gray-300 md:text-[17px]">
            Scale out, not up. Launch interoperable blockchains as needed
            rather than overloading a single chain. Think millions of servers,
            not one super-server.
          </p>

          <div className="mt-8 flex flex-col gap-4 md:flex-row">
            <a
              href="/intro"
              className="group flex h-[40px] items-center justify-center rounded-lg border border-verus-blue bg-verus-blue px-6 text-[14px] font-medium text-white backdrop-blur-sm transition-all duration-300 hover:-translate-y-[1px] hover:bg-verus-blue/90 hover:shadow-lg dark:border-verus-blue dark:bg-verus-blue dark:text-white dark:hover:bg-verus-blue/90 md:h-[50px] md:text-[16px]"
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
