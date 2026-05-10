import {ArrowRight, FileText, MessageSquare, Upload} from 'lucide-react'

import {useFormValues} from '@/hooks/use-form-values'

/* Verification type selector and download wallet link */
export function VerifyTypeSelector({
  reset,
}: {
  reset: (tab: 'message' | 'hash' | 'file') => void
}) {
  const {verify_type} = useFormValues()
  const tabs = [
    {value: 'message', label: 'Message', icon: MessageSquare},
    {value: 'file', label: 'File', icon: Upload},
    {value: 'hash', label: 'Hash', icon: FileText},
  ] as const

  return (
    <div className="border-b border-gray-200 bg-gray-50 dark:border-gray-800 dark:bg-gray-950">
      <div className="flex flex-col justify-between gap-0 md:flex-row md:items-center">
        <div className="scrollbar-hide flex overflow-x-auto">
          {tabs.map(({value, label, icon: Icon}) => (
            <button
              key={value}
              type="button"
              onClick={() => reset(value)}
              className={`inline-flex whitespace-nowrap border-b-2 px-5 py-4 text-[14px] font-medium tracking-normal transition-colors md:px-8 md:text-[16px] ${
                verify_type === value
                  ? 'border-verus-blue text-verus-blue dark:border-blue-400 dark:text-blue-400'
                  : 'border-transparent text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-300'
              }`}
            >
              <span className="inline-flex items-center gap-2">
                <Icon className="h-4 w-4" />
                {label}
              </span>
            </button>
          ))}
        </div>

        <div className="px-5 pb-4 md:px-8 md:pb-0">
          <a
            href="/wallet"
            className="group flex h-[40px] w-fit items-center justify-center gap-2 rounded-lg border border-gray-300 bg-white/90 px-4 text-[14px] font-medium text-gray-800 transition-all duration-300 hover:border-gray-400 hover:bg-white dark:border-gray-700 dark:bg-gray-900/80 dark:text-white dark:hover:border-gray-600"
          >
            Download wallet to create signatures
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </div>
  )
}
