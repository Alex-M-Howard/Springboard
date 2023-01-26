// Given an array of 1s and 0s which has all 1s first followed by all 0s, write a function called countZeroes, which returns the number of zeroes in the array.

// Constraints:

// Time Complexity: O(log N)

function countZeroes(arr) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        let middle = Math.floor((left + right) / 2);

        if (arr[middle] === 0) {
            right = middle - 1;
        } else {
            left = middle + 1;
        }
    }

    return arr.length - left;
}

module.exports = countZeroes