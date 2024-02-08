import { describe, expect, test } from 'vitest'
import { reverseList } from './reverse-linked-list'
import { ListNode } from '../../shared'

describe('[reverseLinkedList]', () => {
  test('case 1', () => {
    const l1 = new ListNode(1)
    l1.next = new ListNode(2)
    l1.next.next = new ListNode(3)
    l1.next.next.next = new ListNode(4)
    l1.next.next.next.next = new ListNode(5)

    const result = reverseList(l1)

    const expectedResult = new ListNode(5)
    expectedResult.next = new ListNode(4)
    expectedResult.next.next = new ListNode(3)
    expectedResult.next.next.next = new ListNode(2)
    expectedResult.next.next.next.next = new ListNode(1)

    expect(result).toEqual(expectedResult)
  })

  test('case 2', () => {
    const l1 = new ListNode(1)
    l1.next = new ListNode(2)

    const result = reverseList(l1)

    const expectedResult = new ListNode(2)
    expectedResult.next = new ListNode(1)

    expect(result).toEqual(expectedResult)
  })

  test('case 3', () => {
    const l1 = new ListNode()

    const result = reverseList(l1)

    const expectedResult = new ListNode()

    expect(result).toEqual(expectedResult)
  })
})
