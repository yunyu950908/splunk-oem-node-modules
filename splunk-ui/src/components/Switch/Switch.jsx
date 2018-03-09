import React, { Component } from 'react';
import PropTypes from 'prop-types';
import guid from 'splunk-ui/util/guid';
import { _ } from 'splunk-ui/util/i18n';
import { keycode } from 'splunk-ui/util/keyboard';
import { createTestHook } from 'splunk-ui/util/testSupport';
import toClassName from 'splunk-ui/util/toClassName';
import Box from 'splunk-ui/components/Box';
import Clickable from 'splunk-ui/components/Clickable';
import Check from 'splunk-ui/icons/Check';
import ScreenReaderContent from 'splunk-ui/components/ScreenReaderContent';
import css from './Switch.css';

function noop() {}


/**
 * `Switch` is a basic form control with an on/off state. For a group of radio switches,
 * the `RadioList` component would typically be used instead of `Switch`.
 */
class Switch extends Component {
    static propTypes = {
        /**
        * The `radio` appearance is used to create `RadioList` and is not intended for use in an
        * individual switch.
        */
        appearance: PropTypes.oneOf(['radio', 'checkbox', 'toggle']),
        /** @docs-ignore. */
        children: PropTypes.node,
        /** @docs-ignore. */
        className: PropTypes.string,
        disabled: PropTypes.bool,
        /**
        * If `Switch` is not provided children as the label, an id can be provided for the control.
        * Set a label's for attribute to this id to link the two elements.
        */
        id: PropTypes.string,
        /** Make the control an inline block with variable width. */
        inline: PropTypes.bool,
        /**
        * If `Switch` is not provided children as the label, an id can be provided to
        * another element.
        */
        labelledBy: PropTypes.string,
        onClick: PropTypes.func,
        selected: PropTypes.bool,
        /**
        * The selected label is shown in a tooltip and to Screen Readers.
        */
        selectedLabel: PropTypes.string,
        /** The size of the text label. */
        size: PropTypes.oneOf(['small', 'medium']),
        /**
        * The unselected label is shown in a tooltip and to Screen Readers.
        */
        unselectedLabel: PropTypes.string,
        value: PropTypes.any.isRequired,
    };

    static defaultProps = {
        appearance: 'checkbox',
        disabled: false,
        inline: false,
        onClick: noop,
        selected: false,
        selectedLabel: _('Selected'),
        size: 'medium',
        unselectedLabel: _('Not selected'),
    };

    /**
    * Place focus on the toggle.
    */
    focus() {
        this.toggle.focus();
    }

    handleContainerClick = (e) => {
        this.props.onClick(e, { value: this.props.value });
    }

    handleKeyPress = (e) => {
        if (keycode(e) === 'space') {
            e.preventDefault();
            this.handleContainerClick(e);
        }
    }

    render() {
        const {
            appearance,
            children,
            className,
            disabled,
            id,
            inline,
            labelledBy,
            onClick, // eslint-disable-line no-unused-vars
            selected,
            selectedLabel,
            size,
            unselectedLabel,
            value, // eslint-disable-line no-unused-vars
            ...otherProps
        } = this.props;

        let labelId;
        if (children) {
            labelId = guid();
        } else if (labelledBy) {
            labelId = labelledBy;
        }

        let controlId;
        if (children) {
            controlId = guid();
        } else if (id) {
            controlId = id;
        }

        return (
            <Box
                flex
                inline={inline}
                className={toClassName(css.main, className)}
                onClick={!disabled && this.handleContainerClick}
                data-size={size}
                {...createTestHook(__filename)}
                {...otherProps}
            >
                <Clickable
                    className={css[appearance]}
                    disabled={disabled}
                    role={appearance === 'toggle' ? 'switch' : appearance}
                    aria-labelledby={labelId}
                    aria-checked={selected}
                    id={id}
                    ref={c => this.toggle = c}
                    title={selected ? selectedLabel : unselectedLabel}
                >
                    {selected && appearance === 'checkbox' && <Check inline={false} size={1} />}
                    {appearance === 'toggle' && <div className={css.indicator} />}
                    {appearance === 'toggle' && <div className={css.toggleFocus} />}
                </Clickable>

                {selected ?
                    <ScreenReaderContent>{selectedLabel}</ScreenReaderContent> :
                    <ScreenReaderContent>{unselectedLabel}</ScreenReaderContent>
                }
                {children && (
                    <label
                        className={css.label}
                        id={labelId}
                        htmlFor={controlId}
                        data-size={size}
                    >
                        {children}
                    </label>
                )}
            </Box>
        );
    }
}
export default Switch;
