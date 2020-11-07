import Node from '../VirtualDomNode/Node';
import {Component} from '../ugo';

export function createElement(type, props, ...children) {
    if(!type) throw new Error(`createElement expected 'type' argument of type 'Component', Function or string. Recieved '${type}'`)
    if(!props) props = {};
    if(type.__proto__ === Component) {
        const node = type.createElement(props, children);
        return node;
    } else if(type instanceof Function) {
        const node = type(props, children)
        return node;
    }else if(typeof type === 'string'){
        const node = new Node(type, props, children);
        return node;
    }
}