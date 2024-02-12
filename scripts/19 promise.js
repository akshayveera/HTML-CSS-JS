

// promise - a promise is an object representing eventual completion or failure of an async operation

// this is just an example
// // let us assume there are two APIs createOrder() and proceedToPayment() which return a promise 

// const cart = ["shirt", "pant", "shoe"];

// // traditional method

// createOrder(cart, function(OrderId){
    //     proceedToPayment(orderId);
    // });
    
    
    // // in this method proceedToPayment() API is passed into createOrder() API so it is in control of createOrder() API and not in our control
// // this is known as inversion of control
// // but in below case the function is not passed into other function, it is just attached to the promise so that it is executed when the promise is resolved

// // using promise

// const promise = createOrder(cart);

// promise.then(function(orderId){
//     proceedToPayment(orderId);
// })


// real example using fetch

const GITHUB_API = "https://api.github.com/users/akshaymarch7";

const user = fetch(GITHUB_API);
// here fetch return a data and promise and it is stored in user

console.log(user);

// after resolving the promise, this is executed
user.then(()=>{console.log("promise is fullfilled")});


// call back hell demo

const cart = ["shirt", "pant", "shoe"];

createOrder(cart,function(orderId){

    proceedToPayment(orderId, function(payInfo){

        showOrderSumm(payInfo, function(summSlip){

            updateWalletBal(summSlip);
        });
    });
});

// this is known as callback hell where multiple nested callbacks occur
// the code grows horiazontally not vertically
// this structure is also known as pyramid of doom

// this can be solved through promise queue 

const prom = createOrder(cart);

const prom2 = prom.then(function(orderId){
    return proceedToPayment(orderId);
});

const prom3 = prom2.then(function(payInfo){
    return showOrderSumm(payInfo);
});

const prom4 = prom3.then(function(summSlip){
    return updateWalletBal(summSlip);
});

// this can also be wwritten as

createOrder(cart)
.then(function(orderId){
    return proceedToPayment(orderId);
}).then(function(payInfo){
    return showOrderSumm(payInfo);
}).then(function(summSlip){
    return updateWalletBal(summSlip);
});

// this can also be written using arrow functions

createOrder(cart)
.then((orderId)=>proceedToPayment(orderId))
.then((payInfo)=>showOrderSumm(payInfo))
.then((sumSlip)=>updateWalletBal(summSlip));





    
    
    
    
    




