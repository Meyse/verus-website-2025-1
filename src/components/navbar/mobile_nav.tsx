'use client'

/**
 * File updated: fixed mobile section toggle for "Use & Wallet" by aligning
 * isOpen comparison with the section key derived from the title. Also reordered
 * items so "Wallet" appears before "Get Started" in the Use & Wallet section.
 */
import type {AnchorHTMLAttributes, ReactNode} from 'react'

import {createContext, useContext, useEffect, useRef, useState} from 'react'
import Link from 'next/link'
import {usePathname} from 'next/navigation'

import {env} from '@/configs/env'
import {ArrowRight, ChevronRight, ExternalLink} from 'lucide-react'
import {FaFacebook, FaReddit} from 'react-icons/fa'
import {FaTelegram, FaXTwitter, FaYoutube} from 'react-icons/fa6'
import {IoLogoDiscord, IoLogoGithub} from 'react-icons/io5'

import {cn} from '@/lib/utils'

import {ThemeModeControl} from './theme_toggle'

type SectionProps = {
  title: string
  isOpen: boolean
  toggleSection: (section: string) => void
  children: ReactNode
}
//TODO:clean this up
//?? maybe split this up
// Component for expandable mobile navigation sections
function MobileSection({title, isOpen, toggleSection, children}: SectionProps) {
  const contentRef = useRef<HTMLDivElement>(null)
  const [contentHeight, setContentHeight] = useState(0)

  useEffect(() => {
    if (contentRef.current) {
      setContentHeight(contentRef.current.scrollHeight)
    }
  }, [isOpen, children])

  return (
    <div className="border-b border-gray-100 dark:border-gray-800">
      <div className="-mx-6">
        <div className="px-6">
          <button
            onClick={() => toggleSection(title.toLowerCase())}
            className="flex w-full items-center justify-between py-4"
          >
            <span
              className={cn(
                'text-[15px] font-semibold text-gray-700 dark:text-gray-300',
                isOpen && 'dark:text-white'
              )}
            >
              {title}
            </span>
            <ChevronRight
              className={cn(
                'h-4 w-4 transition-transform duration-300',
                isOpen
                  ? 'rotate-90 text-verus-blue dark:text-white'
                  : 'text-gray-500 dark:text-gray-400'
              )}
            />
          </button>
        </div>
      </div>

      <div
        style={{
          height: isOpen ? contentHeight : 0,
          overflow: 'hidden',
          transition: 'height 0.3s ease',
        }}
      >
        <div ref={contentRef} className="pb-6 pt-2">
          {children}
        </div>
      </div>
    </div>
  )
}
type MenuLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string
  children: ReactNode
}

const MobileMenuCloseContext = createContext<(() => void) | undefined>(
  undefined
)

function MenuLink({href, children, className, ...props}: MenuLinkProps) {
  const closeMenu = useContext(MobileMenuCloseContext)

  return (
    <Link href={href} className={className} onClick={closeMenu} {...props}>
      {children}
    </Link>
  )
}

type MobileNavProps = {
  isOpen: boolean
  onOpenChange: (isOpen: boolean) => void
}

export function MobileNav({isOpen, onOpenChange}: MobileNavProps) {
  const pathname = usePathname()
  const [openSection, setOpenSection] = useState<string | null>(null)
  const menuTopClass = pathname === '/' ? 'top-[107px]' : 'top-[50px]'

  useEffect(() => {
    document.documentElement.classList.toggle('mobile-menu-open', isOpen)

    return () => {
      document.documentElement.classList.remove('mobile-menu-open')
    }
  }, [isOpen])

  const toggleSection = (section: string) => {
    setOpenSection(openSection === section ? null : section)
  }

  // Function to close the mobile menu
  const closeMenu = () => {
    onOpenChange(false)
  }

  return (
    <MobileMenuCloseContext.Provider value={closeMenu}>
      {/* Mobile Menu Button */}
      <button
        className="relative z-50 flex h-8 w-8 items-center justify-center md:hidden"
        onClick={() => onOpenChange(!isOpen)}
        aria-label={isOpen ? 'Close menu' : 'Open menu'}
      >
        <div className="relative h-5 w-5">
          <span
            className={cn(
              'absolute left-0 top-1 h-[2px] w-5 bg-gray-600 transition-all duration-300 dark:bg-gray-400',
              isOpen ? 'top-[9px] rotate-45' : 'rotate-0'
            )}
          />
          <span
            className={cn(
              'absolute left-0 h-[2px] w-5 bg-gray-600 transition-all duration-300 dark:bg-gray-400',
              isOpen ? 'opacity-0' : 'top-[9px] opacity-100'
            )}
          />
          <span
            className={cn(
              'absolute bottom-1 left-0 h-[2px] w-5 bg-gray-600 transition-all duration-300 dark:bg-gray-400',
              isOpen ? 'bottom-[9px] -rotate-45' : 'rotate-0'
            )}
          />
        </div>
      </button>

      {/* Mobile Menu with improved styling but no animations */}
      <div
        className={cn(
          'fixed inset-x-0 bottom-0 z-40 overflow-y-auto bg-white transition-transform duration-300 dark:bg-gray-950 md:hidden',
          menuTopClass,
          isOpen ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        <nav className="relative p-6">
          {/* Use Verus Section */}
          <MobileSection
            title="Use & Wallet"
            isOpen={openSection === 'use & wallet'}
            toggleSection={toggleSection}
          >
            <h3 className="border-b border-gray-200 pb-2 pt-8 text-[11px] font-medium uppercase text-gray-500 dark:border-gray-700 dark:text-gray-400">
              Get Started
            </h3>
            <div className="space-y-2">
              <MenuLink
                href="/wallet"
                className="block py-2 pt-4 text-[15px] font-semibold text-gray-700 transition-colors hover:text-verus-blue dark:text-gray-300 dark:hover:text-blue-400"
              >
                Wallet
              </MenuLink>
              <MenuLink
                href="/get-started"
                className="block py-2 text-[15px] font-semibold text-gray-700 transition-colors hover:text-verus-blue dark:text-gray-300 dark:hover:text-blue-400"
              >
                Get Started
              </MenuLink>
              <MenuLink
                href="/verusid"
                className="block py-2 text-[15px] font-semibold text-gray-700 transition-colors hover:text-verus-blue dark:text-gray-300 dark:hover:text-blue-400"
              >
                VerusID
              </MenuLink>
              <MenuLink
                href="/ethereum-bridge"
                className="block py-2 text-[15px] font-semibold text-gray-700 transition-colors hover:text-verus-blue dark:text-gray-300 dark:hover:text-blue-400"
              >
                Ethereum Bridge
              </MenuLink>
            </div>

            <h3 className="border-b border-gray-200 pb-2 pt-8 text-[11px] font-medium uppercase text-gray-500 dark:border-gray-700 dark:text-gray-400">
              Participate
            </h3>
            <div className="space-y-2">
              <MenuLink
                href="/mining"
                className="block py-2 pt-4 text-[15px] font-semibold text-gray-700 transition-colors hover:text-verus-blue dark:text-gray-300 dark:hover:text-blue-400"
              >
                Start Mining
              </MenuLink>
              <MenuLink
                href="/staking"
                className="block py-2 text-[15px] font-semibold text-gray-700 transition-colors hover:text-verus-blue dark:text-gray-300 dark:hover:text-blue-400"
              >
                Start Staking
              </MenuLink>
              <MenuLink
                href="/get-vrsc/"
                className="block py-2 text-[15px] font-semibold text-gray-700 transition-colors hover:text-verus-blue dark:text-gray-300 dark:hover:text-blue-400"
              >
                Get VRSC
              </MenuLink>
            </div>

            <h3 className="border-b border-gray-200 pb-2 pt-8 text-[11px] font-medium uppercase text-gray-500 dark:border-gray-700 dark:text-gray-400">
              Tools
            </h3>
            <div className="space-y-2">
              <MenuLink
                href="/verusid-search"
                className="block py-2 pt-4 text-[15px] font-semibold text-gray-700 transition-colors hover:text-verus-blue dark:text-gray-300 dark:hover:text-blue-400"
              >
                VerusID Search
              </MenuLink>
              <MenuLink
                href="/verify"
                className="block py-2 text-[15px] font-semibold text-gray-700 transition-colors hover:text-verus-blue dark:text-gray-300 dark:hover:text-blue-400"
              >
                Verify Signatures
              </MenuLink>
              <MenuLink
                href={env.NEXT_PUBLIC_VERUS_EXPLORER}
                className="group flex items-center gap-2 py-2 text-[15px] font-semibold text-gray-700 transition-colors hover:text-verus-blue dark:text-gray-300 dark:hover:text-blue-400"
              >
                Explorer
                <ExternalLink className="h-4 w-4 opacity-50 group-hover:opacity-100" />
              </MenuLink>
            </div>
          </MobileSection>

          {/* Build Section */}
          <MobileSection
            title="Build"
            isOpen={openSection === 'build'}
            toggleSection={toggleSection}
          >
            <h3 className="border-b border-gray-200 pb-2 pt-8 text-[11px] font-medium uppercase text-gray-500 dark:border-gray-700 dark:text-gray-400">
              Get Started
            </h3>
            <div className="space-y-2">
              <MenuLink
                href="/build"
                className="block py-2 pt-4 text-[15px] font-semibold text-gray-700 transition-colors hover:text-verus-blue dark:text-gray-300 dark:hover:text-blue-400"
              >
                Overview
              </MenuLink>
              <MenuLink
                href="/build/verusid/"
                className="block py-2 text-[15px] font-semibold text-gray-700 transition-colors hover:text-verus-blue dark:text-gray-300 dark:hover:text-blue-400"
              >
                VerusID
              </MenuLink>
              <MenuLink
                href="/build/start"
                className="block py-2 text-[15px] font-semibold text-gray-700 transition-colors hover:text-verus-blue dark:text-gray-300 dark:hover:text-blue-400"
              >
                Get Started
              </MenuLink>
              <MenuLink
                href="/migrate/"
                className="block py-2 text-[15px] font-semibold text-gray-700 transition-colors hover:text-verus-blue dark:text-gray-300 dark:hover:text-blue-400"
              >
                Migrate Your Community
              </MenuLink>
              <MenuLink
                href="/vs-evm/"
                className="block py-2 text-[15px] font-semibold text-gray-700 transition-colors hover:text-verus-blue dark:text-gray-300 dark:hover:text-blue-400"
              >
                Verus vs EVMs
              </MenuLink>
            </div>

            <h3 className="border-b border-gray-200 pb-2 pt-8 text-[11px] font-medium uppercase text-gray-500 dark:border-gray-700 dark:text-gray-400">
              Solutions
            </h3>
            <div className="space-y-2">
              <MenuLink
                href="/build/pbaas-chains/"
                className="block py-2 pt-4 text-[15px] font-semibold text-gray-700 transition-colors hover:text-verus-blue dark:text-gray-300 dark:hover:text-blue-400"
              >
                Blockchains
              </MenuLink>
              <MenuLink
                href="/build/pbaas-currencies/"
                className="block py-2 text-[15px] font-semibold text-gray-700 transition-colors hover:text-verus-blue dark:text-gray-300 dark:hover:text-blue-400"
              >
                Currencies
              </MenuLink>
              <MenuLink
                href="/build/data/"
                className="block py-2 text-[15px] font-semibold text-gray-700 transition-colors hover:text-verus-blue dark:text-gray-300 dark:hover:text-blue-400"
              >
                Store & Retrieve Data
              </MenuLink>
              <MenuLink
                href="/build/defi-payments/"
                className="block py-2 text-[15px] font-semibold text-gray-700 transition-colors hover:text-verus-blue dark:text-gray-300 dark:hover:text-blue-400"
              >
                DeFi & Payments
              </MenuLink>
              <MenuLink
                href="/build/marketplace/"
                className="block py-2 text-[15px] font-semibold text-gray-700 transition-colors hover:text-verus-blue dark:text-gray-300 dark:hover:text-blue-400"
              >
                Marketplace
              </MenuLink>
            </div>

            <h3 className="border-b border-gray-200 pb-2 pt-8 text-[11px] font-medium uppercase text-gray-500 dark:border-gray-700 dark:text-gray-400">
              Documentation
            </h3>
            <div className="space-y-2">
              <MenuLink
                href={env.NEXT_PUBLIC_VERUS_DOCS}
                className="flex items-center gap-2 py-2 pt-4 text-[15px] font-semibold text-gray-700 transition-colors hover:text-verus-blue dark:text-gray-300 dark:hover:text-blue-400"
              >
                Documentation
                <ExternalLink className="h-4 w-4 opacity-50 group-hover:opacity-100" />
              </MenuLink>
              <MenuLink
                href={env.NEXT_PUBLIC_MONKINS_GITHUB}
                className="flex items-center gap-2 py-2 text-[15px] font-semibold text-gray-700 transition-colors hover:text-verus-blue dark:text-gray-300 dark:hover:text-blue-400"
              >
                Integration Documentation
                <ExternalLink className="h-4 w-4 opacity-50 group-hover:opacity-100" />
              </MenuLink>
              <MenuLink
                href={`${env.NEXT_PUBLIC_VERUS_WIKI}/#!faq-cli/clifaq-02_verus_commands.md`}
                className="flex items-center gap-2 py-2 text-[15px] font-semibold text-gray-700 transition-colors hover:text-verus-blue dark:text-gray-300 dark:hover:text-blue-400"
              >
                All API Commands
                <ExternalLink className="h-4 w-4 opacity-50 group-hover:opacity-100" />
              </MenuLink>
              <MenuLink
                href={env.NEXT_PUBLIC_DISCORD}
                target="_blank"
                rel="noopener noreferrer"
                className="group mt-4 flex items-start rounded-lg bg-[#5865F2] p-4 text-white transition-colors hover:bg-[#4f5be8]"
              >
                <IoLogoDiscord className="h-8 w-8 shrink-0" />
                <span className="ml-3">
                  <span className="mb-1 flex items-center gap-2 text-[15px] font-semibold group-hover:underline">
                    Need help building with Verus?
                    <ExternalLink className="h-4 w-4 shrink-0 opacity-70 group-hover:opacity-100" />
                  </span>
                  <span className="block text-sm text-white/85">
                    Join Discord for developer support.
                  </span>
                </span>
              </MenuLink>
              <MenuLink
                href="/dream"
                className="group relative flex items-center justify-between overflow-hidden rounded-lg bg-[url('/img/dream/dream-announcement-wave.png')] bg-cover bg-center p-4 text-white before:absolute before:inset-0 before:bg-blue-950/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-white/70"
              >
                <span className="relative pr-4">
                  <span className="block text-[17px] font-semibold">
                    Introducing DREAM
                  </span>
                  <span className="mt-1 block text-sm leading-relaxed text-white/85">
                    A new application model for user-owned identity, data, and
                    money.
                  </span>
                </span>
                <ArrowRight className="relative h-4 w-4 opacity-70 transition-transform group-hover:translate-x-1 group-hover:opacity-100" />
              </MenuLink>
            </div>
          </MobileSection>

          {/* Learn Section */}
          <MobileSection
            title="Learn"
            isOpen={openSection === 'learn'}
            toggleSection={toggleSection}
          >
            <h3 className="border-b border-gray-200 pb-2 pt-8 text-[11px] font-medium uppercase text-gray-500 dark:border-gray-700 dark:text-gray-400">
              About
            </h3>
            <div className="space-y-2">
              <MenuLink
                href="/intro"
                className="block py-2 pt-4 text-[15px] font-semibold text-gray-700 transition-colors hover:text-verus-blue dark:text-gray-300 dark:hover:text-blue-400"
              >
                What is Verus?
              </MenuLink>
              <MenuLink
                href="/milestones"
                className="block py-2 text-[15px] font-semibold text-gray-700 transition-colors hover:text-verus-blue dark:text-gray-300 dark:hover:text-blue-400"
              >
                Milestones
              </MenuLink>
              <MenuLink
                href="/green"
                className="block py-2 text-[15px] font-semibold text-gray-700 transition-colors hover:text-verus-blue dark:text-gray-300 dark:hover:text-blue-400"
              >
                Environmentally Friendly
              </MenuLink>
            </div>

            <h3 className="border-b border-gray-200 pb-2 pt-8 text-[11px] font-medium uppercase text-gray-500 dark:border-gray-700 dark:text-gray-400">
              Resources
            </h3>
            <div className="space-y-2">
              <MenuLink
                href="/faq"
                className="block py-2 pt-4 text-[15px] font-semibold text-gray-700 transition-colors hover:text-verus-blue dark:text-gray-300 dark:hover:text-blue-400"
              >
                FAQ
              </MenuLink>
              <MenuLink
                href="/papers"
                className="block py-2 text-[15px] font-semibold text-gray-700 transition-colors hover:text-verus-blue dark:text-gray-300 dark:hover:text-blue-400"
              >
                Papers
              </MenuLink>
            </div>

            <h3 className="border-b border-gray-200 pb-2 pt-8 text-[11px] font-medium uppercase text-gray-500 dark:border-gray-700 dark:text-gray-400">
              Updates
            </h3>
            <div className="space-y-2">
              <MenuLink
                href="/statistics"
                className="block py-2 pt-4 text-[15px] font-semibold text-gray-700 transition-colors hover:text-verus-blue dark:text-gray-300 dark:hover:text-blue-400"
              >
                Network Statistics
              </MenuLink>
              <MenuLink
                href={env.NEXT_PUBLIC_VERUS_MEDIUM}
                className="flex items-center gap-2 py-2 text-[15px] font-semibold text-gray-700 transition-colors hover:text-verus-blue dark:text-gray-300 dark:hover:text-blue-400"
              >
                Blog
                <ExternalLink className="h-4 w-4 opacity-50 group-hover:opacity-100" />
              </MenuLink>
            </div>
          </MobileSection>

          {/* Community Section */}
          <MobileSection
            title="Community"
            isOpen={openSection === 'community'}
            toggleSection={toggleSection}
          >
            <h3 className="border-b border-gray-200 pb-2 pt-8 text-[11px] font-medium uppercase text-gray-500 dark:border-gray-700 dark:text-gray-400">
              Explore
            </h3>
            <div className="space-y-2">
              <MenuLink
                href="/community"
                className="block py-2 pt-4 text-[15px] font-semibold text-gray-700 transition-colors hover:text-verus-blue dark:text-gray-300 dark:hover:text-blue-400"
              >
                Community Hub
              </MenuLink>
              <MenuLink
                href="/projects"
                className="block py-2 text-[15px] font-semibold text-gray-700 transition-colors hover:text-verus-blue dark:text-gray-300 dark:hover:text-blue-400"
              >
                Community Projects
              </MenuLink>
              <MenuLink
                href="/people"
                className="block py-2 text-[15px] font-semibold text-gray-700 transition-colors hover:text-verus-blue dark:text-gray-300 dark:hover:text-blue-400"
              >
                People
              </MenuLink>
            </div>

            <h3 className="border-b border-gray-200 pb-2 pt-8 text-[11px] font-medium uppercase text-gray-500 dark:border-gray-700 dark:text-gray-400">
              Get Involved
            </h3>
            <div className="space-y-2">
              {/* Bounties link temporarily hidden
              <MenuLink href="/#" className="block text-[15px] py-2 pt-4 text-gray-700 dark:text-gray-300 hover:text-verus-blue dark:hover:text-blue-400 transition-colors">Bounties</MenuLink>
              */}
              <MenuLink
                href="/contribute"
                className="block py-2 text-[15px] font-semibold text-gray-700 transition-colors hover:text-verus-blue dark:text-gray-300 dark:hover:text-blue-400"
              >
                Contribute
              </MenuLink>
            </div>

            <h3 className="border-b border-gray-200 pb-2 pt-8 text-[11px] font-medium uppercase text-gray-500 dark:border-gray-700 dark:text-gray-400">
              Social Media
            </h3>
            <div className="grid grid-cols-2 gap-x-4 gap-y-2 pt-2">
              <MenuLink
                href={env.NEXT_PUBLIC_DISCORD}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3 py-2"
              >
                <div className="flex h-8 w-8 items-center justify-center">
                  <IoLogoDiscord className="h-4 w-4 text-[#5865F2] dark:text-white" />
                </div>
                <span className="text-[15px] font-semibold text-gray-700 dark:text-gray-300">
                  Discord
                </span>
              </MenuLink>
              <MenuLink
                href={env.NEXT_PUBLIC_VERUS_TWITTER}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3 py-2"
              >
                <div className="flex h-8 w-8 items-center justify-center">
                  <FaXTwitter className="h-4 w-4 text-black dark:text-white" />
                </div>
                <span className="text-[15px] font-semibold text-gray-700 dark:text-gray-300">
                  X
                </span>
              </MenuLink>
              <MenuLink
                href={env.NEXT_PUBLIC_VERUS_TELEGRAM}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3 py-2"
              >
                <div className="flex h-8 w-8 items-center justify-center">
                  <FaTelegram className="h-4 w-4 text-[#0088cc] dark:text-white" />
                </div>
                <span className="text-[15px] font-semibold text-gray-700 dark:text-gray-300">
                  Telegram
                </span>
              </MenuLink>
              <MenuLink
                href={env.NEXT_PUBLIC_VERUS_REDDIT}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3 py-2"
              >
                <div className="flex h-8 w-8 items-center justify-center">
                  <FaReddit className="h-4 w-4 text-[#FF4500] dark:text-white" />
                </div>
                <span className="text-[15px] font-semibold text-gray-700 dark:text-gray-300">
                  Reddit
                </span>
              </MenuLink>
              <MenuLink
                href={env.NEXT_PUBLIC_VERUS_FACEBOOK}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3 py-2"
              >
                <div className="flex h-8 w-8 items-center justify-center">
                  <FaFacebook className="h-4 w-4 text-[#1877F2] dark:text-white" />
                </div>
                <span className="text-[15px] font-semibold text-gray-700 dark:text-gray-300">
                  Facebook
                </span>
              </MenuLink>
              <MenuLink
                href={env.NEXT_PUBLIC_VERUS_YOUTUBE}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3 py-2"
              >
                <div className="flex h-8 w-8 items-center justify-center">
                  <FaYoutube className="h-4 w-4 text-[#FF0000] dark:text-white" />
                </div>
                <span className="text-[15px] font-semibold text-gray-700 dark:text-gray-300">
                  YouTube
                </span>
              </MenuLink>
            </div>
          </MobileSection>

          {/* Media - non-collapsable */}
          <div className="border-b border-gray-100 dark:border-gray-800">
            <div className="-mx-6">
              <div className="px-6">
                <MenuLink
                  href="/media"
                  className="flex w-full items-center justify-between py-4"
                >
                  <span className="text-[15px] font-semibold text-gray-700 dark:text-gray-300">
                    Media
                  </span>
                </MenuLink>
              </div>
            </div>
          </div>

          {/* Donate - non-collapsable */}
          <div className="border-b border-gray-100 dark:border-gray-800">
            <div className="-mx-6">
              <div className="px-6">
                <MenuLink
                  href="/donate"
                  className="flex w-full items-center justify-between py-4"
                >
                  <span className="text-[15px] font-semibold text-gray-700 dark:text-gray-300">
                    Donate
                  </span>
                </MenuLink>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between pb-4 pt-5">
            <div className="flex items-center gap-2">
              <MenuLink
                href={env.NEXT_PUBLIC_VERUS_TWITTER}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-8 w-8 items-center justify-center"
                aria-label="X (Twitter)"
              >
                <FaXTwitter className="h-5 w-5 text-black dark:text-white" />
              </MenuLink>

              <MenuLink
                href={env.NEXT_PUBLIC_DISCORD}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-8 w-8 items-center justify-center"
                aria-label="Discord"
              >
                <IoLogoDiscord className="h-5 w-5 text-[#5865F2] dark:text-white" />
              </MenuLink>

              <MenuLink
                href={env.NEXT_PUBLIC_VERUS_GITHUB}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-8 w-8 items-center justify-center"
                aria-label="GitHub"
              >
                <IoLogoGithub className="h-5 w-5 text-gray-800 dark:text-white" />
              </MenuLink>
            </div>

            <ThemeModeControl
              size="sm"
              className="w-auto"
              labelClassName="sr-only"
              controlClassName="shrink-0 [&>button]:w-9 [&>button]:min-w-0 [&>button]:px-0 [&>button:first-child]:w-12"
            />
          </div>
        </nav>
      </div>
    </MobileMenuCloseContext.Provider>
  )
}
