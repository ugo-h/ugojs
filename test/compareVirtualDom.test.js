import { createElement } from '../src/UgoJs/ugo';
import { compareVirtualDom } from '../src/UgoJs/renderToDom/Component';

const testCase1 = [createElement('div', {}), createElement('div', {})]

test('compare virtual dom', () => {
    expect(compareVirtualDom(...testCase1)).toBe([true])
})