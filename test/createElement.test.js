import {createElement} from '../UgoJs/ugo';


test('test', () => {
    expect(createElement('<div>', {}).toString()).toBe('<div><div>')

})
