/**
 * Given a 1-indexed array of integers numbers that is already sorted in non-decreasing order, find two numbers such that they add up to a specific target number. Let these two numbers be numbers[index1] and numbers[index2] where 1 <= index1 < index2 <= numbers.length.
 * @param nums array with numbers indexed starting with 1
 * @param target number with values added
 * @returns number[]
 */
export function twoSumIndexedArray(nums: number[], target: number): number[] {
  let result: number[] = []

  nums.forEach((num, index) => {
    nums.forEach((num2, index2) => {
      if (index !== index2) {
        const x = num + num2

        if (x === target) result = [index2 + 1, index + 1]
      }
    })
  })

  return result
}

export function twoSumIndexedArrayV2(nums: number[], target: number): number[] {
  let low = 0
  let high = nums.length - 1

  while (low <= high) {
    if (nums[low] + nums[high] > target) high--
    else if (nums[low] + nums[high] < target) low++
    else return [low + 1, high + 1]
  }

  return []
}
