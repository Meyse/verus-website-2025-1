import type {ReactNode} from 'react'

import {ExternalLink} from 'lucide-react'

import {cn} from '@/lib/utils'

interface TextLinkButtonProps {
  children: ReactNode
  className?: string
  contentClassName?: string
  externalIconClassName?: string
  href: string
  icon?: ReactNode
  showExternalIcon?: boolean
}

export function TextLinkButton({
  children,
  className,
  contentClassName,
  externalIconClassName,
  href,
  icon,
  showExternalIcon = true,
}: TextLinkButtonProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        'group inline-flex items-start rounded-lg p-2 transition-colors [&>div>div]:hover:underline',
        className
      )}
    >
      <div>
        <div
          className={cn(
            'mb-1 flex items-center gap-2 text-[15px] font-[450] text-gray-800 dark:text-white',
            contentClassName
          )}
        >
          {icon}
          {children}
          {showExternalIcon && (
            <ExternalLink
              className={cn(
                'h-4 w-4 opacity-50 group-hover:opacity-100',
                externalIconClassName
              )}
            />
          )}
        </div>
      </div>
    </a>
  )
}
