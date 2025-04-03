export function containsNearbyDuplicate(nums: number[], k: number): boolean {
  for (let i = 0; i < nums.length; i++) {
    for (let j = 1; j < nums.length; j++) {
      if (i === j) continue;
      if (nums[i] === nums[j]) {
        const absoluteValue = Math.abs(i - j);

        if (absoluteValue <= k) {
          return true;
        }
      }
    }
  }
  return false;
};

export function containsNearbyDuplicateImproved(nums: number[], k: number): boolean {
  let set = new Set<number>();
    
  for (let i = 0; i < nums.length; i++) {
      if (set.has(nums[i])) {
        return true
      };
      set.add(nums[i]);
      if (set.size > k) {
        set.delete(nums[i - k])}
      ;
  }

  return false;
};