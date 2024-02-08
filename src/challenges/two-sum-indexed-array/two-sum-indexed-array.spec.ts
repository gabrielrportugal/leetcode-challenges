import { test, describe, expect } from 'vitest'
import {
  twoSumIndexedArray,
  twoSumIndexedArrayV2,
} from './two-sum-indexed-array'

describe('[twoSumIndexedArray]', () => {
  test('case 1', () => {
    const nums = [2, 7, 11, 15]
    const target = 9

    const expectedResult = [1, 2]

    const result = twoSumIndexedArray(nums, target)

    expect(result).toEqual(expectedResult)
  })

  test('case 2', () => {
    const nums = [2, 3, 4]
    const target = 6

    const expectedResult = [1, 3]

    const result = twoSumIndexedArray(nums, target)

    expect(result).toEqual(expectedResult)
  })

  test('case 3', () => {
    const nums = [-1, 0]
    const target = -1

    const expectedResult = [1, 2]

    const result = twoSumIndexedArray(nums, target)

    expect(result).toEqual(expectedResult)
  })
})

describe('[twoSumIndexedArrayV2]', () => {
  test('case 1', () => {
    const nums = [2, 7, 11, 15]
    const target = 9

    const expectedResult = [1, 2]

    const result = twoSumIndexedArrayV2(nums, target)

    expect(result).toEqual(expectedResult)
  })

  test('case 2', () => {
    const nums = [2, 3, 4]
    const target = 6

    const expectedResult = [1, 3]

    const result = twoSumIndexedArrayV2(nums, target)

    expect(result).toEqual(expectedResult)
  })

  test('case 3', () => {
    const nums = [-1, 0]
    const target = -1

    const expectedResult = [1, 2]

    const result = twoSumIndexedArrayV2(nums, target)

    expect(result).toEqual(expectedResult)
  })
})
