import type {Metadata} from 'next'
import type {ReactNode} from 'react'

import Link from 'next/link'
import {notFound} from 'next/navigation'
import {ArrowLeft, ExternalLink} from 'lucide-react'

import {ProjectFeatureTag} from '@/features/projects/project-feature-tag'
import {ProjectLogo} from '@/features/projects/project-logo'
import {ProjectMarkdown} from '@/features/projects/project-markdown'
import {
  getAllProjects,
  getProjectBySlug,
} from '@/features/projects/server/projects'
import {formatCategory, timeAgo} from '@/features/projects/utils'

import {
  absoluteUrl,
  createBreadcrumbJsonLd,
  verusEntityId,
} from '@/lib/seo/schema'
import {cn} from '@/lib/utils'

import {BgWrapper} from '@/components/bg-wrapper'
import {JsonLd} from '@/components/seo/json-ld'
import {Button} from '@/components/ui/button'

export const revalidate = 3600

type Params = Promise<{slug: string}>

export async function generateStaticParams() {
  const projects = await getAllProjects()

  return projects.map((project) => ({
    slug: project.slug,
  }))
}

export async function generateMetadata(props: {
  params: Params
}): Promise<Metadata> {
  const {slug} = await props.params
  const project = await getProjectBySlug(slug)

  if (!project) {
    return {
      title: 'Project not found',
    }
  }

  return {
    title: `${project.name} | Verus projects`,
    description: project.description,
    openGraph: {
      description: project.description,
      title: `${project.name} | Verus projects`,
      url: absoluteUrl(`/projects/${project.slug}`),
    },
  }
}

export default async function ProjectPage(props: {params: Params}) {
  const {slug} = await props.params
  const project = await getProjectBySlug(slug)

  if (!project) {
    notFound()
  }

  const projectJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    '@id': `${absoluteUrl(`/projects/${project.slug}`)}#project`,
    name: project.name,
    url: absoluteUrl(`/projects/${project.slug}`),
    description: project.description,
    applicationCategory: project.category,
    codeRepository: project.repoUrl,
    sameAs: project.websiteUrl ? [project.websiteUrl] : undefined,
    featureList: project.verusFeatures,
    publisher: {
      '@id': verusEntityId,
    },
  }
  const breadcrumbJsonLd = createBreadcrumbJsonLd([
    {name: 'Projects', path: '/projects'},
    {name: project.name, path: `/projects/${project.slug}`},
  ])

  return (
    <>
      <JsonLd data={projectJsonLd} />
      <JsonLd data={breadcrumbJsonLd} />
      <BgWrapper>
        <div className="bg-gradient-to-b from-gray-100 via-gray-100 to-white dark:from-gray-950 dark:via-gray-950 dark:to-gray-950">
          <div className="flex flex-col items-center px-0 pb-16 pt-0 md:pb-24 xl:px-4 xl:pt-[54px]">
            <article className="w-full min-w-0 max-w-full overflow-hidden border-b border-gray-200 bg-gray-50 shadow-[0_4px_40px_-12px_rgba(0,0,0,0.1)] dark:border-gray-800 dark:bg-gray-950 dark:shadow-[0_4px_40px_-12px_rgba(0,0,0,0.2)] xl:max-w-[1220px] xl:rounded-lg xl:border">
              <section className="border-b border-gray-200 bg-gradient-to-br from-blue-50 to-white dark:border-gray-800 dark:from-blue-950/40 dark:to-gray-950">
                <div className="px-8 py-8 md:px-14 md:py-12">
                  <Link
                    className="mb-8 inline-flex items-center gap-2 rounded-lg text-[14px] font-medium text-gray-600 transition-colors hover:text-verus-blue dark:text-gray-300 dark:hover:text-white"
                    href="/projects"
                  >
                    <ArrowLeft className="h-4 w-4" />
                    Back to projects
                  </Link>

                  <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
                    <div className="flex min-w-0 flex-col gap-5 md:flex-row md:items-start">
                      <ProjectLogo
                        className="h-16 w-16 shrink-0 md:h-20 md:w-20"
                        project={project}
                      />
                      <div className="min-w-0">
                        <div className="mb-3 flex flex-wrap items-center gap-2">
                          <span className="rounded-md border border-gray-200 bg-white px-2.5 py-1.5 text-[13px] font-medium text-gray-600 dark:border-gray-800 dark:bg-gray-900 dark:text-gray-300">
                            {formatCategory(project.category)}
                          </span>
                          {project.github?.license && (
                            <span className="rounded-md border border-gray-200 bg-white px-2.5 py-1.5 text-[13px] font-medium text-gray-600 dark:border-gray-800 dark:bg-gray-900 dark:text-gray-300">
                              {project.github.license}
                            </span>
                          )}
                        </div>
                        <h1 className="max-w-[760px] break-words text-[28px] font-medium leading-[1.2] tracking-tight text-gray-800 dark:text-white max-md:max-w-[calc(100vw-4rem)] md:text-[44px]">
                          {project.name}
                        </h1>
                        <p className="mt-4 max-w-[760px] break-words text-[15px] leading-relaxed tracking-normal text-gray-600 dark:text-gray-300 max-md:max-w-[calc(100vw-4rem)] md:mt-6 md:text-[17px]">
                          {project.description}
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-3">
                      {project.websiteUrl && (
                        <Button
                          asChild
                          className="px-5"
                          size="verus"
                          variant="verusPrimary"
                        >
                          <a
                            href={project.websiteUrl}
                            rel="noopener noreferrer"
                            target="_blank"
                          >
                            Visit website
                            <ExternalLink className="h-4 w-4 opacity-60 transition-opacity duration-300 group-hover:opacity-100" />
                          </a>
                        </Button>
                      )}
                      {project.repoUrl && (
                        <Button
                          asChild
                          className="px-5"
                          size="verus"
                          variant="verusSecondary"
                        >
                          <a
                            href={project.repoUrl}
                            rel="noopener noreferrer"
                            target="_blank"
                          >
                            View repository
                            <ExternalLink className="h-4 w-4 opacity-60 transition-opacity duration-300 group-hover:opacity-100" />
                          </a>
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              </section>

              {project.github && (
                <section className="border-b border-gray-200 bg-gray-50 dark:border-gray-800 dark:bg-gray-950">
                  <div className="grid grid-cols-2 md:grid-cols-4">
                    <StatCell
                      className="border-b border-r md:border-b-0"
                      label="Stars"
                      value={project.github.stars}
                    />
                    <StatCell
                      className="border-b md:border-b-0 md:border-r"
                      label="Forks"
                      value={project.github.forks}
                    />
                    <StatCell
                      className="border-r"
                      label="Updated"
                      value={timeAgo(project.github.lastCommit)}
                    />
                    <StatCell
                      label="Maintainer"
                      value={project.maintainer}
                    />
                  </div>
                </section>
              )}

              <section className="grid grid-cols-1 bg-gray-50 dark:bg-gray-950 lg:grid-cols-[minmax(0,1fr)_360px]">
                <div className="min-w-0 px-8 py-10 md:px-14 md:py-14">
                  <ProjectMarkdown>{project.longDescription}</ProjectMarkdown>
                </div>

                <aside className="border-t border-gray-200 px-8 py-10 dark:border-gray-800 md:px-14 lg:border-l lg:border-t-0 lg:px-10 lg:py-14">
                  <SidebarSection title="Features used">
                    <div className="flex flex-wrap gap-2">
                      {project.verusFeatures.map((feature) => (
                        <ProjectFeatureTag feature={feature} key={feature} />
                      ))}
                    </div>
                  </SidebarSection>

                  {project.github?.languages &&
                    project.github.languages.length > 0 && (
                      <SidebarSection title="Languages">
                        <div className="flex flex-wrap gap-2">
                          {project.github.languages.map((language) => (
                            <span
                              className="rounded-md border border-gray-200 bg-white px-2 py-1 text-[13px] font-medium text-gray-600 dark:border-gray-800 dark:bg-gray-900 dark:text-gray-300"
                              key={language}
                            >
                              {language}
                            </span>
                          ))}
                        </div>
                      </SidebarSection>
                    )}

                  <SidebarSection title="Links">
                    <div className="space-y-2">
                      {project.websiteUrl && (
                        <SidebarLink href={project.websiteUrl}>
                          Website
                        </SidebarLink>
                      )}
                      {project.repoUrl && (
                        <SidebarLink href={project.repoUrl}>
                          Repository
                        </SidebarLink>
                      )}
                      {project.docsUrl && (
                        <SidebarLink href={project.docsUrl}>
                          Documentation
                        </SidebarLink>
                      )}
                    </div>
                  </SidebarSection>
                </aside>
              </section>
            </article>
          </div>
        </div>
      </BgWrapper>
    </>
  )
}

function StatCell({
  className,
  label,
  value,
}: {
  className?: string
  label: string
  value: number | string
}) {
  return (
    <div
      className={cn(
        'border-gray-200 px-8 py-6 dark:border-gray-800 md:px-10',
        className
      )}
    >
      <div className="text-[13px] font-medium text-gray-500 dark:text-gray-400">
        {label}
      </div>
      <div className="mt-2 break-words text-[20px] font-medium leading-tight tracking-tight text-gray-800 dark:text-white">
        {value}
      </div>
    </div>
  )
}

function SidebarSection({
  children,
  title,
}: {
  children: ReactNode
  title: string
}) {
  return (
    <section className="border-b border-gray-200 py-6 first:pt-0 last:border-b-0 last:pb-0 dark:border-gray-800">
      <h2 className="mb-4 text-[14px] font-medium leading-relaxed tracking-normal text-gray-800 dark:text-white">
        {title}
      </h2>
      {children}
    </section>
  )
}

function SidebarLink({
  children,
  href,
}: {
  children: ReactNode
  href: string
}) {
  return (
    <a
      className="group inline-flex items-start rounded-lg p-2 transition-colors [&>div>div]:hover:underline"
      href={href}
      rel="noopener noreferrer"
      target="_blank"
    >
      <div>
        <div className="flex items-start gap-2 text-[15px] font-[450] text-gray-800 dark:text-white">
          {children}
          <ExternalLink className="mt-0.5 h-4 w-4 shrink-0 opacity-50 group-hover:opacity-100" />
        </div>
      </div>
    </a>
  )
}
