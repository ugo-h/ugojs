import Component from '../UgoJs/renderToDom/Component';
import {createElement} from '../UgoJs/createElement/createElement';

class ClickBox extends Component{
    constructor(props) {
        super(props);
        this.state = {
            text: ''
        }
    }
    clickHandler() {
        console.log('clicked on click box');
        this.setState({text:'null'})
    }
    render() {
        return(
            createElement('div', {innerText: 'click Me!', onClick:this.clickHandler.bind(this)})
        )
    }
}

export default ClickBox;