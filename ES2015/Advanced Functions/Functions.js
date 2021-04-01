/*

All functions in Javascripts are objects.
They are the instance of Function type
*/

function add(x, y) {
    console.log(x + y);
}



// each function has two properties, length, prootype
console.log(add.length) // length of named parameters. 2
console.log(add.prototype) // it references the actual function object

// function can be called two ways

add(2, 3);

let f = new add(2, 3); // can be called as a constructor to create new object

// ES6 added new property new.target that tells if function is called either with new keyword or normal way

function fn() {
    console.log(new.target);
}

fn();
let f1 = new fn(); //new.target will refernec the constructor

/* Function methods: apply(), call() and bind()

apply() and call() methods call a function with given this value and arguments

The difference between apply() and call() is that we need to pass arugumets to apply() method
as an array like object where as we pass arguments to call() function individually

*/


let cat = {type: 'Cat', sound: 'Meow'};
let dog = {type: 'Dog', sound: 'Woof'};

let f2 = function(greeting) {
    console.log(greeting);
    console.log(this.type + " says "+ this.sound);
}

f2.apply(cat, ["Hi"]);
f2.call(dog, "Hello");

// The bind() method:  it creates a new function instance whose "this" value is bound to the object
//that you provide.

let car = {
    speed: 5,
    start: function() {
        console.log('Start with '+  this.speed + 'km/h');
    }
}

let aircraft = {
    speed: 10,
    fly: function() {
        console.log('Flying with ');
    }
}

/*
This aircraft has no start() method, to start an aircraft, you can use the bind method of the
start() method of car object
*/

let taxxing =   car.start.bind(aircraft);

taxxing();

car.start.call(aircraft);

/*
here call and bind methods are almost same but call() method invokes the start() functions immedaitely
where as bind() method creates new function that you can execute later

Technicall aircraft object borrows that start() method of car objecte via bind(), call() or apply() method
for this reason  the bind(), call(), apply() methids are also konown as borrowing functions

*/



