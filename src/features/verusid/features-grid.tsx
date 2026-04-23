import {Database, Globe, Key, Shield, Wallet} from 'lucide-react'

export function FeaturesGrid() {
  return (
    <div className="relative -mx-4 mt-16 w-screen md:mx-0 md:mt-24 md:max-w-[1220px]">
      {/* Background decorative elements */}
      <div className="absolute left-10 top-20 -z-10 h-60 w-60 rounded-full bg-blue-500/5 blur-[80px] dark:bg-blue-500/5"></div>
      <div className="absolute -top-10 right-20 -z-10 h-60 w-60 rounded-full bg-blue-500/5 blur-[80px] dark:bg-blue-500/5"></div>
      <div className="absolute bottom-10 right-10 -z-10 h-60 w-60 rounded-full bg-blue-500/5 blur-[80px] dark:bg-blue-500/5"></div>

      <div className="grid grid-cols-1 gap-2 md:grid-cols-3 md:gap-4">
        {/* Left Column - 2 Features */}
        <div className="col-span-1 flex flex-col gap-4">
          {/* Feature 1 */}
          <div className="group relative flex-1 overflow-hidden border border-blue-100/80 bg-white/70 p-6 pb-12 backdrop-blur-sm transition-all duration-300 dark:border-blue-900/30 dark:bg-gray-900/50 md:rounded-[20px] md:p-8">
            <div className="absolute -bottom-8 -right-8 h-32 w-32 rounded-full bg-blue-400/5 blur-xl dark:bg-blue-400/10"></div>
            <div className="relative">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-lg border border-blue-100/80 bg-white/90 shadow-sm transition-colors duration-300 group-hover:bg-blue-50 dark:border-blue-900/30 dark:bg-gray-800/90 dark:group-hover:bg-gray-800">
                <Database className="h-7 w-7 text-verus-blue/80 dark:text-blue-400" />
              </div>
              <h3 className="mb-2 text-[16px] font-bold text-black dark:text-white md:text-[18px]">
                Your Personal Digital Database
              </h3>
              <p className="text-[14px] leading-relaxed text-gray-600 dark:text-gray-300 md:text-[15px]">
                Store your preferences, settings, and digital identity data in
                your own portable database. Take control of what information
                apps can access.
              </p>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="group relative flex-1 overflow-hidden border border-blue-100/80 bg-white/70 p-6 backdrop-blur-sm transition-all duration-300 dark:border-blue-900/30 dark:bg-gray-900/50 md:rounded-[20px] md:p-8">
            <div className="absolute left-6 top-6 h-32 w-32 rounded-full bg-blue-400/5 blur-xl dark:bg-blue-400/10"></div>
            <div className="relative">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-lg border border-blue-100/80 bg-white/90 shadow-sm transition-colors duration-300 group-hover:bg-blue-50 dark:border-blue-900/30 dark:bg-gray-800/90 dark:group-hover:bg-gray-800">
                <Key className="h-7 w-7 text-verus-blue/80 dark:text-blue-400" />
              </div>
              <h3 className="mb-2 text-[16px] font-bold text-black dark:text-white md:text-[18px]">
                True Data Ownership
              </h3>
              <p className="text-[14px] leading-relaxed text-gray-600 dark:text-gray-300 md:text-[15px]">
                Unlike traditional systems, you own and control your personal
                database. Your data stays with you, not scattered across
                platforms.
              </p>
            </div>
          </div>
        </div>

        {/* Center Column - 1 Feature */}
        <div className="col-span-1 h-full">
          <div className="group relative h-full overflow-hidden border border-blue-100/80 bg-gradient-to-br from-blue-50/70 to-white p-6 backdrop-blur-sm transition-all duration-300 dark:border-blue-900/30 dark:from-blue-950/40 dark:to-gray-950 md:rounded-[20px] md:p-8">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.08),transparent_50%)] dark:bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.15),transparent_50%)]"></div>
            <div className="absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-blue-400/10 blur-2xl dark:bg-blue-400/20"></div>
            <div className="relative">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-lg border border-blue-100/80 bg-white/90 shadow-sm transition-colors duration-300 group-hover:bg-blue-50 dark:border-blue-900/30 dark:bg-gray-800/90 dark:group-hover:bg-gray-800">
                <Globe className="h-7 w-7 text-verus-blue/80 dark:text-blue-400" />
              </div>
              <h3 className="mb-2 text-[16px] font-bold text-black dark:text-white md:text-[18px]">
                The Future of Digital Interaction
              </h3>
              <p className="text-[14px] leading-relaxed text-gray-600 dark:text-gray-300 md:text-[15px]">
                Experience password-free logins across platforms, seamless data
                portability between services, and user-controlled information
                sharing.
              </p>
            </div>
          </div>
        </div>

        {/* Right Column - 2 Features */}
        <div className="col-span-1 flex flex-col gap-4">
          {/* Feature 4 */}
          <div className="group relative flex-1 overflow-hidden border border-blue-100/80 bg-white/70 p-6 backdrop-blur-sm transition-all duration-300 dark:border-blue-900/30 dark:bg-gray-900/50 md:rounded-[20px] md:p-8">
            <div className="absolute right-6 top-6 h-32 w-32 rounded-full bg-blue-400/5 blur-xl dark:bg-blue-400/10"></div>
            <div className="relative">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-lg border border-blue-100/80 bg-white/90 shadow-sm transition-colors duration-300 group-hover:bg-blue-50 dark:border-blue-900/30 dark:bg-gray-800/90 dark:group-hover:bg-gray-800">
                <Shield className="h-7 w-7 text-verus-blue/80 dark:text-blue-400" />
              </div>
              <h3 className="mb-2 text-[16px] font-bold text-black dark:text-white md:text-[18px]">
                Privacy By Design
              </h3>
              <p className="text-[14px] leading-relaxed text-gray-600 dark:text-gray-300 md:text-[15px]">
                End-to-end encrypted communications, private transactions, and
                selective information sharing put you in complete control of
                your data.
              </p>
            </div>
          </div>

          {/* Feature 5 */}
          <div className="group relative flex-1 overflow-hidden border border-blue-100/80 bg-white/70 p-6 pb-12 backdrop-blur-sm transition-all duration-300 dark:border-blue-900/30 dark:bg-gray-900/50 md:rounded-[20px] md:p-8 md:pb-12">
            <div className="absolute -bottom-8 -left-8 h-32 w-32 rounded-full bg-blue-400/5 blur-xl dark:bg-blue-400/10"></div>
            <div className="relative">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-lg border border-blue-100/80 bg-white/90 shadow-sm transition-colors duration-300 group-hover:bg-blue-50 dark:border-blue-900/30 dark:bg-gray-800/90 dark:group-hover:bg-gray-800">
                <Wallet className="h-7 w-7 text-verus-blue/80 dark:text-blue-400" />
              </div>
              <h3 className="mb-2 text-[16px] font-bold text-black dark:text-white md:text-[18px]">
                Secure Asset Management
              </h3>
              <p className="text-[14px] leading-relaxed text-gray-600 dark:text-gray-300 md:text-[15px]">
                Store and manage cryptocurrencies, set up time-locked security
                vaults, secure your identity with the ability to revoke access
                and recover all assets if needed, and utilize multi-signature
                capabilities.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
