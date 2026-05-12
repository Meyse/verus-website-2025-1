import type {Project} from './types'

import Image from 'next/image'
import Link from 'next/link'

import {getProjectFeaturedImageSrc} from './project-assets'
import {ProjectLogo} from './project-logo'

interface FeaturedProjectsProps {
  projects: Project[]
}

export function FeaturedProjects({projects}: FeaturedProjectsProps) {
  if (projects.length === 0) return null

  return (
    <section className="border-b border-gray-200 bg-gray-50 px-6 py-8 dark:border-gray-800 dark:bg-gray-950 md:px-10 md:py-10">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-4 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mb-6">
          Featured
        </h2>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3 lg:gap-6">
          {projects.map((project) => (
            <FeaturedProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}

function FeaturedProjectCard({project}: {project: Project}) {
  const featuredImageSrc = getProjectFeaturedImageSrc(project)

  return (
    <Link
      className="group block overflow-hidden rounded-lg border border-gray-200 bg-white transition-all duration-300 hover:border-gray-300 dark:border-gray-800 dark:bg-gray-900 dark:hover:border-gray-700"
      href={`/projects/${project.slug}`}
    >
      <div className="relative aspect-[3/1] w-full overflow-hidden bg-gradient-to-br from-blue-50 to-white dark:from-blue-950/40 dark:to-gray-950">
        {featuredImageSrc ? (
          <Image
            alt={`${project.name} featured image`}
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            src={featuredImageSrc}
          />
        ) : (
          <div className="flex h-full items-center justify-center">
            <ProjectLogo className="h-12 w-12" project={project} />
          </div>
        )}
        {featuredImageSrc && (
          <>
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            <div className="absolute right-2 top-2">
              <ProjectLogo className="h-8 w-8" project={project} />
            </div>
          </>
        )}
      </div>

      <div className="p-3 sm:p-4">
        <h3 className="line-clamp-1 text-sm font-medium tracking-tight text-gray-800 dark:text-white sm:text-base">
          {project.name}
        </h3>
        <p className="mt-1 line-clamp-2 text-xs leading-relaxed text-gray-600 dark:text-gray-300">
          {project.description}
        </p>
      </div>
    </Link>
  )
}
