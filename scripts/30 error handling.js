

// when there is a chance of error or we feel that error may occur we should use try{}catch(){} to handle it gracefully
// we have to put the main code in which error may occur in try block
// and we need to write how to handle error in catch block
// if the we got error in try block it moves to catch block and execute it
// if there is no error in try it just skips catch block

try{
    // this throws error because age is not defined
    console.log(age);
}catch(err)
{
    // error has two parts name and message
    console.log("error name :",err.name);
    console.log("error message :", err.message);
}
finally
{
    console.log("finally executes in both cases incase of error and in case of no error");
}


// if we dont handle error, and if the error occured the lines below it will wont execute if it has any important code this results in failure 
// after handling errors even if error occured the program wont stop and all the important code is execcuted
console.log("This is important task")


// if we want to throw error explicitly we can use throw keyword
// throw keyword throws an error
try{    
    const res = prompt("Are you robot ?");
    if(res === "Y")
    {
        throw new Error("Robots are not allowed");
    }
}
catch(err)
{
    console.log(err.name);
    console.log(err.message);
}
finally
{
    console.log("finally executes in both cases incase of error and in case of no error");
}

