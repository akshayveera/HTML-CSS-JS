
// arrow function - shorthand for creating functions

// way one
// () => expression       // no return statement needed in expressions

// way two
// (parameters) => expression

// way three
// () => {
//     statements
// }

// way four
// (para1, para2,...) => {
//     statements
// }

// firstWay
const firstWay = () => console.log("hello world");

firstWay();

// secondWay
const secondWay = (num) => num*num;    // here num*num is returned to function call

console.log(secondWay(9));

// thirdWay
const thirdWay = () => 
{
    console.log("wander more");
    console.log("wander often");
    console.log("wander always");
}

thirdWay();

// fourth way
const fourthWay = (a,b) =>
{
    // const sum = a*a+b*b;
    console.log("sum :",sum)
}

fourthWay(10,9);




