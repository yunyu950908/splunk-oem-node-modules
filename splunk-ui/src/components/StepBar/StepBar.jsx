import React, { Children, cloneElement, isValidElement } from 'react';
import PropTypes from 'prop-types';
import { createTestHook } from 'splunk-ui/util/testSupport';
import toClassName from 'splunk-ui/util/toClassName';
import Step from './Step';
import css from './StepBar.css';

const propTypes = {
    /** The `stepId` of the `StepBar.Step` to activate. */
    activeStepId: PropTypes.any.isRequired,
    /**
     * `children` should be `StepBar.Step`.
     **/
    children: PropTypes.node,
    /** @docs-ignore */
    className: PropTypes.string,
    /**
    * Setting inline to true will make the Step Bar inline element. It will assume it's minimum
    * width.
    */
    inline: PropTypes.bool,
};

const defaultProps = {
    inline: false,
};

export default function StepBar(props) {
    let activeIndex = 0;
    let foundActive = false;
    const { activeStepId, className, children, inline, ...otherProps } = props;
    const validChildren = Children.toArray(children).filter(isValidElement);
    const lastChildIndex = validChildren.length - 1;
    const clonedChildren = validChildren.map((child, idx) => {
        const stepId = child.props.stepId || idx;
        const active = activeStepId === stepId;
        const childProps = { status: 'prev' };
        if (foundActive) {
            childProps.status = 'next';
        }
        if (active) {
            childProps.status = 'active';
            foundActive = true;
            activeIndex = idx;
        }
        if (idx === 0) {
            childProps.isFirst = true;
        }
        if (idx === lastChildIndex) {
            childProps.isLast = true;
        }
        return cloneElement(child, childProps);
    });
    return (
        <ul
            className={toClassName(css.main, className)}
            data-inline={inline || null}
            role="progressbar"
            aria-valuemin="1"
            aria-valuemax={lastChildIndex + 1}
            aria-valuenow={activeIndex + 1}
            {...createTestHook(__filename)}
            {...otherProps}
        >
            {clonedChildren}
        </ul>
    );
}

StepBar.propTypes = propTypes;
StepBar.defaultProps = defaultProps;
StepBar.Step = Step;
