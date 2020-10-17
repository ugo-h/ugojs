import render from '../renderToDom/render';

export default class Node {
    constructor(type, props) {
        this.type = type;
        this.props = props;
        this.setParentNode(null);
        this.render = this.render.bind(this)
    }
    set parentNode(node) {
        this.props.parentNode = node;
    }
    render() {
        const element = document.createElement(this.type.toUpperCase());
        this.renderChildren(element);
        this.addEventListeners(element);
        this.setAttributes(element);
        return element;
    }
    renderChildren(container) {
        const { children } = this.props;
        if(!children) return; 
        children.forEach(child => {
            render(child, container)
        })

    }

    addEventListeners(container) {
        const { onClick } = this.props;
        if(onClick) {
            console.log('adding event listener...');
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
        this.parentNode = node;
    }
    
}