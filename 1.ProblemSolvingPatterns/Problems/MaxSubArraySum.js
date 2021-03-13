/*
 
write a function find max sum of n consecutive numbers(subset of n numbers from given array).

Sliding window Pattern

*/


function maxSubarraySum(arr, n) {

    if(arr.length < n) return null;

    let tempSum = 0;
    let maxSum =0;


    for(let i =0; i < n; i++) {
        tempSum += arr[i]
    }

    maxSum = tempSum;

    for(let i = n ; i < arr.length; i++) {
        tempSum += arr[i] - arr[i - n];
        maxSum = Math.max(tempSum, maxSum);
    }
    return maxSum;
}

console.log(maxSubarraySum([100, 200, 300, 400], 2))
console.log(maxSubarraySum([1, 4, 4, 10,23, 3, 1, 0, 20], 4))