function fib(n) {
    var n1 = 0;
    var n2 = 1;


    while(n > 0) {
        console.log(n1);
        var next = n1+n2;
        n1=n2;
        n2=next;
        n--;
    }
}

console.log(fib(90000000))