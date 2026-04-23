import {ETHEREUM_BRIDGE_CONTRACT_URL} from '@/features/ethereum-bridge/constants'
import {ExternalLink} from 'lucide-react'

import {Button} from '@/components/ui/button'

export function BridgeSection() {
  return (
    <div className="w-full border-t border-gray-200 dark:border-gray-800">
      <div className="flex w-full flex-col items-start justify-center px-10 py-20 md:px-14 md:py-32">
        <div className="max-w-[760px]">
          <h2 className="mb-4 text-[28px] font-medium leading-[1.2] tracking-tight text-gray-800 dark:text-white md:mb-8 md:text-[44px]">
            Connecting Verus and Ethereum, trustless and non-custodial
          </h2>
          <p className="text-[15px] font-normal leading-relaxed tracking-normal text-gray-600 dark:text-gray-300 md:text-[17px]">
            Move assets between Verus and Ethereum without custodians, using a
            bridge secured by consensus rather than trusted intermediaries.
          </p>

          <div className="mt-8 flex flex-col gap-4 md:flex-row">
            <Button asChild variant="verusPrimary" size="verus">
              <a href="/ethereum-bridge">
                Explore the bridge
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

            <Button asChild variant="verusSecondary" size="verus">
              <a
                href={ETHEREUM_BRIDGE_CONTRACT_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                See contract on Ethereum
                <ExternalLink className="h-4 w-4 opacity-60 transition-opacity duration-300 group-hover:opacity-100" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
