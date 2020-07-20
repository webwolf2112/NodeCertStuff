const app = require('./app');

const spy = jest.spyOn(console, 'log');

describe('app.js', () => {
    it('should add the two numbers', () => {
        const actual = app.add( 3, 5 );
        expect(actual).toEqual(8);
    });
    it('should console', () => {
        app.hello();
        expect(spy).toHaveBeenCalledWith('hello world');
    });

    it('should return hello world', () => {
        expect.assertions(1);
        app.promiseTest().then((data) => {
            expect(data).toEqual('this worked');
        });
    });
});