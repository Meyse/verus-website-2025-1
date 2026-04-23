import {
  Code2,
  Database,
  Key,
  Lock,
  Network,
  PackageOpen,
  Scale,
  Search,
  SplitSquareVertical,
} from 'lucide-react'

export function FeaturesGrid() {
  return (
    <div className="relative -mx-4 w-screen md:mx-0 md:max-w-[1220px]">
      {/* Background decorative elements */}
      <div className="absolute left-10 top-20 -z-10 h-60 w-60 rounded-full bg-blue-500/5 blur-[80px] dark:bg-blue-500/5"></div>
      <div className="absolute -top-10 right-20 -z-10 h-60 w-60 rounded-full bg-blue-500/5 blur-[80px] dark:bg-blue-500/5"></div>
      <div className="absolute bottom-10 right-10 -z-10 h-60 w-60 rounded-full bg-blue-500/5 blur-[80px] dark:bg-blue-500/5"></div>

      <div className="grid grid-cols-1 gap-2 md:grid-cols-3 md:gap-4">
        {/* Left Column - 3 Features */}
        <div className="col-span-1 flex flex-col gap-4">
          {/* Native Storage Layer */}
          <div className="group relative flex-1 overflow-hidden border border-blue-100/80 bg-white/70 p-6 backdrop-blur-sm transition-all duration-300 dark:border-blue-900/30 dark:bg-gray-900/50 md:rounded-[20px] md:p-8">
            <div className="absolute -bottom-8 -right-8 h-32 w-32 rounded-full bg-blue-400/5 blur-xl dark:bg-blue-400/10"></div>
            <div className="relative">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-lg border border-blue-100/80 bg-white/90 shadow-sm transition-colors duration-300 group-hover:bg-blue-50 dark:border-blue-900/30 dark:bg-gray-800/90 dark:group-hover:bg-gray-800">
                <Database className="h-7 w-7 text-verus-blue/80 dark:text-blue-400" />
              </div>
              <h3 className="mb-2 text-[16px] font-bold text-gray-900 dark:text-white md:text-[18px]">
                Native Storage Layer
              </h3>
              <p className="text-[14px] leading-relaxed text-gray-600 dark:text-gray-300 md:text-[15px]">
                Store data directly on-chain with efficient indexing and
                retrieval. Each PBaaS chain offers protocol-level storage
                capabilities with configurable costs. Perfect for permanent,
                verifiable record keeping.
              </p>
            </div>
          </div>

          {/* Default Encryption */}
          <div className="group relative flex-1 overflow-hidden border border-blue-100/80 bg-white/70 p-6 backdrop-blur-sm transition-all duration-300 dark:border-blue-900/30 dark:bg-gray-900/50 md:rounded-[20px] md:p-8">
            <div className="absolute left-6 top-6 h-32 w-32 rounded-full bg-blue-400/5 blur-xl dark:bg-blue-400/10"></div>
            <div className="relative">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-lg border border-blue-100/80 bg-white/90 shadow-sm transition-colors duration-300 group-hover:bg-blue-50 dark:border-blue-900/30 dark:bg-gray-800/90 dark:group-hover:bg-gray-800">
                <Lock className="h-7 w-7 text-verus-blue/80 dark:text-blue-400" />
              </div>
              <h3 className="mb-2 text-[16px] font-bold text-gray-900 dark:text-white md:text-[18px]">
                Privacy-First Storage
              </h3>
              <p className="text-[14px] leading-relaxed text-gray-600 dark:text-gray-300 md:text-[15px]">
                Store data publicly or privately with optional encryption.
                Leverage zk-SNARKs for private transactions and support for
                encrypted data storage. Control exactly what data is shared and
                with whom.
              </p>
            </div>
          </div>

          {/* Indexed Queries */}
          <div className="group relative flex-1 overflow-hidden border border-blue-100/80 bg-white/70 p-6 backdrop-blur-sm transition-all duration-300 dark:border-blue-900/30 dark:bg-gray-900/50 md:rounded-[20px] md:p-8">
            <div className="absolute -bottom-8 -left-8 h-32 w-32 rounded-full bg-blue-400/5 blur-xl dark:bg-blue-400/10"></div>
            <div className="relative">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-lg border border-blue-100/80 bg-white/90 shadow-sm transition-colors duration-300 group-hover:bg-blue-50 dark:border-blue-900/30 dark:bg-gray-800/90 dark:group-hover:bg-gray-800">
                <Search className="h-7 w-7 text-verus-blue/80 dark:text-blue-400" />
              </div>
              <h3 className="mb-2 text-[16px] font-bold text-gray-900 dark:text-white md:text-[18px]">
                Indexed Queries
              </h3>
              <p className="text-[14px] leading-relaxed text-gray-600 dark:text-gray-300 md:text-[15px]">
                Query data through globally unique VDXF keys. Fast lookup of
                structured and unstructured data across multiple chains.
                Efficient retrieval through standardized data identifiers.
              </p>
            </div>
          </div>
        </div>

        {/* Center Column - 3 Features */}
        <div className="col-span-1 flex flex-col gap-4">
          {/* Flexible Key System */}
          <div className="group relative flex-1 overflow-hidden border border-blue-100/80 bg-gradient-to-br from-blue-50/70 to-white p-6 backdrop-blur-sm transition-all duration-300 dark:border-blue-900/30 dark:from-blue-950/40 dark:to-gray-950 md:rounded-[20px] md:p-8">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.08),transparent_50%)] dark:bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.15),transparent_50%)]"></div>
            <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-blue-400/10 blur-2xl dark:bg-blue-400/20"></div>
            <div className="relative">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-lg border border-blue-100/80 bg-white/90 shadow-sm transition-colors duration-300 group-hover:bg-blue-50 dark:border-blue-900/30 dark:bg-gray-800/90 dark:group-hover:bg-gray-800">
                <Key className="h-7 w-7 text-verus-blue/80 dark:text-blue-400" />
              </div>
              <h3 className="mb-2 text-[16px] font-bold text-gray-900 dark:text-white md:text-[18px]">
                Flexible Key System
              </h3>
              <p className="text-[14px] leading-relaxed text-gray-600 dark:text-gray-300 md:text-[15px]">
                Define custom namespaces and data types through the VDXF key
                system. Organize data with unlimited nesting levels. Create
                application-specific data structures with clear ownership.
              </p>
            </div>
          </div>

          {/* Structured & Unstructured */}
          <div className="group relative flex-1 overflow-hidden border border-blue-100/80 bg-white/70 p-6 backdrop-blur-sm transition-all duration-300 dark:border-blue-900/30 dark:bg-gray-900/50 md:rounded-[20px] md:p-8">
            <div className="absolute right-6 top-6 h-32 w-32 rounded-full bg-blue-400/5 blur-xl dark:bg-blue-400/10"></div>
            <div className="relative">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-lg border border-blue-100/80 bg-white/90 shadow-sm transition-colors duration-300 group-hover:bg-blue-50 dark:border-blue-900/30 dark:bg-gray-800/90 dark:group-hover:bg-gray-800">
                <PackageOpen className="h-7 w-7 text-verus-blue/80 dark:text-blue-400" />
              </div>
              <h3 className="mb-2 text-[16px] font-bold text-gray-900 dark:text-white md:text-[18px]">
                Structured & Unstructured
              </h3>
              <p className="text-[14px] leading-relaxed text-gray-600 dark:text-gray-300 md:text-[15px]">
                Support for both structured data with defined schemas and
                unstructured data blobs. Store anything from simple key-value
                pairs to complex nested objects with multiple data types.
              </p>
            </div>
          </div>

          {/* Data Sharding */}
          <div className="group relative flex-1 overflow-hidden border border-blue-100/80 bg-white/70 p-6 backdrop-blur-sm transition-all duration-300 dark:border-blue-900/30 dark:bg-gray-900/50 md:rounded-[20px] md:p-8">
            <div className="absolute -bottom-8 -right-8 h-32 w-32 rounded-full bg-blue-400/5 blur-xl dark:bg-blue-400/10"></div>
            <div className="relative">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-lg border border-blue-100/80 bg-white/90 shadow-sm transition-colors duration-300 group-hover:bg-blue-50 dark:border-blue-900/30 dark:bg-gray-800/90 dark:group-hover:bg-gray-800">
                <SplitSquareVertical className="h-7 w-7 text-verus-blue/80 dark:text-blue-400" />
              </div>
              <h3 className="mb-2 text-[16px] font-bold text-gray-900 dark:text-white md:text-[18px]">
                Data Sharding
              </h3>
              <p className="text-[14px] leading-relaxed text-gray-600 dark:text-gray-300 md:text-[15px]">
                Distribute data across multiple PBaaS chains while maintaining
                atomic references. Scale storage horizontally while preserving
                data relationships and access patterns.
              </p>
            </div>
          </div>
        </div>

        {/* Right Column - 3 Features */}
        <div className="col-span-1 flex flex-col gap-4">
          {/* Cross-Chain Access */}
          <div className="group relative flex-1 overflow-hidden border border-blue-100/80 bg-white/70 p-6 backdrop-blur-sm transition-all duration-300 dark:border-blue-900/30 dark:bg-gray-900/50 md:rounded-[20px] md:p-8">
            <div className="absolute right-6 top-6 h-32 w-32 rounded-full bg-blue-400/5 blur-xl dark:bg-blue-400/10"></div>
            <div className="relative">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-lg border border-blue-100/80 bg-white/90 shadow-sm transition-colors duration-300 group-hover:bg-blue-50 dark:border-blue-900/30 dark:bg-gray-800/90 dark:group-hover:bg-gray-800">
                <Network className="h-7 w-7 text-verus-blue/80 dark:text-blue-400" />
              </div>
              <h3 className="mb-2 text-[16px] font-bold text-gray-900 dark:text-white md:text-[18px]">
                Cross-Chain Access
              </h3>
              <p className="text-[14px] leading-relaxed text-gray-600 dark:text-gray-300 md:text-[15px]">
                Access and reference data across any PBaaS chain in the network.
                Unified data model enables seamless integration between
                different chains and applications.
              </p>
            </div>
          </div>

          {/* Smart Transactions */}
          <div className="group relative flex-1 overflow-hidden border border-blue-100/80 bg-gradient-to-br from-blue-50/70 to-white p-6 backdrop-blur-sm transition-all duration-300 dark:border-blue-900/30 dark:from-blue-950/40 dark:to-gray-950 md:rounded-[20px] md:p-8">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.08),transparent_50%)] dark:bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.15),transparent_50%)]"></div>
            <div className="absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-blue-400/10 blur-2xl dark:bg-blue-400/20"></div>
            <div className="relative">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-lg border border-blue-100/80 bg-white/90 shadow-sm transition-colors duration-300 group-hover:bg-blue-50 dark:border-blue-900/30 dark:bg-gray-800/90 dark:group-hover:bg-gray-800">
                <Code2 className="h-7 w-7 text-verus-blue/80 dark:text-blue-400" />
              </div>
              <h3 className="mb-2 text-[16px] font-bold text-gray-900 dark:text-white md:text-[18px]">
                Smart Transactions
              </h3>
              <p className="text-[14px] leading-relaxed text-gray-600 dark:text-gray-300 md:text-[15px]">
                Interact with stored data through protocol-level smart
                transactions. No complex smart contracts needed - just simple
                commands to store, update and retrieve data.
              </p>
            </div>
          </div>

          {/* Usage-Based Pricing */}
          <div className="group relative flex-1 overflow-hidden border border-blue-100/80 bg-white/70 p-6 backdrop-blur-sm transition-all duration-300 dark:border-blue-900/30 dark:bg-gray-900/50 md:rounded-[20px] md:p-8">
            <div className="absolute -bottom-8 -left-8 h-32 w-32 rounded-full bg-blue-400/5 blur-xl dark:bg-blue-400/10"></div>
            <div className="relative">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-lg border border-blue-100/80 bg-white/90 shadow-sm transition-colors duration-300 group-hover:bg-blue-50 dark:border-blue-900/30 dark:bg-gray-800/90 dark:group-hover:bg-gray-800">
                <Scale className="h-7 w-7 text-verus-blue/80 dark:text-blue-400" />
              </div>
              <h3 className="mb-2 text-[16px] font-bold text-gray-900 dark:text-white md:text-[18px]">
                Usage-Based Pricing
              </h3>
              <p className="text-[14px] leading-relaxed text-gray-600 dark:text-gray-300 md:text-[15px]">
                Pay only for the storage you use with transparent, predictable
                pricing. Storage costs are determined by data size and
                complexity. Fees flow directly to chain validators.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
