
function addition(a,b,c){
    return a+b+c;
}

function substraction(a,b,c){
    return -a-b-c;
}

// there can only be one default  
export default function multiplication(a,b,c){
    return a*b*c;
}

function division (a,b,c)
{
    return a/b/c;
}

export const student = "Ram";

export{
    addition as add,
    substraction,
    division as div
};


