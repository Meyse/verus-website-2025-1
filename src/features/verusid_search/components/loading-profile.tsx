export function LoadingProfile({verusid}: {verusid: string}) {
  return (
    <>
      <div className="mb-8 flex flex-col gap-3 sm:flex-row">
        <div className="flex-1 space-y-2">
          <div className="block text-sm font-medium text-gray-700 dark:text-gray-300">
            VerusID
          </div>

          <input
            value={verusid}
            disabled
            placeholder="Enter a VerusID"
            className="w-full rounded-lg border border-blue-200/70 p-3 shadow-sm backdrop-blur-sm focus:border-verus-blue focus:ring-verus-blue dark:border-blue-800/30 dark:bg-gray-800/50 dark:text-white"
          />

          <p className="text-muted-foreground text-xs text-gray-500 dark:text-gray-400">
            Enter a VerusID name with or without the @ symbol
          </p>
        </div>
        <div className="flex items-start sm:items-center">
          <button
            disabled
            className="h-12 w-full rounded-lg bg-verus-blue px-6 py-2 pt-2 font-medium text-white shadow transition-all duration-300 hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-50 sm:w-auto"
          >
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
              Fetching Profile Info...
            </span>
          </button>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center rounded-lg border border-blue-100/80 bg-white/80 py-12 shadow-sm backdrop-blur-sm dark:border-blue-900/30 dark:bg-gray-900/50">
        <div className="h-12 w-12 animate-spin rounded-full border-4 border-blue-500 border-t-transparent"></div>
        <p className="mt-4 text-gray-600 dark:text-gray-300">
          Loading profile data...
        </p>
      </div>
    </>
  )
}
