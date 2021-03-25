/*


pivot function explanation 


[4, 8, 2, 1, 5, 7, 6, 3]
 
pivot = 4 (select first element as pivot)
swapIndex = 0;

i = 1 to arr.length
// find elements which are less than pivot

 4 > 8 false i = 1
 4 > 2 true  i = 2
 swapIndex =  1;
 i = 2

 swap 1 & 2 index values

 [4, 2, 8, 1, 5, 7, 6, 3]

 continue loop , current i = 3
  4 > 1 true swapIndex  = 2, i = 3

 swap  2 & 3 index values

  [4, 2, 1, 8, 5, 7, 6, 3]

  i = 4
   4 > 5 false  i = 4
   4 > 7 false  i = 5
   4 > 6 false   i =6
   4 > 3 true i =7 swapIndex = 3

    swap  7 & 3 index values

    [4, 2, 1, 3, 5, 7, 6, 8]


    after loop, very last thing we need to do

    take last swapIndex (here 3)  swap with start

     [3, 2, 1, 4, 5, 7, 6, 8]



*/


function pivot(arr, start = 0, end = arr.length - 1) {
    var pivot = arr[start];
    var swapIndex = start;

    for(var i = start + 1; i <= end; i++) {
        if(pivot > arr[i]) {
            swapIndex++;
            swap(arr, swapIndex, i);
        }
    }
    swap(arr, start, swapIndex);
    //return arr;
    return swapIndex;
}

function swap(arr, idx1, idx2) {
    var temp = arr[idx1];
    arr[idx1] = arr[idx2];
    arr[idx2] = temp;
}
//console.log(pivot([4, 8, 2, 1, 5, 7, 6, 3]));



function quickSort(arr, left = 0, right = arr.length - 1) {

    if(left < right) {
        let pivotIndex = pivot(arr, left, right); // 3  is pivotIndex first time
        //left 
        quickSort(arr,left, pivotIndex - 1);

        //right 
        quickSort(arr,pivotIndex+1, right);
    }

    return arr;
}

console.log(quickSort([4, 8, 2, 1, 5, 7, 6, 3]));

/*

Time complexity is Avg and best O(nlogn);

worst case : O(n2)

n is number of comparsions
logn is number of array splits (if 32 elements then 5 is the number of splitting arrays)

Space complexity is O(logn) 

*/


