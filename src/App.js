import { createElement } from './UgoJs/createElement/createElement';
import ClickBox from './Containers/ClickBox';
import Item from './Containers/Item';

function App() {

    function pressHandler() {
        console.log('btn pressed')
    }

    return createElement('div', {className: 'App'},
        createElement('h1', {
            innerText:'Hello world'
        }),
        createElement('p', {innerText:'Bonjour'}),
        Item({content:'Press me', click: pressHandler})
    );
}

export default App;