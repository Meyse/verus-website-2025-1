import {
  NavigationMenu,
  NavigationMenuList,
} from '@/components/ui/navigation-menu'

import { NavMenuItem } from './nav_menu_item'
import { BuildSection } from './nav_sections/build_section'
import { CommunitySection } from './nav_sections/community_section'
import { LearnSection } from './nav_sections/learn_section'
import { UseSection } from './nav_sections/use_section'

export function DesktopNav() {
  return (
    <nav className="ml-12 hidden items-center md:flex">
      <NavigationMenu delayDuration={0}>
        <NavigationMenuList className="gap-4">
          {/* Use Verus */}
          <NavMenuItem title="Use & Wallet">
            <UseSection />
          </NavMenuItem>

          {/* Build with Verus */}
          <NavMenuItem title="Build">
            <BuildSection />
          </NavMenuItem>

          {/* Learn */}
          <NavMenuItem title="Learn">
            <LearnSection />
          </NavMenuItem>

          {/* Community */}
          <NavMenuItem title="Community">
            <CommunitySection />
          </NavMenuItem>

          {/* Media - Simple link */}
          <NavMenuItem title="Media" href="/media" />

          {/* Donate */}
          <NavMenuItem title="Donate" href="/donate" />
        </NavigationMenuList>
      </NavigationMenu>
    </nav>
  )
}
