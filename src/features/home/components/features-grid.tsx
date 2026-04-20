import Image from 'next/image'

const features = [
  {
    src: '/img/hero/commbuilt.svg',
    alt: 'Community-built',
    title: 'Community-built',
    description:
      'No ICO, premine, or dev fees. Launched fairly, community-developed and runs on donations.',
  },
  {
    src: '/img/hero/security.svg',
    alt: 'Security',
    title: 'Security',
    description:
      'PoW and PoS combine to resist 51% attacks without vulnerable smart contracts.',
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
      'Native transactions keep costs low and avoid MEV-style smart contract extraction.',
  },
] as const

export function FeaturesGrid() {
  return (
    <div className="relative w-screen md:max-w-[1220px]">
      <div className="mb-2 border border-white/60 bg-white/25 bg-gradient-to-br from-white/50 via-white/25 to-white/10 shadow-[0_24px_80px_-36px_rgba(15,23,42,0.65)] backdrop-blur-2xl backdrop-saturate-150 dark:border-white/10 dark:from-gray-950/50 dark:via-gray-900/35 dark:to-blue-950/20 md:mb-4 md:rounded-lg">
        <div className="mx-auto grid max-w-[1200px] grid-cols-2 gap-x-5 gap-y-12 px-5 py-10 md:grid-cols-4 md:gap-x-8 md:gap-y-16 md:px-8 md:py-12">
          {features.map((feature) => (
            <article
              key={feature.title}
              className="flex min-h-[170px] flex-col items-center text-center"
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
          ))}
        </div>
      </div>
    </div>
  )
}
