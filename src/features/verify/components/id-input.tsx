import {useFormContext} from 'react-hook-form'

import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
} from '@/components/ui/form'

export function FormVerusIdField() {
  const {control} = useFormContext()
  return (
    <FormField
      control={control}
      name="verusid"
      render={({field}) => (
        <FormItem>
          <FormLabel className="block text-sm font-medium text-gray-700 dark:text-gray-300">
            VerusID or i-address
          </FormLabel>
          <FormControl>
            <input
              autoComplete="off"
              placeholder="Enter the VerusID or i-address of the signer"
              className="w-full rounded-lg border border-gray-300 bg-white p-3 shadow-sm focus:border-verus-blue focus:ring-verus-blue dark:border-gray-700 dark:bg-gray-900 dark:text-white"
              {...field}
            />
          </FormControl>
          <FormDescription className="text-xs text-gray-500 dark:text-gray-400">
            The identity that created the signature (e.g., somebody@ or
            iGAw5poQXU9...).
          </FormDescription>
        </FormItem>
      )}
    />
  )
}
