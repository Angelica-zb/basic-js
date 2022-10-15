const { NotImplementedError } = require('../extensions/index.js');

/**
 * Calculate turns number and time (in seconds) required
 * to solve puzzle
 * 
 * @param {Number} disks number of disks
 * @param {Number} turnsSpeed speed (in turns/hour)
 * @return {Object} object with props turns (number of turns)
 * and seconds (time in seconds)
 *
 * @example
 * 
 * calculateHanoi(9, 4308) => { turns: 511, seconds: 427 }
 *
 */
function calculateHanoi(disksNumber, turnsSpeed) {
    let num = 0;
    let i = 0;
    while (i < disksNumber) {
        num = num * 2 + 1;
        i++
    }
    let sec = Math.floor(num / (turnsSpeed / 3600))
    let ans = {
        turns: num,
        seconds: sec
    }

    return (ans)
}

module.exports = {
    calculateHanoi
};