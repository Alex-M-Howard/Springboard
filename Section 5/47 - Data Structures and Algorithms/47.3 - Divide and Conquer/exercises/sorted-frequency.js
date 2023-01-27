function sortedFrequency(arr, target) {
    let left = 0;
    let right = arr.length - 1;

    if (arr[0] > target || arr[arr.length-1] < target) return -1;

    let start, last;

    // Starting Index first
    while (left < right) {
        let middle = Math.floor((right + left) / 2);
    
        if (arr[middle] < target) {
            left = middle + 1;
        } else if (arr[middle] >= target) {
            right = middle - 1;
        }
    }
    
    start = left;
    right = arr.length - 1;
    
    // Find last index
    while (left < right) {
        let middle = Math.floor((right + left) / 2);

        if (arr[middle] <= target) {
            left = middle + 1;
        } else if (arr[middle] > target) {
            right = middle - 1;
        }
    }
    last = right;

    let count = last - start;
    return count || 1;
}

module.exports = sortedFrequency