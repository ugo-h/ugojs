import {render, createElement} from '../src/ugo';

let root = document.createElement('DIV');
document.body.appendChild(root);
  
test('Test render', () => {
    const node = createElement('div', {});
    render(node, root)
    expect(!!document.getElementById(node.props.id)).toBe(true)
});
test('Test render of string', () => {
    const node = createElement('div', {});
    render('string', node.render());
    root.append(node.render())
    const res = document.getElementById(node.props.id);
    console.log(res);
    // expect(typeof container.childNodes[0]).toBe('string')
});