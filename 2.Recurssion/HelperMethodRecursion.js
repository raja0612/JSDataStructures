/*

function outer(outerInput) {

    var outerVarible = [];

    function helper(helperInput) {
        // base condtion to break helper function
        // add results to  outer variable
        inner(helperInput);
    }

    helper(outerInpur);

    return outerVarible;
}

*/


// writer a recursive funtion to return odd numbers


function findOddNumbers(arr) {

    var result = [];

    function helper(helperInput) {

        if(helperInput.length === 0)  return;
        
        if(helperInput[0] % 2 === 1) {
            result.push(helperInput[0]);
        }
        helper(helperInput.slice(1))
    }

    helper(arr);

    return result;
}

console.log(findOddNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9]));
