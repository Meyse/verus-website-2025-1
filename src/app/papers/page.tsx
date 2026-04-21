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
      <BgWrapper size="small">
        <div className="flex flex-col">
          <div className="flex-grow py-8 md:py-16">
            <div className="mx-auto max-w-[1220px] md:px-8">
              <div className="mb-8 px-4 md:mb-16 md:px-0">
                <h1 className="text-[22px] font-medium leading-snug tracking-tight text-verus-blue dark:text-blue-400 md:text-[40px]">
                  Verus published papers & literature.
                </h1>
                <p className="mt-4 max-w-[800px] text-[16px] text-gray-700 dark:text-gray-300 md:text-[20px]">
                  Learn about the technical foundations and innovations behind
                  the Verus Protocol.
                </p>
              </div>

              <PapersContent />
            </div>
          </div>
        </div>
      </BgWrapper>
    </>
  )
}
