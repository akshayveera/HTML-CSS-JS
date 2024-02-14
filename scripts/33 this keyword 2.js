
"use strict";
// this is used to run js in strict mode

// this in global object 

console.log("this in global space");
console.log(this);
// this keyword in global space represent global object
// in browser global object is winodw
// in node global object is global


// this inside a function

console.log("this inside a function");

function fun(){
    // this value inside a function depends on strict or nonstrict mode
    // i) in strict mode : this is undefined 
    // ii) in non strict mode : this point to window

    // by default this keyword inside a function is undefined
    // but there is phenomena known as this substitution that is
    // if the value of this keyword is undefined or null, then this keyowrd is replaced with global object
    console.log(this);
}

// the value of this in strict mode also depends on how the value is called

fun();  // this is undefined here
window.fun() // this is window here

// this inside an object's method

// method - a function inside an object

// this inside an object's method this points to object itself

console.log("this inside an object's method");

const obj = {
    name : "Akshay",
    lang : "js",
    funInObj : function(){
        console.log(this);
    }
}

obj.funInObj(); // this is obj here

// this inside arrow function

// Arrow functions doesn't provide their own this bindings, 
// this in arrow functions retains the this value of the enclosing lexical context
console.log("this inside object's method");

const obj1 = {
    a : 10,
    fun : ()=>{
        console.log(this);
    }
}

obj1.fun();  // this points to window here, as its enclosing lexical context is global space

const obj2 = {
    a :20,
    fun : function(){
        const arrFun = ()=>{
            console.log(this);
        }
        arrFun();

        // the above function call can also be written as
        // (()=>{
        //     console.log(this);
        // })()

    }
}

obj2.fun(); // this points to obj2 here, as its eclosing lexical context is obj2


// this in DOM element

// this keyowrd in DOM element gives reference to HTML element


// this in call, apply, bind methods (sharing methods)