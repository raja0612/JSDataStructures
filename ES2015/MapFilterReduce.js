/*

map --- it is used for creating new array from existion one

filter - it is used to apply condition on each iteartive element
reduce - this method reduces an array of values down to just one value


*/

var arr = [1, 2, 3, 4, 5, 6];

var doubled = arr.map(function(each, index, arr) {
    return each * each;
})
console.log(doubled);

//ES6 arrow function
var doubleMap = arr.map((each, index, arr) => each * each);
console.log(doubled);

var evenNumbers = arr.filter(function(each, index, arr) {
    return each % 2 === 0;
})
console.log(evenNumbers)

var oddNumbers = arr.filter((element) => element % 2 === 1);
console.log(oddNumbers)


var sum = arr.reduce((accumlator, current) => {
   return  accumlator + current
}, 0)
// accumlator - the return value of previous iteration
// current - current iteration value
// 0 is intiial value of accumlator
console.log(sum);


var pets = ['dog', 'chicken', 'cat', 'dog', 'chicken', 'chicken', 'rabbit'];


var petCounts = pets.reduce( (result, pet) => {
        if(!result[pet]) {
            result[pet] = 1;
        } else {
            result[pet]++;
        }
        return  result;
}, {})
console.log(petCounts);


