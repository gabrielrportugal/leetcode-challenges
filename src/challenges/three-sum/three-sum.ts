/**
 * Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.
 * Notice that the solution set must not contain duplicate triplets.
 * @param nums array with numbers
 * @returns number[][]
 */
export function threeSum(nums: number[]): number[][] {
  nums.sort((a, b) => a - b)

  const result = new Set<string>()

  for (let i = 0; i < nums.length; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue

    let left = i + 1
    let right = nums.length - 1

    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right]

      if (sum === 0) {
        // Stringfy Array With Triples That Adds To 0
        result.add(JSON.stringify([nums[i], nums[left], nums[right]]))
        left++

        // Verify duplicate triplets
        while (nums[left] === nums[left - 1] && left < right) {
          left++
        }
      } else if (sum > 0) right--
      else if (sum < 0) left++
    }
  }

  return Array.from(result, (res) => JSON.parse(res))
}
