// https://leetcode.com/problems/best-time-to-buy-and-sell-stock/

/**
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = function(prices) {
  let maxProfit = 0;
  let l = 0;
  let r = 1;
  while (r < prices.length) {
      if (prices[l] < prices[r]) {
          maxProfit = Math.max(maxProfit, prices[r]  - prices[l]);
      } else {
          l = r
      }
      r++;
  }
  return maxProfit;
};

console.log(maxProfit([7,1,5,3,6,4])); // 5
console.log(maxProfit([7,6,4,3,1])); // 0
console.log(maxProfit([1,2])); // 1