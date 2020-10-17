
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
        compareVirtualDom(this.tree, node);
        this.tree = node;
        
    }
}

function updateDom(node, element) {
    const parentNode = element.parentNode;
    element.remove();
    const newElement = node.render();
    parentNode.append(newElement);
    console.log('DOM updated.')
}

function compareVirtualDom(first, second) {
    const hasChanges = !compareNodes(first, second)
    if(hasChanges) {
        const {id} = first.props;
        const element = document.getElementById(id);
        updateDom(second, element);
    };
    if(first.props.children.length !== second.props.children.length) return;
    for(let i = 0; i < first.props.children.length; i++) {
        compareVirtualDom(first.props.children[i], second.props.children[i]);
    }
}
function compareNodes(firstNode, secondNode) {
    
    for(const key in firstNode.props) {
        // console.log(key)
        if(key==='id'|| key==='children') continue;
        if(firstNode.props[key] !== secondNode.props[key]) return false;
    }
    return true;
}
