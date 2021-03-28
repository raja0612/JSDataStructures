/*

Rest operator : ... It allows function to accept indefinite number of arguments and use them 
as array inside that function.

// rest parameter must be the last parameter in the function

Spread Operator : ... It split the array elements into individual arguments

*/

function args() {
    // we have default object called arguments which holds all passed parameters to that function in object format
    // we can't perform array methods like map, filter on arguments
    console.log(arguments);
}

args(1,2, 3);

function sum(...nums) {
    return nums.reduce((acc, current) => acc + current, 0);
}

console.log(sum(1, 2, 3));
console.log(sum([1, 2, 3])); // wrong

console.log(sum(...[1, 2, 3])); 


const a = [1, 2, 3];
const b = [...a, 4];
console.log(a);
console.log(b);

const person = {name: 'Raj'};
const dog = {pet: 'max'};

const human = {...person, ...dog};
console.log(human);



console.log(Math.max(1, 2, 3))
console.log(Math.max([1, 2, 3])) // wrong
console.log(Math.max(...[1, 2, 3])) // right

let name = "Rajashekhar Ramayampeta";
console.log(...name);