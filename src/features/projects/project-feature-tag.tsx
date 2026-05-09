import type {VerusFeature} from './types'

import {cn} from '@/lib/utils'

const featureStyles: Partial<Record<VerusFeature, string>> = {
  'Cross-chain':
    'border-blue-200 bg-blue-50 text-blue-700 dark:border-blue-900 dark:bg-blue-950/40 dark:text-blue-300',
  'Zero-knowledge privacy':
    'border-purple-200 bg-purple-50 text-purple-700 dark:border-purple-900 dark:bg-purple-950/40 dark:text-purple-300',
  Currencies:
    'border-emerald-200 bg-emerald-50 text-emerald-700 dark:border-emerald-900 dark:bg-emerald-950/40 dark:text-emerald-300',
  Data: 'border-slate-200 bg-slate-50 text-slate-700 dark:border-slate-800 dark:bg-slate-900/60 dark:text-slate-300',
  DeFi: 'border-cyan-200 bg-cyan-50 text-cyan-700 dark:border-cyan-900 dark:bg-cyan-950/40 dark:text-cyan-300',
  VerusID:
    'border-indigo-200 bg-indigo-50 text-indigo-700 dark:border-indigo-900 dark:bg-indigo-950/40 dark:text-indigo-300',
}

export function ProjectFeatureTag({feature}: {feature: VerusFeature}) {
  return (
    <span
      className={cn(
        'inline-flex shrink-0 rounded-md border px-2 py-1 text-[12px] font-medium leading-none',
        featureStyles[feature] ||
          'border-gray-200 bg-gray-50 text-gray-700 dark:border-gray-800 dark:bg-gray-900 dark:text-gray-300'
      )}
    >
      {feature}
    </span>
  )
}

