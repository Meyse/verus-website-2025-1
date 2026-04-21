import type {BridgeContractMetrics} from '../server/get-bridge-contract-metrics'

import {Suspense} from 'react'

import {env} from '@/configs/env'
import {ArrowRight, ArrowUpRight} from 'lucide-react'

import {
  BRIDGE_LAUNCH_ARTICLE_URL,
  ETHEREUM_BRIDGE_CONTRACT_ADDRESS,
  ETHEREUM_BRIDGE_CONTRACT_URL,
  VIP_ARTICLE_URL,
} from '../constants'
import {getBridgeContractMetrics} from '../server/get-bridge-contract-metrics'
import {ContractCopyButton} from './contract-copy-button'

type TextItem = {
  title: string
  description: string
}

type ResourceLink = TextItem & {
  href: string
}

const capabilities: TextItem[] = [
  {
    title: 'Verus currencies to ERC-20',
    description: 'Launch on Verus, export to Ethereum.',
  },
  {
    title: 'Ethereum tokens to Verus',
    description: 'Bring ERC-20 assets into Verus DeFi.',
  },
  {
    title: 'ERC-721 and ERC-1155',
    description: 'Move collectible and multi-token standards across.',
  },
  {
    title: 'Built on VIP',
    description: 'The same protocol used for PBaaS cross-chain communication.',
  },
]

const advantages: TextItem[] = [
  {
    title: 'MEV-resistant DeFi',
    description: 'Conversions are handled at protocol level.',
  },
  {
    title: 'Collaborative liquidity',
    description: 'Assets can share liquidity across multicurrency baskets.',
  },
  {
    title: 'Marketplace utility',
    description: 'Use bridged assets in atomic sales, swaps, and auctions.',
  },
  {
    title: 'Verus Vault',
    description: 'VerusID-controlled assets can use Vault protections.',
  },
]

const resources: ResourceLink[] = [
  {
    title: 'Use the bridge',
    description: 'Move assets between Ethereum and Verus.',
    href: env.NEXT_PUBLIC_VERUS_BRIDGE,
  },
  {
    title: 'Ethereum to Verus guide',
    description: 'Step-by-step documentation.',
    href: `${env.NEXT_PUBLIC_VERUS_DOCS}/eth-bridge/ethereum-to-verus.html`,
  },
  {
    title: 'VIP article',
    description: 'Technical bridge background.',
    href: VIP_ARTICLE_URL,
  },
  {
    title: 'Bridge launch article',
    description: 'Architecture and launch context.',
    href: BRIDGE_LAUNCH_ARTICLE_URL,
  },
]

const formatUsd = (value?: number) => {
  if (value === undefined) return 'View live'

  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    notation: value >= 1_000_000 ? 'compact' : 'standard',
    maximumFractionDigits: value >= 1_000_000 ? 1 : 0,
  }).format(value)
}

const formatNumber = (value?: number, maximumFractionDigits = 0) => {
  if (value === undefined) return 'View live'

  return new Intl.NumberFormat('en-US', {
    maximumFractionDigits,
  }).format(value)
}

const formatEthBalance = (value?: number) =>
  value === undefined ? 'View live' : `${formatNumber(value, 2)} ETH`

const getMetricStatusText = (
  metrics: BridgeContractMetrics,
  updatedAt: string
) => {
  if (metrics.status === 'unavailable') {
    return ' Live values are unavailable right now.'
  }

  if (metrics.status === 'stale') {
    return ` Using last known Alchemy values from ${updatedAt}.`
  }

  if (metrics.status === 'partial') {
    return ` Refreshed ${updatedAt}; some Alchemy values are unavailable.`
  }

  return ` Refreshed ${updatedAt}.`
}

function ContractMetric({
  label,
  value,
  accent,
}: {
  label: string
  value: string
  accent?: boolean
}) {
  return (
    <div>
      <p className="text-[12px] font-medium uppercase tracking-wide text-gray-500 dark:text-gray-400">
        {label}
      </p>
      <p
        className={`mt-1 text-[24px] font-medium tracking-tight md:text-[30px] ${
          accent
            ? 'text-verus-blue dark:text-blue-300'
            : 'text-gray-900 dark:text-white'
        }`}
      >
        {value}
      </p>
    </div>
  )
}

function ContractMetricsSkeleton() {
  return (
    <div className="grid gap-6 md:grid-cols-4">
      <div className="h-16 animate-pulse rounded bg-gray-200 dark:bg-gray-800" />
      <div className="h-16 animate-pulse rounded bg-gray-200 dark:bg-gray-800" />
      <div className="h-16 animate-pulse rounded bg-gray-200 dark:bg-gray-800" />
      <div className="h-16 animate-pulse rounded bg-gray-200 dark:bg-gray-800" />
    </div>
  )
}

async function BridgeContractMetricsPanel() {
  const metrics = await getBridgeContractMetrics()

  return <BridgeContractMetrics metrics={metrics} />
}

function BridgeContractMetrics({metrics}: {metrics: BridgeContractMetrics}) {
  const updatedAt = new Intl.DateTimeFormat('en-US', {
    month: 'short',
    day: 'numeric',
    hour: 'numeric',
    minute: '2-digit',
  }).format(metrics.updatedAt)

  return (
    <>
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-[13px] font-medium uppercase tracking-wide text-gray-500 dark:text-gray-400">
            Ethereum contract
          </p>
          <h2 className="mt-1 text-[24px] font-medium leading-tight tracking-tight text-gray-900 dark:text-white md:text-[40px]">
            Public bridge holdings.
          </h2>
        </div>

        <div className="flex max-w-full items-center gap-2 border border-blue-100/70 p-2 pl-3 dark:border-blue-900/40 md:w-[430px] md:rounded-lg">
          <span className="min-w-0 flex-1 truncate font-mono text-[12px] text-gray-700 dark:text-gray-300 md:text-[13px]">
            {ETHEREUM_BRIDGE_CONTRACT_ADDRESS}
          </span>
          <ContractCopyButton value={ETHEREUM_BRIDGE_CONTRACT_ADDRESS} />
        </div>
      </div>

      <div className="mt-8 grid gap-6 border-y border-blue-100/70 py-6 dark:border-gray-800 md:grid-cols-4">
        <ContractMetric
          label="Ethereum-side assets"
          value={formatUsd(metrics.totalValueUsd)}
          accent
        />
        <ContractMetric
          label="ETH balance"
          value={formatEthBalance(metrics.ethBalance)}
        />
        <ContractMetric
          label="ERC-20 value"
          value={formatUsd(metrics.tokenHoldingsUsd)}
        />
        <ContractMetric
          label="ERC-20 holdings"
          value={formatNumber(metrics.tokenCount)}
        />
      </div>

      <div className="mt-4 flex flex-col gap-3 text-[13px] text-gray-500 dark:text-gray-400 md:flex-row md:items-center md:justify-between">
        <p>
          Alchemy token balances and USD prices, not protocol-wide Verus
          liquidity.
          {getMetricStatusText(metrics, updatedAt)}
        </p>
        <a
          href={ETHEREUM_BRIDGE_CONTRACT_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex w-fit items-center gap-2 font-medium text-verus-blue transition-colors hover:text-blue-700 dark:text-blue-300 dark:hover:text-blue-200"
        >
          View on Etherscan
          <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </a>
      </div>
    </>
  )
}

function ContractAndTrustSection() {
  return (
    <section className="w-screen overflow-hidden border-y border-blue-100/80 bg-white/75 px-6 py-9 shadow-sm backdrop-blur-sm dark:border-gray-800 dark:bg-gray-900/65 md:w-full md:rounded-lg md:border-x md:px-8 md:py-10">
      <Suspense fallback={<ContractMetricsSkeleton />}>
        <BridgeContractMetricsPanel />
      </Suspense>

      <div className="mt-10 max-w-[920px] border-t border-blue-100/70 pt-8 dark:border-gray-800">
        <p className="text-[13px] font-medium uppercase tracking-wide text-gray-500 dark:text-gray-400">
          Trust model
        </p>
        <h2 className="mt-2 text-[24px] font-medium leading-tight tracking-tight text-gray-900 dark:text-white md:text-[38px]">
          Assets secured by miners and stakers.
        </h2>
        <div className="mt-5 space-y-4 md:space-y-5">
          <p className="text-[15px] leading-relaxed text-gray-700 dark:text-gray-300 md:text-[17px]">
            The Verus-Ethereum Bridge allows for the secure transfer and
            conversion of cryptocurrencies between Verus and Ethereum.
          </p>
          <p className="text-[15px] leading-relaxed text-gray-700 dark:text-gray-300 md:text-[17px]">
            It's trustless, decentralized and non-custodial, meaning it doesn't
            require users to trust a third party with their funds, and no single
            entity has control over the assets being transferred.
          </p>
          <p className="text-[15px] leading-relaxed text-gray-700 dark:text-gray-300 md:text-[17px]">
            All assets on the bridge (the Ethereum smart contract) are secured
            by the worldwide Verus network of miners and stakers. Nothing is
            transferred over the bridge until it is proven and verified by
            consensus on the Verus side.
          </p>
        </div>

        <div className="mt-8 max-w-[920px] border-t border-blue-100/70 pt-8 dark:border-gray-800">
          <p className="text-[13px] font-medium uppercase tracking-wide text-gray-500 dark:text-gray-400">
            Verus Internet Protocol
          </p>
          <h3 className="mt-2 text-[22px] font-medium leading-tight tracking-tight text-gray-900 dark:text-white md:text-[32px]">
            VIP-secured bridging.
          </h3>
          <div className="mt-5 space-y-4 md:space-y-5">
            <p className="text-[15px] leading-relaxed text-gray-700 dark:text-gray-300 md:text-[17px]">
              The Verus-Ethereum Bridge uses the Verus Internet Protocol (VIP)
              for cross-chain communication. It relies on cryptographic proofs,
              with witnesses validating notarizations created by network
              validators (miners and stakers of Verus).
            </p>
            <p className="text-[15px] leading-relaxed text-gray-700 dark:text-gray-300 md:text-[17px]">
              The bridge ensures non-custodial, decentralized, secure, and
              transparent cross-chain transactions between Verus and Ethereum.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

function TextGrid({
  title,
  description,
  items,
}: {
  title: string
  description: string
  items: TextItem[]
}) {
  return (
    <section className="w-screen overflow-hidden border-y border-blue-100/80 bg-white/75 px-6 py-8 shadow-sm backdrop-blur-sm dark:border-gray-800 dark:bg-gray-900/65 md:w-full md:rounded-lg md:border-x md:px-8 md:py-10">
      <div className="max-w-[820px]">
        <h2 className="text-[24px] font-medium leading-tight tracking-tight text-gray-900 dark:text-white md:text-[38px]">
          {title}
        </h2>
        <p className="mt-3 text-[15px] leading-relaxed text-gray-600 dark:text-gray-300 md:text-[18px]">
          {description}
        </p>
      </div>

      <div className="mt-8 grid gap-x-10 gap-y-7 md:grid-cols-4">
        {items.map((item) => (
          <div
            key={item.title}
            className="border-t border-blue-100/70 pt-4 dark:border-gray-800"
          >
            <h3 className="text-[17px] font-medium leading-tight text-gray-900 dark:text-white">
              {item.title}
            </h3>
            <p className="mt-2 text-[14px] leading-relaxed text-gray-600 dark:text-gray-300 md:text-[15px]">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}

function BridgeVethNote() {
  return (
    <section className="w-screen overflow-hidden border-y border-blue-100/80 bg-white/75 px-6 py-8 shadow-sm backdrop-blur-sm dark:border-gray-800 dark:bg-gray-900/65 md:w-full md:rounded-lg md:border-x md:px-8 md:py-10">
      <div className="max-w-[860px]">
        <p className="text-[13px] font-medium uppercase tracking-wide text-gray-500 dark:text-gray-400">
          Bridge.vETH
        </p>
        <h2 className="mt-2 text-[24px] font-medium leading-tight tracking-tight text-gray-900 dark:text-white md:text-[34px]">
          The bridge has its own currency with liquidity pool.
        </h2>
        <div className="mt-4 space-y-4">
          <p className="text-[15px] leading-relaxed text-gray-700 dark:text-gray-300 md:text-[17px]">
            Bridge.vETH is a 100% backed currency with 4 currencies in its
            reserves (VRSC, ETH, DAI, MKR). It's also an automated market maker
            (AMM) with which you can convert all four currencies in all
            directions, and also convert them into Bridge.vETH.
          </p>
          <p className="text-[15px] leading-relaxed text-gray-700 dark:text-gray-300 md:text-[17px]">
            The Bridge.vETH currency function is to make the bridging of assets
            simple. From wherever side on the bridge you send it converts the
            fees that you need seamlessly.
          </p>
          <p className="text-[15px] leading-relaxed text-gray-700 dark:text-gray-300 md:text-[17px]">
            The value of Bridge.vETH increases relative to its reserves when
            fees or interest (Dai Savings Rate) are added to the reserves
            without there being new Bridge.vETH minted.
          </p>
        </div>
      </div>
    </section>
  )
}

function ResourcesSection() {
  return (
    <section className="w-screen overflow-hidden border-y border-blue-100/80 bg-white/75 px-6 py-8 shadow-sm backdrop-blur-sm dark:border-gray-800 dark:bg-gray-900/65 md:w-full md:rounded-lg md:border-x md:px-8 md:py-10">
      <div className="mb-6 max-w-[760px]">
        <p className="text-[13px] font-medium uppercase tracking-wide text-gray-500 dark:text-gray-400">
          Resources
        </p>
        <h2 className="mt-2 text-[24px] font-medium leading-tight tracking-tight text-gray-900 dark:text-white md:text-[38px]">
          Use, inspect, and learn.
        </h2>
      </div>

      <div className="divide-y divide-blue-100/70 border-y border-blue-100/70 dark:divide-gray-800 dark:border-gray-800">
        {resources.map((resource) => (
          <a
            key={resource.title}
            href={resource.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col gap-2 py-4 transition-colors hover:text-verus-blue dark:hover:text-blue-300 md:flex-row md:items-center md:justify-between"
          >
            <div>
              <h3 className="text-[16px] font-medium text-gray-900 transition-colors group-hover:text-verus-blue dark:text-white dark:group-hover:text-blue-300">
                {resource.title}
              </h3>
              <p className="mt-1 text-[14px] text-gray-600 dark:text-gray-300">
                {resource.description}
              </p>
            </div>
            <span className="inline-flex items-center gap-2 text-[14px] font-medium text-verus-blue dark:text-blue-300">
              Open
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </span>
          </a>
        ))}
      </div>
    </section>
  )
}

export function BridgeContent() {
  return (
    <div className="flex w-screen flex-col gap-8 md:w-full md:max-w-[1220px] md:gap-10">
      <ContractAndTrustSection />
      <TextGrid
        title="What can cross the bridge."
        description="A path between Ethereum assets and Verus protocol features."
        items={capabilities}
      />
      <TextGrid
        title="Why bridge into Verus."
        description="Assets can use Verus DeFi, marketplace, and VerusID features after crossing."
        items={advantages}
      />
      <BridgeVethNote />
      <ResourcesSection />
    </div>
  )
}
