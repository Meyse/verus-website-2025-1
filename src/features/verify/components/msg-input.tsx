import {useFormContext} from 'react-hook-form'

import {useFormValues} from '@/hooks/use-form-values'

import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
} from '@/components/ui/form'

export function FormMessageField() {
  const {control} = useFormContext()
  const {verify_type} = useFormValues()

  if (verify_type !== 'message') return null

  return (
    <FormField
      control={control}
      name="message"
      render={({field}) => (
        <FormItem>
          <FormLabel className="block text-sm font-medium text-gray-700 dark:text-gray-300">
            Message
          </FormLabel>
          <FormControl>
            <textarea
              rows={4}
              placeholder="Enter the message to verify"
              className="min-h-20 w-full rounded-lg border border-gray-300 bg-white p-3 font-mono text-sm shadow-sm focus:border-verus-blue focus:ring-verus-blue dark:border-gray-700 dark:bg-gray-900 dark:text-white"
              {...field}
            />
          </FormControl>
          <FormDescription className="text-xs text-gray-500 dark:text-gray-400">
            Enter the exact message that was signed (must match exactly,
            including spaces and capitalization).
          </FormDescription>
        </FormItem>
      )}
    />
  )
}
