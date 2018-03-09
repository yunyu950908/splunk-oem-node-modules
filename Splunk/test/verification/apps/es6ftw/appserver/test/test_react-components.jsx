import React from 'react';
import ReactDom from 'react-dom';
import $ from 'jquery';
import ProdComponent from 'es6ftw/ProdComponent';
import SupportComponent from './SupportComponent';

const TestComponent = () => <span>Test Component</span>;

suite('React components with JSX', function () {
    test('testing a React component written with JSX', function () {
        const $container = $('<div />');
        ReactDom.render(<ProdComponent />, $container[0]);
        assert.equal($container.text(), 'Production Component', 'rendered from JSX correctly');
    });

    test('using JSX in a test file', function () {
        const $container = $('<div />');
        ReactDom.render(<TestComponent />, $container[0]);
        assert.equal($container.text(), 'Test Component', 'rendered from JSX correctly');
    });

    test('using JSX in a support file', function () {
        const $container = $('<div />');
        ReactDom.render(<SupportComponent />, $container[0]);
        assert.equal($container.text(), 'Support Component', 'rendered from JSX correctly');
    });
});
