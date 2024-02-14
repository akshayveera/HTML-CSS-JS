
const obj1 = {
    fname : "Abdul",
    lname : "Kalam",
    fun : function(){
        console.log(this.fname + " " + this.lname);
    }
}

obj1.fun();

const obj2 = {
    fname : "Ratan",
    lname : "Tata"
}

// call is used for function/method borrowing from other objects
obj1.fun.call(obj2);

// we can do like this by defining a function (which can be used again) outside the object  

const obj3 = {
    fname : "Abdul",
    lname : "Kalam"
}

const obj4 = {
    fname : "Ratan",
    lname : "Tata"
}

function fun(p1, p2){
    console.log(this.fname + " " + this.lname + " " + p1 + " " + p2 );
}

fun.call(obj3, "arg1", "arg2");
fun.call(obj4, "arg1", "arg2");


// in this call method, first argument is refernce to the object and other arguments can be the arguments of the actual function

// apply 

// the call method and apply method are same but the only difference is that the way we pass the arguments of the function
obj1.fun.apply(obj2);

fun.apply(obj3, ["arg1", "arg2"]);
fun.apply(obj4, ["arg1", "arg2"]);

// bind
// bind method is also used for function borrowing/sharing
// but it doesnt directly call the function, it returna the copy of that function

console.log("bind");

const binFun = fun.bind(obj3);
binFun("arg1","arg2");

// fun.bind(obj3)("arg1","arg2");


