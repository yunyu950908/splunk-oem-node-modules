import React from 'react';
import PropTypes from 'prop-types';
import CollapsiblePanel from 'splunk-ui/components/CollapsiblePanel';

const propTypes = {
    /**
     * A unique id for this panel and used by the Accordion to keep track of the open panel.
     */
    panelId: PropTypes.any.isRequired,
    /**
     * The content of this Panel's title.
     */
    title: PropTypes.node.isRequired,
};

/**
 * A container component for content in an `Accordion`.
 */
function Panel(props) {
    return <CollapsiblePanel {...props} />;
}

Panel.propTypes = propTypes;
export default Panel;
