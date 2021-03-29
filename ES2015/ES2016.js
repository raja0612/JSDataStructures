const arr = [1, 2, 3, NaN];

if(arr.indexOf(1) >= 0 ) {
    console.log("elements is present")
}

// includes is the new feature


if(arr.includes(1)) {
    console.log("elements is present");
}

console.log(arr.includes(NaN)); // true
console.log(arr.indexOf(NaN)); // -1


//Before
console.log(Math.pow(2, 3));

// after
console.log(2 ** 3);

// Object.values 2017
const cars = {BMW: 1, HONDA: 2, AUDI: 3};

const keys = Object.keys(cars).map( key => {
  return cars[key];
})

console.log(keys);
const values = Object.values(cars);
console.log(values);


//ES2017 ES8
for(let [key, value] of Object.entries(cars)) {
    console.log(`Key ${key} Value ${value}`);
}

//ES2017 onwards
const map = new Map(Object.entries(cars));
console.log(map);


//padStart(#ofchars, 'string') : append prefix and postfix string to given string. 

let name = "Raj";
console.log(name.padStart(10)) // default is space
console.log(name.padStart(10, "*"))
console.log(name.padEnd(10, "*"))

const nums = [0, 1, 12, 13, 59, 89, 100];

const formatted = nums.map(num => {
    return num.toString().padStart(10, 0);
})

console.log(formatted);


Object.entries(cars).map(([name, count])=> {
    console.log(`${name.padEnd(10, '_')} ${count.toString().padStart(10, '0')}`)
})


// Array destructring
var [a, b, ...rest] = [10, 20, 30, 40, 50];
console.log(a, b)

// Object destructring

var {a, b, ...rest} = {a: 10, b: 20, c: 30, d: 40};
console.log(a, b);


// ES2021 (ES 12)

let str = "wow,he does not like dogs, he must be crazy";

let replace = str.replace("he", "she");

console.log(replace);


let replaceAll = str.replaceAll("he", "she");

console.log(replaceAll);

const BILLION = 1_000_000_000;



//old way
var a, b;
if(!a) {
    a = b;
}

a = a || b

// using logical assignment opearator

// a ||= b;

// The Promise.any method will accept an array of promises and will return as soon as the first one is FULFILLED.
// However, Promise.race will return as soon as the first promise has been settled, not fulfilled .
// This means that Promise.race might return a rejected promise, even though the second one might have succeeded.
 

Promise.any([fetch('www.github.com'), fetch('www.idontknow.com')])
.then(result => {
    console.log("First promise succedded", result);
});