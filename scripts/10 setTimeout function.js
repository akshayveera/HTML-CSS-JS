
// js is synchronous lang ie, one statement is executed at a time and every staement is executed in order

// setTimeout is fn which executes the given fn after given milliseconds but it doesnt stop other functions in function's stack which makes the fn asynchronous
// setTimeout(fn, milliseconds)


console.log("Hello");
setTimeout(()=>console.log("Good Morning"),3000);   // this fn executes after 5 sec
console.log("World"); 


// here str will not be returned because it is in anonymous function
setTimeout(
    ()=>{
        console.log("Experimenting with timeout");
        let str = "this is return";
        return str;
    },4000    
);
