

// DOM - document object model

// When a web page is loaded, the browser creates a Document Object Model of the page.
// The HTML DOM model is constructed as a tree of Objects

// we access that DOM model using keyword "document"

//  Finding HTML elements by id: document.getElementByld("intro");
//  Finding HTML elements by tag name : document.getElementsByTagName("p");
//  Finding HTML elements by class name : document.getElementsByClassName("intro");
//  Finding HTML elements by CSS selectors : document.querySelectorAll ("p.intro");

// accessing html

// this finds the element by id
// const head = document.getElementById("head");
// console.log("head : ",head);

// // this finds the elements with class names
// const boxes = document.getElementsByClassName("box");
// console.log("boxes :",boxes);

// // this finds the elements with class names
// const divs = document.getElementsByTagName("div");
// console.log("divs :",divs);

// // access elements through queries(just as we access in css)

// // this finds the first element matches with the query
// const firstBox = document.querySelector(".box");
// console.log("firstBox :",firstBox);

// // this finds all the elements which matches the query
// const contAndFirst = document.querySelectorAll(".box");
// console.log("querySelectorAll :",contAndFirst);


// modyfing HTML

// changing HTML Content using innerHTML
// document.getElementById(id).innerHTML = new HTML

// changing HTML attributes value
// document.getElementByld("myImage").src = "landscape.jpg";
// document.getElementByld("p2").style.color = "blue";

// modifying class in HTML
// element.classlist.add("mystyle");
// element.classList.remove("mystyle");
// element.classList.toggle("mystyle");

// we can change inner html
const box1 = document.getElementById("box-1");
box1.innerHTML = "Hello World";
// we can also write it like this
// document.getElementById("box-1").innerHTML = "Hello World";

// we can change image in js
document.getElementById("im").src = "images/js.png";

// we can change style using js
box1.style.backgroundColor = "brown";

// we can add or remove class names to elements
const rand = document.getElementsByClassName("box");
for(let i=0; i<rand.length; i++)
{
    rand[i].classList.add("random");
}

// removing class name
document.getElementById("box-1").classList.remove("random");

// toggle - it does opp(if its present, toggle removes and if its not present, toggle adds)
// document.getElementById("box-1").classList.toggle("random");


// creating and appending HTML in js

// We can create a new Element using the createElement() method of the document. 
// We can append this new Element (node) inside any other element.

// const para = document.createElement("p");
// const element = document.getElementByid("div1");
// element.appendChild(para);

const newEle = document.createElement("p");
newEle.innerText = "This is created by js";

const container = document.getElementById("container");
container.appendChild(newEle);

newEle.classList.add("box");








