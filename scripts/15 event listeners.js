

// event listeners

function attachEventListeners()
{
    let count = 0;
    document.getElementById("clickMe").addEventListener("click",function counter(){console.log("Button Clicked", ++count);});
}

attachEventListeners();
    
