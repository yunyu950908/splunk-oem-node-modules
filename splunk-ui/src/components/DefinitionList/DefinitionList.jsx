import React, { Children, cloneElement, isValidElement } from 'react';
import PropTypes from 'prop-types';
import { createTestHook } from 'splunk-ui/util/testSupport';
import toClassName from 'splunk-ui/util/toClassName';
import Description from './Description';
import Term from './Term';
import css from './DefinitionList.css';

const propTypes = {
    /** @docs-ignore */
    children: PropTypes.node,
    /** @docs-ignore */
    className: PropTypes.string,
    /**
     * The width of an entry in the list in pixels.
     */
    termWidth: PropTypes.number,
};

const defaultProps = {
    termWidth: 120,
};

function processChildren(props) {
    const { children, termWidth } = props;

    return Children.toArray(children)
        .filter(isValidElement)
        .map((child) => {
            let childProps;
            switch (child.type) {
                case Term:
                    childProps = { style: { width: termWidth } };
                    break;
                case Description:
                    childProps = { style: { marginLeft: termWidth + 5 } };
                    break;
                default:
                    childProps = {};
            }
            return cloneElement(child, childProps);
        });
}

export default function DefinitionList(props) {
    const { children, className, termWidth, ...otherProps } = props; // eslint-disable-line no-unused-vars, max-len
    return (
        <dl
            className={toClassName(css.main, className)}
            {...createTestHook(__filename)}
            {...otherProps}
        >
            {processChildren(props)}
        </dl>
    );
}

DefinitionList.propTypes = propTypes;
DefinitionList.defaultProps = defaultProps;

DefinitionList.Description = Description;
DefinitionList.Term = Term;
