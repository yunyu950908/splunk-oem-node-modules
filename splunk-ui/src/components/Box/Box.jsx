import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { createTestHook } from 'splunk-ui/util/testSupport';
import toClassName from 'splunk-ui/util/toClassName';
import css from './Box.css';


/**
* Box is a utility component to normalize and abstact common layout styles.
*/
class Box extends Component {
    static propTypes = {
        children: PropTypes.node,
        className: PropTypes.string,
        flex: PropTypes.bool,
        inline: PropTypes.bool,
    };

    static defaultProps = {
        flex: false,
        inline: false,
    };

    getEl() {
        return this.el;
    }

    render() {
        const {
            children,
            className,
            flex,
            inline,
            ...otherProps
        } = this.props;

        if (inline) {
            otherProps['data-inline'] = true;
        }

        if (flex) {
            otherProps['data-flex'] = true;
        }

        return (
            <div
                ref={el => this.el = el}
                className={toClassName(css.main, className)}
                {...createTestHook(__filename)}
                {...otherProps}
            >
                {children}
            </div>
        );
    }
}

export default Box;
