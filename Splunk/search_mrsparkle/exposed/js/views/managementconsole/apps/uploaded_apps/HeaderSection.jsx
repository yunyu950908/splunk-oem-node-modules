import { createTestHook } from 'util/test_support';
import React, { PropTypes } from 'react';
import Heading from 'splunk-ui/components/Heading';

const HeaderSection = (props) => {
    const { title, description, children } = props;

    return (
        <div {...createTestHook(module.id)}>
            <div className="section-header section-padded">
                {children}
                <Heading className="section-title">{title}</Heading>
                <p>{description}</p>
            </div>
        </div>
    );
};

HeaderSection.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    children: PropTypes.node,
};

HeaderSection.defaultProps = {
    title: '',
    description: '',
    children: undefined,
};

export default HeaderSection;