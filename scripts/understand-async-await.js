//--------------------------Not supported by Node till now but can be supported using 'asyncyawait' ;ibrary-----------//

/*async function resolveAfter2Seconds(x) {
    // return new Promise(resolve => {
    //     setTimeout(() => {
    //         resolve(x);
    //     }, 2000);
    // });
    await setTimeout(() => {
        console.log(`2 seconds elapsed`);
        return x;
    }, 2000);
}*/
function resolveAfter2Seconds(x) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(x);
        }, 2000);
    });
}

async function add1(x) {
    console.log('add1 called : ' + new Date());
    var a = resolveAfter2Seconds(20); //.then((response) => {return response;});
    var b = resolveAfter2Seconds(30); //.then(response) => {return response;};
    return x + await a + await b;
}

add1(10).then(v => {
    console.log('add1 printed : ' + new Date());
    console.log(v); // prints 60 after 2 seconds.
});

async function add2(x) {
    console.log('add2 called : ' + new Date());
    var a = await resolveAfter2Seconds(20);
    var b = await resolveAfter2Seconds(30);
    return x + a + b;
}

add2(10).then(v => {
    console.log('add2 printed : ' + new Date());
    console.log(v); // prints 60 after 4 seconds.
});

async function add3(x) {
    console.log('add3 called : ' + new Date());
    return x + await resolveAfter2Seconds(20) + await resolveAfter2Seconds(30);
}

add3(10).then(v => {
    console.log('add3 printed : ' + new Date());
    console.log(v); // prints 60 after 4 seconds.
});