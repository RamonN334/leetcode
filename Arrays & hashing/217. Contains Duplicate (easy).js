/**
 * @param {number[]} nums
 * @return {boolean}
 */
const containsDuplicate = function(nums) {
  const seen = new Map();
  for (const elem of nums) {
      if (seen.has(elem)) {
          return true;
      }
      seen.set(elem, true);
  };
  return false;
};

console.log(containsDuplicate([1,2,3,1]));
console.log(containsDuplicate([1,2,3,4]));
console.log(containsDuplicate([1,1,1,3,3,4,3,2,4,2]));