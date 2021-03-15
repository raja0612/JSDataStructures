function commonValues(arr1, arr2) {
    var filteredArray = arr1.filter(function(n) {
        return arr2.indexOf(n) !== -1;
    });
    return filteredArray;
}

console.log(commonValues([1, 2, 2, 3],[0, 2, 2, 5]))


