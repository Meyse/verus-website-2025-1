import Image from 'next/image'

import {env} from '@/configs/env'
import {
  ArrowRight,
  Code,
  Coins,
  DollarSign,
  Scale,
  Server,
  Shield,
  Wallet,
} from 'lucide-react'
import type {LucideIcon} from 'lucide-react'
import {IoLogoDiscord} from 'react-icons/io5'

import {Button} from '@/components/ui/button'

const comparisons: Array<{
  title: string
  icon: LucideIcon
  vm: string[]
  verus: string[]
}> = [
  {
    title: 'Core protocol design',
    icon: Server,
    vm: [
      'Uses a virtual machine such as the EVM to execute smart contracts.',
      'Only the native currency is enforced directly by the blockchain protocol.',
      'Tokens, identities, and DeFi are usually reimplemented as separate contract systems.',
    ],
    verus: [
      'Uses smart transactions with core functionality built directly into the protocol layer.',
      'Currencies, identities, and DeFi operations are verified and accounted for at consensus level.',
    ],
  },
  {
    title: 'Scalability',
    icon: Scale,
    vm: [
      'Usually focuses on scaling up a single chain.',
      'Relies on Layer 2 systems or sharding as demand increases.',
      'Each added layer brings more operational and security complexity.',
    ],
    verus: [
      'Scales out through multiple interoperable PBaaS chains.',
      'Keeps the full security and feature model available across chains.',
      'Matches the internet model of adding interoperable systems instead of upgrading one bottleneck.',
    ],
  },
  {
    title: 'Security model',
    icon: Shield,
    vm: [
      'Smart contracts can introduce vulnerabilities through coding errors or unexpected behaviors.',
      'Each contract often reinvents accounting and permissions on its own.',
    ],
    verus: [
      'Core features are protocol primitives with standardized rules enforced by consensus.',
      'Removes whole categories of contract risk by not requiring basic functions to be reimplemented.',
    ],
  },
  {
    title: 'Development approach',
    icon: Code,
    vm: [
      'Requires specialized smart contract development and audit workflows.',
      'Each application usually ships its own contract stack.',
    ],
    verus: [
      'No specialized blockchain language is required for common protocol features.',
      'Applications can call protocol functions through straightforward APIs, QR flows, or deep links.',
    ],
  },
  {
    title: 'DeFi implementation',
    icon: Scale,
    vm: [
      'DeFi protocols usually run as smart contracts.',
      'Sequential execution often exposes users to MEV, front-running, and sandwich attacks.',
    ],
    verus: [
      'DeFi operates at protocol level with simultaneous block processing.',
      'All conversions in the same block get the same fair price with no spread.',
    ],
  },
  {
    title: 'Wallet interaction',
    icon: Wallet,
    vm: [
      'Approval flows can be difficult for users to interpret and easy to misuse.',
      'Many transactions ask users to authorize broad permissions.',
    ],
    verus: [
      'Users know exactly what the wallet will execute.',
      'Transaction boundaries and permissions are explicit and narrow.',
    ],
  },
  {
    title: 'Currency management',
    icon: Coins,
    vm: [
      'Tokens are managed by individual contracts with differing implementations and assumptions.',
    ],
    verus: [
      'Currencies are protocol primitives tracked and validated by consensus rules.',
      'Behavior is standardized instead of depending on per-token contract quality.',
    ],
  },
  {
    title: 'Cost structure',
    icon: DollarSign,
    vm: [
      'Gas costs rise with smart contract execution complexity.',
      'Fees often vary sharply with network congestion.',
    ],
    verus: [
      'Transactions use fixed low fees such as 0.0001 VRSC.',
      'Reserve-to-basket conversions cost 0.025%; reserve-to-reserve conversions cost 0.05%.',
      'Protocol fees are split 50/50 between miners and stakers and basket reserves.',
    ],
  },
]

export function ComparisonTable() {
  return (
    <section className="bg-gray-50 dark:bg-gray-950">
      <div className="border-b border-gray-200 px-8 py-12 dark:border-gray-800 md:px-14 md:py-14">
        <div className="max-w-[760px]">
          <h2 className="mb-4 text-[28px] font-medium leading-[1.2] tracking-tight text-gray-800 dark:text-white md:mb-8 md:text-[44px]">
            Compare the architecture
          </h2>
          <p className="text-[15px] leading-relaxed tracking-normal text-gray-600 dark:text-gray-300 md:text-[17px]">
            VM-first chains push core application features into contract code.
            Verus moves common blockchain functions such as currencies,
            identities, data, and DeFi into protocol primitives. That changes
            the risk model, the cost model, and the amount of custom
            infrastructure a team has to maintain.
          </p>
        </div>
      </div>

      <div className="hidden border-b border-gray-200 dark:border-gray-800 md:grid md:grid-cols-[280px_minmax(0,1fr)_minmax(0,1fr)]">
        <div className="px-8 py-5 md:px-10" />
        <div className="border-l border-gray-200 px-8 py-5 text-[15px] font-medium tracking-normal text-gray-800 dark:border-gray-800 dark:text-white md:px-10">
          VM-based blockchains
        </div>
        <div className="border-l border-gray-200 bg-gradient-to-br from-blue-50/70 to-white px-8 py-5 text-[15px] font-medium tracking-normal text-gray-800 dark:border-gray-800 dark:from-blue-950/20 dark:to-gray-950 dark:text-white md:px-10">
          <div className="flex items-center gap-2">
            <Image
              src="/img/verus-icon.svg"
              alt=""
              width={18}
              height={18}
              className="h-[18px] w-[18px]"
              aria-hidden="true"
            />
            <span>Verus Protocol</span>
          </div>
        </div>
      </div>

      <div>
        {comparisons.map((comparison, index) => {
          const Icon = comparison.icon

          return (
            <div
              key={comparison.title}
              className={`grid grid-cols-1 md:grid-cols-[280px_minmax(0,1fr)_minmax(0,1fr)] ${index > 0 ? 'border-t border-gray-200 dark:border-gray-800' : ''}`}
            >
              <div className="px-8 py-8 md:px-10 md:py-10">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg border border-gray-200 bg-white text-verus-blue dark:border-gray-800 dark:bg-gray-900 dark:text-blue-400">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mb-4 text-[24px] font-medium leading-[1.2] tracking-tight text-gray-800 dark:text-white md:text-[30px]">
                  {comparison.title}
                </h3>
              </div>

              <div className="border-t border-gray-200 px-8 py-8 dark:border-gray-800 md:border-l md:border-t-0 md:px-10 md:py-10">
                <p className="mb-4 text-[13px] font-medium tracking-normal text-gray-800 dark:text-white md:hidden">
                  VM-based blockchains
                </p>
                <ul className="space-y-3">
                  {comparison.vm.map(point => (
                    <li
                      key={point}
                      className="flex items-start gap-3 text-[15px] leading-relaxed tracking-normal text-gray-600 dark:text-gray-300"
                    >
                      <span className="mt-[9px] h-1.5 w-1.5 rounded-full bg-gray-400 dark:bg-gray-500" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="border-t border-gray-200 bg-gradient-to-br from-blue-50/45 to-white px-8 py-8 dark:border-gray-800 dark:from-blue-950/15 dark:to-gray-950 md:border-l md:border-t-0 md:px-10 md:py-10">
                <p className="mb-4 text-[13px] font-medium tracking-normal text-verus-blue dark:text-blue-400 md:hidden">
                  Verus Protocol
                </p>
                <ul className="space-y-3">
                  {comparison.verus.map(point => (
                    <li
                      key={point}
                      className="flex items-start gap-3 text-[15px] leading-relaxed tracking-normal text-gray-600 dark:text-gray-300"
                    >
                      <span className="mt-[9px] h-1.5 w-1.5 rounded-full bg-verus-blue dark:bg-blue-400" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )
        })}
      </div>

      <div className="border-t border-gray-200 bg-gradient-to-br from-blue-50/70 to-white px-8 py-12 dark:border-gray-800 dark:from-blue-950/40 dark:to-gray-950 md:px-14 md:py-14">
        <div className="mx-auto max-w-[760px] text-center">
          <h2 className="mb-4 text-[28px] font-medium leading-[1.2] tracking-tight text-gray-800 dark:text-white md:text-[44px]">
            Test the difference in practice
          </h2>
          <p className="text-[15px] leading-relaxed tracking-normal text-gray-600 dark:text-gray-300 md:text-[17px]">
            Verus gives you protocol-level currencies, identities, data, and
            DeFi instead of asking every application to rebuild them in
            contracts. If you want to evaluate that model properly, start with
            the developer path and compare the implementation overhead
            directly.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-4 md:flex-row">
            <Button
              asChild
              variant="verusPrimary"
              size="verus"
              className="w-full md:w-fit"
            >
              <a href="/build/start">
                Get started
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </Button>
            <Button
              asChild
              variant="verusSecondaryDark"
              size="verus"
              className="w-full md:w-fit"
            >
              <a
                href={env.NEXT_PUBLIC_DISCORD}
                target="_blank"
                rel="noopener noreferrer"
              >
                Ask in Discord
                <IoLogoDiscord className="h-5 w-5 md:h-6 md:w-6" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
