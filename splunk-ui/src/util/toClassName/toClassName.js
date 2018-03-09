
/**
 * A simple utility for conditionally joining class names together for React components.
 * Adapted from https://github.com/JedWatson/toClassName.
 * @param {...Any}
 * @returns {String} className suitable for a React component.
 */
export default function toClassName(...args) {
    return args.reduce((accum, arg) => {
        if (!arg) {
            return accum;
        }
        const argType = typeof arg;
        if (argType === 'string') {
            accum.push(arg);
        } else if (Array.isArray(arg)) {
            accum.push(toClassName(...arg));
        } else if (argType === 'object') {
            return accum.concat(Object.keys(arg).filter(key => arg[key]));
        }
        return accum;
    }, []).join(' ');
}
