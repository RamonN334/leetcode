// https://leetcode.com/problems/longest-repeating-character-replacement/

/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
const characterReplacement = function(s, k) {
  if (s.length < 2) {
    return s.length;
  }
  const freq = new Map();
  let l = 0;
  let r = 1;
  let maxFreqLetter = '';
  let maxFreq = 0;
  for (let i = 0; i < s.length; i++) {
    freq.set(s[i], (freq.get(s[i]) ?? 0) + 1);
    freq.get(s[i]);
    if (maxFreq < freq.get(s[i])) {
      maxFreqLetter = s[i];
      maxFreq = freq.get(s[i]);
    }
  }
  console.log(freq, maxFreq, maxFreqLetter);
};

characterReplacement("ABAB", 2);
characterReplacement("AABABBA", 1);