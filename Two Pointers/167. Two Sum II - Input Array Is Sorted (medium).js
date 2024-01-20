/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function(numbers, target) {
  let l = 0;
  let r = numbers.length - 1;
  while (l < r) {
      const suggest = numbers[l] + numbers[r]
      if (suggest === target) {
          return [l+1, r+1];
      } else if (suggest > target) {
          r--;
      } else {
          l++;
      }
  }
};