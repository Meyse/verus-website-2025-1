import {CheckCircle, XCircle} from 'lucide-react'
import {useFormState} from 'react-hook-form'

import {cn} from '@/lib/utils'
import {useFormValues} from '@/hooks/use-form-values'

// Render verification results

type StatusProps = {
  isPending: boolean
  isIdle: boolean
  hasSucceeded: boolean
  hasErrored: boolean
}

const resultClasses = {
  loading:
    'bg-blue-50/70 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800/50',
  success:
    'bg-green-50/70 dark:bg-green-900/20 text-green-700 dark:text-green-300 border border-green-200 dark:border-green-800/50',
  error:
    'bg-red-50/70 dark:bg-red-900/20 text-red-700 dark:text-red-300 border border-red-200 dark:border-red-800/50',
}

const iconMap = {
  loading: null,
  success: (
    <CheckCircle className="h-6 w-6 text-green-500 dark:text-green-400" />
  ),
  error: <XCircle className="h-6 w-6 text-red-500 dark:text-red-400" />,
}
export default function VerificationResult({
  status,
  valid,
}: {
  status: StatusProps
  valid?: boolean
}) {
  const {verify_type} = useFormValues()

  const {isDirty, errors} = useFormState()

  const errorList = Object.keys(errors).map((e) => errors[e]?.message)

  const inValid = errorList.length || status.hasErrored
  const isSuccess = (status.hasSucceeded || valid) && !inValid
  const verificationType =
    verify_type === 'file'
      ? 'File'
      : verify_type === 'hash'
        ? 'Hash'
        : 'Message'

  if (isDirty && !errorList.length) return null
  if (status.isIdle && !inValid && !valid) return null

  return (
    <div
      className={cn(
        'mb-6 rounded-lg p-6 backdrop-blur-sm',
        status.isPending && resultClasses.loading,
        isSuccess && resultClasses.success,
        inValid && resultClasses.error
      )}
    >
      <div className="flex flex-col items-center gap-2 text-center">
        {isSuccess && iconMap.success}
        {inValid && iconMap.error}
        <p className="text-center font-medium">
          {status.isPending ? (
            'Verifying signature...'
          ) : inValid ? (
            errorList.length > 1 ? (
              <ul>
                {errorList.map((e, i) => (
                  <li key={`${i}-${e as string}`}>{e as string}</li>
                ))}
              </ul>
            ) : (
              (errorList[0] as string)
            )
          ) : (
            `${verificationType} signature successfully verified.`
          )}
        </p>
        {/* Message signature succesfully verified! */}
        {/* Signature verification failed. The signature is not valid for this message and VerusID. */}
        {status.hasErrored && !errorList.length && (
          <p className="mt-2 text-sm">
            Ensure that the VerusID, signature, and {verify_type} are correct
            and try again.
          </p>
        )}

        {isSuccess && (
          <div className="mt-2 flex flex-col items-center">
            <p className="text-sm">
              The signature is valid and was created by the specified VerusID.
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
