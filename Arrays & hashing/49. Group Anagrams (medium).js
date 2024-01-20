// https://leetcode.com/problems/group-anagrams/
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
const groupAnagrams = function(strs) {
  const groups = new Map();
  for (const s of strs) {
      const ss = s.split('').sort((a, b) => a.localeCompare(b)).join();
      if (groups.has(ss)) {
        groups.get(ss).push(s);
      } else {
        groups.set(ss, [s]);
      }
  }
  return Array.from(groups.values());
};

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]))