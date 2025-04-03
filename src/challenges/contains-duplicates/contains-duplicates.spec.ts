import { describe, expect, test } from 'vitest'
import { containsNearbyDuplicate , containsNearbyDuplicateImproved } from './contains-duplicates'

describe('[containsNearbyDuplicate]', () => {
  test('case 1', () => {
   const input = [1,2,3,1]
   const key = 3;

    const response = containsNearbyDuplicate(input, key)

    expect(response).toBe(true)
  })

  test('case 2', () => {
    const input = [1,0,1,1]
    const key = 1;
 
     const response = containsNearbyDuplicate(input, key)
 
     expect(response).toBe(true)
   })

   test('case 3', () => {
    const input = [1,2,3,1,2,3]
    const key = 2;
 
     const response = containsNearbyDuplicate(input, key)
 
     expect(response).toBe(false)
   })
})

describe('[containsNearbyDuplicateImproved]', () => {
  test('case 1', () => {
   const input = [1,2,3,1]
   const key = 3;

    const response = containsNearbyDuplicateImproved(input, key)

    expect(response).toBe(true)
  })

  test('case 2', () => {
    const input = [1,0,1,1]
    const key = 1;
 
     const response = containsNearbyDuplicateImproved(input, key)
 
     expect(response).toBe(true)
   })

   test('case 3', () => {
    const input = [1,2,3,1,2,3]
    const key = 2;
 
     const response = containsNearbyDuplicateImproved(input, key)
 
     expect(response).toBe(false)
   })
})


