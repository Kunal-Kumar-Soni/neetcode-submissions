class Solution {
  hasDuplicate(nums) {
    const s1 = new Set();
    for (let i = 0; i < nums.length; i++) {
      const element = nums[i];
      if (s1.has(element)) {
        return true;
      }
      s1.add(element);
    }
    return false;
  }
}