export const HALVING_BLOCK_SECONDS = 62
export const HALVING_INTERVAL_BLOCKS = 1_051_920

export const halvingEvents = [
  {
    height: 4_433_760,
    rewardAfter: 1.5,
    rewardBefore: 3,
  },
  {
    height: 5_485_680,
    rewardAfter: 0.75,
    rewardBefore: 1.5,
  },
  {
    height: 6_537_600,
    rewardAfter: 0.375,
    rewardBefore: 0.75,
  },
] as const

export type HalvingScheduleEvent = (typeof halvingEvents)[number] & {
  blocksRemaining: number
  estimatedDate: Date
  isPassed: boolean
  secondsRemaining: number
}

export function getHalvingSchedule(
  currentBlockHeight: number,
  now = new Date()
): HalvingScheduleEvent[] {
  return halvingEvents.map((event) => {
    const blocksRemaining = Math.max(event.height - currentBlockHeight, 0)
    const secondsRemaining = blocksRemaining * HALVING_BLOCK_SECONDS

    return {
      ...event,
      blocksRemaining,
      estimatedDate: new Date(now.getTime() + secondsRemaining * 1000),
      isPassed: event.height <= currentBlockHeight,
      secondsRemaining,
    }
  })
}

export function getNextHalvingEvent(schedule: HalvingScheduleEvent[]) {
  return schedule.find((event) => !event.isPassed) ?? null
}
