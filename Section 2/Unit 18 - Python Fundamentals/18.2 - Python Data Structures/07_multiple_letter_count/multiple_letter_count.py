def multiple_letter_count(phrase):
    """Return dict of {ltr: frequency} from phrase.

        >>> multiple_letter_count('yay')
        {'y': 2, 'a': 1}

        >>> multiple_letter_count('Yay')
        {'Y': 1, 'a': 1, 'y': 1}
    """
    letter_count = {}
    for letter in phrase:
        if letter in letter_count: letter_count[letter] = letter_count[letter] + 1
        else: letter_count[letter] = 1
    
    return letter_count



print(multiple_letter_count('yay'))       
print(multiple_letter_count('Yay'))       
print(multiple_letter_count('What in tarnation is going on here?'))       