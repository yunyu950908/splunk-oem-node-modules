import React, { Children, cloneElement, Component, isValidElement } from 'react';
import PropTypes from 'prop-types';
import { SortableContainer, SortableElement } from 'react-sortable-hoc';
import { noop } from 'lodash';
import { _ } from 'splunk-ui/util/i18n';
import { createTestHook } from 'splunk-ui/util/testSupport';
import Box from 'splunk-ui/components/Box';
import Button from 'splunk-ui/components/Button';
import PlusIcon from 'splunk-ui/icons/Plus';
import { keycode } from 'splunk-ui/util/keyboard';
import Row from './Row';
import css from './FormRows.css';

const SortableRow = SortableElement(Row);

const SortableList = SortableContainer(({ children }) => (
    <div className={css.rows}>
        { children }
    </div>
));

class FormRows extends Component {
    static propTypes = {
        /** Label on the Add Row Button. Ignored when menu prop is defined. */
        addLabel: PropTypes.string,
        /** @docs-ignore */
        children: PropTypes.node,
        /** @docs-ignore */
        className: PropTypes.string,
        /** Header for the rows. */
        header: PropTypes.node,
        /** Replaces Add Row Button with custom content or controls. */
        menu: PropTypes.node,
        /** Callback when add button is clicked. */
        onRequestAdd: PropTypes.func,
        /** Callback when sort action completes. Omit this to make rows unsortable. */
        onRequestMove: PropTypes.func,
        /** Callback when remove button is clicked. */
        onRequestRemove: PropTypes.func,
    };

    static defaultProps = {
        addLabel: _('Add Row'),
        header: null,
        onRequestAdd: noop,
        onRequestMove: noop,
        onRequestRemove: noop,
    };

    handleKeyDown = (e, { index }) => {
        if (e.currentTarget !== e.target) {
            return;
        }
        if (keycode(e) === 'up') {
            e.preventDefault();
            if (index > 0) {
                this.props.onRequestMove({
                    fromIndex: index,
                    toIndex: index - 1,
                });
            }
        } else if (keycode(e) === 'down') {
            e.preventDefault();
            if (index < this.props.children.length - 1) {
                this.props.onRequestMove({
                    fromIndex: index,
                    toIndex: index + 1,
                });
            }
        }
    }

    handleSortEnd = ({ oldIndex, newIndex }) => {
        this.props.onRequestMove({
            fromIndex: oldIndex,
            toIndex: newIndex,
        });
    }

    render() {
        const {
            addLabel,
            children,
            header,
            menu,
            onRequestAdd,
            onRequestMove,
            onRequestRemove,
            ...otherProps
        } = this.props;
        const sortable = onRequestMove !== noop;

        const clonedChildren = Children.toArray(children)
            .filter(isValidElement)
            .map(item => cloneElement(item, {
                onKeyDown: this.handleKeyDown,
                rowIndex: item.props.index,
                sortable,
            }));

        return (
            <Box
                className={css.main}
                {...createTestHook(__filename)}
                {...otherProps}
            >
                {header && <div className={sortable ? css.header : ''}>{header}</div>}
                <SortableList
                    helperClass={css.helperClass}
                    onSortEnd={this.handleSortEnd}
                    onRequestRemove={onRequestRemove}
                    sortable={sortable}
                    useDragHandle
                >
                    { clonedChildren }
                </SortableList>
                {menu || (
                    <Button
                        appearance="pill"
                        icon={<PlusIcon />}
                        label={addLabel}
                        onClick={onRequestAdd}
                    />
                )
                }
            </Box>
        );
    }
}

FormRows.Row = SortableRow;
export default FormRows;
