import { createElement, Component } from '../../UgoJs/ugo';
import Elements from './Elements';

class List extends Component{
    constructor(props) {
        super(props);
        this.state = {
            elements:[],
            input: ''
        }
    };

    componentDidMount() {
        console.log('Mounted');
        this.setState({elements:['Dummy']})
    }

    addElementHandler() {
        const elements = this.state.elements;
        elements.push(this.state.input);
        this.setState({elements, input:''});
    }
    clearHandler() {
        this.setState({elements: []});
        console.log(this.state);
    }

    inputChangeHandler(ev) {
        const input = ev.target.value;
        this.setState({input})
    }
    render() {
        console.log('render')
        return(
            createElement('div', {},
                createElement('input', {value: this.state.input, onChange: this.inputChangeHandler.bind(this)}),
                createElement('button', {innerText: 'Add element', onClick: this.addElementHandler.bind(this)}),
                createElement('button', {innerText: 'Clear', onClick: this.clearHandler.bind(this)}),
                createElement('h2', {innerText: 'List of Elements: '}),
                createElement(Elements, {elements: this.state.elements})
            )
        )
    }
}

export default List;