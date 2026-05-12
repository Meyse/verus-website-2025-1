import type {Metadata} from 'next'

import {Suspense} from 'react'
import Link from 'next/link'

import {FeaturedProjects} from '@/features/projects/featured-projects'
import {ProjectIndex} from '@/features/projects/project-index'
import {ProjectSearch} from '@/features/projects/project-search'
import {
  getAllProjects,
  getFeaturedProjects,
} from '@/features/projects/server/projects'
import {Plus} from 'lucide-react'

import {
  absoluteUrl,
  createCollectionPageJsonLd,
  verusEntityId,
} from '@/lib/seo/schema'

import {Button} from '@/components/ui/button'
import {TextLinkButton} from '@/components/ui/text-link-button'
import {BgWrapper} from '@/components/bg-wrapper'
import {JsonLd} from '@/components/seo/json-ld'

export const revalidate = 3600

export const metadata: Metadata = {
  title: 'Projects built with Verus',
  description:
    'Explore wallets, applications, dashboards, and tools built with or around the Verus Protocol.',
  keywords:
    'Verus projects, Verus ecosystem, blockchain applications, cryptocurrency projects, Web3 applications, dApps',
  alternates: {
    canonical: '/projects',
  },
}

export default async function ProjectsPage() {
  const projects = await getAllProjects()
  const featuredProjects = getFeaturedProjects(projects)
  const projectsJsonLd = createCollectionPageJsonLd({
    path: '/projects',
    name: 'Projects built with Verus',
    description:
      'Wallets, applications, dashboards, and tools built with or around the Verus Protocol.',
    mainEntity: {
      '@type': 'ItemList',
      itemListElement: projects.map((project, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        item: {
          '@type': 'SoftwareApplication',
          '@id': `${absoluteUrl(`/projects/${project.slug}`)}#project`,
          name: project.name,
          description: project.description,
          url: absoluteUrl(`/projects/${project.slug}`),
          applicationCategory: project.category,
          codeRepository: project.repoUrl,
          sameAs: project.websiteUrl ? [project.websiteUrl] : undefined,
          about: {
            '@id': verusEntityId,
          },
        },
      })),
    },
  })

  return (
    <>
      <JsonLd data={projectsJsonLd} />
      <BgWrapper>
        <div className="bg-gradient-to-b from-gray-100 via-gray-100 to-white dark:from-gray-950 dark:via-gray-950 dark:to-gray-950">
          <div className="flex flex-col items-center px-0 pb-16 pt-0 md:pb-24 xl:px-4 xl:pt-[54px]">
            <div className="w-full min-w-0 max-w-full overflow-hidden border-b border-gray-200 bg-gray-50 shadow-[0_4px_40px_-12px_rgba(0,0,0,0.1)] dark:border-gray-800 dark:bg-gray-950 dark:shadow-[0_4px_40px_-12px_rgba(0,0,0,0.2)] xl:max-w-[1220px] xl:rounded-lg xl:border">
              <section className="border-b border-gray-200 bg-gray-50 px-6 py-8 dark:border-gray-800 dark:bg-gray-950 md:px-10 md:py-10">
                <h1 className="sr-only">Projects built with Verus</h1>
                <div className="flex min-w-0 flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
                  <div className="min-w-0 flex-1">
                    <ProjectSearch projects={projects} />
                  </div>

                  <div className="flex shrink-0 flex-col items-start gap-1 lg:items-end">
                    <Button
                      asChild
                      className="px-4"
                      size="verus"
                      variant="verusPrimary"
                    >
                      <Link href="/projects/add">
                        <Plus className="h-4 w-4" />
                        Add my project
                      </Link>
                    </Button>
                    <TextLinkButton
                      className="-ml-2"
                      contentClassName="mb-0 text-[14px]"
                      href="/api/projects.json"
                    >
                      Download JSON
                    </TextLinkButton>
                  </div>
                </div>
              </section>

              <FeaturedProjects projects={featuredProjects} />

              <section
                className="bg-gray-50 px-6 py-8 dark:bg-gray-950 md:px-10 md:py-10"
                id="projects"
              >
                <div className="mx-auto max-w-4xl">
                  <h2 className="mb-4 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mb-6">
                    All projects
                  </h2>
                  <Suspense fallback={<ProjectIndexFallback />}>
                    <ProjectIndex projects={projects} />
                  </Suspense>
                </div>
              </section>
            </div>
          </div>
        </div>
      </BgWrapper>
    </>
  )
}

function ProjectIndexFallback() {
  return (
    <div className="w-full animate-pulse">
      <div className="mb-4 h-9 w-64 max-w-sm rounded-lg border border-gray-200 bg-gray-100 dark:border-gray-800 dark:bg-gray-900" />
      <div className="overflow-hidden rounded-lg border border-gray-200 dark:border-gray-800">
        {Array.from({length: 4}).map((_, index) => (
          <div
            className="h-20 border-b border-gray-200 bg-white last:border-b-0 dark:border-gray-800 dark:bg-gray-900"
            key={index}
          />
        ))}
      </div>
    </div>
  )
}
