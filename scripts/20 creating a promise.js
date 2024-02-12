


// The then() method
// The then() method is used with the callback when the promise is successfully fulfilled or resolved.
// The catch () method
// The catch() method is used with the callback when the promise is rejected or if an error occurs.
// The finally () method
// The finally() method gets executed in both the cases (when the promise is either resolved successfully or rejected.)

// this is a dummy cart
const cart = ["shirt","pant","shoe"];

// if there are 20 then promise chains and some promise fails in middle lets say at 15 then everything fails and catch is executed
// but if the catch is set


// producing or creating a promise
function createOrder(cart){
    
    // Promise can be created using a new Promise() constructor
    const pr = new Promise(function(resolve, reject){
        
        // here resolve and reject are keywords provided by js
        // we need to write conditions when to resolve a promise and when to reject
        
        // first step we need to validate cart
        // if it is validated we get orderId
        
        if(!validateCart(cart))
        {
            // if the cart is invalid it comes into this block
            // here we create an error and pass it with reject
            const err = new Error("Cart is invalid");
            reject(err.message);
            // this is what we say handling errors gracefully
        }
        
        // if the control comes here the cart is valid
        // so we resolve the promise with orderId
        const orderId = "12345";        
        
        // this will execute immediately
        // resolve(orderId);      
        
        // if we want to create some delay
        // if we want to resolve after 5 sec
        if(orderId){
            setTimeout(()=>{
                resolve(orderId);
            },5000);
        }
        
    });
    
    return pr;
    
}

function proceedToPayment(orderId){
    
    return new Promise(function(resolve, reject){
        // reject("Payment Unsuccessful");
        resolve("payment successfull");
    });
}


function validateCart(cart){
    // if we return true cart is valid
    // if we return false cart is invalid
    return true;
};


// consuming a promise
const prom = createOrder(cart);

prom
.then(function(orderId){
    // .then is executed when promise is resolved
    console.log("order ID :", orderId);
    // we have to return to next in promise chain
    return orderId;
    // this returned element is taken by nextblock of code in promise chain
})
.then(function(orderId){
    return proceedToPayment(orderId);
})
.then(function(paymentInfo){
    console.log(paymentInfo);
})
.catch(function(err){
    // .catch is executed when promise is rejected
    console.log(err);    
})


// note
// promise
// .then(function(orderId){
//     return proceedToPayment(orderId);
// })
// .then(function(paymentInfo){
//     console.log(paymentInfo);
// })
// .then(function(orderId){
//     return proceedToPayment(orderId).then(function(paymentInfo){
//         console.log(paymentInfo);
//     })
// })  
// we can also combine and write above and below code like this but this go on increase the horizontal code than vertical which results in promise hell
// thats why we need to chain the promises and write in vertical order



