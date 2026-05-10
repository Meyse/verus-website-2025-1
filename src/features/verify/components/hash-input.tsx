import {useFormContext} from 'react-hook-form'

import {useFormValues} from '@/hooks/use-form-values'

import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
} from '@/components/ui/form'

export function FormHashField() {
  const {control} = useFormContext()
  const {verify_type} = useFormValues()

  if (verify_type !== 'hash') return null

  return (
    <FormField
      control={control}
      name="hash"
      render={({field}) => (
        <FormItem>
          <FormLabel className="block text-sm font-medium text-gray-700 dark:text-gray-300">
            Hash
          </FormLabel>
          <FormControl>
            <input
              autoComplete="off"
              placeholder="Enter the hash to verify (hex format)"
              className="w-full rounded-lg border border-gray-300 bg-white p-3 shadow-sm focus:border-verus-blue focus:ring-verus-blue dark:border-gray-700 dark:bg-gray-900 dark:text-white"
              {...field}
            />
          </FormControl>
          <FormDescription className="text-xs text-gray-500 dark:text-gray-400">
            Enter the cryptographic hash that was signed (e.g., SHA-256 hash).
          </FormDescription>
        </FormItem>
      )}
    />
  )
}
