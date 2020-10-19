import { createElement } from '../../UgoJs/ugo';

function elements(props) {
    return (
        createElement('ul', {} ,
            ...props.elements.map(element => createElement('li', {innerText: element}))
        )
    )
}

export default elements;