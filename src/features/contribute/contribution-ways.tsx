import type {ReactNode} from 'react'

import {Code, DollarSign, Users} from 'lucide-react'

interface ContributionWay {
  title: string
  description: string
  icon: ReactNode
  examples: string[]
}

export const contributionWays: ContributionWay[] = [
  {
    title: 'Technical contributions',
    description: 'Help improve the code, documentation, and infrastructure.',
    icon: <Code className="h-6 w-6 text-blue-600 dark:text-blue-400" />,
    examples: [
      'Develop the core protocol or applications',
      'Test and report bugs',
      'Improve documentation',
      'Build tools and services',
    ],
  },
  {
    title: 'Community support',
    description: 'Join discussions and help others learn about Verus.',
    icon: <Users className="h-6 w-6 text-purple-600 dark:text-purple-400" />,
    examples: [
      'Help new users get started',
      'Translate content',
      'Participate in community discussions',
      'Organize community events',
    ],
  },
  {
    title: 'Financial support',
    description: 'Donate to help fund ongoing development and operations.',
    icon: (
      <DollarSign className="h-6 w-6 text-yellow-600 dark:text-yellow-400" />
    ),
    examples: [
      'Donate cryptocurrencies',
      'Sponsor specific projects',
      'Mine or stake to support the network',
      'Fund marketing initiatives',
    ],
  },
]
