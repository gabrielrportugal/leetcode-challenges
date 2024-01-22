import { test, describe, expect } from 'vitest'
import { twoSum } from './two-sum'

describe('[twoSum]', () => {
  test('case 1', () => {
    const nums = [2, 7, 11, 15]
    const target = 9

    const expectedResult = [0, 1]

    const result = twoSum(nums, target)

    expect(result).toEqual(expectedResult)
  })

  test('case 2', () => {
    const nums = [3, 2, 4]
    const target = 6

    const expectedResult = [1, 2]

    const result = twoSum(nums, target)

    expect(result).toEqual(expectedResult)
  })

  test('case 3', () => {
    const nums = [3, 3]
    const target = 6

    const expectedResult = [0, 1]

    const result = twoSum(nums, target)

    expect(result).toEqual(expectedResult)
  })
})
