export function reverseWordsInAString(s: string): string {
  return s.split(' ').map((word) => word.split('').reverse().join('')).join(' ')
};