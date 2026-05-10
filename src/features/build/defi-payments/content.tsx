import type {ReactNode} from 'react'
import type {LucideIcon} from 'lucide-react'

import Image from 'next/image'

import {
  ArrowUpDown,
  Coins,
  FileCode,
  QrCode,
  Scale,
  Shield,
  Wallet,
} from 'lucide-react'

import {cn} from '@/lib/utils'

type IconListSection = {
  icon: LucideIcon
  title: string
  description?: string
  items: readonly string[]
}

type DetailItem = {
  title: string
  description: string
}

type ComparisonRow = {
  feature: string
  verus: ReactNode
  evm: ReactNode
}

const mevPanels: IconListSection[] = [
  {
    icon: Shield,
    title: 'MEV protection',
    items: [
      'No front-running or sandwich attacks',
      'Same price for all trades in a block',
      'No value extraction by bots',
    ],
  },
  {
    icon: ArrowUpDown,
    title: 'Fee structure',
    items: [
      '0.025% for reserve-to-basket conversions',
      '0.05% for reserve-to-reserve conversions',
      '50% to miners and stakers, 50% to reserves',
    ],
  },
] as const

const basketCurrencyDetails: DetailItem[] = [
  {
    title: 'Reserve currencies',
    description:
      'Create basket currencies backed by up to 10 reserve currencies. Configure reserve ratios from 5% to 100% and let the protocol handle supply management.',
  },
  {
    title: 'Liquidity pools',
    description:
      'Every basket currency functions as an automated market maker with built-in liquidity pools and MEV-resistant conversion logic.',
  },
  {
    title: 'Cross-chain trading',
    description:
      'Trade across PBaaS chains and Ethereum bridge-connected assets with unified liquidity and protocol-level security.',
  },
] as const

const paymentPanels: IconListSection[] = [
  {
    icon: Wallet,
    title: 'Payment infrastructure',
    description:
      'The VerusPay invoice specification enables standardized formats for creating and interpreting invoices across the ecosystem.',
    items: [
      'Universal implementation across languages',
      'Standardized serialization format',
      'Multiple payment destinations',
      'Metadata and memo support',
    ],
  },
  {
    icon: QrCode,
    title: 'Mobile and QR integration',
    description:
      'Enable scan-to-pay functionality with QR codes and deeplinks that work with compatible wallets.',
    items: [
      'Easy-to-scan QR code generation',
      'URL-based deeplinks for instant payment',
      'Direct-to-wallet payment flows',
      'Cross-platform compatibility',
    ],
  },
  {
    icon: FileCode,
    title: 'DeFi integration',
    description:
      'Integrate DeFi features into applications with API commands instead of complex smart contract programming.',
    items: [
      'Currency conversion commands',
      'Liquidity pool management',
      'Cross-chain transaction support',
      'Programmatic basket currency creation',
    ],
  },
  {
    icon: ArrowUpDown,
    title: 'Multi-currency support',
    description:
      'Accept payments in any currency with native conversion support, so receivers can get the currency they expect.',
    items: [
      'VRSC and PBaaS currencies',
      'Bridged Ethereum assets',
      'Multiple currency types in one transaction',
      'Fixed, predictable transaction fees',
    ],
  },
] as const

const comparisonRows: ComparisonRow[] = [
  {
    feature: 'Architecture',
    verus: (
      <>
        <p className="font-medium text-gray-800 dark:text-white">
          Protocol-level implementation
        </p>
        <BulletList
          compact
          items={[
            'DeFi built directly into L1 consensus',
            'Operations validated by miners and stakers',
            'No separation between native and token accounting',
          ]}
        />
      </>
    ),
    evm: (
      <>
        <p className="font-medium text-gray-800 dark:text-white">
          Smart contract based
        </p>
        <BulletList
          compact
          items={[
            'DeFi implemented as contract code',
            'Operations validated by contract execution',
            'Native coin and token accounting are separate',
          ]}
        />
      </>
    ),
  },
  {
    feature: 'Programming required',
    verus: 'Launch currencies, pools, and DeFi operations using API commands.',
    evm: 'Requires Solidity programming or existing audited contract systems.',
  },
  {
    feature: 'Smart contract risk',
    verus:
      'None from DeFi contracts. Operations are built into consensus instead of custom contract code.',
    evm: 'High. Protocols depend on contract correctness, approvals, upgrade paths, and external dependencies.',
  },
  {
    feature: 'MEV protection',
    verus:
      'All conversions are processed simultaneously, preventing transaction reordering exploits.',
    evm: 'Vulnerable to front-running, sandwich attacks, and value extraction by builders or bots.',
  },
  {
    feature: 'Swap and trade fees',
    verus:
      '0.025% for currency-to-liquidity-pool conversions and 0.05% for currency-to-currency conversions.',
    evm: 'Typically higher swap fees plus gas fees, depending on protocol and network congestion.',
  },
  {
    feature: 'Network fees',
    verus:
      'Fixed and predictable transaction fees without fee auctions or congestion pricing.',
    evm: 'Variable fees that can rise sharply during periods of demand.',
  },
  {
    feature: 'Multi-currency support',
    verus:
      'Native support for VRSC, PBaaS currencies, bridged Ethereum assets, and basket currencies.',
    evm: 'Contract-based token support, usually centered around specific token standards.',
  },
  {
    feature: 'Liquidity pools',
    verus:
      'Protocol-level basket currencies with up to 10 reserves, configurable reserve ratios, and automatic supply management.',
    evm: 'Contract-based pools, often limited to fewer assets and vulnerable to transaction ordering.',
  },
  {
    feature: 'Identity integration',
    verus:
      'Built-in VerusID support with human-readable addresses, recovery, revocation, and data capabilities.',
    evm: 'Identity usually depends on add-on services and external naming systems.',
  },
  {
    feature: 'Throughput',
    verus:
      'Scale-out architecture with 75-800 TPS per chain and horizontal scaling through PBaaS.',
    evm: 'Base-layer throughput is limited, with scaling commonly pushed to layer 2 systems.',
  },
] as const

function SectionIntro({title, children}: {title: string; children: ReactNode}) {
  return (
    <div className="border-b border-gray-200 px-8 py-16 dark:border-gray-800 md:px-14 md:py-24">
      <div className="max-w-[760px]">
        <h2 className="mb-4 text-[28px] font-medium leading-[1.2] tracking-tight text-gray-800 dark:text-white md:mb-8 md:text-[44px]">
          {title}
        </h2>
        <div className="space-y-4 text-[15px] leading-relaxed tracking-normal text-gray-600 dark:text-gray-300 md:text-[17px]">
          {children}
        </div>
      </div>
    </div>
  )
}

function BulletList({
  compact = false,
  items,
}: {
  compact?: boolean
  items: readonly string[]
}) {
  return (
    <ul className={cn('space-y-3', compact && 'mt-3 space-y-2')}>
      {items.map((item) => (
        <li
          key={item}
          className={cn(
            'relative pl-5 leading-relaxed tracking-normal text-gray-600 dark:text-gray-300',
            compact
              ? 'text-[14px] md:text-[15px]'
              : 'text-[15px] md:text-[17px]'
          )}
        >
          <span className="absolute left-0 top-[0.7em] h-1.5 w-1.5 rounded-full bg-verus-blue dark:bg-blue-400" />
          {item}
        </li>
      ))}
    </ul>
  )
}

function IconListArticle({
  className,
  section,
}: {
  className?: string
  section: IconListSection
}) {
  const Icon = section.icon

  return (
    <article
      className={cn(
        'border-gray-200 px-8 py-10 dark:border-gray-800 md:px-12 md:py-14',
        className
      )}
    >
      <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-lg border border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-900">
        <Icon className="h-7 w-7 text-verus-blue dark:text-blue-400" />
      </div>
      <h3 className="mb-4 font-medium tracking-tight text-gray-800 dark:text-white md:text-[30px]">
        {section.title}
      </h3>
      {section.description ? (
        <p className="mb-6 text-[15px] leading-relaxed tracking-normal text-gray-600 dark:text-gray-300 md:text-[17px]">
          {section.description}
        </p>
      ) : null}
      <BulletList items={section.items} />
    </article>
  )
}

function DetailGrid({
  columns = 3,
  items,
}: {
  columns?: 2 | 3
  items: readonly DetailItem[]
}) {
  return (
    <div
      className={cn(
        'grid grid-cols-1',
        columns === 3 ? 'md:grid-cols-3' : 'md:grid-cols-2'
      )}
    >
      {items.map((item, index) => {
        const bottomRowStart =
          items.length - (items.length % columns || columns)
        const isFirstColumn = index % columns === 0
        const isBottomRow = index >= bottomRowStart

        return (
          <div
            key={item.title}
            className={cn(
              'border-gray-200 px-8 py-7 dark:border-gray-800 md:px-8 md:py-8',
              index > 0 && 'max-md:border-t',
              !isFirstColumn && 'md:border-l',
              !isBottomRow && 'md:border-b'
            )}
          >
            <h4 className="mb-2 text-[16px] font-medium text-gray-800 dark:text-white md:text-[18px]">
              {item.title}
            </h4>
            <p className="text-[15px] leading-relaxed tracking-normal text-gray-600 dark:text-gray-300 md:text-[17px]">
              {item.description}
            </p>
          </div>
        )
      })}
    </div>
  )
}

function ComparisonTable() {
  const headers = [
    {label: 'Feature'},
    {label: 'Verus DeFi', icon: '/img/verus-icon.svg'},
    {label: 'EVM-chain DeFi'},
  ] as const

  return (
    <div className="overflow-x-auto">
      <div className="min-w-[860px]">
        <div className="grid grid-cols-[0.8fr_1fr_1fr] border-b border-gray-200 bg-gray-100 dark:border-gray-800 dark:bg-gray-900">
          {headers.map((heading, index) => (
            <div
              key={heading.label}
              className={cn(
                'px-6 py-5 text-[15px] font-medium text-gray-800 dark:text-white md:px-8 md:text-[17px]',
                index > 0 && 'border-l border-gray-200 dark:border-gray-800'
              )}
            >
              <div className="flex items-center gap-2">
                {'icon' in heading ? (
                  <Image
                    src={heading.icon}
                    alt=""
                    width={18}
                    height={18}
                    className="h-[18px] w-[18px]"
                    aria-hidden="true"
                  />
                ) : null}
                <span>{heading.label}</span>
              </div>
            </div>
          ))}
        </div>

        {comparisonRows.map((row, rowIndex) => (
          <div
            key={row.feature}
            className={cn(
              'grid grid-cols-[0.8fr_1fr_1fr] border-b border-gray-200 dark:border-gray-800',
              rowIndex % 2 === 1 && 'bg-blue-50/40 dark:bg-blue-950/20'
            )}
          >
            <div className="px-6 py-5 text-[15px] font-medium text-gray-800 dark:text-white md:px-8">
              {row.feature}
            </div>
            {[row.verus, row.evm].map((cell, index) => (
              <div
                key={`${row.feature}-${index}`}
                className="border-l border-gray-200 px-6 py-5 text-[14px] leading-relaxed tracking-normal text-gray-600 dark:border-gray-800 dark:text-gray-300 md:px-8 md:text-[15px]"
              >
                {cell}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}

export function DeFiContent() {
  return (
    <>
      <section className="border-t border-gray-200 bg-gradient-to-br from-blue-50 to-white dark:border-gray-800 dark:from-blue-950/40 dark:to-gray-950">
        <SectionIntro title="Build DeFi applications protected from MEV attacks">
          <p>
            Verus DeFi solves the MEV problem by processing conversions
            simultaneously at the protocol level. Every trade in a block gets
            the same fair price, eliminating front-running, back-running, and
            sandwich attacks.
          </p>
          <p>
            Unlike DeFi platforms that rely on smart contracts and sequential
            transaction processing, Verus handles DeFi operations through
            consensus.
          </p>
        </SectionIntro>

        <div className="grid grid-cols-1 md:grid-cols-2">
          {mevPanels.map((section, index) => (
            <IconListArticle
              key={section.title}
              section={section}
              className={index > 0 ? 'max-md:border-t md:border-l' : undefined}
            />
          ))}
        </div>

        <div className="border-t border-gray-200 dark:border-gray-800">
          <div className="border-b border-gray-200 px-8 py-10 dark:border-gray-800 md:px-12 md:py-14">
            <div className="flex max-w-[760px] items-start gap-4">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg border border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-900">
                <Coins className="h-6 w-6 text-verus-blue dark:text-blue-400" />
              </div>
              <div>
                <h3 className="mb-3 font-medium tracking-tight text-gray-800 dark:text-white md:text-[30px]">
                  Basket currencies
                </h3>
                <p className="text-[15px] leading-relaxed tracking-normal text-gray-600 dark:text-gray-300 md:text-[17px]">
                  Basket currencies combine liquidity pools, reserve backing,
                  and cross-chain conversion into one protocol-level primitive.
                </p>
              </div>
            </div>
          </div>
          <DetailGrid items={basketCurrencyDetails} />
        </div>
      </section>

      <section className="border-t border-gray-200 bg-gray-50 dark:border-gray-800 dark:bg-gray-950">
        <SectionIntro title="Build cross-chain payment infrastructure with simple APIs">
          <p>
            Implement standardized payment solutions and financial protocols
            with straightforward API commands.
          </p>
        </SectionIntro>

        <div className="grid grid-cols-1 md:grid-cols-2">
          {paymentPanels.map((section, index) => (
            <IconListArticle
              key={section.title}
              section={section}
              className={cn(
                index > 0 && 'max-md:border-t',
                index % 2 === 1 && 'md:border-l',
                index < paymentPanels.length - 2 && 'md:border-b'
              )}
            />
          ))}
        </div>
      </section>

      <section className="border-t border-gray-200 bg-gradient-to-br from-blue-50 to-white dark:border-gray-800 dark:from-blue-950/40 dark:to-gray-950">
        <SectionIntro title="Compare financial protocols for your dApp">
          <p>
            Verus replaces contract-heavy financial infrastructure with native
            protocol operations, predictable fees, and consensus-level
            validation.
          </p>
        </SectionIntro>

        <ComparisonTable />

        <div className="flex gap-4 border-t border-gray-200 px-8 py-8 dark:border-gray-800 md:px-14">
          <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-lg border border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-900">
            <Scale className="h-5 w-5 text-verus-blue dark:text-blue-400" />
          </div>
          <p className="max-w-[860px] text-[15px] leading-relaxed tracking-normal text-gray-600 dark:text-gray-300 md:text-[17px]">
            The comparison focuses on application architecture, risk surface,
            and cost predictability for builders choosing a financial protocol
            layer.
          </p>
        </div>
      </section>
    </>
  )
}
