'use server'

import {unstable_cache} from 'next/cache'

import {fetchMediumArticles} from './fetch-articles'

const MEDIUM_ARTICLES_REVALIDATE_SECONDS = 24 * 60 * 60

export const getMediumArticles = unstable_cache(
  async () => {
    return await fetchMediumArticles()
  },
  ['medium_articles'],
  {revalidate: MEDIUM_ARTICLES_REVALIDATE_SECONDS, tags: ['medium']}
)
