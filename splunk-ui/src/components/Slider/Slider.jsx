import React, { Component } from 'react';
import PropTypes from 'prop-types';
import toClassName from 'splunk-ui/util/toClassName';
import EventListener from 'react-event-listener';
import { createTestHook } from 'splunk-ui/util/testSupport';
import { has, noop, omit } from 'lodash';
import { invariant } from 'splunk-ui/util/errorHandling';
import { keycode } from 'splunk-ui/util/keyboard';
import Tooltip from 'splunk-ui/components/Tooltip';
import Box from 'splunk-ui/components/Box';
import css from './Slider.css';

class Slider extends Component {

    static propTypes = {
        /** @docs-ignore */
        className: PropTypes.string,
        /** Set this property instead of value to make value uncontrolled. */
        defaultValue: PropTypes.number,
        /** When false, display as inline-block with the default width. */
        inline: PropTypes.bool,
        /** The minimum value of the Slider input. */
        min: PropTypes.number,
        /** The maximum value of the Slider input. */
        max: PropTypes.number,
        /** Return event and data object with slider value */
        onChange: PropTypes.func,
        /** The step value of the Slider input. */
        step: PropTypes.number,
        /** The value of the slider.
        * Setting this value makes the property controlled. A callback is required. */
        value: PropTypes.number,
    };

    static defaultProps = {
        inline: false,
        min: 1,
        max: 5,
        onChange: noop,
        step: 1,
    };

    constructor(props, ...rest) {
        super(props, ...rest);

        this.controlledExternally = has(props, 'value');

        const defValue = has(props, 'defaultValue') ?
            props.defaultValue :
            this.roundValue((props.max - props.min) / 2);

        this.state = {
            selected: false,
            showTooltip: false,
            position: this.valueToPosition(this.isControlled() ? this.props.value : defValue),
            value: this.isControlled() ? null : defValue,
        };

        if (__DEV__ && this.isControlled() && has(props, 'defaultValue')) {
            invariant('defaultValue prop is not compatible with value prop.');
        }

        if (props.min >= props.max && __DEV__) {
            invariant('Error in Slider: max must be greater than min');
        }
    }

    componentDidMount() {
        this.width = this.sliderBar.clientWidth;
        this.thumbRadius = this.sliderThumb.clientWidth / 2;
    }

    componentWillReceiveProps(nextProps) {
        if (__DEV__ && !this.isControlled() && has(nextProps, 'value')) {
            invariant(`Cannot change Slider from an uncontrolled component to a controlled
    one. Prop 'value' is not valid in subsequent updates if not provided in the initial props.`);
        }

        if (__DEV__ && nextProps.defaultValue !== this.props.defaultValue) {
            invariant('Cannot change defaultValue after set.');
        }
        this.setState({
            position: this.valueToPosition(nextProps.value),
        });
    }

    getValue() {
        return this.isControlled() ? this.props.value : this.state.value;
    }

    setValue(e, value) {
        this.setState({
            value: this.isControlled() ? null : value,
        }, () => {
            if (this.getValue() !== value) {
                this.props.onChange(e, { value });
            }
            this.snapToPosition();
        });
    }

    isControlled() {
        return this.controlledExternally;
    }

    checkPositionBounds = (pos) => {
        if (pos > 100) {
            return 100;
        } else if (pos < 0) {
            return 0;
        }
        return pos;
    }

    checkValueBounds = (val) => {
        if (val > this.props.max) {
            return this.props.max;
        } else if (val < this.props.min) {
            return this.props.min;
        }
        return val;
    }

    handleBlur = () => {
        this.setState({
            showTooltip: false,
        });
    }

    handleClick = (e) => {
        const pos = this.percentageFromEvent(e);
        const val = this.roundValue(this.positionToValue(pos));
        this.setValue(e, val);
    }

    handleFocus = () => {
        this.setState({
            showTooltip: true,
        });
    }

    handleKeyDown = (e) => {
        const step = this.props.step;
        let val = this.getValue();
        if (keycode(e) === 'right') {
            val = this.checkValueBounds(val + step);
        } else if (keycode(e) === 'left') {
            val = this.checkValueBounds(val - step);
        } else {
            return;
        }
        val = this.roundValue(val);
        this.setValue(e, val);
    }

    handleMouseDown = (e) => {
        e.preventDefault();
        this.sliderThumb.focus();
        this.setState({
            selected: true,
            showTooltip: true,
        });
    }

    handleMouseEnter = () => {
        this.setState({
            showTooltip: true,
        });
    }

    handleMouseLeave = () => {
        if (!this.state.selected) {
            this.setState({
                showTooltip: false,
            });
        }
    }

    handleMouseMove = (e) => {
        if (this.state.selected) {
            const pos = this.percentageFromEvent(e);

            this.setValue(e, this.roundValue(this.positionToValue(pos)));
            this.setState({
                position: pos,
            }, this.props.onChange(e, { value: this.getValue() }));
        }
    }

    handleMouseUp = () => {
        this.setState({
            selected: false,
            showTooltip: false,
        }, this.snapToPosition);
        this.sliderThumb.blur();
    }

    percentageFromEvent = (e) => {
        const offset = e.clientX - this.sliderBar.getBoundingClientRect().left;
        return this.checkPositionBounds((offset / this.width) * 100);
    }

    positionToValue = (pos) => {
        const valRange = this.props.max - this.props.min;
        return ((pos / 100) * valRange) + this.props.min;
    }

    roundValue = (val) => {
        const step = this.props.step;
        const times = Math.round(val / step);
        const newVal = step * times;

        const decPlace = (String(step).split('.')[1] || []).length;
        const pow = Math.pow(10, decPlace); // eslint-disable-line no-restricted-properties

        return Math.floor(newVal * pow) / pow;
    }

    snapToPosition = () => {
        this.setState({
            position: this.valueToPosition(this.getValue()),
        });
    }


    valueToPosition = (val) => {
        const valRange = this.props.max - this.props.min;
        return ((val - this.props.min) / valRange) * 100;
    }

    render() {
        const { className, min, max, ...otherProps } = this.props;
        const boxProps = omit(otherProps, ['step', 'value']);
        /* eslint-disable jsx-a11y/no-static-element-interactions */
        return (
            <Box
                className={toClassName(css.main, className)}
                flex
                {...createTestHook(__filename)}
                {...boxProps}
            >
                { this.state.selected &&
                    <EventListener
                        onMouseUp={this.handleMouseUp}
                        onMouseMove={this.handleMouseMove}
                        onResize={this.handleResize}
                        target="window"
                    />
                }
                <Box className={css.minLabel}>
                    {min}
                </Box>
                <div
                    className={css.input}
                    data-attribute="sliderBarWrapper"
                    onClick={this.handleClick}
                >
                    <div
                        className={css.sliderBar}
                        ref={el => this.sliderBar = el}
                    />
                    <Tooltip
                        className={css.tooltip}
                        content={this.getValue()}
                        open={this.state.showTooltip}
                        style={{ left: `${this.state.position}%` }}
                    >
                        <div
                            className={css.sliderThumb}
                            onBlur={this.handleBlur}
                            onMouseEnter={this.handleMouseEnter}
                            onMouseLeave={this.handleMouseLeave}
                            onKeyDown={this.handleKeyDown}
                            onMouseDown={this.handleMouseDown}
                            onFocus={this.handleFocus}
                            ref={el => this.sliderThumb = el}
                            tabIndex="0"
                        />
                    </Tooltip>
                </div>
                <Box className={css.maxLabel}>
                    {max}
                </Box>
            </Box>
        );
        /* eslint-enable jsx-a11y/no-static-element-interactions */
    }
}

export default Slider;
