// Hard code Number.MIN_SAFE_INTEGER since it is not supported in IE, opera and safari
const MIN_SAFE_INTEGER = -9007199254740991;
// Hard code Number.MAX_SAFE_INTEGER since it is not supported in IE, opera and safari
const MAX_SAFE_INTEGER = 9007199254740991;


export default {
    isLessThanMinSafeInt(number) {
        if (typeof number !== 'number') return false;
        if (number <= MIN_SAFE_INTEGER) {
            return true;
        }
        return false;
    },
    isGreaterThanMaxSafeInt(number) {
        if (typeof number !== 'number') return false;
        if (number >= MAX_SAFE_INTEGER) {
            return true;
        }
        return false;
    },
};
