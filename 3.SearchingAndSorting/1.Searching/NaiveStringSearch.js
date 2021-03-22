/*


Long String  :  wowomgzomg   short string: omg


Loop Over the longer string
loop over the shorter string

if the characters don't match, break out of the inner loop
if the characters do match, keep going
if you complete the inner loop and find a macth
increment teh count of matches
Return the count


*/


function findSubString(long, short) {

    var count = 0;

    for(let i = 0;  i < long.length; i++) {

        for(let j = 0; j < short.length; j++) {

            if(short[j] !== long[i+j]) {
                break; // break out of inner loop
            }
            if(j === short.length - 1) {
                count++; // it means we found match
            }
        }
    }
    return count;
}

console.log(findSubString("wowomgzomg omg", "omg"));