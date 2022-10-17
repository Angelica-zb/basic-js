const { NotImplementedError } = require('../extensions/index.js');

/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
function isMAC48Address(n) {
    let a = ['A', 'B', 'C', 'D', 'E', 'F']
    let b = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
    let arr = n.split('-');
    console.log(arr)
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length === 2) {
            let ar = arr[i].split('');
            for (let k = 0; k < ar.length; k++) {
                if ((b.indexOf(ar[k]) != -1) || (a.indexOf(ar[k])) != -1) {
                    return true
                } else { return false }
            };
        } else { return false }
    }
};



module.exports = {
    isMAC48Address
};