/**
 * Given an m x n 2D binary grid grid which represents a map of '1's (land) and '0's (water), return the number of islands.
 * An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically.
 * You may assume all four edges of the grid are all surrounded by water.
 * @param grid matrix of numbers
 */
export function numIslands(grid: string[][]): number {
  const rows = grid.length
  const cols = grid[0].length

  const visited = new Set<string>()
  let islands = 0

  function depthFirstSearch(r: number, c: number) {
    const key = `${r},${c}`
    if (
      visited.has(key) ||
      r < 0 ||
      c < 0 ||
      r >= rows ||
      c >= cols ||
      grid[r][c] === '0'
    )
      return

    visited.add(key)

    // Open above
    depthFirstSearch(r + 1, c)

    // Open below
    depthFirstSearch(r - 1, c)

    // Open right
    depthFirstSearch(r, c + 1)

    // Open left
    depthFirstSearch(r, c - 1)
  }

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      const key = `${r},${c}`
      const cellValue = grid[r][c]
      const cellAlreadyVisited = visited.has(key)

      if (cellValue === '1' && !cellAlreadyVisited) {
        depthFirstSearch(r, c)
        islands++
      }
    }
  }

  return islands
}

// TODO: Study more about DFS https://www.geeksforgeeks.org/depth-first-search-or-dfs-for-a-graph/
