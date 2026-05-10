'use client'

import type {
  VerifySchema,
  VerifyType,
} from '@/features/verify/schemas/verification-schema'
import type {StatusError} from '@/features/verify/server/get-verification'

import {useEffect} from 'react'

import {verificationFormAction} from '@/features/verify/action/verification-submit'
import {verificationSchema} from '@/features/verify/schemas/verification-schema'
import {zodResolver} from '@hookform/resolvers/zod'
import {useHookFormAction} from '@next-safe-action/adapter-react-hook-form/hooks'

import {Form} from '@/components/ui/form'
import {Button} from '@/components/ui/button'

import {AutoVerification} from './auto-verified'
import {FileDropZoneInput} from './file-dropzone-input'
import {VerifyTypeSelector} from './form-type-selector'
import {FormHashField} from './hash-input'
import {FormVerusIdField} from './id-input'
import {FormMessageField} from './msg-input'
import {FormSignatureField} from './sig-input'
import VerificationIcons from './verification-icon'
import VerificationResult from './verification-results'

const getVerifyType = (verify?: VerifyType, hash?: string): VerifyType => {
  if (verify) return verify
  if (hash) return 'hash'
  return 'message'
}

export interface VerificationFormType extends VerifySchema {
  auto?: boolean
  error?: StatusError
}

export function VerificationForm({formInfo}: {formInfo: VerificationFormType}) {
  // const [autoValidated, setAutoValidated] = useState(formInfo.auto || false)

  const {form, action, handleSubmitWithAction} = useHookFormAction(
    verificationFormAction,
    zodResolver(verificationSchema),
    {
      formProps: {
        mode: 'onChange',

        defaultValues: {
          verify_type: getVerifyType(formInfo.verify_type, formInfo.hash),
          verusid: formInfo.verusid || '',
          signature: formInfo.signature || '',
          message: formInfo.message || '',
          hash: formInfo.hash || '',
          fileName: '',
          fileHash: '',
          auto: formInfo.auto || false,
        },
      },
      actionProps: {
        onSuccess(args) {
          const params = new URLSearchParams()
          if (!args.input.fileName) {
            if (args.input.message) params.set('message', args.input.message)
            if (args.input.hash) params.set('hash', args.input.hash)
            params.set('verusid', args.input.verusid)
            params.set('signature', args.input.signature)
          }

          window.history.replaceState(null, '', `?${params.toString()}`)
        },
        onSettled(args) {
          form.reset({...args.input, auto: false})
        },
      },
    }
  )

  const resetForm = (tab: 'message' | 'hash' | 'file') => {
    window.history.replaceState(null, '', '?')
    form.reset({
      verify_type: tab,
      verusid: '',
      signature: '',
      message: '',
      hash: '',
      fileName: '',
      fileHash: '',
      auto: false,
    })
    action.reset()
  }
  const auto = form.watch('auto')
  const valid = auto && !formInfo.error
  useEffect(() => {
    if (auto && action.isIdle && !!formInfo.error) {
      Object.entries(formInfo.error).forEach(([k, v]) =>
        form.setError(k as 'message' | 'hash' | 'verusid' | 'signature', {
          message: v,
        })
      )
    }
  }, [action.isIdle, auto, form, formInfo.error])

  return (
    <section className="bg-white dark:bg-gray-950">
      <Form {...form}>
        <VerifyTypeSelector reset={resetForm} />
        <div className="px-8 py-10 md:px-14 md:py-14">
          <div className="max-w-[820px]">
          <AutoVerification />
          <form onSubmit={handleSubmitWithAction} className="space-y-6">
            <VerificationIcons />
            <VerificationResult
              status={{
                isPending: action.isPending,
                isIdle: action.isIdle,
                hasSucceeded: action.hasSucceeded,
                hasErrored: action.hasErrored,
              }}
              valid={valid}
            />
            <FormMessageField />
            <FileDropZoneInput />
            <FormHashField />
            <FormVerusIdField />
            <FormSignatureField />

            <div className="mt-8">
              <Button
                type="submit"
                disabled={action.isPending}
                variant="verusPrimary"
                size="verus"
                className="w-full md:w-fit"
              >
                {action.isPending ? (
                  <span className="flex items-center justify-center">
                    <svg
                      className="-ml-1 mr-2 h-4 w-4 animate-spin text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Verifying
                  </span>
                ) : (
                  'Verify signature'
                )}
              </Button>
            </div>
          </form>
          </div>
        </div>
      </Form>
    </section>
  )
}
