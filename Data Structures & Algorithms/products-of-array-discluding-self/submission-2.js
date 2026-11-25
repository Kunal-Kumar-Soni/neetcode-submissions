class Solution {
  productExceptSelf(nums) {
    let prefix = [];
    let prefixProduct = 1;

    for (let i = 0; i < nums.length; i++) {
      const element = nums[i];
      prefix.push(prefixProduct);
      prefixProduct *= element;
    }

    let suffix = [];
    let suffixProduct = 1;

    for (let j = nums.length - 1; j >= 0; j--) {
      const element = nums[j];
      suffix[j] = suffixProduct;
      suffixProduct *= element;
    }

    let result = [];
    for (let k = 0; k < nums.length; k++) {
      const value = prefix[k] * suffix[k];
      result.push(value === 0 ? 0 : value);
    }

    return result;
  }
}