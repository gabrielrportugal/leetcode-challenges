import { describe, expect, test } from 'vitest'
import { addTwoNumbers } from './add-two-numbers'
import { ListNode } from '../../shared'

describe('[addTwoNumbers]', () => {
  test('case 1', () => {
    const l1 = new ListNode(2)
    l1.next = new ListNode(4)
    l1.next.next = new ListNode(3)

    const l2 = new ListNode(5)
    l2.next = new ListNode(6)
    l2.next.next = new ListNode(4)

    const result = addTwoNumbers(l1, l2)

    const expectedResult = new ListNode(7)
    expectedResult.next = new ListNode(0)
    expectedResult.next.next = new ListNode(8)

    expect(result).toEqual(expectedResult)
  })

  test('case 2', () => {
    const l1 = new ListNode(0)

    const l2 = new ListNode(0)

    const result = addTwoNumbers(l1, l2)

    const expectedResult = new ListNode(0)

    expect(result).toEqual(expectedResult)
  })

  test('case 3', () => {
    const l1 = new ListNode(9)
    l1.next = new ListNode(9)
    l1.next.next = new ListNode(9)
    l1.next.next.next = new ListNode(9)
    l1.next.next.next.next = new ListNode(9)
    l1.next.next.next.next.next = new ListNode(9)
    l1.next.next.next.next.next.next = new ListNode(9)

    const l2 = new ListNode(9)
    l2.next = new ListNode(9)
    l2.next.next = new ListNode(9)
    l2.next.next.next = new ListNode(9)

    const result = addTwoNumbers(l1, l2)

    const expectedResult = new ListNode(8)
    expectedResult.next = new ListNode(9)
    expectedResult.next.next = new ListNode(9)
    expectedResult.next.next.next = new ListNode(9)
    expectedResult.next.next.next.next = new ListNode(0)
    expectedResult.next.next.next.next.next = new ListNode(0)
    expectedResult.next.next.next.next.next.next = new ListNode(0)
    expectedResult.next.next.next.next.next.next.next = new ListNode(1)

    expect(result).toEqual(expectedResult)
  })
})
