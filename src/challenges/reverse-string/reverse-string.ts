export function reverseString(s: string[]): void {
  let left = 0
  let right = s.length - 1

  while (left < right) {
    const tempLeft = s[left]
    s[left] = s[right]
    s[right] = tempLeft

    left += 1
    right -= 1
  }
};

export function reverseStringV2(s: string[]): void {
  s.reverse()
};