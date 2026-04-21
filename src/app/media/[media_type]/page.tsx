import {
  BrandAssets,
  MediaMentions,
  PressKit,
  TabBar,
} from '@/features/media/components'

type Params = Promise<{media_type: string}>

export default async function Page(props: {params: Params}) {
  const {media_type} = await props.params

  return (
    <div>
      <TabBar activeTab={media_type} />
      <div className="py-8">
        {media_type === 'press-kit' && <PressKit />}
        {media_type === 'media-coverage' && <MediaMentions />}
        {media_type === 'brand-assets' && <BrandAssets />}
      </div>
    </div>
  )
}
