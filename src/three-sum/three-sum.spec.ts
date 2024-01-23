import { describe, test, expect } from 'vitest'
import { threeSum } from './three-sum'

describe('[threeSum]', () => {
  test('case 1', () => {
    const nums = [-1, 0, 1, 2, -1, -4]
    const expectedResult = [
      [-1, -1, 2],
      [-1, 0, 1],
    ]

    // nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
    // nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
    // nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
    // The distinct triplets are [-1,0,1] and [-1,-1,2].
    // Notice that the order of the output and the order of the triplets does not matter.

    const result = threeSum(nums)

    expect(result).toEqual(expectedResult)
  })
  test('case 2', () => {
    const nums = [0, 1, 1]

    const result = threeSum(nums)

    expect(result).toHaveLength(0)
  })
  test('case 3', () => {
    const nums = [0, 0, 0]
    const expectedResult = [[0, 0, 0]]

    const result = threeSum(nums)

    expect(result).toEqual(expectedResult)
  })

  test('case 4', () => {
    const nums = [-1, 0, 1, 2, 0, -2]
    const expectedResult = [
      [-2, 0, 2],
      [-1, 0, 1],
    ]

    const result = threeSum(nums)

    expect(result).toEqual(expectedResult)
  })
})
