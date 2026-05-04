import type {Metadata} from 'next'

import {papers} from '@/data/papers'
import {PapersContent} from '@/features/papers/content'

import {
  absoluteUrl,
  createCollectionPageJsonLd,
  verusEntityId,
} from '@/lib/seo/schema'

import {BgWrapper} from '@/components/bg-wrapper'
import {JsonLd} from '@/components/seo/json-ld'

export const metadata: Metadata = {
  title: 'Published Papers & Literature',
  description:
    'Learn about the technical foundations and innovations behind the Verus Protocol.',
  keywords:
    'blockchain whitepaper, Verus technical documents, cryptocurrency research, blockchain technology papers, Verus documentation',
}

const papersJsonLd = createCollectionPageJsonLd({
  path: '/papers',
  name: 'Verus Published Papers & Literature',
  description:
    'Technical papers and literature describing the foundations and innovations behind the Verus Protocol.',
  mainEntity: {
    '@type': 'ItemList',
    itemListElement: papers.map((paper, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@type': 'ScholarlyArticle',
        '@id': `${absoluteUrl(paper.url)}#paper`,
        name: paper.title,
        headline: paper.subtitle
          ? `${paper.title}: ${paper.subtitle}`
          : paper.title,
        description: paper.description,
        url: absoluteUrl(paper.url),
        isAccessibleForFree: true,
        about: {
          '@id': verusEntityId,
        },
        author: paper.authors.length
          ? paper.authors.map((author) => ({
              '@type': 'Person',
              name: author,
            }))
          : undefined,
      },
    })),
  },
})

export default function PapersPage() {
  return (
    <>
      <JsonLd data={papersJsonLd} />
      <BgWrapper>
        <div className="bg-gradient-to-b from-gray-100 via-gray-100 to-white dark:from-gray-950 dark:via-gray-950 dark:to-gray-950">
          <div className="flex flex-col items-center px-0 pb-16 pt-0 md:pb-24 xl:px-4 xl:pt-[54px]">
            <div className="w-full min-w-0 max-w-full overflow-hidden border-b border-gray-200 bg-gray-50 shadow-[0_4px_40px_-12px_rgba(0,0,0,0.1)] dark:border-gray-800 dark:bg-gray-950 dark:shadow-[0_4px_40px_-12px_rgba(0,0,0,0.2)] xl:max-w-[1220px] xl:rounded-lg xl:border">
              <section className="border-b border-gray-200 bg-gradient-to-br from-blue-50 to-white dark:border-gray-800 dark:from-blue-950/40 dark:to-gray-950">
                <div className="min-w-0 px-8 py-12 md:px-14 md:py-16">
                  <h1 className="max-w-[680px] break-words text-[28px] font-medium leading-[1.2] tracking-tight text-gray-800 dark:text-white max-md:max-w-[calc(100vw-4rem)] md:text-[44px]">
                    Verus published papers and literature
                  </h1>
                  <p className="mt-4 max-w-[760px] break-words text-[15px] leading-relaxed tracking-normal text-gray-600 dark:text-gray-300 max-md:max-w-[calc(100vw-4rem)] md:mt-6 md:text-[17px]">
                    Learn about the technical foundations and protocol design
                    behind Verus.
                  </p>
                </div>
              </section>

              <PapersContent />
            </div>
          </div>
        </div>
      </BgWrapper>
    </>
  )
}
