

// array of radius of circle
const radius = [2,7,3,8];

function calArea(radius)
{
    const output = [];
    for(let i=0; i<radius.length; i++)
    {
        output.push(Math.PI * radius[i] * radius[i]);
    }

    return output;
}

console.log(calArea(radius));

function calCircumferece(radius)
{
    const output = [];
    for(let i=0; i<radius.length; i++)
    {
        output.push(2 * Math.PI * radius[i]);
    }

    return output;
}

console.log(calCircumferece(radius));



function calDiameter(radius)
{
    const output = [];
    for(let i=0; i<radius.length; i++)
    {
        output.push(2 * radius[i]);
    }

    return output;
}

console.log(calDiameter(radius));

// this is not the optimal way writing functions

// we have to use the advatages of higher order functions, call back functions, first class functions which provide modularity, abstraction etc

// the optimal way is :

// const radius = [2,7,3,8];


// logic for area 
function area(radius)
{
    return Math.PI * radius * radius;
}

// logic for circumferece 
function circumference(radius)
{
    return 2*Math.PI*radius;
}

// logic for diameter
function diameter(radius)
{
    return 2*radius
}

function cal(radius, logic)
{
    const output = [];
    for(let i=0; i<radius.length; i++)
    {
        output.push(logic(radius[i]));
    }

    return output;
}

console.log(cal(radius, area));
console.log(cal(radius, circumference));
console.log(cal(radius, diameter));
