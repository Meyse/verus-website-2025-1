import {
  ArrowRight,
  Globe,
  History,
  Leaf,
  Scale,
  Shield,
  Zap,
} from 'lucide-react'

import {Button} from '@/components/ui/button'

const proofOfWorkReasons = [
  {
    icon: Shield,
    title: 'Network security',
    description:
      'Proof-of-work makes attacks expensive because block production is tied to real computation.',
  },
  {
    icon: Scale,
    title: 'Fair distribution',
    description:
      'Mining releases coins over time to people who help secure the network instead of assigning supply up front.',
  },
  {
    icon: History,
    title: 'Proven operation',
    description:
      'Proof-of-work has stood the test of time in public blockchains. Since Bitcoin, it has shown resilience against many attack types over more than a decade of continuous operation.',
  },
  {
    icon: Globe,
    title: 'Real-world cost',
    description:
      'Work performed outside the ledger gives the network an economic cost that cannot be created by software alone.',
  },
] as const

const powerBenefits = [
  {
    icon: Shield,
    title: 'Two validation paths',
    description:
      'Blocks are secured by both miners and stakers, reducing dependence on one participant group.',
  },
  {
    icon: Leaf,
    title: 'Less energy per block',
    description:
      'Half of consensus comes from staking, so the network does not rely only on continuous mining work.',
  },
  {
    icon: Zap,
    title: '51% attack resistance',
    description:
      'An attacker must account for both mining power and stake participation, not just one side of consensus.',
  },
] as const

export function GreenContent() {
  return (
    <>
      <section className="border-t border-gray-200 bg-gradient-to-br from-blue-50 to-white dark:border-gray-800 dark:from-blue-950/40 dark:to-gray-950">
        <div className="flex w-full flex-col items-start justify-center px-10 py-20 md:px-14 md:py-32">
          <div className="w-full max-w-[310px] md:max-w-[760px]">
            <h2 className="mb-4 break-words text-[28px] font-medium leading-[1.2] tracking-tight text-gray-800 dark:text-white md:mb-8 md:text-[44px]">
              Lower energy use without removing proof of work
            </h2>
            <div className="space-y-4 text-[15px] leading-relaxed tracking-normal text-gray-600 dark:text-gray-300 md:text-[17px]">
              <p>
                Verus does not treat sustainability as a reason to remove
                proof-of-work. It uses proof-of-work and proof-of-stake
                together, so the network keeps the security properties of mining
                while reducing how much work mining must carry on its own.
              </p>
              <p>
                The result is a consensus model built for open participation:
                miners, stakers, and low-power devices can all contribute to
                network security.
              </p>
            </div>
          </div>
        </div>

        <div className="grid w-full grid-cols-1 border-t border-gray-200 dark:border-gray-800 md:grid-cols-2">
          <div className="min-w-0 px-10 py-10 md:px-14 md:py-12">
            <h3 className="mb-4 font-medium tracking-tight text-gray-800 dark:text-white md:text-[30px]">
              Mining still matters
            </h3>
            <p className="break-words text-[15px] leading-relaxed tracking-normal text-gray-600 dark:text-gray-300 md:text-[17px]">
              Proof-of-work gives Verus an external cost layer. Producing blocks
              requires computation, which helps anchor security outside the
              chain itself.
            </p>
          </div>
          <div className="min-w-0 border-t border-gray-200 px-10 py-10 dark:border-gray-800 md:border-l md:border-t-0 md:px-14 md:py-12">
            <h3 className="mb-4 font-medium tracking-tight text-gray-800 dark:text-white md:text-[30px]">
              Staking reduces the load
            </h3>
            <p className="break-words text-[15px] leading-relaxed tracking-normal text-gray-600 dark:text-gray-300 md:text-[17px]">
              Proof-of-stake shares the consensus work with miners. This lowers
              the amount of energy needed compared with systems that rely only
              on proof-of-work.
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-gray-200 bg-gray-50 dark:border-gray-800 dark:bg-gray-950">
        <div className="flex w-full flex-col items-start justify-center px-10 py-20 md:px-14 md:py-32">
          <div className="w-full max-w-[310px] md:max-w-[760px]">
            <h2 className="mb-4 break-words text-[28px] font-medium leading-[1.2] tracking-tight text-gray-800 dark:text-white md:mb-8 md:text-[44px]">
              Why proof of work remains part of Verus
            </h2>
            <p className="text-[15px] leading-relaxed tracking-normal text-gray-600 dark:text-gray-300 md:text-[17px]">
              Verus keeps proof-of-work because it adds security, distribution,
              and a cost model that pure proof-of-stake systems do not provide
              in the same way.
            </p>
          </div>
        </div>

        <div className="grid w-full grid-cols-1 border-t border-gray-200 dark:border-gray-800 md:grid-cols-2">
          {proofOfWorkReasons.map((reason, index) => {
            const Icon = reason.icon

            return (
              <article
                key={reason.title}
                className={[
                  'min-w-0 border-gray-200 px-10 py-10 dark:border-gray-800 md:px-14 md:py-12',
                  index > 0 ? 'max-md:border-t' : '',
                  index % 2 === 1 ? 'md:border-l' : '',
                  index < proofOfWorkReasons.length - 2 ? 'md:border-b' : '',
                ].join(' ')}
              >
                <div className="mb-4 flex items-center gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-900">
                    <Icon className="h-5 w-5 text-green-600 dark:text-green-400" />
                  </div>
                  <h3 className="text-[16px] font-medium text-gray-800 dark:text-white md:text-[18px]">
                    {reason.title}
                  </h3>
                </div>
                <p className="break-words text-[15px] leading-relaxed tracking-normal text-gray-600 dark:text-gray-300 md:text-[16px]">
                  {reason.description}
                </p>
              </article>
            )
          })}
        </div>
      </section>

      <section className="border-t border-gray-200 bg-gradient-to-br from-blue-50 to-white dark:border-gray-800 dark:from-blue-950/40 dark:to-gray-950">
        <div className="flex w-full flex-col items-start justify-center px-10 py-20 md:px-14 md:py-32">
          <div className="w-full max-w-[310px] md:max-w-[760px]">
            <h2 className="mb-4 break-words text-[28px] font-medium leading-[1.2] tracking-tight text-gray-800 dark:text-white md:mb-8 md:text-[44px]">
              Proof of Power combines both systems
            </h2>
            <p className="text-[15px] leading-relaxed tracking-normal text-gray-600 dark:text-gray-300 md:text-[17px]">
              Verus Proof of Power uses miners and stakers together. That keeps
              participation broad while avoiding the energy profile of pure
              proof-of-work.
            </p>
          </div>
        </div>

        <div className="grid w-full grid-cols-1 border-t border-gray-200 dark:border-gray-800 md:grid-cols-3">
          {powerBenefits.map((benefit, index) => {
            const Icon = benefit.icon

            return (
              <article
                key={benefit.title}
                className={[
                  'min-w-0 border-gray-200 px-10 py-10 dark:border-gray-800 md:px-14 md:py-12',
                  index > 0 ? 'max-md:border-t md:border-l' : '',
                ].join(' ')}
              >
                <div className="mb-4 flex items-center gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-900">
                    <Icon className="h-5 w-5 text-green-600 dark:text-green-400" />
                  </div>
                  <h3 className="text-[16px] font-medium text-gray-800 dark:text-white md:text-[18px]">
                    {benefit.title}
                  </h3>
                </div>
                <p className="break-words text-[15px] leading-relaxed tracking-normal text-gray-600 dark:text-gray-300 md:text-[16px]">
                  {benefit.description}
                </p>
              </article>
            )
          })}
        </div>
      </section>

      <section className="border-t border-gray-200 bg-gray-50 dark:border-gray-800 dark:bg-gray-950">
        <div className="grid w-full grid-cols-1 md:grid-cols-2">
          <div className="min-w-0 px-10 py-12 md:px-14 md:py-16">
            <h2 className="mb-4 font-medium tracking-tight text-gray-800 dark:text-white md:text-[30px]">
              Mine with regular devices
            </h2>
            <p className="break-words text-[15px] leading-relaxed tracking-normal text-gray-600 dark:text-gray-300 md:text-[17px]">
              Use CPUs, ARM devices, and other general-purpose hardware to take
              part in network security.
            </p>
            <Button
              asChild
              variant="verusPrimary"
              size="verusWide"
              className="mt-8 w-full md:w-fit"
            >
              <a href="/mining">
                Start mining
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </Button>
          </div>

          <div className="min-w-0 border-t border-gray-200 px-10 py-12 dark:border-gray-800 md:border-l md:border-t-0 md:px-14 md:py-16">
            <h2 className="mb-4 font-medium tracking-tight text-gray-800 dark:text-white md:text-[30px]">
              Stake with any amount
            </h2>
            <p className="break-words text-[15px] leading-relaxed tracking-normal text-gray-600 dark:text-gray-300 md:text-[17px]">
              Help secure the network through staking while keeping funds under
              your own control.
            </p>
            <Button
              asChild
              variant="verusPrimary"
              size="verusWide"
              className="mt-8 w-full md:w-fit"
            >
              <a href="/staking">
                Start staking
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
