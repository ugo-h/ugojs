import Node from '../DomTree/Node';
import {Component} from '../ugo';

export function createElement(type, props, ...children) {
    props.children = children? children: [];
    if(!props.id) props.id = (Date.now() * Math.random()).toString('16');

    if(type.__proto__ === Component) {
        const node = type.createElement(props);
        return node;
    } else if(type instanceof Function) {
        const node = type(props)
        return node;
    }else {
        const node = new Node(type, props);
        return node;
    }
}