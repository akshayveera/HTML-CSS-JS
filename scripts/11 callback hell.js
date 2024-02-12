
//  callback hell - the phenomenon of nesting multiple callback fns in a fn is callback hell

// if we print the fn with no return statement then it return undefined
// ex -
// ()=>{
//     statement-1;
//     statement-2;
//     return undefined;
// }


// cheese -> dough -> pizza

function getCheese(callback)
{
    console.log("bringing the cheese");

    setTimeout(
        ()=>{
            const cheese = "🧀";
            console.log("here is cheese",cheese);
            callback(cheese);
        },2000
    )
}

const makeDough = (cheese, callback)=>
{
    console.log("making the dough");

    setTimeout(() => {
        const dough = cheese + "🍩";
        console.log("here is dough",dough);
        callback(dough);        
    }, 2000);
}

function bakePizza(dough, callback)
{
    console.log("Baking the pizza");

    setTimeout(() => {
        const pizza = dough + "🍕";
        console.log("here is pizza", pizza);
        callback(pizza);
    }, 2000);
}

getCheese(
    (cheese)=>{
        makeDough(cheese,
            (dough)=>{
                bakePizza(dough,
                    (pizza)=>{
                        console.log("got the pizza",pizza);
                    }
                )
            }
        )
    }
)


// this is what call back hell is
// it is hard to read,understand or debug the code, it is not readable


