'use client'

import type {KeyboardEvent} from 'react'

import {useRef, useState} from 'react'
import {ChevronDown} from 'lucide-react'

import {cn} from '@/lib/utils'

const acronymItems = [
  {
    letter: 'D',
    title: 'Decentralized',
    body: 'Identity and value are verified through Verus protocol rules. The application can request an action without becoming the user’s identity provider, payment intermediary, or data custodian.',
  },
  {
    letter: 'R',
    title: 'Rights-preserving',
    body: 'The wallet shows what the application is asking for. The user decides what to share, sign, pay, prove, or unlock before approving a response.',
  },
  {
    letter: 'E',
    title: 'Encrypted',
    body: 'Supported application data can be encrypted before it is stored or transferred. The application server can hold the ciphertext without being able to read it.',
  },
  {
    letter: 'A',
    title: 'Application',
    body: 'The same request and response pattern can support authentication, payments, identity actions, and app encryption.',
  },
  {
    letter: 'M',
    title: 'Model',
    body: 'DREAM is the complete pattern: the application creates a request, the user reviews it in the wallet, and the application verifies the signed response.',
  },
]

export function DreamAcronymTabs() {
  const [activeIndex, setActiveIndex] = useState(0)
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([])
  const activeItem = acronymItems[activeIndex]

  function focusTab(index: number) {
    setActiveIndex(index)
    tabRefs.current[index]?.focus()
  }

  function handleTabKeyDown(
    event: KeyboardEvent<HTMLButtonElement>,
    index: number
  ) {
    let nextIndex = index

    switch (event.key) {
      case 'ArrowDown':
        nextIndex = (index + 1) % acronymItems.length
        break
      case 'ArrowUp':
        nextIndex = (index - 1 + acronymItems.length) % acronymItems.length
        break
      case 'Home':
        nextIndex = 0
        break
      case 'End':
        nextIndex = acronymItems.length - 1
        break
      default:
        return
    }

    event.preventDefault()
    focusTab(nextIndex)
  }

  return (
    <>
      <div className="overflow-hidden rounded-lg border border-gray-200 bg-white/40 dark:border-gray-800 dark:bg-white/[0.02] md:hidden">
        {acronymItems.map((item, index) => {
          const isActive = index === activeIndex

          return (
            <div
              key={item.title}
              className={cn(
                index > 0 && 'border-t border-gray-200 dark:border-gray-800',
                isActive && 'bg-blue-50/70 dark:bg-blue-950/20'
              )}
            >
              <button
                aria-controls={`dream-acronym-mobile-panel-${index}`}
                aria-expanded={isActive}
                className={cn(
                  'flex w-full items-center gap-4 px-4 py-4 text-left transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-verus-blue',
                  isActive
                    ? 'text-gray-900 dark:text-white'
                    : 'text-gray-500 hover:bg-white/60 hover:text-gray-800 dark:text-gray-400 dark:hover:bg-white/[0.03] dark:hover:text-gray-200'
                )}
                id={`dream-acronym-mobile-trigger-${index}`}
                onClick={() => setActiveIndex(index)}
                type="button"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md border border-blue-200 bg-blue-50 font-display text-[18px] font-medium text-verus-blue dark:border-blue-900/70 dark:bg-blue-950/40 dark:text-blue-300">
                  {item.letter}
                </span>
                <span className="font-display text-[20px] font-medium tracking-tight">
                  {item.title}
                </span>
                <ChevronDown
                  aria-hidden="true"
                  className={cn(
                    'ml-auto h-5 w-5 shrink-0 transition-transform',
                    isActive && 'rotate-180'
                  )}
                />
              </button>

              <div
                aria-labelledby={`dream-acronym-mobile-trigger-${index}`}
                hidden={!isActive}
                id={`dream-acronym-mobile-panel-${index}`}
                role="region"
              >
                <p className="pb-5 pl-[68px] pr-4 text-[15px] leading-relaxed tracking-normal text-gray-600 dark:text-gray-300">
                  {item.body}
                </p>
              </div>
            </div>
          )
        })}
      </div>

      <div className="hidden gap-8 md:grid md:grid-cols-[260px_minmax(0,1fr)] md:gap-12">
        <div
          aria-label="DREAM acronym"
          aria-orientation="vertical"
          className="flex flex-col gap-2"
          role="tablist"
        >
          {acronymItems.map((item, index) => {
            const isActive = index === activeIndex

            return (
              <button
                key={item.title}
                ref={(element) => {
                  tabRefs.current[index] = element
                }}
                aria-controls="dream-acronym-desktop-panel"
                aria-selected={isActive}
                className={cn(
                  'flex items-center gap-4 rounded-lg border px-4 py-3 text-left transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-verus-blue focus-visible:ring-offset-2 dark:focus-visible:ring-offset-gray-950',
                  isActive
                    ? 'border-blue-200 bg-blue-50/80 text-gray-900 dark:border-blue-800 dark:bg-blue-950/30 dark:text-white'
                    : 'border-transparent text-gray-500 hover:border-gray-200 hover:bg-white/50 hover:text-gray-800 dark:text-gray-400 dark:hover:border-gray-800 dark:hover:bg-white/[0.03] dark:hover:text-gray-200'
                )}
                id={`dream-acronym-desktop-tab-${index}`}
                onClick={() => setActiveIndex(index)}
                onKeyDown={(event) => handleTabKeyDown(event, index)}
                role="tab"
                tabIndex={isActive ? 0 : -1}
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
          aria-labelledby={`dream-acronym-desktop-tab-${activeIndex}`}
          className="py-3"
          id="dream-acronym-desktop-panel"
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
    </>
  )
}
