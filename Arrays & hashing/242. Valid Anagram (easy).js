/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isAnagram = function(s, t) {
  const letters = new Map();

  for (const ch of s) {
    letters.set(ch, (letters.get(ch) ?? 0) + 1);
  }

  for (const ch of t) {
    if (letters.has(ch)) {
      letters.set(ch, letters.get(ch) - 1);
    } else {
      return false;
    }
  }

  for (const value of letters.values()) {
    if (value !== 0) {
      return false;
    }
  }

  return true;
};

console.log(isAnagram("anagram", "nagaram"));
console.log(isAnagram("rat", "car"));
console.log(isAnagram("lampas", "pasmal"));