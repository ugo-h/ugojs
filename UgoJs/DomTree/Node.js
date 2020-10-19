import {render} from '../renderToDom/render';

export default class Node {
    constructor(type, props) {
        this.type = type;
        this.props = props;
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
        if(this.props.children === []) return;
        for(const child of this.props.children) {
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
        const children = this.props.children.length>0?this.props.children.map(child => child.toString()).join(''):'';
        let props = '';
        for(const prop in this.props) {
            props += ` ${prop}="${this.props[prop]}"`
        }
        let str = `<${this.type}${props}>${children}<${this.type}/>`;
        return str;
    }
    
}