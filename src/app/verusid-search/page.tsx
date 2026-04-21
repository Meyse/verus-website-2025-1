import {SearchForm} from '@/features/verusid_search/components/search-form'

import {createWebApplicationJsonLd} from '@/lib/seo/schema'

import {JsonLd} from '@/components/seo/json-ld'

const verusIdSearchJsonLd = createWebApplicationJsonLd({
  name: 'VerusID Search',
  path: '/verusid-search',
  description:
    'Search for VerusID information including decentralized profiles.',
  applicationCategory: 'SearchApplication',
  featureList: [
    'Search VerusIDs',
    'View decentralized profiles',
    'Inspect verified profile information',
  ],
})

export default function VerusIDSearchPage() {
  return (
    <>
      <JsonLd data={verusIdSearchJsonLd} />
      <SearchForm />
    </>
  )
}
