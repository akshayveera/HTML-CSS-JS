

// async await

function getCheese(){

    return new Promise(function(resolve, reject){        
        setTimeout(()=>{
            const cheese = "🧀";
            resolve(cheese);
            reject("cheese is bad");
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


// this is just like promise chain but with diff syntax

async function makePizza()
{
    try{
        // this is similar to then 
        const cheese = await getCheese();
        console.log("here is cheese", cheese);
    
        const dough = await makeDough(cheese);
        console.log("here is dough", dough);
    
        const pizza = await bakePizza(dough);
        console.log("here is pizza", pizza);
    }
    catch(err){
        // this is similar to catch
        console.log("error occured :", err);
    }
    // this is similar to finally
    console.log("procedure ended");
}

makePizza();


