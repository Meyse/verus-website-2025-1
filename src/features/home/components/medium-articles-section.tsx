import {Suspense} from 'react'

import {env} from '@/configs/env'
import {ExternalLink} from 'lucide-react'
import {FaMedium} from 'react-icons/fa'

import MediumArticlesLoading from './medium-articles-loading'
import MediumFeed from './medium-feed'

export function MediumArticlesSection() {
  return (
    <section className="w-full pt-16 md:pt-20">
      <div className="mx-auto max-w-[1220px] px-4">
        <div className="mb-10 text-center">
          <h2 className="mb-3 text-2xl font-medium tracking-tight text-gray-900 dark:text-white md:text-3xl">
            Latest articles
          </h2>
          <p className="mx-auto max-w-2xl text-[15px] font-normal leading-relaxed tracking-normal text-gray-600 dark:text-gray-300 md:text-[17px]">
            Stay up to date with the latest news and developments from the Verus
            community.
          </p>
          <a
            href={env.NEXT_PUBLIC_VERUS_MEDIUM}
            target="_blank"
            rel="noopener noreferrer"
            className="group mt-3 inline-flex items-start rounded-lg p-2 transition-colors [&>div>div]:hover:underline"
          >
            <div>
              <div className="mb-1 flex items-center gap-2 text-[15px] font-[450] text-gray-800 dark:text-white">
                <FaMedium className="h-4 w-4 text-gray-700 dark:text-gray-300" />
                Follow Verus on Medium
                <ExternalLink className="h-4 w-4 opacity-50 group-hover:opacity-100" />
              </div>
            </div>
          </a>
        </div>
        <Suspense fallback={<MediumArticlesLoading />}>
          <MediumFeed />
        </Suspense>
      </div>
    </section>
  )
}
