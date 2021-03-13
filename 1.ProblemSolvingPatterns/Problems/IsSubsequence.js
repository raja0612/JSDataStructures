/*

write a function called isSubsequence which takes in two strings
and checks whether the characsters in the first string form a subsequence of the
characters in the second string.

In other words , the function should check whether the characters in the first string 
should appear somewhere in the second string, without their order changing.


*/

function isSubsequence(str1, str2) {

    var i = 0;
    var j = 0;

    if(!str1) return true;

    while(j < str2.length) {
        console.log(str1[i], str2[j])
        if(str2[j] === str1[i]) i++;
        if(i === str1.length) return true;
        j++;
    }
    return false;
}

console.log(isSubsequence("abc", "abracadabra"))