from hashlib import new


def flip_case(phrase, to_swap):
    new_phrase = ''
    for letter in phrase:
        if letter == to_swap:
            if letter == letter.upper(): new_phrase += letter.lower()
            if letter == letter.lower(): new_phrase += letter.upper()
        else:
            new_phrase += letter
    
    return new_phrase
    
    

print(flip_case('Aaaahhh', 'a'))
print(flip_case('Aaaahhh', 'A'))
print(flip_case('Aaaahhh', 'h'))
    
    
    
"""Flip [to_swap] case each time it appears in phrase.

    >>> flip_case('Aaaahhh', 'a')
    'aAAAhhh'

    >>> flip_case('Aaaahhh', 'A')
    'aAAAhhh'

    >>> flip_case('Aaaahhh', 'h')
    'AaaaHHH'

"""
