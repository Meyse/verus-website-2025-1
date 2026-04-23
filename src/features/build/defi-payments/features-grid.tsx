import {
  ArrowUpDown,
  Coins,
  DollarSign,
  Lock,
  Network,
  Scale,
  Shield,
  Store,
  Wallet,
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
          {/* MEV Resistant */}
          <div className="group relative flex-1 overflow-hidden border border-blue-100/80 bg-white/70 p-6 backdrop-blur-sm transition-all duration-300 dark:border-blue-900/30 dark:bg-gray-900/50 md:rounded-[20px] md:p-8">
            <div className="absolute -bottom-8 -right-8 h-32 w-32 rounded-full bg-blue-400/5 blur-xl dark:bg-blue-400/10"></div>
            <div className="relative">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-lg border border-blue-100/80 bg-white/90 shadow-sm transition-colors duration-300 group-hover:bg-blue-50 dark:border-blue-900/30 dark:bg-gray-800/90 dark:group-hover:bg-gray-800">
                <Shield className="h-7 w-7 text-verus-blue/80 dark:text-blue-400" />
              </div>
              <h3 className="mb-2 text-[16px] font-bold text-gray-900 dark:text-white md:text-[18px]">
                MEV Resistant
              </h3>
              <p className="text-[14px] leading-relaxed text-gray-600 dark:text-gray-300 md:text-[15px]">
                All conversions in one ore more blocks get the same price with
                no spread. No front-running, back-running, or sandwich attacks
                possible. Fair trading for everyone.
              </p>
            </div>
          </div>

          {/* Ultra-Low Fees */}
          <div className="group relative flex-1 overflow-hidden border border-blue-100/80 bg-white/70 p-6 backdrop-blur-sm transition-all duration-300 dark:border-blue-900/30 dark:bg-gray-900/50 md:rounded-[20px] md:p-8">
            <div className="absolute left-6 top-6 h-32 w-32 rounded-full bg-blue-400/5 blur-xl dark:bg-blue-400/10"></div>
            <div className="relative">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-lg border border-blue-100/80 bg-white/90 shadow-sm transition-colors duration-300 group-hover:bg-blue-50 dark:border-blue-900/30 dark:bg-gray-800/90 dark:group-hover:bg-gray-800">
                <DollarSign className="h-7 w-7 text-verus-blue/80 dark:text-blue-400" />
              </div>
              <h3 className="mb-2 text-[16px] font-bold text-gray-900 dark:text-white md:text-[18px]">
                Ultra-Low Fees
              </h3>
              <p className="text-[14px] leading-relaxed text-gray-600 dark:text-gray-300 md:text-[15px]">
                Only 0.025% fee for reserve-to-basket conversions and 0.05% for
                reserve-to-reserve. 50% of fees go to miners/stakers, 50% to
                reserves.
              </p>
            </div>
          </div>

          {/* Protocol-Level Security */}
          <div className="group relative flex-1 overflow-hidden border border-blue-100/80 bg-white/70 p-6 backdrop-blur-sm transition-all duration-300 dark:border-blue-900/30 dark:bg-gray-900/50 md:rounded-[20px] md:p-8">
            <div className="absolute -bottom-8 -left-8 h-32 w-32 rounded-full bg-blue-400/5 blur-xl dark:bg-blue-400/10"></div>
            <div className="relative">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-lg border border-blue-100/80 bg-white/90 shadow-sm transition-colors duration-300 group-hover:bg-blue-50 dark:border-blue-900/30 dark:bg-gray-800/90 dark:group-hover:bg-gray-800">
                <Lock className="h-7 w-7 text-verus-blue/80 dark:text-blue-400" />
              </div>
              <h3 className="mb-2 text-[16px] font-bold text-gray-900 dark:text-white md:text-[18px]">
                Protocol-Level Security
              </h3>
              <p className="text-[14px] leading-relaxed text-gray-600 dark:text-gray-300 md:text-[15px]">
                All DeFi operations verified by miners and stakers. No smart
                contract bugs or exploits. Security built into the protocol
                itself.
              </p>
            </div>
          </div>
        </div>

        {/* Center Column - 3 Features */}
        <div className="col-span-1 flex flex-col gap-4">
          {/* Basket Currencies */}
          <div className="group relative flex-1 overflow-hidden border border-blue-100/80 bg-gradient-to-br from-blue-50/70 to-white p-6 backdrop-blur-sm transition-all duration-300 dark:border-blue-900/30 dark:from-blue-950/40 dark:to-gray-950 md:rounded-[20px] md:p-8">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.08),transparent_50%)] dark:bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.15),transparent_50%)]"></div>
            <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-blue-400/10 blur-2xl dark:bg-blue-400/20"></div>
            <div className="relative">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-lg border border-blue-100/80 bg-white/90 shadow-sm transition-colors duration-300 group-hover:bg-blue-50 dark:border-blue-900/30 dark:bg-gray-800/90 dark:group-hover:bg-gray-800">
                <Coins className="h-7 w-7 text-verus-blue/80 dark:text-blue-400" />
              </div>
              <h3 className="mb-2 text-[16px] font-bold text-gray-900 dark:text-white md:text-[18px]">
                Basket Currencies
              </h3>
              <p className="text-[14px] leading-relaxed text-gray-600 dark:text-gray-300 md:text-[15px]">
                Create sophisticated basket currencies backed by up to 10
                reserve currencies. Configurable reserve ratios from 5% to 100%.
                Automatic supply management.
              </p>
            </div>
          </div>

          {/* Instant Payments */}
          <div className="group relative flex-1 overflow-hidden border border-blue-100/80 bg-white/70 p-6 backdrop-blur-sm transition-all duration-300 dark:border-blue-900/30 dark:bg-gray-900/50 md:rounded-[20px] md:p-8">
            <div className="absolute right-6 top-6 h-32 w-32 rounded-full bg-blue-400/5 blur-xl dark:bg-blue-400/10"></div>
            <div className="relative">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-lg border border-blue-100/80 bg-white/90 shadow-sm transition-colors duration-300 group-hover:bg-blue-50 dark:border-blue-900/30 dark:bg-gray-800/90 dark:group-hover:bg-gray-800">
                <Wallet className="h-7 w-7 text-verus-blue/80 dark:text-blue-400" />
              </div>
              <h3 className="mb-2 text-[16px] font-bold text-gray-900 dark:text-white md:text-[18px]">
                Final Payments
              </h3>
              <p className="text-[14px] leading-relaxed text-gray-600 dark:text-gray-300 md:text-[15px]">
                Send and receive payments with 1-minute block times (on Verus).
                No chargebacks, no intermediaries.
              </p>
            </div>
          </div>

          {/* Multi-Currency Support */}
          <div className="group relative flex-1 overflow-hidden border border-blue-100/80 bg-white/70 p-6 backdrop-blur-sm transition-all duration-300 dark:border-blue-900/30 dark:bg-gray-900/50 md:rounded-[20px] md:p-8">
            <div className="absolute -bottom-8 -right-8 h-32 w-32 rounded-full bg-blue-400/5 blur-xl dark:bg-blue-400/10"></div>
            <div className="relative">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-lg border border-blue-100/80 bg-white/90 shadow-sm transition-colors duration-300 group-hover:bg-blue-50 dark:border-blue-900/30 dark:bg-gray-800/90 dark:group-hover:bg-gray-800">
                <ArrowUpDown className="h-7 w-7 text-verus-blue/80 dark:text-blue-400" />
              </div>
              <h3 className="mb-2 text-[16px] font-bold text-gray-900 dark:text-white md:text-[18px]">
                Multi-Currency Support
              </h3>
              <p className="text-[14px] leading-relaxed text-gray-600 dark:text-gray-300 md:text-[15px]">
                Accept payments in any currency on the Verus network. Support
                for all ERC-20 tokens bridged from Ethereum. Automatic currency
                conversion.
              </p>
            </div>
          </div>
        </div>

        {/* Right Column - 3 Features */}
        <div className="col-span-1 flex flex-col gap-4">
          {/* QR Code Integration */}
          <div className="group relative flex-1 overflow-hidden border border-blue-100/80 bg-white/70 p-6 backdrop-blur-sm transition-all duration-300 dark:border-blue-900/30 dark:bg-gray-900/50 md:rounded-[20px] md:p-8">
            <div className="absolute right-6 top-6 h-32 w-32 rounded-full bg-blue-400/5 blur-xl dark:bg-blue-400/10"></div>
            <div className="relative">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-lg border border-blue-100/80 bg-white/90 shadow-sm transition-colors duration-300 group-hover:bg-blue-50 dark:border-blue-900/30 dark:bg-gray-800/90 dark:group-hover:bg-gray-800">
                <Store className="h-7 w-7 text-verus-blue/80 dark:text-blue-400" />
              </div>
              <h3 className="mb-2 text-[16px] font-bold text-gray-900 dark:text-white md:text-[18px]">
                QR Code Integration
              </h3>
              <p className="text-[14px] leading-relaxed text-gray-600 dark:text-gray-300 md:text-[15px]">
                Package invoices into deeplinks and QR codes for seamless
                payment experiences. Easy integration with Verus Mobile and
                other wallets.
              </p>
            </div>
          </div>

          {/* Cross-Chain Trading */}
          <div className="group relative flex-1 overflow-hidden border border-blue-100/80 bg-gradient-to-br from-blue-50/70 to-white p-6 backdrop-blur-sm transition-all duration-300 dark:border-blue-900/30 dark:from-blue-950/40 dark:to-gray-950 md:rounded-[20px] md:p-8">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.08),transparent_50%)] dark:bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.15),transparent_50%)]"></div>
            <div className="absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-blue-400/10 blur-2xl dark:bg-blue-400/20"></div>
            <div className="relative">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-lg border border-blue-100/80 bg-white/90 shadow-sm transition-colors duration-300 group-hover:bg-blue-50 dark:border-blue-900/30 dark:bg-gray-800/90 dark:group-hover:bg-gray-800">
                <Network className="h-7 w-7 text-verus-blue/80 dark:text-blue-400" />
              </div>
              <h3 className="mb-2 text-[16px] font-bold text-gray-900 dark:text-white md:text-[18px]">
                Cross-Chain Conversions
              </h3>
              <p className="text-[14px] leading-relaxed text-gray-600 dark:text-gray-300 md:text-[15px]">
                Convert seamlessly across all PBaaS chains and with Ethereum
                through the bridge. Unified liquidity across the entire network.
              </p>
            </div>
          </div>

          {/* Fee Distribution */}
          <div className="group relative flex-1 overflow-hidden border border-blue-100/80 bg-white/70 p-6 backdrop-blur-sm transition-all duration-300 dark:border-blue-900/30 dark:bg-gray-900/50 md:rounded-[20px] md:p-8">
            <div className="absolute -bottom-8 -left-8 h-32 w-32 rounded-full bg-blue-400/5 blur-xl dark:bg-blue-400/10"></div>
            <div className="relative">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-lg border border-blue-100/80 bg-white/90 shadow-sm transition-colors duration-300 group-hover:bg-blue-50 dark:border-blue-900/30 dark:bg-gray-800/90 dark:group-hover:bg-gray-800">
                <Scale className="h-7 w-7 text-verus-blue/80 dark:text-blue-400" />
              </div>
              <h3 className="mb-2 text-[16px] font-bold text-gray-900 dark:text-white md:text-[18px]">
                Fee Distribution
              </h3>
              <p className="text-[14px] leading-relaxed text-gray-600 dark:text-gray-300 md:text-[15px]">
                Transparent fee distribution between miners/stakers and
                reserves. No value extraction by middlemen or MEV bots.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
