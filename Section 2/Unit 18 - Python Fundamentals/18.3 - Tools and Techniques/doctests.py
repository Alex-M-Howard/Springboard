def bounded_avg(nums):
    """
    Args:
        nums (list of integers): list containing integers

    Raises:
        ValueError: Error if number is lower than 1 or higher than 100

    Returns:
        float: sum of list divided by length -> average
    
    >>> bounded_avg([2,4,6])
    4.0
       
    >>> bounded_avg([10,20,30,40,50])
    30.0
    
    
        
    """
    for num in nums:
        if num < 1 or num > 100:
            raise ValueError("Outside bounds of 1-100")
        
    return sum(nums) / len(nums)