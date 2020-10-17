import Singleton from '../DomTree/DomTree';

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
            return this._instance.render();
        } else {
            this._instance = new this(...props)
            return this._instance.render();
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
        
    }
}

export default Component;