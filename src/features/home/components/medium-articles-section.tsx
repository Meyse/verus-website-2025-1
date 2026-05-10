import {Suspense} from 'react'

import {env} from '@/configs/env'
import {FaMedium} from 'react-icons/fa'

import {TextLinkButton} from '@/components/ui/text-link-button'

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
          <TextLinkButton
            href={env.NEXT_PUBLIC_VERUS_MEDIUM}
            className="mt-3"
            icon={
              <FaMedium className="h-4 w-4 text-gray-700 dark:text-gray-300" />
            }
          >
            Follow Verus on Medium
          </TextLinkButton>
        </div>
        <Suspense fallback={<MediumArticlesLoading />}>
          <MediumFeed />
        </Suspense>
      </div>
    </section>
  )
}
