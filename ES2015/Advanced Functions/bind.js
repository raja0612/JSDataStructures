/*

bind() method returns a new function.

Fn.bind(this, arg1, arg2....argn);

unlike call() and apply(), the bind() method doesn't immediately
execute the function. It returns a new version of the function whose "this"
set to thisArg

*/

// when you pass an method of an object to another callback, "this" is lost

let person = {
    name: "Max",
    getName: function() {
        console.log(this.name);
    }
}

setTimeout(person.getName, 1000); // undefined
// as you see, insteag of Max, it printed undefined, bc setTimeout() received the function person.getName seperately
// from person object


// fix, wrap   person.getName() in anonymous function
setTimeout(function() {
    person.getName()
}, 1000)

// using bind
let f = person.getName.bind(person);
setTimeout(f, 1000)

// use bind() to borrow methods from different objects

let runner = {
    name: "Raj",
    run: function(speed) {
        console.log(`${this.name} runs at ${speed} mph`);
    }
}

let flyer = {
    name: "Max",
    run: function(speed) {
        console.log(`${this.name} flies at ${speed} mph`);
    }
}

//here flyer object borrow run() from runner object
let flyerRunner = runner.run.bind(flyer, 20);
flyerRunner();