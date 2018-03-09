import React, { Children, cloneElement, Component, isValidElement } from 'react';
import PropTypes from 'prop-types';
import { has } from 'lodash';
import { invariant } from 'splunk-ui/util/errorHandling';
import { createTestHook } from 'splunk-ui/util/testSupport';
import toClassName from 'splunk-ui/util/toClassName';
import Box from 'splunk-ui/components/Box';
import Option from './Option';
import css from './RadioList.css';

function noop() {}

class RadioList extends Component {
    static propTypes = {
        /**
         * `children` should be `RadioList.Option`s.
         **/
        children: PropTypes.node,
        /** @docs-ignore. */
        className: PropTypes.string,
        /**
         * Set this property instead of value to make value uncontrolled. */
        defaultValue: PropTypes.any,
        /**
         * The id of the description. When placed in a ControlGroup, this automatically set to the
         * ControlGroup's help component.
         */
        describedBy: PropTypes.string,
        disabled: PropTypes.bool,
        /**
         * The id of the label. When placed in a ControlGroup, this automatically set to the
         * ControlGroup's label.
         */
        labelledBy: PropTypes.string,
        /**
         * A callback to receive the change events.
         * If value is set, this callback is required. This must set the value prop to retain the
         * change.
         */
        onChange: PropTypes.func,
        /** The size of the text label. */
        size: PropTypes.oneOf(['small', 'medium']),
        /** The current selected value.  Setting this value makes the property controlled. A
         * callback is required. */
        value: PropTypes.any,
    };

    static defaultProps = {
        disabled: false,
        onChange: noop,
        size: 'medium',
    };

    static Option = Option;

    constructor(props, ...rest) {
        super(props, ...rest);

        this.controlledExternally = has(props, 'value');

        this.state = {
            value: props.defaultValue,
        };

        if (__DEV__ && this.isControlled() && has(props, 'defaultValue')) {
            invariant('RadioList defaultValue prop is not compatible with value prop.');
        }

        if (__DEV__ && this.isControlled() && props.onChange === noop) {
            invariant(`RadioList onChange prop is required. This must update the value prop
                to retain user input.`);
        }
    }

    componentWillReceiveProps(nextProps) {
        if (__DEV__ && !this.isControlled() && has(nextProps, 'value')) {
            invariant(`Cannot change RadioList from an uncontrolled component to a controlled
    one. Prop 'value' is not valid in subsequent updates if not provided in the initial props.`);
        }

        if (__DEV__ && nextProps.defaultValue !== this.props.defaultValue) {
            invariant('Cannot change RadioList defaultValue after set.');
        }
    }

    isControlled() {
        return this.controlledExternally;
    }

    handleClick = (e, data) => {
        if (!this.isControlled()) {
            this.setState({
                value: data.value,
            });
        }
        this.props.onChange(e, data);
    }

    render() {
        const {
            children,
            className,
            describedBy,
            disabled,
            labelledBy,
            size,
            value,
            ...otherProps
        } = this.props;

        const selectedValue = this.isControlled() ? value : this.state.value;

        const clonedChildren = Children.toArray(children)
            .filter(isValidElement)
            .map((option, i) => cloneElement(option, {
                selected: option.props.value === selectedValue,
                key: option.key || i,
                disabled,
                size,
                onClick: this.handleClick,
            }));

        return (
            <Box
                flex
                className={toClassName(css.main, className)}
                role="radiogroup"
                aria-labelledby={labelledBy}
                aria-describedby={describedBy}
                {...createTestHook(__filename)}
                {...otherProps}
            >
                {clonedChildren}
            </Box>
        );
    }
}
export default RadioList;
