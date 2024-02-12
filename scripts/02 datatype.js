
// datatypes - 5 types
// datatypes is a classification of different types of data. It specifies which type of value(data) a variable has


// 1 - string
// 2 - number
// 3 - boolean
// 4 - undefined
// 5 - object

let a;
console.log("a :",a);
console.log("data-type of a :",typeof(a));

a = 10;

console.log("a :",a);
console.log("data-type of a :",typeof(a));

a = "Hello";

console.log("a :",a);
console.log("data-type of a :",typeof(a));

a = true;

console.log("a :",a);
console.log("data-type of a :",typeof(a));


// type casting

// there are three methods if type casting
// 1) Number()
// 2) String()
// 3) Boolean()

// JS considers 0 as false and all non-zero numbers as true.
// If true is converted to number, the result is always 1, similarly false result in zero if converted to number 

// String takes null and undefined and converts them to string

// In JS, undefined, null, 0, NaN converts to false, all other values gives true




let x = true;

let y = Number(x);

console.log("value of x :",y);



