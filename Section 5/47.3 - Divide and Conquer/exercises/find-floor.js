// findFloor
// Write a function called findFloor which accepts a sorted array and a value x, and returns the floor of x in the array. 
//The floor of x in an array is the largest element in the array which is smaller than or equal to x.If the floor does not exist, return -1.

// Examples:

// findFloor([1,2,8,10,10,12,19], 9) // 8
// findFloor([1,2,8,10,10,12,19], 20) // 19
// findFloor([1,2,8,10,10,12,19], 0) // -1
// Constraints

// Time Complexity: O(log N)




function findFloor(arr, target) {
    if (target < arr[0]) return -1;
    if (target > arr[arr.length - 1]) return arr[arr.length - 1];

    let left = 0, right = arr.length - 1;

    while (left < right) {
        
        let middle = Math.floor((left + right) / 2);

        if (target <= arr[middle]) {
            right = middle - 1;
        }
        if (target >= arr[middle]) {
            left = middle + 1;
        }
    }

    return arr[left - 1];

}

module.exports = findFloor