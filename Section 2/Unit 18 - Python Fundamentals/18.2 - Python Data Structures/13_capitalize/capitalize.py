def capitalize(phrase):
    new_phrase = ''
    for letter in range(len(phrase)):
        if letter == 0:
            new_phrase += phrase[letter].upper()
        else:
            new_phrase += phrase[letter]
    return new_phrase

print(capitalize('python'))
print(capitalize('only first word'))


"""Capitalize first letter of first word of phrase.

    >>> capitalize('python')
    'Python'

    >>> capitalize('only first word')
    'Only first word'
"""