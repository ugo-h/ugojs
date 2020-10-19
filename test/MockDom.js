export class MockDom{
    constructor(type, props, childNodes) {
        this.type = type;
        this.props = props?props:{};
        this.childNodes = childNodes? childNodes:[];
    }

    setAttribute(name, value) {
        this.props[name] = value;
    }
    deleteAtribute(name) {
        delete this.props[name];
    }
    appendChild(child) {
        this.childNodes.push(child)
    }
    removeChild(index) {
        this.childNodes.splice(index, 1);
    }
    toString() {
        const childNodes = this.childNodes.length>0?this.childNodes.map(child => child.toString()).join(''):'';
        let props = '';
        for(const prop in this.props) {
            if(prop === 'id') continue;
            props += ` ${prop}="${this.props[prop]}"`
        }
        let str = `<${this.type}${props}>${childNodes}<${this.type}/>`;
        return str;
    }
}