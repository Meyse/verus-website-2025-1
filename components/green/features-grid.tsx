import { Cpu, GitMerge, Leaf, ShieldCheck, Battery, Users } from "lucide-react"

export function GreenFeaturesGrid() {
  return (
    <div className="-mx-4 md:mx-0 w-screen md:max-w-[1220px] relative">
      {/* Background decorative elements */}
      <div className="absolute top-20 left-10 h-60 w-60 rounded-full bg-green-500/5 dark:bg-green-500/5 blur-[80px] -z-10"></div>
      <div className="absolute -top-10 right-20 h-60 w-60 rounded-full bg-green-500/5 dark:bg-green-500/5 blur-[80px] -z-10"></div>
      <div className="absolute bottom-10 right-10 h-60 w-60 rounded-full bg-green-500/5 dark:bg-green-500/5 blur-[80px] -z-10"></div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-4">
        {/* Left Column - 2 Features */}
        <div className="col-span-1 flex flex-col gap-4">
          {/* CPU-Optimized Mining */}
          <div className="flex-1 bg-white/70 dark:bg-gray-900/50 backdrop-blur-sm border border-green-100/80 dark:border-green-900/30 md:rounded-[20px] p-6 md:p-8 relative overflow-hidden group transition-all duration-300">
            <div className="absolute -bottom-8 -right-8 h-32 w-32 rounded-full bg-green-400/5 dark:bg-green-400/10 blur-xl"></div>
            <div className="relative">
              <div className="h-14 w-14 rounded-full bg-white/90 dark:bg-gray-800/90 border border-green-100/80 dark:border-green-900/30 group-hover:bg-green-50 dark:group-hover:bg-gray-800 flex items-center justify-center mb-6 transition-colors duration-300 shadow-sm">
                <Cpu className="h-7 w-7 text-green-600/80 dark:text-green-400" />
              </div>
              <h3 className="text-[16px] md:text-[18px] font-medium text-gray-900 dark:text-white mb-2">
                CPU-Optimized Mining
              </h3>
              <p className="text-[14px] md:text-[15px] text-gray-600 dark:text-gray-300 leading-relaxed">
                VerusHash 2.2 algorithm is specifically designed for CPU mining, allowing ordinary devices to mine efficiently without specialized hardware. This democratizes mining while reducing energy waste.
              </p>
            </div>
          </div>

          {/* Hybrid Consensus */}
          <div className="flex-1 bg-white/70 dark:bg-gray-900/50 backdrop-blur-sm border border-green-100/80 dark:border-green-900/30 md:rounded-[20px] p-6 md:p-8 relative overflow-hidden group transition-all duration-300">
            <div className="absolute top-6 left-6 h-32 w-32 rounded-full bg-green-400/5 dark:bg-green-400/10 blur-xl"></div>
            <div className="relative">
              <div className="h-14 w-14 rounded-full bg-white/90 dark:bg-gray-800/90 border border-green-100/80 dark:border-green-900/30 group-hover:bg-green-50 dark:group-hover:bg-gray-800 flex items-center justify-center mb-6 transition-colors duration-300 shadow-sm">
                <ShieldCheck className="h-7 w-7 text-green-600/80 dark:text-green-400" />
              </div>
              <h3 className="text-[16px] md:text-[18px] font-medium text-gray-900 dark:text-white mb-2">
                Hybrid Consensus
              </h3>
              <p className="text-[14px] md:text-[15px] text-gray-600 dark:text-gray-300 leading-relaxed">
                Verus Proof of Power combines 50% proof-of-work with 50% proof-of-stake, cutting energy requirements while maintaining robust security and decentralization.
              </p>
            </div>
          </div>
        </div>

        {/* Center Column - 2 Features */}
        <div className="col-span-1 flex flex-col gap-4">
          {/* Efficient Merge Mining */}
          <div className="flex-1 bg-gradient-to-br from-green-50/70 to-white dark:from-green-950/40 dark:to-gray-950 backdrop-blur-sm border border-green-100/80 dark:border-green-900/30 md:rounded-[20px] p-6 md:p-8 relative overflow-hidden group transition-all duration-300">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(34,197,94,0.08),transparent_50%)] dark:bg-[radial-gradient(circle_at_top_right,rgba(34,197,94,0.15),transparent_50%)]"></div>
            <div className="absolute -top-10 -right-10 h-40 w-40 rounded-full bg-green-400/10 dark:bg-green-400/20 blur-2xl"></div>
            <div className="relative">
              <div className="h-14 w-14 rounded-full bg-white/90 dark:bg-gray-800/90 border border-green-100/80 dark:border-green-900/30 group-hover:bg-green-50 dark:group-hover:bg-gray-800 flex items-center justify-center mb-6 transition-colors duration-300 shadow-sm">
                <GitMerge className="h-7 w-7 text-green-600/80 dark:text-green-400" />
              </div>
              <h3 className="text-[16px] md:text-[18px] font-medium text-gray-900 dark:text-white mb-2">
                Efficient Merge Mining
              </h3>
              <p className="text-[14px] md:text-[15px] text-gray-600 dark:text-gray-300 leading-relaxed">
                Secure up to 22 PBaaS chains simultaneously with the same computational power. This maximizes efficiency by allowing multiple chains to benefit from the same energy input.
              </p>
            </div>
          </div>

          {/* Low-Power Mining */}
          <div className="flex-1 bg-white/70 dark:bg-gray-900/50 backdrop-blur-sm border border-green-100/80 dark:border-green-900/30 md:rounded-[20px] p-6 md:p-8 relative overflow-hidden group transition-all duration-300">
            <div className="absolute top-6 right-6 h-32 w-32 rounded-full bg-green-400/5 dark:bg-green-400/10 blur-xl"></div>
            <div className="relative">
              <div className="h-14 w-14 rounded-full bg-white/90 dark:bg-gray-800/90 border border-green-100/80 dark:border-green-900/30 group-hover:bg-green-50 dark:group-hover:bg-gray-800 flex items-center justify-center mb-6 transition-colors duration-300 shadow-sm">
                <Battery className="h-7 w-7 text-green-600/80 dark:text-green-400" />
              </div>
              <h3 className="text-[16px] md:text-[18px] font-medium text-gray-900 dark:text-white mb-2">
                Low-Power Mining
              </h3>
              <p className="text-[14px] md:text-[15px] text-gray-600 dark:text-gray-300 leading-relaxed">
                Mine effectively using mobile phones and ARM devices, which consume a fraction of the energy used by traditional mining equipment.
              </p>
            </div>
          </div>
        </div>

        {/* Right Column - 2 Features */}
        <div className="col-span-1 flex flex-col gap-4">
          {/* Sustainable Design */}
          <div className="flex-1 bg-gradient-to-br from-green-50/70 to-white dark:from-green-950/40 dark:to-gray-950 backdrop-blur-sm border border-green-100/80 dark:border-green-900/30 md:rounded-[20px] p-6 md:p-8 relative overflow-hidden group transition-all duration-300">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(34,197,94,0.08),transparent_50%)] dark:bg-[radial-gradient(circle_at_top_right,rgba(34,197,94,0.15),transparent_50%)]"></div>
            <div className="absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-green-400/10 dark:bg-green-400/20 blur-2xl"></div>
            <div className="relative">
              <div className="h-14 w-14 rounded-full bg-white/90 dark:bg-gray-800/90 border border-green-100/80 dark:border-green-900/30 group-hover:bg-green-50 dark:group-hover:bg-gray-800 flex items-center justify-center mb-6 transition-colors duration-300 shadow-sm">
                <Leaf className="h-7 w-7 text-green-600/80 dark:text-green-400" />
              </div>
              <h3 className="text-[16px] md:text-[18px] font-medium text-gray-900 dark:text-white mb-2">
                Sustainable Design
              </h3>
              <p className="text-[14px] md:text-[15px] text-gray-600 dark:text-gray-300 leading-relaxed">
                Built from the ground up with environmental consciousness in mind. The scale-out architecture distributes computational load across multiple chains for greater efficiency.
              </p>
            </div>
          </div>

          {/* Inclusive Staking */}
          <div className="flex-1 bg-white/70 dark:bg-gray-900/50 backdrop-blur-sm border border-green-100/80 dark:border-green-900/30 md:rounded-[20px] p-6 md:p-8 relative overflow-hidden group transition-all duration-300">
            <div className="absolute -bottom-8 -left-8 h-32 w-32 rounded-full bg-green-400/5 dark:bg-green-400/10 blur-xl"></div>
            <div className="relative">
              <div className="h-14 w-14 rounded-full bg-white/90 dark:bg-gray-800/90 border border-green-100/80 dark:border-green-900/30 group-hover:bg-green-50 dark:group-hover:bg-gray-800 flex items-center justify-center mb-6 transition-colors duration-300 shadow-sm">
                <Users className="h-7 w-7 text-green-600/80 dark:text-green-400" />
              </div>
              <h3 className="text-[16px] md:text-[18px] font-medium text-gray-900 dark:text-white mb-2">
                Inclusive Staking
              </h3>
              <p className="text-[14px] md:text-[15px] text-gray-600 dark:text-gray-300 leading-relaxed">
                Participate in network security through staking with any amount of VRSC. No minimum requirements means broader participation and better decentralization.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 