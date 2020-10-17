import Node from '../DomTree/Node';

export function createElement(type, props, ...children) {
    props.children = children? children: [];
    if(!props.id) props.id = (Date.now() * Math.random()).toString('16');
    const node = new Node(type, props);
    return node;
}