const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
    for (let k = 0; k < names.length; k++) {
        console.log(names[k])
        let o = 1;
        for (let i = k + 1; i < names.length; i++) {
            if (names[k] === names[i]) {
                names[i] = names[i] + '(' + o + ')'
                o++
            }
        }
    };
    return names
}

module.exports = {
    renameFiles
};