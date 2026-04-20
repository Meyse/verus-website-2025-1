import Image from 'next/image'
import Link from 'next/link'

import {env} from '@/configs/env'
import {
  FaFacebook,
  FaGithub,
  FaMedium,
  FaReddit,
  FaTelegram,
  FaYoutube,
} from 'react-icons/fa'
import {FaXTwitter} from 'react-icons/fa6'
import {IoLogoDiscord} from 'react-icons/io5'

import {ThemeModeControl} from '@/components/navbar'

export function Footer() {
  return (
    <footer className="-mx-4 mt-16 w-screen md:mx-0 md:mt-0">
      <div className="relative">
        <Image
          src="/img/bg-footer.webp"
          alt=""
          width={500}
          height={500}
          className="h-auto w-full scale-y-[-1] object-cover dark:hidden"
        />
        <Image
          src="/img/bg-darkmode.webp"
          alt=""
          width={500}
          height={500}
          className="hidden h-auto w-full scale-y-[-1] object-cover dark:block"
        />
        {/* Centered Text and Button */}
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-8">
          <h2 className="max-w-[700px] text-center text-[32px] font-medium leading-[1.1] tracking-tight text-white [text-shadow:_0_1px_20px_rgb(8_32_84_/_100%)] dark:[text-shadow:_0_1px_20px_rgb(0_0_0_/_60%)] md:text-[75px] md:[text-shadow:_0_1px_35px_rgb(8_32_84_/_100%)] dark:md:[text-shadow:_0_1px_35px_rgb(0_0_0_/_60%)]">
            Start Building
            <br />
            the Internet of Value
            <br />
            Right Now
          </h2>

          <a
            href={env.NEXT_PUBLIC_DISCORD}
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-[40px] items-center justify-center gap-2 rounded-lg bg-white px-6 text-[14px] font-medium text-black transition-colors hover:bg-gray-100 md:h-[50px] md:text-[16px]"
          >
            Join the worldwide community
            <IoLogoDiscord className="h-5 w-5 text-black md:h-6 md:w-6" />
          </a>
        </div>
      </div>

      {/* Main Footer */}
      <div className="bg-[#010101] text-white">
        {/* Desktop Footer */}
        <div className="mx-auto hidden max-w-[1220px] px-8 py-16 md:block">
          <div className="grid grid-cols-6 gap-8">
            {/* Logo and Description */}
            <div className="col-span-2">
              <Image
                src="/img/verus-logo-white.svg"
                alt="Verus Logo"
                width={120}
                height={24}
                className="mb-6 h-8 w-auto"
              />
              <p className="max-w-[300px] text-[15px] text-gray-400">
                A fundamentally different and better protocol to build Web3, and
                to empower individuals & communities.
              </p>
            </div>

            {/* Use */}
            <div>
              <h3 className="mb-4 text-sm font-medium">Use</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/get-started"
                    className="text-[15px] text-gray-400 transition-colors hover:text-white"
                  >
                    Get Started
                  </Link>
                </li>
                <li>
                  <Link
                    href="/wallet"
                    className="text-[15px] text-gray-400 transition-colors hover:text-white"
                  >
                    Wallet
                  </Link>
                </li>
                <li>
                  <Link
                    href="/verusid"
                    className="text-[15px] text-gray-400 transition-colors hover:text-white"
                  >
                    VerusID
                  </Link>
                </li>
                <li>
                  <Link
                    href="/ethereum-bridge"
                    className="text-[15px] text-gray-400 transition-colors hover:text-white"
                  >
                    Ethereum Bridge
                  </Link>
                </li>
                <li>
                  <Link
                    href="/mining"
                    className="text-[15px] text-gray-400 transition-colors hover:text-white"
                  >
                    Start Mining
                  </Link>
                </li>
                <li>
                  <Link
                    href="/staking"
                    className="text-[15px] text-gray-400 transition-colors hover:text-white"
                  >
                    Start Staking
                  </Link>
                </li>
                <li>
                  <Link
                    href="/get-vrsc"
                    className="text-[15px] text-gray-400 transition-colors hover:text-white"
                  >
                    Get VRSC
                  </Link>
                </li>
              </ul>
            </div>

            {/* Build */}
            <div>
              <h3 className="mb-4 text-sm font-medium">Build</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/build"
                    className="text-[15px] text-gray-400 transition-colors hover:text-white"
                  >
                    Overview
                  </Link>
                </li>
                <li>
                  <Link
                    href="/build/verusid"
                    className="text-[15px] text-gray-400 transition-colors hover:text-white"
                  >
                    VerusID
                  </Link>
                </li>
                <li>
                  <Link
                    href="/migrate"
                    className="text-[15px] text-gray-400 transition-colors hover:text-white"
                  >
                    Migrate Your Community
                  </Link>
                </li>
                <li>
                  <Link
                    href="/vs-evm"
                    className="text-[15px] text-gray-400 transition-colors hover:text-white"
                  >
                    Verus vs EVMs
                  </Link>
                </li>
                <li>
                  <a
                    href={env.NEXT_PUBLIC_VERUS_DOCS}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[15px] text-gray-400 transition-colors hover:text-white"
                  >
                    Documentation
                  </a>
                </li>
              </ul>
            </div>

            {/* Learn */}
            <div>
              <h3 className="mb-4 text-sm font-medium">Learn</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/intro"
                    className="text-[15px] text-gray-400 transition-colors hover:text-white"
                  >
                    What is Verus?
                  </Link>
                </li>
                <li>
                  <Link
                    href="/milestones"
                    className="text-[15px] text-gray-400 transition-colors hover:text-white"
                  >
                    Milestones
                  </Link>
                </li>
                <li>
                  <Link
                    href="/green"
                    className="text-[15px] text-gray-400 transition-colors hover:text-white"
                  >
                    Environmentally Friendly
                  </Link>
                </li>
                <li>
                  <Link
                    href="/faq"
                    className="text-[15px] text-gray-400 transition-colors hover:text-white"
                  >
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link
                    href="/papers"
                    className="text-[15px] text-gray-400 transition-colors hover:text-white"
                  >
                    Papers
                  </Link>
                </li>
                <li>
                  <Link
                    href="/statistics"
                    className="text-[15px] text-gray-400 transition-colors hover:text-white"
                  >
                    Statistics
                  </Link>
                </li>
              </ul>
            </div>

            {/* Community & Resources */}
            <div>
              <h3 className="mb-4 text-sm font-medium">Community</h3>
              <ul className="mb-6 space-y-2">
                <li>
                  <Link
                    href="/community"
                    className="text-[15px] text-gray-400 transition-colors hover:text-white"
                  >
                    Community Hub
                  </Link>
                </li>
                <li>
                  <Link
                    href="/projects"
                    className="text-[15px] text-gray-400 transition-colors hover:text-white"
                  >
                    Community Projects
                  </Link>
                </li>
                <li>
                  <Link
                    href="/people"
                    className="text-[15px] text-gray-400 transition-colors hover:text-white"
                  >
                    People
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contribute"
                    className="text-[15px] text-gray-400 transition-colors hover:text-white"
                  >
                    Contribute
                  </Link>
                </li>
                <li>
                  <Link
                    href="/media"
                    className="text-[15px] text-gray-400 transition-colors hover:text-white"
                  >
                    Media
                  </Link>
                </li>
                <li>
                  <Link
                    href="/media/brand-assets"
                    className="text-[15px] text-gray-400 transition-colors hover:text-white"
                  >
                    Brand Materials
                  </Link>
                </li>
                <li>
                  <Link
                    href="/donate"
                    className="text-[15px] text-gray-400 transition-colors hover:text-white"
                  >
                    Donate
                  </Link>
                </li>
              </ul>

              <div className="grid grid-cols-4 gap-4">
                <a
                  href={env.NEXT_PUBLIC_DISCORD}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 transition-colors hover:text-[#5865F2]"
                >
                  <IoLogoDiscord className="h-5 w-5" />
                </a>
                <a
                  href={env.NEXT_PUBLIC_VERUS_TWITTER}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 transition-colors hover:text-white"
                >
                  <FaXTwitter className="h-5 w-5" />
                </a>
                <a
                  href={env.NEXT_PUBLIC_VERUS_GITHUB}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 transition-colors hover:text-white"
                >
                  <FaGithub className="h-5 w-5" />
                </a>
                <a
                  href={env.NEXT_PUBLIC_VERUS_MEDIUM}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 transition-colors hover:text-white"
                >
                  <FaMedium className="h-5 w-5" />
                </a>
                <a
                  href={env.NEXT_PUBLIC_VERUS_TELEGRAM}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 transition-colors hover:text-[#0088cc]"
                >
                  <FaTelegram className="h-5 w-5" />
                </a>
                <a
                  href={env.NEXT_PUBLIC_VERUS_REDDIT}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 transition-colors hover:text-[#FF4500]"
                >
                  <FaReddit className="h-5 w-5" />
                </a>
                <a
                  href={env.NEXT_PUBLIC_VERUS_FACEBOOK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 transition-colors hover:text-[#1877F2]"
                >
                  <FaFacebook className="h-5 w-5" />
                </a>
                <a
                  href={env.NEXT_PUBLIC_VERUS_YOUTUBE}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 transition-colors hover:text-[#FF0000]"
                >
                  <FaYoutube className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-12 flex flex-col gap-6 border-t border-gray-800 pt-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="text-[14px] text-gray-400">
              © {new Date().getFullYear()} The Verus Community. All rights
              reserved.
            </div>
            <ThemeModeControl
              variant="inverted"
              className="max-w-[360px]"
              controlClassName="shrink-0"
            />
            <div className="flex gap-2">
              <Link
                href="/privacy-policy"
                className="text-[14px] text-gray-400 transition-colors hover:text-white"
              >
                Privacy Policy
              </Link>
              {env.NEXT_PUBLIC_HOST_ID !== undefined && (
                <p className="text-[14px] text-gray-400">
                  ({env.NEXT_PUBLIC_HOST_ID})
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Mobile Footer */}
        <div className="px-6 py-12 md:hidden">
          {/* Logo */}
          <Image
            src="/img/verus-logo-white.svg"
            alt="Verus Logo"
            width={100}
            height={24}
            className="mb-8 h-6 w-auto"
          />

          {/* Links */}
          <div className="space-y-8">
            {/* Use */}
            <div>
              <h3 className="mb-3 text-sm font-medium">Use</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/get-started"
                    className="text-[14px] text-gray-400"
                  >
                    Get Started
                  </Link>
                </li>
                <li>
                  <Link href="/wallet" className="text-[14px] text-gray-400">
                    Wallet
                  </Link>
                </li>
                <li>
                  <Link href="/verusid" className="text-[14px] text-gray-400">
                    VerusID
                  </Link>
                </li>
                <li>
                  <Link
                    href="/ethereum-bridge"
                    className="text-[14px] text-gray-400"
                  >
                    Ethereum Bridge
                  </Link>
                </li>
                <li>
                  <Link href="/mining" className="text-[14px] text-gray-400">
                    Start Mining
                  </Link>
                </li>
                <li>
                  <Link href="/staking" className="text-[14px] text-gray-400">
                    Start Staking
                  </Link>
                </li>
                <li>
                  <Link href="/get-vrsc" className="text-[14px] text-gray-400">
                    Get VRSC
                  </Link>
                </li>
              </ul>
            </div>

            {/* Build */}
            <div>
              <h3 className="mb-3 text-sm font-medium">Build</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/build" className="text-[14px] text-gray-400">
                    Overview
                  </Link>
                </li>
                <li>
                  <Link
                    href="/build/verusid"
                    className="text-[14px] text-gray-400"
                  >
                    VerusID
                  </Link>
                </li>
                <li>
                  <Link href="/migrate" className="text-[14px] text-gray-400">
                    Migrate Your Community
                  </Link>
                </li>
                <li>
                  <Link href="/vs-evm" className="text-[14px] text-gray-400">
                    Verus vs EVMs
                  </Link>
                </li>
                <li>
                  <a
                    href={env.NEXT_PUBLIC_VERUS_DOCS}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[14px] text-gray-400"
                  >
                    Documentation
                  </a>
                </li>
              </ul>
            </div>

            {/* Learn */}
            <div>
              <h3 className="mb-3 text-sm font-medium">Learn</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/intro" className="text-[14px] text-gray-400">
                    What is Verus?
                  </Link>
                </li>
                <li>
                  <Link
                    href="/milestones"
                    className="text-[14px] text-gray-400"
                  >
                    Milestones
                  </Link>
                </li>
                <li>
                  <Link href="/green" className="text-[14px] text-gray-400">
                    Environmentally Friendly
                  </Link>
                </li>
                <li>
                  <Link href="/faq" className="text-[14px] text-gray-400">
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link href="/papers" className="text-[14px] text-gray-400">
                    Papers
                  </Link>
                </li>
                <li>
                  <Link
                    href="/statistics"
                    className="text-[14px] text-gray-400"
                  >
                    Statistics
                  </Link>
                </li>
              </ul>
            </div>

            {/* Community */}
            <div>
              <h3 className="mb-3 text-sm font-medium">Community</h3>
              <ul className="mb-4 space-y-2">
                <li>
                  <Link href="/community" className="text-[14px] text-gray-400">
                    Community Hub
                  </Link>
                </li>
                <li>
                  <Link href="/projects" className="text-[14px] text-gray-400">
                    Community Projects
                  </Link>
                </li>
                <li>
                  <Link href="/people" className="text-[14px] text-gray-400">
                    People
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contribute"
                    className="text-[14px] text-gray-400"
                  >
                    Contribute
                  </Link>
                </li>
                <li>
                  <Link href="/media" className="text-[14px] text-gray-400">
                    Media
                  </Link>
                </li>
                <li>
                  <Link
                    href="/media/brand-assets"
                    className="text-[14px] text-gray-400"
                  >
                    Brand Materials
                  </Link>
                </li>
                <li>
                  <Link href="/donate" className="text-[14px] text-gray-400">
                    Donate
                  </Link>
                </li>
              </ul>

              <div className="grid grid-cols-4 gap-4">
                <a
                  href={env.NEXT_PUBLIC_DISCORD}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400"
                >
                  <IoLogoDiscord className="h-5 w-5" />
                </a>
                <a
                  href={env.NEXT_PUBLIC_VERUS_TWITTER}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400"
                >
                  <FaXTwitter className="h-5 w-5" />
                </a>
                <a
                  href={env.NEXT_PUBLIC_VERUS_GITHUB}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400"
                >
                  <FaGithub className="h-5 w-5" />
                </a>
                <a
                  href={env.NEXT_PUBLIC_VERUS_MEDIUM}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400"
                >
                  <FaMedium className="h-5 w-5" />
                </a>
                <a
                  href={env.NEXT_PUBLIC_VERUS_TELEGRAM}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400"
                >
                  <FaTelegram className="h-5 w-5" />
                </a>
                <a
                  href={env.NEXT_PUBLIC_VERUS_REDDIT}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400"
                >
                  <FaReddit className="h-5 w-5" />
                </a>
                <a
                  href={env.NEXT_PUBLIC_VERUS_FACEBOOK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400"
                >
                  <FaFacebook className="h-5 w-5" />
                </a>
                <a
                  href={env.NEXT_PUBLIC_VERUS_YOUTUBE}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400"
                >
                  <FaYoutube className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="mt-8 border-t border-gray-800 pt-8">
            <div className="mb-4 text-[12px] text-gray-400">
              © {new Date().getFullYear()} The Verus Community. All rights
              reserved.
            </div>
            <div className="flex flex-row justify-between gap-2">
              <Link
                href="/privacy-policy"
                className="text-[12px] text-gray-400"
              >
                Privacy Policy
              </Link>
              {env.NEXT_PUBLIC_HOST_ID !== undefined && (
                <p className="text-[12px] text-gray-400">
                  ({env.NEXT_PUBLIC_HOST_ID})
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
