
export function compareTrees(current, next, dom) {
    if(!current || !next) return;
    compareProps(current.props, next.props, dom);
    compareChildren(current.children, next.children, dom);
}

function compareProps(currentProps, nextProps, dom) {
    const currentArr = Object.keys(currentProps);
    const nextArr = Object.keys(nextProps);
    
    let arr = currentArr.length > nextArr.length? currentArr: nextArr;
    for(let key of arr) {
        if(key==='children' || key==='key'|| key==='id')  continue;
        if(currentProps[key]!==nextProps[key]) {
            if(!nextProps[key]) {
                dom[key] = '';
                delete currentProps[key];
            }
            if(!currentProps[key]) {
                dom[key] = nextProps[key];
                currentProps[key] = nextProps[key];
            } else {
                dom[key] = nextProps[key];
                currentProps[key] = nextProps[key];
            }
        }
    }
}

function compareChildren(current, next, container) {
    let len = Math.max(current.length, next.length);
    for(let i = 0; i < len; i++) {
        if(!current[i]) {
            container.appendChild(next[i].render());
            
            current.push(next[i]);
            continue;
        } else if(!next[i]) {
            container.removeChild(container.childNodes[i]);
            
            current.splice(i, 1);
            i--;
            len--;
            continue;
        } else if(current[i].type !== next[i].type) {
            container.removeChild(container.childNodes[i]);
            container.appendChild(next[i].render());
            
            current.splice(i, 1);
            current.push(next[i]);
            continue;
        };
        compareTrees(current[i], next[i], container.childNodes[i]);
    }
}

