export function FeaturesGrid() {
  return (
    <div className="-mx-4 md:mx-0 w-screen md:max-w-[1220px]">
      <div className="md:rounded-lg bg-white/40 dark:bg-gray-900/40 border border-white/50 dark:border-gray-800/50 mb-2 md:mb-4 shadow-[0_4px_40px_-12px_rgba(0,0,0,0.1)] dark:shadow-[0_4px_40px_-12px_rgba(0,0,0,0.3)] backdrop-blur-sm">
        <div className="flex flex-col py-8 md:py-12">
          {/* First Row - 2 Features */}
          <div className="grid grid-cols-1 md:grid-cols-2 md:divide-x divide-gray-200/70 dark:divide-gray-700/30 px-6 md:px-12">
            {/* Low-cost, rapid & easy deployment */}
            <div className="flex flex-col p-6 md:p-8 md:pr-12">
              <div className="flex items-center gap-4 mb-4">
                <img 
                  src="/img/build/rapid.svg"
                  alt="Rapid Development"
                  className="h-10 w-10 flex-shrink-0 dark:invert dark:opacity-80"
                />
                <h3 className="text-[16px] md:text-[20px] font-medium text-gray-900 dark:text-white">
                  Simplified Development Path
                </h3>
              </div>
              <p className="text-[14px] md:text-[15px] text-gray-700 dark:text-gray-300 leading-relaxed">
              Reduce blockchain development costs and complexity with API-based integration instead of specialized languages. Eliminate the need for specialized blockchain developers while maintaining full protocol capabilities.
              </p>
            </div>

            {/* Layer-1 security */}
            <div className="flex flex-col p-6 md:p-8 md:pl-12">
              <div className="flex items-center gap-4 mb-4">
                <img 
                  src="/img/build/security.svg"
                  alt="Security"
                  className="h-10 w-10 flex-shrink-0 dark:invert dark:opacity-80"
                />
                <h3 className="text-[16px] md:text-[20px] font-medium text-gray-900 dark:text-white">
                  Security Without the Audits
                </h3>
              </div>
              <p className="text-[14px] md:text-[15px] text-gray-700 dark:text-gray-300 leading-relaxed">
              Stop paying for expensive smart contract audits and still sleep at night. Verus layer-1 protocol security means your app's core functions are validated by the entire network, not just your code.
              </p>
            </div>
          </div>

          {/* Horizontal divider */}
          <div className="w-full px-6 md:px-12 py-4 md:py-6">
            <div className="h-px w-full bg-gray-200/70 dark:bg-gray-700/30"></div>
          </div>

          {/* Second Row - 2 Features */}
          <div className="grid grid-cols-1 md:grid-cols-2 md:divide-x divide-gray-200/70 dark:divide-gray-700/30 px-6 md:px-12">
            {/* Publish & store data on-chain */}
            <div className="flex flex-col p-6 md:p-8 md:pr-12">
              <div className="flex items-center gap-4 mb-4">
                <img 
                  src="/img/build/data.svg"
                  alt="Data Storage"
                  className="h-10 w-10 flex-shrink-0 dark:invert dark:opacity-80"
                />
                <h3 className="text-[16px] md:text-[20px] font-medium text-gray-900 dark:text-white">
                  Structured On-Chain Data Storage
                </h3>
              </div>
              <p className="text-[14px] md:text-[15px] text-gray-700 dark:text-gray-300 leading-relaxed">
              Store application data directly on the blockchain with an organized structure and encryption options. Create nested data relationships with a controlled public storage system that users own.
              </p>
            </div>

            {/* Scale for world demand */}
            <div className="flex flex-col p-6 md:p-8 md:pl-12">
              <div className="flex items-center gap-4 mb-4">
                <img 
                  src="/img/hero/scale.svg"
                  alt="Scale for world demand"
                  className="h-10 w-10 flex-shrink-0 dark:invert dark:opacity-80"
                />
                <h3 className="text-[16px] md:text-[20px] font-medium text-gray-900 dark:text-white">
                  Horizontal Blockchain Scaling
                </h3>
              </div>
              <p className="text-[14px] md:text-[15px] text-gray-700 dark:text-gray-300 leading-relaxed">
              Add blockchain capacity by launching additional interoperable chains when needed. Maintain consistent performance regardless of network usage by distributing load across multiple chains.
              </p>
            </div>
          </div>

          {/* Horizontal divider */}
          <div className="w-full px-6 md:px-12 py-4 md:py-6">
            <div className="h-px w-full bg-gray-200/70 dark:bg-gray-700/30"></div>
          </div>

          {/* Third Row - 2 Features */}
          <div className="grid grid-cols-1 md:grid-cols-2 md:divide-x divide-gray-200/70 dark:divide-gray-700/30 px-6 md:px-12">
            {/* Full access with API calls */}
            <div className="flex flex-col p-6 md:p-8 md:pr-12">
              <div className="flex items-center gap-4 mb-4">
                <img 
                  src="/img/build/access.svg"
                  alt="API Access"
                  className="h-10 w-10 flex-shrink-0 dark:invert dark:opacity-80"
                />
                <h3 className="text-[16px] md:text-[20px] font-medium text-gray-900 dark:text-white">
                  Standard API Integration
                </h3>
              </div>
              <p className="text-[14px] md:text-[15px] text-gray-700 dark:text-gray-300 leading-relaxed">
              Access blockchain functionality through familiar API calls rather than specialized languages. Interact with the blockchain using the same methods you use for other web services.
              </p>
            </div>

            {/* Build in any framework */}
            <div className="flex flex-col p-6 md:p-8 md:pl-12">
              <div className="flex items-center gap-4 mb-4">
                <img 
                  src="/img/build/build.svg"
                  alt="Build Framework"
                  className="h-10 w-10 flex-shrink-0 dark:invert dark:opacity-80"
                />
                <h3 className="text-[16px] md:text-[20px] font-medium text-gray-900 dark:text-white">
                  Technology Stack Freedom
                </h3>
              </div>
              <p className="text-[14px] md:text-[15px] text-gray-700 dark:text-gray-300 leading-relaxed">
              Implement blockchain features with whatever frontend and backend technologies suit your project. Avoid being locked into blockchain-specific frameworks or technologies
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}