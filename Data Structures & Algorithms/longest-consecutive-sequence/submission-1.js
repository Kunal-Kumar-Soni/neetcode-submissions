class Solution {
  longestConsecutive(nums) {
    const numSet = new Set(nums);
    if (nums.length === 0) return 0;
    let count = 1;

    for (const element of numSet) {
      let currentCount = 1;
      let target = element + 1;

      while (!numSet.has(element - 1)) {
        if (numSet.has(target)) {
          currentCount++;
          target++;
        } else {
          break;
        }
      }
      if (currentCount > count) {
        count = currentCount;
      }
    }

    return count;
  }
}