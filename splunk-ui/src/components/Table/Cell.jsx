import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { createTestHook } from 'splunk-ui/util/testSupport';
import { keycode } from 'splunk-ui/util/keyboard';
import toClassName from 'splunk-ui/util/toClassName';
import css from './Cell.css';

function noop() {}


class Cell extends Component {
    static splunkUiType = 'Table.Cell';

    static propTypes = {
        /** Align the text in the cell. */
        align: PropTypes.oneOf(['left', 'center', 'right']),
        /** @docs-ignore. */
        children: PropTypes.node,
        /** @docs-ignore. */
        className: PropTypes.string,
        /** @docs-ignore. This will be passed through, and will work as expected. */
        onClick: PropTypes.func,
        /** @docs-ignore. This will be passed through, and will work as expected. */
        onKeyDown: PropTypes.func,
    };

    static defaultProps = {
        align: 'left',
        onClick: noop,
        onKeyDown: noop,
    };

    handleKeyDown = (e) => {
        const { onClick, onKeyDown } = this.props;
        if (keycode(e) === 'enter') {
            onClick(e);
        }
        onKeyDown(e);
    }

    render() {
        const {
            align,
            children,
            className,
            onKeyDown, // eslint-disable-line no-unused-vars
            ...other
        } = this.props;
        /* eslint-disable jsx-a11y/no-static-element-interactions */
        return (
            <td
                className={toClassName(css.main, className)}
                onKeyDown={this.handleKeyDown}
                data-text-align={align}
                {...createTestHook(__filename)}
                {...other}
            >
                {children}
            </td>
        );
        /* eslint-enable jsx-a11y/no-static-element-interactions */
    }
}

export default Cell;
