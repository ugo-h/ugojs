import VirtualDom from '../DomTree/DomTree';


export function render(node, container) {
    const dom = VirtualDom.getInstance(node);
    renderTree(dom.root, container);
    dom.oldRoot = dom.root;
};


function renderTree(root, container) {
    if(!root) return;
    if(!container) throw new Error('Traversal Error. Callback is not provided.')
    const element = root.render();
    container.append(element);
    for(const child of root.props.children) {
        renderTree(child, element);
    }
}

function compareNodes(first, second) {
    if(first !== second) {
        const element = document.getElementById(first.props.id);
        const parentNode = element.parentNode;
        element.remove();
        const newElement = second.render();
        parentNode.append(newElement);
    };
    if(first.props.children.length !== second.props.children.length) return;
    for(let i = 0; i < first.props.children.length; i++) {
        compareTrees(first.props.children[i], second.props.children[i]);
    }
}

function compareTrees(first, second, identical=true) {
    if(!first && !second) return identical;
    if(first !== second) return false;
    if(first.props.children.length !== second.props.children.length) return false;
    for(let i = 0; i < first.props.children.length; i++) {
        identical = compareTrees(first.props.children[i], second.props.children[i], identical);
    }
    return identical;
}
