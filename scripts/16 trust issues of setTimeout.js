
// trust issues of setTimeout

// setTimeout() doesnt always executes at the delay(which is mentioned), sometimes it may take little longer to execute
// beacuse if the js code takes more time than the delay we have mentioned, after the delay the callback fn is moved to callback queue but event loop cannot push it into call stack as there is other code running in callstack(ie call stack is not empty)
// after the execution of maincode, the GEC is popped of the call stack, now the call stack is empty so event loop now pushes the function to call stack and it is executed now


console.log("Start");

setTimeout(()=>{console.log("Callback")}, 5000)  // mentioned a delay of 5 sec

console.log("End")

// millions of lines of code which takes 10 sec to execute

// as it is not pratical now to write millions of lines of code
// we simluate a code which blocks main thread for 10 sec

// main thread means call stack, blocks means it doesnt empty the call stack for 10 sec

let startTime = new Date().getTime();      // this gives time at which this line is executed
let endTime = startTime;

while(endTime < startTime + 10000)         // this condition become false after endtime is 10sec ahead of startTime
{
    endTime = new Date().getTime();        // at every instant endTime is getting updated with current time
    if(endTime == startTime + 5000)
    {
        console.log("5 seconds passed");
    }
}

// after 1o sec this loop gets ended

console.log("Loop exited")

