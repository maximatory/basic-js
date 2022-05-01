const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
 function sortByHeight(arr) {
  let inexDisNum = []
  for(let i = 0; i < arr.length; i++){
    if(arr[i] == -1){
      inexDisNum.push(i)
    }
  }
  let arrSort = [...arr].sort((a,b)=>b-a).splice(0, arr.length - inexDisNum.length)
  let result = []
  for (let i = 0; i < arr.length; i++) {
    if(inexDisNum.includes(i)){
      result.push(-1)
    } else {
      result.push(arrSort.pop())
    }
  }
  return result
}

module.exports = {
  sortByHeight
};
