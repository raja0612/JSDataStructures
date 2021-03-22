/*
  The Binary Search is performed on sorted data

  time complexity  O(logn) 


  Best : O(1);
  Average: O(logn)

*/


function binarySeacrh(sortedArray, val) {

   if(sortedArray.length === 0) return -1;

   let start = 0;
   let end = arr.length - 1;

   while(start <= end) {
       let middle = Math.floor((start+ end) / 2);
       if(arr[middle] === val) {
           return middle;
       } else if(arr[middle] > val) {
           end = middle - 1;
       } else {
           start = middle + 1;
       }
   }
   return -1;
}

let arr = [1, 2, 36, 47, 58, 69, 71, 88];
console.log(binarySeacrh(arr, 47));

/*


O(logn)
O(log8) = 3 searches// here 8 is the number of elements in given array


*/