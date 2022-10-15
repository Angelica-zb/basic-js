const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(matrix) {

    let cat = 0;
    for (let h = 0; h < matrix.length; h++) {
        for (let i = 0; i < matrix[h].length; i++) {
            let t = matrix[h]
            if (t[i] === '^^') {
                cat++
            }
        }
    }
    return cat
}

module.exports = {
    countCats
};