const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
    let arr1 = n.toString(10).split('').map(int => parseInt(int, 10))
    let sum1 = 0
    for (let k = 0; k < arr1.length; k++) {
        sum1 = sum1 + arr1[k]
    }
    if (sum1.toString(10).length == 1) {
        return sum1
    } else if (sum1.toString(10).length != 1) {
        let arr2 = sum1.toString(10).split('').map(int => parseInt(int, 10))
        let sum2 = 0
        for (let k = 0; k < arr2.length; k++) {
            sum2 = sum2 + arr2[k]
        }
        return sum2
    }
}

module.exports = {
    getSumOfDigits
};