/*

implement a function called areTherDuplicates which accepts number of args and checks 
whether there are any duplicates among the arguments passed in.




*/

// multple pointer pattern


function areTherDuplicates(...args) {
    // first sort args
    args.sort((a, b) => a > b);

    let start = 0;
    let next = 1;

    while(next < args.length) {
        if(args[start] === args[next]) return true;
        // other wise comapre next two elements
        start++;
        next++;
    }
    return false;
}

console.log("*****Multiple Pointer pattern")

console.log(areTherDuplicates(1, 2, 3));
console.log(areTherDuplicates(1, 2, 2));

// Frequency Counter Pattern.

function areTherDuplicatesFr(...args) {
    let frequencyCounter = {};

    for(let val of args) {
        frequencyCounter[val] = (frequencyCounter[val] || 0) + 1;
    }

   for(let key in frequencyCounter) {
       if(frequencyCounter[key] > 1) return true;
   }
   return false;
}
console.log("*****Frequency Counter pattern")
console.log(areTherDuplicatesFr(1, 2, 3));
console.log(areTherDuplicatesFr(1, 2, 2));


console.log("*****One liner Solution")

function areTherDuplicatesNeat(...args) {
    return new Set(args).size !== args.length
}

console.log(areTherDuplicatesNeat(1, 2, 3));
console.log(areTherDuplicatesNeat(1, 2, 2));