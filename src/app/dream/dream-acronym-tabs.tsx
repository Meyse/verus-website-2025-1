'use client'

import {useState} from 'react'

import {cn} from '@/lib/utils'

const acronymItems = [
  {
    letter: 'D',
    title: 'Decentralized',
    body: 'Identity, value, and application permissions resolve through protocol rules instead of platform accounts.',
  },
  {
    letter: 'R',
    title: 'Rights-preserving',
    body: 'The user approves what an app can request, prove, read, or receive before the wallet signs a response.',
  },
  {
    letter: 'E',
    title: 'Encrypted',
    body: 'Application data can live anywhere as ciphertext, with keys derived by the user wallet rather than the server.',
  },
  {
    letter: 'A',
    title: 'Application',
    body: 'The same request pattern can support login, payments, credentials, subscriptions, notes, messaging, and groups.',
  },
  {
    letter: 'M',
    title: 'Model',
    body: 'DREAM is a repeatable structure for products that should feel familiar without turning user data into platform custody.',
  },
]

export function DreamAcronymTabs() {
  const [activeIndex, setActiveIndex] = useState(0)
  const activeItem = acronymItems[activeIndex]

  return (
    <div className="grid gap-8 md:grid-cols-[260px_minmax(0,1fr)] md:gap-12">
      <div
        aria-label="DREAM acronym"
        className="flex flex-col gap-2"
        role="tablist"
      >
        {acronymItems.map((item, index) => {
          const isActive = index === activeIndex

          return (
            <button
              key={item.title}
              aria-controls="dream-acronym-panel"
              aria-selected={isActive}
              className={cn(
                'flex items-center gap-4 rounded-lg border px-4 py-3 text-left transition-colors',
                isActive
                  ? 'border-gray-300 bg-white text-gray-900 dark:border-gray-700 dark:bg-white/[0.04] dark:text-white'
                  : 'border-transparent text-gray-500 hover:border-gray-200 hover:bg-white/50 hover:text-gray-800 dark:text-gray-400 dark:hover:border-gray-800 dark:hover:bg-white/[0.03] dark:hover:text-gray-200'
              )}
              id={`dream-acronym-tab-${index}`}
              onClick={() => setActiveIndex(index)}
              role="tab"
              type="button"
            >
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md border border-blue-200 bg-blue-50 font-display text-[18px] font-medium text-verus-blue dark:border-blue-900/70 dark:bg-blue-950/40 dark:text-blue-300">
                {item.letter}
              </span>
              <span className="font-display text-[20px] font-medium tracking-tight">
                {item.title}
              </span>
            </button>
          )
        })}
      </div>

      <div
        aria-labelledby={`dream-acronym-tab-${activeIndex}`}
        className="py-2 md:py-3"
        id="dream-acronym-panel"
        role="tabpanel"
      >
        <h3 className="text-[20px] font-bold leading-tight tracking-normal text-gray-800 dark:text-white">
          {activeItem.title}
        </h3>
        <p className="mt-5 max-w-[560px] text-[17px] leading-relaxed tracking-normal text-gray-600 dark:text-gray-300">
          {activeItem.body}
        </p>
      </div>
    </div>
  )
}
