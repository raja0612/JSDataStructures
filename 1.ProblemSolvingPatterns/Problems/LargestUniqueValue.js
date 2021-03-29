/*
Given an integer array, nums, return the largest unique value in nums.

Ex: Given the following nums…

nums = [4, 9, 2, 9], return 4.
Ex: Given the following nums…

nums = [8, 1, 10, 1, 4, 8, 4, 10], return -1.

*/
function largestUniqueValue(arr) {

    let frequencyCounter= {};

    for(let val of arr) {
        frequencyCounter[val] = (frequencyCounter[val] || 0 ) + 1;
    }
    console.log(frequencyCounter);

   let result =  Object.keys(frequencyCounter).filter(key => {
        return frequencyCounter[key] === 1
    })

    console.log(result);


    return result ? true: false;
}

//largestUniqueValue([4, 9, 2, 9]);
largestUniqueValue([8, 1, 10, 1, 4, 8, 4, 10]);