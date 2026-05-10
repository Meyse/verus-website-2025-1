export function CliDownloadsSkeleton() {
  return (
    <>
      <div className="mb-8 flex items-center gap-8 text-[14px] text-gray-600 dark:text-gray-300 md:text-[16px]">
        <div className="h-6 w-32 animate-pulse rounded bg-gray-200 dark:bg-gray-700" />
        <div className="h-6 w-48 animate-pulse rounded bg-gray-200 dark:bg-gray-700" />
      </div>
      <div className="grid grid-cols-2 gap-2 md:grid-cols-4">
        {[...Array(4)].map((_, i) => (
          <div
            key={i}
            className="h-[66px] animate-pulse rounded-lg bg-gray-200 dark:bg-gray-700"
          />
        ))}
      </div>
      <div className="mt-8 h-5 w-48 animate-pulse rounded bg-gray-200 dark:bg-gray-700" />
    </>
  )
}
