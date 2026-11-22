class Solution {
  isAnagram(s, t) {
    if (s.length !== t.length) return false;
    let obj1 = {};

    for (let i = 0; i < s.length; i++) {
      const element = s[i];
      obj1[element] = (obj1[element] || 0) + 1;
    }

    for (let j = 0; j < t.length; j++) {
      const element = t[j];
      if (!obj1[element]) {
        return false;
      }
      obj1[element]--;
    }

    return true;
  }
}