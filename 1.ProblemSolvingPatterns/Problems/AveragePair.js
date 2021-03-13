/*
  Write a function called averagePair. Given a sorted array of integers and a target average.

  determine if there is a pair of values in the array where the average of the pair equals the 
  target average.

*/

function averagePair(arr, target) {

    let left = 0;
    let right = arr.length - 1;
  
      while(left < right) {
          let average = (arr[left] + arr[right] ) / 2;
          if(average === target) {
              return  true;
          } else if(average < target) {
             left++;
          } else {
             right--;
          }
      }
      return false;
}

console.log("Multiple Poinetr patterns");

console.log(averagePair([1, 2, 3], 2.5))
console.log(averagePair([3, 1, 2], 2.5))
console.log(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8))