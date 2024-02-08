import { ListNode } from '../../shared'

export function reverseList(head: ListNode | null): ListNode | null {
  let newList: ListNode | null = null

  let current = head

  while (current) {
    const nextNode = current.next
    current.next = newList

    newList = current
    current = nextNode
  }

  return newList
}
