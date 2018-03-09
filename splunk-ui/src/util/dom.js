// https://github.com/callemall/material-ui/blob/master/src/utils/dom.js
export default {

    isDescendant(parent, child) {
        let node = child.parentNode;

        while (node !== null) {
            if (node === parent) return true;
            node = node.parentNode;
        }

        return false;
    },

    offset(el) {
        const rect = el.getBoundingClientRect();
        return {
            top: rect.top + window.pageYOffset,
            left: rect.left + window.pageXOffset,
        };
    },

};
