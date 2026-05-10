import {Download, Server, ShieldCheck, Smartphone} from 'lucide-react'

import {TextLinkButton} from '@/components/ui/text-link-button'

import {IntroFeatureSection} from './section-layout'

export function ConsensusSection() {
  return (
    <IntroFeatureSection
      title="Decentralized, secure & 51% hash attack resistant consensus"
      features={[
        {
          icon: Smartphone,
          title: 'Low barrier mining',
          description:
            'Anyone can mine with a computer, phone, or ARM device. Mine up to 22 chains simultaneously without extra power costs, making it one of the most cost-efficient and environmentally conscious mining protocols.',
        },
        {
          icon: Server,
          title: 'Simple staking',
          description: (
            <>
              Start staking with any amount, no minimum coins needed. Funds stay
              unlocked and flexible. Run a node on basic hardware and{' '}
              <a
                href="/staking"
                className="font-medium text-verus-blue hover:underline dark:text-blue-400"
              >
                start staking
              </a>{' '}
              while earning rewards.
            </>
          ),
        },
        {
          icon: ShieldCheck,
          title: 'Attack resistant',
          description:
            'The hybrid PoW/PoS design makes 51% attacks virtually impossible. All operations, from currency transfers to DeFi, are secured directly by consensus, not vulnerable smart contracts.',
        },
      ]}
      action={
        <div className="mt-5">
          <TextLinkButton
            href="/papers/VerusPoP.pdf"
            className="-ml-2 max-w-full"
            contentClassName="items-start leading-relaxed"
            icon={
              <Download className="h-4 w-4 text-gray-700 dark:text-gray-300" />
            }
          >
            Download Proof of Power paper
          </TextLinkButton>
        </div>
      }
    >
      <p>
        The Verus blockchain and its multi-chain network are secured by Proof of
        Power, a hybrid consensus mechanism combining 50% proof-of-work with 50%
        proof-of-stake. This design, coupled with extremely low barriers to
        participation, creates a naturally decentralized and provably secure
        network.
      </p>
      <p>
        What makes this possible? The protocol is designed for true public
        participation. No minimum stake requirements, no expensive mining
        equipment needed. Just pure consensus power distributed across a
        worldwide community of miners and stakers.
      </p>
      <p>
        Most blockchain protocols concentrate power in the hands of those who
        can afford expensive mining equipment or large stakes. Verus ensures
        security through widespread participation, letting anyone with a
        computer, phone, or basic hardware contribute to and earn from network
        security.
      </p>
    </IntroFeatureSection>
  )
}
