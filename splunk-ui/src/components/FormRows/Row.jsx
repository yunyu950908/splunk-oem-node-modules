import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { SortableHandle } from 'react-sortable-hoc';
import { omit } from 'lodash';
import { _ } from 'splunk-ui/util/i18n';
import CloseButton from 'splunk-ui/components/CloseButton';
import ScreenReaderContent from 'splunk-ui/components/ScreenReaderContent';
import css from './FormRows.css';


class Row extends Component {
    static propTypes = {
        /** @docs-ignore */
        children: PropTypes.node,
        /** @docs-ignore */
        className: PropTypes.string,
        /** Index of the row */
        index: PropTypes.number,
        /** @docs-ignore */
        onKeyDown: PropTypes.func,
        /** Callback when remove button is clicked. */
        onRequestRemove: PropTypes.func,
        /**
         * @docs-ignore
         * Sortable HOC consumes and removes `index`, so we have `rowIndex` to keep
         * track of it internally.
         */
        rowIndex: PropTypes.number,
        /** @docs-ignore */
        sortable: PropTypes.bool,
        /** The contents of Row */
        value: PropTypes.node,
    };

    static defaultProps = {
        sortable: true,
    };

    handleKeyDown = (e) => {
        this.props.onKeyDown(e, { index: this.props.rowIndex });
    }

    handleRequestRemove = (e) => {
        this.props.onRequestRemove(e, { index: this.props.rowIndex });
    }

    render() {
        const {
            children,
            sortable,
            ...otherProps
        } = this.props;
        const DragHandle = SortableHandle(() => (
            <div className={css.drag}>
                <ScreenReaderContent>
                    Press arrow up or arrow down to re-order items
                 </ScreenReaderContent>
            </div>
        ));
        /* eslint-disable jsx-a11y/no-static-element-interactions */
        return (
            <div
                className={css.row}
                data-sortable={sortable}
                onKeyDown={this.handleKeyDown}
                tabIndex={sortable ? 0 : undefined}
                {...omit(otherProps, ['onKeyDown', 'onRequestRemove', 'rowIndex'])}
            >
                { sortable && <DragHandle /> }
                { children }
                <CloseButton
                    className={css.button}
                    onClick={this.handleRequestRemove}
                    screenReaderText={_('Remove Row')}
                />
            </div>
        );
    }
}

export default Row;
