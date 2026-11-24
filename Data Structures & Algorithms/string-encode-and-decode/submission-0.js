class Solution {
  encode(strs) {
    let result = "";
    for (const element of strs) {
      const elementLength = element.length;
      result += `${elementLength}#${element}`;
    }
    return result;
  }

  decode(str) {
    let result = [];
    let i = 0;
    while (i < str.length) {
      const index = str.indexOf("#", i);
      const size = Number(str.slice(i, index));

      const start = index + 1;
      const end = start + size;

      i = end;

      const word = str.slice(start, end);
      result.push(word);
    }
    return result;
  }
}
