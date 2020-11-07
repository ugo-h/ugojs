import {compareTrees} from '../src/VirtualDomNode/CompareTrees';
import {createElement} from '../src/ugo';
import {render} from '../src/ugo';
import {MockDom} from './MockDom';



test('add prop', () => {
    const current = createElement('div', {});
    const next = createElement('div', {className:"App"});
    const mockTree = new MockDom(current.type, current.props, ...current.children);
    compareTrees(current, next, mockTree)
    expect(current.toString()).toBe(next.toString())
    
});