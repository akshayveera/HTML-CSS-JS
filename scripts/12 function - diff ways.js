

// different ways of fn declaration

const a = 9;
const b = 10;



// 1 
function firstWay() {console.log("one")};

// 2
function secndWay() {
    // statements
    console.log("two");
}

// 3
function thirdWay(a,b) {console.log("three : ",a+b)};

// 4
function fourthWay(a,b) {
    //statements
    console.log("four :",a+b);
}

//5
const fifthWay = function(){console.log("five")};

//6
const sixthWay = function(){
    // statements
    console.log("six");
}

//7
const seventhWay = function(a,b){console.log("seven :",a+b)};

//8
const eigthWay = function(a,b)
{
    // statements
    console.log("eigth :",a+b);
}

// 9
const ninthWay = ()=>{console.log("nine")};

//10
const tenthWay = ()=>{
    // statements
    console.log("Ten");
}

//11
const eleventhWay = (a,b)=>{console.log("eleven :",a+b)};

//12
const twelvethWay = (a,b)=>
{
    // statements
    console.log("twelveth :",a+b);
}


firstWay();
secndWay();
thirdWay(a,b);
fourthWay(a,b);
fifthWay();
sixthWay();
seventhWay(a,b);
eigthWay(a,b);
ninthWay();
tenthWay();
eleventhWay(a,b);
twelvethWay(a,b);