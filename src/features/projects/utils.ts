import type {ProjectCategory} from './types'

export function formatCategory(category: ProjectCategory) {
  const labels: Record<ProjectCategory, string> = {
    app: 'App',
    dashboard: 'Dashboard',
    other: 'Other',
    tool: 'Tool',
    wallet: 'Wallet',
  }

  return labels[category]
}

export function getInitials(name: string) {
  return name
    .split(/\s+/)
    .map((part) => part[0])
    .join('')
    .slice(0, 2)
    .toUpperCase()
}

export function stringToColor(value: string) {
  const colors = [
    '#3165D4',
    '#0F766E',
    '#7C3AED',
    '#B45309',
    '#047857',
    '#BE123C',
  ]

  const hash = value
    .split('')
    .reduce((accumulator, character) => accumulator + character.charCodeAt(0), 0)

  return colors[hash % colors.length]
}

export function timeAgo(value: string) {
  if (!value) return 'Unknown'

  const date = new Date(value)
  const now = new Date()
  const seconds = Math.floor((now.getTime() - date.getTime()) / 1000)

  if (Number.isNaN(seconds)) return 'Unknown'
  if (seconds < 60) return 'Just now'

  const intervals = [
    {label: 'year', seconds: 31536000},
    {label: 'month', seconds: 2592000},
    {label: 'day', seconds: 86400},
    {label: 'hour', seconds: 3600},
    {label: 'minute', seconds: 60},
  ]

  const interval = intervals.find((item) => seconds >= item.seconds)
  if (!interval) return 'Just now'

  const count = Math.floor(seconds / interval.seconds)
  return `${count} ${interval.label}${count === 1 ? '' : 's'} ago`
}

