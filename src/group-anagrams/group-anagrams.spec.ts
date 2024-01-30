import { describe, expect, test } from 'vitest'
import { groupAnagrams } from './group-anagrams'
describe('[groupAnagrams]', () => {
  test('case 1', () => {
    const strs = ['eat', 'tea', 'tan', 'ate', 'nat', 'bat']

    const expectedResult = [['bat'], ['nat', 'tan'], ['ate', 'eat', 'tea']]

    const result = groupAnagrams(strs)

    // LeetCode challenge do not consider array order
    const sortedResult = result.map((arr) => arr.sort())
    const sortedExpectedResult = expectedResult.map((arr) => arr.sort())

    expect(sortedResult).toEqual(expect.arrayContaining(sortedExpectedResult))
  })

  test('case 2', () => {
    const strs = ['']
    const expectedResult = [['']]

    const result = groupAnagrams(strs)

    const sortedResult = result.map((arr) => arr.sort())
    const sortedExpectedResult = expectedResult.map((arr) => arr.sort())

    expect(sortedResult).toEqual(expect.arrayContaining(sortedExpectedResult))
  })

  test('case 3', () => {
    const strs = ['a']
    const expectedResult = [['a']]

    const result = groupAnagrams(strs)

    const sortedResult = result.map((arr) => arr.sort())
    const sortedExpectedResult = expectedResult.map((arr) => arr.sort())

    expect(sortedResult).toEqual(expect.arrayContaining(sortedExpectedResult))
  })
})
