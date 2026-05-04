import type {PapersType} from '@/data/papers'

import {papers} from '@/data/papers'
import {ExternalLink} from 'lucide-react'

import {cn} from '@/lib/utils'

import {Button} from '@/components/ui/button'

export function PapersContent() {
  return (
    <section className="bg-gray-50 dark:bg-gray-950">
      <div className="grid grid-cols-1 md:grid-cols-2">
        {papers.map((paper, index) => (
          <PaperCell key={paper.title} paper={paper} index={index} />
        ))}
      </div>
    </section>
  )
}

function PaperCell({paper, index}: {paper: PapersType; index: number}) {
  const isRightColumn = index % 2 === 1
  const isBottomRow = index >= papers.length - 2

  return (
    <article
      className={cn(
        'flex min-w-0 max-w-full flex-col overflow-hidden border-gray-200 px-8 py-10 dark:border-gray-800 md:px-14 md:py-12',
        index > 0 && 'max-md:border-t',
        isRightColumn && 'md:border-l',
        !isBottomRow && 'md:border-b'
      )}
    >
      <div className="min-w-0">
        <div className="mb-4 flex max-w-full flex-wrap items-center gap-3">
          <h2 className="min-w-0 break-words text-[24px] font-medium leading-[1.2] tracking-tight text-gray-800 dark:text-white md:text-[30px]">
            {paper.title}
          </h2>
          {paper.isPrimary && (
            <span className="shrink-0 rounded-lg border border-gray-200 bg-white px-3 py-1.5 text-[12px] font-medium text-gray-600 dark:border-gray-800 dark:bg-gray-900 dark:text-gray-300">
              Primary
            </span>
          )}
        </div>

        {paper.subtitle && (
          <p className="break-words text-[15px] font-medium leading-relaxed tracking-normal text-gray-700 dark:text-gray-200 md:text-[17px]">
            {paper.subtitle}
          </p>
        )}

        <div className="mt-6">
          <h3 className="text-[14px] font-medium leading-relaxed tracking-normal text-gray-800 dark:text-white">
            Authors
          </h3>
          <p className="mt-1 max-w-full break-words text-[15px] leading-relaxed tracking-normal text-gray-600 [overflow-wrap:anywhere] dark:text-gray-300 md:text-[16px]">
            {paper.authors.length > 0
              ? paper.authors.join(', ')
              : 'Verus community'}
          </p>
        </div>
      </div>

      <div className="mt-10 flex md:mt-auto md:pt-12">
        <Button
          asChild
          variant={paper.isPrimary ? 'verusPrimary' : 'verusSecondaryDark'}
          size="verusWide"
          className="w-full max-w-full px-4 md:w-fit md:px-8"
        >
          <a href={paper.url} target="_blank" rel="noopener noreferrer">
            {paper.isPrimary ? 'Download vision paper' : 'Download PDF'}
            <ExternalLink className="h-4 w-4 opacity-60 transition-opacity duration-300 group-hover:opacity-100" />
          </a>
        </Button>
      </div>
    </article>
  )
}
