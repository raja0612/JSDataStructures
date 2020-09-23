/*

Write a function to check if first array elements in second array with sqaured value

[1, 2, 3] [4, 1, 9] // true
*/


function solution(arr1, arr2) {
    
    let frequencyCounter1 = {};
    let frequencyCounter2 = {};

    for(let val of arr1) {
        frequencyCounter1[val] = ( frequencyCounter1[val] || 0 ) + 1;
    }
    for(let val of arr2) {
        frequencyCounter2[val] = ( frequencyCounter2[val] || 0 ) + 1;
    }


    for(let key in frequencyCounter1) {
        if(!(key ** 2  in frequencyCounter2)) {
            return false;
        } 

        if(frequencyCounter1[key] !== frequencyCounter2[key ** 2]) {
            return false;
        }
    }
    return true;
}

let result = solution([1, 2, 3, 5], [4, 1, 9, 25]);

console.log(result)