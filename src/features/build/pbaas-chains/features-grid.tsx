import {
  Coins,
  Cpu,
  Lock,
  Network,
  Rocket,
  Settings,
  Shield,
  ShoppingCart,
  Store,
  TrendingUp,
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
          {/* 51% Attack Resistant */}
          <div className="group relative flex-1 overflow-hidden border border-blue-100/80 bg-white/70 p-6 backdrop-blur-sm transition-all duration-300 dark:border-blue-900/30 dark:bg-gray-900/50 md:rounded-[20px] md:p-8">
            <div className="absolute -bottom-8 -right-8 h-32 w-32 rounded-full bg-blue-400/5 blur-xl dark:bg-blue-400/10"></div>
            <div className="relative">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-lg border border-blue-100/80 bg-white/90 shadow-sm transition-colors duration-300 group-hover:bg-blue-50 dark:border-blue-900/30 dark:bg-gray-800/90 dark:group-hover:bg-gray-800">
                <Shield className="h-7 w-7 text-verus-blue/80 dark:text-blue-400" />
              </div>
              <h3 className="mb-2 text-[16px] font-medium text-gray-900 dark:text-white md:text-[18px]">
                51% Attack Resistant
              </h3>
              <p className="text-[14px] leading-relaxed text-gray-600 dark:text-gray-300 md:text-[15px]">
                Every PBaaS chain inherits Verus' proven 50/50 PoW/PoS security
                model, making each chain provably resistant to hash attacks
                through combined mining power and staking consensus. This unique
                model ensures robust network security from day one.
              </p>
            </div>
          </div>

          {/* Custom Tokenomics */}
          <div className="group relative flex-1 overflow-hidden border border-blue-100/80 bg-white/70 p-6 backdrop-blur-sm transition-all duration-300 dark:border-blue-900/30 dark:bg-gray-900/50 md:rounded-[20px] md:p-8">
            <div className="absolute left-6 top-6 h-32 w-32 rounded-full bg-blue-400/5 blur-xl dark:bg-blue-400/10"></div>
            <div className="relative">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-lg border border-blue-100/80 bg-white/90 shadow-sm transition-colors duration-300 group-hover:bg-blue-50 dark:border-blue-900/30 dark:bg-gray-800/90 dark:group-hover:bg-gray-800">
                <TrendingUp className="h-7 w-7 text-verus-blue/80 dark:text-blue-400" />
              </div>
              <h3 className="mb-2 text-[16px] font-medium text-gray-900 dark:text-white md:text-[18px]">
                Custom Coinomics
              </h3>
              <p className="text-[14px] leading-relaxed text-gray-600 dark:text-gray-300 md:text-[15px]">
                Design your chain's complete economic model with flexible
                parameters for emission curves, mining rewards, halving periods,
                and premine allocations. Create unique coin distribution
                strategies tailored to your project's specific needs.
              </p>
            </div>
          </div>

          {/* True Interoperability */}
          <div className="group relative flex-1 overflow-hidden border border-blue-100/80 bg-white/70 p-6 backdrop-blur-sm transition-all duration-300 dark:border-blue-900/30 dark:bg-gray-900/50 md:rounded-[20px] md:p-8">
            <div className="absolute -bottom-8 -left-8 h-32 w-32 rounded-full bg-blue-400/5 blur-xl dark:bg-blue-400/10"></div>
            <div className="relative">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-lg border border-blue-100/80 bg-white/90 shadow-sm transition-colors duration-300 group-hover:bg-blue-50 dark:border-blue-900/30 dark:bg-gray-800/90 dark:group-hover:bg-gray-800">
                <Settings className="h-7 w-7 text-verus-blue/80 dark:text-blue-400" />
              </div>
              <h3 className="mb-2 text-[16px] font-medium text-gray-900 dark:text-white md:text-[18px]">
                Custom Economics
              </h3>
              <p className="text-[14px] leading-relaxed text-gray-600 dark:text-gray-300 md:text-[15px]">
                Take full control of your chain's fee structure by setting
                custom prices for VerusID registrations, currency launches, and
                network services. All fees are denominated in your native coin,
                creating a self-sustaining economic ecosystem.
              </p>
            </div>
          </div>
        </div>

        {/* Center Column - 4 Features */}
        <div className="col-span-1 flex flex-col gap-4">
          {/* True Interoperability */}
          <div className="group relative flex-1 overflow-hidden border border-blue-100/80 bg-gradient-to-br from-blue-50/70 to-white p-6 backdrop-blur-sm transition-all duration-300 dark:border-blue-900/30 dark:from-blue-950/40 dark:to-gray-950 md:rounded-[20px] md:p-8">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.08),transparent_50%)] dark:bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.15),transparent_50%)]"></div>
            <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-blue-400/10 blur-2xl dark:bg-blue-400/20"></div>
            <div className="relative">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-lg border border-blue-100/80 bg-white/90 shadow-sm transition-colors duration-300 group-hover:bg-blue-50 dark:border-blue-900/30 dark:bg-gray-800/90 dark:group-hover:bg-gray-800">
                <Network className="h-7 w-7 text-verus-blue/80 dark:text-blue-400" />
              </div>
              <h3 className="mb-2 text-[16px] font-medium text-gray-900 dark:text-white md:text-[18px]">
                True Interoperability
              </h3>
              <p className="text-[14px] leading-relaxed text-gray-600 dark:text-gray-300 md:text-[15px]">
                Connect seamlessly with other PBaaS chains and external networks
                through the Verus Protocol. Built-in cross-chain bridges enable
                fluid value transfer.
              </p>
            </div>
          </div>

          {/* L1 Marketplace */}
          <div className="group relative flex-1 overflow-hidden border border-blue-100/80 bg-white/70 p-6 backdrop-blur-sm transition-all duration-300 dark:border-blue-900/30 dark:bg-gray-900/50 md:rounded-[20px] md:p-8">
            <div className="absolute right-6 top-6 h-32 w-32 rounded-full bg-blue-400/5 blur-xl dark:bg-blue-400/10"></div>
            <div className="relative">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-lg border border-blue-100/80 bg-white/90 shadow-sm transition-colors duration-300 group-hover:bg-blue-50 dark:border-blue-900/30 dark:bg-gray-800/90 dark:group-hover:bg-gray-800">
                <ShoppingCart className="h-7 w-7 text-verus-blue/80 dark:text-blue-400" />
              </div>
              <h3 className="mb-2 text-[16px] font-medium text-gray-900 dark:text-white md:text-[18px]">
                L1 Marketplace
              </h3>
              <p className="text-[14px] leading-relaxed text-gray-600 dark:text-gray-300 md:text-[15px]">
                Enable direct peer-to-peer trading between VerusIDs, currencies,
                or a combination of both with built-in offer management and
                global listings.
              </p>
            </div>
          </div>

          {/* L1 DeFi Protocol */}
          <div className="group relative flex-1 overflow-hidden border border-blue-100/80 bg-white/70 p-6 backdrop-blur-sm transition-all duration-300 dark:border-blue-900/30 dark:bg-gray-900/50 md:rounded-[20px] md:p-8">
            <div className="absolute -bottom-8 -right-8 h-32 w-32 rounded-full bg-blue-400/5 blur-xl dark:bg-blue-400/10"></div>
            <div className="relative">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-lg border border-blue-100/80 bg-white/90 shadow-sm transition-colors duration-300 group-hover:bg-blue-50 dark:border-blue-900/30 dark:bg-gray-800/90 dark:group-hover:bg-gray-800">
                <Store className="h-7 w-7 text-verus-blue/80 dark:text-blue-400" />
              </div>
              <h3 className="mb-2 text-[16px] font-medium text-gray-900 dark:text-white md:text-[18px]">
                L1 DeFi Protocol
              </h3>
              <p className="text-[14px] leading-relaxed text-gray-600 dark:text-gray-300 md:text-[15px]">
                Native liquidity pools and fractional reserve currencies that
                function as automated market makers with very low fees. Built-in
                MEV resistance ensures fair trading.
              </p>
            </div>
          </div>

          {/* Multi-Currency System */}
          <div className="group relative flex-1 overflow-hidden border border-blue-100/80 bg-white/70 p-6 backdrop-blur-sm transition-all duration-300 dark:border-blue-900/30 dark:bg-gray-900/50 md:rounded-[20px] md:p-8">
            <div className="absolute left-6 top-6 h-32 w-32 rounded-full bg-blue-400/5 blur-xl dark:bg-blue-400/10"></div>
            <div className="relative">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-lg border border-blue-100/80 bg-white/90 shadow-sm transition-colors duration-300 group-hover:bg-blue-50 dark:border-blue-900/30 dark:bg-gray-800/90 dark:group-hover:bg-gray-800">
                <Coins className="h-7 w-7 text-verus-blue/80 dark:text-blue-400" />
              </div>
              <h3 className="mb-2 text-[16px] font-medium text-gray-900 dark:text-white md:text-[18px]">
                Multi-Currency System
              </h3>
              <p className="text-[14px] leading-relaxed text-gray-600 dark:text-gray-300 md:text-[15px]">
                Support unlimited currencies and tokens natively on your chain,
                with built-in conversion capabilities and cross-chain bridging.
              </p>
            </div>
          </div>
        </div>

        {/* Right Column - 3 Features */}
        <div className="col-span-1 flex flex-col gap-4">
          {/* Independent Processing */}
          <div className="group relative flex-1 overflow-hidden border border-blue-100/80 bg-white/70 p-6 backdrop-blur-sm transition-all duration-300 dark:border-blue-900/30 dark:bg-gray-900/50 md:rounded-[20px] md:p-8">
            <div className="absolute right-6 top-6 h-32 w-32 rounded-full bg-blue-400/5 blur-xl dark:bg-blue-400/10"></div>
            <div className="relative">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-lg border border-blue-100/80 bg-white/90 shadow-sm transition-colors duration-300 group-hover:bg-blue-50 dark:border-blue-900/30 dark:bg-gray-800/90 dark:group-hover:bg-gray-800">
                <Cpu className="h-7 w-7 text-verus-blue/80 dark:text-blue-400" />
              </div>
              <h3 className="mb-2 text-[16px] font-medium text-gray-900 dark:text-white md:text-[18px]">
                Independent Processing
              </h3>
              <p className="text-[14px] leading-relaxed text-gray-600 dark:text-gray-300 md:text-[15px]">
                Each PBaaS chain operates with complete independence,
                maintaining its own processing power and validation rules. This
                separation prevents network congestion and ensures consistent
                performance regardless of other chains' activity.
              </p>
            </div>
          </div>

          {/* Easy Launch */}
          <div className="group relative flex-1 overflow-hidden border border-blue-100/80 bg-gradient-to-br from-blue-50/70 to-white p-6 backdrop-blur-sm transition-all duration-300 dark:border-blue-900/30 dark:from-blue-950/40 dark:to-gray-950 md:rounded-[20px] md:p-8">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.08),transparent_50%)] dark:bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.15),transparent_50%)]"></div>
            <div className="absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-blue-400/10 blur-2xl dark:bg-blue-400/20"></div>
            <div className="relative">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-lg border border-blue-100/80 bg-white/90 shadow-sm transition-colors duration-300 group-hover:bg-blue-50 dark:border-blue-900/30 dark:bg-gray-800/90 dark:group-hover:bg-gray-800">
                <Rocket className="h-7 w-7 text-verus-blue/80 dark:text-blue-400" />
              </div>
              <h3 className="mb-2 text-[16px] font-medium text-gray-900 dark:text-white md:text-[18px]">
                Easy Launch
              </h3>
              <p className="text-[14px] leading-relaxed text-gray-600 dark:text-gray-300 md:text-[15px]">
                Deploy your custom blockchain with a simple API command—no
                programming required. Your chain inherits all Verus L1 features
                instantly, letting you focus on building your project rather
                than developing blockchain infrastructure.
              </p>
            </div>
          </div>

          {/* Advanced Privacy */}
          <div className="group relative flex-1 overflow-hidden border border-blue-100/80 bg-white/70 p-6 backdrop-blur-sm transition-all duration-300 dark:border-blue-900/30 dark:bg-gray-900/50 md:rounded-[20px] md:p-8">
            <div className="absolute -bottom-8 -left-8 h-32 w-32 rounded-full bg-blue-400/5 blur-xl dark:bg-blue-400/10"></div>
            <div className="relative">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-lg border border-blue-100/80 bg-white/90 shadow-sm transition-colors duration-300 group-hover:bg-blue-50 dark:border-blue-900/30 dark:bg-gray-800/90 dark:group-hover:bg-gray-800">
                <Lock className="h-7 w-7 text-verus-blue/80 dark:text-blue-400" />
              </div>
              <h3 className="mb-2 text-[16px] font-medium text-gray-900 dark:text-white md:text-[18px]">
                Advanced Privacy
              </h3>
              <p className="text-[14px] leading-relaxed text-gray-600 dark:text-gray-300 md:text-[15px]">
                Leverage industry-leading zk-SNARKs technology for optional
                transaction privacy. Users can choose between transparent and
                shielded transactions, maintaining confidentiality while
                ensuring regulatory compliance when needed.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
