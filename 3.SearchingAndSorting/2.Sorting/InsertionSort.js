function insertionSort(arr) {

    for(var i = 1; i < arr.length; i++) {
       var currentVal = arr[i];
       for(var j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
           //first replace larger element with previous sorted elements.
           // in first iteration [5,5,4,1,2]
            arr[j+1] = arr[j];
       }
       console.log("After Swap with current val")
       arr[j+1] = currentVal;
       console.log(arr);
    }
    return arr;
}


console.log(insertionSort([5, 3, 4, 1, 2]));

/*
Time BIG(O) Complexity
Worst and Average case : O(n2)
*/