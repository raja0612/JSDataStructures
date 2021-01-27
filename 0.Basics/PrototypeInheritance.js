function Shape() {
    this.area = function() {return " You need to Implement"}
}

function Sqaure(length) {
    this.length = length;
    this.area = function() {return this.length * this.length}
}

function Rectangle(length, width) {
    this.length = length;
    this.width = width;
}


Sqaure.prototype = new Shape();

Rectangle.prototype = new Shape();

new Shape(3).area();
new Rectangle(2, 3).area();