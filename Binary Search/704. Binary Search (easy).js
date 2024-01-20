// https://leetcode.com/problems/binary-search/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const search = function(nums, target) {
  let low = 0;
  let high = nums.length - 1;
  let mid = Math.floor((high + low) / 2);

  while (low <= high) {
    console.log(low, high, mid);
    if (nums[mid] < target) {
      low = mid + 1;
    } else if (nums[mid] > target) {
      high = mid - 1;
    } else {
      return mid;
    }
    mid = Math.floor((high + low) / 2);
  }
  return -1;
};

console.log(search([-1, 0, 3, 5, 9, 12], 9));
console.log(search([-1, 0, 3, 5, 9, 12], 2));
console.log(search([5], 5));