function factorial(n) {
    // create result variable set to default = 1;

    let result = 1;

    // loop through number to 1 in descending order
      for(let i = n ; i >= 1; i--) {
          result = result * i;
      }
      // inside loop , multiply number to result


      // return result
      return result;
}