def mode(nums):
    """Return most-common number in list.

    For this function, there will always be a single-most-common value;
    you do not need to worry about handling cases where more than one item
    occurs the same number of times.

        >>> mode([1, 2, 1])
        1

        >>> mode([2, 2, 3, 3, 2])
        2
    """
    count = 0
    max = 0
    
    for each in nums:
        if nums.count(each) > count:
            count = nums.count(each)
            max = each
        
        return max
    
print(mode([1,2,1]))
print(mode([2,2,3,3,2]))