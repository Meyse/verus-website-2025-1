import {env} from '@/configs/env'

import {Download} from 'lucide-react'

// Updated component with dark mode support and improved styling
export function VisionMissionSection() {
   
  return (
    <div className="relative -mx-4 mt-8 flex w-screen flex-col md:mx-0 md:mt-24 md:max-w-[1220px] md:flex-row">
      {/* Background decorative elements */}
      <div className="absolute left-10 top-20 -z-10 h-60 w-60 rounded-full bg-blue-500/5 blur-[80px] dark:bg-blue-500/10"></div>
      <div className="absolute -top-10 right-20 -z-10 h-60 w-60 rounded-full bg-blue-500/5 blur-[80px] dark:bg-blue-500/10"></div>
      <div className="absolute bottom-10 right-10 -z-10 h-60 w-60 rounded-full bg-blue-500/5 blur-[80px] dark:bg-blue-500/10"></div>

      {/* Content container with shared styling */}
      <div className="relative z-0 flex w-full flex-col overflow-hidden rounded-none border border-blue-100/80 backdrop-blur-sm dark:border-blue-900/30 md:flex-row md:rounded-[20px]">
        {/* Vision Box */}
        <div className="group relative w-full bg-white/70 p-8 transition-all duration-300 hover:shadow-lg dark:bg-gray-900/50 dark:hover:shadow-blue-900/20 md:w-1/2 md:p-16">
          <div className="absolute left-10 top-10 h-32 w-32 rounded-full bg-blue-400/5 blur-xl dark:bg-blue-400/10"></div>
          <div className="relative">
            <h2 className="mb-4 text-[18px] font-medium leading-[1.1] tracking-tight text-gray-900 dark:text-white md:mb-6 md:text-[22px]">
              Vision
            </h2>
            <p className="text-[14px] font-normal leading-[1.8] tracking-tight text-gray-700 dark:text-gray-300 md:text-[15px]">
              A world where digital infrastructure favors truth, privacy, and
              community power—enabling individuals to participate directly in a
              fair digital economy while keeping sovereign control over personal
              funds, data and identity.
            </p>
            <a
              href="/papers/VerusVision.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-8 flex items-center gap-2 text-[14px] text-verus-blue transition-all duration-300 hover:underline dark:text-blue-400 md:mt-8 md:text-[15px]"
            >
              <Download className="h-4 w-4 opacity-50 transition-opacity group-hover:opacity-100" />
              <span className="transition-transform duration-300 group-hover:translate-x-0.5">
                Download: Vision Paper
              </span>
            </a>
          </div>
        </div>

        {/* Divider - Vertical on desktop, Horizontal on mobile */}
        <div className="h-[1px] w-full bg-blue-100/80 dark:bg-blue-900/30 md:h-auto md:w-[1px] md:self-stretch" />

        {/* Mission Box */}
        <div className="group relative w-full bg-gradient-to-br from-blue-50/70 to-white p-8 transition-all duration-300 hover:shadow-lg dark:from-blue-950/40 dark:to-gray-950 dark:hover:shadow-blue-900/20 md:w-1/2 md:p-16">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.08),transparent_50%)] dark:bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.15),transparent_50%)]"></div>
          <div className="absolute -bottom-10 -right-10 h-40 w-40 rounded-full bg-blue-400/10 blur-2xl dark:bg-blue-400/20"></div>
          <div className="relative">
            <h2 className="mb-4 text-[18px] font-medium leading-[1.1] tracking-tight text-gray-900 dark:text-white md:mb-6 md:text-[22px]">
              Mission
            </h2>
            <p className="mb-8 text-[14px] font-normal leading-[1.8] tracking-tight text-gray-700 dark:text-gray-300 md:text-[15px]">
              To build open, secure, public blockchain infrastructure with
              consensus-level verification of core primitives, including
              sovereign identity, currencies, fair DeFi, and data, all with
              verifiable privacy-preserving technology and fair participation—a
              network where truth and cooperation emerge from use.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
