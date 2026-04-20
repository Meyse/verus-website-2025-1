/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'

import {useState} from 'react'

import ReactMarkdown from 'react-markdown'
import rehypeSanitize from 'rehype-sanitize'

export function ArweaveContentCard({contentData}: {contentData: any}) {
  const [isExpanded, setIsExpanded] = useState(false)

  // Helper function to get content preview (reduced to 3 lines)
  const getContentPreview = () => {
    if (typeof contentData === 'string') {
      const lines = contentData.split('\n')
      if (lines.length > 3) {
        return lines.slice(0, 3).join('\n') + '...'
      }
      return contentData
    }

    if (typeof contentData === 'object') {
      const jsonString = JSON.stringify(contentData, null, 2)
      const lines = jsonString.split('\n')
      if (lines.length > 3) {
        return lines.slice(0, 3).join('\n') + '...'
      }
      return jsonString
    }

    return String(contentData)
  }

  const preview = getContentPreview()
  const hasMoreContent =
    typeof contentData === 'string'
      ? contentData.split('\n').length > 3
      : typeof contentData === 'object'
        ? JSON.stringify(contentData, null, 2).split('\n').length > 3
        : String(contentData).split('\n').length > 3

  if (isExpanded) {
    return (
      <>
        <div className="max-h-[65dvh] overflow-x-auto bg-white dark:bg-gray-800/80">
          {typeof contentData === 'object' ? (
            <pre className="text-xs text-gray-800 dark:text-gray-200">
              {JSON.stringify(contentData, null, 2)}
            </pre>
          ) : (
            <div className="prose prose-sm dark:prose-invert max-w-none border-0 dark:border-0">
              <ReactMarkdown rehypePlugins={[rehypeSanitize]}>
                {contentData}
              </ReactMarkdown>
            </div>
          )}
        </div>
        <button
          onClick={() => setIsExpanded(false)}
          className="mt-2 w-full self-center border-t border-gray-200 py-1 text-sm text-blue-600 shadow-sm hover:text-blue-500 dark:border-gray-700/50 dark:text-blue-400 dark:hover:text-blue-300"
        >
          Collapse
        </button>
      </>
    )
  }

  // Default state - show content preview without header
  return (
    <>
      {/* Content Preview */}
      <div className="bg-white p-4 dark:bg-gray-800/80">
        {typeof contentData === 'object' ? (
          <pre className="whitespace-pre-wrap text-xs text-gray-800 dark:text-gray-200">
            {preview}
          </pre>
        ) : (
          <div className="prose prose-sm dark:prose-invert max-w-none border-0 dark:border-0">
            <ReactMarkdown rehypePlugins={[rehypeSanitize]}>
              {preview}
            </ReactMarkdown>
          </div>
        )}
      </div>

      {/* Expand button - only show if there's more content */}
      {hasMoreContent && (
        <button
          onClick={() => setIsExpanded(true)}
          className="w-full border-t border-gray-200 py-2 text-sm text-blue-600 hover:bg-gray-50 hover:text-blue-500 dark:border-gray-700/50 dark:text-blue-400 dark:hover:bg-gray-700/30 dark:hover:text-blue-300"
        >
          Show Full Content
        </button>
      )}
    </>
  )
}
