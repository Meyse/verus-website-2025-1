import type {Project} from './types'

import Image from 'next/image'

import {getProjectAssetSrc} from './project-assets'
import {getInitials, stringToColor} from './utils'

export function ProjectLogo({
  className = 'h-12 w-12',
  project,
}: {
  className?: string
  project: Project
}) {
  const logoSrc = project.logo
    ? getProjectAssetSrc(project, project.logo)
    : null

  if (logoSrc) {
    return (
      <Image
        alt=""
        className={`${className} rounded-lg border border-gray-200 bg-white object-cover dark:border-gray-800 dark:bg-gray-900`}
        height={96}
        loading="eager"
        sizes="96px"
        src={logoSrc}
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
