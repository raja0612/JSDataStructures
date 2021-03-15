function factorial(n) {

    var result = 1;

    function helper(helperInput) {
        if(helperInput === 1) return 1;
        result = helperInput * factorial(helperInput-1);
    }
    helper(n);
    return result;
}

console.log(factorial(4))


function printChar(str) {
    console.log(str)
    if(str.length === 0 ) return;
    return  printChar(str.slice(1));
}

printChar("raja")