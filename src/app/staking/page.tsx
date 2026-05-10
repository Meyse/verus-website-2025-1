import type {Metadata} from 'next'

import {StakingSteps} from '@/features/staking/steps'

import {createWebPageJsonLd} from '@/lib/seo/schema'

import {BgWrapper} from '@/components/bg-wrapper'
import {JsonLd} from '@/components/seo/json-ld'

export const metadata: Metadata = {
  title: 'Run a Full Node and Start Staking VRSC',
  description:
    'Participate in securing the network while earning rewards with minimal requirements.',
  keywords:
    'crypto staking, VRSC staking, blockchain staking, passive crypto income, run blockchain node, Verus staking',
  alternates: {
    canonical: '/staking',
  },
}

const stakingJsonLd = createWebPageJsonLd({
  path: '/staking',
  name: 'Run a full node and start staking VRSC',
  description:
    'Learn how to run a Verus full node and stake VRSC to participate in network security with no minimum staking amount.',
  mainEntity: {
    '@type': 'HowTo',
    name: 'How to start staking VRSC',
    description:
      'Set up a Verus wallet, sync a full node, keep it online, and stake VRSC to help secure the network.',
    step: [
      {
        '@type': 'HowToStep',
        name: 'Install a Verus wallet',
        text: 'Use a Verus wallet that can run a full node and hold VRSC.',
      },
      {
        '@type': 'HowToStep',
        name: 'Sync the blockchain',
        text: 'Let the node fully synchronize with the Verus network.',
      },
      {
        '@type': 'HowToStep',
        name: 'Enable staking',
        text: 'Keep the wallet online and unlocked for staking to participate in block validation.',
      },
    ],
  },
})

export default function StakingPage() {
  return (
    <>
      <JsonLd data={stakingJsonLd} />
      <BgWrapper>
        <div className="bg-gradient-to-b from-gray-100 via-gray-100 to-white dark:from-gray-950 dark:via-gray-950 dark:to-gray-950">
          <div className="flex flex-col items-center px-0 pb-16 pt-0 md:pb-24 xl:px-4 xl:pt-[54px]">
            <div className="w-full min-w-0 max-w-full overflow-hidden border-b border-gray-200 bg-gray-50 shadow-[0_4px_40px_-12px_rgba(0,0,0,0.1)] dark:border-gray-800 dark:bg-gray-950 dark:shadow-[0_4px_40px_-12px_rgba(0,0,0,0.2)] xl:max-w-[1220px] xl:rounded-lg xl:border">
              <section className="border-b border-gray-200 bg-gradient-to-br from-blue-50 to-white px-8 py-12 dark:border-gray-800 dark:from-blue-950/40 dark:to-gray-950 md:px-14 md:py-16">
                <h1 className="max-w-[760px] break-words text-[28px] font-medium leading-[1.2] tracking-tight text-gray-800 dark:text-white md:text-[44px]">
                  Run a full node and start staking VRSC
                </h1>
                <p className="mt-4 max-w-[760px] break-words text-[15px] leading-relaxed tracking-normal text-gray-600 dark:text-gray-300 md:mt-6 md:text-[17px]">
                  Participate in securing the network while earning rewards with
                  minimal requirements.
                </p>
              </section>

              <StakingSteps />
            </div>
          </div>
        </div>
      </BgWrapper>
    </>
  )
}
