

class Component {
    constructor(props) {
        this.props = props;
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