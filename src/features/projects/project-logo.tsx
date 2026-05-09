import Image from 'next/image'

import type {Project} from './types'

import {getInitials, stringToColor} from './utils'

export function ProjectLogo({
  className = 'h-12 w-12',
  project,
}: {
  className?: string
  project: Project
}) {
  if (project.logo) {
    return (
      <Image
        alt=""
        className={`${className} rounded-lg border border-gray-200 bg-white object-cover dark:border-gray-800 dark:bg-gray-900`}
        height={96}
        loading="eager"
        sizes="96px"
        src={`/img/projects/${project.slug}/${project.logo}`}
        width={96}
      />
    )
  }

  return (
    <div
      className={`${className} flex items-center justify-center rounded-lg border border-gray-200 text-[15px] font-medium text-white dark:border-gray-800`}
      style={{backgroundColor: stringToColor(project.name)}}
    >
      {getInitials(project.name)}
    </div>
  )
}
