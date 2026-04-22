import Image from 'next/image'

import {env} from '@/configs/env'
import {IoLogoDiscord} from 'react-icons/io5'

export function GetStartedSection() {
  return (
    <div className="grid w-full grid-cols-1 border-t border-gray-200 dark:border-gray-800 md:grid-cols-[1fr,1fr]">
      {/* Wallet Section */}
      <div className="relative h-[340px] w-full overflow-hidden border-gray-200 dark:border-gray-800 md:h-[490px] md:border-r">
        <div className="absolute inset-0 z-0 bg-gradient-to-br from-blue-50 to-white dark:from-blue-950/40 dark:to-gray-950"></div>

        {/* Content */}
        <div className="relative z-10 flex h-full flex-col p-8 md:p-16">
          <div>
            <h2 className="mb-4 text-[24px] font-medium leading-[1.1] tracking-tight text-gray-800 dark:text-white md:text-[40px]">
              Choose a wallet
            </h2>
            <p className="mb-8 max-w-[400px] text-[15px] font-normal leading-relaxed tracking-normal text-gray-600 dark:text-gray-300 md:text-[17px]">
              Manage your funds and connect with the Verus protocol and other
              connected networks.
            </p>
            <a
              href="/wallet"
              className="group flex h-[40px] w-fit items-center justify-center rounded-lg border border-gray-300 bg-white/90 px-8 text-[14px] font-medium text-gray-800 backdrop-blur-sm transition-all duration-300 hover:-translate-y-[1px] hover:border-gray-400 hover:bg-white hover:shadow-lg dark:border-blue-800/40 dark:bg-blue-950/40 dark:text-blue-300 dark:hover:border-blue-700/60 dark:hover:text-blue-200 md:h-[50px] md:text-[16px]"
            >
              Choose wallet
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
          <div className="absolute bottom-0 left-0 right-0 flex items-end justify-center">
            <Image
              src="/img/wallets-small.png"
              alt="Verus Wallets"
              width={600}
              height={360}
              className="h-auto w-[70%]"
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col md:h-[490px]">
        {/* Get VRSC Section */}
        <div className="relative h-[190px] w-full overflow-hidden border-t border-gray-200 dark:border-gray-800 md:h-1/2 md:border-t-0">
          <div className="absolute inset-0 z-0 bg-gradient-to-br from-blue-50 to-white dark:from-blue-950/40 dark:to-gray-950"></div>

          {/* Content */}
          <div className="relative z-10 flex h-full flex-col justify-between p-8 md:p-12">
            <div>
              <h2 className="text-[24px] font-medium leading-[1.1] tracking-tight text-gray-800 dark:text-white md:text-[36px]">
                Get $VRSC here
              </h2>
            </div>
            <div>
              <a
                href="/get-vrsc"
                className="group flex h-[40px] w-fit items-center justify-center rounded-lg border border-gray-300 bg-white/90 px-8 text-[14px] font-medium text-gray-800 backdrop-blur-sm transition-all duration-300 hover:-translate-y-[1px] hover:border-gray-400 hover:bg-white hover:shadow-lg dark:border-blue-800/40 dark:bg-blue-950/40 dark:text-blue-300 dark:hover:border-blue-700/60 dark:hover:text-blue-200 md:h-[50px] md:text-[16px]"
              >
                How to get VRSC
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

        {/* Discord Section */}
        <div className="relative h-[190px] w-full overflow-hidden border-t border-gray-200 dark:border-gray-800 md:h-1/2">
          <div className="absolute inset-0 z-0 bg-[#5865F2] dark:bg-[#404EED]"></div>

          {/* Content */}
          <div className="relative z-10 flex h-full flex-col justify-between p-8 md:p-12">
            <h2 className="mb-4 flex items-center gap-4 text-[24px] font-medium leading-[1.1] tracking-tight text-white md:mb-0 md:text-[36px]">
              <IoLogoDiscord className="h-10 w-10" />
              Join the Discord
            </h2>
            <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:gap-4">
              <a
                href={env.NEXT_PUBLIC_DISCORD}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-[40px] w-full items-center justify-center rounded-lg border border-white/10 bg-white/90 px-8 text-[14px] font-medium text-[#5865F2] backdrop-blur-sm transition-all duration-300 hover:-translate-y-[1px] hover:bg-white hover:shadow-lg hover:shadow-indigo-700/20 sm:w-fit md:h-[50px] md:text-[16px]"
              >
                Enter Discord server
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
              <span className="text-[12px] text-white/90 md:text-[14px]">
                More than 11k joined before you!
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
