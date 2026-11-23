class Solution {
  topKFrequent(nums, k) {
    const obj = {};
    let result = [];

    for (const element of nums) {
      obj[element] = (obj[element] || 0) + 1;
    }

    let pair = Object.entries(obj);
    pair = pair.sort((a, b) => b[1] - a[1]);

    for (let i = 0; i < k; i++) {
      const element = Number(pair[i][0]);
      result.push(element);
    }

    return result;
  }
}