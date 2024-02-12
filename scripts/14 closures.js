
// A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment). In other words, a closure gives you access to an outer function's scope from an inner function. In JavaScript, closures are created every time a function is created, at function creation time.


// function ab(){
//     var ab1 = 7;
//     function bc(){
//         console.log(ab1);
//     }
//     return bc;
// }

// var cd = ab();
// // after execution of above step the whole function is removed from call stack

// console.log(cd);
// // function bc is stored

// // but does there is no lexical environment for it now because it is removed from call stack after its execution now how does it work
// cd();

// // it is printing the value of ab1 which is outside function bc 
// // because it doesn't forget it's lexical environment 
// // when a function is returned, refernce to it's lexical environment is also returned

// function a(){
//     var a1 = 1;
//     function b(){
//         var b1 = 2;
//         function c(){
//             console.log(b1);
//             console.log(a1);
//         }

//         return c;
//     }

//     return b();
// }

// var d = a();
// console.log(d);

// d();
// the function returned is only c but it can print the value of function b() and function a() also
// this is possible beacuse when we return a function its closure is returned


// print 1 at 1sec, 2 at 2sec ... 5 at 5th sec

// for(var a=1; a<=5; a++){
//     setTimeout(()=>{
//         console.log(a);
//     }, a*1000);
// }

// this doesnt work because var has global scope and after updation of var to 6, setTimeout() is being executed

// for(let a=1; a<=5; a++){
//     setTimeout(()=>{
//         console.log(a);
//     }, a*1000);
// }

// we can simply slove it using let variable, cuz execution of let in for loop is diff, it creates a new variable a for every iteration

// but if we have to do it with var only we have two options
// 1) we can make use of closure concept
// 2) we can make use of self invoking function ()

// lets do it with closure concept

for(var i=1; i<=5; i++)
{
    function close(x){
        // simply x = i;
        setTimeout(()=>{
            console.log(x);
        }, x*1000)
    }

    close(i);
}

// this creates a new variable x for every iteration and assigns it a value i, as x is in the closure of setTimeout() it can execute correctly 







