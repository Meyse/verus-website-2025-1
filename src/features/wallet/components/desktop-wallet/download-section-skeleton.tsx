export function DownloadSectionSkeleton() {
  return (
    <>
      <div className="relative space-y-4">
        {/* Main Download Button */}
        <div className="h-[50px] animate-pulse rounded-lg bg-gray-200 dark:bg-gray-700" />

        {/* Other Downloads Button */}
        <div className="h-[50px] animate-pulse rounded-lg bg-gray-200 dark:bg-gray-700" />
      </div>
      <div className="mt-3 flex items-center">
        <div className="mr-3 text-sm font-medium text-gray-800 dark:text-white">
          Version:{' '}
        </div>

        <div className="h-9 w-40 animate-pulse rounded-md bg-gray-200 dark:bg-gray-700" />
      </div>
    </>
  )
}
