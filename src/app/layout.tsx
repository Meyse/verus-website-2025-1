import './globals.css'

import type {Metadata} from 'next'

import {env} from '@/configs/env'
import NextTopLoader from 'nextjs-toploader'

import {DevUItools} from '@/components/devTools'
import {Header} from '@/components/header'
import {ThemeProvider} from '@/components/providers/next_theme_provider'
import TanstackProvider from '@/components/providers/tanstack-query-provider'

import {geomanist} from './fonts'

export const metadata: Metadata = {
  metadataBase: new URL(env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'),
  title: {
    template: '%s | Verus',
    default: 'The Internet of Value | Verus',
  },
  description:
    'A fundamentally different and better protocol to build Web3, and to empower individuals & communities.',
  keywords:
    'Verus, blockchain, Web3, cryptocurrency, decentralization, DeFi, identity, privacy, interoperability, scalability',
  openGraph: {
    // url: '/',
    siteName: 'Verus',
    type: 'website',
    // title: provided by metadata,
    // description: provided by metadata,
    // opengraph-image.png and opengraph-image.alt.txt files are already in the app directory
  },
  twitter: {
    card: 'summary_large_image',
    // title: provided by metadata,
    // description: provided by metadata,
    // twitter-image.png is already in the app directory
  },
}

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html
      lang="en"
      className={`${geomanist.variable}`}
      suppressHydrationWarning
    >
      <body className={`${geomanist.className} antialiased`}>
        <NextTopLoader showSpinner={false} />
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <TanstackProvider>
            {children}

            <DevUItools />
          </TanstackProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
