const hello = () => {
    return new Promise(( res, reject )=>{
        setTimeout(() => {
            res('hello');
        }, 400);
    });
};

const goodbye = () => {
    return new Promise((res, rej) => {
        setTimeout(() => {
            rej( new Error('see ya later'))
        }, 600)
    });
}

const sayHello = async () => {
    try {
        const whatToSay = await hello();
        const goodBye = await goodbye();
        console.log( whatToSay ); 
        console.log( goodBye );
    } catch(err) {
        console.log( err );
    }

}; 

sayHello();
