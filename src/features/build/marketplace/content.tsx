import type {ReactNode} from 'react'
import type {LucideIcon} from 'lucide-react'

import {
  ArrowLeftRight,
  Code2,
  Coins,
  FileCode,
  Layers,
  Store,
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

const developerPanels: IconListSection[] = [
  {
    icon: Store,
    title: 'Technical advantages',
    description:
      'Use protocol-level marketplace functionality instead of complex smart contract escrow systems.',
    items: [
      'Reduced complexity with no custom escrow contracts to write and audit',
      'Lower transaction costs through direct protocol implementation',
      'Protocol-level validation reduces smart contract vulnerability risk',
      'Atomic settlement ensures transaction finality',
    ],
  },
  {
    icon: Code2,
    title: 'Simple API commands',
    description:
      'Marketplace behavior is handled at the protocol level, from offer creation to settlement.',
    items: [
      'makeoffer creates trading offers',
      'takeoffer accepts existing offers',
      'listopenoffers shows outstanding wallet offers',
      'getoffers queries available offers',
      'closeoffers cancels active offers',
    ],
  },
  {
    icon: ArrowLeftRight,
    title: 'Core capabilities',
    description:
      'Build trading flows that work across the Verus ecosystem without separate custodial infrastructure.',
    items: [
      'Complete offer management system',
      'Global offer discovery and querying',
      'Atomic settlement engine',
      'Privacy-preserving transactions',
    ],
  },
  {
    icon: FileCode,
    title: 'Implementation best practices',
    description:
      'Keep marketplace interfaces responsive, verifiable, and understandable for users.',
    items: [
      'Cache offer data to reduce node queries',
      'Verify offers before accepting them',
      'Provide clear transaction previews',
      'Handle payment address generation for privacy',
    ],
  },
] as const

const gettingStartedItems: DetailItem[] = [
  {
    title: 'Setup steps',
    description:
      'Set up a Verus node or connect to an existing node, initialize a client library, authenticate with node credentials, and call marketplace API functions.',
  },
  {
    title: 'Business models',
    description:
      'Build premium trading tools, subscription services for market data, integration services, or platform connections without central platform risk.',
  },
  {
    title: 'Integration support',
    description:
      'Use developer documentation, code examples, and the Verus community to build marketplace applications with privacy-preserving transactions.',
  },
] as const

const useCases: IconListSection[] = [
  {
    icon: Store,
    title: 'Specialized marketplaces',
    items: [
      'Domain and username marketplaces for premium VerusIDs',
      'Digital collectible exchanges for NFT-like assets',
      'Service marketplaces with tokenized access',
      'Financial markets for specialized currencies',
    ],
  },
  {
    icon: Coins,
    title: 'Trading platforms',
    items: [
      'Advanced order matching systems',
      'Portfolio management applications',
      'Cross-chain trading platforms',
      'Mobile trading applications',
    ],
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

function BulletList({items}: {items: readonly string[]}) {
  return (
    <ul className="space-y-3">
      {items.map((item) => (
        <li
          key={item}
          className="relative pl-5 text-[15px] leading-relaxed tracking-normal text-gray-600 dark:text-gray-300 md:text-[17px]"
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

function DetailGrid({items}: {items: readonly DetailItem[]}) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3">
      {items.map((item, index) => {
        const isDesktopFirstColumn = index % 3 === 0
        const isDesktopBottomRow = index >= items.length - 3

        return (
          <div
            key={item.title}
            className={cn(
              'border-gray-200 px-8 py-7 dark:border-gray-800 md:px-8 md:py-8',
              index > 0 && 'max-md:border-t',
              !isDesktopFirstColumn && 'md:border-l',
              !isDesktopBottomRow && 'md:border-b'
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

export function MarketplaceContent() {
  return (
    <>
      <section className="border-t border-gray-200 bg-gradient-to-br from-blue-50 to-white dark:border-gray-800 dark:from-blue-950/40 dark:to-gray-950">
        <SectionIntro title="Build decentralized trading applications without complex contracts">
          <p>
            The Verus P2P Marketplace protocol provides a foundation for
            developers to build trading applications with API commands instead
            of smart contract programming.
          </p>
          <p>
            Offer creation, discovery, acceptance, cancellation, and atomic
            settlement are protocol-level functions that applications can
            compose into specialized marketplace products.
          </p>
        </SectionIntro>

        <div className="grid grid-cols-1 md:grid-cols-2">
          {developerPanels.map((section, index) => (
            <IconListArticle
              key={section.title}
              section={section}
              className={cn(
                index > 0 && 'max-md:border-t',
                index % 2 === 1 && 'md:border-l',
                index < developerPanels.length - 2 && 'md:border-b'
              )}
            />
          ))}
        </div>
      </section>

      <section className="border-t border-gray-200 bg-gray-50 dark:border-gray-800 dark:bg-gray-950">
        <SectionIntro title="Start with protocol-level marketplace functions">
          <p>
            Connect to the protocol, query offers, preview transactions, and
            settle trades without taking custody of user assets.
          </p>
        </SectionIntro>

        <DetailGrid items={gettingStartedItems} />
      </section>

      <section className="border-t border-gray-200 bg-gradient-to-br from-blue-50 to-white dark:border-gray-800 dark:from-blue-950/40 dark:to-gray-950">
        <SectionIntro title="Marketplace products you can build">
          <p>
            Combine offer management with VerusID, currencies, privacy, and DeFi
            to build focused trading experiences for different asset types.
          </p>
        </SectionIntro>

        <div className="grid grid-cols-1 md:grid-cols-2">
          {useCases.map((section, index) => (
            <IconListArticle
              key={section.title}
              section={section}
              className={index > 0 ? 'max-md:border-t md:border-l' : undefined}
            />
          ))}
        </div>

        <div className="flex gap-4 border-t border-gray-200 px-8 py-8 dark:border-gray-800 md:px-14">
          <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-lg border border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-900">
            <Layers className="h-5 w-5 text-verus-blue dark:text-blue-400" />
          </div>
          <p className="max-w-[860px] text-[15px] leading-relaxed tracking-normal text-gray-600 dark:text-gray-300 md:text-[17px]">
            Marketplace applications can implement only the trading functions
            they need while using the same protocol-level settlement guarantees.
          </p>
        </div>
      </section>
    </>
  )
}
