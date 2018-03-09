import React, { PropTypes } from 'react';
import _ from 'underscore';
import Button from 'splunk-ui/components/Button';
import Dropdown from 'splunk-ui/components/Dropdown';
import Menu from 'splunk-ui/components/Menu';
import Tooltip from 'splunk-ui/components/Tooltip';

const icon = (
    <svg
        width="16"
        height="16"
        fill="currentColor"
        style={{
            marginTop: 1,
            marginBottom: 3,
            marginLeft: 1,
            marginRight: 1,
        }}
    >
        <circle cx="8" cy="2" r="2" />
        <circle cx="8" cy="8" r="2" />
        <circle cx="8" cy="14" r="2" />
    </svg>
);

const MiscControls = ({
    onClickDrilldown,
    onClickTrellis,
    disableDrilldown,
    disableTrellis,
}) => {
    const buttonToggle = (
        <Button
            appearance="pill"
            icon={icon}
            style={{
                paddingLeft: 7,
                paddingRight: 7,
            }}
        />
    );

    const tooltip = <span style={{ whiteSpace: 'nowrap' }}>{_('More actions').t()}</span>;

    return (
        <Tooltip content={tooltip}>
            <Dropdown toggle={buttonToggle} focusToggleReasons={['escapeKey', 'toggleClick']}>
                <Menu style={{ minWidth: 100 }}>
                    <Menu.Item
                        label={_('Edit Drilldown').t()}
                        onClick={onClickDrilldown}
                        disabled={disableDrilldown}
                    />
                    <Menu.Item
                        icon={<i className="icon-trellis-layout" style={{ marginRight: 5 }} />}
                        label={_('Trellis').t()}
                        onClick={onClickTrellis}
                        disabled={disableTrellis}
                    />
                </Menu>
            </Dropdown>
        </Tooltip>
    );
};

MiscControls.propTypes = {
    onClickDrilldown: PropTypes.func.isRequired,
    onClickTrellis: PropTypes.func.isRequired,
    disableDrilldown: PropTypes.bool.isRequired,
    disableTrellis: PropTypes.bool.isRequired,
};

export default MiscControls;