import {faqData} from '@/data/faq'
import {ChevronDown} from 'lucide-react'

import {FaqCategories} from './faq-categories'

function getCategoryId(category: string) {
  return category.toLowerCase().replace(/\s+/g, '-')
}

function FaqAnswer({answer}: {answer: string}) {
  const lines = answer.split('\n')
  const bulletLines = lines.filter((line) => line.trim().startsWith('- '))
  const textLines = lines.filter((line) => !line.trim().startsWith('- '))

  return (
    <div className="space-y-4 text-[15px] leading-relaxed tracking-normal text-gray-600 dark:text-gray-300 md:text-[16px]">
      {textLines.map((line) => {
        const text = line.trim()

        if (!text) return null

        return <p key={text}>{text}</p>
      })}

      {bulletLines.length > 0 && (
        <ul className="space-y-2">
          {bulletLines.map((line) => (
            <li key={line} className="flex gap-3">
              <span className="mt-[0.7em] h-1.5 w-1.5 shrink-0 rounded-full bg-verus-blue dark:bg-blue-400" />
              <span>{line.replace(/^- /, '')}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export function FaqContent() {
  return (
    <section className="bg-gray-50 dark:bg-gray-950">
      <div className="grid grid-cols-1 md:grid-cols-[300px_minmax(0,1fr)]">
        <aside className="min-w-0 border-b border-gray-200 px-10 py-10 dark:border-gray-800 md:border-b-0 md:border-r md:px-14 md:py-12">
          <FaqCategories
            categories={faqData.map((category) => category.title)}
          />
        </aside>

        <div className="min-w-0">
          {faqData.map((category, categoryIndex) => (
            <section
              key={category.title}
              id={getCategoryId(category.title)}
              className={[
                'scroll-m-24',
                categoryIndex > 0
                  ? 'border-t border-gray-200 dark:border-gray-800'
                  : '',
              ].join(' ')}
            >
              <div className="px-10 py-10 md:px-14 md:py-12">
                <h2 className="mb-3 text-[24px] font-medium leading-[1.2] tracking-tight text-gray-800 dark:text-white md:text-[30px]">
                  {category.title}
                </h2>
                <p className="max-w-[760px] text-[15px] leading-relaxed tracking-normal text-gray-600 dark:text-gray-300 md:text-[17px]">
                  {category.questions.length} questions
                </p>
              </div>

              <div className="border-t border-gray-200 dark:border-gray-800">
                {category.questions.map((item, questionIndex) => (
                  <details
                    key={item.q}
                    className={[
                      'group',
                      questionIndex > 0
                        ? 'border-t border-gray-200 dark:border-gray-800'
                        : '',
                    ].join(' ')}
                  >
                    <summary className="flex cursor-pointer list-none items-start justify-between gap-6 px-10 py-6 text-[16px] font-medium text-gray-800 transition-colors hover:text-verus-blue dark:text-white dark:hover:text-blue-400 md:px-14 md:py-7 md:text-[18px] [&::-webkit-details-marker]:hidden">
                      <span className="min-w-0 break-words">{item.q}</span>
                      <ChevronDown className="mt-1 h-5 w-5 shrink-0 text-gray-500 transition-transform group-open:rotate-180 dark:text-gray-400" />
                    </summary>
                    <div className="px-10 pb-8 md:px-14">
                      <FaqAnswer answer={item.a} />
                    </div>
                  </details>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </section>
  )
}
