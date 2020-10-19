import {Component} from './Component';

export function render(node, container) {
    // const dom = VirtualDom.getInstance(node);
    // renderTree(dom.root, container);
    container.append(node.render())
    
};



