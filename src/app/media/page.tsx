import {PressKit, TabBar} from '@/features/media/components'

export default function DefaultPage() {
  return (
    <>
      <TabBar activeTab="press-kit" />
      <PressKit />
    </>
  )
}
