import {Code, Key, Network} from 'lucide-react'

/*
 * Updated:
 * - Transformed to match PBaaS content styling with modern gradient backgrounds
 * - Created more developer-focused title
 * - Added radial gradients and improved background elements
 * - Enhanced card designs with hover effects
 * - Improved spacing and layout for better readability
 */
export function VDXFSection() {
  return (
    <section className="relative mb-24 md:mb-32">
      {/* Background decorative elements */}
      <div className="absolute left-10 top-0 -z-10 h-80 w-80 rounded-full bg-blue-500/5 blur-[120px] dark:bg-blue-500/10"></div>
      <div className="absolute bottom-20 right-10 -z-10 h-60 w-60 rounded-full bg-blue-500/5 blur-[100px] dark:bg-blue-500/10"></div>

      {/* Developer-focused Title */}
      <div className="mb-12 flex flex-col items-center justify-center md:mb-16">
        <h2 className="mx-auto mb-4 max-w-[1000px] text-center text-[28px] font-medium leading-[1.2] tracking-tight text-gray-800 dark:text-white md:mb-6 md:text-[55px]">
          Standardized Data Exchange Across Chains
        </h2>
        <p className="mx-auto max-w-3xl text-center text-[16px] text-gray-600 dark:text-gray-300 md:text-[20px]">
          Build applications with a universal data schema that works seamlessly
          across all Verus ecosystem chains.
        </p>
      </div>

      <div className="relative w-full overflow-hidden rounded-2xl border border-blue-100/80 bg-gradient-to-br from-blue-50/90 to-white p-8 shadow-[0_4px_40px_-12px_rgba(0,0,0,0.1)] backdrop-blur-sm dark:border-blue-900/30 dark:from-blue-950/40 dark:to-gray-950 dark:shadow-[0_4px_40px_-12px_rgba(0,0,0,0.3)] md:p-12">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.08),transparent_50%)] dark:bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.15),transparent_50%)]"></div>
        <div className="absolute -bottom-8 -right-8 h-40 w-40 rounded-full bg-blue-400/10 blur-xl dark:bg-blue-400/20"></div>

        <div className="relative flex flex-col gap-8 md:flex-row md:gap-16">
          {/* Left Column */}
          <div className="w-full md:w-1/2">
            <div className="space-y-4">
              <p className="text-[15px] leading-relaxed tracking-tight text-gray-600 dark:text-gray-300 md:text-[16px]">
                VDXF is a protocol-level system for defining, storing, and
                exchanging data across the Verus network. It provides globally
                unique identifiers for data types and enables applications to
                handle data consistently across different chains and systems.
              </p>
              <p className="text-[15px] leading-relaxed tracking-tight text-gray-600 dark:text-gray-300 md:text-[16px]">
                Every VDXF key is tied to a namespace (typically a VerusID) and
                includes metadata about how the data should be handled. This
                creates a permission system where only namespace controllers can
                create new data types.
              </p>
            </div>

            <div className="mt-12 space-y-8">
              {/* Key Features */}
              <div>
                <div className="mb-6 flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-blue-100/80 bg-white/90 text-blue-600 shadow-sm dark:border-blue-900/30 dark:bg-gray-800/90 dark:text-blue-400">
                    <Key className="h-6 w-6" />
                  </div>
                  <h3 className="text-[20px] font-medium text-gray-900 dark:text-white md:text-[24px]">
                    Developer Integration
                  </h3>
                </div>
                <div className="rounded-lg border border-blue-100/60 bg-white/80 p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md dark:border-blue-900/20 dark:bg-gray-800/50">
                  <ul className="space-y-3">
                    <li className="relative pl-6 text-[15px] leading-relaxed text-gray-600 dark:text-gray-300 md:text-[16px]">
                      <div className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-blue-500/60 dark:bg-blue-400/60"></div>
                      Globally unique 20-byte identifiers
                    </li>
                    <li className="relative pl-6 text-[15px] leading-relaxed text-gray-600 dark:text-gray-300 md:text-[16px]">
                      <div className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-blue-500/60 dark:bg-blue-400/60"></div>
                      Human-readable type names
                    </li>
                    <li className="relative pl-6 text-[15px] leading-relaxed text-gray-600 dark:text-gray-300 md:text-[16px]">
                      <div className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-blue-500/60 dark:bg-blue-400/60"></div>
                      Namespace-based permissions
                    </li>
                    <li className="relative pl-6 text-[15px] leading-relaxed text-gray-600 dark:text-gray-300 md:text-[16px]">
                      <div className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-blue-500/60 dark:bg-blue-400/60"></div>
                      Support for complex data structures
                    </li>
                  </ul>
                </div>
              </div>

              {/* Data Types */}
              <div>
                <div className="mb-6 flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-blue-100/80 bg-white/90 text-blue-600 shadow-sm dark:border-blue-900/30 dark:bg-gray-800/90 dark:text-blue-400">
                    <Code className="h-6 w-6" />
                  </div>
                  <h3 className="text-[20px] font-medium text-gray-900 dark:text-white md:text-[24px]">
                    Use Cases for Builders
                  </h3>
                </div>
                <div className="rounded-lg border border-blue-100/60 bg-white/80 p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md dark:border-blue-900/20 dark:bg-gray-800/50">
                  <ul className="space-y-3">
                    <li className="relative pl-6 text-[15px] leading-relaxed text-gray-600 dark:text-gray-300 md:text-[16px]">
                      <div className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-blue-500/60 dark:bg-blue-400/60"></div>
                      Identity profiles and credentials
                    </li>
                    <li className="relative pl-6 text-[15px] leading-relaxed text-gray-600 dark:text-gray-300 md:text-[16px]">
                      <div className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-blue-500/60 dark:bg-blue-400/60"></div>
                      Application states and settings
                    </li>
                    <li className="relative pl-6 text-[15px] leading-relaxed text-gray-600 dark:text-gray-300 md:text-[16px]">
                      <div className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-blue-500/60 dark:bg-blue-400/60"></div>
                      Digital asset metadata
                    </li>
                    <li className="relative pl-6 text-[15px] leading-relaxed text-gray-600 dark:text-gray-300 md:text-[16px]">
                      <div className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-blue-500/60 dark:bg-blue-400/60"></div>
                      Cross-chain references
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="w-full border-gray-200 dark:border-gray-700 md:w-1/2 md:border-l md:pl-16">
            <div className="space-y-8">
              {/* Cross-Chain Storage */}
              <div>
                <div className="mb-6 flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-blue-100/80 bg-white/90 text-blue-600 shadow-sm dark:border-blue-900/30 dark:bg-gray-800/90 dark:text-blue-400">
                    <Network className="h-6 w-6" />
                  </div>
                  <h3 className="text-[20px] font-medium text-gray-900 dark:text-white md:text-[24px]">
                    Multi-Chain Architecture
                  </h3>
                </div>
                <div className="space-y-6">
                  <div className="rounded-lg border border-blue-100/60 bg-white/80 p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md dark:border-blue-900/20 dark:bg-gray-800/50">
                    <h4 className="mb-4 text-[16px] font-medium text-gray-900 dark:text-white md:text-[18px]">
                      Data Sharding
                    </h4>
                    <p className="text-[15px] leading-relaxed text-gray-600 dark:text-gray-300 md:text-[16px]">
                      Distribute data across multiple PBaaS chains while
                      maintaining atomic references. Scale horizontally by using
                      different chains for different types of data or access
                      patterns.
                    </p>
                  </div>

                  <div className="rounded-lg border border-blue-100/60 bg-white/80 p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md dark:border-blue-900/20 dark:bg-gray-800/50">
                    <h4 className="mb-4 text-[16px] font-medium text-gray-900 dark:text-white md:text-[18px]">
                      Storage Markets
                    </h4>
                    <p className="text-[15px] leading-relaxed text-gray-600 dark:text-gray-300 md:text-[16px]">
                      Each PBaaS chain can compete in storage markets based on
                      capacity, costs, and features. Some chains might optimize
                      for large files, while others focus on fast access to
                      frequently used data.
                    </p>
                  </div>

                  <div className="rounded-lg border border-blue-100/60 bg-white/80 p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md dark:border-blue-900/20 dark:bg-gray-800/50">
                    <h4 className="mb-4 text-[16px] font-medium text-gray-900 dark:text-white md:text-[18px]">
                      Unified Access
                    </h4>
                    <p className="text-[15px] leading-relaxed text-gray-600 dark:text-gray-300 md:text-[16px]">
                      Query and access data seamlessly across all chains using
                      VDXF keys. The protocol handles cross-chain references and
                      data retrieval automatically.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
