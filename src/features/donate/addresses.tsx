'use client'

import {useState} from 'react'
import Image from 'next/image'
import Link from 'next/link'

import {env} from '@/configs/env'
import {Check, Copy} from 'lucide-react'
import {IoLogoDiscord} from 'react-icons/io5'

interface DonationAddress {
  currency: string
  address: string
  logo: string
}

export function DonationAddresses() {
  const [copiedAddress, setCopiedAddress] = useState<string | null>(null)

  const addresses: DonationAddress[] = [
    {
      currency: 'VRSC',
      address: 'Verus Coin Foundation@',
      logo: '/img/verus-icon.svg',
    },
    {
      currency: 'BTC',
      address: '1FoRNRPTuXHseNPRc54yLwyeVrVGJgH5eo',
      logo: '/img/donate/btc.svg',
    },
    {
      currency: 'ETH',
      address: '0xFA825bAd52101bEC6c2ee06b88f47E8DF03f66Eb',
      logo: '/img/donate/eth.svg',
    },
    {
      currency: 'KMD',
      address: 'RQ5cSwGkWM6SiNkd5F46SUJrG7wrxRwrTc',
      logo: '/img/donate/kmd.png',
    },
  ]

  const copyAddress = async (address: string) => {
    await navigator.clipboard.writeText(address)
    setCopiedAddress(address)

    // Reset after 2 seconds
    setTimeout(() => {
      setCopiedAddress(null)
    }, 2000)
  }

  return (
    <div className="px-4 md:px-0">
      <div className="mb-8">
        <h2 className="text-[20px] font-medium text-gray-900 dark:text-white md:text-[28px]">
          Support the Verus Ecosystem
        </h2>
      </div>

      {/* Desktop layout with grid */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {/* Donation addresses - takes 1/2 of the width on desktop */}
        <div className="lg:col-span-1">
          <h3 className="mb-4 text-[16px] font-medium text-gray-900 dark:text-white md:text-[20px]">
            Donation Options
          </h3>
          <div className="grid grid-cols-1 gap-6">
            {addresses.map((item) => (
              <div
                key={item.currency}
                className="rounded-lg border border-blue-100/80 bg-white/80 p-4 shadow-sm backdrop-blur-sm dark:border-blue-900/30 dark:bg-gray-900/50 md:p-6"
              >
                <div className="mb-3 flex items-center gap-4 md:mb-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 p-2 dark:bg-gray-800">
                    <Image
                      src={item.logo}
                      alt={`${item.currency} logo`}
                      width={6}
                      height={6}
                      className="size-6"
                      onError={(e) => {
                        // Fallback for missing logos
                        ;(e.target as HTMLImageElement).src =
                          '/img/donate/crypto-default.svg'
                      }}
                    />
                  </div>
                  <div>
                    <h3 className="text-[16px] font-medium text-gray-900 dark:text-white md:text-[18px]">
                      {item.currency}
                      {item.currency === 'VRSC' && (
                        <span className="ml-2 text-[14px] font-normal text-gray-500 dark:text-gray-400">
                          (Supports all Verus currencies)
                        </span>
                      )}
                    </h3>
                  </div>
                </div>

                <div className="flex flex-col">
                  <div className="mb-2 flex">
                    <button
                      onClick={() => copyAddress(item.address)}
                      className="ml-auto flex items-center gap-1.5 rounded-md bg-gray-100 px-3 py-1.5 text-xs text-gray-600 transition-colors hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700"
                      aria-label={`Copy ${item.currency} address`}
                    >
                      {copiedAddress === item.address ? (
                        <>
                          <Check className="h-3.5 w-3.5 text-green-500" />
                          <span>Copied!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="h-3.5 w-3.5" />
                          <span>Copy</span>
                        </>
                      )}
                    </button>
                  </div>
                  <div className="break-all rounded-lg border border-gray-200 bg-gray-50 p-3 font-mono text-[12px] text-gray-700 dark:border-gray-700 dark:bg-gray-800/70 dark:text-gray-300 sm:text-[13px]">
                    {item.address}
                  </div>
                </div>

                {item.currency === 'VRSC' && (
                  <p className="mt-3 text-[13px] text-gray-600 dark:text-gray-400">
                    This friendly address supports donations of any currency on
                    the Verus network.
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Right side panel - takes 1/2 of the width on desktop */}
        <div className="flex flex-col gap-6 lg:col-span-1">
          {/* Why Donations Matter section */}
          <div className="border border-blue-100/80 bg-white/80 p-5 shadow-sm backdrop-blur-sm dark:border-blue-900/30 dark:bg-gray-900/50 md:rounded-lg md:p-6">
            <h2 className="mb-3 text-[18px] font-medium text-gray-900 dark:text-white md:text-[22px]">
              Why Donations Matter
            </h2>
            <p className="text-[14px] text-gray-600 dark:text-gray-300 md:text-[16px]">
              Unlike many crypto projects, Verus was launched with no ICO, no
              premine, and no ongoing dev tax. This ensures true
              decentralization, but it means development depends entirely on
              community support.
            </p>
            <p className="mt-3 text-[14px] text-gray-600 dark:text-gray-300 md:text-[16px]">
              Your donations directly support:
            </p>
            <ul className="ml-5 mt-2 list-disc space-y-1 text-[14px] text-gray-600 dark:text-gray-300 md:text-[16px]">
              <li>Core protocol development</li>
              <li>Infrastructure maintenance</li>
              <li>Documentation and resources</li>
              <li>Community initiatives</li>
              <li>Research for future advancements</li>
            </ul>
          </div>

          {/* Discord community join section */}
          <div className="border border-blue-100/80 bg-white/80 p-5 shadow-sm backdrop-blur-sm dark:border-blue-900/30 dark:bg-gray-900/50 md:rounded-lg md:p-6">
            <h2 className="mb-3 text-[18px] font-medium text-gray-900 dark:text-white md:text-[22px]">
              Contribute Your Skills
            </h2>
            <p className="mb-4 text-[14px] text-gray-600 dark:text-gray-300 md:text-[16px]">
              Join the Discord community to contribute beyond donations. Share
              your skills, participate in discussions, develop dApps, and help
              shape the future of Verus.
            </p>
            <Link
              href={env.NEXT_PUBLIC_DISCORD}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex h-[40px] w-fit items-center justify-center rounded-lg border border-blue-200 bg-white/80 px-8 text-[14px] font-medium text-verus-blue backdrop-blur-sm transition-all duration-300 hover:border-blue-300 hover:text-blue-600 dark:border-blue-800/60 dark:bg-blue-950/80 dark:text-blue-300 dark:hover:border-blue-700 dark:hover:text-blue-200 md:h-[50px] md:text-[16px]"
            >
              Join Discord
              <IoLogoDiscord className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-[1px] md:h-6 md:w-6" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
