function fib(n) {
    var fibSeries = [0, 1, 1];

    if(n <= 2) return  1;

    for(var i = 3; i <= n; i++) {
        fibSeries[i] = fibSeries[i-1] + fibSeries[i-2];
    }
    console.log(fibSeries)
    return fibSeries[n];
}

let res = fib(6);
console.log(res);