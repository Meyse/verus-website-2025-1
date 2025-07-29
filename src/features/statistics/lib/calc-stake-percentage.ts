// Calculate staking percentage
export function calculateStakingPercentage(
  stakingAmount: string | undefined,
  circulatingSupply: number | null
): string {
  if (stakingAmount === 'N/A' || !circulatingSupply) return 'N/A'

  // Extract the numeric part from the staking amount string (e.g., "15,423,890 VRSC" -> 15423890)
  const stakingMatch = stakingAmount?.match(/^([\d,]+)(\.\d+)? VRSC$/)
  if (!stakingMatch) return 'N/A'

  const stakingVrscAmount = parseFloat(stakingMatch[1].replace(/,/g, ''))

  // Calculate percentage
  const percentage = (stakingVrscAmount / circulatingSupply) * 100

  return percentage.toFixed(2) + '%'
}