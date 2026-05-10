'use client'

import {Moon, Sun} from 'lucide-react'
import {useTheme} from 'next-themes'

import {cn} from '@/lib/utils'
import {useIsMounted} from '@/hooks/use-is-mounted'

type ThemeMode = 'system' | 'light' | 'dark'

type ThemeModeControlProps = {
  className?: string
  labelClassName?: string
  controlClassName?: string
  size?: 'default' | 'sm'
  variant?: 'default' | 'inverted'
}

const themeModes: Array<{
  value: ThemeMode
  label: string
  icon?: typeof Sun
}> = [
  {value: 'system', label: 'Auto'},
  {value: 'light', label: 'Light', icon: Sun},
  {value: 'dark', label: 'Dark', icon: Moon},
]

function isThemeMode(theme: string | undefined): theme is ThemeMode {
  return theme === 'system' || theme === 'light' || theme === 'dark'
}

export function ThemeModeControl({
  className,
  labelClassName,
  controlClassName,
  size = 'default',
  variant = 'default',
}: ThemeModeControlProps) {
  const mounted = useIsMounted()
  const {theme, setTheme} = useTheme()

  const activeTheme: ThemeMode =
    mounted && isThemeMode(theme) ? theme : 'system'
  const isInverted = variant === 'inverted'
  const isSmall = size === 'sm'

  return (
    <div
      className={cn(
        'flex w-full items-center justify-between',
        isSmall ? 'gap-2' : 'gap-4',
        className
      )}
      suppressHydrationWarning
    >
      <span
        className={cn(
          'font-medium',
          isSmall ? 'text-[13px]' : 'text-[15px]',
          isInverted ? 'text-gray-300' : 'text-gray-700 dark:text-gray-300',
          labelClassName
        )}
      >
        Theme
      </span>
      <div
        role="group"
        aria-label="Theme"
        className={cn(
          'flex items-center rounded-full border p-1',
          isSmall ? 'h-9' : 'h-10',
          isInverted
            ? 'border-gray-700 bg-[#151515]'
            : 'border-gray-200 bg-gray-100 dark:border-gray-700 dark:bg-gray-900',
          controlClassName
        )}
      >
        {themeModes.map(({value, label, icon: Icon}) => {
          const isActive = value === activeTheme

          return (
            <button
              key={value}
              type="button"
              aria-pressed={isActive}
              aria-label={label}
              disabled={!mounted}
              onClick={() => setTheme(value)}
              className={cn(
                'flex items-center justify-center rounded-full font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-verus-blue focus-visible:ring-offset-2 focus-visible:ring-offset-white disabled:cursor-default dark:focus-visible:ring-offset-gray-950',
                isSmall ? 'h-7 text-[13px]' : 'h-8 text-[14px]',
                Icon
                  ? isSmall
                    ? 'w-10'
                    : 'w-12'
                  : isSmall
                    ? 'min-w-[64px] px-3'
                    : 'min-w-[82px] px-4',
                isInverted
                  ? cn(
                      'focus-visible:ring-offset-[#010101]',
                      isActive
                        ? 'bg-gray-700 text-white'
                        : 'text-gray-400 hover:text-white'
                    )
                  : isActive
                    ? 'bg-white text-gray-950 shadow-sm dark:bg-gray-700 dark:text-white'
                    : 'text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white'
              )}
            >
              {Icon ? (
                <>
                  <Icon
                    className={cn(isSmall ? 'h-4 w-4' : 'h-5 w-5')}
                    aria-hidden="true"
                  />
                  <span className="sr-only">{label}</span>
                </>
              ) : (
                label
              )}
            </button>
          )
        })}
      </div>
    </div>
  )
}
