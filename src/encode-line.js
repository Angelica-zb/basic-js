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
    console.log(str)
    let res = ''
    let a = 1
    for (let i = 0; i < str.length; i++) {

        if (str[i] != str[i + 1]) {
            if (a != 1) {
                res = res + (a) + str[i]
            } else {
                res = res + str[i]
            }
            a = 1
        } else {
            a++
            if (a == 0 && i > 0) { res = res + str[i] }

        }
    }
    console.log(res)
    return res
}

module.exports = {
    encodeLine
};