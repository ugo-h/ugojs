import Node from '../DomTree/Node';
import VirtualDom from '../DomTree/DomTree';

export function createElement(type, props, ...children) {
    props.children = children;
    const node = new Node(type, props);
    return node;
}