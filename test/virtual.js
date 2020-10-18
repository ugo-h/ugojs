class Node{
    constructor(type, props, children) {
        this.type = type;
        this.props = props?props:{};
        this.children = children? children:[];
    }

    render() {
        const element = createFakeDom(this.type, {...this.props});
        this.children.forEach(child => {
            element.appendChild(child.render());
        })
        return element;
    }
}

class FakeDom{
    constructor(type, props, children) {
        this.type = type;
        this.props = props?props:{};
        this.children = children? children:[];
    }

    setAttribute(name, value) {
        this.props[name] = value;
    }
    deleteAtribute(name) {
        delete this.props[name];
    }
    appendChild(child) {
        this.children.push(child)
    }
    removeChild(index) {
        this.children.splice(index, 1);
    }
}

function createElement(type, props={}, ...children) {
    if(!type) throw new Error('Element must have a "type" atribute.');
    return new Node(type, props, children)
}
function createFakeDom(type, props={}, ...children) {
    if(!type) throw new Error('Element must have a "type" atribute.');
    return new FakeDom(type, props, children)
}



function compareTrees(current, next, dom) {
    if(!current || !next) return;
    compareProps(current.props, next.props, dom);
    compareChildren(current.children, next.children, dom);
}

function compareProps(currentProps, nextProps, dom) {
    const currentArr = Object.keys(currentProps);
    const nextArr = Object.keys(nextProps);
    
    let arr = currentArr.length > nextArr.length? currentArr: nextArr;
    for(let key of arr) {
        if(currentProps[key]!==nextProps[key]) {
            if(!nextProps[key]) dom.deleteAtribute(key);
            if(!currentProps[key]) dom.setAttribute(key, nextProps[key]);
        }
    }
}

function compareChildren(current, next, container) {
    let len = Math.max(current.length, next.length);
    console.log(len)
    for(let i = 0; i < len; i++) {
        if(!current[i]) {
            container.appendChild(next[i].render());
            continue;
        } else if(!next[i]) {
            container.removeChild(i);
            continue;
        } else if(current[i].type !== next[i].type) {
            container.removeChild(i);
            container.appendChild(next[i].render());
            continue;
        };
        compareTrees(current[i], next[i], container.children[i]);
    }
}

function traverseTree(root, callback, depth='') {
    if(!root) return;
    callback(depth+ root.type)
    callback(`${depth}className: ${root.props.className}`)
    root.children.forEach(child => {
        traverseTree(child, callback, depth+' ');
    })
}

const tree1 = createElement('div', {}, createElement('p'));
const tree2 = createElement('div', {className:'class1'}, createElement('div', {}, createElement('img', {className:'img-1'}),  createElement('img', {className:'img-2'})) );
const fakeDom = tree1.render();

// console.log(tree1, fakeDom)

compareTrees(tree1, tree2, fakeDom)

traverseTree(fakeDom, console.log)




