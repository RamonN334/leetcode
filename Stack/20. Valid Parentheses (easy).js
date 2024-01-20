
const isOpenParenthes = p => p === '(' || p === '[' || p === '{';
const isClosedParenthes = p => p === ')' || p === ']' || p === '}';
const compareParentheses = (lp, rp) => {
  return lp === '(' && rp === ')' ||
         lp === '[' && rp === ']' ||
         lp === '{' && rp === '}';
}

/**
 * @param {string} s
 * @return {boolean}
 */
const isValid = function(s) {
    const stack = [];

    for (const p of s) {
        if (isClosedParenthes(p)) {
            const prevP = stack.pop();
            if (prevP === undefined) {
                return false;
            }
            if (!compareParentheses(prevP, p)) {
                return false;
            }
        } else if (isOpenParenthes(p)) {
            stack.push(p);
        }
    }

    return stack.length === 0;
};

console.log(isValid("()[]{}"));
console.log(isValid("(]"));
console.log(isValid("([)]"));
console.log(isValid("({}()[()({})])"));