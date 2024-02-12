

// map - it is a higher order function, we use it when we need to map all the elements of the array with same mapping logic
// simply if we want to apply same logic on all the elements of array, we use map

const arr = [3, 9, 24, 11];

// ex-1 : double : [6, 18, 48, 22]
// ex-2 : triple : [9, 27, 72, 33]

// function double(x)
// {
//     return x*2;
// }

function binary(x)
{
    return x.toString(2);
}

let output = arr.map(binary);

console.log(output);


// filter - it is used to filter elements based on some condition or logic

// if we want to filter all the even numbers from the array we use this or if we want to filter numbers below 10 we use this

function even(x)
{
    return x%2===0;
}

let evenNum = arr.filter(even);
console.log(evenNum);

function odd(x)
{
    return x%2;
}


let oddNum = arr.filter(odd);
// we can also write it as
// let oddNum = arr.filter((x)=>x%2);
console.log(oddNum);



// reduce - it is used when we need to find sum of array or max if array
// generally we use it when we need any extra variable to store something while traversing
// if you have to traverse an array and have to come out to a single value then there most probably reduce is used

// sum 
let sum = arr.reduce(function (acc, curr){       // accumilator and current
    acc = acc + curr;
    return acc;
}, 0);
// first argument of reduce is a function call
// second argument is initial value of accumilator

console.log(sum);

// max

let max = arr.reduce((max,curr)=>{
    if(curr>max)
    {
        max = curr;
    }

    return max;
}, -1)

console.log(max);


// little complex example

const users = [
    { firstName: "akshay", lastName: "saini", age: 26 },
    { firstName: "donald", lastName: "trump", age: 75 },
    { firstName: "elon", lastName: "musk", age: 50 },
    {firstName: "deepika", lastName: "padukone", age: 26}
];

// print all the full names in users

const fullName = users.map((x) => x.firstName + " " + x.lastName);

console.log(fullName);

// print the count of ages
// {26 : 2, 75 : 1, 50 : 1}

const ageCount = users.reduce((acc,curr)=>{
    if(acc[curr.age])
    {
        acc[curr.age]++;
    }
    else
    {
        acc[curr.age] = 1;
    }

    return acc;
}, {})

console.log(ageCount);


// print the firstname whose age is less than 30

// using filter and map
// const ageList = users.filter((x)=> x.age<30);
// const names = ageList.map((x)=>x.firstName);

// we can do above this in single line also
const ageList = users.filter((x)=> x.age<30).map((x)=>x.firstName);

console.log(ageList);

// do above thing using reduce

const lessThanAge = users.reduce((acc,curr)=>{

    if(curr.age<30)
    {
        acc.push(curr.firstName);
    }

    return acc;

}, [])

console.log(lessThanAge);









