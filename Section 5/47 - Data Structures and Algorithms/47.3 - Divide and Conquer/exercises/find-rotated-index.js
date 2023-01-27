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


// With rotation count, I should know where to start, and I can shorten array. Does it matter?

//[6, 7, 8, 9, 1, 2, 3, 4] , 8
// I know rotation is 4
// check [3] and [4]. If target larger than [3] AND smaller than [4], doesn't exist in array
// If target < [3] -> target on left side potentially, else right side
// check each middle to find number and return index. If not found, return -1


function findRotatedIndex(arr, target) {

  let rotationIndex = findRotationCount(arr) - 1;
  let left, right
  
  if (arr[0] === target) return 0;
  if (arr[arr.length - 1] === target) return arr.length - 1;
  if (arr[rotationIndex] === target) return rotationIndex;
  if (arr[rotationIndex + 1] === target) return rotationIndex + 1;
  if (arr[rotationIndex - 1] === target) return rotationIndex - 1;
  if ((target > arr[rotationIndex] && target > arr[arr.length - 1]) || (target < arr[rotationIndex+1] && target < arr[0])) return -1;

   if (rotationIndex === 0){
       left = 0;
       right = arr.length - 1;
   } else if (arr[0] < target  && target < arr[rotationIndex]) { // Working on left
        left = 1;
        right = rotationIndex -1;
   } else if (arr[arr.length - 1] > target && target > arr[rotationIndex+1]) { // Working on right
        left = rotationIndex + 1;
        right = arr.length - 1;
   } 
   
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

    if (!left && !right) return -1; // Not found in array
    return arr[left] < arr[right] ? left : right - 1;


 }



module.exports = findRotatedIndex



