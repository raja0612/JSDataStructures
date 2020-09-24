/*
  This pattern invloves creating a window which can be either an array or
  number from one position to another.

  Depending on certain condition, the window either increases or  closes
  and (new  window is created)

  Very useful to keep track of a subset of data in an array/string etc.

*/

/*

Write a function which takes an array and number n.
Should calculate max sum of n consecutive  elements in array.

*/


function maxSubArrayNaive(arr, n) {
    let max = -Infinity;
    for(let i = 0; i <= arr.length - n; i++) {
        let temp = 0;
        for(let j = 0; j < n; j++) {
            temp += arr[i+j];
        }
        if(temp > max) {
            max = temp;
        }
    }

    return max;
}


let result = maxSubArrayNaive([-1, -2, -3], 2);
console.log(result);






function maxSubarraySum(arr, num){
    let maxSum = 0;
    let tempSum = 0;
    if (arr.length < num) return null;
    for (let i = 0; i < num; i++) {
      maxSum += arr[i];
    }
    tempSum = maxSum;
    for (let i = num; i < arr.length; i++) {
      tempSum = tempSum - arr[i - num] + arr[i];
      maxSum = Math.max(maxSum, tempSum);
    }
    return maxSum;
  }

let result2 = maxSubarraySum([1, 2, 3, 8, 5, 7, 2, 7, 9], 4);
console.log(result2);