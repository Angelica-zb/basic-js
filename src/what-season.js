const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
    console.log(date)
    if (!date) {
        return 'Unable to determine the time of year!'
    }
    try {
        date.getTime()
    } catch (err) {
        throw new Error('Invalid date!')
    }

    let m = date.getMonth()

    if (m < 2 || m == 11) {
        return 'winter'
    } else if (m < 5 && m > 1) {
        return 'spring'
    } else if (m < 8 && m > 4) {
        return 'summer'
    } else if (m < 11 && m > 6) {
        return 'autumn'
    }

}

module.exports = {
    getSeason
};