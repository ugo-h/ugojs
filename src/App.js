import { createElement } from './UgoJs/createElement/createElement';
import ClickBox from './Containers/ClickBox';

function App() {
    return createElement('div', {className: 'App', children: [
        createElement('h1', {
            innerText:'Hello world'
        }),
        createElement('p', {innerText:'Bonjour'}),
        ClickBox.getInstance({innerText: 'Click me please!'}),
        ClickBox.getInstance({innerText: 'Click me second!'})
    ]});
}

export default App;