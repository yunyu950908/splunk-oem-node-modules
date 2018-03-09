import React from 'react';
import PropTypes from 'prop-types';
import { createTestHook } from 'splunk-ui/util/testSupport';
import toClassName from 'splunk-ui/util/toClassName';
import { isUndefined, isString } from 'lodash';
import css from './SVG.css';

const propTypes = {
    /* @docs-ignore */
    children: PropTypes.node,
    /** @docs-ignore */
    className: PropTypes.string,
    /**
    *  This defaults to the value of the size prop. Height can be defined as a number of ems, or as
    * a string with any other unit.
    */
    height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    /**
    * Setting inline to false will remove vertical-align: middle, and center the icon horizonatally.
    */
    inline: PropTypes.bool,
    /** A string to display to screen readers instead of the 'icon' value. Set the prop to null or
     * an empty string to hide the icon from screen readers, such as when there is already a text
     * label beside the icon. All icons have a default value that matches the icon name. */
    screenReaderText: PropTypes.oneOfType([PropTypes.string, PropTypes.oneOf(['null'])]),
    /**
    * For convenience, the size prop the value for width or height (which ever is larger), and
    * scales the other dimension proportionally.
    * The default size of 0.75 makes the icon a similar size as the font
    * size. Size can be defined as a number of ems, or as a string with any other unit.
    */
    size: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    /**
    * This defaults to the value of the size prop. Width can be defined as  a number of ems, or as
    * a string with any other unit.
    */
    width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    /** @docs-ignore . */
    viewBox: PropTypes.string,
    /**
    * By default, the aspect ratio is preserved and the height and width define a max dimension,
    * and the icon is centered in the space. These are the standard svg values.  */
    preserveAspectRatio: PropTypes.oneOf(['none', 'xMinYMin', 'xMidYMin', 'xMaxYMin', 'xMinYMid',
        'xMidYMid', 'xMaxYMid', 'xMinYMax', 'xMidYMax', 'xMaxYMax']),
};

const defaultProps = {
    inline: true,
    size: 0.75,
    viewBox: '0 0 1500 1500',
    preserveAspectRatio: 'xMidYMid',
};

function SVG(props) {
    const {
        children,
        className,
        height,
        inline,
        preserveAspectRatio,
        screenReaderText,
        size,
        width,
        viewBox,
        ...otherProps
    } = props;

    const sizeValue = parseFloat(size);
    const sizeUnit = isString(size) ? size.match(/[^\d]+/) : 'em';

    const vbHeight = parseInt(viewBox.split(' ')[3], 10);
    const vbWidth = parseInt(viewBox.split(' ')[2], 10);
    const maxDimension = Math.max(vbWidth, vbHeight);

    const cHeight = isUndefined(height) ? (vbHeight / maxDimension) * sizeValue : height;
    const cWidth = isUndefined(width) ? (vbWidth / maxDimension) * sizeValue : width;

    return (
        <svg
            className={toClassName(inline ? css.inline : css.block, className)}
            focusable={false}
            height={isString(cHeight) ? cHeight : `${cHeight.toFixed(4)}${sizeUnit}`}
            width={isString(cWidth) ? cWidth : `${cWidth.toFixed(4)}${sizeUnit}`}
            viewBox={viewBox}
            aria-hidden={!screenReaderText}
            preserveAspectRatio={preserveAspectRatio}
            xmlns="http://www.w3.org/2000/svg"
            {...createTestHook(__filename)}
            {...otherProps}
        >
            {screenReaderText && <title>{screenReaderText}</title>}
            {children}
        </svg>
    );
}
export default SVG;

SVG.propTypes = propTypes;
SVG.defaultProps = defaultProps;
