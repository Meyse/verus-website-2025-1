import type {ReactNode} from 'react'
import type {Metadata} from 'next'

import Link from 'next/link'
import {notFound} from 'next/navigation'

import {ProjectFeatureTag} from '@/features/projects/project-feature-tag'
import {ProjectLogo} from '@/features/projects/project-logo'
import {ProjectMarkdown} from '@/features/projects/project-markdown'
import {ProjectScreenshotGallery} from '@/features/projects/project-screenshot-gallery'
import {
  getAllProjects,
  getProjectBySlug,
} from '@/features/projects/server/projects'
import {timeAgo} from '@/features/projects/utils'
import {ArrowLeft, ExternalLink, GitFork, Star} from 'lucide-react'

import {
  absoluteUrl,
  createBreadcrumbJsonLd,
  verusEntityId,
} from '@/lib/seo/schema'

import {Button} from '@/components/ui/button'
import {BgWrapper} from '@/components/bg-wrapper'
import {JsonLd} from '@/components/seo/json-ld'

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
  const primaryLanguage = project.github?.languages[0] ?? ''
  const showLanguageBadge =
    project.category === 'tool' && primaryLanguage !== ''
  const showMaintainer =
    project.maintainer !== 'Verus community' || Boolean(project.repoUrl)

  return (
    <>
      <JsonLd data={projectJsonLd} />
      <JsonLd data={breadcrumbJsonLd} />
      <BgWrapper>
        <div className="bg-gradient-to-b from-gray-100 via-gray-100 to-white dark:from-gray-950 dark:via-gray-950 dark:to-gray-950">
          <div className="flex flex-col items-center px-0 pb-16 pt-0 md:pb-24 xl:px-4 xl:pt-[54px]">
            <article className="w-full min-w-0 max-w-full overflow-hidden border-b border-gray-200 bg-gray-50 shadow-[0_4px_40px_-12px_rgba(0,0,0,0.1)] dark:border-gray-800 dark:bg-gray-950 dark:shadow-[0_4px_40px_-12px_rgba(0,0,0,0.2)] xl:max-w-[1220px] xl:rounded-lg xl:border">
              <section className="border-b border-gray-200 bg-gray-50 px-6 py-8 dark:border-gray-800 dark:bg-gray-950 md:px-10 md:py-10">
                <div className="mx-auto max-w-5xl">
                  <Link
                    className="mb-6 inline-flex items-center gap-2 rounded-lg text-[14px] font-medium text-gray-600 transition-colors hover:text-verus-blue dark:text-gray-300 dark:hover:text-white"
                    href="/projects"
                  >
                    <ArrowLeft className="h-4 w-4" />
                    Back to all projects
                  </Link>

                  <div className="hidden md:flex md:items-start md:gap-4">
                    <ProjectLogo
                      className="h-16 w-16 shrink-0"
                      project={project}
                    />

                    <div className="min-w-0 flex-1">
                      <div className="flex flex-wrap items-center gap-3">
                        <h1 className="break-words text-2xl font-semibold leading-tight tracking-normal text-gray-800 dark:text-white">
                          {project.name}
                        </h1>
                        {showLanguageBadge && (
                          <span className="inline-flex items-center gap-1.5 rounded-md border border-gray-200 bg-white px-2 py-0.5 text-xs font-medium text-gray-600 dark:border-gray-800 dark:bg-gray-900 dark:text-gray-300">
                            <LanguageDot language={primaryLanguage} />
                            {primaryLanguage}
                          </span>
                        )}
                      </div>
                      <p className="mt-1 max-w-2xl text-sm leading-relaxed tracking-normal text-gray-600 dark:text-gray-300">
                        {project.description}
                      </p>
                      <div className="mt-2 flex flex-wrap gap-1.5">
                        {project.verusFeatures.map((feature) => (
                          <ProjectFeatureTag feature={feature} key={feature} />
                        ))}
                      </div>
                    </div>

                    <div className="flex shrink-0 gap-2">
                      {project.repoUrl && (
                        <Button
                          asChild
                          className="group px-4"
                          size="verus"
                          variant="verusPrimary"
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
                      {project.websiteUrl && (
                        <Button
                          asChild
                          className="group px-4"
                          size="verus"
                          variant="verusSecondary"
                        >
                          <a
                            href={project.websiteUrl}
                            rel="noopener noreferrer"
                            target="_blank"
                          >
                            Website
                            <ExternalLink className="h-4 w-4 opacity-60 transition-opacity duration-300 group-hover:opacity-100" />
                          </a>
                        </Button>
                      )}
                    </div>
                  </div>

                  <div className="md:hidden">
                    <div className="mb-3 flex items-center gap-3">
                      <ProjectLogo
                        className="h-12 w-12 shrink-0"
                        project={project}
                      />
                      <div className="min-w-0 flex-1">
                        <div className="flex min-w-0 items-center gap-2">
                          <h1 className="min-w-0 break-words text-xl font-semibold leading-tight tracking-normal text-gray-800 dark:text-white">
                            {project.name}
                          </h1>
                          {showLanguageBadge && (
                            <span className="inline-flex shrink-0 items-center gap-1.5 rounded-md border border-gray-200 bg-white px-2 py-0.5 text-xs font-medium text-gray-600 dark:border-gray-800 dark:bg-gray-900 dark:text-gray-300">
                              <LanguageDot language={primaryLanguage} />
                              {primaryLanguage}
                            </span>
                          )}
                        </div>
                        <p className="mt-0.5 line-clamp-2 text-sm leading-relaxed tracking-normal text-gray-600 dark:text-gray-300">
                          {project.description}
                        </p>
                      </div>
                    </div>

                    <div className="-mx-6 flex gap-1.5 overflow-x-auto px-6 pb-2">
                      {project.verusFeatures.map((feature) => (
                        <ProjectFeatureTag feature={feature} key={feature} />
                      ))}
                    </div>

                    <div className="mt-3 flex gap-2">
                      {project.repoUrl && (
                        <Button
                          asChild
                          className="group flex-1 px-3"
                          size="verus"
                          variant="verusPrimary"
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
                      {project.websiteUrl && (
                        <Button
                          asChild
                          className="group flex-1 px-3"
                          size="verus"
                          variant="verusSecondary"
                        >
                          <a
                            href={project.websiteUrl}
                            rel="noopener noreferrer"
                            target="_blank"
                          >
                            Website
                            <ExternalLink className="h-4 w-4 opacity-60 transition-opacity duration-300 group-hover:opacity-100" />
                          </a>
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              </section>

              {project.github && (
                <section className="border-b border-gray-200 bg-gray-50 px-6 py-4 dark:border-gray-800 dark:bg-gray-950 md:px-10">
                  <div className="mx-auto flex max-w-5xl flex-wrap items-center gap-x-4 gap-y-1 text-sm text-gray-600 dark:text-gray-300">
                    <span className="inline-flex items-center gap-1">
                      <Star className="h-3.5 w-3.5 opacity-70" />
                      {project.github.stars.toLocaleString()} stars
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <GitFork className="h-3.5 w-3.5 opacity-70" />
                      {project.github.forks.toLocaleString()} forks
                    </span>
                    <span>Updated {timeAgo(project.github.lastCommit)}</span>
                    {project.github.license && (
                      <span>{project.github.license}</span>
                    )}
                  </div>
                </section>
              )}

              {project.screenshots.length > 0 && (
                <ProjectScreenshotGallery
                  assetBaseUrl={project.assetBaseUrl}
                  projectName={project.name}
                  screenshots={project.screenshots}
                />
              )}

              <section className="bg-gray-50 px-6 py-8 dark:bg-gray-950 md:px-10 md:py-10">
                <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 lg:grid-cols-3">
                  <div className="min-w-0 lg:col-span-2">
                    <h2 className="mb-4 text-sm font-medium uppercase tracking-wide text-gray-500 dark:text-gray-400">
                      About
                    </h2>
                    <ProjectMarkdown>{project.longDescription}</ProjectMarkdown>
                  </div>

                  <aside className="space-y-6">
                    {project.github?.languages &&
                      project.github.languages.length > 0 && (
                        <SidebarSection title="Languages">
                          <div className="flex flex-wrap gap-2">
                            {project.github.languages.map((language) => (
                              <span
                                className="inline-flex items-center gap-1.5 rounded-md border border-gray-200 bg-white px-2 py-1 text-xs font-medium text-gray-600 dark:border-gray-800 dark:bg-gray-900 dark:text-gray-300"
                                key={language}
                              >
                                <LanguageDot language={language} />
                                {language}
                              </span>
                            ))}
                          </div>
                        </SidebarSection>
                      )}

                    <SidebarSection title="Links">
                      <div className="space-y-1 text-sm">
                        {project.repoUrl && (
                          <SidebarLink href={project.repoUrl}>
                            Repository
                          </SidebarLink>
                        )}
                        {project.websiteUrl && (
                          <SidebarLink href={project.websiteUrl}>
                            Website
                          </SidebarLink>
                        )}
                        {project.docsUrl && (
                          <SidebarLink href={project.docsUrl}>
                            Documentation
                          </SidebarLink>
                        )}
                      </div>
                    </SidebarSection>

                    <SidebarSection title="Data">
                      <div className="space-y-1 text-sm">
                        <SidebarLink
                          href="/api/projects.json"
                          isExternal={false}
                        >
                          Download JSON
                        </SidebarLink>
                        <SidebarLink
                          href={`https://github.com/Meyse/verus-projects/blob/main/projects/${project.slug}/project.yaml`}
                        >
                          View YAML source
                        </SidebarLink>
                      </div>
                    </SidebarSection>

                    {showMaintainer && (
                      <SidebarSection title="Maintainer">
                        <p className="text-sm text-gray-600 dark:text-gray-300">
                          {project.maintainer}
                        </p>
                      </SidebarSection>
                    )}
                  </aside>
                </div>
              </section>
            </article>
          </div>
        </div>
      </BgWrapper>
    </>
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
    <section>
      <h2 className="mb-2 text-sm font-medium uppercase tracking-wide text-gray-500 dark:text-gray-400">
        {title}
      </h2>
      {children}
    </section>
  )
}

function SidebarLink({
  children,
  href,
  isExternal = true,
}: {
  children: ReactNode
  href: string
  isExternal?: boolean
}) {
  const className =
    'group inline-flex items-start rounded-lg p-2 text-gray-600 transition-colors hover:text-verus-blue dark:text-gray-300 dark:hover:text-white [&>div>div]:hover:underline'

  if (!isExternal) {
    return (
      <Link className={className} href={href}>
        <div>
          <div className="flex items-start gap-2 text-[15px] font-[450]">
            {children}
          </div>
        </div>
      </Link>
    )
  }

  return (
    <a
      className={className}
      href={href}
      rel="noopener noreferrer"
      target="_blank"
    >
      <div>
        <div className="flex items-start gap-2 text-[15px] font-[450]">
          {children}
          <ExternalLink className="mt-0.5 h-4 w-4 shrink-0 opacity-50 group-hover:opacity-100" />
        </div>
      </div>
    </a>
  )
}

function LanguageDot({language}: {language: string}) {
  const colors: Record<string, string> = {
    C: '#555555',
    'C++': '#f34b7d',
    Go: '#00add8',
    Java: '#b07219',
    JavaScript: '#f7df1e',
    Kotlin: '#a97bff',
    PHP: '#4f5d95',
    Python: '#3776ab',
    Ruby: '#cc342d',
    Rust: '#dea584',
    Svelte: '#ff3e00',
    Swift: '#fa7343',
    TypeScript: '#3178c6',
  }

  return (
    <span
      className="h-2 w-2 shrink-0 rounded-full"
      style={{backgroundColor: colors[language] || '#6b7280'}}
    />
  )
}
