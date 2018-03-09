/* eslint-disable no-console */
/**
 * The objective of this utility is to funnel all error handling through a single module. This will
 * enable us to do a variety of things with errors, like manipulate the messages, or log them
 * somewhere.
 *
 * Currently this module only cleans up the error messages by removing excess whitespace and
 * thereby enabling multi-line strings in error messages to be displayed correctly in the console.
 */

function cleanMessage(message) {
    return message.replace(/\s+/g, ' ');
}

/**
 * Warnings do not block the execution of code. Use to provide developer feedback on best practices.
 */
export function warning(message) {
    if (console && console.error) {
        console.error(cleanMessage(message));
    } else {
        try {
            throw new Error(cleanMessage(message));
        } catch (e) {} // eslint-disable-line no-empty
    }
}

/**
 * Invariant blocks execution of the code. Use when something has truly gone wrong, and the code
 * path needs to be stopped immediately and completely.
 */
export function invariant(message) {
    throw new Error(cleanMessage(message));
}
