import { createElement } from './UgoJs/createElement/createElement';
import ClickBox  from './Containers/ClickBox';
 
function App() {
    return createElement('div', {className: 'App', children: [
        createElement('h1', {
            innerText:'Hello world', 
            onClick:()=>{console.log('clicked')}
        }),
        createElement('p', {innerText:'Bonjour'}),
        new ClickBox({})
    ]});
}

export default App;