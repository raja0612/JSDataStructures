/*

Merge sort is combination of splitting, merging and sorting elements.

*/

function mergeSort(arr1, arr2) {

    let i = 0; // i is for first array
    let j = 0; // j is for second arry

    let result  = [];

    while(i < arr1.length && j < arr2.length) {
        if(arr1[i] < arr2[j]) {
            result.push(arr1[i]);
            i++;
        } else {
            result.push(arr2[j]);
            j++;
        }
    }
     // chceck if any elements are left in both arrays
     while(i < arr1.length) {
        result.push(arr1[i]);
        i++;
    }

    while(j < arr2.length) {
        result.push(arr2[j]);
        j++;
    }
    return result;
}


function splitArray(arr) {

    // base condition for recursive function
    if(arr.length <= 1) return arr;

    let mid = Math.floor(arr.length / 2);

    let left = splitArray(arr.slice(0, mid));
    let right = splitArray(arr.slice(mid));

    return mergeSort(left, right);
}

console.log(splitArray([1, 23, 8, 0]));

/*

Time complexity is O(nlogn);

n is number of comparsions
logn is number of array splits (if 32 elements then 5 is the number of splitting arrays)

Space complexity is O(1) : one array which holds the entire result

*/
