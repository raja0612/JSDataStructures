/*

Radix sort is a special sort of algorithm that works on list of numbers.
*/

// helper functions

// this function returns the number at specified position from left
// getDigit(12345, 0) -> 5 getDigit(12345, 1) -> 4

function getDigit(num, pos) {
    return Math.floor(Math.abs(num) / Math.pow(10, pos)) % 10;
}

// this function returns no of digits in given number

function digitCount(num) {
    if(num === 0) return 1;
    return Math.floor(Math.log10(Math.abs(num))) +  1;
}

//This function returns the number of longest digits in given array
function mostDigits(nums) {
  let maxDigitCount = 0;

  for(let i = 0; i < nums.length; i++) {
      maxDigitCount = Math.max(maxDigitCount, digitCount(nums[i]));
  }
  return maxDigitCount;
}

function radixSort(nums) {

    // This count tells us number of iterations on array to sort
    let maxDigitCount = mostDigits(nums);

    for(let i = 0;  i < maxDigitCount; i++) {
        // digitBuckets is an array of arrays with index from 0 to 9
        let digitBuckets = Array.from({length: 10}, () => []);

        for(let j = 0; j < nums.length; j++) {
            // find digit to store in corresponding digitBuckets array index
            let digit = getDigit(nums[j], i);
            digitBuckets[digit].push(nums[j]);
        }
        // finally, re assing nums array with result
        nums = [].concat(...digitBuckets);
    }
    return nums;
}

console.log(radixSort([23,345,5467,12,2345,9852]));


/*
  [ 12, 23, 345, 2345, 5467, 9852 ]

  maxDigitCount = 4;

when outer loop i = 0;

digitCount [2, 3, 5, 5, 7, 2]  / for above array numbers first position from last

  [[], [], [12, 9852], [23], [], [345, 2345], [], [5467], [], [] ]


  when outer loop i = 1;

  digitCount [1, 2, 4, 4, 6, 5]  / for above array numbers second position from last

  [[], [12], [23], [], [345, 2345], [9852], [5467], [], [], [] ]

when outer loop i = 2;

  digitCount [0, 0, 3, 3, 4, 8]  / for above array numbers third position from last
    [[12, 23], [], [], [345, 2345], [5467], [], [], [], [9852], [] ]


when outer loop i = 3;

  digitCount [0, 0, 0, 2, 5, 9]  / for above array numbers third position from last
    [[12, 23, 345], [], [2345], [], [], [5467], [], [], [], [9852] ]


    after end of the loop

    result = [12, 23, 345, 2345,5467, 9852]


    Big O Time complexity

    Best Avg, worst : O(nk)
    n is number of sortings on given array elements
    k is the length of numbers array (size of array)

    n - length of array
    k - number of digits(average)

    Space Complexity
    O(n + k)

    But if we numbers are distinct
    Time complexity will be : O(nlogn)
*/