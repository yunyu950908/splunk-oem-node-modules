/* eslint-env mocha */

import React from 'react';
import { assert } from 'chai';
import { mount } from 'enzyme';
import sinon from 'sinon';
import File from 'splunk-ui/components/File';

describe('File', () => {
    it('renders', () => {
        const wrapper = mount(<File />);
        assert.ok(wrapper);
    });

    it('calls remove', () => {
        const handleRemoveFile = sinon.spy();
        const wrapper = mount(
            <File
                onRequestRemove={handleRemoveFile}
            >
                <File.Item name="a file name" />
            </File>,
        );

        wrapper.find('Clickable').first().simulate('click');
        assert.isTrue(handleRemoveFile.calledOnce);
    });

    it('should handle invalid values in children correctly', () => {
        const element = (
            <File>
                {undefined}
                {false}
                {null}
                {' '}
                word
            </File>
        );
        const wrapper = mount(element);
        assert.ok(wrapper);
    });
});
