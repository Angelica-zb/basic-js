const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
    console.log(options)
    str = String(str)
    if (options.addition || typeof(options.addition) == 'boolean' || options.addition === null) {
        options.addition = String(options.addition)
        if (options.additionRepeatTimes) {
            while (options.additionRepeatTimes > 1) {
                if (options.additionSeparator) {
                    str = str + options.addition + options.additionSeparator
                } else {
                    str = str + options.addition + '|'
                }
                options.additionRepeatTimes--
            }
            str = str + options.addition
        } else { str = str + options.addition }
    }
    let string = str
    if (options.repeatTimes) {
        while (options.repeatTimes > 1) {
            if (options.separator) {
                string = string + options.separator + str
            } else {
                string = string + '+' + str
            }
            options.repeatTimes--
        }
    }
    return string
}

module.exports = {
    repeater
};