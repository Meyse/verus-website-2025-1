import {papers} from '@/data/papers'
import {ArrowRight, CheckCircle, FileText} from 'lucide-react'

export function PrimaryPaper() {
  const paper = papers.find((p) => p.isPrimary)
  if (!paper) return null
  return (
    <div className="group relative mb-8 overflow-hidden rounded-2xl border border-blue-100/80 bg-white/70 p-6 shadow-sm backdrop-blur-sm transition-all duration-300 dark:border-blue-900/30 dark:bg-gray-900/50 md:p-8">
      <div className="absolute left-6 top-6 h-32 w-32 rounded-full bg-blue-400/5 blur-xl dark:bg-blue-400/10"></div>
      <div className="absolute -bottom-8 -right-8 h-32 w-32 rounded-full bg-blue-400/5 blur-xl dark:bg-blue-400/10"></div>

      <div className="relative flex flex-col gap-6">
        <div className="w-full">
          <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-center">
            <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-full border border-blue-100/80 bg-white/90 shadow-sm transition-colors duration-300 group-hover:bg-blue-50 dark:border-blue-900/30 dark:bg-gray-800/90 dark:group-hover:bg-gray-800">
              <FileText className="h-8 w-8 text-verus-blue/80 dark:text-blue-400" />
            </div>
            <div>
              <div className="mb-1 flex flex-col gap-2 md:flex-row md:items-center">
                <h2 className="text-2xl font-medium text-gray-900 dark:text-white md:text-[26px]">
                  {paper.title}
                </h2>
                <span className="w-fit rounded-full bg-blue-100 px-2 py-1 text-xs font-medium text-blue-600 dark:bg-blue-900/50 dark:text-blue-300">
                  Primary
                </span>
              </div>
              <p className="text-[16px] text-gray-700 dark:text-gray-300 md:text-[18px]">
                {paper.subtitle}
              </p>
            </div>
          </div>

          {paper.authors.length > 0 && (
            <div className="mb-6">
              <h3 className="mb-2 text-[13px] uppercase tracking-wider text-gray-500 dark:text-gray-400">
                Authors
              </h3>
              <ul className="space-y-1">
                {paper.authors.map((author, idx) => (
                  <li
                    key={idx}
                    className="text-[15px] text-gray-700 dark:text-gray-300"
                  >
                    {author}
                  </li>
                ))}
              </ul>
            </div>
          )}

          <p className="mb-6 text-[15px] text-gray-600 dark:text-gray-400 md:text-[16px]">
            {paper.description}
          </p>

          <div className="mb-8 flex items-center gap-2 text-green-600 dark:text-green-400">
            <CheckCircle className="h-5 w-5 flex-shrink-0" />
            <span className="text-[15px] font-medium">
              All aspects of the vision have been implemented
            </span>
          </div>
        </div>

        <div className="flex w-full justify-center md:justify-start">
          <a
            href={paper.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex h-[50px] w-full items-center justify-center rounded-lg border border-blue-500 bg-blue-600 px-6 text-[16px] font-medium text-white backdrop-blur-sm transition-all duration-300 hover:bg-blue-700 dark:border-white/60 dark:bg-white/90 dark:text-black dark:hover:bg-white md:w-auto"
          >
            Download Vision Paper
            <ArrowRight className="ml-2 h-4 w-4 transition-all duration-300 group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </div>
  )
}
