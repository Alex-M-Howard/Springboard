/**
 * 
 * @param {Array} nums 
 * @returns Average of all nums in array
 */
const mean = (nums) => {
    let sum = 0;
    nums.forEach((num) => { sum += num; })

    return sum / nums.length;
}


/**
 * 
 * @param {Array} nums
 * @returns Number that occurs most in array 
 */
const mode = (nums) => {
    const mode = {};
    let max = 0;
    let count = 0;

    
    for (let num of nums) {
        if (mode[num]) {
            mode[num]++;
        } else {
            mode[num] = 1;
        }

        if (count < mode[num]) {
            max = num;
            count = mode[num];
        }
    }
    
    return max;
}


/**
 * 
 * @param {Array} nums
 * @returns Number that is in 'middle' of array (If even array, average of middles)
 */
const median = (nums) => {
    
    nums.sort((a, b) => a - b);

    if (nums.length % 2 === 0) {
      return (nums[nums.length / 2 - 1] + nums[nums.length / 2]) / 2;
    }

    return nums[(nums.length - 1) / 2];
}


module.exports = { mean, mode, median }