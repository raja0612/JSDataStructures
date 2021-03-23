/*

In each iteration, we comapre two adjacent elements,
if first element is greather than seconf element, we swap.

In each iteration, the each next max value is placed at end of the array
and number of comparsions decrease.

*/

function bubbleSort(arr) {
    const swap = (arr, idx1, idx2) => {
      [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
    };
  
    for (let i = arr.length; i > 0; i--) {
      for (let j = 0; j < i - 1; j++) {
        console.log(arr, arr[j], arr[j+1]);
        if (arr[j] > arr[j + 1]) {
          swap(arr, j, j + 1);
        }
      }
      console.log("ONE PASS COMPLETES");
    }
    return arr;
  }

function bubbleSortOptimization(arr) {
    var noSwaps;

    const swap = (arr, idx1, idx2) => {
        [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
    };

    for(let i = arr.length; i > 0; i--) {
        noSwaps = true;
        for(let j = 0; j < i-1; j++) {
            if(arr[j] > arr[j+1]) {
                swap(arr, j, j+1);
                noSwaps = false;
            }
        }
        if(noSwaps) break;
    }
    return arr;
}


console.log(bubbleSort([15, 38, 1, 42, 2, 19]));


console.log(bubbleSortOptimization([8, 1, 2, 3, 4, 5, 6, 7]));


/*

Time BIG(O) Complexity

Worst and Average case : O(n2)




*/