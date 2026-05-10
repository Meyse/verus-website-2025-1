import type {ReactNode} from 'react'

import Link from 'next/link'

import {ExternalLink} from 'lucide-react'

import {NavigationMenuLink} from '../ui/navigation-menu'

type NavLinkProps = {
  href: string
  icon: ReactNode
  title: ReactNode
  description?: string
  isExternal?: boolean
}

export function NavLink({
  href,
  icon,
  title,
  description,
  isExternal,
}: NavLinkProps) {
  return (
    <NavigationMenuLink asChild>
      <Link
        href={href}
        className="group flex items-start rounded-lg pb-3 pt-3 transition-colors"
        target={isExternal ? '_blank' : undefined}
        rel={isExternal ? 'noopener noreferrer' : undefined}
      >
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-100 transition-colors group-hover:bg-verus-blue/10 dark:bg-gray-800 dark:group-hover:bg-verus-blue/20">
          {icon}
        </div>
        <div className="ml-3">
          <div className="mb-1 flex items-center gap-2 text-[15px] font-semibold text-gray-800 group-hover:underline dark:text-white">
            {title}
            {isExternal && (
              <ExternalLink className="h-4 w-4 opacity-50 group-hover:opacity-100" />
            )}
          </div>
          {description && (
            <p className="text-sm text-gray-500 dark:text-gray-300">
              {description}
            </p>
          )}
        </div>
      </Link>
    </NavigationMenuLink>
  )
}
