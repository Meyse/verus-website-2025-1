import type {PapersType} from '@/data/papers'

import {papers} from '@/data/papers'
import {ArrowRight, FileText} from 'lucide-react'

export function OtherPapers() {
  const otherPapers = papers.filter((p) => !p.isPrimary)

  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8">
      {otherPapers.map((paper, index) => (
        <PaperCard key={index} paper={paper} />
      ))}
    </div>
  )
}

function PaperCard({paper}: {paper: PapersType}) {
  return (
    <div className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-blue-100/80 bg-white/70 p-6 shadow-sm backdrop-blur-sm transition-all duration-300 dark:border-blue-900/30 dark:bg-gray-900/50">
      <div className="absolute -bottom-8 -right-8 h-32 w-32 rounded-full bg-blue-400/5 blur-xl dark:bg-blue-400/10"></div>

      <div className="relative">
        <div className="mb-4 flex items-start gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-full border border-blue-100/80 bg-white/90 shadow-sm transition-colors duration-300 group-hover:bg-blue-50 dark:border-blue-900/30 dark:bg-gray-800/90 dark:group-hover:bg-gray-800">
            <FileText className="h-6 w-6 text-verus-blue/80 dark:text-blue-400" />
          </div>
          <div>
            <h2 className="text-[18px] font-medium text-gray-900 dark:text-white md:text-[20px]">
              {paper.title}
            </h2>
            <p className="mt-1 text-[14px] text-gray-700 dark:text-gray-300 md:text-[16px]">
              {paper.subtitle}
            </p>
          </div>
        </div>

        {paper.authors.length > 0 && (
          <div className="mb-4">
            <h3 className="mb-1 text-[13px] uppercase tracking-wider text-gray-500 dark:text-gray-400">
              Authors
            </h3>
            <ul className="space-y-1">
              {paper.authors.map((author, idx) => (
                <li
                  key={idx}
                  className="text-[14px] text-gray-700 dark:text-gray-300"
                >
                  {author}
                </li>
              ))}
            </ul>
          </div>
        )}

        <p className="mb-6 flex-grow text-[14px] text-gray-600 dark:text-gray-400 md:text-[15px]">
          {paper.description}
        </p>
      </div>

      <div className="mt-auto">
        <a
          href={paper.url}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex h-[40px] w-fit items-center justify-center rounded-lg border border-blue-200 bg-white/80 px-4 text-[14px] font-medium text-verus-blue backdrop-blur-sm transition-all duration-300 hover:border-blue-300 hover:text-blue-600 dark:border-blue-800/60 dark:bg-blue-950/80 dark:text-blue-300 dark:hover:border-blue-700 dark:hover:text-blue-200 md:h-[50px] md:text-[16px]"
        >
          Download PDF
          <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </a>
      </div>
    </div>
  )
}
