

// async await

// async await is used to handle promises

// async 
// async is keyword used to make a function asynchronous
// async function always returns a promise, regardless of the function returning promise
// that means 
        // i) if an async funtion returns promise,  then that promise is returned
        // ii) if an async function returns a normal value, then that value is wrapped inside the promise and that promise is returned



const prom = new Promise((resolve, reject)=>{
    resolve("Promise resolved response");
})

// normal way of handling promises
prom.then((res)=>{
    console.log(res, "using .then()");
})

// handling promise with async await
async function handleProm(){
    const res = await prom;
    console.log(res, "using async await");
}

handleProm();
