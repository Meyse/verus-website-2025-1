import type {Metadata} from 'next'

import {PressKit, TabBar} from '@/features/media/components'

export const metadata: Metadata = {
  alternates: {
    canonical: '/media',
  },
}

export default function DefaultPage() {
  return (
    <>
      <TabBar activeTab="press-kit" />
      <PressKit />
    </>
  )
}
