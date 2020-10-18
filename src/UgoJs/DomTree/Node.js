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
        const { onClick } = this.props;
        if(onClick) {
            container.addEventListener('click', onClick);
        }
    }

    setAttributes(container) {
        for(const prop in this.props) {
            if(prop === 'children' || prop === 'innerHtml' || prop === 'parentNode') continue;
            container[prop] = this.props[prop];
        }
    }
    setParentNode(node) {
        this.props.parentNode = node;
    }
    
}