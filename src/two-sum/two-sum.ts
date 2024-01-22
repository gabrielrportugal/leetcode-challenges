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
