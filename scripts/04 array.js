
// arrays - collection of values 

// in JS we can write different data types in single array, we can also include an object or function as an element of array
// Ex:

const array = [
    "JS",
    123,
    true,
    { 
        name: "random name"
    },
    function hello()
    {
        console.log("Hello World");
    }
];

console.log(array);
console.log(array[3]);
console.log(array[4]);

const arr = ["car","bike","eric"];

// print arr 
console.log(arr)

// access elements of arr through index
console.log(arr[1]);

// length of array
console.log("length of array :",arr.length);

// index of an element - returns -1 if not present in array
console.log("index of car :",arr.indexOf("car"));

// to find if the element is present or not
console.log(arr.includes("chopper"));
console.log(arr.includes("car"));


// push - add element at end
// pop - remove element at end
arr.push("train");
console.log(arr);

arr.pop();
console.log(arr);

// unshift - add element at beginning
// shift - remove element from beginning
arr.unshift("train");
console.log(arr);


arr.shift();
console.log(arr);

// sort the array
arr.sort();
console.log("array after sorting :",arr);

// slice a subarray from original array
console.log(arr.slice(1,3));


// BTS of array

let arr1 = ["car","bike","eric"];

// when we initialize an array, the array is stored in memory some where in contigious form and the name of array ie, "arr1" in this case will point to that location in memory where array is stored

// array is not stored in arr1, arr1 is just pointing to the array location where it is stored

let arr2 = arr1;

// now both the variables arr1 and arr2 are pointing to the same array, changes made through any variable resembles in the same array

arr2.push("train");

console.log(arr1);
console.log(arr2);








