import _ from 'underscore';
import React, { PropTypes } from 'react';
import Select from 'splunk-ui/components/Select';
import Text from 'splunk-ui/components/Text';
import DeleteButton from 'dashboard/components/shared/DeleteButton';
import Box from 'splunk-ui/components/Box';
import ComboBox from 'splunk-ui/components/ComboBox';
import { createTestHook } from 'util/test_support';

const SetEvalUnsetDropdown = ({
    value,
    onChange,
}) => (
    <Select
        value={value}
        onChange={onChange}
        style={{
            marginRight: '5px',
            minWidth: '70px',
        }}
        {...createTestHook(null, 'SetEvalUnsetDropdown')}
    >
        <Select.Option label={_('Set').t()} value="set" />
        <Select.Option label={_('Eval').t()} value="eval" />
        <Select.Option label={_('Unset').t()} value="unset" />
    </Select>
);
SetEvalUnsetDropdown.propTypes = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
};

const delimiterStyles = {
    lineHeight: '26px',
    paddingLeft: '5px',
    paddingRight: '5px',
};
const controlTextStyles = {
    flexShrink: '1',
    flexGrow: '0',
    maxWidth: '100px',
};
const boxStyles = {
    marginBottom: '10px',
};
const getValuePlaceholder = (type) => {
    switch (type) {
        case 'set':
            return _('Token value').t();
        case 'eval':
            return _('Eval expression').t();
        default:
            return '';
    }
};

const TokenExpression = ({
    type,
    token,
    value,
    candidateTokens,
    onTypeChange,
    onTokenChange,
    onValueChange,
    onRemove,
}) => (
    <Box
        flex style={boxStyles}
        {...createTestHook(module.id)}
    >
        <SetEvalUnsetDropdown value={type} onChange={(e, data) => onTypeChange(data.value)} />
        <Text
            value={token}
            onChange={(e, data) => onTokenChange(data.value)}
            placeholder={_('Token name').t()}
            style={controlTextStyles}
            {...createTestHook(null, 'tokenName')}
        />
        {type === 'set' || type === 'eval' ? <div style={delimiterStyles}>{'='}</div> : null}
        {type === 'set' || type === 'eval' ? (
            <ComboBox
                value={value}
                onChange={(e, data) => onValueChange(data.value)}
                placeholder={getValuePlaceholder(type)}
                style={controlTextStyles}
                {...createTestHook(null, 'tokenValue')}
            >
                {candidateTokens.map(candidateToken => (
                    <ComboBox.Option
                        key={candidateToken.token}
                        value={candidateToken.token}
                        description={candidateToken.description}
                    />
                ))}
            </ComboBox>
        ) : null}
        <DeleteButton onClick={onRemove} />
    </Box>
);

TokenExpression.propTypes = {
    type: PropTypes.string.isRequired,
    token: PropTypes.string.isRequired,
    value: PropTypes.string,    // 'unset' does not have value
    candidateTokens: PropTypes.arrayOf(PropTypes.shape({
        token: PropTypes.string.isRequired,
        description: PropTypes.string,
    })).isRequired,
    onTypeChange: PropTypes.func.isRequired,
    onTokenChange: PropTypes.func.isRequired,
    onValueChange: PropTypes.func,
    onRemove: PropTypes.func.isRequired,
};

TokenExpression.defaultProps = {
    onValueChange: () => {},
    value: '',
};

export default TokenExpression;
