import {Component} from '../ugo';

export function render(node, container) {
    if(!node) throw new Error('render function did not recieve any value.\n Check render() method of class component or return statement of functional component.')
    if(typeof node === 'string') {
        container.append(node)
    } else {
        container.append(node.render())
    }
    
};



