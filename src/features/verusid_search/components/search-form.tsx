'use client'

import {useEffect} from 'react'
import {useRouter} from 'next/navigation'

import {zodResolver} from '@hookform/resolvers/zod'
import {useHookFormAction} from '@next-safe-action/adapter-react-hook-form/hooks'
import {Search} from 'lucide-react'

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
} from '@/components/ui/form'

import {searchVerusIdAction} from '../actions/search_verus_id_action'
import {verusIDsearchSchema} from '../schema/search-verusID-schema'
import {SearchError} from './search-error'

export function SearchForm({
  verusID,
  error,
}: {
  verusID?: string
  error?: string
}) {
  const router = useRouter()
  console.log('error search form', error)
  const {form, action, handleSubmitWithAction} = useHookFormAction(
    searchVerusIdAction,
    zodResolver(verusIDsearchSchema),
    {
      formProps: {
        mode: 'onSubmit',
        reValidateMode: 'onSubmit',
        defaultValues: {
          verusid: verusID || '',
        },
      },
      actionProps: {
        onSuccess(args) {
          console.log(args)
          //auto redirect to the verusID and let [verusId] route handle errors
          // console.log('from success', args.data)
          router.push(`/verusid-search/${args.data}`)
        },
      },
    }
  )

  useEffect(() => {
    if (action.isIdle && !!error) {
      console.log('making it here')
      form.setError('root', {message: error})
    }
  }, [action.isIdle, error, form])
  const verusId = form.watch('verusid')
  return (
    <Form {...form}>
      <form
        onSubmit={handleSubmitWithAction}
        className="mb-8 flex flex-col gap-3 sm:flex-row"
      >
        <FormField
          control={form.control}
          name="verusid"
          render={({field}) => (
            <FormItem className="flex-1">
              <FormLabel className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                VerusID
              </FormLabel>
              <FormControl>
                <input
                  placeholder="Enter a VerusID"
                  className="w-full rounded-lg border border-blue-200/70 p-3 shadow-sm backdrop-blur-sm focus:border-verus-blue focus:ring-verus-blue dark:border-blue-800/30 dark:bg-gray-800/50 dark:text-white"
                  {...field}
                />
              </FormControl>
              <FormDescription className="-mt-1 text-xs text-gray-500 dark:text-gray-400">
                Enter a VerusID name with or without the @ symbol
              </FormDescription>
            </FormItem>
          )}
        />
        <div className="flex items-start sm:items-center">
          <button
            type="submit"
            disabled={action.isPending || !verusId.trim()}
            className="mt-1 h-12 w-full rounded-lg bg-verus-blue px-6 py-2 font-medium text-white shadow transition-all duration-300 hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-50 sm:w-auto"
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
                Searching...
              </span>
            ) : (
              <span className="flex items-center">
                <Search className="mr-2 h-4 w-4" />
                Search
              </span>
            )}
          </button>
        </div>
      </form>
      <SearchError />
    </Form>
  )
}
