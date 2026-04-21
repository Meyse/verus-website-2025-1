/* eslint-disable @typescript-eslint/no-explicit-any */
import {Fragment, Suspense} from 'react'

import {ArweaveContent} from './arweave-content'
import {WebContent} from './web-content'

export function ProfileContent({content}: {content?: Record<string, any>}) {
  console.log('profile', content)
  if (!content || !Array.isArray(content) || content.length === 0) {
    return (
      <div className="p-4 italic text-gray-500 dark:text-gray-400">
        No content items available
      </div>
    )
  }

  return <div className="space-y-4">{content.map(ContentCard)}</div>
}

//vdxfkey

const ContentCard = (item: Record<string, any>, index: number) => {
  // Determine content type
  const qualifiedName = item.qualifiedname || ''
  const segments = qualifiedName.split('.')

  // Extract content source and type from qualified name
  const source = segments.length > 2 ? segments[segments.length - 2] : 'unknown'
  const type = segments.length > 1 ? segments[segments.length - 1] : 'unknown'

  // Create a key for this content item
  const contentKey = `${source}-${type}-${index}-content`

  // Route to the appropriate content handler
  if (source === 'arweave')
    return (
      <Fragment key={`${contentKey}`}>
        <Suspense
          fallback={
            <div className="mb-4 flex items-center justify-center py-6">
              <div className="h-6 w-6 animate-spin rounded-full border-2 border-blue-500 border-t-transparent"></div>
              <span className="ml-3 text-gray-600 dark:text-gray-300">
                Fetching {type} content...
              </span>
            </div>
          }
        >
          <ArweaveContent content={item} />
        </Suspense>
      </Fragment>
    )

  if (source === 'web')
    return (
      <WebContentWithPreview
        key={`${contentKey}`}
        type={type}
        content={item}
        qualifiedName={qualifiedName}
      />
    )

  // Default content display for unknown types with preview
  return (
    <details
      key={contentKey}
      className="rounded-lg border border-gray-200 bg-gray-50 shadow-sm dark:border-gray-700/50 dark:bg-gray-800/70"
    >
      <summary className="cursor-pointer p-4 hover:bg-gray-100 dark:hover:bg-gray-700/50">
        <h4 className="inline font-medium text-gray-900 dark:text-white">
          Unknown Content Type: {qualifiedName}
        </h4>
        <span className="ml-2 text-xs text-gray-500 dark:text-gray-400">
          Click to expand
        </span>
      </summary>
      <div className="border-t border-gray-200 p-4 dark:border-gray-700/50">
        <pre className="overflow-x-auto rounded bg-gray-100 p-2 text-xs text-gray-800 dark:bg-gray-800/90 dark:text-gray-200">
          {JSON.stringify(item, null, 2)}
        </pre>
      </div>
    </details>
  )
}

// Component to wrap WebContent with preview functionality
function WebContentWithPreview({
  type,
  content,
  qualifiedName,
}: {
  type: string
  content: any
  qualifiedName: string
}) {
  // Get a preview of the content
  const getPreview = () => {
    if (type === 'text' && content.text) {
      const text = content.text.toString()
      const lines = text.split('\n')
      if (lines.length > 10) {
        return lines.slice(0, 10).join('\n') + '...'
      }
      return text
    }
    return null
  }

  const preview = getPreview()
  const hasPreview = preview && preview !== content.text?.toString()

  // If no preview needed or content is too short, show normally
  if (!hasPreview) {
    return <WebContent type={type} content={content} />
  }

  // Show with preview/expand for longer text content
  return (
    <details className="mb-4 rounded-lg border border-gray-100 bg-white shadow-sm dark:border-gray-700/50 dark:bg-gray-800/80">
      <summary className="cursor-pointer p-3 hover:bg-gray-50 dark:hover:bg-gray-700/30">
        <span className="font-medium text-gray-900 dark:text-white">
          {qualifiedName} - {type}
        </span>
        <span className="ml-2 text-xs text-gray-500 dark:text-gray-400">
          Click to expand
        </span>
      </summary>
      <div className="border-t border-gray-100 dark:border-gray-700/50">
        <WebContent type={type} content={content} />
      </div>
    </details>
  )
}
