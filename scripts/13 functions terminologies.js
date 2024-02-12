
// some important function terminologies


// a();   // we can call a() here cuz it is function statement(so it is hoisted)
// b();   // we cannot call b() here it results in error cuz it is a function expression(so it is not hoisted)



// function statement aka function declaration
function a()         // this type of function creation is function statement
{
    console.log("a is called");
}
a();

//////////////////////////////////////////////////////////////////////////////////////



// function expression
// functions are very beautiful in js cuz, we can assign a function to a variable also 
// here function acts as a value, so we can initialise a variable with function.
// here its like we are initialising the variable b with a function (here function acts as a value) 

var b = function ()     // this type of function creation is function expression
{
    console.log("b is called");
}
b();

// difference between function statement and function expression is hoisting
// we can call a function statement before declaration, but we cannot call a function expression before declaration and initialisation
// before starting code execution all function statements are stored in memory, but all function expressions are not stored 
// in case of function expressions, variables are hoisted with undefined but respective functions are not assigned to them


//////////////////////////////////////////////////////////////////////////////////////


// anonymous function
// a function without a name is anonymous function

// function()
// {
    
// }

// this above thing is anonymous function, it looks same as function statement with no name(that means it doesnt have identity)
// this results in error cuz, as per js syntax a function statement should always have a name
// so where do we use anonymous functions?
// anonymous function are used where functions are used as values, just like you assign any other value to a variable you can assign a function to variable
// in function expressions we use anonymous function as values to initialise a variable


//////////////////////////////////////////////////////////////////////////////////////


// named function expression

var c = function abc()     // this type of declaration is named function expression
{
    console.log("c is called");
}
c();
// xyz(); // if we try to call it it throws error cuz it is not in this scope


//////////////////////////////////////////////////////////////////////////////////////



// difference between pararmeters and arguments ?

// parameters are variables defined by a function when a function is declared
// arguments are the variables which we pass into a function in a function call


//////////////////////////////////////////////////////////////////////////////////////



// first class functions aka first class citizens
// A programming language is said to have First-class functions if functions in that language are treated like other variables

// that means
// In js we can use a function as value 
// this ability of functions(to act as value) 
// 1) to assign it to a variable or 
// 2) can be passed into other function as an argumnet and 
// 3) can be returned from a functions 
// these ablities of functions is known as first class functions

// arrow functions