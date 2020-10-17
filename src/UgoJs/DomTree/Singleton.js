export default class Singleton{
    constructor() {
        if(Singleton._instance) {
            throw new Error('Instantiation failed. Use Singleton.getInstance instead of new')
        } 
    }

    static getInstance(...props) {
        if(this._instance) {
            return this._instance;
        } else {
            this._instance = new this(...props)
            return this._instance;
        }
    }
}