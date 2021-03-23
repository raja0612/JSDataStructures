/*

This sort finds the least element index in each inner iterattion

end of the inner interation, we do swap

*/

function selectionSort(arr) {
    for(var i = 0; i < arr.length; i++) {
        var lowestIndex = i;
        for(var j = i + 1; j < arr.length; j++) {
            if(arr[j] < arr[lowestIndex]) {
                lowestIndex = j;
            }
        }

        if (i !== lowestIndex) {
            //SWAP!
            var temp = arr[i];
            arr[i] = arr[lowestIndex];
            arr[lowestIndex] = temp;
        }
       
    }
    return arr;
}


console.log(selectionSort([15, 38, 1, 42, 2, 19, 0., -1]));


/*

Time BIG(O) Complexity

Worst and Average case : O(n2)




*/