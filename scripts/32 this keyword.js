

// this refers to the object that is currently calling the function

var age = 30

function displayAge(){
    console.log(this.age);
    console.log(this);
}

// case 1

displayAge();
// similar to window.displayAge()
// so the object calling display age is window
// hence, this refers to window


var person = {
    
    age : 25,
    displayAge : displayAge,

    nestedPerson : {
        age : 5,
        displayAge : displayAge
    }
}

// case 2 

person.displayAge();
// now displayAge is being called by object person
// so this refers to object person

// case 3

person.nestedPerson.displayAge();
// here nested person is calling the function displayAge()
// so here this refers to object nestedPerson()


// scope of the function depends on where the function is defined but
// this keyword works opposite
// the value of this keyword is determined by how a function is called (not where function is defined)

console.log("---------------------------------------------------------");

// case 4

var person2 = {

    age : 40,

    greet1 : function(){
        console.log("Greet 1 :", this.age);
        console.log("Greet 1 :", this)

        function greet2(){
            console.log("Greet 2 :", this.age);
            console.log("Greet 2 :", this)
        }

        greet2();
    }
}

person2.greet1();
// here this in greet1 refers to object person2
// but this in greet2 refers to window object
// because greet1 is called by object person2
// but greet2 is not called by person2 it is normally called

console.log("---------------------------------------------------------");


// case 5 : arrow functions 

var person3 = {

    age : 70,

    greet1 : function(){
        console.log("Greet 1 :", this.age);
        console.log("Greet 1 :", this);

        // arrow function
        greet2 = ()=>{
            console.log("Greet 2 :", this.age);
            console.log("Greet 2 :", this);
        }

        greet2();
    }
}

person3.greet1();

// arrow functions doesnt contains this keyword
// in case of arrow functions, the value of this keyword is determined by where the arrow function is created
// this in arrow function : based on the scope of the arrow function defined within


// diff between "this" keyword in normal function and arrow function 
// why does this happen 

var obj = {
    fun1 : function(){
        console.log(this);
    },

    fun2 : ()=>{
        console.log(this);
    },
    
}

obj.fun1();
obj.fun2();
