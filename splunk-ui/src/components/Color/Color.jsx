import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { has, trimStart, noop, omit } from 'lodash';
import { invariant } from 'splunk-ui/util/errorHandling';
import { keycode } from 'splunk-ui/util/keyboard';
import toClassName from 'splunk-ui/util/toClassName';
import { createTestHook } from 'splunk-ui/util/testSupport';
import Button from 'splunk-ui/components/Button';
import Dropdown from 'splunk-ui/components/Dropdown';
import Text from 'splunk-ui/components/Text';
import ScreenReaderContent from 'splunk-ui/components/ScreenReaderContent';
import Swatch from './Swatch';
import css from './Color.css';

class Color extends Component {
    static propTypes = {
        /** Append removes border from the right side. */
        append: PropTypes.bool,
        /** @docs-ignore */
        className: PropTypes.string,
        /** Set this property instead of value to make value uncontrolled. */
        defaultValue: PropTypes.string,
        /** Add a disabled attribute and prevent clicking. */
        disabled: PropTypes.bool,
        /** Add an error attribute. */
        error: PropTypes.bool,
        /**
         * The value of the color (hexadecimal). Setting this value makes the property controlled.
          A callback is required.
         */
        value: PropTypes.string,
        /** An array of optional color swatch values (hexadecimal). */
        palette: PropTypes.array,
        /** This has no affect on the appearance at this time but is recommend to be used when a
         * control is joined to the left. Styles may change in the future. */
        prepend: PropTypes.bool,
        /** A callback that receives the value of a newly selected color. */
        onChange: PropTypes.func,
        /** The size of the swatch. */
        size: PropTypes.oneOf(['small', 'medium']),
    };

    static defaultProps = {
        append: false,
        disabled: false,
        error: false,
        onChange: noop,
        palette: [],
        prepend: false,
        size: 'medium',
    };

    static isValidHEX(value) {
        return /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(value);
    }

    constructor(props, ...rest) {
        super(props, ...rest);
        this.controlledExternally = has(props, 'value');
        const value = props.defaultValue || '';
        this.state = {
            value,
            displayValue: value,
            open: false,
        };
        if (__DEV__ && this.isControlled() && has(props, 'defaultValue')) {
            invariant('defaultValue prop is not compatible with value prop.');
        }
    }

    componentWillReceiveProps(nextProps) {
        if (__DEV__ && !this.isControlled() && has(nextProps, 'value')) {
            invariant(`Cannot change Color from an uncontrolled component to a controlled
                one. Prop 'value' is not valid in subsequent updates if not provided in the
                initial props.`);
        }
        if (__DEV__ && nextProps.defaultValue !== this.props.defaultValue) {
            invariant('Cannot change defaultValue after set.');
        }
    }

    isControlled() {
        return this.controlledExternally;
    }

    /**
     * Place focus on the input.
     */
    focus() {
        this.dropdown.focus();
    }

    handleSwatchClick = (e, { value }) => {
        const hasColorChanged = (value !== this.state.value);
        if (!this.isControlled()) {
            this.setState({ value });
        }
        this.setState({ open: false });
        if (hasColorChanged) {
            this.props.onChange({ value });
        }
        this.focus();
        e.preventDefault();
    }

    handleTextChange = (e, { value }) => {
        this.setState({ displayValue: `#${value}` });
    }

    handleTextKeyDown = (e) => {
        if (keycode(e) === 'enter') {
            this.handleRequestClose({ reason: 'enterKey' });
            this.focus();
            e.preventDefault();
        }
    }

    handleButtonClick = (e) => {
        this.handleRequestClose({ reason: 'buttonClick' });
        this.focus();
        e.preventDefault();
    }

    handleRequestClose = ({ reason }) => {
        const value = this.state.displayValue;
        if (reason !== 'contentClick') {
            this.setState({ open: false });
        }
        if (reason !== 'escapeKey') {
            this.submitValue(value);
        }
    }

    submitValue(value) {
        if (Color.isValidHEX(value)) {
            const hasColorChanged = (value !== this.state.value);
            if (!this.isControlled()) {
                this.setState({ value });
            }
            if (hasColorChanged) {
                this.props.onChange({ value });
            }
        }
    }

    handleRequestOpen = () => {
        const displayValue = this.isControlled() ? this.props.value : this.state.value;
        this.setState({ displayValue, open: true }, () => this.text.focus());
    }

    renderInput() {
        const displayValue = this.state.displayValue;
        return (
            <div className={css.input} data-role="textbox">
                <Button className={css.button} append disabled>#</Button>
                <Text
                    append
                    prepend
                    onKeyDown={this.handleTextKeyDown}
                    onChange={this.handleTextChange}
                    ref={(c) => { this.text = c; }}
                    value={trimStart(displayValue, '#')}
                />
                <Swatch
                    onClick={this.handleButtonClick}
                    value={displayValue}
                    tabIndex="-1"
                    prepend
                >
                    <ScreenReaderContent>Apply Color</ScreenReaderContent>
                </Swatch>
            </div>
        );
    }

    renderPalette() {
        return (
            <ul className={css.swatches}>
                {this.props.palette.map(value => (
                    <li key={value} className={css.swatch}>
                        <Swatch value={value} onClick={this.handleSwatchClick} />
                    </li>
                ))}
            </ul>
        );
    }

    render() {
        const { className, disabled, error, size, value } = this.props;
        const displayValue = this.isControlled() ? value : this.state.value;
        const toggle = (
            <Swatch
                aria-invalid={error || null}
                disabled={disabled}
                size={size}
                value={displayValue}
            />
        );
        return (
            <Dropdown
                closeReasons={['clickAway', 'escapeKey', 'offScreen', 'toggleClick']}
                toggle={toggle}
                open={this.state.open}
                className={toClassName(css.main, className)}
                onRequestClose={this.handleRequestClose}
                onRequestOpen={this.handleRequestOpen}
                ref={(c) => { this.dropdown = c; }}
                retainFocus
                {...createTestHook(__filename)}
                {...omit(this.props, Object.keys(Color.propTypes))}
            >
                <div className={css.dropdown}>
                    {this.renderPalette()}
                    {this.renderInput()}
                </div>
            </Dropdown>
        );
    }
}

export default Color;
