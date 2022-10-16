const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
    let str1 = s1.split('')
    let str2 = s2.split('')
    let len1 = str1.length

    function r(r1, r2) {
        for (let i = 0; i < r1.length; i++) {
            for (let k = 0; k < r2.length; k++) {
                if (r1[i] === r2[k]) {
                    r1.splice(i, 1)
                    r2.splice(k, 1)
                    r(r1, r2)
                }
            }
        }
    }
    r(str1, str2)
    return len1 - str1.length
}

module.exports = {
    getCommonCharacterCount
};