import Link from 'next/link'

import {env} from '@/configs/env'
import {ExternalLink, Terminal} from 'lucide-react'

import {Button} from '@/components/ui/button'

export function TerminalExample() {
  return (
    <section className="border-t border-gray-200 bg-gray-50 dark:border-gray-800 dark:bg-gray-950">
      <div className="grid min-w-0 grid-cols-1 md:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)]">
        <div className="min-w-0 px-8 py-12 md:px-14 md:py-16">
          <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-lg border border-gray-200 bg-white text-verus-blue dark:border-gray-800 dark:bg-gray-900 dark:text-blue-400">
            <Terminal className="h-6 w-6" />
          </div>

          <h2 className="mb-4 text-[24px] font-medium tracking-tight text-gray-800 dark:text-white md:text-[30px]">
            Explore the CLI surface
          </h2>
          <p className="max-w-[500px] break-words text-[15px] leading-relaxed tracking-normal text-gray-600 dark:text-gray-300 md:text-[17px]">
            The CLI exposes commands for addresses, blocks, identities,
            currencies, and DeFi flows. Use the command reference when you need
            the full call surface.
          </p>

          <Button
            asChild
            variant="verusSecondaryDark"
            size="verusWide"
            className="mt-8"
          >
            <Link
              href={`${env.NEXT_PUBLIC_VERUS_WIKI}/#!faq-cli/clifaq-02_verus_commands.md`}
              target="_blank"
              rel="noopener noreferrer"
            >
              View command docs
              <ExternalLink className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-[1px]" />
            </Link>
          </Button>
        </div>

        <div className="min-w-0 border-t border-gray-200 px-8 py-10 dark:border-gray-800 md:border-l md:border-t-0 md:px-10 md:py-16">
          <div className="relative overflow-hidden rounded-lg border border-gray-800 bg-gray-950 shadow-[0_4px_24px_-12px_rgba(0,0,0,0.5)]">
            <div className="absolute left-0 right-0 top-0 flex h-10 items-center border-b border-gray-800 bg-gray-900 px-4">
              <div className="flex space-x-2">
                <div className="h-3 w-3 rounded-full bg-red-500/80"></div>
                <div className="h-3 w-3 rounded-full bg-yellow-500/80"></div>
                <div className="h-3 w-3 rounded-full bg-green-500/80"></div>
              </div>
              <div className="ml-4 font-mono text-xs text-gray-400">
                Terminal - verus
              </div>
            </div>

            <div className="overflow-x-auto p-6 pt-14 font-mono text-[13px] leading-relaxed md:p-8 md:pt-16 md:text-[14px]">
              <p className="mb-4 text-green-400">
                # Get help with Verus commands
              </p>
              <p className="mb-2 text-blue-400">./verus help</p>
              <div className="space-y-1 text-gray-300">
                <p>== Addressindex ==</p>
                <p>getaddressbalance</p>
                <p>getaddressdeltas</p>
                <p>getaddressutxos</p>
                <p>getaddresstxids</p>
                <p>== Blockchain ==</p>
                <p>getbestblockhash</p>
                <p>getblock</p>
                <p>getblockchaininfo</p>
                <p>== Currencies ==</p>
                <p>definecurrency</p>
                <p>getcurrency</p>
                <p>listcurrencies</p>
                <p>sendcurrency</p>
                <p>== Identity ==</p>
                <p>getidentity</p>
                <p>registernamecommitment</p>
                <p>registeridentity</p>
                <p>updateidentity</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
