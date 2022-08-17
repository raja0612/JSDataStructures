let numbers = [1,2,3];


//  map() is an array function , it creates new array from source array and executes passing function on each element.

function findTwice(number){
	return number * number;
}

let newArray = numbers.map(number => findTwice(number));
console.log(newArray);

let newArray2 = numbers.map(findTwice);
console.log(newArray2);

console.log('original array', numbers);


// filter() is also an array function, it creates the new array from source array and executes passing function on each element from an array.

let filterArray = numbers.filter(number => number > 2);
console.log(filterArray); // O/P [3]

let filterArray2 = numbers.filter(function(number) {
	return number > 2;
})

console.log(filterArray2); // O/P [3]

// reduce() : it executes reducer function (what we define) on each element and store the result in first parameter called accumulator.
// reduce(accumulator, current element, current element index, sources array)


let total = numbers.reduce((sum,number) => sum +number);
console.log(total);

function findSumFromReduce(accumulator,currentElement) {
  return accumulator + currentElement;
}
console.log(numbers.reduce(findSumFromReduce));

// find() : it returns first finding element from array if exists otherwise undefined

var array1 = [5, 12, 8, 130, 44];

console.log(array1.find(number => number > 12)); // 130

console.log(array1.find(number => number > 131)); // undefined

// findIndex() : returns the first finding element from array if exists otherwise -1



console.log(array1.findIndex(number => number > 12)); //  3

console.log(array1.findIndex(number => number > 131)); // -1

// concat() : merge two arrays into new array and don't modify source arrays.

let godChoose = ['Mom','Dad','Siblings'];
let youChoose = ['Friends','Pets','Techonlogy', 'Running'];
let life = godChoose.concat(youChoose);
console.log(life);
console.log(godChoose);
console.log(youChoose);

//slice(startIndex, endIndex); // used to get portion of array from specified indexes in new array, end index is not included in result, if end index is not provided, default one is last index.
let numbers = [1,2,3];
console.log(numbers.slice(0,2));
console.log(numbers);
console.log(numbers.slice(0));

//splice() is used to add , delete , modify elements in given array.
//splice(index,deleteCount,new element)
//deletecount 0 or negative : no elements are removed. positive or 1 : remove one element.
let numbers  = [1,2,3,4];
numbers.splice(numbers.length,0,5); // insert element at last index
console.log(numbers);

numbers.splice(numbers.length-1,1); // delete last index element because deleteCount = 1
console.log(numbers);






