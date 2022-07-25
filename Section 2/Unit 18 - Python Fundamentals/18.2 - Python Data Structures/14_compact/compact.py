def compact(lst):
    compact_list = []
    for each in lst:
        if each: compact_list.append(each)
        
    return compact_list


print(compact([0,1,2,'',[],False,(),None,'All done']))    

"""Return a copy of lst with non-true elements removed.

    >>> compact([0, 1, 2, '', [], False, (), None, 'All done'])
    [1, 2, 'All done']
"""