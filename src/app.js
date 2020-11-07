import { createElement, Component } from './ugojs/ugo';

class App extends Component {
    render() {
        return(
            createElement('div', {className: 'App'}, 
                createElement('h1', {}, 'Hello World!')
            )
        )
    }
};

export default App;