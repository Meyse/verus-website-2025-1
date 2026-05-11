import type {Metadata} from 'next'

import {Suspense} from 'react'
import Link from 'next/link'
import {ExternalLink, Plus} from 'lucide-react'

import {ProjectIndex} from '@/features/projects/project-index'
import {getAllProjects} from '@/features/projects/server/projects'

import {
  absoluteUrl,
  createCollectionPageJsonLd,
  verusEntityId,
} from '@/lib/seo/schema'

import {BgWrapper} from '@/components/bg-wrapper'
import {JsonLd} from '@/components/seo/json-ld'
import {Button} from '@/components/ui/button'

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
              <section className="border-b border-gray-200 bg-gradient-to-br from-blue-50 to-white dark:border-gray-800 dark:from-blue-950/40 dark:to-gray-950">
                <div className="flex min-w-0 flex-col gap-8 px-8 py-12 md:px-14 md:py-16 lg:flex-row lg:items-end lg:justify-between">
                  <div className="max-w-[760px]">
                    <h1 className="max-w-[760px] break-words text-[28px] font-medium leading-[1.2] tracking-tight text-gray-800 dark:text-white max-md:max-w-[calc(100vw-4rem)] md:text-[44px]">
                      Projects built with Verus
                    </h1>
                    <p className="mt-4 max-w-[760px] break-words text-[15px] leading-relaxed tracking-normal text-gray-600 dark:text-gray-300 max-md:max-w-[calc(100vw-4rem)] md:mt-6 md:text-[17px]">
                      Explore wallets, applications, dashboards, and tools from
                      the Verus ecosystem. Open a project for links, feature
                      details, and repository information when available.
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-3">
                    <Button
                      asChild
                      className="px-5"
                      size="verus"
                      variant="verusPrimary"
                    >
                      <Link href="/projects/add">
                        <Plus className="h-4 w-4" />
                        Add project
                      </Link>
                    </Button>
                    <Button
                      asChild
                      className="px-5"
                      size="verus"
                      variant="verusSecondary"
                    >
                      <a
                        href="/api/projects.json"
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        Download JSON
                        <ExternalLink className="h-4 w-4 opacity-60 transition-opacity duration-300 group-hover:opacity-100" />
                      </a>
                    </Button>
                  </div>
                </div>
              </section>

              <Suspense fallback={<ProjectIndexFallback />}>
                <ProjectIndex projects={projects} />
              </Suspense>
            </div>
          </div>
        </div>
      </BgWrapper>
    </>
  )
}

function ProjectIndexFallback() {
  return (
    <section className="bg-gray-50 px-8 py-12 dark:bg-gray-950 md:px-14">
      <div className="h-11 max-w-[460px] animate-pulse rounded-lg bg-gray-200 dark:bg-gray-800" />
      <div className="mt-8 grid grid-cols-1 gap-px md:grid-cols-2">
        {Array.from({length: 4}).map((_, index) => (
          <div
            className="h-48 animate-pulse bg-gray-100 dark:bg-gray-900"
            key={index}
          />
        ))}
      </div>
    </section>
  )
}
