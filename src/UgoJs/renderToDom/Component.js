
export class Component {
    constructor(props) {
        this.props = props;
        this.state = {}
    }

    setProps(props) {
        this.props = props;
    }

    static createElement(...props) {
        const node = new this(...props);
        node.tree = node.render();
        return node.tree;
    }

    render() {

    }

    setState(newState) {
        if(!this.state) {
            throw new Error('State has not been initiated yet. Create this.state property in class constructor.')
        }
        this.state = { ...this.state, ...newState };
        const node = this.render();
        const element = document.getElementById(this.tree.props.id);
        compareVirtualDom(this.tree, node, element, element.parentNode);
        this.tree = node;
    }
}


function _updateDom(current, next, element, parent) {
    // console.log(element);
    console.log(parent);
    // if(!next) {
    //     parent.removeChild(element)
    // } else if(!current) {
    //     parent.appendChild(next.render())
    // }
    console.log('DOM updated.')
}

export function compareVirtualDom(current, next, containers) {
    if(!current && !next) return;
    const hasChanges = !compareNodes(current, next)
    if(hasChanges) {
        // console.log(containers)
        _updateDom(current, next, containers.element, containers.parent)
    } 
    for(let i = 0; i < current.props.children.length; i++) {
        containers = unpackContainers(containers, i);
        compareVirtualDom(current.props.children[i], next.props.children[i], containers);
    }
}
export function compareNodes(firstNode, secondNode) {
    if(!secondNode || !firstNode) return false
    if(firstNode.type !== secondNode.type) return false;
    if(firstNode.props.key !== secondNode.props.key) return false;

    for(const key in firstNode.props) {
        if(key==='id'|| key==='children' || key === 'key') continue;
        if(firstNode.props[key] !== secondNode.props[key]) return false;
    }
    return true;
}



function unpackContainers(containers, index) {
    let { element, container } = containers;
    container = element;
    element = element.childNodes?element.childNodes[index]:element;  
    return {element, container}
}

function updateDom(current, next, parent) {
    console.log(parent)
     // console.log(`current: ${!!current} next: ${!!next}`)
     if (!current) {
         parent.appendChild(
           next.render()
         );
     } else if (!next) {
         let element;
         for(const child of parent.childNodes) {
             if(child.id === current.props.id) element = child;
         }
         parent.removeChild(element)
         } else {
         parent.appendChild(
             next.render()
           );
           let element;
         for(const child of parent.childNodes) {
             if(child.id === current.props.id) element = child;
         }
         parent.removeChild(element)
     }
     console.log('DOM updated.')
 }