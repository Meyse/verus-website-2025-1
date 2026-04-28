import {env} from '@/configs/env'
import {
  ArrowLeftRight,
  Ban,
  Coins,
  DollarSign,
  ExternalLink,
  Lock,
  Shield,
  Store,
} from 'lucide-react'
import type {LucideIcon} from 'lucide-react'
import {IoLogoDiscord} from 'react-icons/io5'

import {Button} from '@/components/ui/button'

const mappingFeatures: Array<{
  title: string
  description: string
  icon: LucideIcon
}> = [
  {
    title: 'Create a mapped currency',
    description:
      'Launch a Verus currency that maps directly to your existing ERC-20 token.',
    icon: Store,
  },
  {
    title: 'Use a non-custodial bridge',
    description:
      'Bridge value without handing custody to a single operator or contract owner.',
    icon: Lock,
  },
  {
    title: 'Move liquidity across networks',
    description:
      'Users can move tokens freely between Ethereum and Verus networks.',
    icon: ArrowLeftRight,
  },
  {
    title: 'Keep both ecosystems live',
    description:
      'Stay accessible on Ethereum while gaining Verus-native execution and features.',
    icon: Coins,
  },
]

const benefits: Array<{
  title: string
  description: string
  icon: LucideIcon
  bullets: string[]
  stats?: string[]
}> = [
  {
    title: 'Lower fees',
    description:
      'Execution costs stay predictable even when Ethereum is expensive.',
    icon: DollarSign,
    stats: ['0.0001 VRSC per tx', '0.05% max DeFi fee'],
    bullets: [
      'Standard transactions cost a fraction of a cent.',
      'DeFi operations avoid gas markets and use protocol-level fees.',
      'Users get stable costs instead of congestion-driven spikes.',
    ],
  },
  {
    title: 'MEV resistance',
    description:
      'Protocol rules remove the most common execution games around order flow.',
    icon: Ban,
    bullets: [
      'No front-running inside a block.',
      'All users converting in the same block get the same fair price.',
      'Sandwich attacks cannot reorder execution for profit.',
    ],
  },
  {
    title: 'Protocol-level security',
    description:
      'Core currency behavior is validated by consensus instead of custom smart contracts.',
    icon: Shield,
    bullets: [
      'Mapped currencies inherit protocol validation.',
      'Features run as smart transactions without app-specific contract risk.',
      '51% attack resistance: Verus Proof of Power requires attackers to control both hash power and stake.',
    ],
  },
  {
    title: 'DeFi expansion',
    description:
      'Mapped assets can plug into Verus-native liquidity and basket structures.',
    icon: Store,
    bullets: [
      'Use the token as a reserve in basket currencies.',
      'Create baskets with up to 10 reserve currencies.',
      'Set backing ratios from 5% to 100% depending on the model.',
    ],
  },
]

const migrationSteps = [
  {
    step: '01',
    title: 'Register a VerusID',
    description: 'Create a namespace for your project.',
  },
  {
    step: '02',
    title: 'Map the ERC-20',
    description: 'Launch a currency mapped to your token with a single command.',
  },
  {
    step: '03',
    title: 'Export to Ethereum',
    description:
      'Complete the bridge path so the mapped currency is active on Ethereum as well.',
  },
  {
    step: '04',
    title: 'Add DeFi instruments',
    description:
      'Optionally build baskets, liquidity pools, and other Verus-native market structure.',
  },
]

function getGridCellClasses(index: number) {
  const classes = [
    'min-w-0',
    'border-gray-200',
    'px-8',
    'py-8',
    'dark:border-gray-800',
    'md:px-10',
    'md:py-10',
  ]

  if (index > 0) {
    classes.push('border-t')
  }

  if (index % 2 === 1) {
    classes.push('md:border-l')
  }

  if (index < 2) {
    classes.push('md:border-t-0')
  } else {
    classes.push('md:border-t')
  }

  return classes.join(' ')
}

export function MigrateContent() {
  const mappingGuideHref = `${env.NEXT_PUBLIC_VERUS_DOCS}/currencies/mapping-1:1-eth.html`

  return (
    <>
      <section className="border-b border-gray-200 bg-gradient-to-br from-blue-50/70 to-white dark:border-gray-800 dark:from-blue-950/40 dark:to-gray-950">
        <div className="border-b border-gray-200 px-8 py-12 dark:border-gray-800 md:px-14 md:py-14">
          <div className="max-w-[760px]">
            <h2 className="mb-4 text-[28px] font-medium leading-[1.2] tracking-tight text-gray-800 dark:text-white md:mb-8 md:text-[44px]">
              Map your ERC-20 1:1 and keep Ethereum access
            </h2>
            <p className="text-[15px] leading-relaxed tracking-normal text-gray-600 dark:text-gray-300 md:text-[17px]">
              Verus lets you launch a mapped currency tied directly to an
              existing ERC-20 token through the Verus-Ethereum Bridge. Your
              token stays usable on Ethereum while gaining cheaper execution,
              protocol-level DeFi, and self-sovereign controls on Verus.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2">
          {mappingFeatures.map((feature, index) => {
            const Icon = feature.icon

            return (
              <div
                key={feature.title}
                className={getGridCellClasses(index)}
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg border border-gray-200 bg-white text-verus-blue dark:border-gray-800 dark:bg-gray-900 dark:text-blue-400">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mb-4 text-[24px] font-medium leading-[1.2] tracking-tight text-gray-800 dark:text-white md:text-[30px]">
                  {feature.title}
                </h3>
                <p className="text-[15px] leading-relaxed tracking-normal text-gray-600 dark:text-gray-300">
                  {feature.description}
                </p>
              </div>
            )
          })}
        </div>
      </section>

      <section className="border-b border-gray-200 bg-gray-50 dark:border-gray-800 dark:bg-gray-950">
        <div className="border-b border-gray-200 px-8 py-12 dark:border-gray-800 md:px-14 md:py-14">
          <div className="max-w-[760px]">
            <h2 className="mb-4 text-[28px] font-medium leading-[1.2] tracking-tight text-gray-800 dark:text-white md:mb-8 md:text-[44px]">
              Key benefits over staying on Ethereum
            </h2>
            <p className="text-[15px] leading-relaxed tracking-normal text-gray-600 dark:text-gray-300 md:text-[17px]">
              A mapped migration is not just about compatibility. It gives your
              token lower execution costs, fairer market structure, and access
              to protocol-level tooling that is difficult to reproduce on
              contract-heavy systems.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon

            return (
              <div
                key={benefit.title}
                className={getGridCellClasses(index)}
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg border border-gray-200 bg-white text-verus-blue dark:border-gray-800 dark:bg-gray-900 dark:text-blue-400">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mb-4 text-[24px] font-medium leading-[1.2] tracking-tight text-gray-800 dark:text-white md:text-[30px]">
                  {benefit.title}
                </h3>
                <p className="text-[15px] leading-relaxed tracking-normal text-gray-600 dark:text-gray-300">
                  {benefit.description}
                </p>

                {benefit.stats ? (
                  <div className="mt-5 flex flex-wrap gap-2">
                    {benefit.stats.map(stat => (
                      <span
                        key={stat}
                        className="rounded-full border border-gray-200 bg-white px-3 py-1.5 text-[12px] font-medium tracking-normal text-gray-800 dark:border-gray-800 dark:bg-gray-900 dark:text-white"
                      >
                        {stat}
                      </span>
                    ))}
                  </div>
                ) : null}

                <ul className="mt-5 space-y-3">
                  {benefit.bullets.map(bullet => (
                    <li
                      key={bullet}
                      className="flex items-start gap-3 text-[15px] leading-relaxed tracking-normal text-gray-600 dark:text-gray-300"
                    >
                      <span className="mt-[9px] h-1.5 w-1.5 rounded-full bg-verus-blue dark:bg-blue-400" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>
      </section>

      <section className="border-b border-gray-200 bg-gray-50 dark:border-gray-800 dark:bg-gray-950">
        <div className="border-b border-gray-200 px-8 py-12 dark:border-gray-800 md:px-14 md:py-14">
          <div className="max-w-[760px]">
            <h2 className="mb-4 text-[28px] font-medium leading-[1.2] tracking-tight text-gray-800 dark:text-white md:mb-8 md:text-[44px]">
              Migration path
            </h2>
            <p className="text-[15px] leading-relaxed tracking-normal text-gray-600 dark:text-gray-300 md:text-[17px]">
              The workflow is straightforward. Define the namespace, create the
              mapped currency, complete the bridge path, and then decide whether
              you want to extend the asset with Verus-native DeFi.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2">
          {migrationSteps.map((step, index) => (
            <div
              key={step.step}
              className={getGridCellClasses(index)}
            >
              <div className="mb-5 inline-flex rounded-full border border-gray-200 bg-white px-3 py-1 text-[13px] font-medium tracking-normal text-verus-blue dark:border-gray-800 dark:bg-gray-900 dark:text-blue-400">
                Step {step.step}
              </div>
              <h3 className="mb-4 text-[24px] font-medium leading-[1.2] tracking-tight text-gray-800 dark:text-white md:text-[30px]">
                {step.title}
              </h3>
              <p className="text-[15px] leading-relaxed tracking-normal text-gray-600 dark:text-gray-300">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-gradient-to-br from-blue-50/70 to-white dark:from-blue-950/40 dark:to-gray-950">
        <div className="px-8 py-12 md:px-14 md:py-14">
          <div className="mx-auto max-w-[760px] text-center">
            <h2 className="mb-4 text-[28px] font-medium leading-[1.2] tracking-tight text-gray-800 dark:text-white md:text-[44px]">
              Get help planning the move
            </h2>
            <p className="text-[15px] leading-relaxed tracking-normal text-gray-600 dark:text-gray-300 md:text-[17px]">
              Bring the token contract, supply model, bridge questions, and any
              liquidity constraints. The community can help you decide how to
              map the asset and what to launch first on Verus.
            </p>

            <div className="mt-8 flex flex-col justify-center gap-4 md:flex-row">
              <Button
                asChild
                variant="verusPrimary"
                size="verus"
                className="w-full md:w-fit"
              >
                <a
                  href={mappingGuideHref}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Read the mapping guide
                  <ExternalLink className="h-4 w-4 opacity-70 transition-opacity duration-300 group-hover:opacity-100" />
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
    </>
  )
}
