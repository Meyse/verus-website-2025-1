import {notFound} from 'next/navigation'

import {
  BrandAssets,
  PressKit,
  TabBar,
} from '@/features/media/components'

import {createMediaBreadcrumbJsonLd} from '@/lib/seo/schema'

import {JsonLd} from '@/components/seo/json-ld'

type Params = Promise<{media_type: string}>

const mediaPageLabels: Record<string, string> = {
  'press-kit': 'Press kit',
  'brand-assets': 'Brand assets',
}

export default async function Page(props: {params: Params}) {
  const {media_type} = await props.params
  const pageLabel = mediaPageLabels[media_type]

  if (!pageLabel) {
    notFound()
  }

  return (
    <>
      <JsonLd
        data={createMediaBreadcrumbJsonLd(pageLabel, `/media/${media_type}`)}
      />
      <TabBar activeTab={media_type} />
      {media_type === 'press-kit' && <PressKit />}
      {media_type === 'brand-assets' && <BrandAssets />}
    </>
  )
}
