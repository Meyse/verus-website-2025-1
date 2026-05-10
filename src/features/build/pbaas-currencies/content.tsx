import type {ReactNode} from 'react'
import type {LucideIcon} from 'lucide-react'

import Image from 'next/image'
import Link from 'next/link'

import {env} from '@/configs/env'
import {
  ArrowRight,
  ArrowUpDown,
  Award,
  BadgeDollarSign,
  Clock,
  Code,
  Coins,
  FileText,
  Globe,
  Lightbulb,
  Lock,
  Percent,
  Repeat,
  Rocket,
  Scale,
  Settings,
  Shield,
  ShieldCheck,
  User,
  UserCheck,
  Users,
  Wallet,
} from 'lucide-react'
import {FaMedium} from 'react-icons/fa'

import {cn} from '@/lib/utils'

import {Button} from '@/components/ui/button'
import {TextLinkButton} from '@/components/ui/text-link-button'

type IconListItem = {
  icon?: LucideIcon
  title?: string
  description?: string
  text?: string
}

const basketCurrencyFeatures: IconListItem[] = [
  {
    icon: Wallet,
    title: 'AMM functionality',
    description:
      'Function like automated market makers with one or more reserve currencies backing them.',
  },
  {
    icon: ArrowUpDown,
    title: 'Dynamic supply',
    description:
      'Supply expands when people convert into the basket currency and contracts when they convert out.',
  },
  {
    icon: Percent,
    title: 'Fractionally backed',
    description:
      'Currencies can be fully backed or partially backed by reserves, with reserve ratios as low as 5%.',
  },
  {
    icon: Scale,
    title: 'Value stability',
    description:
      'Value is linked to reserves and reserve ratio without external oracles or price feeds.',
  },
  {
    icon: Lock,
    title: 'MEV resistant',
    description:
      'All conversions in the same block get the same fair price with no front-running or sandwich attacks.',
  },
  {
    icon: Repeat,
    title: 'Low fees',
    description:
      'Conversion fees are 0.025% when converting to or from reserves, and 0.05% when converting between reserves.',
  },
]

const simpleTokenFeatures: IconListItem[] = [
  {
    icon: Wallet,
    title: 'No reserves',
    description: 'Standalone currencies without backing reserves.',
  },
  {
    icon: Lock,
    title: 'Static supply',
    description:
      'For decentralized tokens, the supply is fixed unless tokens are burned.',
  },
  {
    text: 'Can be used as reserves in other basket currencies',
  },
  {
    text: 'Can be exported as ERC-20 to Ethereum',
  },
]

const preconversionDetails = [
  {
    title: 'For basket currencies',
    description:
      'Users contribute currencies to the reserves and receive a proportional share of initial supply based on contribution value.',
  },
  {
    title: 'For simple tokens',
    description:
      'Users send currency to the creator at a predetermined exchange rate to receive tokens when the currency launches.',
  },
  {
    title: 'Duration',
    description:
      'The preconversion period lasts at least 20 blocks, approximately 20 minutes, and can run longer depending on project needs.',
  },
  {
    title: 'Minimum funding requirements',
    description:
      'If a minimum funding requirement is set and not met, the currency does not launch and contributors receive automatic refunds minus network fees.',
  },
] as const

const controlModels = [
  {
    icon: Lock,
    title: 'Decentralized',
    items: [
      'No single entity controls supply',
      'Supply changes based on protocol rules',
      'SubID registration fees are burned',
      'Built for community-driven projects',
    ],
  },
  {
    icon: Settings,
    title: 'Centralized',
    items: [
      'Controller can mint new supply',
      'Controller can burn existing supply',
      'Issuer controls supply behavior',
      'SubID registration fees go to the controller',
    ],
  },
  {
    icon: Rocket,
    title: 'Launch requirements',
    items: [
      'First acquire a VerusID from the chain',
      "Create currency using the VerusID's namespace",
      'Verus mainnet launch cost is 200 VRSC',
      'PBaaS chain costs are set by the chain launcher',
    ],
  },
] as const

const crowdfundingItems = [
  {
    icon: Coins,
    title: 'Basket currency crowdfunding',
    items: [
      'Pre-launch carve-outs send a percentage of reserves to specified addresses',
      'Pre-launch discounts reward early participation',
      'Preallocations add supply beyond the crowdfunded amount',
      'Liquidity pools are created automatically at launch',
    ],
  },
  {
    icon: Rocket,
    title: 'Simple token crowdfunding',
    items: [
      'Preallocations can go to a team, treasury, or other addresses',
      'Fixed conversion rates apply during crowdfunding',
      'Funding can go directly to the project treasury',
      'Vesting schedules can time-lock preallocations',
    ],
  },
  {
    icon: Shield,
    title: 'Built-in security',
    items: [
      'Funding goals that are not met trigger automatic refunds',
      'Parameters are enforced by consensus',
      'No smart contracts are needed',
      'Funds never pass through intermediaries',
    ],
  },
  {
    icon: Clock,
    title: 'Launch parameters',
    items: [
      'Pre-launch carve-out percentages',
      'Pre-launch discount rates',
      'Preallocation amounts and destinations',
      'Minimum and maximum funding goals',
      'Vesting schedules and lock periods',
    ],
  },
] as const

const keyParameters = [
  {
    name: 'options:33',
    description: 'Creates a basket currency with reserve backing',
  },
  {
    name: 'currencies',
    description: 'Defines which currencies back the basket currency',
  },
  {
    name: 'initialcontributions',
    description: 'Initial reserve amounts developers must provide',
  },
  {
    name: 'minpreconversion',
    description: 'Minimum funding thresholds for the preconversion phase',
  },
  {
    name: 'prelaunchcarveout',
    description: 'Percentage of reserves sent to developers before launch',
  },
] as const

const applicationLinks = [
  {
    href: `${env.NEXT_PUBLIC_VERUS_MEDIUM}/community-currencies-a-case-study-to-explore-new-technical-possibilities-ede897433b55`,
    label:
      'Community Currencies: A Case Study to Explore New Technical Possibilities',
  },
  {
    href: `${env.NEXT_PUBLIC_VERUS_MEDIUM}/the-coming-of-age-of-social-tokens-518aed68c8f2`,
    label: 'The Coming of Age of Social Tokens',
  },
] as const

const applications = [
  {
    icon: User,
    title: 'Social tokens',
    description:
      'Create personalized currencies that connect creators with their communities through direct ownership and engagement.',
    items: [
      'Launch influencer tokens with built-in liquidity',
      'Enable fan communities to participate directly',
      'Create exclusive digital goods and NFTs',
      'Establish membership systems and access controls',
      'Generate verifiable online profiles and fan IDs',
      'Distribute tickets, coupons, and discount codes',
      'Set up automated reward systems',
    ],
  },
  {
    icon: Globe,
    title: 'Community currencies',
    description:
      'Build local economic systems with currencies designed specifically for community needs and values.',
    items: [
      'Launch currencies backed by stable assets',
      'Enable instant convertibility to other currencies',
      'Create transparent, auditable monetary systems',
      'Establish local digital goods economies',
      'Support community governance through multi-sig controls',
      'Measure and capture community-contributed value',
    ],
  },
] as const

const subIdCapabilities = [
  {
    icon: ShieldCheck,
    title: 'Creation controls',
    items: [
      'Require referrals from existing ID holders',
      'Restrict creation to the currency controller',
      'Create invitation-based identity systems',
      'Control community growth and participation',
    ],
  },
  {
    icon: BadgeDollarSign,
    title: 'Registration fees',
    items: [
      "Fees are paid in the currency's native token",
      'Decentralized fees are burned',
      'Centralized fees go to the currency controller',
      'Fees create a sustainable revenue model',
    ],
  },
] as const

const identityUseCases = [
  {
    icon: UserCheck,
    title: 'Community membership',
    description:
      'VerusIDs can serve as membership credentials, giving users verifiable proof of belonging to your community.',
  },
  {
    icon: Wallet,
    title: 'Digital asset ownership',
    description:
      'VerusIDs can hold tokens, NFTs, and other digital assets so users can prove ownership and transfer assets securely.',
  },
  {
    icon: Lock,
    title: 'Authentication and access',
    description:
      'Use VerusIDs for password-free login and access control based on identity ownership.',
  },
  {
    icon: Award,
    title: 'Reputation systems',
    description:
      'Build reputation and trust systems around VerusIDs for contributions, engagement, and standing.',
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

function DetailGrid({items}: {items: IconListItem[]}) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      {items.map((item, index) => {
        const Icon = item.icon
        const isDesktopLeftColumn = index % 2 === 0
        const isDesktopBottomRow =
          index >= Math.floor((items.length - 1) / 2) * 2

        return (
          <div
            key={item.title ?? item.text}
            className={cn(
              'border-gray-200 px-8 py-7 dark:border-gray-800 md:px-8 md:py-8',
              index > 0 && 'max-md:border-t',
              !isDesktopLeftColumn && 'md:border-l',
              !isDesktopBottomRow && 'md:border-b'
            )}
          >
            <div className="flex items-start gap-4">
              <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-lg border border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-900">
                {Icon ? (
                  <Icon className="h-5 w-5 text-verus-blue dark:text-blue-400" />
                ) : (
                  <span className="h-1.5 w-1.5 rounded-full bg-verus-blue dark:bg-blue-400" />
                )}
              </div>
              <div>
                {item.title ? (
                  <h4 className="mb-2 text-[16px] font-medium text-gray-800 dark:text-white">
                    {item.title}
                  </h4>
                ) : null}
                <p className="text-[15px] leading-relaxed tracking-normal text-gray-600 dark:text-gray-300 md:text-[16px]">
                  {item.description ?? item.text}
                </p>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export function PBaaSContent() {
  return (
    <>
      <section className="border-t border-gray-200 bg-gradient-to-br from-blue-50 to-white dark:border-gray-800 dark:from-blue-950/40 dark:to-gray-950">
        <SectionIntro title="Two currency types for different use cases">
          <p>
            Choose between reserve-backed basket currencies or standalone token
            currencies based on the needs of your project.
          </p>
        </SectionIntro>

        <div className="grid grid-cols-1 md:grid-cols-2">
          <article className="border-gray-200 px-8 py-10 dark:border-gray-800 md:px-12 md:py-14">
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-lg border border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-900">
              <Coins className="h-7 w-7 text-verus-blue dark:text-blue-400" />
            </div>
            <h3 className="mb-4 font-medium tracking-tight text-gray-800 dark:text-white md:text-[30px]">
              Basket currencies
            </h3>
            <p className="mb-8 text-[15px] leading-relaxed tracking-normal text-gray-600 dark:text-gray-300 md:text-[17px]">
              Basket currencies operate like automated market makers with
              reserve backing, dynamic supply, and consensus-enforced
              conversions.
            </p>
            <div className="-mx-8 border-t border-gray-200 dark:border-gray-800 md:-mx-12">
              <DetailGrid items={basketCurrencyFeatures} />
            </div>
          </article>

          <article className="border-t border-gray-200 px-8 py-10 dark:border-gray-800 md:border-l md:border-t-0 md:px-12 md:py-14">
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-lg border border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-900">
              <Wallet className="h-7 w-7 text-verus-blue dark:text-blue-400" />
            </div>
            <h3 className="mb-4 font-medium tracking-tight text-gray-800 dark:text-white md:text-[30px]">
              Simple token currencies
            </h3>
            <p className="mb-8 text-[15px] leading-relaxed tracking-normal text-gray-600 dark:text-gray-300 md:text-[17px]">
              Simple tokens are standalone currencies without backing reserves,
              with supply behavior determined by the selected control model.
            </p>
            <div className="-mx-8 border-t border-gray-200 dark:border-gray-800 md:-mx-12">
              <DetailGrid items={simpleTokenFeatures} />
            </div>
          </article>
        </div>

        <div className="border-t border-gray-200 dark:border-gray-800">
          <SectionIntro title="The preconversion period">
            <p>
              Every currency launch includes a preconversion phase before the
              currency begins operating. It bootstraps initial liquidity,
              distribution, and value from day one.
            </p>
          </SectionIntro>
          <div className="grid grid-cols-1 md:grid-cols-2">
            {preconversionDetails.map((item, index) => {
              const isDesktopLeftColumn = index % 2 === 0
              const isDesktopBottomRow =
                index >= preconversionDetails.length - 2

              return (
                <article
                  key={item.title}
                  className={cn(
                    'border-gray-200 px-8 py-8 dark:border-gray-800 md:px-12 md:py-10',
                    index > 0 && 'max-md:border-t',
                    !isDesktopLeftColumn && 'md:border-l',
                    !isDesktopBottomRow && 'md:border-b'
                  )}
                >
                  <h3 className="mb-2 text-[16px] font-medium text-gray-800 dark:text-white md:text-[18px]">
                    {item.title}
                  </h3>
                  <p className="text-[15px] leading-relaxed tracking-normal text-gray-600 dark:text-gray-300 md:text-[17px]">
                    {item.description}
                  </p>
                </article>
              )
            })}
          </div>
          <div className="flex gap-4 border-t border-gray-200 px-8 py-8 dark:border-gray-800 md:px-14">
            <Lightbulb className="mt-1 h-5 w-5 flex-shrink-0 text-verus-blue dark:text-blue-400" />
            <p className="max-w-[760px] text-[15px] leading-relaxed tracking-normal text-gray-600 dark:text-gray-300 md:text-[17px]">
              The preconversion period establishes real backing and market
              participation before a new currency becomes active.
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-gray-200 bg-gray-50 dark:border-gray-800 dark:bg-gray-950">
        <SectionIntro title="Choose your currency control model">
          <p>
            Decide between decentralized and controlled currencies, with launch
            requirements tied to a VerusID namespace.
          </p>
        </SectionIntro>

        <div className="grid grid-cols-1 md:grid-cols-3">
          {controlModels.map((model, index) => {
            const Icon = model.icon
            const isDesktopFirstColumn = index % 3 === 0

            return (
              <article
                key={model.title}
                className={cn(
                  'border-gray-200 px-8 py-10 dark:border-gray-800 md:px-8 md:py-12',
                  index > 0 && 'max-md:border-t',
                  !isDesktopFirstColumn && 'md:border-l'
                )}
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-lg border border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-900">
                  <Icon className="h-7 w-7 text-verus-blue dark:text-blue-400" />
                </div>
                <h3 className="mb-4 text-[22px] font-medium tracking-tight text-gray-800 dark:text-white md:text-[30px]">
                  {model.title}
                </h3>
                <BulletList items={model.items} />
              </article>
            )
          })}
        </div>
      </section>

      <section className="border-t border-gray-200 bg-gradient-to-br from-blue-50 to-white dark:border-gray-800 dark:from-blue-950/40 dark:to-gray-950">
        <SectionIntro title="Launch with built-in crowdfunding">
          <p>
            Every Verus currency can include a crowdfunding phase during launch,
            creating immediate liquidity and fair distribution.
          </p>
        </SectionIntro>

        <div className="grid grid-cols-1 md:grid-cols-2">
          {crowdfundingItems.map((item, index) => {
            const Icon = item.icon
            const isDesktopLeftColumn = index % 2 === 0
            const isDesktopBottomRow = index >= crowdfundingItems.length - 2

            return (
              <article
                key={item.title}
                className={cn(
                  'border-gray-200 px-8 py-10 dark:border-gray-800 md:px-12 md:py-14',
                  index > 0 && 'max-md:border-t',
                  !isDesktopLeftColumn && 'md:border-l',
                  !isDesktopBottomRow && 'md:border-b'
                )}
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-lg border border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-900">
                  <Icon className="h-7 w-7 text-verus-blue dark:text-blue-400" />
                </div>
                <h3 className="mb-4 font-medium tracking-tight text-gray-800 dark:text-white md:text-[30px]">
                  {item.title}
                </h3>
                <BulletList items={item.items} />
              </article>
            )
          })}
        </div>
      </section>

      <section className="border-t border-gray-200 bg-gray-50 dark:border-gray-800 dark:bg-gray-950">
        <SectionIntro title="Create currencies with one command">
          <p>
            Use standard API commands and flexible parameters to create powerful
            financial instruments.
          </p>
        </SectionIntro>

        <div className="grid grid-cols-1 md:grid-cols-[minmax(0,1.35fr)_minmax(0,1fr)]">
          <div className="px-8 py-10 md:px-12 md:py-14">
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
                  # Creating a community currency with multiple reserve
                  currencies
                </p>
                <p className="mb-6 text-blue-400">
                  ./verus definecurrency {'{'}
                </p>
                <div className="mb-6 pl-4">
                  <p className="text-gray-300">
                    <span className="text-pink-400">"name"</span>:{' '}
                    <span className="text-yellow-300">
                      "Community Currency"
                    </span>
                    ,
                  </p>
                  <p className="text-gray-300">
                    <span className="text-pink-400">"options"</span>:{' '}
                    <span className="text-yellow-300">33</span>,{' '}
                    <span className="text-blue-300">
                      {'// basket currency'}
                    </span>
                  </p>
                  <p className="text-gray-300">
                    <span className="text-pink-400">"currencies"</span>: [
                    <span className="text-yellow-300">"VRSC"</span>,{' '}
                    <span className="text-yellow-300">"tBTC.vETH"</span>],
                  </p>
                  <p className="text-gray-300">
                    <span className="text-pink-400">
                      "initialcontributions"
                    </span>
                    : [<span className="text-yellow-300">5000</span>,{' '}
                    <span className="text-yellow-300">1</span>],
                  </p>
                  <p className="text-gray-300">
                    <span className="text-pink-400">"minpreconversion"</span>: [
                    <span className="text-yellow-300">10000</span>,{' '}
                    <span className="text-yellow-300">2</span>],
                  </p>
                  <p className="text-gray-300">
                    <span className="text-pink-400">"initialsupply"</span>:{' '}
                    <span className="text-yellow-300">10000</span>,
                  </p>
                  <p className="text-gray-300">
                    <span className="text-pink-400">"prelaunchcarveout"</span>:{' '}
                    <span className="text-yellow-300">"0.1"</span>,
                  </p>
                  <p className="text-gray-300">
                    <span className="text-pink-400">"preallocations"</span>: [
                  </p>
                  <div className="pl-4">
                    <p className="text-gray-300">
                      {'{'}{' '}
                      <span className="text-pink-400">"Marketing Fund@"</span>:{' '}
                      <span className="text-yellow-300">2000</span> {'}'}
                    </p>
                  </div>
                  <p className="text-gray-300">]</p>
                </div>
                <p className="mb-4 text-blue-400">{'}'}</p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-200 px-8 py-10 dark:border-gray-800 md:border-l md:border-t-0 md:px-12 md:py-14">
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-lg border border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-900">
              <Code className="h-7 w-7 text-verus-blue dark:text-blue-400" />
            </div>
            <h3 className="mb-4 font-medium tracking-tight text-gray-800 dark:text-white md:text-[30px]">
              Key parameters
            </h3>
            <div className="space-y-5">
              {keyParameters.map((parameter, index) => (
                <div
                  key={parameter.name}
                  className={cn(
                    index > 0 &&
                      'border-t border-gray-200 pt-5 dark:border-gray-800'
                  )}
                >
                  <h4 className="mb-2 text-[16px] font-medium text-gray-800 dark:text-white">
                    {parameter.name}
                  </h4>
                  <p className="text-[15px] leading-relaxed tracking-normal text-gray-600 dark:text-gray-300 md:text-[17px]">
                    {parameter.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-gray-200 bg-gradient-to-br from-blue-50 to-white dark:border-gray-800 dark:from-blue-950/40 dark:to-gray-950">
        <SectionIntro title="Real-world applications for Verus currencies">
          <p>
            Verus currencies enable financial applications beyond traditional
            cryptocurrencies.
          </p>
          <div className="mt-6 flex flex-col gap-2">
            {applicationLinks.map((link) => (
              <TextLinkButton
                key={link.href}
                href={link.href}
                className="-ml-2 max-w-[560px]"
                icon={
                  <FaMedium className="h-4 w-4 text-gray-700 dark:text-gray-300" />
                }
              >
                {link.label}
              </TextLinkButton>
            ))}
          </div>
        </SectionIntro>

        <div className="grid grid-cols-1 md:grid-cols-2">
          {applications.map((application, index) => {
            const Icon = application.icon

            return (
              <article
                key={application.title}
                className={cn(
                  'border-gray-200 px-8 py-10 dark:border-gray-800 md:px-12 md:py-14',
                  index > 0 && 'max-md:border-t md:border-l'
                )}
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-lg border border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-900">
                  <Icon className="h-7 w-7 text-verus-blue dark:text-blue-400" />
                </div>
                <h3 className="mb-4 font-medium tracking-tight text-gray-800 dark:text-white md:text-[30px]">
                  {application.title}
                </h3>
                <p className="mb-8 text-[15px] leading-relaxed tracking-normal text-gray-600 dark:text-gray-300 md:text-[17px]">
                  {application.description}
                </p>
                <BulletList items={application.items} />
              </article>
            )
          })}
        </div>
      </section>

      <section className="border-t border-gray-200 bg-gray-50 dark:border-gray-800 dark:bg-gray-950">
        <SectionIntro title="Name your community with flexible SubIDs">
          <p>
            Every Verus currency can serve as a namespace for self-sovereign
            identities called SubIDs. Users can register identities like
            Username.Currency@ for your community or project.
          </p>
          <p>
            SubIDs inherit core VerusID features. They can hold funds, store
            data, and serve as authentication credentials.
          </p>
        </SectionIntro>

        <div className="border-b border-gray-200 px-8 py-8 dark:border-gray-800 md:px-14">
          <Button asChild variant="verusSecondaryDark" size="verusWide">
            <Link href="/build/verusid">
              <Image
                src="/img/at-full-black.svg"
                alt=""
                width={20}
                height={20}
                aria-hidden="true"
                className="size-5 opacity-80 dark:invert"
              />
              Learn more about VerusID
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2">
          <article className="border-gray-200 px-8 py-10 dark:border-gray-800 md:px-12 md:py-14">
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-lg border border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-900">
              <ShieldCheck className="h-7 w-7 text-verus-blue dark:text-blue-400" />
            </div>
            <h3 className="mb-4 font-medium tracking-tight text-gray-800 dark:text-white md:text-[30px]">
              Creation and fee controls
            </h3>
            <div className="space-y-8">
              {subIdCapabilities.map((capability) => {
                const Icon = capability.icon

                return (
                  <div key={capability.title}>
                    <h4 className="mb-3 flex items-center gap-2 text-[16px] font-medium text-gray-800 dark:text-white">
                      <Icon className="h-5 w-5 text-verus-blue dark:text-blue-400" />
                      {capability.title}
                    </h4>
                    <BulletList items={capability.items} />
                  </div>
                )
              })}
            </div>
          </article>

          <article className="border-t border-gray-200 px-8 py-10 dark:border-gray-800 md:border-l md:border-t-0 md:px-12 md:py-14">
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-lg border border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-900">
              <FileText className="h-7 w-7 text-verus-blue dark:text-blue-400" />
            </div>
            <h3 className="mb-4 font-medium tracking-tight text-gray-800 dark:text-white md:text-[30px]">
              Identity use cases
            </h3>
            <div className="space-y-6">
              {identityUseCases.map((useCase, index) => {
                const Icon = useCase.icon

                return (
                  <div
                    key={useCase.title}
                    className={cn(
                      index > 0 &&
                        'border-t border-gray-200 pt-6 dark:border-gray-800'
                    )}
                  >
                    <h4 className="mb-2 flex items-center gap-2 text-[16px] font-medium text-gray-800 dark:text-white">
                      <Icon className="h-5 w-5 text-verus-blue dark:text-blue-400" />
                      {useCase.title}
                    </h4>
                    <p className="text-[15px] leading-relaxed tracking-normal text-gray-600 dark:text-gray-300 md:text-[17px]">
                      {useCase.description}
                    </p>
                  </div>
                )
              })}
            </div>
          </article>
        </div>

        <div className="flex gap-4 border-t border-gray-200 px-8 py-8 dark:border-gray-800 md:px-14">
          <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-lg border border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-900">
            <Users className="h-5 w-5 text-verus-blue dark:text-blue-400" />
          </div>
          <div className="max-w-[860px]">
            <h3 className="mb-2 text-[16px] font-medium text-gray-800 dark:text-white md:text-[18px]">
              Namespace example
            </h3>
            <p className="text-[15px] leading-relaxed tracking-normal text-gray-600 dark:text-gray-300 md:text-[17px]">
              If your currency is named{' '}
              <code className="rounded bg-blue-50/70 px-1.5 py-0.5 text-verus-blue dark:bg-blue-950/50 dark:text-blue-300">
                COMMUNITY
              </code>
              , users can register SubIDs like{' '}
              <code className="rounded bg-blue-50/70 px-1.5 py-0.5 text-verus-blue dark:bg-blue-950/50 dark:text-blue-300">
                alice.COMMUNITY@
              </code>{' '}
              or{' '}
              <code className="rounded bg-blue-50/70 px-1.5 py-0.5 text-verus-blue dark:bg-blue-950/50 dark:text-blue-300">
                dao.COMMUNITY@
              </code>
              . These SubIDs function like VerusIDs but cannot create new
              currencies or blockchains.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
