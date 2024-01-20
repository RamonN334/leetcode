const sanitizeStr = s => {
  return s
    .replaceAll(' ', '')
    .replaceAll(/[^a-zA-Z0-9]/g, '')
    .toLowerCase();
}

/**
* @param {string} s
* @return {boolean}
*/
const isPalindrome = function(s) {
  const ss = sanitizeStr(s);
  let l = 0;
  let r = ss.length - 1;
  while (l <= r) {
      if (ss[l] !== ss[r]) {
          return false;
      }
      l++;
      r--;
  }
  return true;
};

console.log(isPalindrome("A man, a plan, a canal: Panama"));
console.log(isPalindrome("race a car"));
console.log(isPalindrome(" "));