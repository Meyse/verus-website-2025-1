import type {VariantProps} from 'class-variance-authority'

import * as React from 'react'

import {Slot} from '@radix-ui/react-slot'
import {cva} from 'class-variance-authority'

import {cn} from '@/lib/utils'

const buttonVariants = cva(
  'ring-offset-background focus-visible:ring-ring group inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0',
  {
    variants: {
      variant: {
        default: 'bg-primary text-primary-foreground hover:bg-primary/90',
        destructive:
          'bg-destructive text-destructive-foreground hover:bg-destructive/90',
        outline:
          'border-input bg-background hover:bg-accent hover:text-accent-foreground border',
        secondary:
          'bg-secondary text-secondary-foreground hover:bg-secondary/80',
        ghost: 'hover:bg-accent hover:text-accent-foreground',
        link: 'text-primary underline-offset-4 hover:underline',
        verusPrimary:
          'border border-verus-blue bg-verus-blue text-white backdrop-blur-sm transition-all duration-300 hover:bg-verus-blue/90 dark:border-verus-blue dark:bg-verus-blue dark:text-white dark:hover:bg-verus-blue/90',
        verusSecondary:
          'border border-gray-300 bg-white/90 text-gray-800 backdrop-blur-sm transition-all duration-300 hover:border-gray-400 hover:bg-white dark:border-blue-800/40 dark:bg-blue-950/40 dark:text-blue-300 dark:hover:border-blue-700/60 dark:hover:text-blue-200',
        verusSecondaryDark:
          'border border-gray-300 bg-white/90 text-gray-800 transition-all duration-300 hover:border-gray-400 hover:bg-white dark:border-gray-700 dark:bg-gray-900/80 dark:text-white dark:hover:border-gray-600',
        verusOutline:
          'border border-blue-200 bg-white/80 text-verus-blue backdrop-blur-sm transition-all duration-300 hover:border-blue-300 hover:text-blue-600 dark:border-blue-800/60 dark:bg-blue-950/80 dark:text-blue-300 dark:hover:border-blue-700 dark:hover:text-blue-200',
        verusBlue:
          'border border-blue-500 bg-blue-600 text-white backdrop-blur-sm transition-all duration-300 hover:bg-blue-700 dark:border-white/60 dark:bg-white/90 dark:text-black dark:hover:bg-white',
        verusHeroPrimary:
          'border border-white/60 bg-white/90 text-black backdrop-blur-xl transition-all duration-300 hover:border-white/90 hover:bg-white',
        verusHeroSecondary:
          'border border-blue-800/60 bg-blue-950/40 text-blue-300 backdrop-blur-sm transition-all duration-300 hover:border-blue-700/80 hover:text-blue-200',
        verusInline:
          'border border-blue-200 bg-blue-50/80 text-blue-600 backdrop-blur-sm transition-all duration-300 hover:border-blue-300 hover:bg-blue-50 hover:text-blue-700 dark:border-blue-800/40 dark:bg-blue-950/40 dark:text-blue-300 dark:hover:border-blue-700/60 dark:hover:bg-blue-950/50 dark:hover:text-blue-200',
        verusDiscord:
          'border border-white/10 bg-white/90 text-[#5865F2] backdrop-blur-sm transition-all duration-300 hover:bg-white',
      },
      size: {
        default: 'h-10 px-4 py-2 text-sm',
        sm: 'h-9 rounded-md px-3 text-sm',
        lg: 'h-11 rounded-md px-8 text-sm',
        icon: 'h-10 w-10',
        verus: 'h-[40px] rounded-lg px-6 text-[14px] md:h-[50px] md:text-[16px]',
        verusWide:
          'h-[40px] rounded-lg px-8 text-[14px] md:h-[50px] md:text-[16px]',
        verusCompact:
          'rounded-lg px-5 py-3 text-[13px] md:text-[15px]',
        verusLarge: 'h-[50px] rounded-lg px-8 text-[16px]',
        verusForm: 'h-12 rounded-lg px-6 py-2',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
)

export interface ButtonProps
  extends
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({className, variant, size, asChild = false, ...props}, ref) => {
    const Comp = asChild ? Slot : 'button'
    return (
      <Comp
        className={cn(buttonVariants({variant, size, className}))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = 'Button'

export {Button, buttonVariants}
