import { createElement } from './UgoJs/createElement/createElement';
import Item from './Containers/Item';
import ClickBox from './Containers/ClickBox';

function App() {
    return createElement('div', {className: 'App'},
        createElement('h1', {
            innerText:'Hello world'
        }),
        createElement('p', {innerText:'Bonjour'}),
        
        ClickBox.createElement({})
    );
}

export default App;