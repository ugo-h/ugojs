import {createElement} from '../src/ugo';


test('test createElement', () => {
    expect(createElement('div', {}).toString()).toBe('<div></div>')
})

test('test createElement with children', () => {
    expect(createElement('div', {}, createElement('p',{})).toString()).toBe('<div><p></p></div>')
})

test('test createElement with props', () => {
    expect(createElement('div', {className:'App'}).toString()).toBe('<div className="App"></div>')
})