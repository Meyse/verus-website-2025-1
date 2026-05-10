import {useCallback, useState} from 'react'

import {Upload} from 'lucide-react'
import {useDropzone} from 'react-dropzone'
import {useFormContext} from 'react-hook-form'

import {useFormValues} from '@/hooks/use-form-values'

import {calculateFileHash} from '../utils/calculate-file-hash'

export function FileDropZoneInput() {
  const [isCalculatingHash, setIsCalculatingHash] = useState(false)

  const {setValue} = useFormContext()
  // Watch the fileHash value to display it
  const {verify_type, fileHash, fileName} = useFormValues()
  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      const file = acceptedFiles[0]
      setValue('fileName', file.name)
      // setFileContent(file)

      void (async () => {
        setIsCalculatingHash(true)

        try {
          const hash = await calculateFileHash(file)

          setValue('fileHash', hash)
        } catch (error) {
          console.error('Error processing file:', error)
          setValue('fileHash', '')
        }
        setIsCalculatingHash(false)
      })()
    },
    [setValue]
  )

  const {getRootProps, getInputProps, isDragActive} = useDropzone({
    onDrop,

    maxFiles: 1,
  })
  if (verify_type !== 'file') return null
  return (
    <div className="space-y-4">
      <div
        {...getRootProps()}
        className="rounded-lg border border-dashed border-gray-300 bg-gray-50 p-6 text-center dark:border-gray-700 dark:bg-gray-900"
      >
        <input {...getInputProps()} />
        <div className="flex flex-col items-center justify-center">
          <Upload className="mx-auto h-12 w-12 text-verus-blue dark:text-blue-400" />
          {fileName ? (
            <div className="mt-2 space-y-3">
              <p className="text-sm font-medium text-gray-600 dark:text-gray-300">
                Selected file: {fileName}
              </p>
              {isCalculatingHash ? (
                <div className="flex items-center justify-center text-gray-500 dark:text-gray-400">
                  <svg
                    className="mr-2 h-4 w-4 animate-spin"
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
                  <span className="text-sm">Calculating hash...</span>
                </div>
              ) : (
                <div>
                  <h4 className="mb-1 text-sm font-medium text-gray-700 dark:text-gray-300">
                    File hash (SHA-256)
                  </h4>
                  <p className="max-w-full break-all rounded border border-gray-200 bg-gray-100 p-3 font-mono text-xs text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-blue-100">
                    {fileHash?.length > 0
                      ? fileHash
                      : 'Hash calculation failed. Please try again.'}
                  </p>
                </div>
              )}
            </div>
          ) : (
            <>
              {isDragActive ? (
                <p className="mt-2 text-sm font-medium text-gray-600 dark:text-gray-300">
                  Drop the file here
                </p>
              ) : (
                <p className="mt-2 text-sm font-medium text-gray-600 dark:text-gray-300">
                  Click to select a file or drag and drop
                </p>
              )}

              <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
                Any file type is supported.
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  )
}
