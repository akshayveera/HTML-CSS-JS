
// callback function - a callback is a function passed as an argument to other function

// function call and passing a function are different. When we call a function we write function name and also parameters
// But in case of callback function we just pass the function into other function as an argument
// So, while passing a function into other function as an argument we just write the name of the function we dont mention its parameters


// function
function greet(name, callback)
{
    console.log("Hi"+" "+name);
    callback();
}

// callback function 
function callMe()
{
    console.log("I am callback function");
}

// passing function as an argument
greet("Coder", callMe);


// another example

const sumOfSq = (a,b,sq) => 
{
    const asq = sq(a);
    const bsq = sq(b);

    return asq+bsq;
}

// callback function
const Sq = (a) => a*a;

const ans = sumOfSq(10,9,Sq);
console.log("sum :",ans);


console.log(callMe());





