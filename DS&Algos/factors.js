function factors(num) {
     //create result array
     var result = []

    // loop until given number
    for(var i = 1; i <= num; i++) {
        // if number divide by i then add it to result array
        if(num%i === 0) {
            result.push(i)
        }
    }
   // return  result
    return result;
}