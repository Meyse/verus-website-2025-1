import Link from 'next/link'

import {env} from '@/configs/env'
import {
  ArrowRight,
  Check,
  Coins,
  Download,
  ExternalLink,
  Network,
  ShieldCheck,
} from 'lucide-react'
import {IoLogoDiscord} from 'react-icons/io5'

import {Button} from '@/components/ui/button'

type StepItem = {
  title: string
  description: string
}

type CheckItem = {
  text: string
}

function SectionHeader({
  icon: Icon,
  title,
  description,
}: {
  icon: typeof Download
  title: string
  description: string
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
            {description}
          </p>
        </div>
      </div>
    </div>
  )
}

function StepList({items}: {items: StepItem[]}) {
  return (
    <div className="space-y-5">
      {items.map((item) => (
        <div className="flex min-w-0 flex-col gap-1" key={item.title}>
          <span className="text-[15px] font-medium text-gray-800 dark:text-white md:text-[17px]">
            {item.title}
          </span>
          <p className="text-[15px] leading-relaxed tracking-normal text-gray-600 dark:text-gray-300 md:text-[17px]">
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

function Notice({children}: {children: React.ReactNode}) {
  return (
    <p className="w-full rounded-md border border-amber-200/50 bg-amber-50/50 px-3 py-2 text-[14px] leading-relaxed tracking-normal text-amber-800 dark:border-amber-700/30 dark:bg-amber-900/20 dark:text-amber-300 md:w-fit md:text-[15px]">
      {children}
    </p>
  )
}

const walletOptions: StepItem[] = [
  {
    title: 'Verus Desktop',
    description:
      'Full-featured desktop wallet for Windows, macOS, and Linux.',
  },
  {
    title: 'Verus Mobile',
    description: 'Take your wallet on the go with iOS and Android apps.',
  },
  {
    title: 'CLI wallet',
    description:
      'Advanced option for command-line users, technical setups, full protocol access, and service deployment.',
  },
]

const vrscOptions: StepItem[] = [
  {
    title: 'Exchanges',
    description: 'Purchase VRSC on cryptocurrency exchanges like SafeTrade.',
  },
  {
    title: 'Direct conversion with Verus DeFi',
    description:
      'Convert other cryptocurrencies to VRSC using the built-in DeFi features of Verus Mobile and Desktop.',
  },
  {
    title: 'Mining and staking',
    description:
      'Earn VRSC by participating in consensus through mining or staking.',
  },
  {
    title: 'Community participation',
    description:
      'Contribute to the ecosystem and earn rewards through bounties and community initiatives.',
  },
]

const participationOptions: StepItem[] = [
  {
    title: 'Staking',
    description:
      'Run a full node and stake your VRSC to help secure the network and earn rewards with minimal hardware requirements.',
  },
  {
    title: 'Mining',
    description:
      "Use your computer's processing power to mine VRSC with the VerusHash algorithm, which favors consumer hardware.",
  },
  {
    title: 'Bridgekeeper',
    description:
      'Run Bridgekeeper to facilitate cross-chain transfers between Verus and Ethereum, earning additional rewards.',
  },
  {
    title: 'Community contribution',
    description:
      'Participate in development, testing, documentation, or marketing to help grow the ecosystem.',
  },
]

const participationBenefits: CheckItem[] = [
  {text: 'No minimum requirements for staking.'},
  {text: 'CPU-friendly mining algorithm.'},
  {text: 'Additional rewards through Bridgekeeper participation.'},
]

const verusIdBenefits: StepItem[] = [
  {
    title: 'True data ownership',
    description:
      'Your data remains with you, not scattered across corporate and centralized databases.',
  },
  {
    title: 'Enhanced security',
    description:
      'Blockchain-secured identity with consensus-level security and recovery options.',
  },
  {
    title: 'Privacy by design',
    description:
      'Selective disclosure of information puts you in control of what others can see.',
  },
]

const verusIdFeatures: CheckItem[] = [
  {text: 'Human-readable blockchain identities, such as bob@.'},
  {text: 'Integrated revocation and recovery systems.'},
  {text: 'Privacy-preserving selective disclosure capabilities.'},
]

export function GetStartedSections() {
  return (
    <>
      <section className="border-b border-gray-200 dark:border-gray-800">
        <SectionHeader
          icon={Download}
          title="Get a wallet"
          description="Choose the wallet that fits your needs and start securely managing your digital assets."
        />

        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="min-w-0 px-8 py-8 md:px-14 md:py-10">
            <h3 className="mb-4 font-medium tracking-tight text-gray-800 dark:text-white md:text-[30px]">
              Wallet options
            </h3>
            <StepList items={walletOptions} />
          </div>

          <div className="min-w-0 border-t border-gray-200 px-8 py-8 dark:border-gray-800 md:border-l md:border-t-0 md:px-14 md:py-10">
            <h3 className="mb-4 font-medium tracking-tight text-gray-800 dark:text-white md:text-[30px]">
              Start with the right setup
            </h3>
            <div className="space-y-5">
              <p className="text-[15px] leading-relaxed tracking-normal text-gray-600 dark:text-gray-300 md:text-[17px]">
                Verus Desktop offers the most complete features as a full node,
                while Verus Mobile is built for convenience on the go.
              </p>
              <Notice>
                Securely back up your wallet seed phrase and private keys.
              </Notice>
            </div>
            <Button
              asChild
              variant="verusPrimary"
              size="verus"
              className="mt-8 w-full md:w-fit"
            >
              <Link href="/wallet">
                Download a wallet
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="border-b border-gray-200 dark:border-gray-800">
        <SectionHeader
          icon={Coins}
          title="Get VRSC"
          description="Choose a way to obtain Verus (VRSC) and start participating in the ecosystem."
        />

        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="min-w-0 px-8 py-8 md:px-14 md:py-10">
            <h3 className="mb-4 font-medium tracking-tight text-gray-800 dark:text-white md:text-[30px]">
              Ways to acquire VRSC
            </h3>
            <StepList items={vrscOptions} />
          </div>

          <div className="min-w-0 border-t border-gray-200 px-8 py-8 dark:border-gray-800 md:border-l md:border-t-0 md:px-14 md:py-10">
            <h3 className="mb-4 font-medium tracking-tight text-gray-800 dark:text-white md:text-[30px]">
              About Verus (VRSC)
            </h3>
            <div className="space-y-5">
              <p className="text-[15px] leading-relaxed tracking-normal text-gray-600 dark:text-gray-300 md:text-[17px]">
                VRSC is the native currency of the Verus ecosystem, used for
                transactions, staking, and protocol services.
              </p>
              <p className="text-[15px] leading-relaxed tracking-normal text-gray-600 dark:text-gray-300 md:text-[17px]">
                VRSC has no premine, no ICO, and no developer rewards built in.
                All coins are earned through mining and staking.
              </p>
              <Notice>
                Always research and use reputable exchanges when purchasing
                VRSC.
              </Notice>
            </div>
            <Button
              asChild
              variant="verusSecondary"
              size="verus"
              className="mt-8 w-full md:w-fit"
            >
              <Link href="/get-vrsc/">
                View exchanges
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="border-b border-gray-200 dark:border-gray-800">
        <SectionHeader
          icon={Network}
          title="Participate in the network"
          description="Support the Verus ecosystem by mining, staking, running a full node, or contributing to the community."
        />

        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="min-w-0 px-8 py-8 md:px-14 md:py-10">
            <h3 className="mb-4 font-medium tracking-tight text-gray-800 dark:text-white md:text-[30px]">
              Ways to participate
            </h3>
            <StepList items={participationOptions} />
          </div>

          <div className="min-w-0 border-t border-gray-200 px-8 py-8 dark:border-gray-800 md:border-l md:border-t-0 md:px-14 md:py-10">
            <h3 className="mb-4 font-medium tracking-tight text-gray-800 dark:text-white md:text-[30px]">
              Benefits of participation
            </h3>
            <div className="space-y-6">
              <p className="text-[15px] leading-relaxed tracking-normal text-gray-600 dark:text-gray-300 md:text-[17px]">
                Participating in the Verus network helps maintain security,
                decentralization, and ecosystem health while giving you ways to
                earn rewards.
              </p>
              <CheckList items={participationBenefits} />
            </div>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
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
              <Button
                asChild
                variant="verusSecondary"
                size="verus"
                className="w-full sm:w-fit"
              >
                <Link href="/mining">
                  Learn about mining
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-gray-200 dark:border-gray-800">
        <SectionHeader
          icon={ShieldCheck}
          title="Be self-sovereign with VerusID"
          description="Take full control of your digital identity, data, and assets with VerusID."
        />

        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="min-w-0 px-8 py-8 md:px-14 md:py-10">
            <h3 className="mb-4 font-medium tracking-tight text-gray-800 dark:text-white md:text-[30px]">
              What is VerusID?
            </h3>
            <div className="space-y-5">
              <p className="text-[15px] leading-relaxed tracking-normal text-gray-600 dark:text-gray-300 md:text-[17px]">
                VerusID is a self-sovereign identity system built on the Verus
                Protocol that gives you ownership and control over your digital
                identity, data, and assets.
              </p>
              <p className="text-[15px] leading-relaxed tracking-normal text-gray-600 dark:text-gray-300 md:text-[17px]">
                Unlike traditional identity systems where third parties control
                your information, VerusID lets you selectively share information
                while maintaining privacy and security.
              </p>
              <p className="text-[15px] leading-relaxed tracking-normal text-gray-600 dark:text-gray-300 md:text-[17px]">
                Verus Vault adds another security layer by allowing you to
                timelock your identity, preventing funds from being spent while
                still enabling staking and receiving transactions.
              </p>
              <CheckList items={verusIdFeatures} />
            </div>
          </div>

          <div className="min-w-0 border-t border-gray-200 px-8 py-8 dark:border-gray-800 md:border-l md:border-t-0 md:px-14 md:py-10">
            <h3 className="mb-4 font-medium tracking-tight text-gray-800 dark:text-white md:text-[30px]">
              Benefits of VerusID
            </h3>
            <div className="space-y-5">
              <StepList items={verusIdBenefits} />
            </div>
            <Button
              asChild
              variant="verusSecondary"
              size="verus"
              className="mt-8 w-full md:w-fit"
            >
              <Link href="/verusid">
                Learn about VerusID
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <a
        href={env.NEXT_PUBLIC_DISCORD}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex min-h-[64px] w-full items-center gap-3 bg-[#444EE5] px-8 py-5 transition-colors duration-300 hover:bg-[#3942cc] md:px-14 md:py-6"
      >
        <IoLogoDiscord className="h-5 w-5 flex-shrink-0 text-white md:h-6 md:w-6" />
        <span className="min-w-0 text-[15px] font-medium tracking-normal text-white md:text-[17px]">
          Need help getting started? Join the community on Discord
        </span>
        <ExternalLink className="ml-auto h-4 w-4 flex-shrink-0 text-white opacity-70 transition-opacity duration-300 group-hover:opacity-100" />
      </a>
    </>
  )
}
