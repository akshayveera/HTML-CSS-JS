

// hoisting - is a phenomena where js execution context store all the variables and functions in its memory before the execution of code

// 1. Hoisting in JavaScript is a process in which all the Variables, Functions and Class defination are declared BEFORE execution of the code 
// 3. Variables are initialised to UNDEFINED when they are declared and Function defination is stored AS IT IS.
// 4. They are declared in Memory Allocation Phase in the Memory Component of Execution Context, so we can use them even BEFORE they are declared.
// 5. UNDEFINED means Variable has been declared but value is not ASSIGNED but NOT DEFINED means Variables is NOT DECLARED.
// 6. When we assign Function defination to a variable, we CAN NOT call this Variable as Function BEFORE declaration as it will behave as Variable with UNDEFINED value.



// getGreet();
// console.log(num);
// console.log(getGreet);
// console.log(getGreet());
// in the above steps the variables and functions are stored in memeory ie, memory allocation phase is completed that is known as hoisting 
// we get undefined for console.log(num) because the value to num is not still assigned
// we also get undefined for console.log(getGreet()); because, we are printing a function call with no return statement. A function with no return statement is similar to a function with return undefined at the end

var num = 10;

function getGreet()
{
    console.log("Namaste Javascript");
}

var newFun = ()=>
{
    var number = 100;
    console.log(number);
    console.log(this.num);
}

console.log("after initializations");

getGreet();
console.log(num);
console.log(getGreet);
console.log(getGreet());
newFun();
