import {Source_Sans_3} from 'next/font/google'
import localFont from 'next/font/local'

export const sourceSans = Source_Sans_3({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-source-sans-3',
  fallback: [
    '-apple-system',
    'BlinkMacSystemFont',
    'Segoe UI',
    'Roboto',
    'Helvetica Neue',
    'Arial',
    'sans-serif',
  ],
})

export const geomanist = localFont({
  src: [
    {
      path: '../../public/fonts/geomanist-regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/geomanist-book.woff2',
      weight: '450',
      style: 'normal',
    },
    {
      path: '../../public/fonts/geomanist-medium.woff2',
      weight: '500',
      style: 'normal',
    },
  ],
  preload: true,
  display: 'swap',
  variable: '--font-geomanist',
  fallback: [
    '-apple-system',
    'BlinkMacSystemFont',
    'Segoe UI',
    'Roboto',
    'Helvetica Neue',
    'Arial',
    'sans-serif',
  ],
})
