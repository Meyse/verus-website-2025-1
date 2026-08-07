import Image from 'next/image'

import {ExternalLink} from 'lucide-react'

import {buttonVariants} from '@/components/ui/button'

interface ProtocolLibrary {
  description: string
  href: string
  imageSrc: string
  title: string
}

const protocolLibraries: ProtocolLibrary[] = [
  {
    title: 'Create wallet-ready requests',
    description:
      'Build typed payloads for app requests, VerusPay invoices, and wallet deeplinks.',
    href: 'https://github.com/VerusCoin/verus-typescript-primitives',
    imageSrc: '/img/build/libraries/wallet-requests.jpg',
  },
  {
    title: 'Read Verus chain data',
    description:
      'Query identities, currencies, marketplace activity, and transactions directly from verusd.',
    href: 'https://github.com/VerusCoin/verusd-rpc-ts-client',
    imageSrc: '/img/build/libraries/chain-data.jpg',
  },
  {
    title: 'Build VerusID experiences',
    description:
      'Add authentication, signatures, identity updates, provisioning, and encrypted app requests.',
    href: 'https://github.com/VerusCoin/verusid-ts-client',
    imageSrc: '/img/build/libraries/verusid-experiences.jpg',
  },
  {
    title: 'Construct and sign transactions',
    description:
      'Create client-side Verus UTXO transaction flows for wallet-level actions.',
    href: 'https://github.com/VerusCoin/BitGoJS/tree/utxo-lib-verus',
    imageSrc: '/img/build/libraries/transactions.jpg',
  },
]

function ProtocolLibraryCard({library}: {library: ProtocolLibrary}) {
  return (
    <a
      href={library.href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`View ${library.title.toLowerCase()} on GitHub`}
      className="group relative flex min-h-[300px] min-w-0 overflow-hidden bg-blue-100 text-gray-950 focus-visible:z-10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-white md:min-h-[340px] lg:min-h-[360px]"
    >
      <Image
        src={library.imageSrc}
        alt=""
        fill
        sizes="(min-width: 1024px) 25vw, (min-width: 768px) 50vw, 100vw"
        className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.035] group-focus-visible:scale-[1.035]"
      />
      <span
        aria-hidden="true"
        className="absolute inset-0 bg-white/25 transition-colors duration-300 group-hover:bg-white/40 group-focus-visible:bg-white/40"
      />

      <span className="relative flex min-w-0 flex-1 flex-col px-6 py-7 md:px-7 md:py-8">
        <h3 className="font-display text-[24px] font-medium leading-[1.08] tracking-tight md:text-[26px]">
          {library.title}
        </h3>
        <p className="mt-4 max-w-[280px] text-[15px] leading-relaxed tracking-normal text-gray-900/80">
          {library.description}
        </p>
        <span
          aria-hidden="true"
          className={buttonVariants({
            variant: 'verusSecondary',
            size: 'verus',
            className: 'mt-auto w-fit',
          })}
        >
          View on GitHub
          <ExternalLink className="h-4 w-4" />
        </span>
      </span>
    </a>
  )
}

export function ProtocolLibrariesSection() {
  return (
    <section
      id="protocol-libraries"
      className="scroll-mt-24 border-t border-gray-200 bg-gray-50 dark:border-gray-800 dark:bg-gray-950"
    >
      <div className="min-w-0 border-b border-gray-200 px-8 py-8 dark:border-gray-800 md:px-14 md:py-10">
        <h2 className="font-display text-[24px] font-medium tracking-tight text-gray-800 dark:text-white md:text-[30px]">
          The essential TypeScript stack
        </h2>
      </div>

      <div className="grid min-w-0 grid-cols-1 gap-px bg-gray-200 dark:bg-gray-800 md:grid-cols-2 lg:grid-cols-4">
        {protocolLibraries.map((library) => (
          <ProtocolLibraryCard key={library.title} library={library} />
        ))}
      </div>
    </section>
  )
}
