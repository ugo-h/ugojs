import Component from './Component'
import VirtualDom from '../DomTree/DomTree';


function render(node, container) {
    const dom = VirtualDom.getInstance(node);
    console.log(dom)
    container.append(node.render());
};


export default render;