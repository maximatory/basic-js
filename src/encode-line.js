const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
 function encodeLine(str) {
  let result = ""
  let num = 0
  for(let i = 0; i < str.length; i++){
    if (str[i] == str[i + 1] && str[i] != str[i - 1]){
      num = 1;
    } else if (str[i] == str[i + 1] && str[i] == str[i - 1]) {
      num++
    } else if (str[i] != str[i + 1] && str[i] == str[i-1]){
      num++
      result += `${num}${str[i]}`
    } else {
      result += `${str[i]}`
    }
  }
  return result
}

module.exports = {
  encodeLine
};
