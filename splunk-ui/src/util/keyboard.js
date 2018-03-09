import kc from 'keycode';
import { isUndefined } from 'lodash';

/**
 * Aliases functions from https://github.com/timoxley/keycode
 */
export const keycode = kc;

/** Whenever possible this library uses event.key because it has few issues than event.keyCode.
 * However, Safari only supports it for a few keys, such as Enter, and the QA test suite doesn't
 * provide it. */
export function isValidKey(key) {
    return isUndefined(key) ? false : key !== 'Unidentified';
}

/**
 * The event adds a number.
 */
export function isNumber({ key, keyCode }) {
    if (isValidKey(key)) {
        const keys = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
        return keys.indexOf(key) >= 0;
    }
    return (keyCode >= 48 && keyCode <= 57) || (keyCode >= 96 && keyCode <= 105);
}

/**
 * The event adds a decimal.
 */
export function isDecimal({ key, keyCode }) {
    if (isValidKey(key)) {
        return (key === '.') || (key === 'Decimal');
    }

    return keyCode === keycode('numpad .') || keyCode === keycode('.');
}

export function isMinus({ key, keyCode }) {
    if (isValidKey(key)) {
        return key === '-' || key === 'Subtract';
    }

    return keyCode === keycode('numpad -') || keyCode === keycode('-');
}

/**
 * The event adds a character that may define a floating point value: number, decimal or minus.
 */
export function isNumeric(event) {
    return isNumber(event) || isDecimal(event) || isMinus(event);
}

/**
 * The event adds as character. Enter and Tab return false even though they
 * add characters in some situations. Safari always returns true as this cannot be practically
 * determined. */
export function addsCharacter({ key }) {
    if (isValidKey(key)) {
        // IE 11 named characters
        const names = [
            'Add',
            'Decimal',
            'Divide',
            'Multiply',
            'Spacebar',
            'Subtract',
        ];

        /* if event.key is one character it's assumed to be inserting a character
         * rather than some other type of action. */
        return key.length === 1 || names.indexOf(key) >= 0;
    }

    return true;
}

const keyboard = {
    isDecimal,
    isMinus,
    isNumber,
    isNumeric,
    addsCharacter,
};

export default keyboard;
