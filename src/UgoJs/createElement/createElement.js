import render from '../renderToDom/render';

export function createElement(type, props) {
    const {children, onClick} = props;
    const element = document.createElement(type.toUpperCase());
   
    if(children) {
        children.forEach(child => {
            render(child, element);
        });
    }
    if(onClick) {
        console.log('adding event listener...')
        element.addEventListener('click', onClick)
    }
    
    for(const prop in props) {
        if(prop === 'children' || prop === 'innerHtml') continue;
        element[prop] = props[prop];
    }
    return element;
}