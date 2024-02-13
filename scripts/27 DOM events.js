

// what is an Event ?
// an event allows you to write js code that reacts to certain situations or actions
// examples of events
//   1) user click the mouse button
//   2) webpage loading

// as of today, there are 2 ways to handle events in js
// 1) by using an event handler
// 2) by addig an event listener

// 1) event handlers
// JavaScript provides various kinds of event handlers that get triggered based on specific actions on the HTML elements.

function clickEvent()
{
    console.log("I was clicked");
}

function mouseOver()
{
    console.log("Mouse is over");;
}

function mouseMove()
{
    console.log("Mouse is moving");;
}

function keyEventUp()
{
    console.log("Key is up");;
}

function keyEventPress()
{
    console.log("key is pressed");;
}

function keyEventDown()
{
    console.log("key is down");
}



// 2) event listeners

// diff between event handlers and event listerns

// 1) event handlers is written in html file where as event listerns is written in js file itself

// 2) same events are present in both but the difference in the names of events is "on" 
// that means event handlers start with "on" where as event listener names doesnt contain "on" at beginning everything else is same
// ex: for event handlers - "onclick" , for event listeners - "click"

// 3) we cannot add multiple event handlers for same events if we do so newer one will override the old one
// but in case if event listeners we can add multiple event listeners for same event

// 4) In case of event listeners if we declare any parameter in callback function of an eventlistener, that points to an objects in which all the information about the event is stored
// we can access that informative object using that parameter
// it is not there in case of event handler


const box1 = document.getElementById("box-1");
box1.addEventListener("click",()=>{console.log("clicked (el)")})
box1.addEventListener("click",()=>{console.log("I am second event listener of event click ")})
// we can also add multiple event listeners for same event click


const box2 = document.getElementById("box-2");
box2.addEventListener("mouseover", ()=>{console.log("mouse is over (el)")})

const box3 = document.getElementById("box-3");
box3.addEventListener("mousemove",()=>{console.log("mouse is moving (el)")})

const box4 = document.getElementById("box-4");
box4.addEventListener("mousemove",(event)=>{
    console.log("mouse is moving",event.clientX,event.clientY);
})

const inputForm = document.getElementById("input");
inputForm.addEventListener("keydown",(event)=>{
    console.log("key is down :",event.key);
});








