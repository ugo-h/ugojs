import {createElement} from '../UgoJs/createElement/createElement';

function Item(props) {
    return(
        createElement('div', {className:'Item'},
            createElement('p',{innerText: props.content}),
            createElement('button', {innerText: 'PRESS', onClick: props.click})
            
        )
    )
}

export default Item;