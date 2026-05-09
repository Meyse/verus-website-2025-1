'use client'

import {useMemo, useState} from 'react'
import Link from 'next/link'
import {useRouter, useSearchParams} from 'next/navigation'

import type {Project, ProjectCategory, VerusFeature} from './types'

import {ChevronDown, Grid2X2, ListFilter, Search, SlidersHorizontal, X} from 'lucide-react'

import {cn} from '@/lib/utils'

import {PROJECT_CATEGORIES, VERUS_FEATURES} from './types'
import {formatCategory, timeAgo} from './utils'
import {ProjectFeatureTag} from './project-feature-tag'
import {ProjectLogo} from './project-logo'

type SortOption = 'name' | 'updated' | 'stars'

interface ProjectIndexProps {
  projects: Project[]
}

function getParamList<T extends string>(
  searchParams: URLSearchParams,
  key: string
) {
  return searchParams.get(key)?.split(',').filter(Boolean) as T[] | undefined
}

function getSortParam(searchParams: URLSearchParams): SortOption {
  const sort = searchParams.get('sort')

  return sort === 'updated' || sort === 'stars' ? sort : 'name'
}

export function ProjectIndex({projects}: ProjectIndexProps) {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [search, setSearch] = useState(searchParams.get('q') || '')
  const [selectedCategories, setSelectedCategories] = useState<
    ProjectCategory[]
  >(getParamList<ProjectCategory>(searchParams, 'category') || [])
  const [selectedFeatures, setSelectedFeatures] = useState<VerusFeature[]>(
    getParamList<VerusFeature>(searchParams, 'features') || []
  )
  const [sort, setSort] = useState<SortOption>(getSortParam(searchParams))
  const [filtersOpen, setFiltersOpen] = useState(
    selectedCategories.length > 0 || selectedFeatures.length > 0
  )
  const categoryOptions = useMemo(
    () =>
      PROJECT_CATEGORIES.filter((category) =>
        projects.some((project) => project.category === category)
      ).map((category) => ({
        id: category,
        label: formatCategory(category),
      })),
    [projects]
  )
  const featureOptions = useMemo(
    () =>
      VERUS_FEATURES.filter((feature) =>
        projects.some((project) => project.verusFeatures.includes(feature))
      ).map((feature) => ({
        id: feature,
        label: feature,
      })),
    [projects]
  )

  function updateUrl(nextState: {
    categories?: ProjectCategory[]
    features?: VerusFeature[]
    query?: string
    sortValue?: SortOption
  }) {
    const query = nextState.query ?? search
    const categories = nextState.categories ?? selectedCategories
    const features = nextState.features ?? selectedFeatures
    const sortValue = nextState.sortValue ?? sort
    const params = new URLSearchParams()

    if (query) params.set('q', query)
    if (categories.length > 0) params.set('category', categories.join(','))
    if (features.length > 0) params.set('features', features.join(','))
    if (sortValue !== 'name') params.set('sort', sortValue)

    const queryString = params.toString()
    router.replace(queryString ? `/projects?${queryString}` : '/projects', {
      scroll: false,
    })
  }

  function handleSearch(value: string) {
    setSearch(value)
    updateUrl({query: value})
  }

  function toggleCategory(category: ProjectCategory) {
    const categories = selectedCategories.includes(category)
      ? selectedCategories.filter((item) => item !== category)
      : [...selectedCategories, category]

    setSelectedCategories(categories)
    updateUrl({categories})
  }

  function toggleFeature(feature: VerusFeature) {
    const features = selectedFeatures.includes(feature)
      ? selectedFeatures.filter((item) => item !== feature)
      : [...selectedFeatures, feature]

    setSelectedFeatures(features)
    updateUrl({features})
  }

  function handleSort(sortValue: SortOption) {
    setSort(sortValue)
    updateUrl({sortValue})
  }

  function clearFilters() {
    setSearch('')
    setSelectedCategories([])
    setSelectedFeatures([])
    setSort('name')
    router.replace('/projects', {scroll: false})
  }

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
          )

        const matchesCategory =
          selectedCategories.length === 0 ||
          selectedCategories.includes(project.category)

        const matchesFeature =
          selectedFeatures.length === 0 ||
          selectedFeatures.every((feature) =>
            project.verusFeatures.includes(feature)
          )

        return matchesSearch && matchesCategory && matchesFeature
      })
      .sort((a, b) => {
        if (sort === 'stars') {
          return (b.github?.stars || 0) - (a.github?.stars || 0)
        }

        if (sort === 'updated') {
          return (b.github?.lastCommit || '').localeCompare(
            a.github?.lastCommit || ''
          )
        }

        return a.name.localeCompare(b.name)
      })
  }, [projects, search, selectedCategories, selectedFeatures, sort])

  const hasActiveFilters =
    search ||
    selectedCategories.length > 0 ||
    selectedFeatures.length > 0 ||
    sort !== 'name'
  const activeFilterCount = selectedCategories.length + selectedFeatures.length

  return (
    <section className="bg-gray-50 dark:bg-gray-950">
      <div className="border-b border-gray-200 px-8 py-8 dark:border-gray-800 md:px-14">
        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div className="relative w-full max-w-[460px]">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
              <input
                className="h-11 w-full rounded-lg border border-gray-300 bg-white pl-10 pr-10 text-[15px] text-gray-800 outline-none transition-colors placeholder:text-gray-400 focus:border-verus-blue dark:border-gray-800 dark:bg-gray-900 dark:text-white"
                onChange={(event) => handleSearch(event.target.value)}
                placeholder="Search projects"
                type="search"
                value={search}
              />
              {search && (
                <button
                  aria-label="Clear search"
                  className="absolute right-2 top-1/2 flex h-7 w-7 -translate-y-1/2 items-center justify-center rounded-md text-gray-400 transition-colors hover:bg-gray-100 hover:text-gray-700 dark:hover:bg-gray-800 dark:hover:text-gray-200"
                  onClick={() => handleSearch('')}
                  type="button"
                >
                  <X className="h-4 w-4" />
                </button>
              )}
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <button
                aria-expanded={filtersOpen}
                className="inline-flex h-10 items-center gap-2 rounded-lg border border-gray-300 bg-white px-4 text-[14px] font-medium text-gray-800 transition-colors hover:border-gray-400 hover:bg-white dark:border-gray-800 dark:bg-gray-900 dark:text-white dark:hover:border-gray-700"
                onClick={() => setFiltersOpen((isOpen) => !isOpen)}
                type="button"
              >
                <SlidersHorizontal className="h-4 w-4" />
                Filters
                {activeFilterCount > 0 && (
                  <span className="rounded-full bg-verus-blue px-1.5 py-0.5 text-[11px] leading-none text-white">
                    {activeFilterCount}
                  </span>
                )}
                <ChevronDown
                  className={cn(
                    'h-4 w-4 transition-transform',
                    filtersOpen && 'rotate-180'
                  )}
                />
              </button>

              <div className="inline-flex h-10 items-center gap-2 rounded-lg border border-gray-300 bg-white px-3 text-[14px] text-gray-600 dark:border-gray-800 dark:bg-gray-900 dark:text-gray-300">
                <ListFilter className="h-4 w-4" />
                <select
                  className="bg-transparent text-gray-800 outline-none dark:text-white"
                  onChange={(event) =>
                    handleSort(event.target.value as SortOption)
                  }
                  value={sort}
                >
                  <option value="name">Name A-Z</option>
                  <option value="updated">Recently updated</option>
                  <option value="stars">Most stars</option>
                </select>
              </div>

              {hasActiveFilters && (
                <button
                  className="h-10 rounded-lg border border-gray-300 bg-white px-4 text-[14px] font-medium text-gray-800 transition-colors hover:border-gray-400 hover:bg-white dark:border-gray-800 dark:bg-gray-900 dark:text-white dark:hover:border-gray-700"
                  onClick={clearFilters}
                  type="button"
                >
                  Clear filters
                </button>
              )}
            </div>
          </div>

          {filtersOpen && (
            <div className="rounded-lg border border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-gray-900">
              <div className="flex flex-col gap-4">
                <FilterGroup
                  label="Categories"
                  options={categoryOptions}
                  selected={selectedCategories}
                  onToggle={toggleCategory}
                />

                <FilterGroup
                  label="Features"
                  options={featureOptions}
                  selected={selectedFeatures}
                  onToggle={toggleFeature}
                />
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="border-b border-gray-200 px-8 py-4 text-[14px] text-gray-600 dark:border-gray-800 dark:text-gray-300 md:px-14">
        Showing {filteredProjects.length} of {projects.length} projects
      </div>

      {filteredProjects.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2">
          {filteredProjects.map((project, index) => (
            <ProjectCell
              index={index}
              key={project.slug}
              project={project}
              total={filteredProjects.length}
            />
          ))}
        </div>
      ) : (
        <div className="px-8 py-16 text-center md:px-14">
          <Grid2X2 className="mx-auto mb-4 h-8 w-8 text-gray-400" />
          <h2 className="text-[22px] font-medium tracking-tight text-gray-800 dark:text-white">
            No projects found
          </h2>
          <p className="mx-auto mt-3 max-w-[520px] text-[15px] leading-relaxed tracking-normal text-gray-600 dark:text-gray-300">
            Try clearing filters or searching for a broader project type.
          </p>
        </div>
      )}
    </section>
  )
}

function FilterGroup<T extends string>({
  label,
  onToggle,
  options,
  selected,
}: {
  label: string
  onToggle: (id: T) => void
  options: {id: T; label: string}[]
  selected: T[]
}) {
  return (
    <div className="flex flex-col gap-2 md:flex-row md:items-start">
      <div className="w-24 shrink-0 pt-1 text-[13px] font-medium text-gray-500 dark:text-gray-400">
        {label}
      </div>
      <div className="flex flex-wrap gap-2">
        {options.map((option) => {
          const isSelected = selected.includes(option.id)

          return (
            <button
              className={cn(
                'rounded-lg border px-3 py-1.5 text-[13px] font-medium transition-colors',
                isSelected
                  ? 'border-verus-blue bg-verus-blue text-white'
                  : 'border-gray-300 bg-white text-gray-700 hover:border-gray-400 dark:border-gray-800 dark:bg-gray-900 dark:text-gray-300 dark:hover:border-gray-700'
              )}
              key={option.id}
              onClick={() => onToggle(option.id)}
              type="button"
            >
              {option.label}
            </button>
          )
        })}
      </div>
    </div>
  )
}

function ProjectCell({
  index,
  project,
  total,
}: {
  index: number
  project: Project
  total: number
}) {
  const isRightColumn = index % 2 === 1
  const isBottomRow = index >= total - (total % 2 === 0 ? 2 : 1)

  return (
    <Link
      className={cn(
        'group flex min-w-0 flex-col border-gray-200 px-8 py-8 transition-colors hover:bg-white dark:border-gray-800 dark:hover:bg-gray-900/50 md:px-10 md:py-10',
        index > 0 && 'max-md:border-t',
        isRightColumn && 'md:border-l',
        !isBottomRow && 'md:border-b'
      )}
      href={`/projects/${project.slug}`}
    >
      <div className="flex items-start gap-4">
        <ProjectLogo className="h-12 w-12 shrink-0" project={project} />

        <div className="min-w-0 flex-1">
          <div className="flex min-w-0 flex-wrap items-center gap-2">
            <h2 className="min-w-0 break-words text-[22px] font-medium leading-[1.2] tracking-tight text-gray-800 transition-colors group-hover:text-verus-blue dark:text-white md:text-[26px]">
              {project.name}
            </h2>
            <span className="rounded-md border border-gray-200 bg-white px-2 py-1 text-[12px] font-medium text-gray-600 dark:border-gray-800 dark:bg-gray-900 dark:text-gray-300">
              {formatCategory(project.category)}
            </span>
          </div>

          <p className="mt-3 text-[15px] leading-relaxed tracking-normal text-gray-600 dark:text-gray-300 md:text-[16px]">
            {project.description}
          </p>
        </div>
      </div>

      <div className="mt-5 flex flex-wrap gap-2">
        {project.verusFeatures.map((feature) => (
          <ProjectFeatureTag feature={feature} key={feature} />
        ))}
      </div>

      <div className="mt-8 flex flex-wrap items-center gap-x-4 gap-y-2 text-[13px] text-gray-500 dark:text-gray-400">
        {project.github && (
          <>
            <span>{project.github.stars} stars</span>
            <span>{project.github.forks} forks</span>
            <span>Updated {timeAgo(project.github.lastCommit)}</span>
          </>
        )}
        {project.websiteUrl && (
          <span className="text-verus-blue">
            Website available
          </span>
        )}
      </div>
    </Link>
  )
}
