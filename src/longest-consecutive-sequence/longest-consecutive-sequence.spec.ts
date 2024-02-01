import { describe, expect, test } from 'vitest'
import { longestConsecutive } from './longest-consecutive-sequence'
describe('[longestConsecutive]', () => {
  test('case 1', () => {
    const nums = [100, 4, 200, 1, 3, 2]

    const expectedResult = 4

    const result = longestConsecutive(nums)

    expect(result).toEqual(expectedResult)
  })

  test('case 2', () => {
    const nums = [0, 3, 7, 2, 5, 8, 4, 6, 0, 1]

    const expectedResult = 9

    const result = longestConsecutive(nums)

    expect(result).toEqual(expectedResult)
  })

  test('case 3', () => {
    const nums = []

    const expectedResult = 0

    const result = longestConsecutive(nums)

    expect(result).toEqual(expectedResult)
  })
})
