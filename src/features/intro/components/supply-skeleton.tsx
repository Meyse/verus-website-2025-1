export function SupplySkeleton() {
  return (
    <div>
      <div className="mb-8">
        <h3 className="mb-2 text-[14px] text-gray-600 dark:text-gray-300">
          Circulating supply
        </h3>
        <div className="h-[34px] w-[200px] animate-pulse rounded bg-gray-200 dark:bg-gray-800 md:h-[38px]" />
      </div>

      {/* Progress Bar Skeleton */}
      <div className="space-y-2">
        <div className="h-4 animate-pulse rounded-full bg-gray-200 dark:bg-gray-800" />
        <div className="flex justify-end">
          <div className="h-[18px] w-[200px] animate-pulse rounded bg-gray-200 dark:bg-gray-800" />
        </div>
      </div>
    </div>
  )
}
