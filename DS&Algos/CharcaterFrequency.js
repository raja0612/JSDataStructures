function charCount(str) {
    // create empty result object 

    var result = {}
    // loop over string for each character
      for(var i = 0; i< str.length; i++) {
          var char = str[i];
            // if the char/number is already in object increase count
            if(result[char] > 0) {
                result[char]++
            }
            // if the char/number is not in object , add that char and set count to 1
            else {
               result[char] = 1;
            }
      }
   return result;
}



function charCount2(str) {
  let obj={}
  for(let char of str) {
    char = char.toLowerCase();
    if(/[a-zA-Z0-9]/.test(char)) {
      obj[char] = ++obj[char] || 1;
    }
  }
}
