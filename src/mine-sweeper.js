const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some matrixangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {matrixay<matrixay>} matrix
 * @return {matrixay<matrixay>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
 function minesweeper(matrix) {

  let copy = JSON.parse(JSON.stringify(matrix))
  for (let i = 0; i < copy.length; i++) {
    for (let j = 0; j < copy[i].length; j++) {
      copy[i][j] = 0
    }
  }

    for (let i = 0; i < matrix.length; i++) {
      for (let j = 0; j < matrix[i].length; j++) {
        let sum = 0;
        if (j < matrix[i].length - 1 && matrix[i][j + 1] === true) {
          sum++
        }
        if (j > 0 && matrix[i][j - 1] === true) {
          sum++
        }
        if (i < matrix.length - 1 && matrix[i + 1][j] === true) {
          sum++
        }
        if (i > 0 && matrix[i - 1][j] === true) {
          sum++
        }
        if (i < matrix.length - 1 && j < matrix[i].length - 1 && matrix[i + 1][j + 1] === true) {
          sum++
        }
        if (i < matrix.length - 1 && j >0 && matrix[i + 1][j - 1] === true) {
          sum++
        }
        if (i > 0 && j < matrix[i].length - 1 && matrix[i - 1][j + 1] === true) {
          sum++
        }
        if (i > 0 && j > 0 && matrix[i - 1][j - 1] === true) {
          sum++
        }

        copy[i][j] = sum
      }
    }
    return copy
}

module.exports = {
  minesweeper
};
