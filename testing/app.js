const hello = () => {
    let sayHi = 'hello world'

    console.log( sayHi );
};

const add = (a, b) => {
    return a + b;
}

const promiseTest = () => {
    return new Promise( (res, rej) => {
        res('this worked')
    });
};

module.exports = {
    add,
    promiseTest,
    hello,
 };