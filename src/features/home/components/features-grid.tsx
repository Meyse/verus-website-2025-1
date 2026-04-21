import Image from 'next/image'

const features = [
  {
    src: '/img/hero/commbuilt.svg',
    alt: 'Community-built',
    title: 'Community-built',
    description:
      'No ICO, premine, or dev fees. Launched fairly and community-developed by donations.',
  },
  {
    src: '/img/hero/security.svg',
    alt: 'Security',
    title: 'Security',
    description:
      'Combined PoW and PoS resist 51% attacks, built without vulnerable smart contracts.',
  },
  {
    src: '/img/hero/scale.svg',
    alt: 'Scalability',
    title: 'Scalability',
    description:
      'Native multi-chain architecture scales horizontally without compromising security.',
  },
  {
    src: '/img/hero/decentr.svg',
    alt: 'Decentralization',
    title: 'Decentralization',
    description:
      'Mine, stake, or run nodes with minimal requirements and open participation.',
  },
  {
    src: '/img/hero/interop.png',
    alt: 'Interoperability',
    title: 'Interoperability',
    description:
      'Provable cross-chain bridges connect Verus with other blockchains without custodians.',
  },
  {
    src: '/img/hero/privacy.svg',
    alt: 'Privacy',
    title: 'Privacy',
    description:
      'Optional zero-knowledge privacy lets users choose when to be public or private.',
  },
  {
    src: '/img/hero/identity.png',
    alt: 'Identity',
    title: 'Identity',
    description:
      'Self-sovereign identity is built into the protocol for user-owned names and data.',
  },
  {
    src: '/img/hero/defi.png',
    alt: 'DeFi',
    title: 'DeFi',
    description:
      'Fair DeFi without MEV exploitation or high fees. Native transactions keep costs low.',
  },
] as const

export function FeaturesGrid() {
  return (
    <div className="grid grid-cols-2 bg-gradient-to-b from-verus-blue/20 via-white/70 to-white/90 dark:from-blue-950/50 dark:via-gray-950/60 dark:to-black/20 md:grid-cols-4">
      {features.map((feature, index) => {
        const isMobileLeftColumn = index % 2 === 0
        const isDesktopFirstColumn = index % 4 === 0
        const isMobileBottomRow = index >= features.length - 2
        const isDesktopBottomRow = index >= features.length - 4
        const borderClasses = [
          !isMobileLeftColumn && 'max-md:border-l',
          !isMobileBottomRow && 'max-md:border-b',
          !isDesktopFirstColumn && 'md:border-l',
          !isDesktopBottomRow && 'md:border-b',
        ]
          .filter(Boolean)
          .join(' ')

        return (
          <article
            key={feature.title}
            className={`flex min-h-[220px] flex-col items-center justify-center border-gray-200 px-5 py-10 text-center dark:border-gray-800 md:min-h-[260px] md:px-8 md:py-12 ${
              borderClasses
            }`}
          >
            <Image
              src={feature.src}
              alt={feature.alt}
              width={44}
              height={44}
              className="mb-4 h-10 w-10 object-contain md:h-11 md:w-11"
            />
            <h2 className="text-[18px] font-medium leading-tight text-black dark:text-white md:text-[20px]">
              {feature.title}
            </h2>
            <p className="mt-3 max-w-[230px] text-[14px] leading-relaxed text-gray-700 dark:text-gray-300 md:text-[15px]">
              {feature.description}
            </p>
          </article>
        )
      })}
    </div>
  )
}
