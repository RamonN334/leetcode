// https://leetcode.com/problems/longest-substring-without-repeating-characters/

/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = function(s) {
  if (s.length < 2) {
      return s.length;
  }

  const seen = new Map();
  let l = 0;
  let r = 1;
  seen.set(s[l], l);
  let maxLength = 1;

  while (r < s.length) {
      if (seen.has(s[r]) && seen.get(s[r]) >= l) {
          l = seen.get(s[r]) + 1;
      } else {
          maxLength = Math.max(maxLength, r - l + 1);
      }
      seen.set(s[r], r);
      r++;
  }
  return maxLength;
};

console.log(lengthOfLongestSubstring("abcabcbb")); // 3
console.log(lengthOfLongestSubstring("bbbbb")); // 1
console.log(lengthOfLongestSubstring("pwwkew")); // 3
console.log(lengthOfLongestSubstring("tmmzuxt")); // 5