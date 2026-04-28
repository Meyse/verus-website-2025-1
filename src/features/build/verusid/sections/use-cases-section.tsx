import type {LucideIcon} from 'lucide-react'

import {
  Building,
  Calendar,
  Globe,
  ShieldCheck,
  Users,
  Wallet,
} from 'lucide-react'

import {cn} from '@/lib/utils'

type UseCase = {
  icon: LucideIcon
  title: string
  description: string
  details: {
    title: string
    description: string
  }[]
}

const useCases: UseCase[] = [
  {
    icon: Users,
    title: 'Tokenized communities',
    description:
      'Create tokenized communities where membership and governance are managed through VerusIDs and associated tokens.',
    details: [
      {
        title: 'Governance tokens',
        description:
          'Issue governance tokens to community members for voting on proposals and community decisions.',
      },
      {
        title: 'Digital collectives',
        description:
          'Create shared ownership and decision-making systems through VerusID namespaces.',
      },
    ],
  },
  {
    icon: Building,
    title: 'Enterprise solutions',
    description:
      'Deploy identity and digital asset systems with VerusID security, recovery, and management features.',
    details: [
      {
        title: 'Asset tokenization',
        description:
          'Tokenize real-world assets and manage them through verifiable identities in a secure blockchain environment.',
      },
      {
        title: 'Supply chain tracking',
        description:
          'Track products and components through the supply chain with immutable identity records.',
      },
    ],
  },
  {
    icon: Globe,
    title: 'Decentralized social',
    description:
      'Build social platforms where users own their identities, data, and social connections.',
    details: [
      {
        title: 'Self-sovereign profiles',
        description:
          'Let users control profiles, content, and connections through VerusIDs across multiple platforms.',
      },
      {
        title: 'Content monetization',
        description:
          'Enable direct monetization of content through tokens tied to creator VerusIDs.',
      },
    ],
  },
  {
    icon: Calendar,
    title: 'Event management',
    description:
      'Create verifiable, fraud-resistant event ticketing and management systems using VerusID and tokenization.',
    details: [
      {
        title: 'NFT ticketing',
        description:
          'Issue verifiable and transferable tickets as NFTs tied to attendee VerusIDs.',
      },
      {
        title: 'Credential verification',
        description:
          'Provide secure verification for event entry and special access with privacy-preserving features.',
      },
    ],
  },
  {
    icon: Wallet,
    title: 'Financial applications',
    description:
      'Build financial applications with verifiable identities and programmable currencies.',
    details: [
      {
        title: 'DeFi platforms',
        description:
          'Build decentralized finance platforms with identity-based access controls and verifiable transactions.',
      },
      {
        title: 'Multi-chain applications',
        description:
          'Create financial applications that operate across multiple blockchains with unified identity.',
      },
    ],
  },
  {
    icon: ShieldCheck,
    title: 'Identity and privacy',
    description:
      'Implement privacy-focused identity systems that put users in control of their personal data.',
    details: [
      {
        title: 'Zero-knowledge proofs',
        description:
          'Let users prove identity attributes without revealing sensitive information.',
      },
      {
        title: 'Identity verification',
        description:
          'Create KYC and identity verification systems that preserve user privacy while meeting compliance requirements.',
      },
    ],
  },
]

export function UseCasesSection() {
  return (
    <section className="border-t border-gray-200 bg-gray-50 dark:border-gray-800 dark:bg-gray-950">
      <div className="border-b border-gray-200 px-8 py-16 dark:border-gray-800 md:px-14 md:py-24">
        <div className="max-w-[760px]">
          <h2 className="mb-4 text-[28px] font-medium leading-[1.2] tracking-tight text-gray-800 dark:text-white md:mb-8 md:text-[44px]">
            Real-world use cases
          </h2>
          <p className="text-[15px] leading-relaxed tracking-normal text-gray-600 dark:text-gray-300 md:text-[17px]">
            Use VerusID as a durable account, namespace, and control layer for
            applications that need identity, ownership, and verifiable records.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3">
        {useCases.map((useCase, index) => {
          const Icon = useCase.icon
          const isDesktopFirstColumn = index % 3 === 0
          const isDesktopBottomRow = index >= useCases.length - 3

          return (
            <article
              key={useCase.title}
              className={cn(
                'border-gray-200 px-8 py-10 dark:border-gray-800 md:px-8 md:py-12',
                index > 0 && 'max-md:border-t',
                !isDesktopFirstColumn && 'md:border-l',
                !isDesktopBottomRow && 'md:border-b'
              )}
            >
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-lg border border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-900">
                <Icon className="h-7 w-7 text-verus-blue dark:text-blue-400" />
              </div>
              <h3 className="mb-4 text-[22px] font-medium tracking-tight text-gray-800 dark:text-white md:text-[30px]">
                {useCase.title}
              </h3>
              <p className="text-[15px] leading-relaxed tracking-normal text-gray-600 dark:text-gray-300 md:text-[17px]">
                {useCase.description}
              </p>

              <div className="mt-6 space-y-5">
                {useCase.details.map((detail) => (
                  <div
                    key={detail.title}
                    className="border-t border-gray-200 pt-5 dark:border-gray-800"
                  >
                    <h4 className="mb-2 text-[16px] font-medium text-gray-800 dark:text-white">
                      {detail.title}
                    </h4>
                    <p className="text-[14px] leading-relaxed tracking-normal text-gray-600 dark:text-gray-300 md:text-[15px]">
                      {detail.description}
                    </p>
                  </div>
                ))}
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}
