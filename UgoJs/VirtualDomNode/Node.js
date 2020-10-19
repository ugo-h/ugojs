import {render} from '../render/render';

export default class Node {
    constructor(type, props, children) {
        this.type = type;
        this.props = props;
        this.props.id = props.id? props.id: (Math.random() * Date.now()).toString();
        this.children = children;
        this.render = this.render.bind(this)
    }
  
    render() {
        const element = document.createElement(this.type.toUpperCase());
        this.renderChildren(element)
        this.addEventListeners(element);
        this.setAttributes(element);
        return element;
    }
    renderChildren(container) {
        if(this.children === []) return;
        for(const child of this.children) {
            render(child, container)
        }
    }
    addEventListeners(container) {
        const { onClick, onChange } = this.props;
        if(onClick) {
            container.addEventListener('click', onClick);
        }
        if(onChange) {
            container.addEventListener('change', onChange);
        }
    }

    setAttributes(container) {
        
        for(const prop in this.props) {
            if(prop === 'children' || prop === 'innerHtml' || prop === 'parentNode') continue;
            if(prop === 'style') {
                for(const style in this.props[prop]) {
                    container.style[style] = this.props.style[style]
                }
                continue;
            }
            container[prop] = this.props[prop];
        }
    }
    setParentNode(node) {
        this.props.parentNode = node;
    }
    toString() {
        const children = this.children.map(child => child.toString()).join('');
        let props = '';
        for(const prop in this.props) {
            if(prop==='id') continue
            props += ` ${prop}="${this.props[prop]}"`
        }
        let str = `<${this.type}${props}>${children}</${this.type}>`;
        return str;
    }
    
}