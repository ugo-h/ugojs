import { createElement } from '../ugo';
import Node  from '../VirtualDomNode/Node';

export function render(node, container) {
    if(!node) throw new Error('render function did not recieve any value.\n Check render() method of class component or return statement of functional component.')
    if(typeof node === 'string') {
        container.append(node)
    } else if (node instanceof Node){
        container.append(node.render())       
    } else {
        container.append(createElement(node, {}).render())
    }
};



