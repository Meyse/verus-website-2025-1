import type {ReactNode} from 'react'

import {Suspense} from 'react'

import {developerResources} from '@/data/resource-list'

import {cn} from '@/lib/utils'

import {CliSection} from './cli_section'
import {ResourceCard} from './resource_card'
import {TestnetSection} from './testnet_section'

function ResourceCell({children, index}: {children: ReactNode; index: number}) {
  const isDesktopRightColumn = index % 2 === 1

  return (
    <div
      className={cn(
        'min-w-0 border-gray-200 dark:border-gray-800',
        index > 0 && 'max-md:border-t',
        isDesktopRightColumn && 'md:border-l',
        index > 1 && 'md:border-t'
      )}
    >
      {children}
    </div>
  )
}

function ResourceCellSkeleton() {
  return (
    <div className="flex h-full min-h-[300px] min-w-0 animate-pulse flex-col p-8 md:p-10">
      <div className="mb-6 h-14 w-14 rounded-lg bg-gray-200 dark:bg-gray-800" />
      <div className="mb-4 h-8 w-48 rounded bg-gray-200 dark:bg-gray-800" />
      <div className="mb-3 h-4 w-full rounded bg-gray-200 dark:bg-gray-800" />
      <div className="h-4 w-4/5 rounded bg-gray-200 dark:bg-gray-800" />
      <div className="mt-auto h-[40px] w-44 rounded-lg bg-gray-200 dark:bg-gray-800 md:h-[50px]" />
    </div>
  )
}

export function ResourcesGrid() {
  const setupCells = [
    <TestnetSection key="testnet" />,
    <Suspense key="cli" fallback={<ResourceCellSkeleton />}>
      <CliSection />
    </Suspense>,
  ]

  return (
    <section className="bg-gray-50 dark:bg-gray-950">
      <div className="min-w-0 border-b border-gray-200 px-8 py-10 dark:border-gray-800 md:px-14 md:py-12">
        <h2 className="mb-4 text-[24px] font-medium tracking-tight text-gray-800 dark:text-white md:text-[30px]">
          Choose a starting point
        </h2>
        <p className="max-w-[760px] break-words text-[15px] leading-relaxed tracking-normal text-gray-600 dark:text-gray-300 md:text-[17px]">
          Start with the setup path that matches what you are building, then
          move into focused guides for identities, data, currencies, DeFi, and
          app authentication.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2">
        {setupCells.map((cell, index) => (
          <ResourceCell key={index} index={index}>
            {cell}
          </ResourceCell>
        ))}
      </div>

      <div className="border-t border-gray-200 dark:border-gray-800">
        <div className="min-w-0 border-b border-gray-200 px-8 py-8 dark:border-gray-800 md:px-14 md:py-10">
          <h3 className="mb-3 text-[22px] font-medium tracking-tight text-gray-800 dark:text-white md:text-[28px]">
            Developer guides
          </h3>
          <p className="max-w-[760px] break-words text-[15px] leading-relaxed tracking-normal text-gray-600 dark:text-gray-300 md:text-[17px]">
            Reference the specific guide you need without leaving the setup
            flow.
          </p>
        </div>

        <ul className="divide-y divide-gray-200 dark:divide-gray-800">
          {developerResources.map((resource) => (
            <ResourceCard
              key={resource.title}
              title={resource.title}
              description={resource.description}
              link={resource.link}
            />
          ))}
        </ul>
      </div>
    </section>
  )
}
