/* eslint-disable import/prefer-default-export */

export function isIE11() {
    return (!!navigator.userAgent.match(/Trident\/7\./));
}
