function SelectionSort(arr) {


    for(let i = 0; i < arr.length; i++) {
        let lowest = i;
        for(let j =i+1; j<arr.length; j++) {
            console.log(i, j);
            if(arr[j]< arr[lowest]) {
                lowest = j;

            }
        }
        if(i!==lowest) {
            let temp   = arr[i];
            arr[i] = arr[lowest];
            arr[lowest] = temp;
        }
    }
    return arr;
}


console.log(SelectionSort([34,22,10,19,17]));