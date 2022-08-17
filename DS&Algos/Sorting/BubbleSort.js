function bubbleSort(arr) {
    var noswap;

    for(var i = arr.length; i > 0; i--) {
        noswap = true;
        for(var j = 0; j < i - 1;j++) {
            if(arr[j] > arr[j+1]) {
                var temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
                noswap = false
            }
        }
        if(noswap) break;
    }
    return arr;
}

function bubbleSort2(arr) {
    let noswap;
    const swap = (arr, idx1, idx2) => {
        noswap = false;
       [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
    }

    for(let i = arr.length; i > 0; i--) {
        noswap = true;
      
        for(let j = 0; j < i - 1;j++) {
            console.log(arr, arr[j], arr[j+1]);
            if(arr[j] > arr[j+1]) {
               swap(arr,j, j+1)
            }
        }
        console.log('ONE SWAP COMPLETES');
        if(noswap) break;
    }
    return arr;
}

console.log(bubbleSort([3, 5, 1, 2, 4, -1, 3]))
console.log(bubbleSort2([8,1,2,3,4]))