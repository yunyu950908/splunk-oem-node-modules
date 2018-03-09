let internalTranlator;
export function gettext(...args) {
    return internalTranlator(...args);
}
export function _(...args) {
    return internalTranlator(...args);
}
export function setTranslator(newTranslator) {
    internalTranlator = newTranslator;
}
setTranslator(window.gettext || (message => message));
