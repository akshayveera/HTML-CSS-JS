
// to import first of all we need to make this file as module
// to make it module we need to specify its attibute type to module(type="module") in script tag in html doc


// As our program grows bigger, it may contain many lines of code. 
// Instead of putting everything in a single file, you can use modules to separate codes in separate files according to their functions. 
// This makes our code organized and easier to maintain.
// Benefits of Using Modules:
// 1) The code base is easier to maintain because different codes having different functionalites are in different files.
// 2) Makes code reusable. You can define a module and use it numerous times as per your needs

import{add, substraction as sub} from "./28 utility.js";


console.log(add(5,4,2));
console.log(sub(-5,-4,-2));

// this is default one
// there is no need of using brackets in case of default
// we can also change its name as there is only one default function
import mul from "./28 utility.js";
console.log(mul(10,5,4));

import * as utility from "./28 utility.js";
// all are imported from utility.js

console.log(utility.student);

console.log(utility.div(10,1/5,1/4));

