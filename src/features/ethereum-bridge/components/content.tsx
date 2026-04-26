import type {
  BridgeContractHolding,
  BridgeContractMetrics,
} from '../server/get-bridge-contract-metrics'

import {Suspense} from 'react'
import Image from 'next/image'

import {env} from '@/configs/env'
import {ExternalLink} from 'lucide-react'

import {TextLinkButton} from '@/components/ui/text-link-button'
import {cn} from '@/lib/utils'

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

const bridgeVethReserves = [
  {
    symbol: 'VRSC',
    name: 'Verus',
    icon: '/img/bridge-tokens/vrsc.svg',
  },
  {
    symbol: 'ETH',
    name: 'Ethereum via vETH',
    icon: '/img/bridge-tokens/eth.svg',
  },
  {
    symbol: 'DAI',
    name: 'Dai via DAI.vETH',
    icon: '/img/bridge-tokens/dai.svg',
  },
  {
    symbol: 'MKR',
    name: 'Maker via MKR.vETH',
    icon: '/img/bridge-tokens/mkr.svg',
  },
] as const

const tokenIconBySymbol: Record<string, string> = {
  BAT: '/img/bridge-tokens/bat.svg',
  BRIDGE: '/img/bridge-tokens/bridgeveth.svg',
  BRIDGEVETH: '/img/bridge-tokens/bridgeveth.svg',
  CHIPS: '/img/bridge-tokens/chips.svg',
  CRVUSD: '/img/bridge-tokens/crvUSD.svg',
  DAI: '/img/bridge-tokens/dai.svg',
  ETH: '/img/bridge-tokens/eth.svg',
  EURC: '/img/bridge-tokens/eurc.svg',
  KAIJU: '/img/bridge-tokens/kaiju.svg',
  LINK: '/img/bridge-tokens/link.svg',
  MKR: '/img/bridge-tokens/mkr.svg',
  PAXG: '/img/bridge-tokens/paxg.svg',
  PEAS: '/img/bridge-tokens/peas.png',
  PEPECOIN: '/img/bridge-tokens/pepecoin.png',
  PURE: '/img/bridge-tokens/pure.svg',
  SCRVUSD: '/img/bridge-tokens/scrvUSD.svg',
  SWITCH: '/img/bridge-tokens/switch.svg',
  TBTC: '/img/bridge-tokens/tbtc.svg',
  THUSD: '/img/bridge-tokens/thusd.svg',
  TRAC: '/img/bridge-tokens/trac.svg',
  USDC: '/img/bridge-tokens/usdc.svg',
  USDT: '/img/bridge-tokens/usdt.svg',
  VARRR: '/img/bridge-tokens/varrr.svg',
  VBRID: '/img/bridge-tokens/bridgeveth.svg',
  VRSC: '/img/bridge-tokens/vrsc.svg',
  VRSCTEST: '/img/bridge-tokens/vrsctest.svg',
  WBTC: '/img/bridge-tokens/wbtc.svg',
  XAUT: '/img/bridge-tokens/xaut.svg',
}

const tokenIconByAddress: Record<string, string> = {
  '0x02f92800f57bcd74066f5709f1daa1a4302df875': '/img/bridge-tokens/peas.png',
  '0x0655977feb2f289a4ab78af67bab0d17aab84367':
    '/img/bridge-tokens/scrvUSD.svg',
  '0x0d8775f648430679a709e98d2b0cb6250d2887ef': '/img/bridge-tokens/bat.svg',
  '0x18084fba666a33d37592fa2633fd49a74dd93a88': '/img/bridge-tokens/tbtc.svg',
  '0x1abaea1f7c830bd89acc67ec4af516284b1bc33c': '/img/bridge-tokens/eurc.svg',
  '0x2260fac5e5542a773aa44fbcfedf7c193bc2c599': '/img/bridge-tokens/wbtc.svg',
  '0x45804880de22913dafe09f4980848ece6ecbaf78': '/img/bridge-tokens/paxg.svg',
  '0x514910771af9ca656af840dff83e8264ecf986ca': '/img/bridge-tokens/link.svg',
  '0x68749665ff8d2d112fa859aa293f07a622782f38': '/img/bridge-tokens/xaut.svg',
  '0x6b175474e89094c44da98b954eedeac495271d0f': '/img/bridge-tokens/dai.svg',
  '0x9f8f72aa9304c8b593d555f12ef6589cc3a579a2': '/img/bridge-tokens/mkr.svg',
  '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48': '/img/bridge-tokens/usdc.svg',
  '0xa9e8acf069c58aec8825542845fd754e41a9489a':
    '/img/bridge-tokens/pepecoin.png',
  '0xbc2738ba63882891094c99e59a02141ca1a1c36a': '/img/bridge-tokens/vrsc.svg',
  '0xdac17f958d2ee523a2206206994597c13d831ec7': '/img/bridge-tokens/usdt.svg',
  '0xe6052dcc60573561ecef2d9a4c0fea6d3ac5b9a2':
    '/img/bridge-tokens/bridgeveth.svg',
  '0xf939e0a03fb07f59a73314e73794be0e57ac1b4e': '/img/bridge-tokens/crvUSD.svg',
}

const placeholderTokenIcon = '/img/bridge-tokens/placeholder.svg'
const MAX_VISIBLE_HOLDINGS = 10

const normalizeTokenKey = (value: string) =>
  value.replace(/[^a-z0-9]/gi, '').toUpperCase()

const getTokenIconPath = (holding: BridgeContractHolding) => {
  const addressIcon = holding.address
    ? tokenIconByAddress[holding.address.toLowerCase()]
    : undefined

  if (addressIcon) return addressIcon

  return (
    tokenIconBySymbol[normalizeTokenKey(holding.symbol)] ?? placeholderTokenIcon
  )
}

const formatUsd = (value?: number) => {
  if (value === undefined) return 'View live'

  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    notation: value >= 1_000_000 ? 'compact' : 'standard',
    maximumFractionDigits: value >= 1_000_000 ? 1 : 0,
  }).format(value)
}

const formatHoldingUsd = (value?: number) => {
  if (value === undefined) return 'Not priced'
  if (value > 0 && value < 0.01) return '<$0.01'

  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: value >= 1_000 ? 0 : 2,
  }).format(value)
}

const formatTokenBalance = (value: number) => {
  if (value > 0 && value < 0.000001) return '<0.000001'

  return new Intl.NumberFormat('en-US', {
    maximumFractionDigits: value >= 1 ? 4 : 8,
  }).format(value)
}

const getMetricStatusText = (
  metrics: BridgeContractMetrics,
  updatedAt: string
) => {
  if (metrics.status === 'unavailable') {
    return 'Live values are unavailable right now.'
  }

  if (metrics.status === 'stale') {
    return `Using last known Alchemy values from ${updatedAt}.`
  }

  if (metrics.status === 'partial') {
    return `Refreshed ${updatedAt}; some Alchemy values are unavailable.`
  }

  return `Refreshed ${updatedAt}.`
}

const compactAddress = (address: string) =>
  `${address.slice(0, 6)}...${address.slice(-4)}`

const getEtherscanAddressUrl = (address: string) =>
  `https://etherscan.io/address/${address}`

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

function HoldingContractLink({
  holding,
  className,
}: {
  holding: BridgeContractHolding
  className?: string
}) {
  if (!holding.address) {
    return (
      <span className={cn('text-gray-500 dark:text-gray-400', className)}>
        Native asset
      </span>
    )
  }

  return (
    <a
      href={getEtherscanAddressUrl(holding.address)}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        'group inline-flex items-center gap-1 text-verus-blue transition-colors hover:text-blue-700 dark:text-blue-300 dark:hover:text-blue-200',
        className
      )}
    >
      {holding.type === 'dsr' ? 'Maker DSR' : compactAddress(holding.address)}
      <ExternalLink className="h-3.5 w-3.5 opacity-50 transition-opacity group-hover:opacity-100" />
    </a>
  )
}

function ContractHoldingRow({holding}: {holding: BridgeContractHolding}) {
  return (
    <li className="grid grid-cols-[minmax(0,1fr)_auto] gap-4 px-8 py-4 md:grid-cols-[minmax(0,1fr)_minmax(120px,0.55fr)_minmax(120px,0.55fr)] md:px-10">
      <div className="flex min-w-0 items-center gap-3">
        <Image
          src={getTokenIconPath(holding)}
          alt=""
          width={32}
          height={32}
          className="h-8 w-8 shrink-0"
        />
        <div className="min-w-0">
          <p className="truncate text-[15px] font-medium text-gray-800 dark:text-white md:text-[16px]">
            {holding.symbol}
          </p>
          <HoldingContractLink holding={holding} className="mt-1 text-[12px]" />
        </div>
      </div>

      <div className="text-right">
        <p className="text-[14px] font-medium tabular-nums text-gray-800 dark:text-white md:text-[15px]">
          {formatTokenBalance(holding.balance)}
        </p>
        <p className="mt-0.5 text-[12px] text-gray-500 dark:text-gray-400 md:hidden">
          {formatHoldingUsd(holding.valueUsd)}
        </p>
      </div>

      <div className="hidden text-right md:block">
        <p className="text-[15px] font-medium tabular-nums text-gray-800 dark:text-white">
          {formatHoldingUsd(holding.valueUsd)}
        </p>
      </div>
    </li>
  )
}

function ContractHoldingsList({metrics}: {metrics: BridgeContractMetrics}) {
  const visibleHoldings = metrics.holdings.slice(0, MAX_VISIBLE_HOLDINGS)

  if (visibleHoldings.length === 0) {
    return (
      <div className="-mx-8 border-y border-gray-200 py-6 dark:border-gray-800 md:-mx-10">
        <p className="px-8 text-[15px] text-gray-600 dark:text-gray-300 md:px-10">
          Live token details are unavailable right now.
        </p>
      </div>
    )
  }

  return (
    <div className="-mx-8 border-y border-gray-200 dark:border-gray-800 md:-mx-10">
      <div className="grid grid-cols-[minmax(0,1fr)_auto] gap-4 border-b border-gray-200 px-8 py-3 text-[12px] font-medium uppercase tracking-wide text-gray-500 dark:border-gray-800 dark:text-gray-400 md:grid-cols-[minmax(0,1fr)_minmax(120px,0.55fr)_minmax(120px,0.55fr)] md:px-10">
        <span>Asset</span>
        <span className="text-right">Amount held</span>
        <span className="hidden text-right md:block">Estimated value</span>
      </div>
      <ul className="divide-y divide-gray-200 dark:divide-gray-800">
        {visibleHoldings.map((holding) => (
          <ContractHoldingRow
            key={`${holding.type}-${holding.address ?? holding.symbol}`}
            holding={holding}
          />
        ))}
      </ul>
    </div>
  )
}

function BridgeContractMetrics({metrics}: {metrics: BridgeContractMetrics}) {
  const updatedAt = new Intl.DateTimeFormat('en-US', {
    month: 'short',
    day: 'numeric',
    hour: 'numeric',
    minute: '2-digit',
  }).format(metrics.updatedAt)

  const visibleHoldingsCount = Math.min(
    metrics.holdings.length,
    MAX_VISIBLE_HOLDINGS
  )
  const etherscanOnlyCount =
    Math.max(metrics.holdings.length - visibleHoldingsCount, 0) +
    (metrics.unlistedTokenCount ?? 0)

  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      <div className="flex flex-col">
        <div className="border-b border-gray-200 px-8 py-10 dark:border-gray-800 md:px-14 md:py-12">
          <p className="text-[15px] font-medium text-gray-600 dark:text-gray-300">
            Total bridge value
          </p>
          <p className="mt-4 bg-gradient-to-br from-blue-400 to-verus-blue bg-clip-text text-[64px] font-medium leading-none tracking-tight text-transparent md:text-[88px] xl:text-[104px]">
            {formatUsd(metrics.totalValueUsd)}
          </p>
        </div>

        <div className="border-b border-gray-200 px-8 py-8 dark:border-gray-800 md:px-14 md:py-10">
          <p className="mb-2 text-[15px] font-medium text-gray-600 dark:text-gray-300">
            Bridge contract
          </p>
          <div className="flex max-w-full items-center gap-2 rounded-lg border border-gray-200 bg-white p-2 pl-3 dark:border-gray-800 dark:bg-gray-900">
            <a
              href={ETHEREUM_BRIDGE_CONTRACT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="min-w-0 flex-1 truncate font-mono text-[12px] text-gray-700 transition-colors hover:text-verus-blue dark:text-gray-300 dark:hover:text-blue-300 md:text-[13px]"
            >
              {ETHEREUM_BRIDGE_CONTRACT_ADDRESS}
            </a>
            <ContractCopyButton value={ETHEREUM_BRIDGE_CONTRACT_ADDRESS} />
          </div>
        </div>

        <div className="px-8 py-10 md:px-14 md:py-12">
          <h3 className="text-[24px] font-medium leading-[1.2] tracking-tight text-gray-800 dark:text-white md:text-[30px]">
            Secured by miners and stakers
          </h3>
          <div className="mt-4 space-y-4">
            <p className="text-[15px] leading-relaxed tracking-normal text-gray-600 dark:text-gray-300 md:text-[17px]">
              The Verus-Ethereum Bridge allows for the secure transfer and
              conversion of cryptocurrencies between Verus and Ethereum.
            </p>
            <p className="text-[15px] leading-relaxed tracking-normal text-gray-600 dark:text-gray-300 md:text-[17px]">
              It's trustless, decentralized and non-custodial, meaning it
              doesn't require users to trust a third party with their funds, and
              no single entity has control over the assets being transferred.
            </p>
            <p className="text-[15px] leading-relaxed tracking-normal text-gray-600 dark:text-gray-300 md:text-[17px]">
              All assets on the bridge (the Ethereum smart contract) are
              secured by the worldwide Verus network of miners and stakers.
              Nothing is transferred over the bridge until it is proven and
              verified by consensus on the Verus side.
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col border-t border-gray-200 dark:border-gray-800 md:border-l md:border-t-0">
        <div className="border-b border-gray-200 px-8 py-12 dark:border-gray-800 md:px-10 md:py-16">
          <h3 className="text-[28px] font-medium leading-[1.2] tracking-tight text-gray-800 dark:text-white md:text-[34px]">
            Tokens and balances
          </h3>
          <p className="mt-4 text-[15px] leading-relaxed tracking-normal text-gray-600 dark:text-gray-300">
            The 10 largest balances are listed here. Use Etherscan for the full
            contract inventory.
          </p>
        </div>

        <div className="px-8 py-0 md:px-10">
          <ContractHoldingsList metrics={metrics} />
        </div>

        <div className="border-t border-gray-200 px-8 py-6 text-[13px] text-gray-500 dark:border-gray-800 dark:text-gray-400 md:px-10">
          {etherscanOnlyCount > 0 ? (
            <p>
              Showing the {MAX_VISIBLE_HOLDINGS} largest holdings.{' '}
              {etherscanOnlyCount} additional holdings, dust, or unpriced
              balances are only shown on Etherscan.
            </p>
          ) : null}
          <p>
            Total value uses Alchemy token pricing plus Maker Pot DSR
            accounting. {getMetricStatusText(metrics, updatedAt)}
          </p>
          <TextLinkButton
            href={metrics.etherscanUrl}
            className="-ml-2 mt-3"
            contentClassName="mb-0 text-[13px]"
          >
            View full contract on Etherscan
          </TextLinkButton>
        </div>
      </div>
    </div>
  )
}

function ContractAndTrustSection() {
  return (
    <section className="bg-gray-50 dark:bg-gray-950">
      <Suspense fallback={<ContractMetricsSkeleton />}>
        <BridgeContractMetricsPanel />
      </Suspense>
    </section>
  )
}

function TagList({items}: {items: TextItem[]}) {
  return (
    <div className="flex flex-col items-start gap-2 md:ml-auto md:items-end">
      {items.map((item) => (
        <div
          key={item.title}
          className="w-full rounded-lg border border-gray-200 bg-white px-4 py-3 dark:border-gray-800 dark:bg-gray-900 md:max-w-[300px]"
        >
          <p className="text-[14px] font-medium leading-tight text-gray-800 dark:text-white">
            {item.title}
          </p>
          <p className="mt-1 text-[13px] leading-relaxed tracking-normal text-gray-600 dark:text-gray-300">
            {item.description}
          </p>
        </div>
      ))}
    </div>
  )
}

function ReserveList() {
  return (
    <div className="grid gap-0 overflow-hidden border-y border-gray-200 dark:border-gray-800 md:ml-auto md:w-full md:max-w-[320px]">
      {bridgeVethReserves.map((reserve, index) => (
        <div
          key={reserve.symbol}
          className={cn(
            'flex items-center gap-3 border-gray-200 py-4 dark:border-gray-800',
            index > 0 && 'border-t'
          )}
        >
          <Image
            src={reserve.icon}
            alt=""
            width={32}
            height={32}
            className="h-8 w-8 shrink-0"
          />
          <div>
            <p className="text-[16px] font-medium text-gray-800 dark:text-white">
              {reserve.symbol}
            </p>
            <p className="mt-1 text-[13px] text-gray-500 dark:text-gray-400">
              {reserve.name}
            </p>
          </div>
        </div>
      ))}
    </div>
  )
}

function BridgeDetailsSection() {
  const rows = [
    {
      heading: 'What can cross the bridge',
      description:
        'Verus currencies, Ethereum ERC-20 assets, and NFT standards can move through the same proof-based bridge stack.',
      side: <TagList items={capabilities} />,
    },
    {
      heading: 'Why bridge into Verus',
      description:
        'After crossing, assets can use Verus DeFi, marketplace flows, VerusID controls, and protocol-level conversions without custom contract custody.',
      side: <TagList items={advantages} />,
    },
    {
      heading: 'Liquidity for fees and conversions',
      description:
        'Bridge.vETH is a 100% backed currency and AMM with VRSC, ETH, DAI, and MKR in reserve. It helps route conversions and fee handling from either side of the bridge.',
      side: <ReserveList />,
    },
  ]

  return (
    <section className="border-t border-gray-200 bg-gray-50 dark:border-gray-800 dark:bg-gray-950">
      {rows.map((row, index) => (
        <article
          key={row.heading}
          className={cn(
            'grid grid-cols-1 border-gray-200 dark:border-gray-800 md:grid-cols-[minmax(0,2fr)_minmax(0,1fr)]',
            index > 0 && 'border-t'
          )}
        >
          <div className="px-8 py-12 md:px-14 md:py-16">
            <div className="max-w-[760px]">
              <h2 className="text-[28px] font-medium leading-[1.2] tracking-tight text-gray-800 dark:text-white md:text-[44px]">
                {row.heading}
              </h2>
              <p className="mt-5 text-[15px] leading-relaxed tracking-normal text-gray-600 dark:text-gray-300 md:text-[17px]">
                {row.description}
              </p>
            </div>
          </div>

          <div className="border-t border-gray-200 px-8 py-10 dark:border-gray-800 md:border-l md:border-t-0 md:px-8 md:py-16">
            {row.side}
          </div>
        </article>
      ))}
    </section>
  )
}

function ResourcesSection() {
  return (
    <section className="border-t border-gray-200 bg-gradient-to-b from-gray-50 via-gray-50 to-white px-8 py-12 dark:border-gray-800 dark:from-gray-950 dark:via-gray-950 dark:to-gray-950 md:px-14 md:py-14">
      <div className="mb-8 max-w-[760px]">
        <h2 className="text-[28px] font-medium leading-[1.2] tracking-tight text-gray-800 dark:text-white md:text-[44px]">
          Use, inspect, and learn
        </h2>
      </div>

      <div className="grid gap-x-8 gap-y-5 border-y border-gray-200 py-6 dark:border-gray-800 md:grid-cols-2">
        {resources.map((resource) => (
          <div key={resource.title}>
            <TextLinkButton
              href={resource.href}
              className="-ml-2"
              contentClassName="mb-0"
            >
              {resource.title}
            </TextLinkButton>
            <p className="mt-1 text-[14px] leading-relaxed tracking-normal text-gray-600 dark:text-gray-300">
              {resource.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}

export function BridgeContent() {
  return (
    <div className="w-full">
      <ContractAndTrustSection />
      <BridgeDetailsSection />
      <ResourcesSection />
    </div>
  )
}
