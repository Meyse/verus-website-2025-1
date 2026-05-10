'use client'

import {useState} from 'react'

import {Check, Copy} from 'lucide-react'

export function ContributeCopyButton() {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    await navigator.clipboard.writeText('Verus Coin Foundation@')
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="flex max-w-full items-center gap-2 rounded-lg border border-gray-200 bg-white p-2 pl-3 dark:border-gray-800 dark:bg-gray-900">
      <span className="min-w-0 flex-1 select-all truncate font-mono text-[12px] text-gray-700 dark:text-gray-300 md:text-[13px]">
        Verus Coin Foundation@
      </span>
      <button
        type="button"
        aria-label="Copy VerusID referral"
        title={copied ? 'Copied' : 'Copy VerusID referral'}
        onClick={handleCopy}
        className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg border border-blue-100 bg-white text-gray-600 transition-colors hover:border-blue-200 hover:text-verus-blue dark:border-blue-900/40 dark:bg-gray-900 dark:text-gray-300 dark:hover:border-blue-700 dark:hover:text-blue-300"
      >
        {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
      </button>
    </div>
  )
}
