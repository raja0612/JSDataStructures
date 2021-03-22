function linearSearch(arr, val) {
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] === val)  return i;
    }
    return -1;
}
let arr = [1, 2, 36, 47, 58, 69, 71, 88, 98];
console.log(linearSearch(arr, 47));

console.log(arr.indexOf(47)); // returns indexOf matching value
console.log(arr.includes(47)); // return true if exists
console.log(arr.find(element => element === 47)); // returns first matching value
console.log(arr.findIndex(element => element === 47)); // returns first matching value index

/*
  Java script inbuilt methods indexOf, inlcudes, find, findIndex methods works on linear search algorithms.


  O(n) is time complexity

*/

