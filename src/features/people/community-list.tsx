type CommunityMember = {
  name: string
}

export type CommunityListProps = {
  members: CommunityMember[]
}

export function CommunityList({members}: CommunityListProps) {
  return (
    <div className="grid grid-cols-2 border-gray-200 dark:border-gray-800 md:grid-cols-3 lg:grid-cols-4">
      {members.map((member, index) => {
        const isMdLeftColumn = index % 3 === 0
        const isLgLeftColumn = index % 4 === 0

        return (
          <div
            key={`${member.name}-${index}`}
            className={[
              'min-w-0 border-gray-200 px-4 py-4 dark:border-gray-800 md:px-6',
              index > 1 ? 'border-t' : '',
              index % 2 !== 0 ? 'border-l' : '',
              index >= 3 ? 'md:border-t' : 'md:border-t-0',
              !isMdLeftColumn ? 'md:border-l' : 'md:border-l-0',
              index >= 4 ? 'lg:border-t' : 'lg:border-t-0',
              !isLgLeftColumn ? 'lg:border-l' : 'lg:border-l-0',
            ].join(' ')}
          >
            <p className="truncate text-[14px] font-medium text-gray-700 dark:text-gray-300 md:text-[15px]">
              {member.name}
            </p>
          </div>
        )
      })}
    </div>
  )
}
