import {env} from '@/configs/env'
import {ArrowLeftRight, Layers, Network} from 'lucide-react'
import {FaMedium} from 'react-icons/fa'

import {TextLinkButton} from '@/components/ui/text-link-button'

import {IntroFeatureSection} from './section-layout'

export function ScalingSection() {
  return (
    <IntroFeatureSection
      title="A multi-chain protocol designed to scale for world demand"
      tone="gradient"
      features={[
        {
          icon: Network,
          title: 'Unlimited scaling',
          description:
            "While others chase higher transactions per second on a single chain, Verus scales through parallel PBaaS chains. Each chain processes 75-800 TPS. Like adding servers to the internet, there's no limit to how many chains you can deploy, creating true global scalability without compromising security.",
        },
        {
          icon: Layers,
          title: 'Power in numbers',
          description:
            'Miners can simultaneously secure up to 22 chains with the same computational power, while staking across unlimited chains. This unique approach strengthens the entire network as it grows.',
        },
        {
          icon: ArrowLeftRight,
          title: 'True interoperability',
          description:
            'Unlike traditional bridges built on vulnerable smart contracts, Verus enables native cross-chain communication through its Verus Internet Protocol (VIP). Every transfer is secured by consensus, not centralized intermediaries or complex code.',
        },
      ]}
      action={
        <div className="mt-5 flex w-full flex-col items-start gap-1">
          <TextLinkButton
            href={`${env.NEXT_PUBLIC_VERUS_MEDIUM}/verus-internet-protocol-vip-provable-decentralized-cross-chain-communication-8d9414a429c5`}
            className="-ml-2 max-w-full"
            contentClassName="items-start leading-relaxed"
            icon={
              <FaMedium className="h-4 w-4 text-gray-700 dark:text-gray-300" />
            }
          >
            Verus Internet Protocol (VIP): provable, decentralized cross-chain
            communication
          </TextLinkButton>

          <TextLinkButton
            href={`${env.NEXT_PUBLIC_VERUS_MEDIUM}/scalability-decentralization-security-what-trilemma-8d2d6869924d`}
            className="-ml-2 max-w-full"
            contentClassName="items-start leading-relaxed"
            icon={
              <FaMedium className="h-4 w-4 text-gray-700 dark:text-gray-300" />
            }
          >
            Scalability, decentralization & security: what trilemma?
          </TextLinkButton>
        </div>
      }
    >
      <p>
        Verus takes a fundamentally different approach to blockchain
        scalability. Rather than forcing all activity onto a single chain, Verus
        enables an unlimited network of blockchains. Each chain inherits the
        full power of Verus's native features. These include built-in DeFi
        capabilities, privacy-preserving technology, decentralized identity, and
        seamless cross-chain connectivity.
      </p>
      <p>
        What makes this possible? The worldwide network of miners and stakers
        that maintains these chains operates completely rent-free. No
        gatekeepers, no excess fees. Just pure infrastructure for public use.
      </p>
      <p>
        While other protocols chase higher transactions per second on a single
        chain, they inevitably run into bottlenecks and security compromises.
        Verus scales naturally through its PBaaS (Public Blockchains as a
        Service) architecture. Any organization, community, business or
        individual can launch their own highly capable blockchain without
        writing code, creating a network that grows organically with demand,
        similar to how the internet evolved.
      </p>
      <p>
        These aren't second-class "Layer 2" solutions. Each PBaaS chain operates
        with full consensus-level security, matching the main chain's
        capabilities while maintaining seamless interoperability across the
        entire network. Whether you're transferring value, converting
        currencies, or managing digital identities, every operation is secured
        by the core protocol itself, not vulnerable smart contracts.
      </p>
    </IntroFeatureSection>
  )
}
