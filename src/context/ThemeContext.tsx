'use client'

import type {ReactNode} from 'react'

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useSyncExternalStore,
} from 'react'

// Simplified ThemeContext - focused only on dark mode toggling
type Theme = 'light' | 'dark'

interface ThemeContextType {
  isDark: boolean
  toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

const themeStorageKey = 'theme'
const themeChangeEvent = 'verus-theme-change'

function isTheme(value: string | null): value is Theme {
  return value === 'light' || value === 'dark'
}

function getPreferredTheme(): Theme {
  if (typeof window === 'undefined') return 'dark'

  const storedTheme = localStorage.getItem(themeStorageKey)
  if (isTheme(storedTheme)) return storedTheme

  return window.matchMedia('(prefers-color-scheme: dark)').matches
    ? 'dark'
    : 'light'
}

function subscribeToTheme(callback: () => void) {
  if (typeof window === 'undefined') return () => {}

  const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
  const listener = () => callback()

  window.addEventListener('storage', listener)
  window.addEventListener(themeChangeEvent, listener)
  mediaQuery.addEventListener('change', listener)

  return () => {
    window.removeEventListener('storage', listener)
    window.removeEventListener(themeChangeEvent, listener)
    mediaQuery.removeEventListener('change', listener)
  }
}

export function ThemeProvider({children}: {children: ReactNode}) {
  const theme = useSyncExternalStore(
    subscribeToTheme,
    getPreferredTheme,
    () => 'dark'
  )

  // Apply theme class to document when theme changes
  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark')
    localStorage.setItem(themeStorageKey, theme)
  }, [theme])

  // Simple toggle function
  const toggleTheme = useCallback(() => {
    localStorage.setItem(themeStorageKey, theme === 'light' ? 'dark' : 'light')
    window.dispatchEvent(new Event(themeChangeEvent))
  }, [theme])

  // Expose only what's needed: isDark state and toggle function
  return (
    <ThemeContext.Provider
      value={{
        isDark: theme === 'dark',
        toggleTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  )
}

// Simple hook for using the theme
export function useTheme() {
  const context = useContext(ThemeContext)

  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }

  return context
}
