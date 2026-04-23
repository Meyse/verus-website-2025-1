import {
  Code2,
  Coins,
  Database,
  Key,
  Lock,
  Network,
  Scale,
  Shield,
  Store,
} from 'lucide-react'

/*
 * Updated: Styled the features grid to match the modern design from PBaaS chains component
 * with dark mode support, decorative background elements, and consistent card styling.
 */
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
          {/* Permanent Namespace */}
          <div className="group relative min-h-[250px] flex-1 overflow-hidden border border-blue-100/80 bg-white/70 p-6 backdrop-blur-sm transition-all duration-300 dark:border-blue-900/30 dark:bg-gray-900/50 md:rounded-[20px] md:p-8">
            <div className="absolute -bottom-8 -right-8 h-32 w-32 rounded-full bg-blue-400/5 blur-xl dark:bg-blue-400/10"></div>
            <div className="relative">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-lg border border-blue-100/80 bg-white/90 shadow-sm transition-colors duration-300 group-hover:bg-blue-50 dark:border-blue-900/30 dark:bg-gray-800/90 dark:group-hover:bg-gray-800">
                <Key className="h-7 w-7 text-verus-blue/80 dark:text-blue-400" />
              </div>
              <h3 className="mb-2 text-[16px] font-bold text-gray-900 dark:text-white md:text-[18px]">
                Permanent Namespace
              </h3>
              <p className="text-[14px] leading-relaxed text-gray-600 dark:text-gray-300 md:text-[15px]">
                VerusID serves as the permanent namespace for the entire
                protocol. Launch currencies, tokens, and blockchains with a
                unique, human-readable identity.
              </p>
            </div>
          </div>

          {/* Self-Sovereign Identity */}
          <div className="group relative min-h-[250px] flex-1 overflow-hidden border border-blue-100/80 bg-white/70 p-6 backdrop-blur-sm transition-all duration-300 dark:border-blue-900/30 dark:bg-gray-900/50 md:rounded-[20px] md:p-8">
            <div className="absolute left-6 top-6 h-32 w-32 rounded-full bg-blue-400/5 blur-xl dark:bg-blue-400/10"></div>
            <div className="relative">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-lg border border-blue-100/80 bg-white/90 shadow-sm transition-colors duration-300 group-hover:bg-blue-50 dark:border-blue-900/30 dark:bg-gray-800/90 dark:group-hover:bg-gray-800">
                <Shield className="h-7 w-7 text-verus-blue/80 dark:text-blue-400" />
              </div>
              <h3 className="mb-2 text-[16px] font-bold text-gray-900 dark:text-white md:text-[18px]">
                Self-Sovereign Identity
              </h3>
              <p className="text-[14px] leading-relaxed text-gray-600 dark:text-gray-300 md:text-[15px]">
                Complete autonomy over your digital identity with revocation and
                recovery capabilities that protect against key loss or theft.
              </p>
            </div>
          </div>

          {/* Blockchain Launching Pad */}
          <div className="group relative min-h-[250px] flex-1 overflow-hidden border border-blue-100/80 bg-white/70 p-6 backdrop-blur-sm transition-all duration-300 dark:border-blue-900/30 dark:bg-gray-900/50 md:rounded-[20px] md:p-8">
            <div className="absolute -bottom-8 -left-8 h-32 w-32 rounded-full bg-blue-400/5 blur-xl dark:bg-blue-400/10"></div>
            <div className="relative">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-lg border border-blue-100/80 bg-white/90 shadow-sm transition-colors duration-300 group-hover:bg-blue-50 dark:border-blue-900/30 dark:bg-gray-800/90 dark:group-hover:bg-gray-800">
                <Network className="h-7 w-7 text-verus-blue/80 dark:text-blue-400" />
              </div>
              <h3 className="mb-2 text-[16px] font-bold text-gray-900 dark:text-white md:text-[18px]">
                Blockchain Launching Pad
              </h3>
              <p className="text-[14px] leading-relaxed text-gray-600 dark:text-gray-300 md:text-[15px]">
                Launch fully interconnected, customizable, independent
                blockchains without any coding needed—just simple commands using
                your VerusID.
              </p>
            </div>
          </div>
        </div>

        {/* Center Column - 3 Features */}
        <div className="col-span-1 flex flex-col gap-4">
          {/* Currency & Token Issuance */}
          <div className="group relative min-h-[250px] flex-1 overflow-hidden border border-blue-100/80 bg-gradient-to-br from-blue-50/70 to-white p-6 backdrop-blur-sm transition-all duration-300 dark:border-blue-900/30 dark:from-blue-950/40 dark:to-gray-950 md:rounded-[20px] md:p-8">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.08),transparent_50%)] dark:bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.15),transparent_50%)]"></div>
            <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-blue-400/10 blur-2xl dark:bg-blue-400/20"></div>
            <div className="relative">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-lg border border-blue-100/80 bg-white/90 shadow-sm transition-colors duration-300 group-hover:bg-blue-50 dark:border-blue-900/30 dark:bg-gray-800/90 dark:group-hover:bg-gray-800">
                <Coins className="h-7 w-7 text-verus-blue/80 dark:text-blue-400" />
              </div>
              <h3 className="mb-2 text-[16px] font-bold text-gray-900 dark:text-white md:text-[18px]">
                Currency & Token Issuance
              </h3>
              <p className="text-[14px] leading-relaxed text-gray-600 dark:text-gray-300 md:text-[15px]">
                Create powerful currencies and tokens including basket
                currencies (DeFi AMMs) with your VerusID serving as the token
                issuer and namespace.
              </p>
            </div>
          </div>

          {/* Data Publication & Storage */}
          <div className="group relative min-h-[250px] flex-1 overflow-hidden border border-blue-100/80 bg-white/70 p-6 backdrop-blur-sm transition-all duration-300 dark:border-blue-900/30 dark:bg-gray-900/50 md:rounded-[20px] md:p-8">
            <div className="absolute bottom-6 right-6 h-32 w-32 rounded-full bg-blue-400/5 blur-xl dark:bg-blue-400/10"></div>
            <div className="relative">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-lg border border-blue-100/80 bg-white/90 shadow-sm transition-colors duration-300 group-hover:bg-blue-50 dark:border-blue-900/30 dark:bg-gray-800/90 dark:group-hover:bg-gray-800">
                <Database className="h-7 w-7 text-verus-blue/80 dark:text-blue-400" />
              </div>
              <h3 className="mb-2 text-[16px] font-bold text-gray-900 dark:text-white md:text-[18px]">
                Data Publication & Storage
              </h3>
              <p className="text-[14px] leading-relaxed text-gray-600 dark:text-gray-300 md:text-[15px]">
                Use VerusID and VDXF as a controlled public storage system to
                publish and store data with multiple levels of nesting.
              </p>
            </div>
          </div>

          {/* Security Features */}
          <div className="group relative min-h-[250px] flex-1 overflow-hidden border border-blue-100/80 bg-white/70 p-6 backdrop-blur-sm transition-all duration-300 dark:border-blue-900/30 dark:bg-gray-900/50 md:rounded-[20px] md:p-8">
            <div className="absolute left-6 top-6 h-32 w-32 rounded-full bg-blue-400/5 blur-xl dark:bg-blue-400/10"></div>
            <div className="relative">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-lg border border-blue-100/80 bg-white/90 shadow-sm transition-colors duration-300 group-hover:bg-blue-50 dark:border-blue-900/30 dark:bg-gray-800/90 dark:group-hover:bg-gray-800">
                <Lock className="h-7 w-7 text-verus-blue/80 dark:text-blue-400" />
              </div>
              <h3 className="mb-2 text-[16px] font-bold text-gray-900 dark:text-white md:text-[18px]">
                Security Features
              </h3>
              <p className="text-[14px] leading-relaxed text-gray-600 dark:text-gray-300 md:text-[15px]">
                Verus Vault enables theft-proof security by locking funds with
                customizable timelocks, while revocation and recovery
                authorities provide additional security layers.
              </p>
            </div>
          </div>
        </div>

        {/* Right Column - 3 Features */}
        <div className="col-span-1 flex flex-col gap-4">
          {/* Multichain Interoperability */}
          <div className="group relative min-h-[250px] flex-1 overflow-hidden border border-blue-100/80 bg-white/70 p-6 backdrop-blur-sm transition-all duration-300 dark:border-blue-900/30 dark:bg-gray-900/50 md:rounded-[20px] md:p-8">
            <div className="absolute right-6 top-6 h-32 w-32 rounded-full bg-blue-400/5 blur-xl dark:bg-blue-400/10"></div>
            <div className="relative">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-lg border border-blue-100/80 bg-white/90 shadow-sm transition-colors duration-300 group-hover:bg-blue-50 dark:border-blue-900/30 dark:bg-gray-800/90 dark:group-hover:bg-gray-800">
                <Scale className="h-7 w-7 text-verus-blue/80 dark:text-blue-400" />
              </div>
              <h3 className="mb-2 text-[16px] font-bold text-gray-900 dark:text-white md:text-[18px]">
                Multichain Interoperability
              </h3>
              <p className="text-[14px] leading-relaxed text-gray-600 dark:text-gray-300 md:text-[15px]">
                VerusIDs work across all PBaaS chains and can interact with
                Ethereum through the bridge, enabling truly cross-chain
                applications.
              </p>
            </div>
          </div>

          {/* Simple Integration */}
          <div className="group relative min-h-[250px] flex-1 overflow-hidden border border-blue-100/80 bg-white/70 p-6 backdrop-blur-sm transition-all duration-300 dark:border-blue-900/30 dark:bg-gray-900/50 md:rounded-[20px] md:p-8">
            <div className="absolute bottom-6 left-6 h-32 w-32 rounded-full bg-blue-400/5 blur-xl dark:bg-blue-400/10"></div>
            <div className="relative">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-lg border border-blue-100/80 bg-white/90 shadow-sm transition-colors duration-300 group-hover:bg-blue-50 dark:border-blue-900/30 dark:bg-gray-800/90 dark:group-hover:bg-gray-800">
                <Code2 className="h-7 w-7 text-verus-blue/80 dark:text-blue-400" />
              </div>
              <h3 className="mb-2 text-[16px] font-bold text-gray-900 dark:text-white md:text-[18px]">
                Simple Integration
              </h3>
              <p className="text-[14px] leading-relaxed text-gray-600 dark:text-gray-300 md:text-[15px]">
                Integrate VerusID into your applications with simple API
                commands. No complex blockchain development experience needed.
              </p>
            </div>
          </div>

          {/* Decentralized Marketplace */}
          <div className="group relative min-h-[250px] flex-1 overflow-hidden border border-blue-100/80 bg-white/70 p-6 backdrop-blur-sm transition-all duration-300 dark:border-blue-900/30 dark:bg-gray-900/50 md:rounded-[20px] md:p-8">
            <div className="absolute -bottom-8 -right-8 h-32 w-32 rounded-full bg-blue-400/5 blur-xl dark:bg-blue-400/10"></div>
            <div className="relative">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-lg border border-blue-100/80 bg-white/90 shadow-sm transition-colors duration-300 group-hover:bg-blue-50 dark:border-blue-900/30 dark:bg-gray-800/90 dark:group-hover:bg-gray-800">
                <Store className="h-7 w-7 text-verus-blue/80 dark:text-blue-400" />
              </div>
              <h3 className="mb-2 text-[16px] font-bold text-gray-900 dark:text-white md:text-[18px]">
                Decentralized Marketplace
              </h3>
              <p className="text-[14px] leading-relaxed text-gray-600 dark:text-gray-300 md:text-[15px]">
                Build on the built-in peer-to-peer marketplace for VerusIDs and
                currencies, enabling direct exchange without intermediaries.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
