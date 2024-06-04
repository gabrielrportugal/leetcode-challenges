/**
 * Given n non-negative integers representing an elevation map where the width of each bar is 1,
 * compute how much water it can trap after raining.
 * @param height: number[]
 * @return number: waters
 */

import { search } from '../binary-search/binary-search'

export function trapWater(height: number[]): number {
  const n = height.length
  let rightHigher = 0

  const water: number[] = new Array(n).fill(0)

  for (let i = 0; i < n; i++) {
    if (height[i] > rightHigher) rightHigher = height[i]

    if (height[i] < rightHigher) water[i] += rightHigher - height[i]
  }

  let leftHigher = 0

  for (let i = n - 1; i >= 0; i--) {
    if (height[i] > leftHigher) leftHigher = height[i]

    const diff = leftHigher - height[i]

    if (diff < water[i]) water[i] = diff
  }

  return water.reduce((prev, curr) => prev + curr, 0)
}
