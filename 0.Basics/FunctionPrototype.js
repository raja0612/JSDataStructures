function SomeThirdPartyFn() {
    this.text = "Hello World"
};

var c = new SomeThirdPartyFn();
c;
c.text;

SomeThirdPartyFn.prototype.text2 = function() {
    return "I am new Text"
}

c.text2();