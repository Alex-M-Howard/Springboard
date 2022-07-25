def intersection(l1, l2):
    intersect = []
    for each in l1:
        if each in l2: intersect.append(each)
    return intersect
    
    """Return intersection of two lists as a new list::
    
        >>> intersection([1, 2, 3], [2, 3, 4])
        [2, 3]
        
        >>> intersection([1, 2, 3], [1, 2, 3, 4])
        [1, 2, 3]
        
        >>> intersection([1, 2, 3], [3, 4])
        [3]
        
        >>> intersection([1, 2, 3], [4, 5, 6])
        []
    """
    
print(intersection([1,2,3], [2,3,4]))
print(intersection([1,2,3], [1,2,3,4]))
print(intersection([1,2,3], [3,4]))
print(intersection([1,2,3], [4,5,6]))