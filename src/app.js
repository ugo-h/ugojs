import { createElement, Component } from './ugojs/ugo';

class Item extends Component {
    render() {
        return(createElement('p', {}, 'This app is made with ugo.js'))
    }
}

function App() {
    return(
        createElement('div', {className: 'App'}, 
            createElement('h1', {}, 'Hello World!'),
            createElement(Item, {})
        )
    )
};

export default App;