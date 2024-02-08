import { describe, expect, test } from 'vitest'
import { numIslands } from './number-of-islands'
describe('[numIslands]', () => {
  test('case 1', () => {
    const grid = [
      ['1', '1', '1', '1', '0'],
      ['1', '1', '0', '1', '0'],
      ['1', '1', '0', '0', '0'],
      ['0', '0', '0', '0', '0'],
    ]
    const expectedResult = 1

    const result = numIslands(grid)

    expect(result).toEqual(expectedResult)
  })

  test('case 2', () => {
    const grid = [
      ['1', '1', '0', '0', '0'],
      ['1', '1', '0', '0', '0'],
      ['0', '0', '1', '0', '0'],
      ['0', '0', '0', '1', '1'],
    ]
    const expectedResult = 3

    const result = numIslands(grid)

    expect(result).toEqual(expectedResult)
  })
})
