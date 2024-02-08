/**
 * Given an array of integers nums which is sorted in ascending order, and an integer target,
 * write a function to search target in nums. If target exists, then return its index.
 * Otherwise, return -1.
 *
 * You must write an algorithm with O(log n) runtime complexity.
 *
 * @param nums string[]
 * @param target: number
 * @return number
 */

export function search(nums: number[], target: number): number {
  let left = 0
  let right = nums.length - 1

  while (left <= right) {
    const middle = Math.floor((left + right) / 2)

    const num = nums[middle]

    if (num === target) {
      return middle
    }

    num > target ? (right = middle - 1) : (left = middle + 1)
  }

  return -1
}
