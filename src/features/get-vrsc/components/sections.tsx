import type {ReactNode} from 'react'

import Image from 'next/image'
import Link from 'next/link'

import {getSupply} from '@/features/intro/server/get-supply'
import {getScanProtocolStats} from '@/features/protocol/server/get-scan-protocol-stats'
import {
  ArrowLeftRight,
  ArrowRight,
  Check,
  Coins,
  ExternalLink,
  Shield,
} from 'lucide-react'

import {Button} from '@/components/ui/button'
import {TextLinkButton} from '@/components/ui/text-link-button'

type StepItem = {
  description: string
  title: string
}

type CheckItem = {
  text: string
}

type ScanCurrency = {
  liquidity: number
  name: string
  volume24h: number
}

const SCAN_CURRENCIES_ENDPOINT = 'https://scan.verus.cx/api/market/currencies'
const fallbackVrscCurrency: ScanCurrency = {
  liquidity: Number.NaN,
  name: 'VRSC',
  volume24h: Number.NaN,
}

function formatCurrency(value: number) {
  if (!Number.isFinite(value)) {
    return 'N/A'
  }

  return new Intl.NumberFormat('en-US', {
    currency: 'USD',
    maximumFractionDigits: 2,
    notation: value >= 1_000_000 ? 'compact' : 'standard',
    style: 'currency',
  }).format(value)
}

function formatCompactNumber(value: number) {
  if (!Number.isFinite(value)) {
    return 'N/A'
  }

  return new Intl.NumberFormat('en-US', {
    maximumFractionDigits: 2,
    notation: 'compact',
  }).format(value)
}

function formatPercent(value: number) {
  if (!Number.isFinite(value)) {
    return 'N/A'
  }

  return new Intl.NumberFormat('en-US', {
    maximumFractionDigits: 1,
    style: 'percent',
  }).format(value)
}

function SectionHeader({
  children,
  icon: Icon,
  title,
}: {
  children: ReactNode
  icon: typeof ArrowLeftRight
  title: string
}) {
  return (
    <div className="min-w-0 border-b border-gray-200 bg-gradient-to-br from-blue-50 to-white px-8 py-8 dark:border-gray-800 dark:from-blue-950/40 dark:to-gray-950 md:px-14 md:py-10">
      <div className="flex flex-col gap-4 md:flex-row md:items-center">
        <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-lg bg-verus-blue/10 dark:bg-blue-900/30 md:h-12 md:w-12">
          <Icon className="h-5 w-5 text-verus-blue dark:text-blue-400 md:h-6 md:w-6" />
        </div>
        <div className="min-w-0">
          <h2 className="mb-3 font-display font-medium tracking-tight text-gray-800 dark:text-white md:text-[30px]">
            {title}
          </h2>
          <p className="max-w-[760px] text-[15px] leading-relaxed tracking-normal text-gray-600 dark:text-gray-300 md:text-[17px]">
            {children}
          </p>
        </div>
      </div>
    </div>
  )
}

function readCurrencyMetric(body: Record<string, unknown>, key: string) {
  const value = body[key]

  if (typeof value !== 'number' || !Number.isFinite(value) || value < 0) {
    throw new Error(`Scan currency response is missing ${key}`)
  }

  return value
}

function parseVrscCurrency(value: unknown): ScanCurrency {
  if (!Array.isArray(value)) {
    throw new Error('Scan currencies response was not an array')
  }

  const vrsc = value.find(
    (item): item is Record<string, unknown> =>
      !!item &&
      typeof item === 'object' &&
      (item as Record<string, unknown>).name === 'VRSC'
  )

  if (!vrsc) {
    throw new Error('Scan currencies response did not include VRSC')
  }

  return {
    liquidity: readCurrencyMetric(vrsc, 'liquidity'),
    name: 'VRSC',
    volume24h: readCurrencyMetric(vrsc, 'volume24h'),
  }
}

async function getVrscCurrency() {
  try {
    const response = await fetch(SCAN_CURRENCIES_ENDPOINT, {
      headers: {
        Accept: 'application/json',
      },
      next: {
        revalidate: 6 * 60 * 60,
        tags: ['scan-vrsc-currency'],
      },
    })

    if (!response.ok) {
      throw new Error(`Scan currencies API responded with ${response.status}`)
    }

    return parseVrscCurrency(await response.json())
  } catch (error) {
    console.error('Error fetching Scan Verus VRSC currency data:', error)

    return fallbackVrscCurrency
  }
}

function StepList({items}: {items: StepItem[]}) {
  return (
    <div className="space-y-5">
      {items.map((item) => (
        <div className="min-w-0" key={item.title}>
          <h3 className="text-[15px] font-medium text-gray-800 dark:text-white md:text-[17px]">
            {item.title}
          </h3>
          <p className="mt-1 text-[15px] leading-relaxed tracking-normal text-gray-600 dark:text-gray-300 md:text-[17px]">
            {item.description}
          </p>
        </div>
      ))}
    </div>
  )
}

function CheckList({items}: {items: CheckItem[]}) {
  return (
    <div className="space-y-3">
      {items.map((item) => (
        <div className="flex items-start gap-3" key={item.text}>
          <div className="mt-1 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-[rgba(0,170,37,1)] dark:bg-green-600">
            <Check className="h-3 w-3 text-white" />
          </div>
          <span className="min-w-0 text-[15px] leading-relaxed tracking-normal text-gray-600 dark:text-gray-300 md:text-[17px]">
            {item.text}
          </span>
        </div>
      ))}
    </div>
  )
}

function MetricRow({
  description,
  label,
  value,
}: {
  description?: string
  label: string
  value: string
}) {
  return (
    <div className="border-t border-gray-200 py-5 first:border-t-0 first:pt-0 last:pb-0 dark:border-gray-800">
      <div className="text-[34px] font-medium leading-none tracking-tight text-verus-blue dark:text-blue-300 md:text-[42px]">
        {value}
      </div>
      <h3 className="mt-3 text-[15px] font-medium text-gray-800 dark:text-white md:text-[17px]">
        {label}
      </h3>
      {description && (
        <p className="mt-1 text-[15px] leading-relaxed tracking-normal text-gray-600 dark:text-gray-300 md:text-[17px]">
          {description}
        </p>
      )}
    </div>
  )
}

const defiOptions: StepItem[] = [
  {
    title: 'Convert through native liquidity',
    description:
      'Exchange supported currencies for VRSC through protocol-level baskets with low conversion fees.',
  },
  {
    title: 'Use wallet flows',
    description:
      'Verus Mobile and Verus Desktop support conversion workflows for assets available through the network.',
  },
  {
    title: 'Bridge supported assets',
    description:
      'Move supported Ethereum assets into Verus, then convert through available protocol liquidity.',
  },
]

const earnOptions: StepItem[] = [
  {
    title: 'Mining',
    description:
      'Mine VRSC with consumer hardware using the VerusHash algorithm, or join a mining pool for steadier payouts.',
  },
  {
    title: 'Staking',
    description:
      'Stake VRSC from a wallet to help secure the network and earn a share of block rewards.',
  },
]

const earnChecks: CheckItem[] = [
  {text: 'No minimum amount is required to start staking.'},
  {text: 'CPU-friendly mining keeps participation accessible.'},
  {text: 'Hybrid PoW and PoS consensus splits block rewards between miners and stakers.'},
]

export async function GetVrscSections() {
  const [stats, vrscCurrency, supply] = await Promise.all([
    getScanProtocolStats(),
    getVrscCurrency(),
    getSupply(),
  ])
  const vrscInPoolsRatio = supply.circulatingSupply
    ? stats.vrscInPools / supply.circulatingSupply
    : null

  return (
    <>
      <section className="border-b border-gray-200 dark:border-gray-800">
        <SectionHeader icon={ArrowLeftRight} title="Convert with Verus DeFi">
          Use native protocol-level liquidity to convert supported assets into
          VRSC without smart contracts.
        </SectionHeader>

        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="min-w-0 px-8 py-8 md:px-14 md:py-10">
            <h3 className="mb-4 font-medium tracking-tight text-gray-800 dark:text-white md:text-[30px]">
              Start with native conversion
            </h3>
            <div className="space-y-6">
              <p className="text-[15px] leading-relaxed tracking-normal text-gray-600 dark:text-gray-300 md:text-[17px]">
                Verus DeFi lets you convert through reserve-backed liquidity
                baskets built into the protocol. Fees are low, execution is
                validated by consensus, and no Solidity contracts are involved.
              </p>
              <StepList items={defiOptions} />
            </div>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Button
                asChild
                variant="verusPrimary"
                size="verus"
                className="w-full sm:w-fit"
              >
                <Link href="/wallet">
                  Download a wallet
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button
                asChild
                variant="verusSecondary"
                size="verus"
                className="w-full sm:w-fit"
              >
                <Link href="/ethereum-bridge">
                  Bridge page
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          </div>

          <div className="min-w-0 border-t border-gray-200 px-8 py-8 dark:border-gray-800 md:border-l md:border-t-0 md:px-14 md:py-10">
            <div className="mb-5 flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between">
              <h3 className="font-medium tracking-tight text-gray-800 dark:text-white md:text-[30px]">
                Live VRSC activity
              </h3>
              <TextLinkButton
                href={SCAN_CURRENCIES_ENDPOINT}
                className="-ml-2 p-0 sm:ml-0"
                contentClassName="mb-0 text-[13px]"
                externalIconClassName="h-3.5 w-3.5"
              >
                Scan Verus API
              </TextLinkButton>
            </div>
            <MetricRow
              value={formatCurrency(vrscCurrency.volume24h)}
              label="VRSC 24h protocol-wide volume"
            />
            <MetricRow
              value={`${formatCompactNumber(stats.vrscInPools)} VRSC`}
              label="VRSC in liquidity pools"
              description={`${formatCurrency(stats.vrscInPoolsUsd)} in VRSC liquidity across tracked pools${
                vrscInPoolsRatio
                  ? `, about ${formatPercent(
                      vrscInPoolsRatio
                    )} of circulating supply`
                  : ''
              }.`}
            />
          </div>
        </div>
      </section>

      <section className="border-b border-gray-200 dark:border-gray-800">
        <SectionHeader icon={Coins} title="Use an exchange">
          VRSC is available on third-party exchanges. Do your own research before
          using any exchange service.
        </SectionHeader>

        <div className="min-w-0 px-8 py-8 md:px-14 md:py-10">
          <div className="max-w-[520px]">
            <h3 className="mb-4 font-medium tracking-tight text-gray-800 dark:text-white md:text-[30px]">
              Available exchange
            </h3>
            <a
              href="https://safe.trade"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex w-full max-w-[420px] items-center gap-5 rounded-lg border border-gray-200 bg-white/90 p-5 transition-colors hover:border-gray-400 hover:bg-white dark:border-gray-800 dark:bg-gray-900/70 dark:hover:border-gray-700"
            >
              <div className="flex h-16 min-w-0 flex-1 items-center">
                <Image
                  src="/img/exchanges/safe-trade.png"
                  alt="SafeTrade"
                  width={500}
                  height={500}
                  className="max-h-full max-w-[180px] object-contain"
                />
              </div>
              <ExternalLink className="h-4 w-4 flex-shrink-0 text-gray-400 transition-colors group-hover:text-verus-blue dark:text-gray-500 dark:group-hover:text-blue-300" />
            </a>
          </div>
        </div>
      </section>

      <section>
        <SectionHeader icon={Shield} title="Earn VRSC">
          Participate in consensus by mining or staking, and earn VRSC while
          helping secure the network.
        </SectionHeader>

        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="min-w-0 px-8 py-8 md:px-14 md:py-10">
            <h3 className="mb-4 font-medium tracking-tight text-gray-800 dark:text-white md:text-[30px]">
              Mining and staking
            </h3>
            <StepList items={earnOptions} />
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Button
                asChild
                variant="verusSecondary"
                size="verus"
                className="w-full sm:w-fit"
              >
                <Link href="/mining">
                  Start mining
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button
                asChild
                variant="verusSecondary"
                size="verus"
                className="w-full sm:w-fit"
              >
                <Link href="/staking">
                  Learn about staking
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          </div>

          <div className="min-w-0 border-t border-gray-200 px-8 py-8 dark:border-gray-800 md:border-l md:border-t-0 md:px-14 md:py-10">
            <h3 className="mb-4 font-medium tracking-tight text-gray-800 dark:text-white md:text-[30px]">
              Participation basics
            </h3>
            <CheckList items={earnChecks} />
          </div>
        </div>
      </section>
    </>
  )
}
