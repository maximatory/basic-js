const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
 function deleteDigit(n) {
  let bigNum = n.toString().split('').sort().slice(-1).join()
  bigNum = +bigNum
  n = n.toString()
  let result = ''
  if (n.length == 1){
    result = n;
  } else if (n.length == 2) {
    result = bigNum;
  } else {
    for (let i = 0; i < n.length; i++) {
      if (n[i + 1] != bigNum && n.length > 2) {
        result += n[i]
      }
    }
  }
  result = +result
  return result
}

module.exports = {
  deleteDigit
};
