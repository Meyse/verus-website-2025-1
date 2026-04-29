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
        'group inline-flex min-w-0 max-w-full items-start rounded-lg p-2 transition-colors [&>div>div>span]:hover:underline',
        className
      )}
    >
      <div className="min-w-0">
        <div
          className={cn(
            'mb-1 flex min-w-0 items-center gap-2 text-[15px] font-[450] text-gray-800 dark:text-white',
            contentClassName
          )}
        >
          {icon && <span className="shrink-0">{icon}</span>}
          <span className="min-w-0 flex-1 break-words">{children}</span>
          {showExternalIcon && (
            <ExternalLink
              className={cn(
                'h-4 w-4 shrink-0 opacity-50 group-hover:opacity-100',
                externalIconClassName
              )}
            />
          )}
        </div>
      </div>
    </a>
  )
}
