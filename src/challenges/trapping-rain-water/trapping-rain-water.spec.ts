import { describe, expect, test } from 'vitest'
import { trapWater } from './trapping-rain-water'

describe('[trapWater]', () => {
  test('case 1', () => {
    // The above elevation map (black section) is represented by array [0,1,0,2,1,0,1,3,2,1,2,1].
    // In this case, 6 units of rain water (blue section) are being trapped.

    const height = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]

    const expectedResult = 6

    const result = trapWater(height)

    expect(result).toEqual(expectedResult)
  })

  test('case 2', () => {
    const height = [4, 2, 0, 3, 2, 5]

    const expectedResult = 9

    const result = trapWater(height)

    expect(result).toEqual(expectedResult)
  })
})
