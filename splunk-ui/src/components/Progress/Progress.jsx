import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { createTestHook } from 'splunk-ui/util/testSupport';
import toClassName from 'splunk-ui/util/toClassName';
import Box from 'splunk-ui/components/Box';
import Tooltip from 'splunk-ui/components/Tooltip';
import css from './Progress.css';


class Progress extends Component {
    static propTypes = {
        /** @docs-ignore */
        className: PropTypes.string,
        /** The percentage complete. If unset, no progress bar will be shown. */
        percentage: PropTypes.number,
        /** Tooltip will default to the percentage complete. */
        tooltip: PropTypes.node,
    };

    constructor(props, ...rest) {
        super(props, ...rest);
        this.state = {
            tooltipOpen: false,
        };
    }

    handleMouseEnter = () => {
        this.setState({
            tooltipOpen: true,
        });
    }

    handleMouseLeave = () => {
        this.setState({
            tooltipOpen: false,
        });
    }

    render() {
        const { className, percentage, tooltip, ...otherProps } = this.props;

        return (
            <Box
                className={toClassName(className)}
                onMouseEnter={this.handleMouseEnter}
                onMouseLeave={this.handleMouseLeave}
                {...createTestHook(__filename)}
                {...otherProps}
            >
                {percentage >= 0 && (
                    <Tooltip
                        className={css.progress}
                        inline={false}
                        open={this.state.tooltipOpen}
                        content={tooltip || `${percentage}%`}
                        style={{ width: `${percentage}%` }}
                    >
                        <div className={css.puck} />
                    </Tooltip>
                )}
            </Box>
        );
    }
}

export default Progress;
