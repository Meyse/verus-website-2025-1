import {communityMembers} from '@/data/people/community-members'
import {teamMembers} from '@/data/people/team-members'

import {cn} from '@/lib/utils'

import {CommunityList} from './community-list'
import {ProfileCard} from './profile-card'

function getPlaceholderCount(count: number, columns: number) {
  return (columns - (count % columns)) % columns
}

function ProfileGridPlaceholder({
  index,
  columns,
  className,
}: {
  index: number
  columns: number
  className: string
}) {
  const isLeftColumn = index % columns === 0

  return (
    <div
      aria-hidden="true"
      className={cn(
        'min-w-0 border-gray-200 dark:border-gray-800',
        index >= columns && 'border-t',
        !isLeftColumn && 'border-l',
        className
      )}
    />
  )
}

export function PeopleSections() {
  const mdPlaceholders = getPlaceholderCount(teamMembers.length, 2)
  const lgPlaceholders = getPlaceholderCount(teamMembers.length, 3)

  return (
    <section className="bg-gray-50 dark:bg-gray-950">
      <div className="border-b border-gray-200 px-8 py-8 dark:border-gray-800 md:px-10">
        <h2 className="font-display text-[30px] font-medium tracking-tight text-gray-800 dark:text-white">
          Profiled contributors
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {teamMembers.map((profile, index) => (
          <ProfileCard key={profile.name} index={index} {...profile} />
        ))}
        {Array.from({length: mdPlaceholders}).map((_, index) => (
          <ProfileGridPlaceholder
            key={`md-placeholder-${index}`}
            index={teamMembers.length + index}
            columns={2}
            className="hidden md:block lg:hidden"
          />
        ))}
        {Array.from({length: lgPlaceholders}).map((_, index) => (
          <ProfileGridPlaceholder
            key={`lg-placeholder-${index}`}
            index={teamMembers.length + index}
            columns={3}
            className="hidden lg:block"
          />
        ))}
      </div>

      <div className="border-t border-gray-200 px-8 py-8 dark:border-gray-800 md:px-10">
        <h2 className="font-display text-[30px] font-medium tracking-tight text-gray-800 dark:text-white">
          Community members
        </h2>
        <p className="mt-3 max-w-[760px] text-[15px] leading-relaxed tracking-normal text-gray-600 dark:text-gray-300 md:text-[17px]">
          Many more people have contributed to Verus through discussion,
          testing, mining, support, content, and day-to-day community work.
        </p>
      </div>

      <CommunityList members={communityMembers} />
    </section>
  )
}
