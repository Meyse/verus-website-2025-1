import {
  ArrowLeftRight,
  Code2,
  Coins,
  FileCode,
  Layers,
  Store,
} from 'lucide-react'

/*
 * Updated:
 * - Integrated marketplace-section and technical-section into a single component
 * - Eliminated redundant information while preserving all valuable content
 * - Reorganized content for a more logical information flow
 * - Added dark mode support with appropriate colors and contrasts
 * - Enhanced with modern SaaS-style design elements
 * - Created comprehensive titles with gradient text
 * - Improved visual hierarchy and information organization
 */

export function TechnicalSection() {
  return (
    <section className="relative mb-16 mt-8 md:mb-24 md:mt-16">
      <div className="absolute left-10 top-40 h-64 w-64 rounded-full bg-blue-400/5 blur-3xl dark:bg-blue-400/10"></div>
      <div className="absolute bottom-20 right-10 h-64 w-64 rounded-full bg-blue-400/5 blur-3xl dark:bg-blue-400/10"></div>

      <div className="relative">
        <div className="mb-16 flex flex-col items-center justify-center">
          <h2 className="mx-auto mb-4 max-w-[1000px] text-center text-[28px] font-medium leading-[1.2] tracking-tight text-gray-800 dark:text-white md:mb-8 md:text-[55px]">
            Build Decentralized Trading Applications Without Complex Contracts
          </h2>
          <p className="mx-auto max-w-3xl text-center text-[16px] text-gray-600 dark:text-gray-300 md:text-[20px]">
            The Verus P2P Marketplace protocol provides a complete foundation
            for developers to build next-generation trading applications with
            simple API commands, no smart contract programming required.
          </p>
        </div>

        {/* 2x2 Grid Layout */}
        <div className="mb-16 grid grid-cols-1 gap-8 md:grid-cols-2">
          {/* Technical Advantages */}
          <div className="relative overflow-hidden rounded-xl border border-blue-100/80 bg-white/80 backdrop-blur-sm dark:border-blue-900/30 dark:bg-gray-800/50">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.08),transparent_50%)] dark:bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.15),transparent_50%)]"></div>
            <div className="absolute -bottom-8 -right-8 h-32 w-32 rounded-full bg-blue-400/10 blur-xl dark:bg-blue-400/20"></div>

            <div className="relative p-6">
              <div className="mb-6 flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-blue-100/80 bg-white/90 text-blue-600 shadow-sm dark:border-blue-900/30 dark:bg-gray-800/90 dark:text-blue-400">
                  <Store className="h-6 w-6" />
                </div>
                <h3 className="text-[20px] font-medium text-gray-900 dark:text-white md:text-[24px]">
                  Technical Advantages
                </h3>
              </div>

              <p className="mb-4 text-[15px] leading-relaxed text-gray-700 dark:text-gray-300 md:text-[16px]">
                Instead of complex smart contracts, leverage protocol-level
                marketplace functionality for greater security and simplicity.
              </p>

              <ul className="space-y-4">
                <li className="relative pl-6 text-[15px] leading-relaxed text-gray-600 dark:text-gray-300 md:text-[16px]">
                  <div className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-blue-500/60 dark:bg-blue-400/60"></div>
                  Reduced complexity – No need to write and audit complex escrow
                  smart contracts
                </li>
                <li className="relative pl-6 text-[15px] leading-relaxed text-gray-600 dark:text-gray-300 md:text-[16px]">
                  <div className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-blue-500/60 dark:bg-blue-400/60"></div>
                  Lower transaction costs – Direct protocol implementation means
                  minimal fees
                </li>
                <li className="relative pl-6 text-[15px] leading-relaxed text-gray-600 dark:text-gray-300 md:text-[16px]">
                  <div className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-blue-500/60 dark:bg-blue-400/60"></div>
                  Superior security – Protocol-level validation eliminates
                  vulnerabilities
                </li>
                <li className="relative pl-6 text-[15px] leading-relaxed text-gray-600 dark:text-gray-300 md:text-[16px]">
                  <div className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-blue-500/60 dark:bg-blue-400/60"></div>
                  Guaranteed execution – Atomic settlement ensures transaction
                  finality
                </li>
              </ul>
            </div>
          </div>

          {/* Key RPC Commands */}
          <div className="relative overflow-hidden rounded-xl border border-blue-100/80 bg-gradient-to-br from-blue-50/90 to-white backdrop-blur-sm dark:border-blue-900/30 dark:from-blue-950/40 dark:to-gray-950">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.08),transparent_50%)] dark:bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.15),transparent_50%)]"></div>
            <div className="absolute -left-8 -top-8 h-32 w-32 rounded-full bg-blue-400/10 blur-xl dark:bg-blue-400/20"></div>

            <div className="relative p-6">
              <div className="mb-6 flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-blue-100/80 bg-white/90 text-blue-600 shadow-sm dark:border-blue-900/30 dark:bg-gray-800/90 dark:text-blue-400">
                  <Code2 className="h-6 w-6" />
                </div>
                <h3 className="text-[20px] font-medium text-gray-900 dark:text-white md:text-[24px]">
                  Simple API Commands
                </h3>
              </div>

              <p className="mb-4 text-[15px] leading-relaxed text-gray-700 dark:text-gray-300 md:text-[16px]">
                Every aspect of marketplace functionality is handled at the
                protocol level, from order matching to settlement.
              </p>

              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div>
                  <ul className="space-y-3">
                    <li className="relative pl-6 text-[15px] leading-relaxed text-gray-600 dark:text-gray-300 md:text-[16px]">
                      <div className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-blue-500/60 dark:bg-blue-400/60"></div>
                      <span className="font-medium">makeoffer</span> - Creates
                      trading offers
                    </li>
                    <li className="relative pl-6 text-[15px] leading-relaxed text-gray-600 dark:text-gray-300 md:text-[16px]">
                      <div className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-blue-500/60 dark:bg-blue-400/60"></div>
                      <span className="font-medium">takeoffer</span> - Accepts
                      existing offers
                    </li>
                    <li className="relative pl-6 text-[15px] leading-relaxed text-gray-600 dark:text-gray-300 md:text-[16px]">
                      <div className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-blue-500/60 dark:bg-blue-400/60"></div>
                      <span className="font-medium">listopenoffers</span> -
                      Outstanding offers in a wallet
                    </li>
                  </ul>
                </div>
                <div>
                  <ul className="space-y-3">
                    <li className="relative pl-6 text-[15px] leading-relaxed text-gray-600 dark:text-gray-300 md:text-[16px]">
                      <div className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-blue-500/60 dark:bg-blue-400/60"></div>
                      <span className="font-medium">getoffers</span> - Queries
                      available offers
                    </li>
                    <li className="relative pl-6 text-[15px] leading-relaxed text-gray-600 dark:text-gray-300 md:text-[16px]">
                      <div className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-blue-500/60 dark:bg-blue-400/60"></div>
                      <span className="font-medium">closeoffers</span> - Cancels
                      active offers
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Core Capabilities */}
          <div className="relative overflow-hidden rounded-xl border border-blue-100/80 bg-gradient-to-br from-blue-50/90 to-white backdrop-blur-sm dark:border-blue-900/30 dark:from-blue-950/40 dark:to-gray-950">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.08),transparent_50%)] dark:bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.15),transparent_50%)]"></div>
            <div className="absolute -bottom-8 -left-8 h-32 w-32 rounded-full bg-blue-400/10 blur-xl dark:bg-blue-400/20"></div>

            <div className="relative p-6">
              <div className="mb-6 flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-blue-100/80 bg-white/90 text-blue-600 shadow-sm dark:border-blue-900/30 dark:bg-gray-800/90 dark:text-blue-400">
                  <ArrowLeftRight className="h-6 w-6" />
                </div>
                <h3 className="text-[20px] font-medium text-gray-900 dark:text-white md:text-[24px]">
                  Core Capabilities
                </h3>
              </div>

              <p className="mb-4 text-[15px] leading-relaxed text-gray-700 dark:text-gray-300 md:text-[16px]">
                The protocol provides a comprehensive suite of trading
                capabilities that work across the Verus ecosystem.
              </p>

              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div>
                  <ul className="space-y-3">
                    <li className="relative pl-6 text-[15px] leading-relaxed text-gray-600 dark:text-gray-300 md:text-[16px]">
                      <div className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-blue-500/60 dark:bg-blue-400/60"></div>
                      Complete offer management system
                    </li>
                    <li className="relative pl-6 text-[15px] leading-relaxed text-gray-600 dark:text-gray-300 md:text-[16px]">
                      <div className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-blue-500/60 dark:bg-blue-400/60"></div>
                      Global offer discovery and querying
                    </li>
                  </ul>
                </div>
                <div>
                  <ul className="space-y-3">
                    <li className="relative pl-6 text-[15px] leading-relaxed text-gray-600 dark:text-gray-300 md:text-[16px]">
                      <div className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-blue-500/60 dark:bg-blue-400/60"></div>
                      Atomic settlement engine
                    </li>
                    <li className="relative pl-6 text-[15px] leading-relaxed text-gray-600 dark:text-gray-300 md:text-[16px]">
                      <div className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-blue-500/60 dark:bg-blue-400/60"></div>
                      Privacy-preserving transactions
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Best Practices */}
          <div className="relative overflow-hidden rounded-xl border border-blue-100/80 bg-white/80 backdrop-blur-sm dark:border-blue-900/30 dark:bg-gray-800/50">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.08),transparent_50%)] dark:bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.15),transparent_50%)]"></div>
            <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-blue-400/10 blur-xl dark:bg-blue-400/20"></div>

            <div className="relative p-6">
              <div className="mb-6 flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-blue-100/80 bg-white/90 text-blue-600 shadow-sm dark:border-blue-900/30 dark:bg-gray-800/90 dark:text-blue-400">
                  <FileCode className="h-6 w-6" />
                </div>
                <h3 className="text-[20px] font-medium text-gray-900 dark:text-white md:text-[24px]">
                  Implementation Best Practices
                </h3>
              </div>

              <p className="mb-4 text-[15px] leading-relaxed text-gray-700 dark:text-gray-300 md:text-[16px]">
                Follow these recommended practices to build performant and
                user-friendly marketplace applications.
              </p>

              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div>
                  <ul className="space-y-3">
                    <li className="relative pl-6 text-[15px] leading-relaxed text-gray-600 dark:text-gray-300 md:text-[16px]">
                      <div className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-blue-500/60 dark:bg-blue-400/60"></div>
                      Cache offer data to reduce node queries
                    </li>
                    <li className="relative pl-6 text-[15px] leading-relaxed text-gray-600 dark:text-gray-300 md:text-[16px]">
                      <div className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-blue-500/60 dark:bg-blue-400/60"></div>
                      Implement offer verification before accepting
                    </li>
                  </ul>
                </div>
                <div>
                  <ul className="space-y-3">
                    <li className="relative pl-6 text-[15px] leading-relaxed text-gray-600 dark:text-gray-300 md:text-[16px]">
                      <div className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-blue-500/60 dark:bg-blue-400/60"></div>
                      Provide clear transaction previews
                    </li>
                    <li className="relative pl-6 text-[15px] leading-relaxed text-gray-600 dark:text-gray-300 md:text-[16px]">
                      <div className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-blue-500/60 dark:bg-blue-400/60"></div>
                      Handle payment address generation for privacy
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Getting Started Section */}
        <div className="relative mb-16 w-full overflow-hidden rounded-2xl border border-blue-100/80 bg-gradient-to-br from-blue-50/90 to-white p-8 backdrop-blur-sm dark:border-blue-900/30 dark:from-blue-950/40 dark:to-gray-950">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.08),transparent_50%)] dark:bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.15),transparent_50%)]"></div>
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-blue-400/10 blur-3xl dark:bg-blue-400/20"></div>

          <div className="relative">
            <div className="mb-6 flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-blue-100/80 bg-white/90 text-blue-600 shadow-sm dark:border-blue-900/30 dark:bg-gray-800/90 dark:text-blue-400">
                <Layers className="h-6 w-6" />
              </div>
              <h3 className="text-[22px] font-medium text-gray-900 dark:text-white md:text-[28px]">
                Getting Started
              </h3>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              <div className="rounded-lg border border-blue-100/40 bg-white/60 p-6 backdrop-blur-sm dark:border-blue-900/20 dark:bg-gray-800/30">
                <h4 className="mb-4 text-[18px] font-medium text-gray-900 dark:text-white">
                  Setup Steps
                </h4>
                <ul className="space-y-3">
                  <li className="relative pl-6 text-[15px] leading-relaxed text-gray-600 dark:text-gray-300 md:text-[16px]">
                    <div className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-blue-500/60 dark:bg-blue-400/60"></div>
                    Set up a Verus node or connect to existing node
                  </li>
                  <li className="relative pl-6 text-[15px] leading-relaxed text-gray-600 dark:text-gray-300 md:text-[16px]">
                    <div className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-blue-500/60 dark:bg-blue-400/60"></div>
                    Initialize a client library for API communication
                  </li>
                  <li className="relative pl-6 text-[15px] leading-relaxed text-gray-600 dark:text-gray-300 md:text-[16px]">
                    <div className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-blue-500/60 dark:bg-blue-400/60"></div>
                    Authenticate with node credentials
                  </li>
                  <li className="relative pl-6 text-[15px] leading-relaxed text-gray-600 dark:text-gray-300 md:text-[16px]">
                    <div className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-blue-500/60 dark:bg-blue-400/60"></div>
                    Make API calls to marketplace functions
                  </li>
                </ul>
              </div>

              <div className="rounded-lg border border-blue-100/40 bg-white/60 p-6 backdrop-blur-sm dark:border-blue-900/20 dark:bg-gray-800/30">
                <h4 className="mb-4 text-[18px] font-medium text-gray-900 dark:text-white">
                  Business Models
                </h4>
                <ul className="space-y-3">
                  <li className="relative pl-6 text-[15px] leading-relaxed text-gray-600 dark:text-gray-300 md:text-[16px]">
                    <div className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-blue-500/60 dark:bg-blue-400/60"></div>
                    Premium features and advanced trading tools
                  </li>
                  <li className="relative pl-6 text-[15px] leading-relaxed text-gray-600 dark:text-gray-300 md:text-[16px]">
                    <div className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-blue-500/60 dark:bg-blue-400/60"></div>
                    Subscription services for market data
                  </li>
                  <li className="relative pl-6 text-[15px] leading-relaxed text-gray-600 dark:text-gray-300 md:text-[16px]">
                    <div className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-blue-500/60 dark:bg-blue-400/60"></div>
                    Integration services and platform connections
                  </li>
                  <li className="relative pl-6 text-[15px] leading-relaxed text-gray-600 dark:text-gray-300 md:text-[16px]">
                    <div className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-blue-500/60 dark:bg-blue-400/60"></div>
                    No platform risk or central dependencies
                  </li>
                </ul>
              </div>

              <div className="rounded-lg border border-blue-100/40 bg-white/60 p-6 backdrop-blur-sm dark:border-blue-900/20 dark:bg-gray-800/30">
                <h4 className="mb-4 text-[18px] font-medium text-gray-900 dark:text-white">
                  Integration Support
                </h4>
                <p className="mb-4 text-[15px] leading-relaxed text-gray-600 dark:text-gray-300 md:text-[16px]">
                  For comprehensive documentation, code examples, and
                  development support, visit our Developer Portal or join the
                  Verus Discord community.
                </p>
                <p className="text-[15px] leading-relaxed text-gray-600 dark:text-gray-300 md:text-[16px]">
                  The protocol supports privacy-preserving transactions,
                  allowing you to build trading applications for sensitive use
                  cases where public offers would be inappropriate.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Use Cases Section - Simplified */}
        <div className="flex w-full flex-col gap-6 md:flex-row">
          <div className="relative w-full overflow-hidden rounded-xl border border-blue-100/80 bg-white/80 backdrop-blur-sm dark:border-blue-900/30 dark:bg-gray-800/50 md:w-1/2">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.08),transparent_50%)] dark:bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.15),transparent_50%)]"></div>
            <div className="absolute -bottom-8 -right-8 h-32 w-32 rounded-full bg-blue-400/10 blur-xl dark:bg-blue-400/20"></div>

            <div className="relative p-6">
              <div className="mb-6 flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-blue-100/80 bg-white/90 text-blue-600 shadow-sm dark:border-blue-900/30 dark:bg-gray-800/90 dark:text-blue-400">
                  <Store className="h-6 w-6" />
                </div>
                <h3 className="text-[20px] font-medium text-gray-900 dark:text-white md:text-[24px]">
                  Specialized Marketplaces
                </h3>
              </div>

              <ul className="space-y-4">
                <li className="relative pl-6 text-[15px] leading-relaxed text-gray-600 dark:text-gray-300 md:text-[16px]">
                  <div className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-blue-500/60 dark:bg-blue-400/60"></div>
                  Domain/username marketplaces for premium VerusIDs
                </li>
                <li className="relative pl-6 text-[15px] leading-relaxed text-gray-600 dark:text-gray-300 md:text-[16px]">
                  <div className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-blue-500/60 dark:bg-blue-400/60"></div>
                  Digital collectible exchanges for NFT-like assets
                </li>
                <li className="relative pl-6 text-[15px] leading-relaxed text-gray-600 dark:text-gray-300 md:text-[16px]">
                  <div className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-blue-500/60 dark:bg-blue-400/60"></div>
                  Service marketplaces with tokenized access
                </li>
                <li className="relative pl-6 text-[15px] leading-relaxed text-gray-600 dark:text-gray-300 md:text-[16px]">
                  <div className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-blue-500/60 dark:bg-blue-400/60"></div>
                  Financial markets for specialized currencies
                </li>
              </ul>
            </div>
          </div>

          <div className="relative w-full overflow-hidden rounded-xl border border-blue-100/80 bg-gradient-to-br from-blue-50/90 to-white backdrop-blur-sm dark:border-blue-900/30 dark:from-blue-950/40 dark:to-gray-950 md:w-1/2">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.08),transparent_50%)] dark:bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.15),transparent_50%)]"></div>
            <div className="absolute -left-8 -top-8 h-32 w-32 rounded-full bg-blue-400/10 blur-xl dark:bg-blue-400/20"></div>

            <div className="relative p-6">
              <div className="mb-6 flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-blue-100/80 bg-white/90 text-blue-600 shadow-sm dark:border-blue-900/30 dark:bg-gray-800/90 dark:text-blue-400">
                  <Coins className="h-6 w-6" />
                </div>
                <h3 className="text-[20px] font-medium text-gray-900 dark:text-white md:text-[24px]">
                  Trading Platforms
                </h3>
              </div>

              <ul className="space-y-4">
                <li className="relative pl-6 text-[15px] leading-relaxed text-gray-600 dark:text-gray-300 md:text-[16px]">
                  <div className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-blue-500/60 dark:bg-blue-400/60"></div>
                  Advanced order matching systems
                </li>
                <li className="relative pl-6 text-[15px] leading-relaxed text-gray-600 dark:text-gray-300 md:text-[16px]">
                  <div className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-blue-500/60 dark:bg-blue-400/60"></div>
                  Portfolio management applications
                </li>
                <li className="relative pl-6 text-[15px] leading-relaxed text-gray-600 dark:text-gray-300 md:text-[16px]">
                  <div className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-blue-500/60 dark:bg-blue-400/60"></div>
                  Cross-chain trading platforms
                </li>
                <li className="relative pl-6 text-[15px] leading-relaxed text-gray-600 dark:text-gray-300 md:text-[16px]">
                  <div className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-blue-500/60 dark:bg-blue-400/60"></div>
                  Mobile trading applications
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
