function print(n) {
    for(let i =1; i<=n; i++) {
     console.log(i)
    }
}

function printRecursive(n) {
    if(n === 0) return;
    console.log(n)
    printRecursive(n-1);
}

print(3)
console.log("******")
printRecursive(3)

