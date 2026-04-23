import {Button} from '@/components/ui/button'

export function ParticipationSection() {
  return (
    <div className="grid w-full grid-cols-1 border-t border-gray-200 dark:border-gray-800 md:grid-cols-2">
      {/* Mining Card */}
      <div className="relative h-[300px] w-full overflow-hidden md:h-[340px]">
        <div className="absolute inset-0 z-0 bg-gradient-to-br from-blue-50 to-white dark:from-blue-950/40 dark:to-gray-950"></div>

        {/* Content */}
        <div className="relative z-10 flex h-full flex-col p-8 md:p-12">
          <div className="flex items-start">
            <div className="flex-grow">
              <h2 className="mb-4 font-display font-medium tracking-tight text-gray-800 dark:text-white md:text-[30px]">
                Mine with mobile phone, CPU & ARM
              </h2>
              <p className="max-w-[500px] text-[15px] font-normal leading-relaxed tracking-normal text-gray-600 dark:text-gray-300 md:text-[17px]">
                Mine up to 22 ecosystem coins, simultaneously. No specialized
                equipment required.
              </p>
            </div>
          </div>
          <div className="mt-auto flex">
            <Button asChild variant="verusSecondary" size="verusWide">
              <a href="/mining">
                Start mining
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
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
            </Button>
          </div>
        </div>
      </div>

      {/* Staking Card */}
      <div className="relative h-[300px] w-full overflow-hidden border-t border-gray-200 dark:border-gray-800 md:h-[340px] md:border-l md:border-t-0">
        <div className="absolute inset-0 z-0 bg-gradient-to-br from-blue-50 to-white dark:from-blue-950/40 dark:to-gray-950"></div>

        {/* Content */}
        <div className="relative z-10 flex h-full flex-col p-8 md:p-12">
          <div className="flex items-start">
            <div className="flex-grow">
              <h2 className="mb-4 font-display font-medium tracking-tight text-gray-800 dark:text-white md:text-[30px]">
                Staking where anyone can participate
              </h2>
              <p className="max-w-[500px] text-[15px] font-normal leading-relaxed tracking-normal text-gray-600 dark:text-gray-300 md:text-[17px]">
                Stake with any amount. Funds stay unlocked and flexible while
                you help secure the network and earn rewards.
              </p>
            </div>
          </div>
          <div className="mt-auto flex">
            <Button asChild variant="verusSecondary" size="verusWide">
              <a href="/staking">
                Start staking
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
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
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
