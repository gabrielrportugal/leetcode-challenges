/**
 Do not return anything, modify matrix in-place instead.
 */

/**
 * You are given an n x n 2D matrix representing an image, rotate the image by 90 degrees (clockwise).
 * @param matrix number[][]
 */
export function rotateImage(matrix: number[][]): void {
  let left = 0
  let right = matrix.length - 1

  while (left < right) {
    for (let i = left; i < right; i++) {
      const offset = i - left

      const top = left
      const bottom = right

      const topLeft = matrix[top][left + offset]

      matrix[top][left + offset] = matrix[bottom - offset][left]

      matrix[bottom - offset][left] = matrix[bottom][right - offset]

      matrix[bottom][right - offset] = matrix[top + offset][right]

      matrix[top + offset][right] = topLeft
    }

    left++
    right--
  }
}
