function countUniqueValues(arr) {

    if(arr.length === 0) {
        return 0;
    }
  let i = 0;
    for(let j = 1; j < arr.length; j++) {
        if(arr[i] !== arr[j]) {
            i++;
            arr[i] = arr[j];
        }

    }
    return i + 1;
}


let result = countUniqueValues([1,1, 2,3,3,4, 4]);

console.log(result);

function countUniqueValues(arr){
    // add whatever parameters you deem necessary - good luck!
    let frequencyCounter = {}
     
     for(let val of arr) {
       frequencyCounter[val] = (frequencyCounter[val] || 0) + 1;
     }
     
     return Object.keys(frequencyCounter).length;
  }


  console.log(...new Set([1,1,2,3,3,4,4]));