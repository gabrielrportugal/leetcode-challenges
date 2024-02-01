/**
 * Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.
 * You must write an algorithm that runs in O(n) time.
 * @param nums: number[]
 */

export function longestConsecutive(nums: number[]): number {
  if (!nums.length) return 0

  nums.sort((a, b) => a - b)

  let bestSequence = 1
  let currentSequence = 1

  let previousNumber = 0.1

  for (let i = 0; i < nums.length; i++) {
    const currentNum = nums[i]

    if (currentNum === previousNumber) continue

    if (currentNum === previousNumber + 1) {
      currentSequence += 1
    } else {
      currentSequence = 1
    }

    if (currentSequence > bestSequence) bestSequence = currentSequence

    previousNumber = currentNum
  }

  return bestSequence
}
