import Node from '../VirtualDomNode/Node';
import {Component} from '../ugo';

export function createElement(type, props, ...children) {
    if(type.__proto__ === Component) {
        const node = type.createElement(props, children);
        return node;
    } else if(type instanceof Function) {
        const node = type(props, children)
        return node;
    }else {
        const node = new Node(type, props, children);
        return node;
    }
}