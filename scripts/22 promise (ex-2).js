
// promise ex-2


function getCheese(){

    return new Promise(function(resolve, reject){        
        setTimeout(()=>{
            const cheese = "🧀";
            resolve(cheese);
            // reject("cheese is bad");
        }, 2000);
    });

};

function makeDough(cheese){

    return new Promise(function(resolve, reject, ){
        setTimeout(()=>{
            const dough = cheese+"🍩";
            resolve(dough);
            // reject("Dough is bad");
        }, 2000);
    });

};

function bakePizza(dough){

    return new Promise(function(resolve, reject){
        setTimeout(()=>{
            const pizza = dough+"🍕";
            resolve(pizza);
            // reject("Dough is bad");

        }, 2000);
    });

};

// getCheese()
//     .then((cheese)=>{
//         console.log("here is cheese",cheese);
//         return cheese;
//     })
//     .then((cheese)=>{
//         return makeDough(cheese);
//     })
//     .then((dough)=>{
//         console.log("here is dough",dough);
//         return dough;
//     })
//     .then((dough)=>{
//         return bakePizza(dough);
//     })
//     .then((pizza)=>{
//         console.log("here is pizza",pizza);
//     })
//     .catch((data)=>{
//         console.log("error occured :",data);
//     })
//     .finally(()=>{
//         console.log("procedure ended");
//     })


getCheese()
    .then((cheese)=>{
        console.log("here is cheese",cheese);
        return makeDough(cheese);
    })
    .then((dough)=>{
        console.log("here is dough",dough);
        return bakePizza(dough);
    })
    .then((pizza)=>{
        console.log("here is pizza",pizza);
    })
    .catch((data)=>{
        console.log("error occured :",data);
    })
    .finally(()=>{
        console.log("procedure ended");
    })