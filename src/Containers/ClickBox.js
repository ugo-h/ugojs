import Component from '../UgoJs/renderToDom/Component';
import {createElement} from '../UgoJs/createElement/createElement';

class ClickBox extends Component{
    constructor(props) {
        super(props);
        this.state = {
            text: 'ON',
            isOn: true
        }
    }
    clickHandler() {
        this.state.isOn?this.setState({text: 'OFF', isOn:false}) :this.setState({text: 'ON', isOn:true});
        
    }
    render() {
        return(
            createElement('button', {innerText: this.state.text, onClick:this.clickHandler.bind(this)})
        )
    }
}

export default ClickBox;