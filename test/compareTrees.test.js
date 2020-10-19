import {compareTrees} from '../UgoJs/VirtualDomNode/CompareTrees';
import {createElement} from '../UgoJs/ugo';
import {render} from '../UgoJs/ugo';
import {MockDom} from './MockDom';

let root = document.createElement('DIV');
document.body.appendChild(root);
  
test('Create element, render it and then check if it is in the dom', () => {
    const test1 = createElement('div', {});
    render(test1, root)
    expect(!!document.getElementById(test1.props.id)).toBe(true)
});

test('add prop', () => {
    const current = createElement('div', {});
    const next = createElement('div', {className:"App"});
    const mockTree = new MockDom(current.type, current.props, ...current.children);
    compareTrees(current, next, mockTree)
    expect(current.toString()).toBe(next.toString())
    
});