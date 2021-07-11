
/*
In Java, C++ , this keyword represents the instance of the current object in the method of class.
And this keyword is relevant within a method of the class meaning you can't use outside of
the method.

But In JavaScript, you can use this keyword in the global and function contexts.
Moreover the behavior of the this keyword changes between strict and non strict mode.

this references the object that is currently calling the function.
*/

const counter = {
    count: 0,
    next: function(){
        return ++this.count;
    }
}

counter.next();

/*
here we have counter object and it has method called next().

when we call counter.next() method, we can access this object.
inside next() this references the counter object.

btw, when object has function as a property, it is called method.

*/

/*

In global context this refences window object in the browser
gloabl object in node js env.



*/

// this behavior is consistent whether the strict mode is applied or not.
console.log(this === window); // true

// if we assign propery to global this context, it will be accessible by window object
this.name = "Raj";
console.log(window.name);



// Function context.

// In JS, function can be called following ways.

// 1. Simple function invocation

function show() {
    
    // in non strict mode, this references the window object
    // in strict mode this references the undefined 
    console.log(this === window); // true non strict mode on browser
    console.log(this === global); // true non strict mode in node js

    console.log(this == undefined); // true strict mode
}
show();

function show2() {
    "use strict"
    console.log(this === undefined); // true

    function display() {
        console.log(this === undefined); // true
    }
}

show2();

// 2. Method invocation

// when we call method of an object, this references to the object that owns the method

let car = {
    brand: "Honda",
    getBrand: function() {
        return this.brand;
    }
}


console.log(car.getBrand()); // Honda

let brand = car.getBrand;
console.log(brand()); // undefined

// because when we call method of an object without specifying it's obejct, JS sets this to global
// object in non strict mode and undefined in the strict mode.

// to fix this issue we use bind

let brandBind = car.getBrand.bind(car);
console.log(brandBind()); // Honda

let car1 = {
    brand: "Honda",
    getBrand:  function() {
        console.log(this.brand);
    }

}

let car2 = {
    brand: "Acura"
}

let car2Bind = car1.getBrand.bind(car2);
console.log(car2Bind()); // Acura


// 3. Constructor Invocation.

// when we use new keyword to create an instance of a function object, we use that
// function as construcor.

// The following example declares a Animal function and then invokes it as a constructor..

function Animal(name) {
    this.name = name;
}

Animal.prototype.getName = function() {
    return this.name
}

var dog = new Animal("Maxum");
console.log(dog.getName());

// the expression new Animal("Maxum") is the constructor invocation of the Animal function

// JS creates Animal object and sets this to Animal. but there is one potential problem

var wrongDog = Animal("Puppy");
console.log(wrongDog.getName()); // undefined
// because JS without new keyword , set this to global object so wrongDog.getName()) is undefined.


// so inorder to make sure that Animal function is invoked through constructor, we add below check

function Animal(name) {
    if(!(this instanceof Animal)){
        throw Error("Must use the new operator to call this Animal function")
    }

    this.name = name;
}

//ES6
function Animal(name) {
    if(!new.target){
        throw Error("Must use the new operator to call this Animal function")
    }

    this.name = name;
}

// 4. Indirect Invocation
// In JS , functions are first class citizens , in other words, functions are objects. which are instance of
// Function type

// Functin type has two methods call() and apply().
// These methods allow us to set this value when we call the function
//the only diffrence b/e these two, in apply method we need to pass arguments as array

function getBrand(prefix) {
    console.log(prefix +  this.brand)
}

let honda = {
    brand: 'Honda'
}

let acura = {
    brand: 'Acura'
}

getBrand.call(honda, 'It\'s a honda');
getBrand.apply(acura, ["I'm Acura"])

// ES6 introduced arrow function. In Arrow functions, Javascript sets the this lexically. it means
//the arrow function doesn't create it's own execution context, but this is inherited
// from the outer function where arrow function is defined.


let getThis  = () => this; // this refernces to global context either window or global objects

console.log(getThis === window) // true in the browser
console.log(getThis === global) // true in the node js env

// since arrow function doesnot create its own execution context, defining a method using 
// an arrow function will cause an issue.

//EX

function Car() {
    this.speed = 120;
}

Car.prototype.getSpeed = () => {
    return this.speed;
}

var car = new Car();
car.getSpeed(); //TypeError

/*
Inside the getSpeed() method, the this value reference the global object,
 not the Car object. Therefore the car.getSpeed() invocation causes an error 
 because the global object does not have the speed property.

*/












console.log(this);
console.log(window);

var person = {
    first_name :"Raj", 
    last_name:"Ramayampeta", 
    full_name: function() {
        return this.first_name + " "+ this.last_name;

}}

person;

var x = Number(4);
typeof x;

var y = new Number(5);
typeof y;

x + y;

Number;

String;


// this is bound to different objects based on the context in which it is used. and also it varies
// strict and non strict mode.

// Global Context  

/*
   Function context : when this is used in below
      Simple function
      Method on an object
      Constructor function
*/


console.log(this);

function test() {
    console.log(this);
}

test();


var aCircle =  {
    radius: 3 , 
    area: function() {
        return Math.PI * this.radius * this.radius;

}}

aCircle.area();


var aCircle =  {
    radius: 3 , 
    area: function() {
        return Math.PI * this.radius * this.radius;
     },
     f: test
}

aCircle.f();


//Constructor Function.

function Circle(r) {
    this.radius = r;
    this.area = function() {
        return Math.PI * this.radius * this.radius;

    }
}

var c = new Circle(2);
c;
c.area();
c["area"]();
