/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
const searchMatrix = function(matrix, target) {
  const n = matrix[0].length;
  const m = matrix.length;
  let l = 0;
  let r = m * n - 1;

  while (l <= r) {
    let mid = Math.floor((l + r) / 2);
    let midVal = matrix[Math.floor(mid / n)][mid % n];

    if (midVal === target) {
      return true;
    } else if (midVal < target) {
      l = mid + 1;
    } else {
      r = mid - 1;
    }
  }
  return false;
};

console.log(searchMatrix([[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 60]], 3));
console.log(searchMatrix([[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 60]], 13));