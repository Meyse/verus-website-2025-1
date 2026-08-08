'use client'

import * as React from 'react'

import {ThemeProvider as NextThemesProvider, useTheme} from 'next-themes'

const lightThemeColor = '#ffffff'
const darkThemeColor = '#030712'

function ThemeColorSync() {
  const {resolvedTheme} = useTheme()

  React.useEffect(() => {
    if (resolvedTheme !== 'light' && resolvedTheme !== 'dark') return

    const themeColor =
      resolvedTheme === 'dark' ? darkThemeColor : lightThemeColor

    document
      .querySelectorAll<HTMLMetaElement>('meta[name="theme-color"]')
      .forEach((element) => element.setAttribute('content', themeColor))
  }, [resolvedTheme])

  return null
}

export function ThemeProvider({
  children,
  ...props
}: React.ComponentProps<typeof NextThemesProvider>) {
  return (
    <NextThemesProvider {...props}>
      <ThemeColorSync />
      {children}
    </NextThemesProvider>
  )
}
