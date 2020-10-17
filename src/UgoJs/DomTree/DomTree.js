import Node from './Node';
import Singleton from './Singleton';

export default class Tree extends Singleton {
    constructor(root){
        super();
        this.root = root;
    }

    find(attrs) {
        return this._find(this.root, attrs)
    }
    _find(root, {type, props}) {
        if(!root) return false;
        if(root.type === type && root.props === props) return true;
        const { children } = root.props;
        if(!children) {
            return false;
        }
        for(const child of children) {
            return this._find(child, {type, props})
            
        }
    }
}



