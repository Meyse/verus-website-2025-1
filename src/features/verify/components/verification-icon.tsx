import {FileText, MessageSquare, Upload} from 'lucide-react'

import {useFormValues} from '@/hooks/use-form-values'

/* Current verification type header */
export default function VerificationIcons() {
  const {verify_type} = useFormValues()
  return (
    <div className="mb-4 flex items-center gap-2">
      {getVerificationIcon(verify_type)}
      <h3 className="text-[18px] font-medium text-gray-900 dark:text-white">
        {verify_type === 'file'
          ? 'File verification'
          : verify_type === 'message'
            ? 'Message verification'
            : 'Hash verification'}
      </h3>
    </div>
  )
}

// Get icon for current verification type
const getVerificationIcon = (verify_type: string) => {
  switch (verify_type) {
    case 'file':
      return <Upload className="h-5 w-5 text-verus-blue dark:text-blue-400" />
    case 'message':
      return (
        <MessageSquare className="h-5 w-5 text-verus-blue dark:text-blue-400" />
      )
    case 'hash':
      return <FileText className="h-5 w-5 text-verus-blue dark:text-blue-400" />
  }
}
