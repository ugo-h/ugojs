import {compareTrees} from '../VirtualDomNode/CompareTrees'
export class Component {
    constructor(props) {
        this.props = props;
        this.state = {}
    }

    setProps(props) {
        this.props = props;
    }

    static createElement(props, children) {
        props.children = children;
        const node = new this(props);
        node.tree = node.render();
        setTimeout(() => node.componentDidMount(), 0)
        return node.tree;
    }

    render() {

    }

    componentDidMount() {

    }

    setState(newState) {
        if(!this.state) {
            throw new Error('State has not been initiated yet. Create this.state property in class constructor.')
        }
        for(const key in newState) {
            this.state[key] = newState[key];
        }
        const node = this.render();
        const element = document.getElementById(this.tree.props.id);
        compareTrees(this.tree, node, element);
    }
}

