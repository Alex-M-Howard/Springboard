// findRotatedIndex
// Write a function called findRotatedIndex which accepts a rotated array of sorted numbers and an integer. The function should return the index of num in the array. If the value is not found, return -1.

// Constraints:

// Time Complexity: O(log N)

// Examples:

// findRotatedIndex([3,4,1,2],4) // 1
// findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 8) // 2
// findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 3) // 6
// findRotatedIndex([37,44,66,102,10,22],14) // -1
// findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 12) // -1


// First, find middle -> Find rotation
// Is L < middle? Then rotation happens on right side Else Rotation happens on left side.



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




function findRotatedIndex(arr, target) {

    let rotationIndex = findRotationCount(arr);
    let left, right, middle;

    if (arr[rotationIndex - 1] === target) {
        return rotationIndex - 1;
    } else if (arr[rotationIndex - 1] < target) {
        left = rotationIndex;
        right = arr.length - 1;
    } else if (arr[rotationIndex - 1] > target) {
        left = 0;
        right = rotationIndex - 2;
    } else {
        left = 0;
        right = arr.length - 1;
    }
    console.log(left, right, arr[left], arr[right], target);
    while (left <= right) {
      let middle = Math.floor((left + right) / 2);

      if (arr[left] <= arr[middle]) {
        left = middle + 1;
      } else if (arr[left] > arr[middle]) {
        right = middle - 1;
      } else if (arr[left] === arr[middle]) {
        left = middle + 1;
      }
    }

    
    return arr[left] < arr[right] ? left : right;


 }



module.exports = findRotatedIndex



