import { TreeNode } from '../../shared'
/**
 * Given the root of a binary tree, invert the tree, and return its root.
 *
 * @param {TreeNode} root
 *
 * @return {TreeNode}
 */

export function invertTree(root: TreeNode | null): TreeNode | null {
  if (!root) return null

  const tempLeft = root.left

  root.left = invertTree(root.right)
  root.right = invertTree(tempLeft)

  return root
}
