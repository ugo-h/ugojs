class Singleton{
    constructor() {
        if(Singleton._instance) {
            throw new Error('Instantiation failed. Use Singleton.getInstance instead of new')
        } else {
            Singleton.init()
        }
    }

    static init() {
        this._instance = this;
    }
    static getInstance(...props) {
        if(this._instance) {
            return this._instance;
        } else {
            this._instance = new this(...props)
            return this._instance;
        }
    }
}

class Tree extends Singleton {
    constructor(root){
        super();
        this.root = new Node(root)
    }

    append(element, containerNode) {
        appendToTree(this.root, element, containerNode);
    }
}

class Node{
    constructor(value) {
        this.value = value;
        this.children = [];
    }
}

function appendToTree(root, value, container) {
    if(!root) {
        return;
    }
    if(root.value === container) {
        root.children.push(new Node(value));
        return;
    }
    for(const child of root.children) {
        appendToTree(child, value, container)
    }
}

function traverseTree(root) {
    if(!root) return;
    console.log(root.value)
    for(const child of root.children) {
        traverseTree(child)
    }
}

let tree = Tree.getInstance('rootElement');
console.log(tree)
tree = Tree.getInstance()
console.log(tree)
// tree.append('childElementWithChildren', 'rootElement')
// tree.append('subChildElement', 'childElementWithChildren')
// appendToTree(tree.root, 'childElement', 'rootElement')
// traverseTree(tree.root)