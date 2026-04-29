import {env} from '@/configs/env'
import {Code, Shield, Zap} from 'lucide-react'
import {FaMedium} from 'react-icons/fa'

import {TextLinkButton} from '@/components/ui/text-link-button'

import {IntroFeatureSection} from './section-layout'

export function SmartTransactionsSection() {
  return (
    <IntroFeatureSection
      title="No faulty smart contracts, only secure Smart Transactions"
      features={[
        {
          icon: Shield,
          title: 'Protocol-level security',
          description:
            'Critical functions like currencies, identity, and DeFi are built into the consensus layer. No smart contract code means no smart contract vulnerabilities to exploit.',
        },
        {
          icon: Code,
          title: 'Developer friendly',
          description:
            'Build advanced applications using straightforward API commands, without learning complex smart contract languages. Create secure dApps that leverage protocol-level features.',
        },
        {
          icon: Zap,
          title: 'MEV resistant',
          description:
            'Unlike EVM systems where transactions can be reordered for profit, Smart Transactions are processed fairly by consensus. No front-running, no sandwich attacks, no value extraction.',
        },
      ]}
      action={
        <div className="mt-5">
          <TextLinkButton
            href={`${env.NEXT_PUBLIC_VERUS_MEDIUM}/verus-smart-transactions-vs-smart-contracts-f98079c00ed0`}
            className="-ml-2 max-w-full"
            contentClassName="items-start leading-relaxed"
            icon={
              <FaMedium className="h-4 w-4 text-gray-700 dark:text-gray-300" />
            }
          >
            Verus Smart Transactions vs. Smart Contracts
          </TextLinkButton>
        </div>
      }
    >
      <p>
        All functionality on the Verus blockchain is programmed in the protocol.
        All Verus features are considered mission-critical and find their origin
        in the consensus layer. These functionalities are directly connected to
        the miners and stakers, they are called Smart Transactions.
      </p>
      <p>
        Verus shifts core security responsibilities from application developers
        to the protocol level, ensuring that critical functions are validated by
        consensus. This, combined with a transparent wallet approval mechanism,
        ensures users always understand exactly what they're authorizing.
      </p>
      <p>
        It's an important design choice because we can see many problems arise
        with smart contracts on other (EVM-based) systems. Vulnerabilities, bugs
        and abuse. New smart contract incidents occur each day.
      </p>
      <p>
        Smart Transactions represent a fundamental shift in blockchain
        architecture. Instead of relying on complex programmable contracts,
        Verus embeds core functionalities directly in the protocol, where
        they're validated by consensus and can't be exploited.
      </p>
    </IntroFeatureSection>
  )
}
