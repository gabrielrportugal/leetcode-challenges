import { describe, expect, test } from 'vitest'
import { reverseWordsInAString  } from './reverse-words-in-a-string'

describe('[reverseWordsInAString]', () => {
  test('case 1', () => {
   const input = "Let's take LeetCode contest"
   const expectedOutput = "s'teL ekat edoCteeL tsetnoc"

    const response = reverseWordsInAString(input)

    expect(response).toEqual(expectedOutput)
  })

  test('case 2', () => {
    const input = "Mr Ding"
    const expectedOutput =  "rM gniD"
 
    const response = reverseWordsInAString(input)
 
     expect(response).toEqual(expectedOutput)
   })

})


