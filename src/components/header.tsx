// This file provides the header component with navigation for the Verus website

import {DesktopNav, Logo, MobileNav, SocialIcons} from './navbar'

export function Header() {
  return (
    <header className="fixed left-0 right-0 top-0 z-50 bg-white shadow-sm dark:bg-gray-950 dark:shadow-gray-900/50">
      <div className="mx-auto flex h-[50px] w-full max-w-[1400px] items-center justify-between px-6 transition-all md:h-[70px] md:px-8">
        <div className="flex items-center">
          <Logo />
          <DesktopNav />
        </div>

        <div className="flex items-center">
          <SocialIcons />
        </div>
        <MobileNav />
      </div>
    </header>
  )
}
