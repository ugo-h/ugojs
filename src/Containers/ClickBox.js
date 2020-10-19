import {Component, createElement } from '../../UgoJs/ugo';

class Parent extends Component{
    constructor(props) {
        super(props);
        this.state = {
            value: 0
        }
    };

    clickHandler() {
        this.setState({value: this.state.value+1})
        
    };

    render() {
        return(
            createElement('div', {} ,
                createElement(Child, {
                    value: this.state.value, 
                    click:this.clickHandler.bind(this) }
                )
            )
        );
    };
};

class Child extends Component{
    componentDidMount() {
        console.log('Child component did mount')
    }
    render() {
        console.log('[Child] render')
        return(
            createElement('button', {
                innerText: this.props.value, 
                onClick:this.props.click} 
            )
        )
    }
}


export default Parent;