import { describe, expect, test } from 'vitest'
import { reverseString, reverseStringV2 } from './reverse-string'

describe('[reverseString]', () => {
  test('case 1', () => {
   const input = ["h","e","l","l","o"]
   const expectedOutput = ["o","l","l","e","h"]

    reverseString(input)

    expect(input).toEqual(expectedOutput)
  })

  test('case 2', () => {
    const input = ["H","a","n","n","a","h"]
    const expectedOutput =  ["h","a","n","n","a","H"]
 
     reverseString(input)
 
     expect(input).toEqual(expectedOutput)
   })

})

describe('[reverseStringV2]', () => {
  test('case 1', () => {
   const input = ["h","e","l","l","o"]
   const expectedOutput = ["o","l","l","e","h"]

    reverseStringV2(input)

    expect(input).toEqual(expectedOutput)
  })

  test('case 2', () => {
    const input = ["H","a","n","n","a","h"]
    const expectedOutput =  ["h","a","n","n","a","H"]
 
     reverseStringV2(input)
 
     expect(input).toEqual(expectedOutput)
   })

})
