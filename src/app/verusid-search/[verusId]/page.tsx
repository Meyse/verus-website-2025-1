import type {Metadata} from 'next'

import {Suspense} from 'react'
import {permanentRedirect} from 'next/navigation'

import {DisplayProfile} from '@/features/verusid_search/components/display-profile'
import {LoadingProfile} from '@/features/verusid_search/components/loading-profile'
import {SearchForm} from '@/features/verusid_search/components/search-form'
import {validateVerusId} from '@/features/verusid_search/server/validate-verusId'

export const dynamic = 'force-dynamic'
export const metadata: Metadata = {
  robots: {
    index: false,
    follow: true,
  },
}

type Params = Promise<{verusId: string}>
// type SearchParams = Promise<{[key: string]: string | undefined}>
export default async function VerusIdPage(props: {
  params: Params
  // searchParams: SearchParams
}) {
  const {verusId} = await props.params
  const verusID = decodeURIComponent(verusId)
  console.log('params lookip', decodeURIComponent(verusID))
  if (verusID.slice(-1) !== '@') {
    permanentRedirect(`/verusid-search/${verusId}@`)
  }
  const validId = await validateVerusId(verusID) //getting either the cached value or new value

  if (validId.error) {
    return <SearchForm verusID={verusID} error={validId.error.message} />
  }
  return (
    <Suspense fallback={<LoadingProfile verusid={verusID} />}>
      {/* Place Search Form here so that LoadingProfile suspsense can control searchForm also */}
      <SearchForm verusID={verusID} />
      {/* Display profile */}
      <DisplayProfile verusId={verusID} />
      {/* Results if Valid */}
    </Suspense>
  )
}
