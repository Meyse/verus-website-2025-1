'use client'

import type {ReactNode} from 'react'

import {
  HALVING_BLOCK_SECONDS,
  HALVING_INTERVAL_BLOCKS,
  getHalvingSchedule,
  getNextHalvingEvent,
} from '@/features/statistics/lib/halving-schedule'
import {getMiningInfo} from '@/features/statistics/server/get-mining-info'
import {useQuery} from '@tanstack/react-query'
import {useEffect, useMemo, useState} from 'react'

function formatNumber(value: number) {
  return new Intl.NumberFormat('en-US').format(value)
}

function formatDate(value: Date) {
  return new Intl.DateTimeFormat('en-US', {
    day: 'numeric',
    month: 'short',
    timeZone: 'UTC',
    year: 'numeric',
  }).format(value)
}

function formatDuration(seconds: number) {
  if (seconds <= 0) {
    return 'Passed'
  }

  const days = Math.floor(seconds / 86_400)
  const hours = Math.floor((seconds % 86_400) / 3_600)
  const minutes = Math.floor((seconds % 3_600) / 60)

  if (days > 0) {
    return `${formatNumber(days)}d ${hours}h`
  }

  if (hours > 0) {
    return `${hours}h ${minutes}m`
  }

  return `${minutes}m`
}

function formatPercent(value: number) {
  return new Intl.NumberFormat('en-US', {
    maximumFractionDigits: 1,
    style: 'percent',
  }).format(value)
}

function readBlockHeight(value: string) {
  const parsed = Number(value.replace(/,/g, ''))

  return Number.isFinite(parsed) ? parsed : null
}

type TimelineLineTone = 'active' | 'default' | 'none'
type TimelineTone = 'current' | 'default' | 'future'

function getTimelineMarkerClass(tone: TimelineTone) {
  return [
    'relative z-10 flex h-4 w-4 items-center justify-center rounded-full border',
    tone === 'current'
      ? 'border-verus-blue bg-verus-blue'
      : 'border-gray-300 bg-gray-50 dark:border-gray-700 dark:bg-gray-950',
    tone === 'future' ? 'opacity-80' : '',
  ]
    .filter(Boolean)
    .join(' ')
}

function getTimelineLineClass(tone: TimelineLineTone) {
  if (tone === 'active') {
    return 'bg-verus-blue'
  }

  if (tone === 'default') {
    return 'bg-gray-200 dark:bg-gray-800'
  }

  return ''
}

function Cell({
  children,
  index,
}: {
  children: ReactNode
  index: number
}) {
  const isDesktopFirstRow = index < 3
  const isDesktopFirstColumn = index % 3 === 0

  return (
    <div
      className={[
        'min-w-0 border-gray-200 px-8 py-8 dark:border-gray-800 md:px-10 md:py-10',
        index > 0 ? 'max-md:border-t' : '',
        !isDesktopFirstColumn ? 'md:border-l' : '',
        !isDesktopFirstRow ? 'md:border-t' : '',
      ]
        .filter(Boolean)
        .join(' ')}
    >
      {children}
    </div>
  )
}

function Stat({
  description,
  label,
  value,
}: {
  description?: string
  label: string
  value: string
}) {
  return (
    <div className="flex h-full min-h-[150px] min-w-0 flex-col">
      <div className="text-[14px] font-medium text-gray-500 dark:text-gray-400 md:text-[15px]">
        {label}
      </div>
      <div className="mt-5 min-w-0">
        <div className="break-words text-[34px] font-medium leading-tight tracking-tight text-gray-800 dark:text-white md:text-[42px]">
          {value}
        </div>
        {description && (
          <p className="mt-3 max-w-[440px] text-[15px] leading-relaxed tracking-normal text-gray-600 dark:text-gray-300 md:text-[17px]">
            {description}
          </p>
        )}
      </div>
    </div>
  )
}

function TimelinePoint({
  description,
  label,
  tone = 'default',
  value,
}: {
  description?: string
  label: string
  tone?: TimelineTone
  value: string
}) {
  return (
    <div className="relative min-w-0">
      <div className={`${getTimelineMarkerClass(tone)} mb-5`}>
        {tone === 'current' && (
          <span className="h-1.5 w-1.5 rounded-full bg-white" />
        )}
      </div>
      <div className="text-[13px] font-medium text-gray-500 dark:text-gray-400 md:text-[14px]">
        {label}
      </div>
      <div className="mt-2 break-words text-[24px] font-medium leading-tight tracking-tight text-gray-800 dark:text-white md:text-[30px]">
        {value}
      </div>
      {description && (
        <p className="mt-2 max-w-[280px] text-[14px] leading-relaxed tracking-normal text-gray-600 dark:text-gray-300 md:text-[15px]">
          {description}
        </p>
      )}
    </div>
  )
}

function MobileTimelinePoint({
  description,
  label,
  lineAfter = 'none',
  lineBefore = 'none',
  tone = 'default',
  value,
}: {
  description?: string
  label: string
  lineAfter?: TimelineLineTone
  lineBefore?: TimelineLineTone
  tone?: TimelineTone
  value: string
}) {
  return (
    <div className="grid min-w-0 grid-cols-[16px_minmax(0,1fr)] gap-x-5">
      <div className="relative flex justify-center">
        {lineBefore !== 'none' && (
          <span
            className={`${getTimelineLineClass(lineBefore)} absolute left-1/2 top-0 h-2 w-px -translate-x-1/2`}
          />
        )}
        <div className={getTimelineMarkerClass(tone)}>
          {tone === 'current' && (
            <span className="h-1.5 w-1.5 rounded-full bg-white" />
          )}
        </div>
        {lineAfter !== 'none' && (
          <span
            className={`${getTimelineLineClass(lineAfter)} absolute bottom-0 left-1/2 top-2 w-px -translate-x-1/2`}
          />
        )}
      </div>
      <div className={lineAfter !== 'none' ? 'min-w-0 pb-9' : 'min-w-0'}>
        <div className="text-[13px] font-medium text-gray-500 dark:text-gray-400">
          {label}
        </div>
        <div className="mt-2 break-words text-[24px] font-medium leading-tight tracking-tight text-gray-800 dark:text-white">
          {value}
        </div>
        {description && (
          <p className="mt-2 max-w-[280px] text-[14px] leading-relaxed tracking-normal text-gray-600 dark:text-gray-300">
            {description}
          </p>
        )}
      </div>
    </div>
  )
}

function HalvingTimeline({
  currentBlockHeight,
  cycleProgress,
  followingHalving,
  nextHalving,
}: {
  currentBlockHeight: number
  cycleProgress: number
  followingHalving:
    | {
        estimatedDate: Date
        height: number
        rewardAfter: number
        rewardBefore: number
      }
    | undefined
  nextHalving: {
    height: number
    rewardAfter: number
    rewardBefore: number
  }
}) {
  return (
    <div className="min-w-0 overflow-hidden border-b border-gray-200 px-6 py-8 dark:border-gray-800 md:px-10 md:py-10">
      <div className="relative hidden md:block">
        <div className="absolute left-0 right-0 top-2 h-px bg-gray-200 dark:bg-gray-800" />
        <div className="absolute left-0 top-2 h-px w-1/2 bg-verus-blue" />
        <div className="grid grid-cols-3 gap-8">
          <TimelinePoint
            label="Current height"
            value={formatNumber(currentBlockHeight)}
            tone="current"
          />
          <TimelinePoint
            label="Next halving"
            value={formatNumber(nextHalving.height)}
            description={`${nextHalving.rewardBefore} -> ${nextHalving.rewardAfter} VRSC reward.`}
            tone="current"
          />
          <TimelinePoint
            label="Following halving"
            value={
              followingHalving ? formatNumber(followingHalving.height) : 'N/A'
            }
            description={
              followingHalving
                ? `${followingHalving.rewardBefore} -> ${followingHalving.rewardAfter} VRSC reward.`
                : 'The listed schedule has reached the final known halving.'
            }
            tone="future"
          />
        </div>
      </div>

      <div className="grid md:hidden">
        <MobileTimelinePoint
          label="Current height"
          value={formatNumber(currentBlockHeight)}
          tone="current"
          lineAfter="active"
        />
        <MobileTimelinePoint
          label="Next halving"
          value={formatNumber(nextHalving.height)}
          description={`${nextHalving.rewardBefore} -> ${nextHalving.rewardAfter} VRSC reward.`}
          tone="current"
          lineBefore="active"
          lineAfter="default"
        />
        <MobileTimelinePoint
          label="Following halving"
          value={followingHalving ? formatNumber(followingHalving.height) : 'N/A'}
          description={
            followingHalving
              ? `${followingHalving.rewardBefore} -> ${followingHalving.rewardAfter} VRSC reward.`
              : 'The listed schedule has reached the final known halving.'
          }
          tone="future"
          lineBefore="default"
        />
      </div>

      <div className="mt-8 min-w-0 max-w-full max-md:w-[calc(100vw-3rem)]">
        <div className="flex min-w-0 items-center justify-between gap-4 text-[13px] font-medium text-gray-500 dark:text-gray-400 md:text-[14px]">
          <span>Current cycle progress</span>
          <span>{formatPercent(cycleProgress)}</span>
        </div>
        <div className="mt-3 h-2 w-full overflow-hidden rounded-full bg-gray-200 dark:bg-gray-800">
          <div
            className="h-full rounded-full bg-verus-blue transition-[width] duration-500"
            style={{width: `${cycleProgress * 100}%`}}
          />
        </div>
        <div className="mt-3 text-[13px] text-gray-500 dark:text-gray-400 md:flex md:min-w-0 md:items-center md:justify-between md:gap-4">
          <span className="md:hidden">
            {nextHalving.rewardBefore}
            {' -> '}
            {nextHalving.rewardAfter}
            {' VRSC reward'}
          </span>
          <span className="hidden min-w-0 md:inline">
            {nextHalving.rewardBefore} VRSC
          </span>
          <span className="hidden min-w-0 text-right md:inline">
            {nextHalving.rewardAfter} VRSC
          </span>
        </div>
      </div>
    </div>
  )
}

export function HalvingScheduleStats({
  initialBlockHeight,
  initialBlockHeightValue,
  initialTimestamp,
}: {
  initialBlockHeight: string
  initialBlockHeightValue: number | null
  initialTimestamp: number
}) {
  const [now, setNow] = useState(initialTimestamp)
  const {data} = useQuery({
    initialData: {
      blockHeight: initialBlockHeight,
      blockHeightValue: initialBlockHeightValue,
      hashRate: 'N/A',
      stakingAmount: 'N/A',
    },
    queryFn: getMiningInfo,
    queryKey: ['mining-info'],
    refetchInterval: 60 * 1000,
  })

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setNow(Date.now())
    }, 60 * 1000)

    return () => window.clearInterval(intervalId)
  }, [])

  const currentBlockHeight =
    data.blockHeightValue ??
    readBlockHeight(data.blockHeight) ??
    initialBlockHeightValue ??
    readBlockHeight(initialBlockHeight) ??
    0

  const schedule = useMemo(
    () => getHalvingSchedule(currentBlockHeight, new Date(now)),
    [currentBlockHeight, now]
  )
  const nextHalving = getNextHalvingEvent(schedule)
  const followingHalving = schedule.find(
    (event) => nextHalving && event.height > nextHalving.height
  )
  const nextHalvingIndex = nextHalving
    ? schedule.findIndex((event) => event.height === nextHalving.height)
    : -1
  const cycleStartHeight =
    nextHalvingIndex > 0
      ? schedule[nextHalvingIndex - 1].height
      : (nextHalving?.height ?? 0) - HALVING_INTERVAL_BLOCKS
  const cycleProgress =
    nextHalving && nextHalving.height > cycleStartHeight
      ? Math.min(
          Math.max(
            (currentBlockHeight - cycleStartHeight) /
              (nextHalving.height - cycleStartHeight),
            0
          ),
          1
        )
      : 0

  if (!nextHalving) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-3">
        <Cell index={0}>
          <Stat
            label="Next halving"
            value="N/A"
            description="The listed halving schedule has passed."
          />
        </Cell>
        <Cell index={1}>
          <Stat
            label="Block interval"
            value={`${HALVING_BLOCK_SECONDS}s`}
            description="Used to estimate future halving dates."
          />
        </Cell>
        <Cell index={2}>
          <Stat
            label="Listed through"
            value={formatNumber(schedule.at(-1)?.height ?? 0)}
            description="The known schedule currently includes the next listed halving."
          />
        </Cell>
      </div>
    )
  }

  return (
    <>
      <HalvingTimeline
        currentBlockHeight={currentBlockHeight}
        cycleProgress={cycleProgress}
        followingHalving={followingHalving}
        nextHalving={nextHalving}
      />
      <div className="grid grid-cols-1 md:grid-cols-3">
        <Cell index={0}>
          <Stat
            label="Blocks remaining"
            value={formatNumber(nextHalving.blocksRemaining)}
          />
        </Cell>
        <Cell index={1}>
          <Stat
            label="Time remaining"
            value={formatDuration(nextHalving.secondsRemaining)}
          />
        </Cell>
        <Cell index={2}>
          <Stat
            label="Estimated date"
            value={formatDate(nextHalving.estimatedDate)}
          />
        </Cell>
      </div>
    </>
  )
}
