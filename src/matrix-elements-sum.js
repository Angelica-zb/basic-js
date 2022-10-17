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
    let sum = 0
    for (let i = 0; i < matrix[0].length; i++) {
        let arr = []
        for (let k = 0; k < matrix.length; k++) {
            arr.push(matrix[k][i])
        }
        for (let l = 0; l < arr.length; l++) {
            if (arr[l] != 0) {
                sum = sum + arr[l];
            } else { break }
        }
    }
    return sum
}

module.exports = {
    getMatrixElementsSum
};