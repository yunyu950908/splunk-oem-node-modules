import React, { Children, cloneElement, Component, isValidElement } from 'react';
import PropTypes from 'prop-types';
import { has } from 'lodash';
import { invariant } from 'splunk-ui/util/errorHandling';
import { createTestHook } from 'splunk-ui/util/testSupport';
import ButtonGroup from 'splunk-ui/components/ButtonGroup';
import Option from './Option';

function noop() {}


/**
* RadioBar is form control that provides an affordance to select one option out of a group.
*/
class RadioBar extends Component {
    static propTypes = {
        /** The appearance of the buttons */
        appearance: PropTypes.oneOf(['default', 'pill']),
        /**
         * `children` should be `RadioBar.Option`.
         **/
        children: PropTypes.node,
        /**
         * The default value. Only applicable if this is an uncontrolled component. Otherwise, use
         * the value prop.
         */
        defaultValue: PropTypes.any,
       /**
        * The id of the description. When placed in a ControlGroup, this automatically set to the
        * ControlGroup's help component.
        */
        describedBy: PropTypes.string,
        /**
        * Highlight the field as having an error. The buttons will turn red.
        */
        error: PropTypes.bool,
        inline: PropTypes.bool,
        /**
         * The id of the label. When placed in a ControlGroup, this automatically set to the
         * ControlGroup's label.
         */
        labelledBy: PropTypes.string,
        /** A callback that receives the new value */
        onChange: PropTypes.func,
        /** The size of the buttons. */
        size: PropTypes.oneOf(['small', 'medium', 'large']),
        /**
         * The currently selected value. Only applicable if this is a controlled component.
         */
        value: PropTypes.any,
    };

    static defaultProps = {
        appearance: 'default',
        error: false,
        inline: false,
        onChange: noop,
        size: 'medium',
    };

    static Option = Option;

    constructor(props, ...rest) {
        super(props, ...rest);
        this.controlledExternally = has(props, 'value');
        if (!this.isControlled()) {
            this.state = {
                value: props.defaultValue,
            };
        }

        if (__DEV__ && this.isControlled() && has(props, 'defaultValue')) {
            invariant('defaultValue prop is not compatible with value prop.');
        }
    }

    componentWillReceiveProps(nextProps) {
        if (__DEV__ && !this.isControlled() && has(nextProps, 'value')) {
            invariant(`Cannot change RadioBar from an uncontrolled component to a controlled
    one. Prop 'value' is not valid in subsequent updates if not provided in the initial props.`);
        }

        if (__DEV__ && nextProps.defaultValue !== this.props.defaultValue) {
            invariant(`Cannot change defaultValue after set. Consider using a controlled
                component instead.`);
        }
    }

    handleClick = (e, data) => {
        if (this.props.value !== data.value) {
            this.props.onChange(e, data);

            if (!this.isControlled()) {
                this.setState({ value: data.value });
            }
        }
    }

    isControlled() {
        return this.controlledExternally;
    }

    render() {
        const {
            appearance,
            children,
            describedBy,
            error,
            labelledBy,
            size,
            value,
            ...otherProps
        } = this.props;

        const selectedValue = this.isControlled() ? value : this.state.value;
        const childrenFormatted = Children.toArray(children)
            .filter(isValidElement)
            .map((item, i) => cloneElement(item, {
                appearance,
                size,
                key: item.key || i,
                onClick: this.handleClick,
                role: 'radio',
                error,
                selected: item.props.value === selectedValue,
            }));

        return (
            <ButtonGroup
                role="radiogroup"
                aria-labelledby={labelledBy}
                aria-describedby={describedBy}
                {...createTestHook(__filename)}
                {...otherProps}
            >
                {childrenFormatted}
            </ButtonGroup>
        );
    }
}

export default RadioBar;
