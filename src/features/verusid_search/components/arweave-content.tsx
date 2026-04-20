/* eslint-disable @typescript-eslint/no-explicit-any */
import {getArweaveContent} from '@/features/verusid_search/server/get_arweave_content'

import {ArweaveContentCard} from './arweave-content-card'

export async function ArweaveContent({content}: {content: any}) {
  let results: {result: any; error: string | undefined} = {
    result: undefined,
    error: undefined,
  }
  if (!content.txid) {
    results = {result: undefined, error: 'No transaction ID provided'}
  } else {
    results = await getArweaveContent(content.txid)
  }
  // Render error state
  if (results.error)
    return (
      <div className="mb-4 rounded-lg border border-red-200 bg-red-50 p-4 dark:border-red-800 dark:bg-red-900/20">
        <p className="text-sm text-red-600 dark:text-red-300">
          Error: {results.error}
        </p>
      </div>
    )
  // pass info
  return (
    <div className="mb-4 flex flex-col rounded-lg border border-gray-200 shadow-sm dark:border-gray-700/50">
      <ArweaveContentCard contentData={results.result} />
    </div>
  )
}
