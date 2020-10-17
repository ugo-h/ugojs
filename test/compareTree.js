class Node{
    constructor(value, children) {
        this.value = value;
        this.children = children? children: [];
    }
};

function buildTree() {
    return new Node(14, [
        new Node(12),
        new Node(11, [
            new Node(55)
        ]),
        new Node(27)
    ])
}
function buildDifferentTree() {
    return new Node(14, [
        new Node(12),
        new Node(11, [
            new Node(58)
        ]),
        new Node(27)
    ])
}

function compareTrees(first, second, identical=true) {
    if(!first && !second) return identical;
    if(first.children.length !== second.children.length) return false;
    if(first.value !== second.value) return false;
    for(let i = 0; i < first.children.length; i++) {
        identical = compareTrees(first.children[i], second.children[i], identical);
    }
    return identical;
}

let tree1 = buildTree();
let tree2 = buildDifferentTree();
const res = compareTrees(tree1, tree2);
console.log(res)
