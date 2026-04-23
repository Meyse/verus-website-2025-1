import {Database, Key, Network, Shield} from 'lucide-react'

/*
 * Updated:
 * - Transformed the structure section to have a modern SaaS-like design with dark mode support
 * - Centered the title and subtitle
 * - Reorganized the four main sections into a 2x2 grid layout on desktop
 * - Added three secondary buttons at the bottom of the section
 */
export function StructureSection() {
  return (
    <section className="relative mb-24 md:mt-32">
      <div className="absolute left-10 top-20 -z-10 h-60 w-60 rounded-full bg-blue-500/5 blur-[80px] dark:bg-blue-500/5"></div>
      <div className="absolute -bottom-10 right-20 -z-10 h-60 w-60 rounded-full bg-blue-500/5 blur-[80px] dark:bg-blue-500/5"></div>

      {/* Centered Title and Subtitle */}
      <div className="mb-12 text-center">
        <h2 className="mb-4 text-[28px] font-medium leading-[1.2] tracking-tight text-gray-800 dark:text-white md:mb-8 md:text-[55px]">
          VerusID Structure
        </h2>
        <div className="mx-auto max-w-3xl space-y-4">
          <p className="text-[15px] leading-relaxed text-gray-600 dark:text-gray-300 md:text-[16px]">
            Each VerusID consists of several components that together provide
            its powerful capabilities. This structure enables VerusID to serve
            as the foundation for launching currencies, tokens, and entire
            blockchains.
          </p>
          <p className="text-[15px] leading-relaxed text-gray-600 dark:text-gray-300 md:text-[16px]">
            Unlike traditional blockchain addresses that are cryptographic
            hashes, VerusIDs are human-readable names that can be owned,
            controlled, transferred, and used across the Verus network.
          </p>
        </div>
      </div>

      {/* 2x2 Grid Layout */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
        {/* Core Components */}
        <div className="group relative overflow-hidden rounded-xl border border-blue-100/80 bg-white/70 p-6 backdrop-blur-sm transition-all duration-300 dark:border-blue-900/30 dark:bg-gray-900/50 md:p-8">
          <div className="absolute -bottom-8 -right-8 h-32 w-32 rounded-full bg-blue-400/5 blur-xl dark:bg-blue-400/10"></div>
          <div className="relative">
            <div className="mb-4 flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-blue-100/80 bg-white/90 text-blue-600 shadow-sm dark:border-blue-900/30 dark:bg-gray-800/90 dark:text-blue-400">
                <Key className="h-6 w-6" />
              </div>
              <h3 className="text-[18px] font-medium text-gray-900 dark:text-white md:text-[22px]">
                Core Components
              </h3>
            </div>
            <ul className="space-y-3 pl-2">
              <li className="relative pl-6 text-[15px] leading-relaxed text-gray-600 dark:text-gray-300">
                <div className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-blue-500/60 dark:bg-blue-400/60"></div>
                Human-readable name (e.g., "YourBrand@")
              </li>
              <li className="relative pl-6 text-[15px] leading-relaxed text-gray-600 dark:text-gray-300">
                <div className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-blue-500/60 dark:bg-blue-400/60"></div>
                Primary address containing private key
              </li>
              <li className="relative pl-6 text-[15px] leading-relaxed text-gray-600 dark:text-gray-300">
                <div className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-blue-500/60 dark:bg-blue-400/60"></div>
                Identity address (i-address)
              </li>
              <li className="relative pl-6 text-[15px] leading-relaxed text-gray-600 dark:text-gray-300">
                <div className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-blue-500/60 dark:bg-blue-400/60"></div>
                Optional private z-address
              </li>
            </ul>
          </div>
        </div>

        {/* Security Features */}
        <div className="group relative overflow-hidden rounded-xl border border-blue-100/80 bg-gradient-to-br from-blue-50/70 to-white p-6 backdrop-blur-sm transition-all duration-300 dark:border-blue-900/30 dark:from-blue-950/40 dark:to-gray-950 md:p-8">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.08),transparent_50%)] dark:bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.15),transparent_50%)]"></div>
          <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-blue-400/10 blur-2xl dark:bg-blue-400/20"></div>
          <div className="relative">
            <div className="mb-4 flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-blue-100/80 bg-white/90 text-blue-600 shadow-sm dark:border-blue-900/30 dark:bg-gray-800/90 dark:text-blue-400">
                <Shield className="h-6 w-6" />
              </div>
              <h3 className="text-[18px] font-medium text-gray-900 dark:text-white md:text-[22px]">
                Security Features
              </h3>
            </div>
            <ul className="space-y-3 pl-2">
              <li className="relative pl-6 text-[15px] leading-relaxed text-gray-600 dark:text-gray-300">
                <div className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-blue-500/60 dark:bg-blue-400/60"></div>
                Revocation authorities for key compromise
              </li>
              <li className="relative pl-6 text-[15px] leading-relaxed text-gray-600 dark:text-gray-300">
                <div className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-blue-500/60 dark:bg-blue-400/60"></div>
                Recovery authorities for backup access
              </li>
              <li className="relative pl-6 text-[15px] leading-relaxed text-gray-600 dark:text-gray-300">
                <div className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-blue-500/60 dark:bg-blue-400/60"></div>
                Time-locked vaults for secure storage
              </li>
              <li className="relative pl-6 text-[15px] leading-relaxed text-gray-600 dark:text-gray-300">
                <div className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-blue-500/60 dark:bg-blue-400/60"></div>
                Multi-signature capabilities
              </li>
            </ul>
          </div>
        </div>

        {/* Data Storage */}
        <div className="group relative overflow-hidden rounded-xl border border-blue-100/80 bg-white/70 p-6 backdrop-blur-sm transition-all duration-300 dark:border-blue-900/30 dark:bg-gray-900/50 md:p-8">
          <div className="absolute left-6 top-6 h-32 w-32 rounded-full bg-blue-400/5 blur-xl dark:bg-blue-400/10"></div>
          <div className="relative">
            <div className="mb-6 flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-blue-100/80 bg-white/90 text-blue-600 shadow-sm dark:border-blue-900/30 dark:bg-gray-800/90 dark:text-blue-400">
                <Database className="h-6 w-6" />
              </div>
              <h3 className="text-[18px] font-medium text-gray-900 dark:text-white md:text-[22px]">
                Data Storage
              </h3>
            </div>
            <div className="space-y-6">
              <div className="rounded-xl border border-blue-100/60 bg-white/80 px-6 py-5 backdrop-blur-sm dark:border-blue-900/20 dark:bg-gray-800/50">
                <h4 className="mb-4 text-[16px] font-medium text-gray-900 dark:text-white">
                  VDXF Storage
                </h4>
                <p className="text-[15px] leading-relaxed text-gray-600 dark:text-gray-300">
                  The Verus Data eXchange Format (VDXF) provides a structured
                  system for defining and storing data within VerusIDs. This
                  enables IDs to store complex data structures, configurations,
                  or application-specific information.
                </p>
              </div>

              <div className="rounded-xl border border-blue-100/60 bg-white/80 px-6 py-5 backdrop-blur-sm dark:border-blue-900/20 dark:bg-gray-800/50">
                <h4 className="mb-4 text-[16px] font-medium text-gray-900 dark:text-white">
                  Contentmap & Contentmultimap
                </h4>
                <p className="text-[15px] leading-relaxed text-gray-600 dark:text-gray-300">
                  Store key-value data and complex nested data structures
                  directly in your VerusID. Perfect for application
                  configurations, user settings, or any structured data that
                  needs blockchain verification.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Namespace Capabilities */}
        <div className="group relative overflow-hidden rounded-xl border border-blue-100/80 bg-white/70 p-6 backdrop-blur-sm transition-all duration-300 dark:border-blue-900/30 dark:bg-gray-900/50 md:p-8">
          <div className="absolute -bottom-8 -right-8 h-32 w-32 rounded-full bg-blue-400/5 blur-xl dark:bg-blue-400/10"></div>
          <div className="relative">
            <div className="mb-6 flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-blue-100/80 bg-white/90 text-blue-600 shadow-sm dark:border-blue-900/30 dark:bg-gray-800/90 dark:text-blue-400">
                <Network className="h-6 w-6" />
              </div>
              <h3 className="text-[18px] font-medium text-gray-900 dark:text-white md:text-[22px]">
                Namespace Capabilities
              </h3>
            </div>
            <div className="space-y-6">
              <div className="rounded-xl border border-blue-100/60 bg-white/80 px-6 py-5 backdrop-blur-sm dark:border-blue-900/20 dark:bg-gray-800/50">
                <h4 className="mb-4 text-[16px] font-medium text-gray-900 dark:text-white">
                  Hierarchical Structure
                </h4>
                <p className="text-[15px] leading-relaxed text-gray-600 dark:text-gray-300">
                  VerusIDs can create sub-namespaces for organizing entities
                  within your ecosystem. This hierarchical structure allows for
                  complex organizational systems and clear ownership
                  delineation.
                </p>
              </div>

              <div className="rounded-xl border border-blue-100/60 bg-white/80 px-6 py-5 backdrop-blur-sm dark:border-blue-900/20 dark:bg-gray-800/50">
                <h4 className="mb-4 text-[16px] font-medium text-gray-900 dark:text-white">
                  Launch Capabilities
                </h4>
                <p className="text-[15px] leading-relaxed text-gray-600 dark:text-gray-300">
                  The namespace serves as the foundation for issuing currencies
                  and tokens, and for launching entire blockchains. Your VerusID
                  becomes the controller and reference point for all related
                  assets and systems.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Secondary Buttons */}
      <div className="mt-16 flex flex-col items-center justify-center gap-4 md:flex-row md:gap-6">
        <a
          href="/build/data/"
          className="group flex h-[40px] w-fit items-center justify-center rounded-lg border border-blue-200 bg-white/80 px-8 text-[14px] font-medium text-verus-blue backdrop-blur-sm transition-all duration-300 hover:border-blue-300 hover:text-blue-600 dark:border-blue-800/60 dark:bg-blue-950/80 dark:text-blue-300 dark:hover:border-blue-700 dark:hover:text-blue-200 md:h-[50px] md:text-[16px]"
        >
          Learn more about on-chain data
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            />
          </svg>
        </a>

        <a
          href="/build/pbaas-currencies/"
          className="group flex h-[40px] w-fit items-center justify-center rounded-lg border border-blue-200 bg-white/80 px-8 text-[14px] font-medium text-verus-blue backdrop-blur-sm transition-all duration-300 hover:border-blue-300 hover:text-blue-600 dark:border-blue-800/60 dark:bg-blue-950/80 dark:text-blue-300 dark:hover:border-blue-700 dark:hover:text-blue-200 md:h-[50px] md:text-[16px]"
        >
          Learn more about currencies
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            />
          </svg>
        </a>

        <a
          href="/build/pbaas-chains/"
          className="group flex h-[40px] w-fit items-center justify-center rounded-lg border border-blue-200 bg-white/80 px-8 text-[14px] font-medium text-verus-blue backdrop-blur-sm transition-all duration-300 hover:border-blue-300 hover:text-blue-600 dark:border-blue-800/60 dark:bg-blue-950/80 dark:text-blue-300 dark:hover:border-blue-700 dark:hover:text-blue-200 md:h-[50px] md:text-[16px]"
        >
          Learn more about PBaaS chains
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            />
          </svg>
        </a>
      </div>
    </section>
  )
}
