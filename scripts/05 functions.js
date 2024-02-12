
// In JS we can define a function anywhere above or below the function call, beacuse in JS when the function call occurs it searches in the whole file whether the function is defined which is known as hoisted

// Important Note 
// JavaScript declarations(both variables as well as functions) are hoisted that means we can declare the variable even after the use of it, in the same way we can delcare the function after its function call

// function with print statement but no return statement
function sumOfTwo(a,b)
{
    const sum = a+b;
    console.log("sum :",sum);
}

// function with return statement but no print statement
function sumOfTwoNum(a,b)
{
    return a+b;
}

// function expression
// we can store function in variable name
// in case of function expressions function calling should be after function expression declaration
// in case of other function they can be defined any where
const sq = function(a)
{
    return a*a;
}

// nested function
function sumOfSq(a,b)
{
    function sq(a)
    {
        return a*a;
    }

    return sq(a)+sq(b);
}


const a = 10;
const b = 9;

// function call with print statement but no return statement
sumOfTwo(a,b);   
// o/p - sum : 19
console.log("printing a function with no result statement :",sumOfTwo(a,b)); 
// o/p  - sum : 19
// undefined   - here it results undefined because we are not returing anything but printing it

// function call with return statement but no print statement
sumOfTwoNum(a,b);
// no output
console.log("sum :",sumOfTwoNum(a,b));
// sum : 19

// function call of function expression
console.log(sq);
console.log("sq :",sq(9));

// nested function
console.log("sum of squares :",sumOfSq(a,b));




