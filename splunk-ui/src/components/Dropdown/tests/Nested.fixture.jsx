import React from 'react';
import Button from 'splunk-ui/components/Button';
import Dropdown from 'splunk-ui/components/Dropdown';
import { without } from 'lodash';

export default function Nested() {
    const topToggle = <Button id="topToggle" />;
    const nestToggle = <Button id="nestToggle" />;
    const reasons = without(Dropdown.possibleCloseReasons, 'contentClick');

    return (
        <Dropdown
            closeReasons={reasons}
            id="topDropdown"
            toggle={topToggle}
        >
            <Dropdown
                closeReasons={reasons}
                id="nestDropdown"
                toggle={nestToggle}
            >
                <span id="inside">Goodbye, cruel world!</span>
            </Dropdown>
        </Dropdown>
    );
}
