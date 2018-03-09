/* eslint-env mocha */

import { assert } from 'chai';
import toClassName from './toClassName';

describe('toClassName', () => {
    it('keeps object keys with truthy values', () => {
        assert.equal(toClassName({
            a: true,
            b: false,
            c: 0,
            d: null,
            e: undefined,
            f: 1,
        }), 'a f');
    });

    it('joins arrays of class names and ignore falsy values', () => {
        assert.equal(toClassName('a', 0, null, undefined, true, 'b'), 'a b');
    });

    it('supports heterogenous arguments', () => {
        assert.equal(toClassName({ a: true }, 'b', 0), 'a b');
    });

    it('should be trimmed', () => {
        assert.equal(toClassName('', 'b', {}, ''), 'b');
    });

    it('ignores numbers', () => {
        assert.equal(toClassName(1, 'b', 3), 'b');
    });

    it('returns an empty string for an empty configuration', () => {
        assert.equal(toClassName({}), '');
    });

    it('supports an array of class names', () => {
        assert.equal(toClassName(['a', 'b']), 'a b');
    });

    it('joins array arguments with string arguments', () => {
        assert.equal(toClassName(['a', 'b'], 'c'), 'a b c');
        assert.equal(toClassName('c', ['a', 'b']), 'c a b');
    });

    it('handles multiple array arguments', () => {
        assert.equal(toClassName(['a', 'b'], ['c', 'd']), 'a b c d');
    });

    it('handles arrays that include falsy and true values', () => {
        assert.equal(toClassName(['a', 0, null, undefined, false, true, 'b']), 'a b');
    });

    it('handles arrays that include arrays', () => {
        assert.equal(toClassName(['a', ['b', 'c']]), 'a b c');
    });

    it('handles arrays that include objects', () => {
        assert.equal(toClassName(['a', { b: true, c: false }]), 'a b');
    });

    it('handles deep array recursion', () => {
        assert.equal(toClassName(['a', ['b', ['c', { d: true }]]]), 'a b c d');
    });
});
