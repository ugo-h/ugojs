import {createElement} from '../UgoJs/createElement/createElement';

function Item(props) {
    
    function pressHandler() {
        console.log('btn pressed');
        const element = document.getElementById(props.id);
        element.remove()
    
    }
    return(
        createElement('div', {className:'Item', id:props.id},
            createElement('p',{innerText: props.content}),
            createElement('button', {innerText: 'PRESS', onClick: pressHandler})
            
        )
    )
}

export default Item;