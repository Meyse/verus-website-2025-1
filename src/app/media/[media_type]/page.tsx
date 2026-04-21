import {
  BrandAssets,
  MediaMentions,
  PressKit,
  TabBar,
} from '@/features/media/components'

import {createMediaBreadcrumbJsonLd} from '@/lib/seo/schema'

import {JsonLd} from '@/components/seo/json-ld'

type Params = Promise<{media_type: string}>

const mediaPageLabels: Record<string, string> = {
  'press-kit': 'Press Kit',
  'media-coverage': 'Media Coverage',
  'brand-assets': 'Brand Assets',
}

export default async function Page(props: {params: Params}) {
  const {media_type} = await props.params
  const pageLabel = mediaPageLabels[media_type]

  return (
    <div>
      {pageLabel && (
        <JsonLd
          data={createMediaBreadcrumbJsonLd(pageLabel, `/media/${media_type}`)}
        />
      )}
      <TabBar activeTab={media_type} />
      <div className="py-8">
        {media_type === 'press-kit' && <PressKit />}
        {media_type === 'media-coverage' && <MediaMentions />}
        {media_type === 'brand-assets' && <BrandAssets />}
      </div>
    </div>
  )
}
