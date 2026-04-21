import {ArrowUpDown, FileCode, QrCode, Wallet} from 'lucide-react'

/*
 * Updated:
 * - Transformed component to match PBaaS chains styling with modern gradient backgrounds
 * - Added developer-focused title with gradient text and decorative backgrounds
 * - Created a more engaging and centered title for developers
 * - Improved hover states and transitions
 * - Enhanced card designs with modern borders and shadows
 * - Maintained original content while improving visual hierarchy
 * - Removed blur effect from under the title
 * - Removed background container gradient
 * - Put title part after em dash on a new line
 * - Removed all hover effects from cards
 * - Integrated PaymentsSection and TechnicalSection into a single component
 * - Reorganized content to eliminate duplicate information
 */
export function TechnicalSection() {
  return (
    <section className="relative mb-24 md:mt-32">
      <div className="absolute left-10 top-40 h-64 w-64 rounded-full bg-blue-400/5 blur-3xl dark:bg-blue-400/10"></div>
      <div className="absolute bottom-20 right-10 h-64 w-64 rounded-full bg-blue-400/5 blur-3xl dark:bg-blue-400/10"></div>

      <div className="relative">
        <div className="mb-16 flex flex-col items-center justify-center">
          <h2 className="mx-auto mb-4 max-w-[1000px] text-center text-[28px] font-medium leading-[1.2] tracking-tight text-gray-800 dark:text-white md:mb-8 md:text-[55px]">
            Build Cross-Chain Payment Infrastructure with Simple APIs
          </h2>
          <p className="mx-auto max-w-3xl text-center text-[16px] text-gray-600 dark:text-gray-300 md:text-[20px]">
            Implement standardized payment solutions and financial protocols
            with straightforward API commands
          </p>
        </div>

        <div className="mb-16 grid grid-cols-1 gap-8 md:grid-cols-2">
          {/* Payment Solutions */}
          <div className="relative overflow-hidden rounded-xl border border-blue-100/80 bg-white/80 backdrop-blur-sm dark:border-blue-900/30 dark:bg-gray-800/50">
            <div className="p-6">
              <div className="mb-4 flex items-center gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600 dark:bg-blue-900/50 dark:text-blue-400">
                  <Wallet className="h-5 w-5" />
                </div>
                <h3 className="text-[18px] font-medium text-gray-900 dark:text-white md:text-[22px]">
                  Payment Infrastructure
                </h3>
              </div>
              <p className="mb-5 text-[15px] leading-relaxed text-gray-600 dark:text-gray-300 md:text-[16px]">
                The VerusPay Invoice specification enables standardized formats
                for creating, managing, and interpreting invoices across the
                Verus ecosystem.
              </p>
              <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                <ul className="space-y-3">
                  <li className="relative pl-6 text-[15px] leading-relaxed text-gray-600 dark:text-gray-300">
                    <div className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-blue-500/60 dark:bg-blue-400/60"></div>
                    Universal implementation across languages
                  </li>
                  <li className="relative pl-6 text-[15px] leading-relaxed text-gray-600 dark:text-gray-300">
                    <div className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-blue-500/60 dark:bg-blue-400/60"></div>
                    Standardized serialization format
                  </li>
                  <li className="relative pl-6 text-[15px] leading-relaxed text-gray-600 dark:text-gray-300">
                    <div className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-blue-500/60 dark:bg-blue-400/60"></div>
                    Multiple payment destinations support
                  </li>
                </ul>
                <ul className="space-y-3">
                  <li className="relative pl-6 text-[15px] leading-relaxed text-gray-600 dark:text-gray-300">
                    <div className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-blue-500/60 dark:bg-blue-400/60"></div>
                    Simple API for creating invoices
                  </li>
                  <li className="relative pl-6 text-[15px] leading-relaxed text-gray-600 dark:text-gray-300">
                    <div className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-blue-500/60 dark:bg-blue-400/60"></div>
                    Payment status monitoring
                  </li>
                  <li className="relative pl-6 text-[15px] leading-relaxed text-gray-600 dark:text-gray-300">
                    <div className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-blue-500/60 dark:bg-blue-400/60"></div>
                    Metadata and memo support
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Mobile Integration */}
          <div className="relative overflow-hidden rounded-xl border border-blue-100/80 bg-white/80 backdrop-blur-sm dark:border-blue-900/30 dark:bg-gray-800/50">
            <div className="p-6">
              <div className="mb-4 flex items-center gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600 dark:bg-blue-900/50 dark:text-blue-400">
                  <QrCode className="h-5 w-5" />
                </div>
                <h3 className="text-[18px] font-medium text-gray-900 dark:text-white md:text-[22px]">
                  Mobile & QR Integration
                </h3>
              </div>
              <p className="mb-5 text-[15px] leading-relaxed text-gray-600 dark:text-gray-300 md:text-[16px]">
                Enable scan-to-pay functionality with QR codes and deeplinks
                that work seamlessly with Verus Mobile and other compatible
                wallets.
              </p>
              <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                <ul className="space-y-3">
                  <li className="relative pl-6 text-[15px] leading-relaxed text-gray-600 dark:text-gray-300">
                    <div className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-blue-500/60 dark:bg-blue-400/60"></div>
                    Easy-to-scan QR code generation
                  </li>
                  <li className="relative pl-6 text-[15px] leading-relaxed text-gray-600 dark:text-gray-300">
                    <div className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-blue-500/60 dark:bg-blue-400/60"></div>
                    URL-based deeplinks for instant payment
                  </li>
                  <li className="relative pl-6 text-[15px] leading-relaxed text-gray-600 dark:text-gray-300">
                    <div className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-blue-500/60 dark:bg-blue-400/60"></div>
                    Seamless mobile wallet integration
                  </li>
                </ul>
                <ul className="space-y-3">
                  <li className="relative pl-6 text-[15px] leading-relaxed text-gray-600 dark:text-gray-300">
                    <div className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-blue-500/60 dark:bg-blue-400/60"></div>
                    Direct-to-wallet payment flows
                  </li>
                  <li className="relative pl-6 text-[15px] leading-relaxed text-gray-600 dark:text-gray-300">
                    <div className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-blue-500/60 dark:bg-blue-400/60"></div>
                    Responsive design implementation
                  </li>
                  <li className="relative pl-6 text-[15px] leading-relaxed text-gray-600 dark:text-gray-300">
                    <div className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-blue-500/60 dark:bg-blue-400/60"></div>
                    Cross-platform compatibility
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Financial Protocols */}
          <div className="relative overflow-hidden rounded-xl border border-blue-100/80 bg-white/80 backdrop-blur-sm dark:border-blue-900/30 dark:bg-gray-800/50">
            <div className="p-6">
              <div className="mb-4 flex items-center gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600 dark:bg-blue-900/50 dark:text-blue-400">
                  <FileCode className="h-5 w-5" />
                </div>
                <h3 className="text-[18px] font-medium text-gray-900 dark:text-white md:text-[22px]">
                  DeFi Integration
                </h3>
              </div>
              <p className="mb-5 text-[15px] leading-relaxed text-gray-600 dark:text-gray-300 md:text-[16px]">
                Integrate DeFi features into your applications with simple API
                commands instead of complex smart contract programming.
              </p>
              <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                <ul className="space-y-3">
                  <li className="relative pl-6 text-[15px] leading-relaxed text-gray-600 dark:text-gray-300">
                    <div className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-blue-500/60 dark:bg-blue-400/60"></div>
                    Currency conversion commands
                  </li>
                  <li className="relative pl-6 text-[15px] leading-relaxed text-gray-600 dark:text-gray-300">
                    <div className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-blue-500/60 dark:bg-blue-400/60"></div>
                    Liquidity pool management
                  </li>
                  <li className="relative pl-6 text-[15px] leading-relaxed text-gray-600 dark:text-gray-300">
                    <div className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-blue-500/60 dark:bg-blue-400/60"></div>
                    Cross-chain transaction support
                  </li>
                </ul>
                <ul className="space-y-3">
                  <li className="relative pl-6 text-[15px] leading-relaxed text-gray-600 dark:text-gray-300">
                    <div className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-blue-500/60 dark:bg-blue-400/60"></div>
                    Built-in MEV protection
                  </li>
                  <li className="relative pl-6 text-[15px] leading-relaxed text-gray-600 dark:text-gray-300">
                    <div className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-blue-500/60 dark:bg-blue-400/60"></div>
                    Protocol-level security
                  </li>
                  <li className="relative pl-6 text-[15px] leading-relaxed text-gray-600 dark:text-gray-300">
                    <div className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-blue-500/60 dark:bg-blue-400/60"></div>
                    Programmatic basket currency creation
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Multi-Currency Support */}
          <div className="relative overflow-hidden rounded-xl border border-blue-100/80 bg-white/80 backdrop-blur-sm dark:border-blue-900/30 dark:bg-gray-800/50">
            <div className="p-6">
              <div className="mb-4 flex items-center gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600 dark:bg-blue-900/50 dark:text-blue-400">
                  <ArrowUpDown className="h-5 w-5" />
                </div>
                <h3 className="text-[18px] font-medium text-gray-900 dark:text-white md:text-[22px]">
                  Multi-Currency Support
                </h3>
              </div>
              <p className="mb-5 text-[15px] leading-relaxed text-gray-600 dark:text-gray-300 md:text-[16px]">
                Accept payments in any currency with automatic conversion,
                ensuring you receive exactly what you expect.
              </p>
              <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                <ul className="space-y-3">
                  <li className="relative pl-6 text-[15px] leading-relaxed text-gray-600 dark:text-gray-300">
                    <div className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-blue-500/60 dark:bg-blue-400/60"></div>
                    VRSC and all PBaaS currencies
                  </li>
                  <li className="relative pl-6 text-[15px] leading-relaxed text-gray-600 dark:text-gray-300">
                    <div className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-blue-500/60 dark:bg-blue-400/60"></div>
                    Bridged Ethereum assets
                  </li>
                  <li className="relative pl-6 text-[15px] leading-relaxed text-gray-600 dark:text-gray-300">
                    <div className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-blue-500/60 dark:bg-blue-400/60"></div>
                    Multiple currency types in one transaction
                  </li>
                </ul>
                <ul className="space-y-3">
                  <li className="relative pl-6 text-[15px] leading-relaxed text-gray-600 dark:text-gray-300">
                    <div className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-blue-500/60 dark:bg-blue-400/60"></div>
                    1-minute settlement blocks
                  </li>
                  <li className="relative pl-6 text-[15px] leading-relaxed text-gray-600 dark:text-gray-300">
                    <div className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-blue-500/60 dark:bg-blue-400/60"></div>
                    No chargebacks possible
                  </li>
                  <li className="relative pl-6 text-[15px] leading-relaxed text-gray-600 dark:text-gray-300">
                    <div className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-blue-500/60 dark:bg-blue-400/60"></div>
                    Fixed, predictable transaction fees
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
