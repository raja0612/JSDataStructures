function cubicSum(num) {

      // create result varibale
        var result = 0;

        var numInStringLength = num.toString().length;

        // iterate loop upto numInStringLength
        for(var i = 1; i <= numInStringLength; i++) {
            var lastDigit = num %10;
            var cubicSum = lastDigit * lastDigit * lastDigit;
            result = result + cubicSum;
            num = Math.floor(num/10)
        }
     return result   

}