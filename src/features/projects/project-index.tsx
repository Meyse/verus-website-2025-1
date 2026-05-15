'use client'

import type {Project, ProjectCategory, VerusFeature} from './types'
import type {ReactNode} from 'react'

import {useEffect, useMemo, useState} from 'react'
import Link from 'next/link'
import {useRouter, useSearchParams} from 'next/navigation'

import {
  GitFork,
  Grid2X2,
  List,
  Search,
  SlidersHorizontal,
  Star,
  X,
} from 'lucide-react'

import {cn} from '@/lib/utils'

import {ProjectFeatureTag} from './project-feature-tag'
import {ProjectLogo} from './project-logo'
import {PROJECT_CATEGORIES, VERUS_FEATURES} from './types'
import {formatCategory, timeAgo} from './utils'

type SortOption = 'updated' | 'stars' | 'name'
type ViewMode = 'card' | 'table'

interface ProjectIndexProps {
  projects: Project[]
}

function getParamList<T extends string>(
  searchParams: URLSearchParams,
  key: string,
  allowedValues: readonly T[]
) {
  return (
    searchParams
      .get(key)
      ?.split(',')
      .filter((value): value is T => allowedValues.includes(value as T)) || []
  )
}

function getSortParam(searchParams: URLSearchParams): SortOption {
  const sort = searchParams.get('sort')

  return sort === 'name' || sort === 'stars' ? sort : 'updated'
}

function getViewParam(searchParams: URLSearchParams): ViewMode {
  return searchParams.get('view') === 'table' ? 'table' : 'card'
}

export function ProjectIndex({projects}: ProjectIndexProps) {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [search, setSearch] = useState(searchParams.get('q') || '')
  const [selectedCategories, setSelectedCategories] = useState<
    ProjectCategory[]
  >(getParamList(searchParams, 'category', PROJECT_CATEGORIES))
  const [selectedFeatures, setSelectedFeatures] = useState<VerusFeature[]>(
    getParamList(searchParams, 'features', VERUS_FEATURES)
  )
  const [selectedLanguages, setSelectedLanguages] = useState<string[]>(
    searchParams.get('lang')?.split(',').filter(Boolean) || []
  )
  const [sort, setSort] = useState<SortOption>(getSortParam(searchParams))
  const [viewMode, setViewMode] = useState<ViewMode>(getViewParam(searchParams))
  const [filtersOpen, setFiltersOpen] = useState(false)

  const languages = useMemo(() => {
    const languageSet = new Set<string>()

    projects.forEach((project) => {
      project.github?.languages.forEach((language) => languageSet.add(language))
    })

    return Array.from(languageSet).sort()
  }, [projects])

  useEffect(() => {
    const params = new URLSearchParams()

    if (search) params.set('q', search)
    if (selectedCategories.length > 0) {
      params.set('category', selectedCategories.join(','))
    }
    if (selectedFeatures.length > 0) {
      params.set('features', selectedFeatures.join(','))
    }
    if (selectedLanguages.length > 0) {
      params.set('lang', selectedLanguages.join(','))
    }
    if (sort !== 'updated') params.set('sort', sort)
    if (viewMode !== 'card') params.set('view', viewMode)

    const queryString = params.toString()
    router.replace(queryString ? `/projects?${queryString}` : '/projects', {
      scroll: false,
    })
  }, [
    router,
    search,
    selectedCategories,
    selectedFeatures,
    selectedLanguages,
    sort,
    viewMode,
  ])

  const filteredProjects = useMemo(() => {
    const query = search.toLowerCase().trim()

    return projects
      .filter((project) => {
        const matchesSearch =
          !query ||
          project.name.toLowerCase().includes(query) ||
          project.description.toLowerCase().includes(query) ||
          project.category.toLowerCase().includes(query) ||
          project.verusFeatures.some((feature) =>
            feature.toLowerCase().includes(query)
          ) ||
          project.github?.languages.some((language) =>
            language.toLowerCase().includes(query)
          )

        const matchesCategory =
          selectedCategories.length === 0 ||
          selectedCategories.includes(project.category)

        const matchesFeature =
          selectedFeatures.length === 0 ||
          selectedFeatures.every((feature) =>
            project.verusFeatures.includes(feature)
          )

        const matchesLanguage =
          selectedLanguages.length === 0 ||
          selectedLanguages.some((language) =>
            project.github?.languages.includes(language)
          )

        return (
          matchesSearch && matchesCategory && matchesFeature && matchesLanguage
        )
      })
      .sort((a, b) => {
        if (sort === 'stars') {
          return (b.github?.stars || 0) - (a.github?.stars || 0)
        }

        if (sort === 'name') {
          return a.name.localeCompare(b.name)
        }

        return (b.github?.lastCommit || '').localeCompare(
          a.github?.lastCommit || ''
        )
      })
  }, [
    projects,
    search,
    selectedCategories,
    selectedFeatures,
    selectedLanguages,
    sort,
  ])

  const activeFacetCount =
    selectedCategories.length +
    selectedFeatures.length +
    selectedLanguages.length

  const activeFilterChips = [
    ...selectedCategories.map((category) => ({
      key: `category-${category}`,
      label: formatCategory(category),
      onRemove: () => toggleCategory(category),
    })),
    ...selectedFeatures.map((feature) => ({
      key: `feature-${feature}`,
      label: feature,
      onRemove: () => toggleFeature(feature),
    })),
    ...selectedLanguages.map((language) => ({
      key: `language-${language}`,
      label: language,
      onRemove: () => toggleLanguage(language),
    })),
  ]

  function toggleCategory(category: ProjectCategory) {
    setSelectedCategories((previous) =>
      previous.includes(category)
        ? previous.filter((item) => item !== category)
        : [...previous, category]
    )
  }

  function toggleFeature(feature: VerusFeature) {
    setSelectedFeatures((previous) =>
      previous.includes(feature)
        ? previous.filter((item) => item !== feature)
        : [...previous, feature]
    )
  }

  function toggleLanguage(language: string) {
    setSelectedLanguages((previous) =>
      previous.includes(language)
        ? previous.filter((item) => item !== language)
        : [...previous, language]
    )
  }

  function clearAllFilters() {
    setSearch('')
    setSelectedCategories([])
    setSelectedFeatures([])
    setSelectedLanguages([])
  }

  function suggestApps() {
    setSearch('')
    setSelectedCategories(['app'])
    setSelectedFeatures([])
    setSelectedLanguages([])
  }

  function suggestDashboards() {
    setSearch('')
    setSelectedCategories(['dashboard'])
    setSelectedFeatures([])
    setSelectedLanguages([])
  }

  return (
    <div className="w-full">
      <div className="mb-6 flex flex-col gap-3 sm:mb-8">
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <div className="flex min-w-0 flex-col gap-2 sm:flex-row sm:items-center">
            <div className="relative w-full sm:w-64 md:w-72">
              <div className="pointer-events-none absolute inset-y-0 left-3 flex items-center">
                <Search className="h-4 w-4 text-gray-500 dark:text-gray-400" />
              </div>
              <input
                className="h-9 w-full rounded-lg border border-gray-300 bg-white pl-9 pr-9 text-sm text-gray-800 outline-none transition-colors placeholder:text-gray-400 focus:border-gray-400 dark:border-gray-800 dark:bg-gray-900 dark:text-white dark:placeholder:text-gray-500 dark:focus:border-gray-700"
                onChange={(event) => setSearch(event.target.value)}
                placeholder="Filter projects..."
                type="text"
                value={search}
              />
              {search && (
                <button
                  aria-label="Clear search"
                  className="absolute inset-y-0 right-2 flex items-center text-gray-500 transition-colors hover:text-gray-800 dark:text-gray-400 dark:hover:text-white"
                  onClick={() => setSearch('')}
                  type="button"
                >
                  <X className="h-4 w-4" />
                </button>
              )}
            </div>

            <div className="relative shrink-0">
              <button
                aria-expanded={filtersOpen}
                aria-haspopup="dialog"
                className={cn(
                  'inline-flex h-9 w-full items-center justify-center gap-2 rounded-lg border px-3 text-sm font-medium transition-colors sm:w-auto',
                  filtersOpen || activeFacetCount > 0
                    ? 'border-verus-blue bg-verus-blue text-white hover:bg-verus-blue/90'
                    : 'border-gray-300 bg-white/90 text-gray-800 hover:border-gray-400 hover:bg-white dark:border-gray-800 dark:bg-gray-900 dark:text-white dark:hover:border-gray-700'
                )}
                onClick={() => setFiltersOpen((open) => !open)}
                type="button"
              >
                <SlidersHorizontal className="h-4 w-4" />
                Filters
                {activeFacetCount > 0 && (
                  <span className="rounded-full bg-white/20 px-1.5 py-0.5 text-[10px] font-medium leading-none text-white">
                    {activeFacetCount}
                  </span>
                )}
              </button>

              {filtersOpen && (
                <FilterPanel
                  activeFacetCount={activeFacetCount}
                  filteredCount={filteredProjects.length}
                  languages={languages}
                  onClearAll={clearAllFilters}
                  onClose={() => setFiltersOpen(false)}
                  onToggleCategory={toggleCategory}
                  onToggleFeature={toggleFeature}
                  onToggleLanguage={toggleLanguage}
                  projectCount={projects.length}
                  selectedCategories={selectedCategories}
                  selectedFeatures={selectedFeatures}
                  selectedLanguages={selectedLanguages}
                />
              )}
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <select
              aria-label="Sort projects"
              className="h-9 cursor-pointer rounded-lg border border-gray-200 bg-white px-2.5 text-xs text-gray-700 outline-none transition-colors focus:border-gray-400 dark:border-gray-800 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-gray-700"
              onChange={(event) => setSort(event.target.value as SortOption)}
              value={sort}
            >
              <option value="updated">Recently updated</option>
              <option value="stars">Most stars</option>
              <option value="name">Name A-Z</option>
            </select>

            <div className="flex h-9 items-center gap-1 rounded-lg border border-gray-200 p-0.5 dark:border-gray-800">
              <ViewButton
                icon={<Grid2X2 className="h-4 w-4" />}
                isSelected={viewMode === 'card'}
                label="Card view"
                onClick={() => setViewMode('card')}
              />
              <ViewButton
                icon={<List className="h-4 w-4" />}
                isSelected={viewMode === 'table'}
                label="Table view"
                onClick={() => setViewMode('table')}
              />
            </div>
          </div>
        </div>

        {activeFilterChips.length > 0 && (
          <div className="flex flex-col gap-2 border-t border-gray-200 pt-3 dark:border-gray-800 sm:flex-row sm:items-start sm:justify-between">
            <div className="flex min-w-0 flex-1 flex-wrap gap-1.5">
              {activeFilterChips.map((chip) => (
                <ActiveFilterChip
                  key={chip.key}
                  label={chip.label}
                  onRemove={chip.onRemove}
                />
              ))}
            </div>
            <button
              className="w-fit text-xs text-gray-500 transition-colors hover:text-gray-800 dark:text-gray-400 dark:hover:text-white"
              onClick={clearAllFilters}
              type="button"
            >
              Clear all
            </button>
          </div>
        )}
      </div>

      {filteredProjects.length === 0 ? (
        <div className="rounded-xl border border-dashed border-gray-200 px-4 py-12 text-center dark:border-gray-800 sm:py-16">
          <p className="mb-4 text-sm text-gray-500 dark:text-gray-400">
            No projects found{search ? ` matching "${search}"` : ''}.
          </p>
          <div className="flex flex-col items-center justify-center gap-2 text-xs sm:flex-row">
            <span className="text-gray-500 dark:text-gray-400">Try:</span>
            <button
              className="text-gray-700 transition-colors hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
              onClick={clearAllFilters}
              type="button"
            >
              Clear all filters
            </button>
            <span className="hidden text-gray-400 dark:text-gray-500 sm:inline">
              -
            </span>
            <button
              className="text-verus-blue hover:underline"
              onClick={suggestApps}
              type="button"
            >
              Browse apps
            </button>
            <span className="hidden text-gray-400 dark:text-gray-500 sm:inline">
              -
            </span>
            <button
              className="text-verus-blue hover:underline"
              onClick={suggestDashboards}
              type="button"
            >
              Browse dashboards
            </button>
          </div>
        </div>
      ) : viewMode === 'table' ? (
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-200 dark:border-gray-800">
                <TableHeader>Project</TableHeader>
                <TableHeader className="hidden sm:table-cell">
                  Language
                </TableHeader>
                <TableHeader className="hidden text-right sm:table-cell">
                  Stats
                </TableHeader>
                <TableHeader className="text-right">Updated</TableHeader>
              </tr>
            </thead>
            <tbody>
              {filteredProjects.map((project) => (
                <ProjectTableRow key={project.slug} project={project} />
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="space-y-3 sm:space-y-4">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      )}
    </div>
  )
}

function FilterPanel({
  activeFacetCount,
  filteredCount,
  languages,
  onClearAll,
  onClose,
  onToggleCategory,
  onToggleFeature,
  onToggleLanguage,
  projectCount,
  selectedCategories,
  selectedFeatures,
  selectedLanguages,
}: {
  activeFacetCount: number
  filteredCount: number
  languages: string[]
  onClearAll: () => void
  onClose: () => void
  onToggleCategory: (category: ProjectCategory) => void
  onToggleFeature: (feature: VerusFeature) => void
  onToggleLanguage: (language: string) => void
  projectCount: number
  selectedCategories: ProjectCategory[]
  selectedFeatures: VerusFeature[]
  selectedLanguages: string[]
}) {
  return (
    <>
      <button
        aria-label="Close filters"
        className="fixed inset-0 z-40 bg-black/20 sm:bg-transparent"
        onClick={onClose}
        type="button"
      />

      <div
        aria-label="Project filters"
        className="fixed inset-x-3 top-24 z-50 flex max-h-[calc(100vh-7rem)] flex-col overflow-hidden rounded-lg border border-gray-200 bg-white shadow-2xl dark:border-gray-800 dark:bg-gray-950 sm:absolute sm:left-0 sm:right-auto sm:top-full sm:mt-2 sm:w-[420px] sm:max-w-[calc(100vw-3rem)] sm:shadow-xl"
        role="dialog"
      >
        <div className="flex items-start justify-between gap-4 border-b border-gray-200 px-4 py-3 dark:border-gray-800">
          <div>
            <h3 className="text-sm font-medium text-gray-800 dark:text-white">
              Filter projects
            </h3>
            <span className="mt-0.5 block text-xs text-gray-500 dark:text-gray-400">
              {filteredCount} of {projectCount} shown
            </span>
          </div>
          <button
            aria-label="Close filters"
            className="-mr-1 rounded-md p-1 text-gray-500 transition-colors hover:text-gray-800 dark:text-gray-400 dark:hover:text-white"
            onClick={onClose}
            type="button"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        <div className="flex-1 space-y-4 overflow-y-auto p-4">
          <FilterGroup activeCount={selectedCategories.length} title="Category">
            <div className="flex flex-wrap gap-1.5">
              {PROJECT_CATEGORIES.map((category) => (
                <FilterButton
                  isSelected={selectedCategories.includes(category)}
                  key={category}
                  onClick={() => onToggleCategory(category)}
                >
                  {formatCategory(category)}
                </FilterButton>
              ))}
            </div>
          </FilterGroup>

          <FilterGroup activeCount={selectedFeatures.length} title="Features">
            <div className="flex flex-wrap gap-1.5">
              {VERUS_FEATURES.map((feature) => (
                <FilterButton
                  isSelected={selectedFeatures.includes(feature)}
                  key={feature}
                  onClick={() => onToggleFeature(feature)}
                >
                  {feature}
                </FilterButton>
              ))}
            </div>
          </FilterGroup>

          {languages.length > 0 && (
            <FilterGroup
              activeCount={selectedLanguages.length}
              title="Languages"
            >
              <div className="flex flex-wrap gap-1.5">
                {languages.slice(0, 12).map((language) => (
                  <FilterButton
                    isSelected={selectedLanguages.includes(language)}
                    key={language}
                    onClick={() => onToggleLanguage(language)}
                    variant="blue"
                  >
                    {language}
                  </FilterButton>
                ))}
              </div>
            </FilterGroup>
          )}
        </div>

        {activeFacetCount > 0 && (
          <div className="flex items-center justify-between gap-3 border-t border-gray-200 px-4 py-3 dark:border-gray-800">
            <span className="text-xs text-gray-500 dark:text-gray-400">
              {activeFacetCount} active
            </span>
            <button
              className="text-xs font-medium text-gray-700 transition-colors hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
              onClick={onClearAll}
              type="button"
            >
              Clear all
            </button>
          </div>
        )}
      </div>
    </>
  )
}

function FilterGroup({
  activeCount,
  children,
  title,
}: {
  activeCount: number
  children: ReactNode
  title: string
}) {
  return (
    <section className="border-b border-gray-200 pb-4 last:border-b-0 last:pb-0 dark:border-gray-800">
      <div className="mb-2 flex items-center gap-2">
        <h4 className="text-xs font-medium text-gray-500 dark:text-gray-400">
          {title}
        </h4>
        {activeCount > 0 && (
          <span className="rounded-full bg-verus-blue px-1.5 py-0.5 text-[10px] font-medium leading-none text-white">
            {activeCount}
          </span>
        )}
      </div>
      {children}
    </section>
  )
}

function ActiveFilterChip({
  label,
  onRemove,
}: {
  label: string
  onRemove: () => void
}) {
  return (
    <button
      aria-label={`Remove ${label} filter`}
      className="inline-flex max-w-full items-center gap-1 rounded-md border border-gray-200 bg-white px-2 py-1 text-xs font-medium text-gray-700 transition-colors hover:border-gray-300 dark:border-gray-800 dark:bg-gray-900 dark:text-gray-300 dark:hover:border-gray-700"
      onClick={onRemove}
      type="button"
    >
      <span className="truncate">{label}</span>
      <X className="h-3.5 w-3.5 shrink-0 text-gray-400" />
    </button>
  )
}

function FilterButton({
  children,
  isSelected,
  onClick,
  variant = 'neutral',
}: {
  children: ReactNode
  isSelected: boolean
  onClick: () => void
  variant?: 'blue' | 'neutral'
}) {
  return (
    <button
      aria-pressed={isSelected}
      className={cn(
        'rounded-md border px-2.5 py-1 text-xs font-medium transition-colors',
        isSelected
          ? variant === 'blue'
            ? 'border-transparent bg-verus-blue text-white'
            : 'border-transparent bg-gray-800 text-white dark:bg-white dark:text-gray-950'
          : 'border-gray-200 bg-white text-gray-700 hover:border-gray-300 dark:border-gray-800 dark:bg-gray-900 dark:text-gray-300 dark:hover:border-gray-700'
      )}
      onClick={onClick}
      type="button"
    >
      {children}
    </button>
  )
}

function ViewButton({
  icon,
  isSelected,
  label,
  onClick,
}: {
  icon: ReactNode
  isSelected: boolean
  label: string
  onClick: () => void
}) {
  return (
    <button
      aria-label={label}
      className={cn(
        'rounded p-1.5 transition-colors',
        isSelected
          ? 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-white'
          : 'text-gray-500 hover:text-gray-800 dark:text-gray-400 dark:hover:text-white'
      )}
      onClick={onClick}
      title={label}
      type="button"
    >
      {icon}
    </button>
  )
}

function ProjectCard({project}: {project: Project}) {
  const showLanguage = project.category === 'tool'
  const primaryLanguage = project.github?.languages[0] || null

  return (
    <Link
      className="group block rounded-xl border border-gray-200 bg-white p-4 transition-all duration-200 hover:border-gray-300 hover:bg-gray-50 dark:border-gray-800 dark:bg-gray-900 dark:hover:border-gray-700 dark:hover:bg-gray-900/70 sm:p-5"
      href={`/projects/${project.slug}`}
    >
      <div className="flex items-start gap-3 sm:gap-5">
        <ProjectLogo
          className="h-10 w-10 shrink-0 sm:h-12 sm:w-12"
          project={project}
        />

        <div className="min-w-0 flex-1">
          <div className="mb-1 flex items-start justify-between gap-3">
            <h3 className="truncate text-base font-medium text-gray-800 dark:text-white sm:text-lg">
              {project.name}
            </h3>

            {project.github && (
              <span className="hidden shrink-0 whitespace-nowrap text-xs text-gray-500 dark:text-gray-400 sm:block">
                {timeAgo(project.github.lastCommit)}
              </span>
            )}
          </div>

          <p className="mb-3 line-clamp-2 text-sm leading-relaxed text-gray-600 dark:text-gray-300">
            {project.description}
          </p>

          <div className="flex items-center justify-between gap-2">
            <div className="flex flex-wrap items-center gap-1.5">
              {showLanguage && primaryLanguage && (
                <LanguageBadge language={primaryLanguage} />
              )}
              {project.verusFeatures.map((feature) => (
                <ProjectFeatureTag feature={feature} key={feature} />
              ))}
            </div>

            {project.github &&
              (project.github.stars > 0 || project.github.forks > 0) && (
                <div className="flex shrink-0 items-center gap-3">
                  {project.github.stars > 0 && (
                    <StatIcon
                      icon={<Star className="h-3 w-3" />}
                      value={project.github.stars}
                    />
                  )}
                  {project.github.forks > 0 && (
                    <StatIcon
                      icon={<GitFork className="h-3 w-3" />}
                      value={project.github.forks}
                    />
                  )}
                </div>
              )}
          </div>
        </div>
      </div>
    </Link>
  )
}

function ProjectTableRow({project}: {project: Project}) {
  const primaryLanguage = project.github?.languages[0] || null

  return (
    <tr className="border-b border-gray-200 transition-colors hover:bg-gray-50 dark:border-gray-800 dark:hover:bg-gray-900/70">
      <td className="px-3 py-3">
        <Link className="block" href={`/projects/${project.slug}`}>
          <div className="flex items-center gap-3">
            <ProjectLogo className="h-8 w-8 shrink-0" project={project} />
            <div className="min-w-0">
              <div className="truncate font-medium text-gray-800 dark:text-white">
                {project.name}
              </div>
              <div className="max-w-[200px] truncate text-xs text-gray-500 dark:text-gray-400 sm:max-w-[300px]">
                {project.description}
              </div>
            </div>
          </div>
        </Link>
      </td>

      <td className="hidden px-3 py-3 sm:table-cell">
        {primaryLanguage && <LanguageBadge language={primaryLanguage} />}
      </td>

      <td className="hidden px-3 py-3 text-right sm:table-cell">
        {project.github &&
        (project.github.stars > 0 || project.github.forks > 0) ? (
          <div className="flex items-center justify-end gap-3">
            {project.github.stars > 0 && (
              <StatIcon
                icon={<Star className="h-3 w-3" />}
                value={project.github.stars}
              />
            )}
            {project.github.forks > 0 && (
              <StatIcon
                icon={<GitFork className="h-3 w-3" />}
                value={project.github.forks}
              />
            )}
          </div>
        ) : (
          <span className="text-xs text-gray-500 dark:text-gray-400">-</span>
        )}
      </td>

      <td className="px-3 py-3 text-right">
        {project.github?.lastCommit ? (
          <span className="font-mono text-xs text-gray-500 dark:text-gray-400">
            {timeAgo(project.github.lastCommit)}
          </span>
        ) : (
          <span className="text-xs text-gray-500 dark:text-gray-400">-</span>
        )}
      </td>
    </tr>
  )
}

function LanguageBadge({language}: {language: string}) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded border border-gray-200 bg-gray-50 px-1.5 py-0.5 text-xs text-gray-500 dark:border-gray-800 dark:bg-gray-950 dark:text-gray-400">
      <span
        className="h-2 w-2 shrink-0 rounded-full"
        style={{backgroundColor: getLanguageColor(language)}}
      />
      {language}
    </span>
  )
}

function StatIcon({icon, value}: {icon: ReactNode; value: number}) {
  return (
    <div className="flex items-center gap-1 text-xs text-gray-500 dark:text-gray-400">
      {icon}
      <span>{value}</span>
    </div>
  )
}

function TableHeader({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <th
      className={cn(
        'px-3 py-2 text-left text-xs font-medium text-gray-500 dark:text-gray-400',
        className
      )}
    >
      {children}
    </th>
  )
}

function getLanguageColor(language: string) {
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

  return colors[language] || '#6b7280'
}
