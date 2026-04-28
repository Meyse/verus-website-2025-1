import type {ReactNode} from 'react'
import type {LucideIcon} from 'lucide-react'

import {
  Code,
  Code2,
  Database,
  FileCode,
  Key,
  Layers,
  Lock,
  Network,
  Scale,
} from 'lucide-react'

import {cn} from '@/lib/utils'

type IconListSection = {
  icon: LucideIcon
  title: string
  items: readonly string[]
}

type DetailItem = {
  title: string
  description: string
}

type Rating = 'Strong' | 'Moderate' | 'Limited'

type ComparisonCell = {
  rating: Rating
  text: string
}

type ComparisonRow = {
  feature: string
  verus: ComparisonCell
  ipfs: ComparisonCell
  servers: ComparisonCell
}

const storagePanels: IconListSection[] = [
  {
    icon: Database,
    title: 'Developer API features',
    items: [
      'Store up to 999,999 bytes per entry',
      'Automatic indexing for fast retrieval',
      'Support for structured and unstructured data',
      'Cross-chain data references and queries',
    ],
  },
  {
    icon: Lock,
    title: 'Privacy and security',
    items: [
      'Encryption support for stored data',
      'Private storage through zk-SNARKs transactions',
      'VerusID-based access control',
      'Selective data sharing capabilities',
    ],
  },
] as const

const costItems: DetailItem[] = [
  {
    title: 'Verus storage',
    description:
      'On the Verus blockchain, storage costs approximately 0.01 VRSC per kilobyte. Fees are paid in VRSC and flow directly to miners and stakers.',
  },
  {
    title: 'PBaaS chain storage',
    description:
      'Each PBaaS chain can set its own storage fees based on capacity and validator costs, creating a competitive marketplace for blockchain storage.',
  },
  {
    title: 'Cost optimization',
    description:
      'Applications can choose chains with appropriate fee structures and use cross-chain references to distribute data efficiently.',
  },
] as const

const dataStructureItems: DetailItem[] = [
  {
    title: 'contentmultimap',
    description:
      'Maps namespaces to collections of data objects, enabling complex data structures.',
  },
  {
    title: 'iMvTg...D9R3b',
    description: 'VDXF key for myId.vrsc::shop.',
  },
  {
    title: 'i4GC1...nCQv',
    description: 'A data descriptor key for the stored object.',
  },
  {
    title: 'label',
    description: 'VDXF key for myId.vrsc::shop.type.',
  },
  {
    title: 'objectdata',
    description: 'Contains the actual JSON content being stored.',
  },
] as const

const exampleUseCaseItems = [
  'Business name, such as Bookshop',
  'Location address, such as 15 Sea View, Miami, 132523',
  'Property value, such as $100,000',
] as const

const vdxfPanels: IconListSection[] = [
  {
    icon: Key,
    title: 'Developer integration',
    items: [
      'Globally unique 20-byte identifiers',
      'Human-readable type names',
      'Namespace-based permissions',
      'Support for complex data structures',
    ],
  },
  {
    icon: Code,
    title: 'Use cases for builders',
    items: [
      'Identity profiles and credentials',
      'Application states and settings',
      'Digital asset metadata',
      'Cross-chain references',
    ],
  },
] as const

const multiChainItems: DetailItem[] = [
  {
    title: 'Data sharding',
    description:
      'Distribute data across multiple PBaaS chains while maintaining atomic references and access patterns.',
  },
  {
    title: 'Storage markets',
    description:
      'PBaaS chains can compete on capacity, cost, and features, with different chains optimizing for different storage needs.',
  },
  {
    title: 'Unified access',
    description:
      'Query data across chains through VDXF keys while the protocol handles cross-chain references and retrieval.',
  },
] as const

const technicalPanels: IconListSection[] = [
  {
    icon: Code2,
    title: 'Data object structure',
    items: [
      'Version tracking for compatibility',
      'Special handling flags',
      'Data payload field',
      'Human-readable labels',
    ],
  },
  {
    icon: FileCode,
    title: 'Content management',
    items: [
      'MIME type specification',
      'Encryption metadata',
      'Custom type definitions',
      'Schema validation rules',
    ],
  },
] as const

const toolkitItems: DetailItem[] = [
  {
    title: 'RESTful API',
    description:
      'Use simple API commands for storing and retrieving data while the protocol manages blockchain interaction.',
  },
  {
    title: 'Query system',
    description:
      'Find and retrieve data across multiple chains with lookups based on VDXF type and namespace.',
  },
] as const

const comparisonRows: ComparisonRow[] = [
  {
    feature: 'Data ownership',
    verus: {
      rating: 'Strong',
      text: 'True user ownership through VerusID, with users maintaining control of their data.',
    },
    ipfs: {
      rating: 'Moderate',
      text: 'Content-addressed, but persistence depends on pinning services.',
    },
    servers: {
      rating: 'Limited',
      text: 'Provider controls the data and account relationship.',
    },
  },
  {
    feature: 'Persistence',
    verus: {
      rating: 'Strong',
      text: 'Permanent by default after a one-time storage fee.',
    },
    ipfs: {
      rating: 'Moderate',
      text: 'Requires pinning services or active hosting.',
    },
    servers: {
      rating: 'Moderate',
      text: 'Depends on subscription, account status, or provider policy.',
    },
  },
  {
    feature: 'Privacy',
    verus: {
      rating: 'Strong',
      text: 'Protocol-level privacy with zk-SNARKs, encryption, and selective disclosure.',
    },
    ipfs: {
      rating: 'Moderate',
      text: 'Public by default, with encryption handled outside the protocol.',
    },
    servers: {
      rating: 'Moderate',
      text: 'Depends on provider implementation and privacy policy.',
    },
  },
  {
    feature: 'Query capabilities',
    verus: {
      rating: 'Strong',
      text: 'Direct key lookup through VDXF, multimap support, and built-in versioning.',
    },
    ipfs: {
      rating: 'Limited',
      text: 'Limited without additional indexing services.',
    },
    servers: {
      rating: 'Strong',
      text: 'Full database query capabilities.',
    },
  },
  {
    feature: 'Cost structure',
    verus: {
      rating: 'Strong',
      text: 'One-time fee for permanent storage, with chain-dependent pricing.',
    },
    ipfs: {
      rating: 'Moderate',
      text: 'Free to use at the protocol layer, but persistence often requires pinning costs.',
    },
    servers: {
      rating: 'Limited',
      text: 'Ongoing subscription, storage, and bandwidth costs.',
    },
  },
  {
    feature: 'Identity integration',
    verus: {
      rating: 'Strong',
      text: 'Native self-sovereign identity system through VerusID.',
    },
    ipfs: {
      rating: 'Limited',
      text: 'No native identity system.',
    },
    servers: {
      rating: 'Moderate',
      text: 'Account-based identity controlled by the provider.',
    },
  },
  {
    feature: 'Access control',
    verus: {
      rating: 'Strong',
      text: 'Built in through VerusID permissions and encryption.',
    },
    ipfs: {
      rating: 'Limited',
      text: 'Limited without additional application layers.',
    },
    servers: {
      rating: 'Strong',
      text: 'Granular access control is familiar and available.',
    },
  },
  {
    feature: 'Cross-chain support',
    verus: {
      rating: 'Strong',
      text: 'Native cross-chain data access across PBaaS chains.',
    },
    ipfs: {
      rating: 'Moderate',
      text: 'Network agnostic, but not chain-native.',
    },
    servers: {
      rating: 'Limited',
      text: 'No native blockchain support.',
    },
  },
  {
    feature: 'Data integrity',
    verus: {
      rating: 'Strong',
      text: 'Cryptographically verified by consensus.',
    },
    ipfs: {
      rating: 'Strong',
      text: 'Content-addressed integrity.',
    },
    servers: {
      rating: 'Moderate',
      text: 'Depends on provider controls and backups.',
    },
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
      <h3 className="mb-6 font-medium tracking-tight text-gray-800 dark:text-white md:text-[30px]">
        {section.title}
      </h3>
      <BulletList items={section.items} />
    </article>
  )
}

function DetailGrid({
  columns = 2,
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

function TerminalExample() {
  return (
    <div className="overflow-hidden rounded-lg border border-gray-800/80 bg-gray-950 shadow-lg">
      <div className="flex h-10 items-center border-b border-gray-800 bg-gray-900 px-4">
        <div className="flex space-x-2">
          <div className="h-3 w-3 rounded-full bg-red-500/80" />
          <div className="h-3 w-3 rounded-full bg-yellow-500/80" />
          <div className="h-3 w-3 rounded-full bg-green-500/80" />
        </div>
        <div className="ml-4 font-mono text-xs text-gray-400">
          Terminal - verus
        </div>
      </div>
      <div className="overflow-x-auto p-6 font-mono text-[13px] leading-relaxed md:p-8 md:text-[14px]">
        <p className="mb-4 text-green-400">
          # Storing data objects in a VerusID using contentmultimap
        </p>
        <p className="mb-6 text-blue-400">./verus updateidentity {'{'}</p>
        <div className="mb-6 pl-4">
          <p className="text-gray-300">
            <span className="text-pink-400">"name"</span>:{' '}
            <span className="text-yellow-300">"yourid"</span>,
          </p>
          <p className="text-gray-300">
            <span className="text-pink-400">"contentmultimap"</span>: {'{'}
          </p>
          <div className="pl-4">
            <p className="text-gray-300">
              <span className="text-yellow-300">
                "iMvTg2HGhKKGYMqtapvRyfZNahbzmD9R3b"
              </span>
              : [
            </p>
            <div className="pl-4">
              <p className="text-gray-300">{'{'}</p>
              <div className="pl-4">
                <p className="text-gray-300">
                  <span className="text-yellow-300">
                    "i4GC1YGEVD21afWudGoFJVdnfjJ5XWnCQv"
                  </span>
                  : {'{'}
                </p>
                <div className="pl-4">
                  <p className="text-gray-300">
                    <span className="text-pink-400">"version"</span>:{' '}
                    <span className="text-yellow-300">1</span>,
                  </p>
                  <p className="text-gray-300">
                    <span className="text-pink-400">"label"</span>:{' '}
                    <span className="text-yellow-300">
                      "i3esdByX2PKx5vJiuNrRb61KAKqsBEMxac"
                    </span>
                    ,
                  </p>
                  <p className="text-gray-300">
                    <span className="text-pink-400">"mimetype"</span>:{' '}
                    <span className="text-yellow-300">"text/plain"</span>,
                  </p>
                  <p className="text-gray-300">
                    <span className="text-pink-400">"objectdata"</span>: {'{'}
                  </p>
                  <div className="pl-4">
                    <p className="text-gray-300">
                      <span className="text-pink-400">"message"</span>:{' '}
                      <span className="text-yellow-300">"Bookshop"</span>
                    </p>
                  </div>
                  <p className="text-gray-300">{'}'}</p>
                </div>
                <p className="text-gray-300">{'}'},</p>
              </div>
              <p className="text-gray-300">{'}'}</p>
            </div>
            <p className="text-blue-300">
              {'// Additional data entries omitted for clarity'}
            </p>
            <p className="text-gray-300">]</p>
          </div>
          <p className="text-gray-300">{'}'}</p>
        </div>
        <p className="text-blue-400">{'}'}</p>
      </div>
    </div>
  )
}

function RatingBadge({rating}: {rating: Rating}) {
  return (
    <span
      className={cn(
        'mb-2 inline-flex rounded-full px-2.5 py-1 text-[12px] font-medium',
        rating === 'Strong' &&
          'bg-emerald-50 text-emerald-700 dark:bg-emerald-950/50 dark:text-emerald-300',
        rating === 'Moderate' &&
          'bg-amber-50 text-amber-700 dark:bg-amber-950/50 dark:text-amber-300',
        rating === 'Limited' &&
          'bg-red-50 text-red-700 dark:bg-red-950/50 dark:text-red-300'
      )}
    >
      {rating}
    </span>
  )
}

function ComparisonTable() {
  return (
    <div className="overflow-x-auto">
      <div className="min-w-[900px]">
        <div className="grid grid-cols-[0.85fr_1fr_1fr_1fr] border-b border-gray-200 bg-gray-100 dark:border-gray-800 dark:bg-gray-900">
          {[
            'Feature',
            'Verus on-chain storage',
            'IPFS',
            'Centralized servers',
          ].map((heading, index) => (
            <div
              key={heading}
              className={cn(
                'px-6 py-5 text-[15px] font-medium text-gray-800 dark:text-white md:px-8 md:text-[17px]',
                index > 0 && 'border-l border-gray-200 dark:border-gray-800'
              )}
            >
              {heading}
            </div>
          ))}
        </div>

        {comparisonRows.map((row, rowIndex) => (
          <div
            key={row.feature}
            className={cn(
              'grid grid-cols-[0.85fr_1fr_1fr_1fr] border-b border-gray-200 dark:border-gray-800',
              rowIndex % 2 === 1 && 'bg-blue-50/40 dark:bg-blue-950/20'
            )}
          >
            <div className="px-6 py-5 text-[15px] font-medium text-gray-800 dark:text-white md:px-8">
              {row.feature}
            </div>
            {[row.verus, row.ipfs, row.servers].map((cell, index) => (
              <div
                key={`${row.feature}-${index}`}
                className="border-l border-gray-200 px-6 py-5 dark:border-gray-800 md:px-8"
              >
                <RatingBadge rating={cell.rating} />
                <p className="text-[14px] leading-relaxed tracking-normal text-gray-600 dark:text-gray-300 md:text-[15px]">
                  {cell.text}
                </p>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}

export function DataContent() {
  return (
    <>
      <section className="border-t border-gray-200 bg-gradient-to-br from-blue-50 to-white dark:border-gray-800 dark:from-blue-950/40 dark:to-gray-950">
        <SectionIntro title="Blockchain-native storage for modern dApps">
          <p>
            Integrate censorship-resistant storage directly in your application
            with blockchain-level security guarantees.
          </p>
          <p>
            Every PBaaS chain includes a native storage layer that lets you
            store and index data directly on the blockchain. Verus makes data
            storage a core protocol feature rather than an external service.
          </p>
        </SectionIntro>

        <div className="grid grid-cols-1 md:grid-cols-2">
          {storagePanels.map((section, index) => (
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
                <Scale className="h-6 w-6 text-verus-blue dark:text-blue-400" />
              </div>
              <div>
                <h3 className="mb-3 font-medium tracking-tight text-gray-800 dark:text-white md:text-[30px]">
                  Cost structure for developers
                </h3>
                <p className="text-[15px] leading-relaxed tracking-normal text-gray-600 dark:text-gray-300 md:text-[17px]">
                  Storage costs are transparent and chain-specific, so
                  applications can choose the storage market that fits their
                  access and permanence requirements.
                </p>
              </div>
            </div>
          </div>
          <DetailGrid columns={3} items={costItems} />
        </div>
      </section>

      <section className="border-t border-gray-200 bg-gray-50 dark:border-gray-800 dark:bg-gray-950">
        <SectionIntro title="Store data with simple commands">
          <p>
            Add structured data to your VerusID with a standard API call,
            creating a permanent on-chain data store.
          </p>
        </SectionIntro>

        <div className="grid grid-cols-1 md:grid-cols-[minmax(0,1.35fr)_minmax(0,1fr)]">
          <div className="px-8 py-10 md:px-12 md:py-14">
            <TerminalExample />
          </div>
          <div className="border-t border-gray-200 px-8 py-10 dark:border-gray-800 md:border-l md:border-t-0 md:px-12 md:py-14">
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-lg border border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-900">
              <Database className="h-7 w-7 text-verus-blue dark:text-blue-400" />
            </div>
            <h3 className="mb-4 font-medium tracking-tight text-gray-800 dark:text-white md:text-[30px]">
              Data structure
            </h3>
            <div className="space-y-5">
              {dataStructureItems.map((item) => (
                <div
                  key={item.title}
                  className="border-t border-gray-200 pt-5 first:border-t-0 first:pt-0 dark:border-gray-800"
                >
                  <h4 className="mb-1 text-[16px] font-medium text-gray-800 dark:text-white">
                    {item.title}
                  </h4>
                  <p className="text-[15px] leading-relaxed tracking-normal text-gray-600 dark:text-gray-300 md:text-[17px]">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 px-8 py-10 dark:border-gray-800 md:px-12 md:py-14">
          <div className="max-w-[860px]">
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-lg border border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-900">
              <Code className="h-7 w-7 text-verus-blue dark:text-blue-400" />
            </div>
            <h3 className="mb-4 font-medium tracking-tight text-gray-800 dark:text-white md:text-[30px]">
              Example use case
            </h3>
            <p className="mb-6 text-[15px] leading-relaxed tracking-normal text-gray-600 dark:text-gray-300 md:text-[17px]">
              This example stores business location data in a structured format.
              Each data point has its own VDXF label for access and querying,
              while remaining cryptographically tied to the parent VerusID.
            </p>
            <BulletList items={exampleUseCaseItems} />
          </div>
        </div>
      </section>

      <section className="border-t border-gray-200 bg-gradient-to-br from-blue-50 to-white dark:border-gray-800 dark:from-blue-950/40 dark:to-gray-950">
        <SectionIntro title="Standardized data exchange across chains">
          <p>
            VDXF is a protocol-level system for defining, storing, and
            exchanging data across the Verus network.
          </p>
          <p>
            Every VDXF key is tied to a namespace, typically a VerusID, and
            includes metadata about how the data should be handled. Only
            namespace controllers can create new data types.
          </p>
        </SectionIntro>

        <div className="grid grid-cols-1 md:grid-cols-2">
          {vdxfPanels.map((section, index) => (
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
                <Network className="h-6 w-6 text-verus-blue dark:text-blue-400" />
              </div>
              <div>
                <h3 className="mb-3 font-medium tracking-tight text-gray-800 dark:text-white md:text-[30px]">
                  Multi-chain architecture
                </h3>
                <p className="text-[15px] leading-relaxed tracking-normal text-gray-600 dark:text-gray-300 md:text-[17px]">
                  Use VDXF keys as a universal reference layer across PBaaS
                  chains, storage markets, and applications.
                </p>
              </div>
            </div>
          </div>
          <DetailGrid columns={3} items={multiChainItems} />
        </div>
      </section>

      <section className="border-t border-gray-200 bg-gray-50 dark:border-gray-800 dark:bg-gray-950">
        <SectionIntro title="Simple developer-first APIs">
          <p>
            VDXF objects follow a standardized format that makes them easy to
            integrate into any application.
          </p>
          <p>
            Applications can implement partial support for VDXF data types,
            using what they understand while safely ignoring the rest.
          </p>
        </SectionIntro>

        <div className="grid grid-cols-1 md:grid-cols-2">
          {technicalPanels.map((section, index) => (
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
                <Layers className="h-6 w-6 text-verus-blue dark:text-blue-400" />
              </div>
              <div>
                <h3 className="mb-3 font-medium tracking-tight text-gray-800 dark:text-white md:text-[30px]">
                  Developer toolkit
                </h3>
                <p className="text-[15px] leading-relaxed tracking-normal text-gray-600 dark:text-gray-300 md:text-[17px]">
                  Store and retrieve on-chain data with familiar commands and
                  predictable lookup patterns.
                </p>
              </div>
            </div>
          </div>
          <DetailGrid items={toolkitItems} />
        </div>
      </section>

      <section className="border-t border-gray-200 bg-gradient-to-br from-blue-50 to-white dark:border-gray-800 dark:from-blue-950/40 dark:to-gray-950">
        <SectionIntro title="Choose the right storage for your dApp">
          <p>
            Compare on-chain storage with alternatives to make informed
            architectural decisions for your applications.
          </p>
        </SectionIntro>

        <div className="px-0 py-0">
          <ComparisonTable />
        </div>

        <div className="flex flex-col gap-4 border-t border-gray-200 px-8 py-8 dark:border-gray-800 md:flex-row md:items-center md:gap-8 md:px-14">
          {(['Strong', 'Moderate', 'Limited'] as const).map((rating) => (
            <div key={rating} className="flex items-center gap-3">
              <RatingBadge rating={rating} />
              <span className="text-[14px] text-gray-600 dark:text-gray-300 md:text-[15px]">
                {rating === 'Strong'
                  ? 'Clear capability or advantage'
                  : rating === 'Moderate'
                    ? 'Useful capability with tradeoffs'
                    : 'Limited capability or disadvantage'}
              </span>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
