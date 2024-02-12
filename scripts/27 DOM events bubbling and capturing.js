
// bubbling and capturing

// There are two ways of event propagation in the HTML DOM, bubbling and capturing. 
// Event propagation is a way of defining the element order when an event occurs.
// In bubbling the innermost element's event is handled first and then the outer.
// In capturing the outermost element's event is handled first and then the inner.
// With the addEventListener() method you can specify the propagation type by using the"UseCapture" parameter:

// addEventListener(event, function, useCapture);

// The default value is false, which will use bubbling propagation, when the value is set to true the event uses capturing propagation 

// ex

const box1 = document.getElementById("box-1");
box1.addEventListener("click",()=>{console.log("clicked on box")});

const container = document.getElementById("box-1");
container.addEventListener("click",()=>{console.log("clicked on container")}, true);


// if we see above two event listeners box1 is inside container, so if we click on box1, both the event listeners are executed
// but which executes first ?
// the inner element executes first and then outer and then most outer executes
// the flow which executes inner to outer is bubbling
// the flow which executes outer to inner is capturing
// the default flow is from inner to outer
// we can also reverse this flow using third parameter in outermost element
// default is false that means inner to outer(bubbling)
// but we can also change the flow to outer to inner(capturing)
