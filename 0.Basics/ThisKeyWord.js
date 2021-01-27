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
      Constructor funtion
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
