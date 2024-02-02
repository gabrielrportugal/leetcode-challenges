import { describe, expect, test } from 'vitest'
import { search } from './binary-search'

describe('[binarySearch]', () => {
  test('case 1', () => {
    const nums = [-1, 0, 3, 5, 9, 12]

    const target = 9

    const expectedResult = 4

    const result = search(nums, target)

    expect(result).toEqual(expectedResult)
  })

  test('case 2', () => {
    const nums = [-1, 0, 3, 5, 9, 12]

    const target = 2

    const expectedResult = -1

    const result = search(nums, target)

    expect(result).toEqual(expectedResult)
  })
})
