import React from 'react';
import PropTypes from 'prop-types';
import { createTestHook } from 'splunk-ui/util/testSupport';
import toClassName from 'splunk-ui/util/toClassName';
import css from './Step.css';

const propTypes = {
    /** @docs-ignore */
    children: PropTypes.node,
    /** @docs-ignore */
    className: PropTypes.string,
    /** @docs-ignore. */
    isFirst: PropTypes.bool,
    /** @docs-ignore. */
    isLast: PropTypes.bool,
    /** @docs-ignore. Is the tab active. */
    status: PropTypes.oneOf(['prev', 'active', 'next']),
    /**
     * A unique id for this step and used by the StepBar to keep track of the open Step.
     * Defaults to a zero-based index matching the component's position in StepBar.
     */
    stepId: PropTypes.any,
};

const defaultProps = {
    status: 'next',
    isLast: false,
    isFirst: false,
};

export default function Step(props) {
    const { children, className, isFirst, isLast, status, stepId, ...otherProps } = props;
    const classes = toClassName(css.main, className);

    return (
        <li
            className={classes}
            data-status={status}
            data-step-id={stepId}
            {...createTestHook(__filename)}
            {...otherProps}
        >
            <svg
                className={css.svg}
                data-status={status}
                focusable="false"
                width="100%"
                height="15px"
                viewBox="0 0 100 15"
                preserveAspectRatio="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <rect
                    x={isFirst ? '50' : '0'}
                    y="6"
                    width={isLast || isFirst ? '50%' : '100%'}
                    height="3"
                    className={css.gray}
                />
                {status === 'active' && !isFirst && (
                    <rect x="0" y="6" width="50%" height="3" className={css[status]} />
                )}
                {status === 'prev' && (
                    <rect
                        x={isFirst ? '50%' : '0'}
                        y="6"
                        width="100%"
                        height="3"
                        className={css[status]}
                    />
                )}
            </svg>
            <svg
                className={css.svg}
                data-status={status}
                focusable="false"
                width="100%"
                height="15px"
                viewBox="0 0 15 15"
                xmlns="http://www.w3.org/2000/svg"
            >
                {status !== 'next' && (
                    <circle cx="50%" cy="50%" r="7.5" className={css[status]} />
                )}
                {status === 'next' && (
                    <circle cx="50%" cy="50%" r="6" className={css.next} />
                )}
            </svg>
            {children}
        </li>
    );
}

Step.propTypes = propTypes;
Step.defaultProps = defaultProps;
