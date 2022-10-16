const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
    calculateDepth(arr) {

        let dep = []
        if (Array.isArray(arr)) {
            if (arr.length > 0) {
                for (let i = 0; i < arr.length; i++) {
                    dep[i] = this.calculateDepth(arr[i]) + 1
                }
                return dep.sort((a, b) => b - a)[0]
            } else { return 1 }

        } else { return 0 }

    }
}

module.exports = {
    DepthCalculator
};