import {Singleton} from './DomTree'

export default class Tree extends Singleton{
    constructor(root) {
        super();
        this.root = root;
    }

    setRoot(newRoot) {
        console.log(newRoot.childNodes);
        console.log(this.root.childNodes)

    }
    isChanged() {
        
    }
}

class virtualDom extends Singleton  {
    constructor(root) {
        super();
        this.root = root;
    }
    getNode(key) {

    }
}


class Node {
    constructor(type, props) {
        this.type = type;
        this.props = props;
    }
}