
// array call back functions

// find() - returns the first array element that passes a test 
// findIndex() - returns the first index of an array element that passes a test
// forEach() - calls a function for each element
// map() - creates a new array with the results of calling a function for every array element
// filter() - returns a new array with all the elements that pass the test defined by the given function
// every() - check whether all the array elements satisfy the given condition or not
// some() - check whether atleast one of the elements of the array satisfies the given condition or not 

const arr = [4,2,6,-1,6,-8,3,6,-2];

// find()

const negNum = (num) => num<0;   // call back function

const a = arr.find(negNum);    // returns first neg num

console.log("first neg num :",a);

// findIndex()

const b = arr.findIndex(negNum);

console.log("Index of first neg num :",b);

// forEach()

const double = (num) => console.log(num*2);  // callback function

arr.forEach(double);





