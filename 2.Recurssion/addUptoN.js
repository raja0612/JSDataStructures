function addUpto(num) {
    if(num === 1) return 1;
    return num + addUpto(num-1);
}

console.log(addUpto(3));