import {Database, Lock, Scale} from 'lucide-react'

/*
 * Updated:
 * - Transformed to match PBaaS content styling with modern gradient backgrounds
 * - Created more developer-focused title
 * - Added radial gradients and improved background elements
 * - Enhanced card designs with hover effects
 * - Improved spacing and layout for better readability
 */
export function StorageSection() {
  return (
    <section className="relative mb-24 md:mb-32 md:mt-32">
      {/* Background decorative elements */}
      <div className="absolute left-10 top-0 -z-10 h-80 w-80 rounded-full bg-blue-500/5 blur-[120px] dark:bg-blue-500/10"></div>
      <div className="absolute bottom-20 right-10 -z-10 h-60 w-60 rounded-full bg-blue-500/5 blur-[100px] dark:bg-blue-500/10"></div>

      {/* Developer-focused Title */}
      <div className="mb-12 flex flex-col items-center justify-center md:mb-16">
        <h2 className="mx-auto mb-4 max-w-[1000px] text-center text-[28px] font-medium leading-[1.2] tracking-tight text-gray-800 dark:text-white md:mb-6 md:text-[55px]">
          Blockchain Native Storage for Modern dApps
        </h2>
        <p className="mx-auto max-w-3xl text-center text-[16px] text-gray-600 dark:text-gray-300 md:text-[20px]">
          Integrate censorship-resistant storage directly in your application
          with blockchain-level security guarantees.
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
                Every PBaaS chain includes a native storage layer that lets you
                store and index data directly on the blockchain. Unlike
                traditional systems that rely on external storage solutions,
                Verus makes data storage a core protocol feature.
              </p>
              <p className="text-[15px] leading-relaxed tracking-tight text-gray-600 dark:text-gray-300 md:text-[16px]">
                Store up to 999,999 bytes per entry with encryption and
                indexing. Data can be stored publicly, privately through
                zk-SNARKs transactions, or attached to VerusIDs for fine-grained
                access control.
              </p>
            </div>

            <div className="mt-12 space-y-8">
              {/* Storage Capabilities */}
              <div>
                <div className="mb-6 flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-blue-100/80 bg-white/90 text-blue-600 shadow-sm dark:border-blue-900/30 dark:bg-gray-800/90 dark:text-blue-400">
                    <Database className="h-6 w-6" />
                  </div>
                  <h3 className="text-[20px] font-medium text-gray-900 dark:text-white md:text-[24px]">
                    Developer API Features
                  </h3>
                </div>
                <div className="rounded-lg border border-blue-100/60 bg-white/80 p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md dark:border-blue-900/20 dark:bg-gray-800/50">
                  <ul className="space-y-3">
                    <li className="relative pl-6 text-[15px] leading-relaxed text-gray-600 dark:text-gray-300 md:text-[16px]">
                      <div className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-blue-500/60 dark:bg-blue-400/60"></div>
                      Store up to 999,999 bytes per entry
                    </li>
                    <li className="relative pl-6 text-[15px] leading-relaxed text-gray-600 dark:text-gray-300 md:text-[16px]">
                      <div className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-blue-500/60 dark:bg-blue-400/60"></div>
                      Automatic indexing for fast retrieval
                    </li>
                    <li className="relative pl-6 text-[15px] leading-relaxed text-gray-600 dark:text-gray-300 md:text-[16px]">
                      <div className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-blue-500/60 dark:bg-blue-400/60"></div>
                      Support for structured and unstructured data
                    </li>
                    <li className="relative pl-6 text-[15px] leading-relaxed text-gray-600 dark:text-gray-300 md:text-[16px]">
                      <div className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-blue-500/60 dark:bg-blue-400/60"></div>
                      Cross-chain data references and queries
                    </li>
                  </ul>
                </div>
              </div>

              {/* Privacy Options */}
              <div>
                <div className="mb-6 flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-blue-100/80 bg-white/90 text-blue-600 shadow-sm dark:border-blue-900/30 dark:bg-gray-800/90 dark:text-blue-400">
                    <Lock className="h-6 w-6" />
                  </div>
                  <h3 className="text-[20px] font-medium text-gray-900 dark:text-white md:text-[24px]">
                    Privacy & Security
                  </h3>
                </div>
                <div className="rounded-lg border border-blue-100/60 bg-white/80 p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md dark:border-blue-900/20 dark:bg-gray-800/50">
                  <ul className="space-y-3">
                    <li className="relative pl-6 text-[15px] leading-relaxed text-gray-600 dark:text-gray-300 md:text-[16px]">
                      <div className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-blue-500/60 dark:bg-blue-400/60"></div>
                      Default encryption for all stored data
                    </li>
                    <li className="relative pl-6 text-[15px] leading-relaxed text-gray-600 dark:text-gray-300 md:text-[16px]">
                      <div className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-blue-500/60 dark:bg-blue-400/60"></div>
                      Private storage through zk-SNARKs transactions
                    </li>
                    <li className="relative pl-6 text-[15px] leading-relaxed text-gray-600 dark:text-gray-300 md:text-[16px]">
                      <div className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-blue-500/60 dark:bg-blue-400/60"></div>
                      VerusID-based access control
                    </li>
                    <li className="relative pl-6 text-[15px] leading-relaxed text-gray-600 dark:text-gray-300 md:text-[16px]">
                      <div className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-blue-500/60 dark:bg-blue-400/60"></div>
                      Selective data sharing capabilities
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="w-full border-gray-200 dark:border-gray-700 md:w-1/2 md:border-l md:pl-16">
            <div className="space-y-8">
              {/* Storage Costs */}
              <div>
                <div className="mb-6 flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-blue-100/80 bg-white/90 text-blue-600 shadow-sm dark:border-blue-900/30 dark:bg-gray-800/90 dark:text-blue-400">
                    <Scale className="h-6 w-6" />
                  </div>
                  <h3 className="text-[20px] font-medium text-gray-900 dark:text-white md:text-[24px]">
                    Cost Structure for Developers
                  </h3>
                </div>
                <div className="space-y-6">
                  <div className="rounded-lg border border-blue-100/60 bg-white/80 p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md dark:border-blue-900/20 dark:bg-gray-800/50">
                    <h4 className="mb-4 text-[16px] font-medium text-gray-900 dark:text-white md:text-[18px]">
                      Verus Storage
                    </h4>
                    <p className="text-[15px] leading-relaxed text-gray-600 dark:text-gray-300 md:text-[16px]">
                      On the Verus blockchain, storage costs approximately 0.01
                      VRSC per kilobyte. Fees are paid in VRSC and flow directly
                      to miners and stakers who secure the network.
                    </p>
                  </div>

                  <div className="rounded-lg border border-blue-100/60 bg-white/80 p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md dark:border-blue-900/20 dark:bg-gray-800/50">
                    <h4 className="mb-4 text-[16px] font-medium text-gray-900 dark:text-white md:text-[18px]">
                      PBaaS Chain Storage
                    </h4>
                    <p className="text-[15px] leading-relaxed text-gray-600 dark:text-gray-300 md:text-[16px]">
                      Each PBaaS chain can set its own storage fees based on
                      capacity and validator costs. This creates a competitive
                      marketplace for blockchain storage with different chains
                      optimizing for different use cases.
                    </p>
                  </div>

                  <div className="rounded-lg border border-blue-100/60 bg-white/80 p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md dark:border-blue-900/20 dark:bg-gray-800/50">
                    <h4 className="mb-4 text-[16px] font-medium text-gray-900 dark:text-white md:text-[18px]">
                      Cost Optimization
                    </h4>
                    <p className="text-[15px] leading-relaxed text-gray-600 dark:text-gray-300 md:text-[16px]">
                      Applications can optimize storage costs by choosing chains
                      with appropriate fee structures and using cross-chain
                      references to distribute data efficiently across the
                      network.
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
