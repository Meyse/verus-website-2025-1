import Link from 'next/link'

import {env} from '@/configs/env'
import {Check, Download} from 'lucide-react'
import {IoLogoDiscord} from 'react-icons/io5'

export function GetStartedSections() {
  return (
    <div className="flex flex-col gap-8 md:max-w-[1220px]">
      {/* Get a Wallet Section */}
      <div className="w-full overflow-hidden border border-gray-200 bg-white/80 shadow-[0_4px_40px_-12px_rgba(0,0,0,0.1)] backdrop-blur-sm dark:border-gray-800 dark:bg-gray-900/80 dark:shadow-[0_4px_40px_-12px_rgba(0,0,0,0.3)] md:rounded-lg">
        <div className="border-b border-gray-200 bg-gradient-to-br from-blue-50/70 to-white p-8 dark:border-gray-800 dark:from-blue-950/40 dark:to-gray-950">
          <div className="flex items-center gap-4">
            <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-verus-blue/10 dark:bg-blue-900/30 md:h-12 md:w-12">
              <Download className="h-5 w-5 text-verus-blue dark:text-blue-400 md:h-6 md:w-6" />
            </div>
            <div>
              <h2 className="text-[18px] font-medium text-gray-900 dark:text-white md:text-[22px]">
                Get a wallet.
              </h2>
              <p className="text-[14px] text-gray-700 dark:text-gray-300 md:max-w-[700px] md:text-[16px]">
                Choose the wallet that best fits your needs and start securely
                managing your digital assets.
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-8 p-8 md:flex-row">
          <div className="w-full md:w-1/2">
            <h3 className="mb-4 text-[16px] font-medium text-gray-900 dark:text-white md:text-[18px]">
              Available Wallet Options
            </h3>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="mt-0.5 flex h-6 w-6 items-center justify-center rounded-full bg-[rgba(0,170,37,1)] dark:bg-green-600">
                  <Check className="h-4 w-4 text-white" />
                </div>
                <div>
                  <span className="block text-[14px] font-medium text-gray-900 dark:text-white md:text-[16px]">
                    Verus Desktop
                  </span>
                  <span className="text-[13px] text-gray-600 dark:text-gray-400 md:text-[14px]">
                    Full-featured desktop wallet for Windows, macOS, and Linux
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="mt-0.5 flex h-6 w-6 items-center justify-center rounded-full bg-[rgba(0,170,37,1)] dark:bg-green-600">
                  <Check className="h-4 w-4 text-white" />
                </div>
                <div>
                  <span className="block text-[14px] font-medium text-gray-900 dark:text-white md:text-[16px]">
                    Verus Mobile
                  </span>
                  <span className="text-[13px] text-gray-600 dark:text-gray-400 md:text-[14px]">
                    Take your wallet on the go. For iOS and Android.
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="mt-0.5 flex h-6 w-6 items-center justify-center rounded-full bg-[rgba(0,170,37,1)] dark:bg-green-600">
                  <Check className="h-4 w-4 text-white" />
                </div>
                <div>
                  <span className="block text-[14px] font-medium text-gray-900 dark:text-white md:text-[16px]">
                    CLI Wallet
                  </span>
                  <span className="text-[13px] text-gray-600 dark:text-gray-400 md:text-[14px]">
                    Advanced option for command-line users and technical setups.
                    Access to full protocol functionality and service
                    deployment.
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="flex w-full flex-col border-gray-200 dark:border-gray-800 md:w-1/2 md:border-l md:pl-8">
            <div className="flex-1">
              <h3 className="mb-4 text-[16px] font-medium text-gray-900 dark:text-white md:text-[18px]">
                Getting Started
              </h3>
              <p className="mb-6 text-[14px] text-gray-700 dark:text-gray-300 md:text-[15px]">
                Choose a wallet that matches your needs. Verus Desktop offers
                the most complete features (as a full node), while Mobile offers
                convenience on the go.
              </p>
              <p className="mb-6 w-fit rounded-md border border-amber-200/50 bg-amber-50/50 px-3 py-2 text-[13px] text-amber-800 dark:border-amber-700/30 dark:bg-amber-900/20 dark:text-amber-300 md:text-[14px]">
                Remember to securely back up your wallet seed phrase and private
                keys!
              </p>
            </div>

            <Link
              href="/wallet"
              className="group flex h-[40px] w-full items-center justify-center self-start rounded-lg border border-blue-200 bg-white/80 px-8 text-[14px] font-medium text-verus-blue backdrop-blur-sm transition-all duration-300 hover:border-blue-300 hover:text-blue-600 dark:border-blue-800/60 dark:bg-blue-950/80 dark:text-blue-300 dark:hover:border-blue-700 dark:hover:text-blue-200 md:h-[50px] md:w-fit md:text-[16px]"
            >
              Download a wallet
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
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
            </Link>
          </div>
        </div>
      </div>

      {/* Get VRSC Section */}
      <div className="w-full overflow-hidden border border-gray-200 bg-white/80 shadow-[0_4px_40px_-12px_rgba(0,0,0,0.1)] backdrop-blur-sm dark:border-gray-800 dark:bg-gray-900/80 dark:shadow-[0_4px_40px_-12px_rgba(0,0,0,0.3)] md:rounded-lg">
        <div className="border-b border-gray-200 bg-gradient-to-br from-blue-50/70 to-white p-8 dark:border-gray-800 dark:from-blue-950/40 dark:to-gray-950">
          <div className="flex items-center gap-4">
            <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-verus-blue/10 dark:bg-blue-900/30 md:h-12 md:w-12">
              <svg
                className="h-5 w-5 text-verus-blue dark:text-blue-400 md:h-6 md:w-6"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M9 14.5L12 17.5L15 14.5M12 6.5V17.5"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div>
              <h2 className="text-[18px] font-medium text-gray-900 dark:text-white md:text-[22px]">
                Get VRSC.
              </h2>
              <p className="text-[14px] text-gray-700 dark:text-gray-300 md:max-w-[700px] md:text-[16px]">
                Multiple ways to obtain Verus (VRSC) to start participating in
                the ecosystem.
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-8 p-8 md:flex-row">
          <div className="w-full md:w-1/2">
            <h3 className="mb-4 text-[16px] font-medium text-gray-900 dark:text-white md:text-[18px]">
              Ways to Acquire VRSC
            </h3>

            <div className="space-y-5">
              <div className="flex flex-col gap-1">
                <span className="text-[14px] font-medium text-gray-900 dark:text-white md:text-[16px]">
                  Exchanges
                </span>
                <p className="text-[13px] text-gray-600 dark:text-gray-400 md:text-[14px]">
                  Purchase VRSC on cryptocurrency exchanges like SafeTrade and
                  TradeOgre.
                </p>
              </div>

              <div className="flex flex-col gap-1">
                <span className="text-[14px] font-medium text-gray-900 dark:text-white md:text-[16px]">
                  Direct Conversion with Verus DeFi
                </span>
                <p className="text-[13px] text-gray-600 dark:text-gray-400 md:text-[14px]">
                  Convert other cryptocurrencies to VRSC using the built-in DeFi
                  features of Verus Mobile and Desktop.
                </p>
              </div>

              <div className="flex flex-col gap-1">
                <span className="text-[14px] font-medium text-gray-900 dark:text-white md:text-[16px]">
                  Mining & Staking
                </span>
                <p className="text-[13px] text-gray-600 dark:text-gray-400 md:text-[14px]">
                  Earn VRSC by participating in consensus through mining or
                  staking.
                </p>
              </div>

              <div className="flex flex-col gap-1">
                <span className="text-[14px] font-medium text-gray-900 dark:text-white md:text-[16px]">
                  Community Participation
                </span>
                <p className="text-[13px] text-gray-600 dark:text-gray-400 md:text-[14px]">
                  Contribute to the ecosystem and earn rewards through bounties
                  and community initiatives.
                </p>
              </div>
            </div>
          </div>

          <div className="flex w-full flex-col border-gray-200 dark:border-gray-800 md:w-1/2 md:border-l md:pl-8">
            <div className="flex-1">
              <h3 className="mb-4 text-[16px] font-medium text-gray-900 dark:text-white md:text-[18px]">
                About Verus (VRSC)
              </h3>
              <p className="mb-4 text-[14px] text-gray-700 dark:text-gray-300 md:text-[15px]">
                VRSC is the native currency of the Verus ecosystem, used for
                transactions, staking and protocol services.
              </p>
              <p className="mb-6 text-[14px] text-gray-700 dark:text-gray-300 md:text-[15px]">
                Unlike many other cryptocurrencies, VRSC has no premine, no ICO,
                and no developer rewards built in—all coins are earned through
                mining and staking.
              </p>
              <p className="mb-6 w-fit rounded-md border border-amber-200/50 bg-amber-50/50 px-3 py-2 text-[13px] text-amber-800 dark:border-amber-700/30 dark:bg-amber-900/20 dark:text-amber-300 md:text-[14px]">
                Always research and use reputable exchanges when purchasing
                VRSC.
              </p>
            </div>

            <Link
              href="/get-vrsc/"
              className="group flex h-[40px] w-full items-center justify-center self-start rounded-lg border border-blue-200 bg-white/80 px-8 text-[14px] font-medium text-verus-blue backdrop-blur-sm transition-all duration-300 hover:border-blue-300 hover:text-blue-600 dark:border-blue-800/60 dark:bg-blue-950/80 dark:text-blue-300 dark:hover:border-blue-700 dark:hover:text-blue-200 md:h-[50px] md:w-fit md:text-[16px]"
            >
              View exchanges
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
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
            </Link>
          </div>
        </div>
      </div>

      {/* Participate Section */}
      <div className="w-full overflow-hidden border border-gray-200 bg-white/80 shadow-[0_4px_40px_-12px_rgba(0,0,0,0.1)] backdrop-blur-sm dark:border-gray-800 dark:bg-gray-900/80 dark:shadow-[0_4px_40px_-12px_rgba(0,0,0,0.3)] md:rounded-lg">
        <div className="border-b border-gray-200 bg-gradient-to-br from-blue-50/70 to-white p-8 dark:border-gray-800 dark:from-blue-950/40 dark:to-gray-950">
          <div className="flex items-center gap-4">
            <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-verus-blue/10 dark:bg-blue-900/30 md:h-12 md:w-12">
              <svg
                className="h-5 w-5 text-verus-blue dark:text-blue-400 md:h-6 md:w-6"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17 20H7M17 20V16M17 20H21V16M7 20H3V16M7 20V16M21 16V10C21 8.89543 20.1046 8 19 8M3 16V10C3 8.89543 3.89543 8 5 8M19 8H5M19 8C19 6.89543 18.1046 6 17 6H7C5.89543 6 5 6.89543 5 8M10 4V6M14 4V6M13.5 14.5L10.5 11.5M10.5 14.5L13.5 11.5"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div>
              <h2 className="text-[18px] font-medium text-gray-900 dark:text-white md:text-[22px]">
                Participate in the network.
              </h2>
              <p className="text-[14px] text-gray-700 dark:text-gray-300 md:max-w-[700px] md:text-[16px]">
                Support the Verus ecosystem by mining, staking, or running a
                full node.
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-8 p-8 md:flex-row">
          <div className="w-full md:w-1/2">
            <h3 className="mb-4 text-[16px] font-medium text-gray-900 dark:text-white md:text-[18px]">
              Ways to Participate
            </h3>

            <div className="space-y-5">
              <div className="flex flex-col gap-1">
                <span className="text-[14px] font-medium text-gray-900 dark:text-white md:text-[16px]">
                  Staking
                </span>
                <p className="text-[13px] text-gray-600 dark:text-gray-400 md:text-[14px]">
                  Run a full node and stake your VRSC to help secure the network
                  and earn rewards with minimal hardware requirements.
                </p>
              </div>

              <div className="flex flex-col gap-1">
                <span className="text-[14px] font-medium text-gray-900 dark:text-white md:text-[16px]">
                  Mining
                </span>
                <p className="text-[13px] text-gray-600 dark:text-gray-400 md:text-[14px]">
                  Use your computer's processing power to mine VRSC using the
                  unique VerusHash algorithm, which favors consumer hardware.
                </p>
              </div>

              <div className="flex flex-col gap-1">
                <span className="text-[14px] font-medium text-gray-900 dark:text-white md:text-[16px]">
                  Bridgekeeper
                </span>
                <p className="text-[13px] text-gray-600 dark:text-gray-400 md:text-[14px]">
                  Run Bridgekeeper to facilitate cross-chain transfers between
                  Verus and Ethereum, earning additional rewards.
                </p>
              </div>

              <div className="flex flex-col gap-1">
                <span className="text-[14px] font-medium text-gray-900 dark:text-white md:text-[16px]">
                  Community Contribution
                </span>
                <p className="text-[13px] text-gray-600 dark:text-gray-400 md:text-[14px]">
                  Participate in development, testing, documentation, or
                  marketing to help grow the ecosystem.
                </p>
              </div>
            </div>
          </div>

          <div className="flex w-full flex-col border-gray-200 dark:border-gray-800 md:w-1/2 md:border-l md:pl-8">
            <div className="flex-1">
              <h3 className="mb-4 text-[16px] font-medium text-gray-900 dark:text-white md:text-[18px]">
                Benefits of Participation
              </h3>
              <p className="mb-4 text-[14px] text-gray-700 dark:text-gray-300 md:text-[15px]">
                By participating in the Verus network, you help maintain
                security, decentralization, and the overall health of the
                ecosystem while earning rewards.
              </p>
              <div className="mb-6 space-y-3">
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-[rgba(0,170,37,1)] dark:bg-green-600">
                    <Check className="h-3 w-3 text-white" />
                  </div>
                  <span className="text-[13px] text-gray-700 dark:text-gray-300 md:text-[14px]">
                    No minimum requirements for staking
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-[rgba(0,170,37,1)] dark:bg-green-600">
                    <Check className="h-3 w-3 text-white" />
                  </div>
                  <span className="text-[13px] text-gray-700 dark:text-gray-300 md:text-[14px]">
                    CPU-friendly mining algorithm
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-[rgba(0,170,37,1)] dark:bg-green-600">
                    <Check className="h-3 w-3 text-white" />
                  </div>
                  <span className="text-[13px] text-gray-700 dark:text-gray-300 md:text-[14px]">
                    Earn additional rewards by Bridgekeeper
                  </span>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row">
              <Link
                href="/staking"
                className="group flex h-[40px] w-full items-center justify-center rounded-lg border border-blue-200 bg-white/80 px-8 text-[14px] font-medium text-verus-blue backdrop-blur-sm transition-all duration-300 hover:border-blue-300 hover:text-blue-600 dark:border-blue-800/60 dark:bg-blue-950/80 dark:text-blue-300 dark:hover:border-blue-700 dark:hover:text-blue-200 sm:w-fit md:h-[50px] md:text-[16px]"
              >
                Learn about staking
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
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
              </Link>

              <Link
                href="/mining"
                className="group flex h-[40px] w-full items-center justify-center rounded-lg border border-blue-200 bg-white/80 px-8 text-[14px] font-medium text-verus-blue backdrop-blur-sm transition-all duration-300 hover:border-blue-300 hover:text-blue-600 dark:border-blue-800/60 dark:bg-blue-950/80 dark:text-blue-300 dark:hover:border-blue-700 dark:hover:text-blue-200 sm:w-fit md:h-[50px] md:text-[16px]"
              >
                Learn about mining
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
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
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* VerusID Section */}
      <div className="w-full overflow-hidden border border-gray-200 bg-white/80 shadow-[0_4px_40px_-12px_rgba(0,0,0,0.1)] backdrop-blur-sm dark:border-gray-800 dark:bg-gray-900/80 dark:shadow-[0_4px_40px_-12px_rgba(0,0,0,0.3)] md:rounded-lg">
        <div className="border-b border-gray-200 bg-gradient-to-br from-blue-50/70 to-white p-8 dark:border-gray-800 dark:from-blue-950/40 dark:to-gray-950">
          <div className="flex items-center gap-4">
            <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-verus-blue/10 dark:bg-blue-900/30 md:h-12 md:w-12">
              <svg
                className="h-5 w-5 text-verus-blue dark:text-blue-400 md:h-6 md:w-6"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9 12L11 14L15 10M20.6179 5.98434C20.4132 5.99472 20.2072 5.99997 20 5.99997C16.9265 5.99997 14.123 4.84453 11.9999 2.94434C9.87691 4.84446 7.07339 5.99985 4 5.99985C3.79277 5.99985 3.58678 5.9946 3.38213 5.98422C3.1327 6.94783 3 7.95842 3 9.00001C3 14.5915 6.82432 19.2898 12 20.622C17.1757 19.2898 21 14.5915 21 9.00001C21 7.95847 20.8673 6.94791 20.6179 5.98434Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div>
              <h2 className="text-[18px] font-medium text-gray-900 dark:text-white md:text-[22px]">
                Be self-sovereign with VerusID.
              </h2>
              <p className="text-[14px] text-gray-700 dark:text-gray-300 md:max-w-[700px] md:text-[16px]">
                Take full control of your digital identity, data, and assets
                with VerusID.
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-8 p-8 md:flex-row">
          <div className="w-full md:w-1/2">
            <h3 className="mb-4 text-[16px] font-medium text-gray-900 dark:text-white md:text-[18px]">
              What is VerusID?
            </h3>

            <div className="space-y-4">
              <p className="text-[14px] text-gray-700 dark:text-gray-300 md:text-[15px]">
                VerusID is a self-sovereign identity system built on the Verus
                Protocol that gives you complete ownership and control over your
                digital identity, data, and assets.
              </p>

              <p className="text-[14px] text-gray-700 dark:text-gray-300 md:text-[15px]">
                Unlike traditional identity systems where third parties control
                your information, VerusID puts you in charge, allowing you to
                selectively share information while maintaining privacy and
                security.
              </p>

              <p className="text-[14px] text-gray-700 dark:text-gray-300 md:text-[15px]">
                Verus Vault feature adds an extra layer of security to VerusID
                by allowing you to timelock your identity, preventing funds from
                being spent while still enabling staking and receiving
                transactions.
              </p>

              <div className="mt-4 space-y-3">
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-[rgba(0,170,37,1)] dark:bg-green-600">
                    <Check className="h-3 w-3 text-white" />
                  </div>
                  <span className="text-[13px] text-gray-700 dark:text-gray-300 md:text-[14px]">
                    Human-readable blockchain identities (e.g., bob@)
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-[rgba(0,170,37,1)] dark:bg-green-600">
                    <Check className="h-3 w-3 text-white" />
                  </div>
                  <span className="text-[13px] text-gray-700 dark:text-gray-300 md:text-[14px]">
                    Integrated revocation and recovery systems
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-[rgba(0,170,37,1)] dark:bg-green-600">
                    <Check className="h-3 w-3 text-white" />
                  </div>
                  <span className="text-[13px] text-gray-700 dark:text-gray-300 md:text-[14px]">
                    Privacy-preserving selective disclosure capabilities
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="flex w-full flex-col border-gray-200 dark:border-gray-800 md:w-1/2 md:border-l md:pl-8">
            <div className="flex-1">
              <h3 className="mb-4 text-[16px] font-medium text-gray-900 dark:text-white md:text-[18px]">
                Benefits of VerusID
              </h3>

              <div className="space-y-4">
                <div className="flex flex-col gap-1">
                  <span className="text-[14px] font-medium text-gray-900 dark:text-white md:text-[16px]">
                    True Data Ownership
                  </span>
                  <p className="text-[13px] text-gray-600 dark:text-gray-400 md:text-[14px]">
                    Your data remains with you, not scattered across corporate
                    and centralized databases.
                  </p>
                </div>

                <div className="flex flex-col gap-1">
                  <span className="text-[14px] font-medium text-gray-900 dark:text-white md:text-[16px]">
                    Enhanced Security
                  </span>
                  <p className="text-[13px] text-gray-600 dark:text-gray-400 md:text-[14px]">
                    Blockchain-secured identity with consensus-level security
                    and recovery options.
                  </p>
                </div>

                <div className="flex flex-col gap-1">
                  <span className="text-[14px] font-medium text-gray-900 dark:text-white md:text-[16px]">
                    Privacy by Design
                  </span>
                  <p className="text-[13px] text-gray-600 dark:text-gray-400 md:text-[14px]">
                    Selective disclosure of information puts you in control of
                    what others can see.
                  </p>
                </div>
              </div>

              <p className="mb-6 mt-6 w-fit rounded-md border border-amber-200/50 bg-amber-50/50 px-3 py-2 text-[13px] text-amber-800 dark:border-amber-700/30 dark:bg-amber-900/20 dark:text-amber-300 md:text-[14px]">
                VerusID creation requires a full node wallet like Verus Desktop.
              </p>
            </div>

            <Link
              href="/verusid"
              className="group flex h-[40px] w-full items-center justify-center self-start rounded-lg border border-blue-200 bg-white/80 px-8 text-[14px] font-medium text-verus-blue backdrop-blur-sm transition-all duration-300 hover:border-blue-300 hover:text-blue-600 dark:border-blue-800/60 dark:bg-blue-950/80 dark:text-blue-300 dark:hover:border-blue-700 dark:hover:text-blue-200 md:h-[50px] md:w-fit md:text-[16px]"
            >
              Learn about VerusID
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
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
            </Link>
          </div>
        </div>
      </div>

      {/* Discord Help Box */}
      <a
        href={env.NEXT_PUBLIC_DISCORD}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex h-[45px] w-full items-center gap-3 bg-[#444EE5] p-4 transition-all duration-300 hover:bg-[#3942cc] md:h-[55px] md:rounded-lg md:p-6"
      >
        <IoLogoDiscord className="h-5 w-5 text-white md:h-6 md:w-6" />
        <span className="text-[14px] font-medium text-white md:text-[16px]">
          Need help getting started? Join the community on Discord
        </span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="ml-auto h-4 w-4 text-white transition-transform duration-300 group-hover:translate-x-1"
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
  )
}
