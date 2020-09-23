/*
  Check if given two strings are anagram or not

  raj jar -> true
  anagram nagaram -> true

*/


function isAnagram(str1, str2) {
    if(str1.length !== str2.length) {
        return false;
    } 
    let lookup = {};

    for(let i = 0; i< str1.length; i++) {
        let letter = str1[i];
        lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1;
    }

   for(let i = 0; i< str2.length; i++) {
       let letter = str2[i];

       // can't find letter or letter is zero then it is not anagram

       if(!lookup[letter]) {
           return false
       } else {
           // decrement one value of lookup object value
           lookup[letter] -= 1;
       }
   }

   return true;
}


let result = isAnagram("raj", "jar");

console.log(result);

console.log(isAnagram("raja", "jarz"));

console.log(isAnagram("anagram", "nagaram"));