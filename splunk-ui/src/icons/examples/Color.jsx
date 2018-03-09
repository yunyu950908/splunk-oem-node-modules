import React from 'react';
import Flag from 'splunk-ui/icons/Flag';

function Example() {
    return (
        <div style={{ fontSize: '30px', color: 'red' }}>
            <Flag />
            {' '}
            <Flag style={{ color: 'blue' }} />
        </div>
    );
}

export default Example;
