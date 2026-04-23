import {ArrowRight, FileText, MessageSquare, Upload} from 'lucide-react'

import {useFormValues} from '@/hooks/use-form-values'

/* Verification type selector and download wallet link */
export function VerifyTypeSelector({
  reset,
}: {
  reset: (tab: 'message' | 'hash' | 'file') => void
}) {
  const {verify_type} = useFormValues()

  return (
    <div className="mb-8 flex flex-wrap justify-between gap-4">
      <div className="flex flex-wrap gap-2">
        <button
          type="button"
          onClick={() => reset('message')}
          className={`flex items-center gap-2 rounded-md px-4 py-2 text-[14px] font-medium transition-colors ${
            verify_type === 'message'
              ? 'bg-verus-blue text-white dark:bg-blue-700'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700'
          }`}
        >
          <MessageSquare className="h-4 w-4" />
          Message
        </button>
        <button
          type="button"
          onClick={() => reset('file')}
          className={`flex items-center gap-2 rounded-md px-4 py-2 text-[14px] font-medium transition-colors ${
            verify_type === 'file'
              ? 'bg-verus-blue text-white dark:bg-blue-700'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700'
          }`}
        >
          <Upload className="h-4 w-4" />
          File
        </button>
        <button
          type="button"
          onClick={() => reset('hash')}
          className={`flex items-center gap-2 rounded-md px-4 py-2 text-[14px] font-medium transition-colors ${
            verify_type === 'hash'
              ? 'bg-verus-blue text-white dark:bg-blue-700'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700'
          }`}
        >
          <FileText className="h-4 w-4" />
          Hash
        </button>
      </div>

      <a
        href="/wallet"
        rel="noopener noreferrer"
        className="group flex h-[40px] w-fit items-center justify-center gap-2 rounded-lg border border-blue-200 bg-white/80 px-4 text-[14px] font-medium text-verus-blue backdrop-blur-sm transition-all duration-300 hover:border-blue-300 hover:text-blue-600 dark:border-blue-800/60 dark:bg-blue-950/80 dark:text-blue-300 dark:hover:border-blue-700 dark:hover:text-blue-200"
      >
        Download wallet to create signatures
        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
      </a>
    </div>
  )
}
