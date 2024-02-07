import { describe, expect, test } from 'vitest'
import { addTwoNumbers } from './add-two-numbers'

describe('[addTwoNumbers]', () => {
  test('case 1', () => {
    const nums = [-1, 0, 3, 5, 9, 12]

    const target = 9

    const expectedResult = 4

    const result = addTwoNumbers(nums, target)

    expect(result).toEqual(expectedResult)
  })

  test('case 2', () => {
    const nums = [-1, 0, 3, 5, 9, 12]

    const target = 2

    const expectedResult = -1

    const result = addTwoNumbers(nums, target)

    expect(result).toEqual(expectedResult)
  })
})
