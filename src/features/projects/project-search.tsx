'use client'

import type {Project} from './types'
import type {KeyboardEvent as ReactKeyboardEvent} from 'react'

import {useCallback, useEffect, useMemo, useRef, useState} from 'react'
import {useRouter} from 'next/navigation'

import {Search, X} from 'lucide-react'

import {ProjectLogo} from './project-logo'
import {formatCategory} from './utils'

interface ProjectSearchProps {
  projects: Project[]
}

export function ProjectSearch({projects}: ProjectSearchProps) {
  const router = useRouter()
  const [query, setQuery] = useState('')
  const [isOpen, setIsOpen] = useState(false)
  const [selectedIndex, setSelectedIndex] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  const results = useMemo(() => {
    const normalizedQuery = query.toLowerCase().trim()
    if (!normalizedQuery) return []

    return projects
      .filter(
        (project) =>
          project.name.toLowerCase().includes(normalizedQuery) ||
          project.description.toLowerCase().includes(normalizedQuery) ||
          project.category.toLowerCase().includes(normalizedQuery) ||
          project.verusFeatures.some((feature) =>
            feature.toLowerCase().includes(normalizedQuery)
          ) ||
          project.github?.languages.some((language) =>
            language.toLowerCase().includes(normalizedQuery)
          )
      )
      .slice(0, 6)
  }, [projects, query])

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      const activeElement = document.activeElement
      const isTyping =
        activeElement?.tagName === 'INPUT' ||
        activeElement?.tagName === 'TEXTAREA'

      if (event.key === '/' && !isTyping) {
        event.preventDefault()
        inputRef.current?.focus()
      }
    }

    document.addEventListener('keydown', handleKeyDown)

    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [])

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)

    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const navigateToProject = useCallback(
    (slug: string) => {
      setIsOpen(false)
      setQuery('')
      router.push(`/projects/${slug}`)
    },
    [router]
  )

  function handleQueryChange(value: string) {
    setQuery(value)
    setSelectedIndex(0)
    setIsOpen(Boolean(value.trim()))
  }

  function handleKeyDown(event: ReactKeyboardEvent<HTMLInputElement>) {
    if (!isOpen || results.length === 0) {
      if (event.key === 'Escape') {
        setIsOpen(false)
        inputRef.current?.blur()
      }

      return
    }

    if (event.key === 'ArrowDown') {
      event.preventDefault()
      setSelectedIndex((index) => (index + 1) % results.length)
    }

    if (event.key === 'ArrowUp') {
      event.preventDefault()
      setSelectedIndex((index) => (index - 1 + results.length) % results.length)
    }

    if (event.key === 'Enter') {
      event.preventDefault()
      navigateToProject(results[selectedIndex].slug)
    }

    if (event.key === 'Escape') {
      event.preventDefault()
      setIsOpen(false)
      inputRef.current?.blur()
    }
  }

  return (
    <div
      className="relative z-40 mx-auto w-full max-w-2xl"
      ref={containerRef}
    >
      <div className="relative">
        <div className="pointer-events-none absolute inset-y-0 left-4 flex items-center sm:left-5">
          <Search className="h-5 w-5 text-gray-500 dark:text-gray-400 sm:h-6 sm:w-6" />
        </div>
        <input
          className="h-14 w-full rounded-2xl border-2 border-gray-300 bg-white pl-12 pr-12 text-base text-gray-800 shadow-sm outline-none transition-all placeholder:text-gray-400 focus:border-verus-blue focus:ring-2 focus:ring-verus-blue/20 dark:border-gray-700 dark:bg-gray-900 dark:text-white dark:placeholder:text-gray-500 sm:h-16 sm:pl-14 sm:text-lg"
          onChange={(event) => handleQueryChange(event.target.value)}
          onFocus={() => query.trim() && setIsOpen(true)}
          onKeyDown={handleKeyDown}
          placeholder="Search projects..."
          ref={inputRef}
          type="text"
          value={query}
        />
        <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center">
          {!query && (
            <kbd className="hidden rounded-md border border-gray-200 bg-gray-50 px-2 py-1 text-xs font-medium text-gray-500 dark:border-gray-800 dark:bg-gray-950 dark:text-gray-400 sm:inline-flex">
              /
            </kbd>
          )}
          {query && (
            <button
              aria-label="Clear search"
              className="pointer-events-auto rounded-md p-1 text-gray-500 transition-colors hover:text-gray-800 dark:text-gray-400 dark:hover:text-white"
              onClick={() => {
                handleQueryChange('')
                setIsOpen(false)
              }}
              type="button"
            >
              <X className="h-5 w-5" />
            </button>
          )}
        </div>
      </div>

      {isOpen && query.trim() && (
        <>
          <div
            className="fixed inset-0 -z-10 bg-black/50 sm:bg-black/20"
            onClick={() => setIsOpen(false)}
          />
          <div className="absolute left-0 right-0 top-full mt-2">
            <div className="flex max-h-[50vh] flex-col overflow-hidden rounded-xl border border-gray-300 bg-white shadow-2xl dark:border-gray-700 dark:bg-gray-900 sm:max-h-[400px]">
              <div className="flex items-center justify-between border-b border-gray-200 px-4 py-2 dark:border-gray-800 sm:hidden">
                <span className="text-sm font-medium text-gray-600 dark:text-gray-300">
                  {results.length > 0
                    ? `${results.length} result${results.length === 1 ? '' : 's'}`
                    : 'No results'}
                </span>
                <button
                  aria-label="Close search results"
                  className="rounded-md p-1 text-gray-500 transition-colors hover:text-gray-800 dark:text-gray-400 dark:hover:text-white"
                  onClick={() => setIsOpen(false)}
                  type="button"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto">
                {results.length === 0 ? (
                  <div className="px-4 py-8 text-center text-sm text-gray-500 dark:text-gray-400">
                    No projects found for &quot;{query}&quot;
                  </div>
                ) : (
                  <ul className="py-2">
                    {results.map((project, index) => (
                      <li key={project.slug}>
                        <button
                          className={`flex w-full items-start gap-3 px-4 py-3 text-left transition-colors ${
                            index === selectedIndex
                              ? 'bg-gray-50 dark:bg-gray-800'
                              : 'hover:bg-gray-50 dark:hover:bg-gray-800'
                          }`}
                          onClick={() => navigateToProject(project.slug)}
                          onMouseEnter={() => setSelectedIndex(index)}
                          type="button"
                        >
                          <ProjectLogo
                            className="h-10 w-10 shrink-0"
                            project={project}
                          />
                          <div className="min-w-0 flex-1">
                            <div className="flex items-center gap-2">
                              <span className="truncate font-medium text-gray-800 dark:text-white">
                                {project.name}
                              </span>
                              <span className="shrink-0 text-xs text-gray-500 dark:text-gray-400">
                                {formatCategory(project.category)}
                              </span>
                            </div>
                            <p className="mt-0.5 line-clamp-1 text-sm text-gray-600 dark:text-gray-300">
                              {project.description}
                            </p>
                          </div>
                        </button>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  )
}
