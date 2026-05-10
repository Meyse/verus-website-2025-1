import type {ReactNode} from 'react'

import Link from 'next/link'

import {ChevronDown} from 'lucide-react'

import {
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu'

type NavMenuItemProps = {
  title: string
  href?: string
  children?: ReactNode
}

export function NavMenuItem({title, href, children}: NavMenuItemProps) {
  // If there's no children, render a simple link
  if (!children && href) {
    return (
      <NavigationMenuItem>
        <Link
          href={href}
          className="text-[15px] font-semibold text-black opacity-75 hover:underline hover:opacity-100 dark:text-white"
        >
          {title}
        </Link>
      </NavigationMenuItem>
    )
  }

  // Otherwise, render a dropdown menu
  return (
    <NavigationMenuItem>
      <NavigationMenuTrigger className="text-[15px] font-semibold text-black opacity-75 hover:underline hover:opacity-100 data-[state=open]:opacity-100 dark:text-white">
        {title}
        <ChevronDown className="ml-1 h-4 w-4 transition-transform duration-200 group-data-[state=open]:rotate-180" />
      </NavigationMenuTrigger>
      <NavigationMenuContent>
        <div className="mx-auto max-w-[1400px] p-8">{children}</div>
      </NavigationMenuContent>
    </NavigationMenuItem>
  )
}
