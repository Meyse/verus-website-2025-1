import {env} from '@/configs/env'
import {ArrowLeftRight, Layers, Network} from 'lucide-react'
import {FaMedium} from 'react-icons/fa'

// Updated component with dark mode support and improved styling
export function ScalingSection() {
  return (
    <div className="-mx-4 mt-4 w-screen md:mx-0 md:mt-4 md:max-w-[1220px]">
      <div className="w-full border border-gray-200 bg-white/90 p-8 shadow-[0_4px_40px_-12px_rgba(0,0,0,0.1)] backdrop-blur-sm dark:border-gray-800 dark:bg-gray-900/90 dark:shadow-[0_4px_40px_-12px_rgba(0,0,0,0.3)] md:rounded-lg md:p-32">
        <div className="flex flex-col gap-8 md:flex-row md:gap-16">
          {/* Info Text */}
          <div className="w-full md:w-2/3">
            <h2 className="mb-6 text-[22px] font-medium leading-[1.1] tracking-tight text-verus-blue dark:text-white md:text-[40px]">
              A multi-chain protocol designed to scale for world demand.
            </h2>
            <div className="space-y-4">
              <p className="text-[14px] leading-[1.8] tracking-tight text-gray-700 dark:text-gray-300 md:text-[15px]">
                Verus takes a fundamentally different approach to blockchain
                scalability. Rather than forcing all activity onto a single
                chain, Verus enables an unlimited network of blockchains—each
                inheriting the full power of Verus's native features. These
                include built-in DeFi capabilities, privacy-preserving
                technology, decentralized identity, and seamless cross-chain
                connectivity.
              </p>
              <p className="text-[14px] leading-[1.8] tracking-tight text-gray-700 dark:text-gray-300 md:text-[15px]">
                What makes this possible? The worldwide network of miners and
                stakers that maintains these chains operates completely
                rent-free. No gatekeepers, no excess fees—just pure
                infrastructure for public use.
              </p>
              <p className="text-[14px] leading-[1.8] tracking-tight text-gray-700 dark:text-gray-300 md:text-[15px]">
                While other protocols chase higher transactions per second on a
                single chain—inevitably leading to bottlenecks and security
                compromises—Verus scales naturally through its PBaaS (Public
                Blockchains as a Service) architecture. Any organization,
                community, business or individual can launch their own highly
                capable blockchain without writing code, creating a network that
                grows organically with demand, similar to how the internet
                evolved.
              </p>
              <p className="text-[14px] leading-[1.8] tracking-tight text-gray-700 dark:text-gray-300 md:text-[15px]">
                These aren't second-class "Layer 2" solutions. Each PBaaS chain
                operates with full consensus-level security, matching the main
                chain's capabilities while maintaining seamless interoperability
                across the entire network. Whether you're transferring value,
                converting currencies, or managing digital identities, every
                operation is secured by the core protocol itself—not vulnerable
                smart contracts.
              </p>
            </div>

            <div className="mt-8 flex flex-col gap-4">
              {/* Medium Article Link - Styled like homepage */}
              <a
                href={`${env.NEXT_PUBLIC_VERUS_MEDIUM}/verus-internet-protocol-vip-provable-decentralized-cross-chain-communication-8d9414a429c5`}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex w-fit items-center gap-2 rounded-lg border border-blue-200 bg-blue-50/80 px-5 py-3 text-[13px] text-blue-600 backdrop-blur-sm transition-all duration-300 hover:border-blue-300 hover:bg-blue-50 hover:text-blue-700 dark:border-blue-800/40 dark:bg-blue-950/40 dark:text-blue-300 dark:hover:border-blue-700/60 dark:hover:bg-blue-950/50 dark:hover:text-blue-200 md:text-[15px]"
              >
                <FaMedium className="h-5 w-5 text-gray-700 dark:text-gray-300" />
                <span>
                  Verus Internet Protocol (VIP) — Provable, Decentralized
                  Cross-chain Communication
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="ml-1 h-4 w-4 transition-all duration-300 group-hover:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </a>

              {/* Second Medium Article Link */}
              <a
                href={`${env.NEXT_PUBLIC_VERUS_MEDIUM}/scalability-decentralization-security-what-trilemma-8d2d6869924d`}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex w-fit items-center gap-2 rounded-lg border border-blue-200 bg-blue-50/80 px-5 py-3 text-[13px] text-blue-600 backdrop-blur-sm transition-all duration-300 hover:border-blue-300 hover:bg-blue-50 hover:text-blue-700 dark:border-blue-800/40 dark:bg-blue-950/40 dark:text-blue-300 dark:hover:border-blue-700/60 dark:hover:bg-blue-950/50 dark:hover:text-blue-200 md:text-[15px]"
              >
                <FaMedium className="h-5 w-5 text-gray-700 dark:text-gray-300" />
                <span>
                  Scalability, Decentralization & Security — What Trilemma?
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="ml-1 h-4 w-4 transition-all duration-300 group-hover:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </a>
            </div>
          </div>

          {/* Features */}
          <div className="w-full border-gray-200 dark:border-gray-700 md:w-1/3 md:border-l md:pl-16">
            <div className="space-y-8">
              {/* Unlimited Scaling */}
              <div className="group">
                <div className="mb-3 flex items-center gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-verus-blue/10 dark:bg-blue-900/30">
                    <Network className="h-5 w-5 text-verus-blue dark:text-blue-400" />
                  </div>
                  <h3 className="text-[16px] font-medium text-gray-900 dark:text-white md:text-[18px]">
                    Unlimited Scaling
                  </h3>
                </div>
                <div className="rounded-lg bg-gradient-to-r from-blue-50 via-blue-50/50 to-transparent p-4 dark:from-blue-900/20 dark:via-blue-900/10 dark:to-transparent">
                  <p className="text-[13px] leading-relaxed text-gray-700 dark:text-gray-300">
                    While others chase higher transactions per second on a
                    single chain, Verus scales through parallel PBaaS
                    chains—each processing 75-800 TPS. Like adding servers to
                    the internet, there's no limit to how many chains you can
                    deploy, creating true global scalability without
                    compromising security.
                  </p>
                </div>
              </div>

              {/* Power in Numbers */}
              <div className="group">
                <div className="mb-3 flex items-center gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-verus-blue/10 dark:bg-blue-900/30">
                    <Layers className="h-5 w-5 text-verus-blue dark:text-blue-400" />
                  </div>
                  <h3 className="text-[16px] font-medium text-gray-900 dark:text-white md:text-[18px]">
                    Power in Numbers
                  </h3>
                </div>
                <div className="rounded-lg bg-gradient-to-r from-blue-50 via-blue-50/50 to-transparent p-4 dark:from-blue-900/20 dark:via-blue-900/10 dark:to-transparent">
                  <p className="text-[13px] leading-relaxed text-gray-700 dark:text-gray-300">
                    Miners can simultaneously secure up to 22 chains with the
                    same computational power, while staking across unlimited
                    chains. This unique approach strengthens the entire network
                    as it grows.
                  </p>
                </div>
              </div>

              {/* True Interoperability */}
              <div className="group">
                <div className="mb-3 flex items-center gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-verus-blue/10 dark:bg-blue-900/30">
                    <ArrowLeftRight className="h-5 w-5 text-verus-blue dark:text-blue-400" />
                  </div>
                  <h3 className="text-[16px] font-medium text-gray-900 dark:text-white md:text-[18px]">
                    True Interoperability
                  </h3>
                </div>
                <div className="rounded-lg bg-gradient-to-r from-blue-50 via-blue-50/50 to-transparent p-4 dark:from-blue-900/20 dark:via-blue-900/10 dark:to-transparent">
                  <p className="text-[13px] leading-relaxed text-gray-700 dark:text-gray-300">
                    Unlike traditional bridges built on vulnerable smart
                    contracts, Verus enables native cross-chain communication
                    through its Verus Internet Protocol (VIP). Every transfer is
                    secured by consensus—not centralized intermediaries or
                    complex code.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
