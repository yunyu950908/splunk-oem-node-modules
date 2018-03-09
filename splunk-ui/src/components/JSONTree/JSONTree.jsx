import React from 'react';
import PropTypes from 'prop-types';
import { tokenize } from 'splunk-ui/util/syntax';
import { repeat, noop } from 'lodash';
import { createTestHook } from 'splunk-ui/util/testSupport';
import toClassName from 'splunk-ui/util/toClassName';

import JSONTreeNode from './JSONTreeNode';
import css from './JSONTree.css';

const propTypes = {
    /** @docs-ignore **/
    className: PropTypes.string,
    /**
     * the json object we want to display.
     **/
    json: PropTypes.object,
    /**
     * number of indent space, default to 4.
     **/
    indent: PropTypes.number,
    /**
     * event handler for click value, function signature: onClickValue({key, value}).
     * key: the full path of the value you clicked,
     * value: the value you clicked.
     **/
    onClickValue: PropTypes.func,
    /**
     * expandChildren indicate that whether JSON tree should expand at each level.
     * default to false, means JSON tree will expand the first level, and collapse the rest levels.
     **/
    expandChildren: PropTypes.bool,
};

const defaultProps = {
    json: {},
    indent: 4,
    expandChildren: false,
    onClickValue: noop,
};


function buildHierarchyTokens(tokens, start) {
    const result = [];
    for (let i = start; i < tokens.length; i += 1) {
        const token = tokens[i];
        if (token.content === '{' || token.content === '[') {
            if (result.length === 0) {
                result.push(token);
            } else {
                const { array, nextIdx } = buildHierarchyTokens(tokens, i);
                result.push(array);
                i = nextIdx;
            }
        } else if (token.content === '}' || token.content === ']') {
            result.push(token);
            return { array: result, nextIdx: i };
        } else {
            if (token.type === 'property') {
                token.content = token.content.replace(/^"|"$/g, '');
            }
            result.push(token);
        }
    }
    return result;
}

/**
 * JSONTree can be used to display JSON object. will always be expanded for the first level.
 * and collapsed for the rest.
 **/
export default function JSONTree(props) {
    const { className, json, indent, onClickValue, expandChildren, ...otherProps } = props;
    const value = JSON.stringify(json, null, repeat(' ', indent));
    const tokens = buildHierarchyTokens(tokenize(value, 'json'), 0);
    return (
        <code
            className={toClassName(css.main, className)}
            data-language="language-json"
            {...createTestHook(__filename)}
            {...otherProps}
        >
            <JSONTreeNode
                defaultOpen
                expandChildren={expandChildren}
                tokens={tokens.array}
                onClickValue={onClickValue}
            />
        </code>
    );
}
JSONTree.propTypes = propTypes;
JSONTree.defaultProps = defaultProps;
