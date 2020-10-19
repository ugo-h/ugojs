import { createElement } from '../UgoJs/ugo';

import './App.css';
import List from './Containers/List';
import Parent from './Containers/ClickBox';
import Posts from './Containers/Posts';

function App() {
    return createElement('div', { className: 'App' },
        createElement('h1', {
            innerText:'Hello world'
        }),
        createElement(Parent, {}),
        createElement(Posts, {})
    );
}

export default App;