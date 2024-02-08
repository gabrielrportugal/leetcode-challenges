/**
 * Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
 * @param nums array with numbers
 * @param target number with values added
 * @returns number[]
 */
export function twoSum(nums: number[], target: number): number[] {
  let result: number[] = []

  nums.forEach((num, index) => {
    nums.forEach((num2, index2) => {
      if (index !== index2) {
        const x = num + num2

        if (x === target) result = [index2, index]
      }
    })
  })

  return result
}

// Example with new Map()
// https://howtodoinjava.com/typescript/maps/
export function twoSumV2(nums: number[], target: number): number[] {
  const hashMap = new Map<number, number>()

  for (let i = 0; i < nums.length; i++) {
    const value = nums[i]

    if (hashMap.has(value)) {
      const index = hashMap.get(value) || 0
      return [index, i]
    }

    const targetDifference = target - nums[i]
    hashMap.set(targetDifference, i)
  }

  return []
}
