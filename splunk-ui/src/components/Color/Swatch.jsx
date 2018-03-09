import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { noop } from 'lodash';
import toClassName from 'splunk-ui/util/toClassName';
import Clickable from 'splunk-ui/components/Clickable';
import ScreenReaderContent from 'splunk-ui/components/ScreenReaderContent';
import css from './Swatch.css';

class Swatch extends Component {
    static propTypes = {
        /** Append removes border from the right side. */
        append: PropTypes.bool,
        /** @docs-ignore */
        className: PropTypes.string,
        /** The color of the swatch to be shown. */
        value: PropTypes.string,
        /** @docs-ignore. Call back function when activated. */
        onClick: PropTypes.func,
        /** This has no affect on the appearance at this time but is recommend to be used when a
         * control is joined to the left. Styles may change in the future. */
        prepend: PropTypes.bool,
        /** The size of the swatch. */
        size: PropTypes.oneOf(['small', 'medium']),
        /** @docs-ignore. Overide look and feel with inline styles. */
        style: PropTypes.object,
    };

    static defaultProps = {
        onClick: noop,
        size: 'medium',
    };

    focus() {
        this.clickable.focus();
    }

    render() {
        const {
            append,
            className,
            value,
            onClick,
            prepend,
            size,
            style,
            ...otherProps
        } = this.props;
        function handleClick(e) {
            onClick(e, { value });
        }
        return (
            <Clickable
                className={toClassName(css.main, className)}
                data-append={append ? true : null}
                data-prepend={prepend ? true : null}
                data-size={size}
                style={{ ...style, backgroundColor: value }}
                onClick={handleClick}
                ref={(c) => { this.clickable = c; }}
                {...otherProps}
            >
                <ScreenReaderContent>{value}</ScreenReaderContent>
            </Clickable>
        );
    }
}

export default Swatch;
