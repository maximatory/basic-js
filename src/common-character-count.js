const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let arr = s1.split('').sort().reverse()
  let arr2 = s2.split('').sort().reverse()
  let acc = 0
  for(let i = arr2.length-1; i>=0; i--){
    if(arr.includes(arr2[i])){
      acc+=1;
      arr2.pop();
      arr.pop()
    }
  }
  return acc;
}

module.exports = {
  getCommonCharacterCount
};
