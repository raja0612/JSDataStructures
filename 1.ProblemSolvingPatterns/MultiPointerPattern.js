/*

Creating Pointers or values that corresponding to  the indexes and move towards the ending
beiginning , middile based on condition.
This is for sorted elements.

Verfy efficient for solving problems witj minimal space and time complexity.



Write a function called sumZero which accepts sorted array of Integers.
The function should find the first pair where the sum is 0.
Return an array that includes both values that sum to zero or undefined if pair 
doesnot exist.
*/


function sumZero(arr) {
    let left = 0;
    let right = arr.length - 1;

    while(left < right) {
       let sum = arr[left] + arr[right];

       if (sum === 0) {
           return [arr[left], arr[right]]
       } else if (sum > 0) {
           right--;
       } else {
           left++;
       }
    }
}
let result = sumZero([-4, -3, -2, -1, 0, 1, 2, 3, 4, 10]);
console.log(result);


function naiveSolution(arr) {
    for(let i = 0; i < arr.length; i++) {
        for(let j = i+1; j < arr.length; j++) {
            if(arr[i] + arr[j] === 0) {
                return [arr[i] , arr[j]];
            }
        }
    }
}

let result2 = naiveSolution([-4, -3, -2, -1, 0, 1, 2, 3, 4, 10]);
console.log(result2);


