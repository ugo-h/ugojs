
class Component {
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
        compareNodes(this.tree, node);
        this.tree = node;
        
    }
}

function updateDom(node, element) {
    const parentNode = element.parentNode;
    element.remove();
    const newElement = node.render();
    parentNode.append(newElement);
}

function compareNodes(first, second) {
    if(first !== second) {
        const element = document.getElementById(first.props.id);
        updateDom(second, element);
    };
    if(first.props.children.length !== second.props.children.length) return;
    for(let i = 0; i < first.props.children.length; i++) {
        compareTrees(first.props.children[i], second.props.children[i]);
    }
}

export default Component;