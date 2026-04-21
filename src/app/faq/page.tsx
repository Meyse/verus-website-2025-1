import type {Metadata} from 'next'

import {faqData} from '@/data/faq'
import {FaqContent} from '@/features/faq/content'

import {BodyBgSmallImages} from '@/components/background-images'
import {Footer} from '@/components/footer'
import {JsonLd} from '@/components/seo/json-ld'

export const metadata: Metadata = {
  title: 'Frequently Asked Questions',
  description:
    'Find answers to common questions about Verus technology, protocol features, and how to get involved in the ecosystem.',
  keywords:
    'Verus FAQ, blockchain FAQ, cryptocurrency questions, Verus help, Verus information',
}

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqData.flatMap((category) =>
    category.questions.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.a,
      },
    }))
  ),
}

export default function FaqPage() {
  return (
    <>
      <JsonLd data={faqJsonLd} />
      <main className="relative mt-[50px] h-[calc(100vh-50px)] w-screen md:mt-[70px] md:h-[calc(100vh-70px)]">
        <BodyBgSmallImages />

        <div className="relative z-10 flex min-h-[calc(100vh-50px)] flex-col md:min-h-[calc(100vh-70px)]">
          <div className="flex-grow py-8 md:py-16">
            <div className="mx-auto max-w-[1220px] md:px-8">
              <h1 className="mb-8 px-4 text-[22px] font-medium leading-snug tracking-tight text-verus-blue dark:text-blue-400 md:mb-16 md:px-0 md:text-[40px]">
                Frequently asked questions.
              </h1>

              <FaqContent />
            </div>
          </div>

          <Footer />
        </div>
      </main>
    </>
  )
}
