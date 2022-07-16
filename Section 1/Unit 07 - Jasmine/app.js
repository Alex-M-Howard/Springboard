function add_nums(nums) {
    let total = 0;
    if(typeof nums === 'number'){return nums}
    if(typeof nums === 'string'){return 'Invalid Input'}
    
    for (let num of nums) {
        total += num;
    }
    return total;
}
