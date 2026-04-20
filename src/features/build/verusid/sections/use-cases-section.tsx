import {
  Building,
  Calendar,
  Globe,
  ShieldCheck,
  Users,
  Wallet,
} from 'lucide-react'

/*
 * Updated: Transformed the use cases section to have a modern SaaS-like design
 * with dark mode support, decorative background elements, and consistent card styling.
 */
export function UseCasesSection() {
  return (
    <section className="relative my-24">
      <div className="absolute left-0 right-0 top-0 mx-auto h-[1px] max-w-7xl bg-gradient-to-r from-transparent via-blue-300/30 to-transparent dark:via-blue-700/20"></div>
      <div className="absolute right-10 top-20 -z-10 h-60 w-60 rounded-full bg-blue-500/5 blur-[80px] dark:bg-blue-500/5"></div>
      <div className="absolute bottom-20 left-20 -z-10 h-60 w-60 rounded-full bg-blue-500/5 blur-[80px] dark:bg-blue-500/5"></div>

      {/* Centered Title */}
      <div className="mb-12 text-center">
        <h2 className="mb-6 text-[28px] font-medium leading-[1.2] tracking-tight text-gray-800 dark:text-white md:text-[55px]">
          Real-World Use Cases
        </h2>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8">
        {/* Tokenized Communities */}
        <div className="group relative overflow-hidden rounded-xl border border-blue-100/80 bg-white/70 p-6 backdrop-blur-sm transition-all duration-300 dark:border-blue-900/30 dark:bg-gray-900/50 md:p-8">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.08),transparent_50%)] dark:bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.15),transparent_50%)]"></div>
          <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-blue-400/10 blur-2xl dark:bg-blue-400/20"></div>
          <div className="relative">
            <div className="mb-6 flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-blue-100/80 bg-white/90 text-blue-600 shadow-sm dark:border-blue-900/30 dark:bg-gray-800/90 dark:text-blue-400">
                <Users className="h-6 w-6" />
              </div>
              <h3 className="text-[18px] font-medium text-gray-900 dark:text-white md:text-[22px]">
                Tokenized Communities
              </h3>
            </div>
            <div className="space-y-6">
              <p className="text-[15px] leading-relaxed text-gray-600 dark:text-gray-300">
                Create tokenized communities where membership and governance are
                managed through VerusIDs and associated tokens.
              </p>
              <div className="space-y-4">
                <div className="rounded-xl border border-blue-100/60 bg-white/80 px-5 py-4 backdrop-blur-sm dark:border-blue-900/20 dark:bg-gray-800/50">
                  <h4 className="mb-2 text-[16px] font-medium text-gray-900 dark:text-white">
                    Governance Tokens
                  </h4>
                  <p className="text-[14px] leading-relaxed text-gray-600 dark:text-gray-300">
                    Issue governance tokens to community members, enabling
                    voting on proposals and community decisions.
                  </p>
                </div>

                <div className="rounded-xl border border-blue-100/60 bg-white/80 px-5 py-4 backdrop-blur-sm dark:border-blue-900/20 dark:bg-gray-800/50">
                  <h4 className="mb-2 text-[16px] font-medium text-gray-900 dark:text-white">
                    Digital Collectives
                  </h4>
                  <p className="text-[14px] leading-relaxed text-gray-600 dark:text-gray-300">
                    Create digital collectives with shared ownership and
                    decision-making capabilities through VerusID namespaces.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Enterprise Solutions */}
        <div className="group relative overflow-hidden rounded-xl border border-blue-100/80 bg-white/70 p-6 backdrop-blur-sm transition-all duration-300 dark:border-blue-900/30 dark:bg-gray-900/50 md:p-8">
          <div className="absolute -bottom-8 -right-8 h-32 w-32 rounded-full bg-blue-400/5 blur-xl dark:bg-blue-400/10"></div>
          <div className="relative">
            <div className="mb-6 flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-blue-100/80 bg-white/90 text-blue-600 shadow-sm dark:border-blue-900/30 dark:bg-gray-800/90 dark:text-blue-400">
                <Building className="h-6 w-6" />
              </div>
              <h3 className="text-[18px] font-medium text-gray-900 dark:text-white md:text-[22px]">
                Enterprise Solutions
              </h3>
            </div>
            <div className="space-y-6">
              <p className="text-[15px] leading-relaxed text-gray-600 dark:text-gray-300">
                Deploy enterprise-grade identity and digital asset solutions
                with VerusID's powerful security and management features.
              </p>
              <div className="space-y-4">
                <div className="rounded-xl border border-blue-100/60 bg-white/80 px-5 py-4 backdrop-blur-sm dark:border-blue-900/20 dark:bg-gray-800/50">
                  <h4 className="mb-2 text-[16px] font-medium text-gray-900 dark:text-white">
                    Asset Tokenization
                  </h4>
                  <p className="text-[14px] leading-relaxed text-gray-600 dark:text-gray-300">
                    Tokenize real-world assets and manage them through
                    verifiable identities in a secure blockchain environment.
                  </p>
                </div>

                <div className="rounded-xl border border-blue-100/60 bg-white/80 px-5 py-4 backdrop-blur-sm dark:border-blue-900/20 dark:bg-gray-800/50">
                  <h4 className="mb-2 text-[16px] font-medium text-gray-900 dark:text-white">
                    Supply Chain Tracking
                  </h4>
                  <p className="text-[14px] leading-relaxed text-gray-600 dark:text-gray-300">
                    Track products and components through the entire supply
                    chain with immutable identity records.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Decentralized Social Networks */}
        <div className="group relative overflow-hidden rounded-xl border border-blue-100/80 bg-gradient-to-br from-blue-50/70 to-white p-6 backdrop-blur-sm transition-all duration-300 dark:border-blue-900/30 dark:from-blue-950/40 dark:to-gray-950 md:p-8">
          <div className="absolute left-6 top-6 h-32 w-32 rounded-full bg-blue-400/5 blur-xl dark:bg-blue-400/10"></div>
          <div className="relative">
            <div className="mb-6 flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-blue-100/80 bg-white/90 text-blue-600 shadow-sm dark:border-blue-900/30 dark:bg-gray-800/90 dark:text-blue-400">
                <Globe className="h-6 w-6" />
              </div>
              <h3 className="text-[18px] font-medium text-gray-900 dark:text-white md:text-[22px]">
                Decentralized Social
              </h3>
            </div>
            <div className="space-y-6">
              <p className="text-[15px] leading-relaxed text-gray-600 dark:text-gray-300">
                Build decentralized social platforms where users own their
                identities, data, and social connections.
              </p>
              <div className="space-y-4">
                <div className="rounded-xl border border-blue-100/60 bg-white/80 px-5 py-4 backdrop-blur-sm dark:border-blue-900/20 dark:bg-gray-800/50">
                  <h4 className="mb-2 text-[16px] font-medium text-gray-900 dark:text-white">
                    Self-Sovereign Profiles
                  </h4>
                  <p className="text-[14px] leading-relaxed text-gray-600 dark:text-gray-300">
                    Users control their profiles, content, and connections
                    through their own VerusIDs across multiple platforms.
                  </p>
                </div>

                <div className="rounded-xl border border-blue-100/60 bg-white/80 px-5 py-4 backdrop-blur-sm dark:border-blue-900/20 dark:bg-gray-800/50">
                  <h4 className="mb-2 text-[16px] font-medium text-gray-900 dark:text-white">
                    Content Monetization
                  </h4>
                  <p className="text-[14px] leading-relaxed text-gray-600 dark:text-gray-300">
                    Enable direct monetization of content through tokens tied to
                    creator VerusIDs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Event Management */}
        <div className="group relative overflow-hidden rounded-xl border border-blue-100/80 bg-gradient-to-br from-blue-50/70 to-white p-6 backdrop-blur-sm transition-all duration-300 dark:border-blue-900/30 dark:from-blue-950/40 dark:to-gray-950 md:p-8">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(59,130,246,0.08),transparent_50%)] dark:bg-[radial-gradient(circle_at_bottom_right,rgba(59,130,246,0.15),transparent_50%)]"></div>
          <div className="absolute -bottom-8 -left-8 h-40 w-40 rounded-full bg-blue-400/10 blur-2xl dark:bg-blue-400/20"></div>
          <div className="relative">
            <div className="mb-6 flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-blue-100/80 bg-white/90 text-blue-600 shadow-sm dark:border-blue-900/30 dark:bg-gray-800/90 dark:text-blue-400">
                <Calendar className="h-6 w-6" />
              </div>
              <h3 className="text-[18px] font-medium text-gray-900 dark:text-white md:text-[22px]">
                Event Management
              </h3>
            </div>
            <div className="space-y-6">
              <p className="text-[15px] leading-relaxed text-gray-600 dark:text-gray-300">
                Create verifiable and fraud-resistant event ticketing and
                management systems using VerusID and tokenization.
              </p>
              <div className="space-y-4">
                <div className="rounded-xl border border-blue-100/60 bg-white/80 px-5 py-4 backdrop-blur-sm dark:border-blue-900/20 dark:bg-gray-800/50">
                  <h4 className="mb-2 text-[16px] font-medium text-gray-900 dark:text-white">
                    NFT Ticketing
                  </h4>
                  <p className="text-[14px] leading-relaxed text-gray-600 dark:text-gray-300">
                    Issue verifiable and transferable tickets as NFTs tied to
                    attendee VerusIDs.
                  </p>
                </div>

                <div className="rounded-xl border border-blue-100/60 bg-white/80 px-5 py-4 backdrop-blur-sm dark:border-blue-900/20 dark:bg-gray-800/50">
                  <h4 className="mb-2 text-[16px] font-medium text-gray-900 dark:text-white">
                    Credential Verification
                  </h4>
                  <p className="text-[14px] leading-relaxed text-gray-600 dark:text-gray-300">
                    Provide secure verification for event entry and special
                    access with privacy-preserving features.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Financial Applications */}
        <div className="group relative overflow-hidden rounded-xl border border-blue-100/80 bg-white/70 p-6 backdrop-blur-sm transition-all duration-300 dark:border-blue-900/30 dark:bg-gray-900/50 md:p-8">
          <div className="absolute -bottom-8 -right-8 h-32 w-32 rounded-full bg-blue-400/5 blur-xl dark:bg-blue-400/10"></div>
          <div className="relative">
            <div className="mb-6 flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-blue-100/80 bg-white/90 text-blue-600 shadow-sm dark:border-blue-900/30 dark:bg-gray-800/90 dark:text-blue-400">
                <Wallet className="h-6 w-6" />
              </div>
              <h3 className="text-[18px] font-medium text-gray-900 dark:text-white md:text-[22px]">
                Financial Applications
              </h3>
            </div>
            <div className="space-y-6">
              <p className="text-[15px] leading-relaxed text-gray-600 dark:text-gray-300">
                Build financial applications with verifiable identities and
                programmable currencies using VerusID's capabilities.
              </p>
              <div className="space-y-4">
                <div className="rounded-xl border border-blue-100/60 bg-white/80 px-5 py-4 backdrop-blur-sm dark:border-blue-900/20 dark:bg-gray-800/50">
                  <h4 className="mb-2 text-[16px] font-medium text-gray-900 dark:text-white">
                    DeFi Platforms
                  </h4>
                  <p className="text-[14px] leading-relaxed text-gray-600 dark:text-gray-300">
                    Build decentralized finance platforms with identity-based
                    access controls and verifiable transactions.
                  </p>
                </div>

                <div className="rounded-xl border border-blue-100/60 bg-white/80 px-5 py-4 backdrop-blur-sm dark:border-blue-900/20 dark:bg-gray-800/50">
                  <h4 className="mb-2 text-[16px] font-medium text-gray-900 dark:text-white">
                    Multi-Chain Applications
                  </h4>
                  <p className="text-[14px] leading-relaxed text-gray-600 dark:text-gray-300">
                    Create financial applications that operate across multiple
                    blockchains with unified identity.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Identity & Privacy */}
        <div className="group relative overflow-hidden rounded-xl border border-blue-100/80 bg-white/70 p-6 backdrop-blur-sm transition-all duration-300 dark:border-blue-900/30 dark:bg-gray-900/50 md:p-8">
          <div className="absolute left-6 top-6 h-32 w-32 rounded-full bg-blue-400/5 blur-xl dark:bg-blue-400/10"></div>
          <div className="relative">
            <div className="mb-6 flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-blue-100/80 bg-white/90 text-blue-600 shadow-sm dark:border-blue-900/30 dark:bg-gray-800/90 dark:text-blue-400">
                <ShieldCheck className="h-6 w-6" />
              </div>
              <h3 className="text-[18px] font-medium text-gray-900 dark:text-white md:text-[22px]">
                Identity & Privacy
              </h3>
            </div>
            <div className="space-y-6">
              <p className="text-[15px] leading-relaxed text-gray-600 dark:text-gray-300">
                Implement privacy-focused identity solutions that put users in
                control of their personal data.
              </p>
              <div className="space-y-4">
                <div className="rounded-xl border border-blue-100/60 bg-white/80 px-5 py-4 backdrop-blur-sm dark:border-blue-900/20 dark:bg-gray-800/50">
                  <h4 className="mb-2 text-[16px] font-medium text-gray-900 dark:text-white">
                    Zero-Knowledge Proofs
                  </h4>
                  <p className="text-[14px] leading-relaxed text-gray-600 dark:text-gray-300">
                    Enable users to prove identity attributes without revealing
                    sensitive information using Verus privacy features.
                  </p>
                </div>

                <div className="rounded-xl border border-blue-100/60 bg-white/80 px-5 py-4 backdrop-blur-sm dark:border-blue-900/20 dark:bg-gray-800/50">
                  <h4 className="mb-2 text-[16px] font-medium text-gray-900 dark:text-white">
                    Identity Verification
                  </h4>
                  <p className="text-[14px] leading-relaxed text-gray-600 dark:text-gray-300">
                    Create KYC and identity verification systems that preserve
                    user privacy while meeting compliance requirements.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
