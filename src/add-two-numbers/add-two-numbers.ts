import { ListNode } from './list-node'
/**
 * You are given two non-empty linked lists representing two non-negative integers.
 * The digits are stored in reverse order, and each of their nodes contains a single digit.
 * Add the two numbers and return the sum as a linked list.
 *
 * You may assume the two numbers do not contain any leading zero, except the number 0 itself.
 *
 * @param {ListNode} l1
 * @param {ListNode} l2
 *
 * @return {ListNode}
 */

export function addTwoNumbers(
  l1: ListNode | null,
  l2: ListNode | null,
): ListNode | null {
  // init our result -> new List Node with result
  const result = new ListNode()

  let currResultNode: ListNode | null = result
  let prevNode = null

  while (l1?.val || l2?.val || l1?.val === 0 || l2?.val === 0) {
    // add the left most numbers
    const added = (l1?.val || 0) + (l2?.val || 0)

    // if there is not a number in the bottom row, make one
    if (!currResultNode) {
      currResultNode = new ListNode(0)
      if (prevNode) {
        prevNode.next = currResultNode
      }
    }

    // add those two numbers into the bottom row
    currResultNode.val += added

    // if number in the bottom row is > 9, carry the 1
    if (currResultNode.val > 9) {
      currResultNode.val = currResultNode.val - 10
      currResultNode.next = new ListNode(1)
    }

    prevNode = currResultNode

    if (currResultNode) currResultNode = currResultNode.next

    l1 = l1?.next || null
    l2 = l2?.next || null
  }

  return result
}
