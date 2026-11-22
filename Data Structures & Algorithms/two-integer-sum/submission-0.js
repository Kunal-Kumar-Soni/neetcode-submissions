class Solution {
  twoSum(nums, target) {
    const m1 = new Map();

    for (let i = 0; i < nums.length; i++) {
      m1.set(nums[i], i);
    }

    for (let j = 0; j < nums.length; j++) {
      const element = nums[j];
      const findVal = target - element;
      const findValIndex = m1.get(findVal);

      if (m1.has(findVal) && findValIndex !== j) {
        return [j, m1.get(findVal)];
      }
    }
  }
}