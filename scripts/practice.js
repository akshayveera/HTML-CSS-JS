

// // variables

// let a = -10;
// let b = 20;

// // printing output
// console.log("a+b :",a+b);
// console.log("practising JavaScript");

// // datatypes

// let c; // here it is undefined

// c = String(c);

// console.log("c :",c);
// console.log("type of c",typeof(c));

// c = 25;
// console.log("c :",c);
// console.log("type of c",typeof(c));

// c = "asdfgh";
// console.log("c :",c);
// console.log("type of c",typeof(c));

// c = true;
// console.log("c :",c);
// console.log("type of c",typeof(c));

// // type-casting

// // 1) Number();
// // 2) String();
// // 3) Boolean();

// a = String(a);
// console.log("a :",a);
// console.log("type of a :",typeof(a));

// a = a+10;
// console.log("a :",a);
// console.log("type of a :",typeof(a));

// a++;
// console.log("a :",a);
// console.log("type of a :",typeof(a));

// let str = null;
// console.log("str :",str);
// console.log("type of str:",typeof(str));

// str = Boolean(str);
// console.log("str :",str);
// console.log("type of str:",typeof(str));


// str = Number(str);
// console.log("str :",str);
// console.log("type of str:",typeof(str));

// str = null;
// str = Boolean(str);
// console.log("str :",str);
// console.log("type of str:",typeof(str));

// switch-case

// let grade = "C";

// switch(grade)
// {
//     case "A":
//         console.log("good");
//         break;

//     case "B":
//         console.log("avg");
//         break;

//     case "C":
//         console.log("below avg");
//         break;

//     default:
//         console.log("fail");
// }

// while loop

// let num = 1;

// while(num<=10)
// {
//     console.log(num);
//     num++;
// }

// num = 1;
// do
// {
//     console.log(num);
//     num++;
// }
// while(num<=10);

// for loop

// for(let i=1; i<=10; i++)
// {
//     console.log(i);    
// }


// functions

// function Sum(a,b)
// {
//     console.log("sum :",a+b);
// }

// function SumOfDigits(a,b)
// {
//     return a+b;
// }

// const a = 10;
// const b = 15;

// Sum(a,b);
// console.log("printing fn with no return statement :",Sum(a,b));
// console.log("sum :",SumOfDigits(a,b));

// // function expressions

// const sum = function(a,b)
// {
//     console.log("sum =",a+b);
// }

// sum(a,b);0

// arrow functions

// let a = 20;

// const sq = (a) => console.log(a*a);

// console.log(sq(a));

// callback functions

// const fun = (name, greet) =>
// {
//     console.log("hello ",name)
//     console.log("I am normal function");
//     greet();
// }

// const greet = () => console.log("I am a callback function");

// fun("alien",greet);

// const sumOfSq = (a, b, sq) =>{

//     return sq(a)+sq(b);
// }

// const sq = (a) => a*a;

// console.log(sumOfSq(3,4,sq));

// set timemout fn

// console.log("first statement");
// setTimeout(()=>{console.log("second statement")}, 4000);
// console.log("third statement");

// callback hell 

// const getCheese = (callback) => {
//     console.log("bringing the cheese");
//     setTimeout(()=>{
//         const cheese = "🧀";
//         console.log("here is cheese :",cheese);
//         callback(cheese);
//     }, 2000)
// }

// const makeDough = (cheese, callback) =>
// {
//     console.log("making the dough");
//     setTimeout(()=>{
//         const dough = cheese+"🍩";
//         console.log("here is dough",dough);
//         callback(dough);
//     }, 2000)
// }

// const bakePizza = (dough, callback) =>
// {
//     console.log("baking the pizza");
//     setTimeout(()=>{
//         const pizza = dough + "🍕";
//         console.log("Pizza is baked :",pizza);
//         callback(pizza);
//     },2000)
// }

// getCheese( (cheese)=>{
//     makeDough(cheese, (dough)=>
//     {
//         bakePizza(dough, (pizza)=>{
//             console.log("done with the process of :",pizza);
//         })
//     })
// })

// scope chain

// function a()
// {
//     var b = 10;
//     c();
//     function c()
//     {
//         console.log(b);
//     }
// }

// a();
// console.log(b);       // this results error of not defined as it is out of scope of variable b;


// var a = 10;
// let b = 20;
// const c = 30;

// console.log(window.a);
// console.log(this.a);
// console.log(a);
// console.log(window.b);
// console.log(this.b);
// console.log(b);
// console.log(window.c);
// console.log(this.c);
// console.log(c);
// console.log(window.d);
// console.log(this.d);
// console.log(d);


// let a = 234;
// console.log(add);

// {
//     let a = 20;
//     console.log(add())
//     function add()
//     {
//         return a+a;
//     }
// }

// function add2()
// {
//     return a+a;
// }

// console.log(add);
// console.log(add());
// console.log(add2);
// console.log(add2());


// closures

// function x()
// {
//     var a = 10;
//     return function y()
//     {
//         console.log(a);
//     }
// }

// var z = x();
// z();

// print the one after one secondd two after two seconds till 5


// for(let a=1; a<=5; a++)
// {
//     function close(a)
//     {
//         setTimeout(function () {console.log(a)},a*2000);

//     }
//     close(a);
// }

// promise chains

// this is a dummy cart
// const cart = ["shirt","pant","shoe"];

// const prom = createOrder(cart);

// prom
// .then(function(orderId){
//     console.log("order ID :", orderId)
//     return orderId;
// })
// // .then(function(orderId){

// // })
// .catch(function(err){
//     console.log(err.message);
//     return "visit again";
// })
// .then(function(msg){
//     console.log(msg);
// })


// function createOrder(cart){

//     const pr = new Promise(function(resolve, reject){

//         if(!validateCart(cart))
//         {
//             const err = new Error("cart is invalid");
//             reject(err);
//         }

//         const orderId = "12345";

//         if(orderId)
//         {
//             resolve(orderId);
//         }

//     });


//     return pr;
// };


// function validateCart(cart)
// {
//     return false;
// }

// const obj = {
//     fn1: function (){
//         console.log(this);
//     },

//     fn2: ()=>{
//         console.log(this);
//     }


// }

// obj.fn1();
// obj.fn2();

// function fun(){

// }

// console.log(fun);

// const person = {

//     name: "Einsten",
//     print: function(){
//         console.log(this);
//     }
// };

// const person2 = {
//     name: "Tesla",
// };

// // below 2 statements are same 
// person.print();
// person.print.call(person);

// // below 2 statements are same 
// person.print.call();
// person.print.call(this);

// // wrt to obj person2
// person.print.call(person2);

// console.log("start");

// setTimeout(()=>{
//     console.log("inside setTimeout");
// });

// console.log("end");

// for(let i=1; i<=5; i++)
// {
//     setTimeout(()=>{
//         console.log(i);
//     },i*1000);
// }

// for(var i=1; i<=5; i++)
// {
//     function print() {
//         var num = i;
//         setTimeout(()=>{
//             console.log(num);
//         },i*1000);
//     }

//     print();
// }

// var a;

// var b = 10;

// console.log(a);
// console.log(b);
// console.log(a+b); // NAN

// const promise = new Promise((resolve, reject) => {
//     const flag = false;
//     if (flag) {
//         resolve("Promise is resolved");
//     }
//     else {
//         reject("Promise is not resolved");
//     }
// });

// console.log(promise);

// promise
//     .then((data) => {
//         console.log(data);
//     })
//     .catch((data) => {
//         console.log(data);
//     })

// const getCheese = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const cheese = "🧀";
//             resolve(cheese);

//         }, 2000)
//     });
// };

// const makeDough = (cheese) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const dough = cheese + "🍩";
//             resolve(dough);
//             // reject("rejected in dough")

//         }, 2000)
//     });
// };

// const bakePizza = (dough) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const pizza = dough + "🍕";
//             resolve(pizza);

//         }, 2000)
//     });
// };

// getCheese()
// .then((data)=>{
//     console.log("got cheese "+data);
//     return makeDough(data);
// })
// .then((data)=>{
//     console.log("made dough "+data);
//     return bakePizza(data);
// })
// .then((data)=>{
//     console.log("baked pizza "+data);
// })
// .catch((data)=>{
//     console.log("error occured : "+data);
// })
// .finally((data)=>{
//     console.log("process done");
// })

// async function orderPizza() {
//     try{
//         const cheese = await getCheese();
//         console.log("got cheese " + cheese);
//         const dough = await makeDough(cheese);
//         console.log("got dough " + dough);
//         const pizza = await bakePizza(dough);
//         console.log("got pizza " + pizza);

//     }
//     catch(data){
//         console.log(data);
//     }
//     finally{
//         console.log("process done");
//     }

// }

// orderPizza();

// console.log(num3);
// console.log(num);
// console.log(num2);

// let num = 9;
// const num2 = 10;
// var num3 = 11;

// var k = 12;


// function one(){
    
//     console.log(k);

// }

// one();


// for(var i=1; i<6; i++)
// {
//     function close(){
//         var num = i;

//         return function fun(){
//             console.log(num);
//         }
//     }
    

//     setTimeout(close(), 1000*i);
// }


// function x(){

//     var a = 10;

//     function y(){
//         console.log(a);
//     }

//     a = 50;

//     return y;

// }


// var z = x();


// cv -> test -> interview -> selected

// function getCheese(callback){

//     console.log("getting cheese");

//     setTimeout(()=>{
//         const cheese = "cheese";
//         console.log("got cheese");
//         callback(cheese);
//     }, 1000)
// }

// function makeDough(cheese, callback){

//     console.log("making dough");

//     setTimeout(()=>{
//         const dough = cheese + "dough";
//         console.log("made dough");
//         callback(dough);
//     }, 1000)
// }

// function bakePizza(dough, callback){
//     console.log("baking pizza");

//     setTimeout(()=>{
//         const pizza = dough + "pizza";

//         console.log("baked pizza");
//         callback(pizza);
//     }, 1000)
// }

// getCheese((cheese)=>{
//     makeDough(cheese, (dough)=>{
//         bakePizza(dough, (pizza)=>{
//             setTimeout(
//                 ()=>{
//                     console.log("final product is ", pizza)
//                 }, 2000
//             )
//         })
//     })
// });


// createOrderId(cart, (orderId)=>{
//     paymentInfo(orderId, (payId)=>{
//         UpdateWallet(payId, (wallInfo)=>{
//             MakeOrder(wallInfo, (madeOrderId)=>{
//                 console.log(madeOrderId, "succesful")
//             })
//         })
//     })  
// })



// const prom =  createOrder(cart);

// const prom2 = prom.then((orderId)=>{
//     return PaymentInfo(orderId);
// })

// const prom3 = prom2.then((payInfo)=>{
//     return UpdateWallet(payInfo);
// })

// const prom4 = prom3.then((wallInfo)=>{
//     return MakeOrder(wallInfo);
// })

// prom3.then((comadeOrderId)=>{
//     console.log(madeOrderId, "succesful")
// })

// createOrder(cart)
// .then((orderId)=>{
//     return payInfo(orderId);
// })
// .then((payId)=>{
//     return UpdateWallet(payId);
// })
// .then((wallId)=>{
//     return makeOrder(wallId);
// })
// .then(()=>{
//     console.log("Done")
// })

// createOrder(cart)
// .then((orderId)=>PayInfo(orderId))
// .then((payId)=>Wallupdate(payId))
// .then((wallId)=>MakeOrder(wallId))
// .then((orderDoneId)=>console.log("done"))


// const judgeNum = (num)=>{

//     return new Promise((resolve, reject)=>{

//         if(num > 0)
//         {
//             resolve ("Number is +ve");
//         }
//         else
//         {
//             setTimeout(()=>{
//                 reject ("Number is -ve")
//             }, 5000);
//         }
//     })

// }

// const fun = async ()=>{
//     try{
//         const p = await judgeNum(-1);
//         console.log(p);
//     }
//     catch(err)
//     {
//         console.log(err);
//     }
// }

// fun();



// const p = judgeNum(-5);

// console.log(p);

// p
// .then((data)=>{
//     console.log(data);
// })
// .catch((err)=>{
//     console.log(err);
// })

// setTimeout(()=>{
//     console.log(p);
// }, 6000);

async function fun (){
    console.log("async fun");
}

console.log(fun());




















