class Solution {
    isValid(s) {
        const result = [];

        const pairs = {
            "}": "{",
            "]": "[",
            ")": "(",
        };

        for (const char of s) {
            if (char in pairs) {
                if (result.pop() !== pairs[char]) return false;
            } else {
                result.push(char);
            }
        }
        return result.length === 0;
    }
}
