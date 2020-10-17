import Node from './Node';
import Singleton from './Singleton';

export default class Tree extends Singleton {
    constructor(root){
        super();
        this.root = root;
        this.oldRoot = root;
    }

    find(attrs) {
        return this._find(this.root, attrs)
    }
    _find(root, {type, props}) {
        if(!root) return null;
   
        if(root.type === type && compareObjects(props, root.props) ) return root;
        const { children } = root.props;
        if(!children) {
            return null;
        }
        let isFound = null;
        for(const child of children) {
            isFound = this._find(child, {type, props})
            if(isFound) return isFound;
        }
        return isFound;
    }
}

function compareObjects(first, second) {
    for(let key of Object.keys(first)) {
        console.log(`FISRT: ${first[key]}, SECOND: ${second[key]}`);
        if(first[key] instanceof Function && second[key] instanceof Function) continue
        if(first[key]!==second[key]) {
            return false;
        }
    }
    return true;
}

