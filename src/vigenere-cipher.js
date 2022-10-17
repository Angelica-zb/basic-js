const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
    constructor(x) {
        this.x = x
    }


    encrypt(text, key) {
        if (!text || !key) {
            throw new Error('Incorrect arguments!')
        }
        let message = (String(this.x) === 'false') ? text.split('').reverse().join('') : text;
        let space = [];
        for (let i = 0; i < message.length; i++) {
            if (message[i] === ' ') {
                space.push(i)
            }
        }
        let str = message.split(' ').join('');
        let t = str.length / key.length
        let rep = Math.ceil(t)
        let keyStr = key.repeat(rep).substring(0, str.length)
        let str2 = '';
        for (let i = 0; i < str.length; i++) {
            if (str[i].toUpperCase().charCodeAt(0) <= 90 && str[i].toUpperCase().charCodeAt(0) >= 65) {
                let codeL = str[i].toUpperCase().charCodeAt(0);
                let codeK = keyStr[i].toUpperCase().charCodeAt(0);
                if (codeL + (codeK - 65) > 90) {
                    str2 += String.fromCharCode(codeL + codeK - 91)
                } else {
                    str2 += String.fromCharCode(codeL + codeK - 65)
                }
            } else {
                str2 += str[i];
            }
        }
        let arr = str2.split('')

        for (let i = 0; i < space.length; i++) {
            arr.splice(space[i], 0, ' ')
        }
        let result = arr.join('')
        return result;
    }



    decrypt(encryptedMessage, key) {
        if (!encryptedMessage || !key) {
            throw new Error('Incorrect arguments!')
        }
        let message = (String(this.x) === 'false') ? encryptedMessage.split('').reverse().join('') : encryptedMessage;
        let space = [];
        for (let i = 0; i < message.length; i++) {
            if (message[i] === ' ') {
                space.push(i)
            }
        }
        let str = message.split(' ').join('');
        let t = str.length / key.length
        let rep = Math.ceil(t)
        let keyStr = key.repeat(rep).substring(0, str.length)
        let str2 = '';
        for (let i = 0; i < str.length; i++) {
            if (str[i].toUpperCase().charCodeAt(0) <= 90 && str[i].toUpperCase().charCodeAt(0) >= 65) {
                let codeL = str[i].toUpperCase().charCodeAt(0);
                let codeK = keyStr[i].toUpperCase().charCodeAt(0);
                if (codeK <= codeL) {
                    str2 += String.fromCharCode(65 - (codeK - codeL))
                } else {
                    str2 += String.fromCharCode(91 - (codeK - codeL))
                }
            } else {
                str2 += str[i];
            }
        }
        let arr = str2.split('')
        for (let i = 0; i < space.length; i++) {
            arr.splice(space[i], 0, ' ')
        }
        let result = arr.join('')
        return result;
    }
}

module.exports = {
    VigenereCipheringMachine
};