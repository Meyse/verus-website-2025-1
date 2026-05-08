import {ExternalLink, Layers3, Library, PencilLine} from 'lucide-react'

import {cn} from '@/lib/utils'

interface ProtocolLibrary {
  description: string
  href: string
  name: string
}

const readLibraries: ProtocolLibrary[] = [
  {
    name: 'verus-typescript-primitives',
    description:
      'Typed Verus structures for RPC shapes, VDXF serialization, generic requests, VerusPay invoices, and wallet deeplinks.',
    href: 'https://github.com/VerusCoin/verus-typescript-primitives',
  },
  {
    name: 'verusd-rpc-ts-client',
    description:
      'RPC transport client for reading chain, identity, currency, VDXF, marketplace, and transaction data from verusd.',
    href: 'https://github.com/VerusCoin/verusd-rpc-ts-client',
  },
  {
    name: 'verusid-ts-client',
    description:
      'VerusID helper client for signatures and generic request flows such as authentication, invoices, identity updates, provisioning, and app encryption.',
    href: 'https://github.com/VerusCoin/verusid-ts-client',
  },
]

const writeLibraries: ProtocolLibrary[] = [
  {
    name: 'BitGoJS Verus UTXO library',
    description:
      'Verus-enabled UTXO transaction library for constructing and signing client-side transaction flows.',
    href: 'https://github.com/VerusCoin/BitGoJS/tree/utxo-lib-verus',
  },
]

function LibraryRow({library}: {library: ProtocolLibrary}) {
  return (
    <li>
      <a
        href={library.href}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex min-w-0 items-start gap-4 px-8 py-5 transition-colors hover:bg-white dark:hover:bg-gray-900/50 md:px-10 md:py-6"
      >
        <span className="mt-0.5 flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg border border-gray-200 bg-white text-verus-blue dark:border-gray-800 dark:bg-gray-900 dark:text-blue-400">
          <Library className="h-4 w-4" />
        </span>
        <span className="min-w-0 flex-1">
          <span className="block min-w-0 break-words text-[16px] font-medium leading-tight text-gray-800 dark:text-white md:text-[17px]">
            {library.name}
          </span>
          <span className="mt-2 block max-w-[760px] break-words text-[14px] leading-relaxed tracking-normal text-gray-600 dark:text-gray-300 md:text-[15px]">
            {library.description}
          </span>
        </span>
        <ExternalLink className="ml-auto mt-1 h-4 w-4 flex-shrink-0 text-gray-400 opacity-60 transition-opacity group-hover:opacity-100 dark:text-gray-500" />
      </a>
    </li>
  )
}

function LibraryGroup({
  description,
  icon,
  libraries,
  title,
}: {
  description: string
  icon: 'read' | 'write'
  libraries: ProtocolLibrary[]
  title: string
}) {
  const Icon = icon === 'read' ? Layers3 : PencilLine

  return (
    <div
      className={cn(
        'min-w-0 border-gray-200 dark:border-gray-800',
        icon === 'write' && 'border-t md:border-l md:border-t-0'
      )}
    >
      <div className="min-w-0 border-b border-gray-200 px-8 py-7 dark:border-gray-800 md:px-10">
        <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg border border-gray-200 bg-white text-verus-blue dark:border-gray-800 dark:bg-gray-900 dark:text-blue-400">
          <Icon className="h-5 w-5" />
        </div>
        <h3 className="mb-3 text-[22px] font-medium tracking-tight text-gray-800 dark:text-white md:text-[26px]">
          {title}
        </h3>
        <p className="max-w-[520px] break-words text-[15px] leading-relaxed tracking-normal text-gray-600 dark:text-gray-300 md:text-[16px]">
          {description}
        </p>
      </div>
      <ul className="divide-y divide-gray-200 dark:divide-gray-800">
        {libraries.map((library) => (
          <LibraryRow key={library.name} library={library} />
        ))}
      </ul>
    </div>
  )
}

export function ProtocolLibrariesSection() {
  return (
    <section className="border-t border-gray-200 bg-gray-50 dark:border-gray-800 dark:bg-gray-950">
      <div className="min-w-0 border-b border-gray-200 px-8 py-8 dark:border-gray-800 md:px-14 md:py-10">
        <h2 className="mb-3 text-[24px] font-medium tracking-tight text-gray-800 dark:text-white md:text-[30px]">
          Protocol libraries
        </h2>
        <p className="max-w-[760px] break-words text-[15px] leading-relaxed tracking-normal text-gray-600 dark:text-gray-300 md:text-[17px]">
          Use these libraries as the core TypeScript stack for Verus apps. Start
          with chain reads, typed protocol objects, and generic request payloads
          that wallets can present to users. Add the Verus UTXO library when
          your app needs to construct or sign write transactions.
        </p>
      </div>

      <div className="grid min-w-0 grid-cols-1 md:grid-cols-2">
        <LibraryGroup
          title="Read, query, and request"
          description="Use these libraries to query chain data and create or verify app requests that wallets can expose to users, including authentication, VerusPay invoices, identity updates, identity provisioning, and app encryption requests."
          icon="read"
          libraries={readLibraries}
        />
        <LibraryGroup
          title="Build transactions"
          description="Use this library when your app needs wallet-level flows such as constructing and signing Verus UTXO transactions."
          icon="write"
          libraries={writeLibraries}
        />
      </div>
    </section>
  )
}
