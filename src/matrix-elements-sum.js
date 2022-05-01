const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  let upZero = [];
  for(let i = 0; i< matrix.length; i++){
    let str = ""
    for (let j = 0; j < matrix[i].length; j++){
      if (matrix[i][j] == 0){
        str+=j + ','
      }
    }
    upZero.push(str)
  }
  let result = 0;
  matrix[0].forEach(elem=>{
    result+=elem
  })


  for(let i = matrix.length-1; i>=1; i--){
      matrix[i].forEach(elem=>{
        upZero[i - 1].includes(matrix[i].indexOf(elem).toString()) ? result : result+=elem})
  }
  return result
}

module.exports = {
  getMatrixElementsSum
};
