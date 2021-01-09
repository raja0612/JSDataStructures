function sumRange(n) {
    if( n === 0) return;
    return n + sumRange(n-1);  
}

console.log(sumRange(10));