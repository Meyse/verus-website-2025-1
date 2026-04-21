/*
 * Updated:
 * - Transformed to match PBaaS content styling with modern gradient backgrounds
 * - Created more developer-focused title
 * - Added radial gradients and improved background elements
 * - Enhanced card designs with hover effects
 * - Improved spacing and layout for better readability
 */
export function ComparisonSection() {
  return (
    <section className="relative mb-24 md:mb-32">
      {/* Background decorative elements */}
      <div className="absolute left-10 top-0 -z-10 h-80 w-80 rounded-full bg-blue-500/5 blur-[120px] dark:bg-blue-500/10"></div>
      <div className="absolute bottom-20 right-10 -z-10 h-60 w-60 rounded-full bg-blue-500/5 blur-[100px] dark:bg-blue-500/10"></div>

      {/* Developer-focused Title */}
      <div className="mb-12 flex flex-col items-center justify-center md:mb-16">
        <h2 className="mx-auto mb-4 max-w-[1000px] text-center text-[28px] font-medium leading-[1.2] tracking-tight text-gray-800 dark:text-white md:mb-6 md:text-[55px]">
          Choose the Right Storage for Your dApp
        </h2>
        <p className="mx-auto max-w-3xl text-center text-[16px] text-gray-600 dark:text-gray-300 md:text-[20px]">
          Compare on-chain storage with alternatives to make informed
          architectural decisions for your applications.
        </p>
      </div>

      <div className="relative w-full overflow-hidden rounded-2xl border border-blue-100/80 bg-gradient-to-br from-blue-50/90 to-white p-6 shadow-[0_4px_40px_-12px_rgba(0,0,0,0.1)] backdrop-blur-sm dark:border-blue-900/30 dark:from-blue-950/40 dark:to-gray-950 dark:shadow-[0_4px_40px_-12px_rgba(0,0,0,0.3)] md:p-8">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.08),transparent_50%)] dark:bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.15),transparent_50%)]"></div>
        <div className="absolute -bottom-8 -right-8 h-40 w-40 rounded-full bg-blue-400/10 blur-xl dark:bg-blue-400/20"></div>

        <div className="relative">
          {/* Scrollable wrapper */}
          <div className="-mx-6 overflow-x-auto px-6 md:mx-0 md:px-0">
            {/* Comparison Table */}
            <div className="min-w-[900px] overflow-hidden rounded-lg border border-blue-100/60 bg-white/90 dark:border-blue-900/20 dark:bg-gray-900/60 md:w-full">
              {/* Table Header */}
              <div className="grid grid-cols-[1fr,1fr,1fr,1fr] bg-blue-50/80 dark:bg-blue-950/50">
                <div className="p-6 text-[16px] font-medium text-gray-800 dark:text-white md:p-8 md:text-[18px]">
                  Feature
                </div>
                <div className="border-l border-blue-100/60 p-6 text-[16px] font-medium text-gray-800 dark:border-blue-900/20 dark:text-white md:p-8 md:text-[18px]">
                  Verus On-Chain Storage
                </div>
                <div className="border-l border-blue-100/60 p-6 text-[16px] font-medium text-gray-800 dark:border-blue-900/20 dark:text-white md:p-8 md:text-[18px]">
                  IPFS
                </div>
                <div className="border-l border-blue-100/60 p-6 text-[16px] font-medium text-gray-800 dark:border-blue-900/20 dark:text-white md:p-8 md:text-[18px]">
                  Centralized Servers
                </div>
              </div>

              {/* Data Ownership */}
              <div className="grid grid-cols-[1fr,1fr,1fr,1fr] border-t border-blue-100/60 dark:border-blue-900/20">
                <div className="p-6 font-medium text-gray-800 dark:text-white md:p-8">
                  Data Ownership
                </div>
                <div className="border-l border-blue-100/60 p-6 text-[14px] text-gray-600 dark:border-blue-900/20 dark:text-gray-300 md:p-8 md:text-[15px]">
                  🟢 True user ownership through VerusID - users maintain
                  complete control of their data
                </div>
                <div className="border-l border-blue-100/60 p-6 text-[14px] text-gray-600 dark:border-blue-900/20 dark:text-gray-300 md:p-8 md:text-[15px]">
                  🟡 Content-addressed but requires pinning services for
                  persistence
                </div>
                <div className="border-l border-blue-100/60 p-6 text-[14px] text-gray-600 dark:border-blue-900/20 dark:text-gray-300 md:p-8 md:text-[15px]">
                  🔴 Provider owns and controls data
                </div>
              </div>

              {/* Persistence */}
              <div className="grid grid-cols-[1fr,1fr,1fr,1fr] border-t border-blue-100/60 bg-blue-50/50 dark:border-blue-900/20 dark:bg-blue-950/30">
                <div className="p-6 font-medium text-gray-800 dark:text-white md:p-8">
                  Persistence
                </div>
                <div className="border-l border-blue-100/60 p-6 text-[14px] text-gray-600 dark:border-blue-900/20 dark:text-gray-300 md:p-8 md:text-[15px]">
                  🟢 Permanent by default - one-time storage fee
                </div>
                <div className="border-l border-blue-100/60 p-6 text-[14px] text-gray-600 dark:border-blue-900/20 dark:text-gray-300 md:p-8 md:text-[15px]">
                  🟡 Requires pinning services or must be actively hosted
                </div>
                <div className="border-l border-blue-100/60 p-6 text-[14px] text-gray-600 dark:border-blue-900/20 dark:text-gray-300 md:p-8 md:text-[15px]">
                  🟡 Depends on subscription/payment
                </div>
              </div>

              {/* Privacy */}
              <div className="grid grid-cols-[1fr,1fr,1fr,1fr] border-t border-blue-100/60 dark:border-blue-900/20">
                <div className="p-6 font-medium text-gray-800 dark:text-white md:p-8">
                  Privacy
                </div>
                <div className="border-l border-blue-100/60 p-6 text-[14px] text-gray-600 dark:border-blue-900/20 dark:text-gray-300 md:p-8 md:text-[15px]">
                  🟢 Protocol-level privacy with zk-SNARKs, encrypted storage,
                  and selective disclosure
                </div>
                <div className="border-l border-blue-100/60 p-6 text-[14px] text-gray-600 dark:border-blue-900/20 dark:text-gray-300 md:p-8 md:text-[15px]">
                  🟡 Public by default, encryption possible but not native
                </div>
                <div className="border-l border-blue-100/60 p-6 text-[14px] text-gray-600 dark:border-blue-900/20 dark:text-gray-300 md:p-8 md:text-[15px]">
                  🟡 Provider-dependent privacy policies
                </div>
              </div>

              {/* Query Capabilities */}
              <div className="grid grid-cols-[1fr,1fr,1fr,1fr] border-t border-blue-100/60 bg-blue-50/50 dark:border-blue-900/20 dark:bg-blue-950/30">
                <div className="p-6 font-medium text-gray-800 dark:text-white md:p-8">
                  Query Capabilities
                </div>
                <div className="border-l border-blue-100/60 p-6 text-[14px] text-gray-600 dark:border-blue-900/20 dark:text-gray-300 md:p-8 md:text-[15px]">
                  🟢 Direct key lookup via VDXF, multimap support, versioning
                  built-in
                </div>
                <div className="border-l border-blue-100/60 p-6 text-[14px] text-gray-600 dark:border-blue-900/20 dark:text-gray-300 md:p-8 md:text-[15px]">
                  🔴 Limited without additional indexing services
                </div>
                <div className="border-l border-blue-100/60 p-6 text-[14px] text-gray-600 dark:border-blue-900/20 dark:text-gray-300 md:p-8 md:text-[15px]">
                  🟢 Full database query capabilities
                </div>
              </div>

              {/* Cost Structure */}
              <div className="grid grid-cols-[1fr,1fr,1fr,1fr] border-t border-blue-100/60 dark:border-blue-900/20">
                <div className="p-6 font-medium text-gray-800 dark:text-white md:p-8">
                  Cost Structure
                </div>
                <div className="border-l border-blue-100/60 p-6 text-[14px] text-gray-600 dark:border-blue-900/20 dark:text-gray-300 md:p-8 md:text-[15px]">
                  🟢 One-time fee for permanent storage (e.g., ~0.01 native coin
                  per KB on the Verus blockchain, is chain dependent)
                </div>
                <div className="border-l border-blue-100/60 p-6 text-[14px] text-gray-600 dark:border-blue-900/20 dark:text-gray-300 md:p-8 md:text-[15px]">
                  🟡 Free to use but requires pinning costs
                </div>
                <div className="border-l border-blue-100/60 p-6 text-[14px] text-gray-600 dark:border-blue-900/20 dark:text-gray-300 md:p-8 md:text-[15px]">
                  🔴 Ongoing subscription costs
                </div>
              </div>

              {/* Identity Integration */}
              <div className="grid grid-cols-[1fr,1fr,1fr,1fr] border-t border-blue-100/60 bg-blue-50/50 dark:border-blue-900/20 dark:bg-blue-950/30">
                <div className="p-6 font-medium text-gray-800 dark:text-white md:p-8">
                  Identity Integration
                </div>
                <div className="border-l border-blue-100/60 p-6 text-[14px] text-gray-600 dark:border-blue-900/20 dark:text-gray-300 md:p-8 md:text-[15px]">
                  🟢 Native self-sovereign identity system (VerusID)
                </div>
                <div className="border-l border-blue-100/60 p-6 text-[14px] text-gray-600 dark:border-blue-900/20 dark:text-gray-300 md:p-8 md:text-[15px]">
                  🔴 No native identity system
                </div>
                <div className="border-l border-blue-100/60 p-6 text-[14px] text-gray-600 dark:border-blue-900/20 dark:text-gray-300 md:p-8 md:text-[15px]">
                  🟡 Account-based identity
                </div>
              </div>

              {/* Data Validation */}
              <div className="grid grid-cols-[1fr,1fr,1fr,1fr] border-t border-blue-100/60 dark:border-blue-900/20">
                <div className="p-6 font-medium text-gray-800 dark:text-white md:p-8">
                  Data Validation
                </div>
                <div className="border-l border-blue-100/60 p-6 text-[14px] text-gray-600 dark:border-blue-900/20 dark:text-gray-300 md:p-8 md:text-[15px]">
                  🟢 Protocol-level validation of data types and structures
                </div>
                <div className="border-l border-blue-100/60 p-6 text-[14px] text-gray-600 dark:border-blue-900/20 dark:text-gray-300 md:p-8 md:text-[15px]">
                  🔴 No built-in validation
                </div>
                <div className="border-l border-blue-100/60 p-6 text-[14px] text-gray-600 dark:border-blue-900/20 dark:text-gray-300 md:p-8 md:text-[15px]">
                  🟢 Server-side validation
                </div>
              </div>

              {/* Access Control */}
              <div className="grid grid-cols-[1fr,1fr,1fr,1fr] border-t border-blue-100/60 bg-blue-50/50 dark:border-blue-900/20 dark:bg-blue-950/30">
                <div className="p-6 font-medium text-gray-800 dark:text-white md:p-8">
                  Access Control
                </div>
                <div className="border-l border-blue-100/60 p-6 text-[14px] text-gray-600 dark:border-blue-900/20 dark:text-gray-300 md:p-8 md:text-[15px]">
                  🟢 Built-in through VerusID permissions and encryption
                </div>
                <div className="border-l border-blue-100/60 p-6 text-[14px] text-gray-600 dark:border-blue-900/20 dark:text-gray-300 md:p-8 md:text-[15px]">
                  🔴 Limited without additional layers
                </div>
                <div className="border-l border-blue-100/60 p-6 text-[14px] text-gray-600 dark:border-blue-900/20 dark:text-gray-300 md:p-8 md:text-[15px]">
                  🟢 Granular access control
                </div>
              </div>

              {/* Scalability */}
              <div className="grid grid-cols-[1fr,1fr,1fr,1fr] border-t border-blue-100/60 dark:border-blue-900/20">
                <div className="p-6 font-medium text-gray-800 dark:text-white md:p-8">
                  Scalability
                </div>
                <div className="border-l border-blue-100/60 p-6 text-[14px] text-gray-600 dark:border-blue-900/20 dark:text-gray-300 md:p-8 md:text-[15px]">
                  🟢 Horizontal scaling through PBaaS chains
                </div>
                <div className="border-l border-blue-100/60 p-6 text-[14px] text-gray-600 dark:border-blue-900/20 dark:text-gray-300 md:p-8 md:text-[15px]">
                  🟢 Highly scalable P2P network
                </div>
                <div className="border-l border-blue-100/60 p-6 text-[14px] text-gray-600 dark:border-blue-900/20 dark:text-gray-300 md:p-8 md:text-[15px]">
                  🟢 Vertical and horizontal scaling
                </div>
              </div>

              {/* Availability */}
              <div className="grid grid-cols-[1fr,1fr,1fr,1fr] border-t border-blue-100/60 bg-blue-50/50 dark:border-blue-900/20 dark:bg-blue-950/30">
                <div className="p-6 font-medium text-gray-800 dark:text-white md:p-8">
                  Availability
                </div>
                <div className="border-l border-blue-100/60 p-6 text-[14px] text-gray-600 dark:border-blue-900/20 dark:text-gray-300 md:p-8 md:text-[15px]">
                  🟢 Blockchain-guaranteed availability
                </div>
                <div className="border-l border-blue-100/60 p-6 text-[14px] text-gray-600 dark:border-blue-900/20 dark:text-gray-300 md:p-8 md:text-[15px]">
                  🟡 Depends on network participation
                </div>
                <div className="border-l border-blue-100/60 p-6 text-[14px] text-gray-600 dark:border-blue-900/20 dark:text-gray-300 md:p-8 md:text-[15px]">
                  🟢 High availability (with cost)
                </div>
              </div>

              {/* Decentralization */}
              <div className="grid grid-cols-[1fr,1fr,1fr,1fr] border-t border-blue-100/60 dark:border-blue-900/20">
                <div className="p-6 font-medium text-gray-800 dark:text-white md:p-8">
                  Decentralization
                </div>
                <div className="border-l border-blue-100/60 p-6 text-[14px] text-gray-600 dark:border-blue-900/20 dark:text-gray-300 md:p-8 md:text-[15px]">
                  🟢 Fully decentralized, validated by consensus
                </div>
                <div className="border-l border-blue-100/60 p-6 text-[14px] text-gray-600 dark:border-blue-900/20 dark:text-gray-300 md:p-8 md:text-[15px]">
                  🟢 Fully decentralized
                </div>
                <div className="border-l border-blue-100/60 p-6 text-[14px] text-gray-600 dark:border-blue-900/20 dark:text-gray-300 md:p-8 md:text-[15px]">
                  🔴 Centralized
                </div>
              </div>

              {/* Data Recovery */}
              <div className="grid grid-cols-[1fr,1fr,1fr,1fr] border-t border-blue-100/60 bg-blue-50/50 dark:border-blue-900/20 dark:bg-blue-950/30">
                <div className="p-6 font-medium text-gray-800 dark:text-white md:p-8">
                  Data Recovery
                </div>
                <div className="border-l border-blue-100/60 p-6 text-[14px] text-gray-600 dark:border-blue-900/20 dark:text-gray-300 md:p-8 md:text-[15px]">
                  🟢 Built-in recovery mechanisms through VerusID
                </div>
                <div className="border-l border-blue-100/60 p-6 text-[14px] text-gray-600 dark:border-blue-900/20 dark:text-gray-300 md:p-8 md:text-[15px]">
                  🟡 Depends on content availability
                </div>
                <div className="border-l border-blue-100/60 p-6 text-[14px] text-gray-600 dark:border-blue-900/20 dark:text-gray-300 md:p-8 md:text-[15px]">
                  🟢 Provider backup systems
                </div>
              </div>

              {/* Development Complexity */}
              <div className="grid grid-cols-[1fr,1fr,1fr,1fr] border-t border-blue-100/60 dark:border-blue-900/20">
                <div className="p-6 font-medium text-gray-800 dark:text-white md:p-8">
                  Development Complexity
                </div>
                <div className="border-l border-blue-100/60 p-6 text-[14px] text-gray-600 dark:border-blue-900/20 dark:text-gray-300 md:p-8 md:text-[15px]">
                  🟢 Simple API commands, no special programming needed
                </div>
                <div className="border-l border-blue-100/60 p-6 text-[14px] text-gray-600 dark:border-blue-900/20 dark:text-gray-300 md:p-8 md:text-[15px]">
                  🟡 Moderate complexity
                </div>
                <div className="border-l border-blue-100/60 p-6 text-[14px] text-gray-600 dark:border-blue-900/20 dark:text-gray-300 md:p-8 md:text-[15px]">
                  🟢 Familiar development patterns
                </div>
              </div>

              {/* Cross-chain Support */}
              <div className="grid grid-cols-[1fr,1fr,1fr,1fr] border-t border-blue-100/60 bg-blue-50/50 dark:border-blue-900/20 dark:bg-blue-950/30">
                <div className="p-6 font-medium text-gray-800 dark:text-white md:p-8">
                  Cross-chain Support
                </div>
                <div className="border-l border-blue-100/60 p-6 text-[14px] text-gray-600 dark:border-blue-900/20 dark:text-gray-300 md:p-8 md:text-[15px]">
                  🟢 Native cross-chain data access
                </div>
                <div className="border-l border-blue-100/60 p-6 text-[14px] text-gray-600 dark:border-blue-900/20 dark:text-gray-300 md:p-8 md:text-[15px]">
                  🟡 Network agnostic but no native chain support
                </div>
                <div className="border-l border-blue-100/60 p-6 text-[14px] text-gray-600 dark:border-blue-900/20 dark:text-gray-300 md:p-8 md:text-[15px]">
                  🔴 No native blockchain support
                </div>
              </div>

              {/* Data Integrity */}
              <div className="grid grid-cols-[1fr,1fr,1fr,1fr] border-t border-blue-100/60 dark:border-blue-900/20">
                <div className="p-6 font-medium text-gray-800 dark:text-white md:p-8">
                  Data Integrity
                </div>
                <div className="border-l border-blue-100/60 p-6 text-[14px] text-gray-600 dark:border-blue-900/20 dark:text-gray-300 md:p-8 md:text-[15px]">
                  🟢 Cryptographically verified by consensus
                </div>
                <div className="border-l border-blue-100/60 p-6 text-[14px] text-gray-600 dark:border-blue-900/20 dark:text-gray-300 md:p-8 md:text-[15px]">
                  🟢 Content-addressed integrity
                </div>
                <div className="border-l border-blue-100/60 p-6 text-[14px] text-gray-600 dark:border-blue-900/20 dark:text-gray-300 md:p-8 md:text-[15px]">
                  🟡 Provider-dependent
                </div>
              </div>
            </div>
          </div>

          {/* Legend */}
          <div className="mt-8 flex flex-col justify-center gap-4 px-4 md:flex-row md:gap-8 md:px-0">
            <div className="flex items-center gap-2">
              <span>🟢</span>
              <span className="text-[14px] text-gray-600 dark:text-gray-300">
                Strong capability/advantage
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span>🟡</span>
              <span className="text-[14px] text-gray-600 dark:text-gray-300">
                Moderate capability/tradeoffs
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span>🔴</span>
              <span className="text-[14px] text-gray-600 dark:text-gray-300">
                Limited capability/disadvantage
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
