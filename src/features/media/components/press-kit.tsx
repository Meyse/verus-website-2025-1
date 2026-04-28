import type {ReactNode} from 'react'

import {cn} from '@/lib/utils'

const factSheetItems = [
  {
    label: 'Launch date',
    text: "The blockchain's first block was on 21 May 2018.",
  },
  {
    label: 'Consensus mechanism',
    text: 'Proof of Power combines 50% proof-of-work and 50% proof-of-stake and is designed to resist 51% hash attacks.',
  },
  {
    label: 'Scalability',
    text: 'The protocol is designed to scale through interoperable blockchains.',
  },
  {
    label: 'Smart transactions',
    text: 'Instead of traditional smart contracts, the protocol uses protocol-level smart transactions.',
  },
  {
    label: 'Lead developer',
    text: "Michael J. Toutonghi, founder and architect of Microsoft's .NET platform, and former Vice President and Technical Fellow at Microsoft.",
  },
  {
    label: 'Fair launch',
    text: 'No ICO, no premine, no dev fees or tax. All coins are fairly mined and staked.',
  },
]

const pressSections = [
  {
    title: 'Brief introduction',
    content: (
      <p>
        Verus is a decentralized cryptocurrency protocol focused on
        self-sovereign identity, interoperable blockchains, and protocol-level
        DeFi. It gives developers and communities tools for building dApps,
        currencies, services, and user-owned data systems without relying on a
        central operator.
      </p>
    ),
  },
  {
    title: 'Fact sheet',
    content: (
      <dl className="space-y-4">
        {factSheetItems.map((item) => (
          <div key={item.label}>
            <dt className="font-medium text-gray-800 dark:text-white">
              {item.label}
            </dt>
            <dd className="mt-1">{item.text}</dd>
          </div>
        ))}
      </dl>
    ),
  },
  {
    title: 'Origins and mission',
    content: (
      <>
        <p>
          Verus started in 2018 with development led by Michael J. Toutonghi.
          The project grew from the idea that blockchain infrastructure could
          support more than payments, including user-controlled data,
          identities, currencies, and community-governed services.
        </p>
        <p>
          The mission is to provide privacy-aware, permissionless
          infrastructure for self-sovereign identities, decentralized finance,
          and verifiable community participation.
        </p>
        <p>
          Verus includes tools for decentralized voting, polling, identity, and
          currency systems that can be used without centralized control.
        </p>
      </>
    ),
  },
  {
    title: 'Development journey',
    content: (
      <>
        <p>
          Development began months before the first block was mined. From the
          beginning, the protocol focused on combining security, identity,
          currencies, and interoperability in one network.
        </p>
        <p>
          Major releases include Public Blockchains as a Service in May 2023
          and a non-custodial, consensus-proven bridge to Ethereum in October
          2023.
        </p>
      </>
    ),
  },
  {
    title: 'Key features and achievements',
    content: (
      <>
        <p>
          Proof of Power is the Verus consensus mechanism. It balances
          proof-of-work and proof-of-stake to maintain network security.
        </p>
        <p>
          Public Blockchain as a Service lets users create interoperable
          blockchains and currencies, including support for MEV-resistant DeFi.
        </p>
        <p>
          Verus launched with no ICO, premine, dev fees, or taxes. Coins are
          mined and staked through the protocol.
        </p>
      </>
    ),
  },
  {
    title: 'Community and ecosystem',
    content: (
      <>
        <p>
          Verus is not run by a company. It is an open blockchain network with
          development and direction shaped by contributors and network
          participants.
        </p>
        <p>
          Nodes, miners, and stakers secure the network and participate in the
          protocol.
        </p>
      </>
    ),
  },
]

function PressCell({
  title,
  children,
  index,
}: {
  title: string
  children: ReactNode
  index: number
}) {
  const isDesktopLeftColumn = index % 2 === 0
  const isDesktopBottomRow = index >= pressSections.length - 2

  return (
    <article
      className={cn(
        'min-w-0 border-gray-200 px-8 py-8 dark:border-gray-800 md:px-10 md:py-10',
        index > 0 && 'max-md:border-t',
        !isDesktopLeftColumn && 'md:border-l',
        !isDesktopBottomRow && 'md:border-b'
      )}
    >
      <h3 className="mb-4 text-[30px] font-medium tracking-tight text-gray-800 dark:text-white">
        {title}
      </h3>
      <div className="space-y-3 text-[15px] leading-relaxed tracking-normal text-gray-600 dark:text-gray-300 md:text-[17px]">
        {children}
      </div>
    </article>
  )
}

export function PressKit() {
  return (
    <section className="bg-gray-50 dark:bg-gray-950">
      <div className="grid grid-cols-1 md:grid-cols-2">
        {pressSections.map((section, index) => (
          <PressCell key={section.title} title={section.title} index={index}>
            {section.content}
          </PressCell>
        ))}
      </div>

      <article className="border-t border-gray-200 px-8 py-10 dark:border-gray-800 md:px-10 md:py-12">
        <div className="max-w-[820px]">
          <h3 className="mb-4 text-[30px] font-medium tracking-tight text-gray-800 dark:text-white">
            Vision for the future
          </h3>
          <div className="space-y-3 text-[15px] leading-relaxed tracking-normal text-gray-600 dark:text-gray-300 md:text-[17px]">
            <p>
              The current focus is expanding builder adoption and practical use
              cases. More developers, entrepreneurs, and communities can use
              Verus as the ecosystem grows.
            </p>
            <p>
              Verus can be used without permission to build dApps and services
              such as voting and polling systems, payment systems, social media
              platforms, customer loyalty programs, and private communication
              networks.
            </p>
          </div>
        </div>
      </article>
    </section>
  )
}
