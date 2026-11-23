class Solution {
  groupAnagrams(strs) {
    let check = {};
    for (const element of strs) {
      let sortedEl = element.split("").sort().join("");

      if (check[sortedEl]) {
        check[sortedEl].push(element);
      } else {
        check[sortedEl] = [element];
      }
    }
    return Object.values(check);
  }
}