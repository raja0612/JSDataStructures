// without recursion

function oddNumbersOfArray(arr) {
    let result = [];

    for(let i of arr) {
        if(arr[i] % 2 === 1) {
            result.push(arr[i])
        }
    }

    return result;
}

console.log('without recursion',oddNumbersOfArray([1,2,3,4,5]));


// with recursion

function oddNumbersOfArray2(arr) {
    let result = [];

    function helper(helperInput){

        if(helperInput.length === 0) {
            return;
        }
        if(helperInput[0] % 2 === 1) {
            result.push(arr[0]);
        }
        helper(helperInput.slice(1))
    }
    helper(arr)
    return result;
}

console.log('with recursion',oddNumbersOfArray2([1,2,3,4,5]));