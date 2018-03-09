import React from 'react';
import P from 'splunk-ui/components/Paragraph';
import Bookmark from 'splunk-ui/icons/Bookmark';

function Example() {
    const style = {
        backgroundColor: '#fdd',
    };

    return (
        <div>
            <P>
                To scale the svg proportionately, use size.
            </P>
            <Bookmark size={1} style={style} />
            {' '}
            <Bookmark size={3} style={style} />
            {' '}
            <Bookmark size="50px" style={style} />
            {' '}Sizes

            <br />
            <br />
            <br />
            <P>
                To place icons within a fixed size area, use width and height.
                The icon can can be positioned and sized using svg{'\''}s preserveAspectRatio
                property.
            </P>

            <Bookmark height="50px" width="50px" style={style} />
            {' '}Width and height centered (default)

            <br />
            <br />
            <br />

            <Bookmark height="50px" width="50px" preserveAspectRatio="xMaxYMid" style={style} />
            {' '}Width and height aligned right
        </div>
    );
}

export default Example;
