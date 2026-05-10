'use client'

import {useState} from 'react'
import Image from 'next/image'
import Link from 'next/link'

import {env} from '@/configs/env'
import {Check, Copy, ExternalLink, Heart} from 'lucide-react'
import {IoLogoDiscord} from 'react-icons/io5'

import {cn} from '@/lib/utils'

import {Button} from '@/components/ui/button'

interface DonationAddress {
  currency: string
  address: string
  logo: string
  explorerHref: string
}

const addresses: DonationAddress[] = [
  {
    currency: 'VRSC',
    address: 'Verus Coin Foundation@',
    logo: '/img/verus-icon.svg',
    explorerHref: `${env.NEXT_PUBLIC_VERUS_EXPLORER}/address/${encodeURIComponent('Verus Coin Foundation@')}`,
  },
  {
    currency: 'BTC',
    address: '1FoRNRPTuXHseNPRc54yLwyeVrVGJgH5eo',
    logo: '/img/donate/bitcoin-btc-logo-2.svg',
    explorerHref:
      'https://www.blockchain.com/btc/address/1FoRNRPTuXHseNPRc54yLwyeVrVGJgH5eo',
  },
  {
    currency: 'ETH',
    address: '0xFA825bAd52101bEC6c2ee06b88f47E8DF03f66Eb',
    logo: '/img/donate/eth.svg',
    explorerHref:
      'https://etherscan.io/address/0xFA825bAd52101bEC6c2ee06b88f47E8DF03f66Eb',
  },
  {
    currency: 'KMD',
    address: 'RQ5cSwGkWM6SiNkd5F46SUJrG7wrxRwrTc',
    logo: '/img/donate/kmd.png',
    explorerHref:
      'https://kmdexplorer.io/address/RQ5cSwGkWM6SiNkd5F46SUJrG7wrxRwrTc',
  },
]

const supportItems = [
  'Core protocol development',
  'Infrastructure maintenance',
  'Documentation and resources',
  'Community initiatives',
  'Research for future advancements',
] as const

interface DonationAddressCellProps {
  item: DonationAddress
  index: number
}

function AddressCopyButton({
  value,
  currency,
}: {
  value: string
  currency: string
}) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    await navigator.clipboard.writeText(value)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <button
      type="button"
      aria-label={`Copy ${currency} donation address`}
      title={copied ? 'Copied' : `Copy ${currency} donation address`}
      onClick={handleCopy}
      className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg border border-blue-100 bg-white text-gray-600 transition-colors hover:border-blue-200 hover:text-verus-blue dark:border-blue-900/40 dark:bg-gray-900 dark:text-gray-300 dark:hover:border-blue-700 dark:hover:text-blue-300"
    >
      {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
    </button>
  )
}

function AddressExplorerLink({item}: {item: DonationAddress}) {
  return (
    <a
      href={item.explorerHref}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Open ${item.currency} donation address in explorer`}
      title={`Open ${item.currency} donation address in explorer`}
      className="hidden h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg border border-blue-100 bg-white text-gray-600 transition-colors hover:border-blue-200 hover:text-verus-blue dark:border-blue-900/40 dark:bg-gray-900 dark:text-gray-300 dark:hover:border-blue-700 dark:hover:text-blue-300 sm:flex"
    >
      <ExternalLink className="h-4 w-4" />
    </a>
  )
}

function DonationAddressCell({item, index}: DonationAddressCellProps) {
  const isDesktopLeftColumn = index % 2 === 0
  const isDesktopBottomRow = index >= addresses.length - 2

  return (
    <article
      className={cn(
        'min-w-0 border-gray-200 px-8 py-8 dark:border-gray-800 md:px-10 md:py-10',
        index > 0 && 'max-md:border-t',
        !isDesktopLeftColumn && 'md:border-l',
        !isDesktopBottomRow && 'md:border-b'
      )}
    >
      <div className="mb-5 flex min-w-0 items-start gap-4">
        <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg border border-gray-200 bg-white p-2 dark:border-gray-800 dark:bg-gray-900">
          <Image
            src={item.logo}
            alt={`${item.currency} logo`}
            width={28}
            height={28}
            className="h-7 w-7 object-contain"
            onError={(e) => {
              ;(e.target as HTMLImageElement).src =
                '/img/donate/crypto-default.svg'
            }}
          />
        </div>
        <div className="min-w-0">
          <h3 className="text-[22px] font-medium leading-tight tracking-tight text-gray-800 dark:text-white md:text-[30px]">
            {item.currency}
          </h3>
          {item.currency === 'VRSC' && (
            <p className="mt-1 text-[13px] leading-relaxed tracking-normal text-gray-500 dark:text-gray-400 md:text-[14px]">
              Supports all Verus currencies
            </p>
          )}
        </div>
      </div>

      <div className="flex min-w-0 flex-col gap-3">
        <span className="text-[13px] font-medium tracking-normal text-gray-500 dark:text-gray-400">
          Donation address
        </span>
        <div className="flex max-w-full items-center gap-2 rounded-lg border border-gray-200 bg-white p-2 pl-3 dark:border-gray-800 dark:bg-gray-900 max-md:w-[calc(100vw-4rem)]">
          <span className="min-w-0 flex-1 select-all truncate font-mono text-[12px] text-gray-700 dark:text-gray-300 md:text-[13px]">
            {item.address}
          </span>
          <AddressExplorerLink item={item} />
          <AddressCopyButton value={item.address} currency={item.currency} />
        </div>
      </div>

      {item.currency === 'VRSC' && (
        <p className="mt-4 text-[14px] leading-relaxed tracking-normal text-gray-600 dark:text-gray-300 md:text-[15px]">
          This friendly address supports donations of any currency on the Verus
          network.
        </p>
      )}
    </article>
  )
}

export function DonationAddresses() {
  return (
    <section id="donation-options" className="bg-gray-50 dark:bg-gray-950">
      <div className="grid grid-cols-1 md:grid-cols-2">
        {addresses.map((item, index) => (
          <DonationAddressCell key={item.currency} item={item} index={index} />
        ))}
      </div>

      <div className="grid grid-cols-1 border-t border-gray-200 dark:border-gray-800 md:grid-cols-2">
        <div className="px-8 py-10 md:px-10 md:py-12">
          <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-lg border border-gray-200 bg-white text-verus-blue dark:border-gray-800 dark:bg-gray-900 dark:text-blue-400">
            <Heart className="h-7 w-7" />
          </div>
          <h3 className="mb-4 text-[24px] font-medium tracking-tight text-gray-800 dark:text-white md:text-[30px]">
            What donations support
          </h3>
          <p className="text-[15px] leading-relaxed tracking-normal text-gray-600 dark:text-gray-300 md:text-[17px]">
            Community funding goes toward the practical work that keeps Verus
            moving forward.
          </p>
          <ul className="mt-3 space-y-3">
            {supportItems.map((item) => (
              <li
                key={item}
                className="relative pl-5 text-[15px] leading-relaxed tracking-normal text-gray-600 dark:text-gray-300 md:text-[17px]"
              >
                <span className="absolute left-0 top-[0.7em] h-1.5 w-1.5 rounded-full bg-verus-blue dark:bg-blue-400" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="border-t border-gray-200 px-8 py-10 dark:border-gray-800 md:border-l md:border-t-0 md:px-10 md:py-12">
          <h3 className="mb-4 text-[24px] font-medium tracking-tight text-gray-800 dark:text-white md:text-[30px]">
            Contribute your skills
          </h3>
          <p className="text-[15px] leading-relaxed tracking-normal text-gray-600 dark:text-gray-300 md:text-[17px]">
            Join the Discord community to contribute beyond donations. Share
            your skills, participate in discussions, develop dApps, and help
            shape the future of Verus.
          </p>
          <Button
            asChild
            variant="verusSecondaryDark"
            size="verusWide"
            className="mt-8 w-full md:w-fit"
          >
            <Link
              href={env.NEXT_PUBLIC_DISCORD}
              target="_blank"
              rel="noopener noreferrer"
            >
              Join Discord
              <IoLogoDiscord className="h-5 w-5 md:h-6 md:w-6" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
