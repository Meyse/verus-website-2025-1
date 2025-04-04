import './globals.css'
import type { Metadata } from 'next'
import { Header } from '@/components/header'
import { geomanist } from './fonts'
import { ThemeProvider } from '@/context/ThemeContext'

// Helper function to get the base URL
export function getSiteUrl() {
  return process.env.NEXT_PUBLIC_BASE_URL || 'https://nextdev.verus.io'
}

export const metadata: Metadata = {
  title: 'The Internet of Value | Verus',
  description: 'A fundamentally different and better protocol to build Web3, and to empower individuals & communities.',
  metadataBase: new URL(getSiteUrl()),
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${geomanist.variable}`}>
      <body className={geomanist.className}>
        <ThemeProvider>
          <Header />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}