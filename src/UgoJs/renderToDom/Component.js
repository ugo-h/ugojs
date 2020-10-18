
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
        // console.log(element)
        compareTrees(this.tree, node, element);
    }
}




function compareTrees(current, next, dom) {
    if(!current || !next) return;
    compareProps(current.props, next.props, dom);
    compareChildren(current.props.children, next.props.children, dom);
}

function compareProps(currentProps, nextProps, dom) {
    const currentArr = Object.keys(currentProps);
    const nextArr = Object.keys(nextProps);
    
    let arr = currentArr.length > nextArr.length? currentArr: nextArr;
    for(let key of arr) {
        if(key==='children' || key==='key'|| key==='id')  continue;
        if(currentProps[key]!==nextProps[key]) {
            if(!nextProps[key]) {
                dom[key] = '';
                delete currentProps[key];
            }
            if(!currentProps[key]) {
                dom[key] = nextProps[key];
                currentProps[key] = nextProps[key];
            } else {
                dom[key] = nextProps[key];
                currentProps[key] = nextProps[key];
            }
        }
    }
}

function compareChildren(current, next, container) {
    let len = Math.max(current.length, next.length);
    // console.log(len)
    for(let i = 0; i < len; i++) {
        if(!current[i]) {
            container.appendChild(next[i].render());
            
            current.push(next[i]);
            continue;
        } else if(!next[i]) {
            container.removeChild(container.childNodes[i]);
            
            current.splice(i, 1);
            continue;
        } else if(current[i].type !== next[i].type) {
            container.removeChild(container.childNodes[i]);
            container.appendChild(next[i].render());
            
            current.splice(i, 1);
            current.push(next[i]);
            continue;
        };
        compareTrees(current[i], next[i], container.childNodes[i]);
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


