class Solution {
  groupAnagrams(strs) {
    const m1 = new Map();

    for (const word of strs) {
      const arr = new Array(26).fill(0);

      for (const char of word) {
        const index = char.charCodeAt(0) - 97;
        arr[index]++;
      }

      const key = arr.join("#");

      if (m1.has(key)) {
        m1.get(key).push(word);
      } else {
        m1.set(key, [word]);
      }
    }
    return [...m1.values()];
  }
}