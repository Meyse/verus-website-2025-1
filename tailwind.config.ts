import type {Config} from 'tailwindcss'

const systemSansFallback = [
  'ui-sans-serif',
  'system-ui',
  '-apple-system',
  'BlinkMacSystemFont',
  'Segoe UI',
  'Roboto',
  'Helvetica Neue',
  'Arial',
  'sans-serif',
]

const config: Config = {
  darkMode: ['class'],
  content: [
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/features/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        verus: {
          blue: '#3165D4',
        },
        black: '#0F0F0F',
      },
      fontFamily: {
        sans: ['var(--font-source-sans-3)', ...systemSansFallback],
        display: [
          'var(--font-geomanist)',
          'var(--font-source-sans-3)',
          ...systemSansFallback,
        ],
      },
      animation: {
        in: 'enter 100ms ease-out',
        out: 'exit 100ms ease-in',
        'fade-in': 'fade-in 100ms ease-out',
        'fade-out': 'fade-out 100ms ease-in',
        'zoom-in-90': 'zoom-in-90 100ms ease-out',
        'zoom-out-95': 'zoom-out-95 100ms ease-in',
        'marquee-ltr': 'marquee-ltr 60s linear infinite',
        'marquee-rtl': 'marquee-rtl 60s linear infinite',
        'scroll-down': 'scroll-down 35s linear infinite',
        'scroll-up': 'scroll-up 35s linear infinite',
      },
      keyframes: {
        'marquee-ltr': {
          '0%': {
            transform: 'translateX(0)',
          },
          '100%': {
            transform: 'translateX(-100%)',
          },
        },
        'marquee-rtl': {
          '0%': {
            transform: 'translateX(-100%)',
          },
          '100%': {
            transform: 'translateX(0)',
          },
        },
        'scroll-down': {
          '0%': {
            transform: 'translateY(0)',
          },
          '100%': {
            transform: 'translateY(calc(-100% + 500px))',
          },
        },
        'scroll-up': {
          '0%': {
            transform: 'translateY(calc(-100% + 500px))',
          },
          '100%': {
            transform: 'translateY(0)',
          },
        },
      },
    },
  },

  plugins: [require('tailwindcss-animate')],
}

export default config
