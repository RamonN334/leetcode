// https://leetcode.com/problems/two-sum/
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function(nums, target) {
    const seen = new Map();
    for (let i = 0; i < nums.length; i++) {
      const diff = target - nums[i];
      if (seen.has(diff)) {
        return [seen.get(diff), i];
      } else {
        seen.set(nums[i], i);
      }
    }
};

const result = twoSum([2, 7, 11, 15], 9);
console.log(result);