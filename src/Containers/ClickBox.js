import {Component, createElement } from '../UgoJs/ugo';

class ClickBox extends Component{
    constructor(props) {
        super(props);
        this.state = {
            text: 'ON',
            isOn: true
        }
    };

    clickHandler() {
        // console.log(this.tree.props.children[0].props.id)
        this.setState({isOn: !this.state.isOn})
        
    };

    render() {
        return(
            createElement('div', {} ,
                createElement('button', {
                    innerText: this.state.isOn? 'On' : 'Off', 
                    onClick:this.clickHandler.bind(this)} 
                ),
            )
        );
    };
};

export default ClickBox;