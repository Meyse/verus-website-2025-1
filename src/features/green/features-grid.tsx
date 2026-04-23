import {
  Battery,
  Cpu,
  GitMerge,
  Leaf,
  MonitorSmartphone,
  ShieldCheck,
  Users,
} from 'lucide-react'

export function GreenFeaturesGrid() {
  return (
    <div className="relative -mx-4 w-screen md:mx-0 md:max-w-[1220px]">
      {/* Background decorative elements */}
      <div className="absolute left-10 top-20 -z-10 h-60 w-60 rounded-full bg-green-500/5 blur-[80px] dark:bg-green-500/5"></div>
      <div className="absolute -top-10 right-20 -z-10 h-60 w-60 rounded-full bg-green-500/5 blur-[80px] dark:bg-green-500/5"></div>
      <div className="absolute bottom-10 right-10 -z-10 h-60 w-60 rounded-full bg-green-500/5 blur-[80px] dark:bg-green-500/5"></div>

      <div className="space-y-4">
        {/* First Row - 3 Features */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {/* CPU-Optimized Mining */}
          <div className="group relative h-full overflow-hidden border border-green-100/80 bg-white/70 p-6 backdrop-blur-sm transition-all duration-300 dark:border-green-900/30 dark:bg-gray-900/50 md:rounded-[20px] md:p-8">
            <div className="absolute -bottom-8 -right-8 h-32 w-32 rounded-full bg-green-400/5 blur-xl dark:bg-green-400/10"></div>
            <div className="relative">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-lg border border-green-100/80 bg-white/90 shadow-sm transition-colors duration-300 group-hover:bg-green-50 dark:border-green-900/30 dark:bg-gray-800/90 dark:group-hover:bg-gray-800">
                <Cpu className="h-7 w-7 text-green-600/80 dark:text-green-400" />
              </div>
              <h3 className="mb-2 text-[16px] font-bold text-gray-900 dark:text-white md:text-[18px]">
                CPU-Optimized Mining
              </h3>
              <p className="text-[14px] leading-relaxed text-gray-600 dark:text-gray-300 md:text-[15px]">
                VerusHash 2.2 algorithm is specifically designed for CPU mining,
                allowing ordinary devices to mine efficiently without
                specialized hardware. This democratizes mining while reducing
                energy waste.
              </p>
            </div>
          </div>

          {/* Efficient Merge Mining */}
          <div className="group relative h-full overflow-hidden border border-green-100/80 bg-gradient-to-br from-green-50/70 to-white p-6 backdrop-blur-sm transition-all duration-300 dark:border-green-900/30 dark:from-green-950/40 dark:to-gray-950 md:rounded-[20px] md:p-8">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(34,197,94,0.08),transparent_50%)] dark:bg-[radial-gradient(circle_at_top_right,rgba(34,197,94,0.15),transparent_50%)]"></div>
            <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-green-400/10 blur-2xl dark:bg-green-400/20"></div>
            <div className="relative">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-lg border border-green-100/80 bg-white/90 shadow-sm transition-colors duration-300 group-hover:bg-green-50 dark:border-green-900/30 dark:bg-gray-800/90 dark:group-hover:bg-gray-800">
                <GitMerge className="h-7 w-7 text-green-600/80 dark:text-green-400" />
              </div>
              <h3 className="mb-2 text-[16px] font-bold text-gray-900 dark:text-white md:text-[18px]">
                Efficient Merge Mining
              </h3>
              <p className="text-[14px] leading-relaxed text-gray-600 dark:text-gray-300 md:text-[15px]">
                Secure up to 22 PBaaS chains simultaneously with the same
                computational power. This maximizes efficiency by allowing
                multiple chains to benefit from the same energy input.
              </p>
            </div>
          </div>

          {/* Sustainable Design */}
          <div className="group relative h-full overflow-hidden border border-green-100/80 bg-gradient-to-br from-green-50/70 to-white p-6 backdrop-blur-sm transition-all duration-300 dark:border-green-900/30 dark:from-green-950/40 dark:to-gray-950 md:rounded-[20px] md:p-8">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(34,197,94,0.08),transparent_50%)] dark:bg-[radial-gradient(circle_at_top_right,rgba(34,197,94,0.15),transparent_50%)]"></div>
            <div className="absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-green-400/10 blur-2xl dark:bg-green-400/20"></div>
            <div className="relative">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-lg border border-green-100/80 bg-white/90 shadow-sm transition-colors duration-300 group-hover:bg-green-50 dark:border-green-900/30 dark:bg-gray-800/90 dark:group-hover:bg-gray-800">
                <Leaf className="h-7 w-7 text-green-600/80 dark:text-green-400" />
              </div>
              <h3 className="mb-2 text-[16px] font-bold text-gray-900 dark:text-white md:text-[18px]">
                Sustainable Design
              </h3>
              <p className="text-[14px] leading-relaxed text-gray-600 dark:text-gray-300 md:text-[15px]">
                Built from the ground up with environmental consciousness in
                mind. The scale-out architecture distributes computational load
                across multiple chains for greater efficiency.
              </p>
            </div>
          </div>
        </div>

        {/* Second Row - 3 Features */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {/* Hybrid Consensus */}
          <div className="group relative h-full overflow-hidden border border-green-100/80 bg-white/70 p-6 backdrop-blur-sm transition-all duration-300 dark:border-green-900/30 dark:bg-gray-900/50 md:rounded-[20px] md:p-8">
            <div className="absolute left-6 top-6 h-32 w-32 rounded-full bg-green-400/5 blur-xl dark:bg-green-400/10"></div>
            <div className="relative">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-lg border border-green-100/80 bg-white/90 shadow-sm transition-colors duration-300 group-hover:bg-green-50 dark:border-green-900/30 dark:bg-gray-800/90 dark:group-hover:bg-gray-800">
                <ShieldCheck className="h-7 w-7 text-green-600/80 dark:text-green-400" />
              </div>
              <h3 className="mb-2 text-[16px] font-bold text-gray-900 dark:text-white md:text-[18px]">
                Hybrid Consensus
              </h3>
              <p className="text-[14px] leading-relaxed text-gray-600 dark:text-gray-300 md:text-[15px]">
                Verus Proof of Power combines 50% proof-of-work with 50%
                proof-of-stake, cutting energy requirements while maintaining
                robust security and decentralization.
              </p>
            </div>
          </div>

          {/* Low-Power Mining */}
          <div className="group relative h-full overflow-hidden border border-green-100/80 bg-white/70 p-6 backdrop-blur-sm transition-all duration-300 dark:border-green-900/30 dark:bg-gray-900/50 md:rounded-[20px] md:p-8">
            <div className="absolute right-6 top-6 h-32 w-32 rounded-full bg-green-400/5 blur-xl dark:bg-green-400/10"></div>
            <div className="relative">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-lg border border-green-100/80 bg-white/90 shadow-sm transition-colors duration-300 group-hover:bg-green-50 dark:border-green-900/30 dark:bg-gray-800/90 dark:group-hover:bg-gray-800">
                <Battery className="h-7 w-7 text-green-600/80 dark:text-green-400" />
              </div>
              <h3 className="mb-2 text-[16px] font-bold text-gray-900 dark:text-white md:text-[18px]">
                Low-Power Mining
              </h3>
              <p className="text-[14px] leading-relaxed text-gray-600 dark:text-gray-300 md:text-[15px]">
                Mine effectively using mobile phones and ARM devices, which
                consume a fraction of the energy used by traditional mining
                equipment.
              </p>
            </div>
          </div>

          {/* Inclusive Staking */}
          <div className="group relative h-full overflow-hidden border border-green-100/80 bg-white/70 p-6 backdrop-blur-sm transition-all duration-300 dark:border-green-900/30 dark:bg-gray-900/50 md:rounded-[20px] md:p-8">
            <div className="absolute -bottom-8 -left-8 h-32 w-32 rounded-full bg-green-400/5 blur-xl dark:bg-green-400/10"></div>
            <div className="relative">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-lg border border-green-100/80 bg-white/90 shadow-sm transition-colors duration-300 group-hover:bg-green-50 dark:border-green-900/30 dark:bg-gray-800/90 dark:group-hover:bg-gray-800">
                <Users className="h-7 w-7 text-green-600/80 dark:text-green-400" />
              </div>
              <h3 className="mb-2 text-[16px] font-bold text-gray-900 dark:text-white md:text-[18px]">
                Inclusive Staking
              </h3>
              <p className="text-[14px] leading-relaxed text-gray-600 dark:text-gray-300 md:text-[15px]">
                Participate in network security through staking with any amount
                of VRSC. No minimum requirements means broader participation and
                better decentralization.
              </p>
            </div>
          </div>
        </div>

        {/* Third Row - 1 Feature (centered) */}
        <div className="flex justify-center">
          <div className="w-full max-w-md">
            {/* Monetize Commodity Hardware */}
            <div className="group relative h-full overflow-hidden border border-green-100/80 bg-gradient-to-br from-green-50/70 to-white p-6 backdrop-blur-sm transition-all duration-300 dark:border-green-900/30 dark:from-green-950/40 dark:to-gray-950 md:rounded-[20px] md:p-8">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(34,197,94,0.08),transparent_50%)] dark:bg-[radial-gradient(circle_at_top_right,rgba(34,197,94,0.15),transparent_50%)]"></div>
              <div className="absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-green-400/10 blur-2xl dark:bg-green-400/20"></div>
              <div className="relative">
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-lg border border-green-100/80 bg-white/90 shadow-sm transition-colors duration-300 group-hover:bg-green-50 dark:border-green-900/30 dark:bg-gray-800/90 dark:group-hover:bg-gray-800">
                  <MonitorSmartphone className="h-7 w-7 text-green-600/80 dark:text-green-400" />
                </div>
                <h3 className="mb-2 text-[16px] font-bold text-gray-900 dark:text-white md:text-[18px]">
                  Monetize Commodity Hardware
                </h3>
                <p className="text-[14px] leading-relaxed text-gray-600 dark:text-gray-300 md:text-[15px]">
                  Turn idle phones, computers, and ARM devices into
                  income-generating assets. No need for expensive, specialized
                  mining equipment—use multi-purpose devices you already own to
                  earn rewards.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
