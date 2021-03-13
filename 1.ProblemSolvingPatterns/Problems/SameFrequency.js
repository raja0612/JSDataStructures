/*

sameFrequency(281, 182) true
sameFrequency(14, 34) false


FrequencyCounterPattern problem
*/


function sameFrequency(num1, num2) {
    let str1 = num1.toString();
    let str2 = num2.toString();

    if(str1.length !== str2.length) return false;

    let frequencyCounter1 = {};
    let frequencyCounter2 = {};


    for(let char of str1) {
        frequencyCounter1[char] = ( frequencyCounter1[char] || 0 ) + 1;
    }

    for(let char of str2) {
        frequencyCounter2[char] = ( frequencyCounter2[char] || 0 ) + 1;
    }

    for(let key in frequencyCounter1) {
        if(frequencyCounter1[key] !== frequencyCounter2[key]) return false;
    }

    return true;
}


console.log(sameFrequency(281, 182));
console.log(sameFrequency(14, 34));