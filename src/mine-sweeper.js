const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
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
    let arr = [
        [],
        [],
        []
    ]
    for (let i = 0; i < matrix.length; i++) {
        for (let k = 0; k < matrix[i].length; k++) {
            if (matrix[i][k] === false) {
                arr[i][k] = 0
            } else {
                arr[i][k] = 1
            }
        }
    }
    console.log(arr)
    for (let i = 0; i < matrix.length; i++) {
        for (let k = 0; k < matrix[0].length; k++) {
            matrix[i][k] = 0
            if (arr[i][k + 1] === 1) {
                matrix[i][k]++
            }
            if (arr[i][k - 1] === 1) {
                matrix[i][k]++
            }
            if (i > 0) {
                if (arr[i - 1][k + 1] === 1) {
                    matrix[i][k]++
                }
                if (arr[i - 1][k] === 1) {
                    matrix[i][k]++
                }
                if (arr[i - 1][k - 1] === 1) {
                    matrix[i][k]++
                }
            }
            if (i < matrix.length - 1) {
                if ((arr[i + 1][k + 1] === 1)) {
                    matrix[i][k]++
                }
                if (arr[i + 1][k] === 1) {
                    matrix[i][k]++
                }
                if (arr[i + 1][k - 1] === 1) {
                    matrix[i][k]++
                }
            }
        }
    }
    console.log(matrix)
    return matrix
}


module.exports = {
    minesweeper
};