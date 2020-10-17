export class Singleton{
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

// export default class Tree extends Singleton {
//     constructor(root){
//         super();
//         this.oldRoot = new Node(root);
//         this.setRoot(root);
//     }

//     buildTree() {
//         this.root.value.children.forEach(child => {
//             this.children.push(new Node(child))
//         })
//     }

//     setRoot(root) {
//         this.root = new Node(root);
//     }
//     append(element, containerNode) {
//         appendToTree(this.root, element, containerNode);
//     }
// }

class Node{
    constructor(value) {
        this.value = value;
        this.key = (Date.now() / Math.random()*10).toString('16');
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


