// findRotationCount
// Write a function called findRotationCount which accepts an array of distinct numbers sorted in increasing order. The array has been rotated counter-clockwise n number of times. Given such an array, find the value of n.

// Constraints:

// Time Complexity: O(log N)

// Examples:

// findRotationCount([15, 18, 2, 3, 6, 12]) // 2
// findRotationCount([7, 9, 11, 12, 5]) // 4
// findRotationCount([7, 9, 11, 12, 15]) // 0

// Find MIN value, then index shows rotation

function findRotationCount(arr) {
  if (arr[0] < arr[arr.length - 1]) return 0;

  let left = 0,
    right = arr.length,
    min = arr[0];

  while (left <= right) {
    let middle = Math.floor((left + right) / 2);

    if (arr[left] <= arr[middle]) {
      // Means left side in order
      left = middle + 1;
    } else if (arr[left] > arr[middle]) {
      // Means right side in order
      right = middle - 1;
    } else if (arr[left] === arr[middle]) {
      left = middle + 1;
    }
  }

  return arr[left] < arr[right] ? left : right;
}

module.exports = findRotationCount
