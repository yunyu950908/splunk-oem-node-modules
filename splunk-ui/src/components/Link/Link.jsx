import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { createTestHook } from 'splunk-ui/util/testSupport';
import toClassName from 'splunk-ui/util/toClassName';
import Clickable from 'splunk-ui/components/Clickable';
import css from './Link.css';

// TODO: Make sure this is a11y, and throw an error when used in a way that
// does not conform to standards.


/**
* Link is a simple method for configuring `Button` for inline links. For more complex behaviors,
* see the Button documenation.
*/
class Link extends Component {
    static propTypes = {
        /** @docs-ignore */
        children: PropTypes.node,
        /**
        * @docs-ignore
        */
        className: PropTypes.string,
        /**
        * To open the link in a new window, set openInNewContext to true. An icon will be added
        * indicating the the behavior
        */
        disabled: PropTypes.bool,
        /**
        * To open the link in a new window, set openInNewContext to true. An icon will be added
        * indicating the the behavior
        */
        openInNewContext: PropTypes.bool,
        /* The url or path to link to.  */
        to: PropTypes.string,
    };

    static defaultProps = {
        disabled: false,
        openInNewContext: false,
    };

    /**
    * Place focus on the link.
    */
    focus() {
        if (this.component) {
            this.component.focus();
        }
    }

    render() {
        const { children, className, ...otherProps } = this.props;

        return (
            <Clickable
                className={toClassName(css.main, className)}
                ref={c => this.component = c}
                {...createTestHook(__filename)}
                {...otherProps}
            >
                {children}
            </Clickable>
        );
    }
}

export default Link;
