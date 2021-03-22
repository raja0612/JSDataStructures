function findOddNumbers(arr) {
    let newArr = [];

    if(arr.length === 0) {
        return newArr;
    }

    if(arr[0] % 2 === 1) {
        newArr.push(arr[0]);
    }

    newArr = newArr.concat(findOddNumbers(arr.slice(1)));
    return newArr;
}

console.log(findOddNumbers([1, 2, 3, 4, 5]));


/*

findOddNumbers([1, 2, 3, 4, 5])
[1].concat(findOddNumbers[2, 3, 4, 5])
            [].concat(findOddNumbers[3, 4, 5])
                        [3].concat(findOddNumbers[4, 5])
                                     [].concat(findOddNumbers[5])
                                                [5]

                                            [1].concat([]).concat([3]).concat([]).concat([5])


for arrays, use methods like slice, the spread operator, and concat that make copies of arrays
so we do not mutate them.   
*/