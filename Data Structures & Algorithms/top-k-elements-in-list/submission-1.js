class Solution {
  topKFrequent(nums, k) {
    const m1 = new Map();
    let result = [];

    for (const element of nums) {
      m1.set(element, (m1.get(element) || 0) + 1);
    }

    const sortedVal = [...m1.entries()].sort((a, b) => b[1] - a[1]);

    for (let i = 0; i < k; i++) {
      const element = sortedVal[i][0];
      result.push(element);
    }
    return result;
  }
}