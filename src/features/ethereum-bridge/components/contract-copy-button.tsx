'use client'

import {useState} from 'react'

import {Check, Copy} from 'lucide-react'

type ContractCopyButtonProps = {
  value: string
}

export function ContractCopyButton({value}: ContractCopyButtonProps) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    await navigator.clipboard.writeText(value)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <button
      type="button"
      aria-label="Copy contract address"
      title={copied ? 'Copied' : 'Copy contract address'}
      onClick={handleCopy}
      className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg border border-blue-100 bg-white text-gray-600 transition-colors hover:border-blue-200 hover:text-verus-blue dark:border-blue-900/40 dark:bg-gray-900 dark:text-gray-300 dark:hover:border-blue-700 dark:hover:text-blue-300"
    >
      {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
    </button>
  )
}
