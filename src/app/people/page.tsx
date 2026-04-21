// People Page - Meet the Verus team and community
import type {Metadata} from 'next'

import {env} from '@/configs/env'
import {teamMembers} from '@/data/people/team-members'
import {PeopleSections} from '@/features/people/sections'

import {createCollectionPageJsonLd} from '@/lib/seo/schema'

import {BgWrapper} from '@/components/bg-wrapper'
import {JsonLd} from '@/components/seo/json-ld'

export const metadata: Metadata = {
  title: 'Meet the People Behind Verus',
  description:
    'Meet the developers, contributors, and community members building the Verus ecosystem.',
  keywords:
    'Verus contributors, blockchain developers, cryptocurrency community, blockchain contributors, open source contributors',
}

const peopleJsonLd = createCollectionPageJsonLd({
  path: '/people',
  name: 'Profiled People Behind Verus',
  description:
    'Profiled developers, contributors, and advisors building the Verus ecosystem.',
  mainEntity: {
    '@type': 'ItemList',
    name: 'Profiled Verus contributors',
    itemListElement: teamMembers.map((member, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@type': 'Person',
        name: member.name,
        jobTitle: member.title,
        description: member.description,
        sameAs: member.twitterHandle
          ? [`${env.NEXT_PUBLIC_TWITTER}/${member.twitterHandle}`]
          : undefined,
      },
    })),
  },
})

export default function PeoplePage() {
  return (
    <>
      <JsonLd data={peopleJsonLd} />
      <BgWrapper size="small">
        <div className="flex flex-col">
          <div className="flex-grow py-8 md:py-16">
            <div className="mx-auto max-w-[1220px] md:px-8">
              <div className="mb-8 px-4 md:mb-16 md:px-0">
                <h1 className="text-[22px] font-medium leading-snug tracking-tight text-verus-blue dark:text-blue-400 md:text-[40px]">
                  Meet the people building the Verus ecosystem.
                </h1>
              </div>

              <PeopleSections />
            </div>
          </div>
        </div>
      </BgWrapper>
    </>
  )
}
