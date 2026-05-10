import Image from 'next/image'

import {cn} from '@/lib/utils'

const features = [
  {
    src: '/img/build/rapid.svg',
    alt: 'Rapid development',
    title: 'Simple APIs',
    description:
      'Integrate with familiar API calls instead of chain-specific languages.',
  },
  {
    src: '/img/build/security.svg',
    alt: 'Security',
    title: 'Layer-1 security',
    description:
      'Protocol rules are validated by the network, not custom contracts.',
  },
  {
    src: '/img/build/data.svg',
    alt: 'Data storage',
    title: 'On-chain data',
    description:
      'Store structured data with user-controlled encryption options.',
  },
  {
    src: '/img/hero/scale.svg',
    alt: 'Scale for world demand',
    title: 'Horizontal scaling',
    description:
      'Add interoperable chains as demand grows.',
  },
  {
    src: '/img/build/access.svg',
    alt: 'API access',
    title: 'Standard integration',
    description:
      'Call blockchain features from existing app stacks.',
  },
  {
    src: '/img/build/build.svg',
    alt: 'Technology stack freedom',
    title: 'Any stack',
    description:
      'Build with the frameworks and languages you prefer.',
  },
] as const

export function FeaturesGrid() {
  return (
    <section className="bg-gray-50 dark:bg-gray-950">
      <div className="grid grid-cols-2 md:grid-cols-3">
        {features.map((feature, index) => {
          const isMobileLeftColumn = index % 2 === 0
          const isDesktopFirstColumn = index % 3 === 0
          const isMobileBottomRow = index >= features.length - 2
          const isDesktopBottomRow = index >= features.length - 3

          return (
            <article
              key={feature.title}
              className={cn(
                'flex min-h-[190px] flex-col items-center justify-center border-gray-200 px-5 py-9 text-center dark:border-gray-800 md:min-h-[220px] md:px-8 md:py-10',
                !isMobileLeftColumn && 'max-md:border-l',
                !isMobileBottomRow && 'max-md:border-b',
                !isDesktopFirstColumn && 'md:border-l',
                !isDesktopBottomRow && 'md:border-b'
              )}
            >
              <Image
                src={feature.src}
                alt={feature.alt}
                width={44}
                height={44}
                className="mb-4 h-9 w-9 object-contain dark:opacity-80 dark:invert md:h-10 md:w-10"
              />
              <h3 className="text-[18px] font-bold leading-tight text-gray-800 dark:text-white md:text-[20px]">
                {feature.title}
              </h3>
              <p className="mt-2 max-w-[220px] text-[14px] leading-relaxed tracking-normal text-gray-600 dark:text-gray-300 md:text-[15px]">
                {feature.description}
              </p>
            </article>
          )
        })}
      </div>
    </section>
  )
}
