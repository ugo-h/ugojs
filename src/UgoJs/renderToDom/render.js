import Component from './Component'

import DomTree from '../DomTree/Dom';

function render(element, container) {
    const tree = DomTree.getInstance(container);
    
    if(element instanceof Component) {
        const renderedElement = element.render();
        addElementToDom(renderedElement, container)
    } else if(element instanceof Function) {
        const renderedElement = element()
        addElementToDom(renderedElement, container)
    } else {
        addElementToDom(element, container)
    }
    console.log(tree)
}

function addElementToDom(element, container) {
    const tree = DomTree.getInstance(container);
    tree.setRoot()
    container.append(element);
}

export default render;