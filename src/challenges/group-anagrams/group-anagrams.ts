/**
 * Given an array of strings strs, group the anagrams together. You can return the answer in any order.
 * An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase,
 * typically using all the original letters exactly once.
 * @param strs string[]
 */

export function groupAnagrams(strs: string[]): string[][] {
  const hashMap = new Map<string, string[]>()

  for (let i = 0; i < strs.length; i++) {
    const valueString = strs[i]
    const alphabeticalOrderedValueString = valueString.split('').sort().join('')

    if (hashMap.has(alphabeticalOrderedValueString)) {
      const previewValues = hashMap.get(alphabeticalOrderedValueString) || []

      hashMap.set(alphabeticalOrderedValueString, [
        ...previewValues,
        valueString,
      ])
    } else {
      hashMap.set(alphabeticalOrderedValueString, [valueString])
    }
  }

  const values = Array.from(hashMap.values())

  return values
}
