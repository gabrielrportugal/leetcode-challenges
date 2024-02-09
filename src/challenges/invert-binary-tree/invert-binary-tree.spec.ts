import { describe, expect, test } from 'vitest'
import { invertTree } from './invert-binary-tree'
import { TreeNode } from '../../shared'

describe('[invertTree]', () => {
  test('case 1', () => {
    const tree = new TreeNode(4)
    tree.left = new TreeNode(2)
    tree.left.left = new TreeNode(1)
    tree.left.right = new TreeNode(3)
    tree.right = new TreeNode(7)
    tree.right.left = new TreeNode(6)
    tree.right.right = new TreeNode(9)

    const result = invertTree(tree)

    const expectedResult = new TreeNode(4)
    expectedResult.left = new TreeNode(7)
    expectedResult.left.left = new TreeNode(9)
    expectedResult.left.right = new TreeNode(6)
    expectedResult.right = new TreeNode(2)
    expectedResult.right.left = new TreeNode(3)
    expectedResult.right.right = new TreeNode(1)

    expect(result).toEqual(expectedResult)
  })

  test('case 2', () => {
    const tree = new TreeNode(2)
    tree.left = new TreeNode(1)
    tree.right = new TreeNode(3)

    const result = invertTree(tree)

    const expectedResult = new TreeNode(2)
    expectedResult.left = new TreeNode(3)
    expectedResult.right = new TreeNode(1)

    expect(result).toEqual(expectedResult)
  })

  test('case 3', () => {
    const tree = new TreeNode(0)

    const result = invertTree(tree)

    const expectedResult = new TreeNode(0)

    expect(result).toEqual(expectedResult)
  })
})
