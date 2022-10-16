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
    var str = String(n);
    let res = []
    for (let k = 1; k < str.length + 1; k++) {
        let t = ''
        t = str.substring(0, k - 1) + str.substring(k, str.length);
        res.push(+t)
    }
    return Math.max(...res)
}

module.exports = {
    deleteDigit
};