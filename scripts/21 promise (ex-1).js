

const ticket = new Promise(function(resolve, reject){

    const isBoarded = true;
    if(isBoarded){
        resolve("Flight is booked");
    }
    else
    {
        rejecct("Flight is cancelled");
    }
})

ticket
.then(function(msg){
    console.log("Wow",msg);
})
.catch(function(msg){
    console.log("Ohh",msg);
})
.finally(function(){
    console.log("I will be executed anyways");
})