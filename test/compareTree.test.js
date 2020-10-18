import {createElement} from '../src/UgoJs/ugo';
import {compareNodes} from '../src/UgoJs/renderToDom/Component';

const testCaseTrue = [createElement('div', {}), createElement('div', {})];
const testCaseFalse = [createElement('p', {}), createElement('div', {})];

const testCaseWithPropsTrue = [createElement('div', {className:"Node"}), createElement('div', {className:"Node"})];
const testCaseWithPropsFalse = [createElement('div', {className:"App"}), createElement('div', {className:"Node"})];

const testCaseWithSimilarKeys = [createElement('li', {key:'1', className:"Node"}), createElement('li', {key:'1', className:"Node"})];
const testCaseWithDifferentKeys = [createElement('li', {key:'1', className:"Node"}), createElement('li', {key:'2',className:"Node"})];

const testCaseWithAbsentNode1 = [createElement('div', {}), null]
const testCaseWithAbsentNode2 = [null, createElement('div', {})]
const testCaseWithAbsentNode3 = [null, null]

test('compare nodes without props', () => {
    expect(compareNodes(...testCaseTrue)).toBe(true)
    expect(compareNodes(...testCaseFalse)).toBe(false)
});
test('compare nodes with props', () => {
    expect(compareNodes(...testCaseWithPropsTrue)).toBe(true)
    expect(compareNodes(...testCaseWithPropsFalse)).toBe(false)
});

test('compare nodes with keys', () => {
    expect(compareNodes(...testCaseWithSimilarKeys)).toBe(true)
    expect(compareNodes(...testCaseWithDifferentKeys)).toBe(false)
});
test('Compare nodes with one node equals "null"', () => {
    expect(compareNodes(...testCaseWithAbsentNode1)).toBe(false);
    expect(compareNodes(...testCaseWithAbsentNode2)).toBe(false)
    expect(compareNodes(...testCaseWithAbsentNode3)).toBe(false)
})


