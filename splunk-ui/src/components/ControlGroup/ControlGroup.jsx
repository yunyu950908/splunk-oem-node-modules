/* eslint-disable no-use-before-define */
import React, { Children, cloneElement, isValidElement } from 'react';
import PropTypes from 'prop-types';
import { clone, isUndefined, isFinite } from 'lodash';
import guid from 'splunk-ui/util/guid';
import { createTestHook } from 'splunk-ui/util/testSupport';
import toClassName from 'splunk-ui/util/toClassName';
import Box from 'splunk-ui/components/Box';
import Tooltip from 'splunk-ui/components/Tooltip';
import css from './ControlGroup.css';

const propTypes = {
    /** @docs-ignore */
    children: PropTypes.node,
    /** @docs-ignore */
    className: PropTypes.string,
    controlsLayout: PropTypes.oneOf(['fill', 'fillJoin', 'none', 'stack']),
    /**
    * Highlight the control group as having an error. The label and help text will turn red,
    * but the children are not affected.
    */
    error: PropTypes.bool,
    /* The help text or content displayed below the control. */
    help: PropTypes.node,
    label: PropTypes.string.isRequired,
    labelPosition: PropTypes.oneOf(['left', 'top']),
    /**
    * When labelPosition is left, the width of the label in pixels or a value with a unit.
    */
    labelWidth: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    /** The size of the text label. */
    size: PropTypes.oneOf(['small', 'medium']),
    tooltip: PropTypes.node,
};

const defaultProps = {
    controlsLayout: 'fill',
    error: false,
    label: 'Label',
    labelPosition: 'left',
    labelWidth: 120,
    size: 'medium',
};


/**
* ControlGroup places a label and optional help text around one or more controls. The ControlGroup
* will automatically add aria attributes to associate the controls with the labels and help text to
* address accessibility requirements.
*
* ControlGroup provides layouts to assist in aligning and laying out controls, but the defaults are
* not helpful in all cases, nor will the layout options address all cases. Consider setting
* controlsLayout to none and manually positioning the controls as required.
*/
export default function ControlGroup(props) {
    const {
        children,
        className,
        controlsLayout,
        error,
        help,
        label,
        labelPosition,
        labelWidth,
        size,
        tooltip,
        ...otherProps
    } = props;

    const controlId = guid();
    const labelId = `${controlId}-label`;
    const helpId = `${controlId}-help`;

    // Converts control layout type to class name: e.g. stack -> controlsStack
    const layoutType = `${controlsLayout.charAt(0).toUpperCase()}${controlsLayout.slice(1)}`;

    // Clean the Children
    function cloneWithProps(item, i) {
        if (!isValidElement(item)) {
            return item;
        }

        const count = Children.count(children);
        const cloneProps = {
            key: (item.key || i),
        };

        function shouldApplyProp(propName) {
            // Must support prop
            if (!item.type || !item.type.propTypes || !item.type.propTypes[propName]) {
                return false;
            }

            //  Must not have been change from the default.
            if (!item.type.defaultProps || !item.props || isUndefined(item.props[propName])) {
                return true;
            }

            return (item.props[propName] === item.type.defaultProps[propName]);
        }

        if (controlsLayout === 'fillJoin' && shouldApplyProp('prepend') && i > 0) {
            cloneProps.prepend = true;
        }

        if (controlsLayout === 'fillJoin' && shouldApplyProp('append') && i < (count - 1)) {
            cloneProps.append = true;
        }

        if (controlsLayout === 'fill' && shouldApplyProp('inline') && count > 1) {
            cloneProps.inline = true;
        }

        if (shouldApplyProp('labelledBy')) {
            cloneProps.labelledBy = labelId;
        }

        if (shouldApplyProp('describedBy') && props.help) {
            cloneProps.describedBy = helpId;
        }

        if (count === 1 && (controlsLayout === 'fillJoin' || controlsLayout === 'fill')) {
            cloneProps.style = item.props.style ? clone(item.props.style) : {};
            cloneProps.style.flexGrow = 1; // some controls like Select do not grow by default
        }

        return cloneElement(item, cloneProps);
    }
    const childrenFormatted = Children.map(children, cloneWithProps);

    if (error) {
        otherProps['aria-invalid'] = true;
    }

    const labelWidthStyle = labelPosition === 'left' ? { width: labelWidth } : null;
    const labelWidthString = isFinite(labelWidth) ? `${labelWidth}px` : labelWidth;
    const contentMarginStyle = labelPosition === 'left' ?
        { marginLeft: `calc(${labelWidthString} + 20px)` } : null;

    // Render
    return (
        <Box
            className={toClassName(css.main, className)}
            {...createTestHook(__filename)}
            {...otherProps}
        >
            <div
                className={labelPosition === 'left' ? css.labelLeft : css.label}
                data-size={size}
                id={labelId}
                style={labelWidthStyle}
            >
                {label}
                {tooltip && <Tooltip content={tooltip} />}
            </div>
            <Box
                className={toClassName(layoutType === 'stack' && css.controlsStack)}
                flex={controlsLayout !== 'none'}
                style={contentMarginStyle}
                data-role="controls"
            >
                {childrenFormatted}
            </Box>
            {help && (
                <div
                    className={css.help}
                    id={helpId}
                    style={contentMarginStyle}
                >
                    {help}
                </div>
            )}
        </Box>
    );
}

ControlGroup.propTypes = propTypes;
ControlGroup.defaultProps = defaultProps;
