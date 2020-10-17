import Singleton from '../DomTree/DomTree';
import VirtualDom from '../DomTree/DomTree';

class Component extends Singleton{
    constructor(props) {
        super();
        this.props = props;
    }

    setProps(props) {
        this.props = props;
    }
    static getInstance(...props) {
        if(this._instance) {
            this._instance.setProps(...props);
            const node = this._instance.render();
            return node;
        } else {
            this._instance = new this(...props)
            const node = this._instance.render();
            return node;
        }
    }

    render() {

    }

    setState(newState) {
        if(!this.state) {
            throw new Error('State has not been initiated yet. Create this.state property in class constructor.')
        }
        this._updateDom()
        this.state = { ...this.state, ...newState };
        
    }
    _updateDom() {
        const dom = VirtualDom.getInstance();
        console.log(dom);
        const {type, props} = this.render();
        console.log(dom.find({type, props}));
    }
}

export default Component;